import type { APIRoute } from "astro";

const BACKEND_BASE = "http://localhost:3000";

export const ALL: APIRoute = async ({ request, params }) => {
  const slug = params.slug || "";
  const backendUrl = `${BACKEND_BASE}/${slug}`;

  try {
    const req = request.clone();
    const body = ["POST", "PUT", "PATCH", "DELETE"].includes(request.method)
      ? await req.text()
      : undefined;

    const headers: Record<string, string> = {};
    request.headers.forEach((value, key) => {
      if (key !== "host") headers[key] = value;
    });
    delete headers["content-length"];

    const response = await fetch(backendUrl, {
      method: request.method,
      headers: { ...headers, "content-type": "application/json" },
      body: body || undefined,
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
