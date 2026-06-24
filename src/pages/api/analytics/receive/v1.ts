import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const backendUrl = "http://localhost:3000/analytics/receive/v1";

  try {
    const body = await request.text();
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    return new Response(await response.text(), {
      status: response.status,
      headers: response.headers,
    });
  } catch {
    return new Response("proxy error", { status: 502 });
  }
};
