import type { APIRoute } from "astro";

export const GET: APIRoute = ({ request }) => {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "127.0.0.1";
  return new Response(JSON.stringify({ ip }), {
    headers: { "content-type": "application/json" },
  });
};
