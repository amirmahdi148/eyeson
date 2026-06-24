import type { APIRoute } from "astro";

const BACKEND_BASE = "http://localhost:3000";

export const ALL: APIRoute = async ({ request, params }) => {
  const slug = params.slug || "";
  const backendUrl = `${BACKEND_BASE}/${slug}`;

  try {
    const body = request.body ? await request.text() : undefined;
    const headers: Record<string, string> = {};
    request.headers.forEach((value, key) => {
      if (key !== "host") headers[key] = value;
    });

    const response = await fetch(backendUrl, {
      method: request.method,
      headers: { ...headers, "Content-Type": "application/json" },
      body,
    });

    const responseBody = await response.text();
    return new Response(responseBody, {
      status: response.status,
      headers: {
        "content-type": response.headers.get("content-type") || "application/json",
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "proxy error" }), {
      status: 502,
      headers: { "content-type": "application/json" },
    });
  }
};
