import type { APIRoute } from "astro";
import { isRateLimited } from "@/lib/rateLimiter";

const BACKEND_URL = import.meta.env.PUBLIC_API_URL || "http://localhost:3000";

interface ReceivePayload {
  event?: string;
  path?: string;
  hash?: string;
  userAgent?: string;
}

export const POST: APIRoute = async ({ request }) => {
  const rateCheck = isRateLimited(request);
  if (rateCheck.limited) {
    return new Response(
      JSON.stringify({ received: false, reason: "rate limited" }),
      {
        status: 429,
        headers: {
          "content-type": "application/json",
          "retry-after": String(rateCheck.retryAfter ?? 60),
        },
      },
    );
  }

  let payload: ReceivePayload;
  try {
    payload = await request.json() as ReceivePayload;
  } catch {
    return new Response(
      JSON.stringify({ received: false, reason: "invalid json" }),
      { status: 400, headers: { "content-type": "application/json" } },
    );
  }

  if (!payload.event || !payload.path) {
    return new Response(
      JSON.stringify({ received: false, reason: "missing required fields" }),
      { status: 400, headers: { "content-type": "application/json" } },
    );
  }

  const eventType = String(payload.event).slice(0, 64);
  const pagePath = String(payload.path).slice(0, 2048);
  const userAgent = payload.userAgent ? String(payload.userAgent).slice(0, 512) : undefined;
  const hash = payload.hash ? String(payload.hash).slice(0, 128) : undefined;

  try {
    const body = JSON.stringify({
      event: eventType,
      path: pagePath,
      hash,
      userAgent,
    });

    const response = await fetch(`${BACKEND_URL}/analytics/receive/v1`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-forwarded-for": request.headers.get("x-forwarded-for") || "",
      },
      body,
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "content-type": "application/json" },
    });
  } catch {
    return new Response(
      JSON.stringify({ received: false, reason: "backend unreachable" }),
      { status: 502, headers: { "content-type": "application/json" } },
    );
  }
};
