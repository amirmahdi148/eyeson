import type { APIRoute } from "astro";

const BACKEND_BASE = "http://localhost:3000";

export const ALL: APIRoute = async ({ request, params }) => {
  const slug = params.slug || "";
  const queryString = new URL(request.url).search;
  const backendUrl = `${BACKEND_BASE}/${slug}${queryString}`;

  try {
    const contentType = request.headers.get("content-type") || "";
    const isMultipart = contentType.includes("multipart/form-data");
    console.log(`[Proxy] ${request.method} /${slug} content-type="${contentType}" isMultipart=${isMultipart}`);

    const headers: Record<string, string> = {};
    request.headers.forEach((value, key) => {
      if (key !== "host") headers[key] = value;
    });
    delete headers["content-length"];

    let response: Response;

    if (isMultipart) {
      const bodyBuffer = await request.arrayBuffer();
      response = await fetch(backendUrl, {
        method: request.method,
        headers,
        body: bodyBuffer,
      });
    } else {
      const body = ["POST", "PUT", "PATCH", "DELETE"].includes(request.method)
        ? await request.text()
        : undefined;

      response = await fetch(backendUrl, {
        method: request.method,
        headers: { ...headers, "content-type": "application/json" },
        body: body || undefined,
      });
    }

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
