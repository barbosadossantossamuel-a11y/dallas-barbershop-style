import { createFileRoute } from "@tanstack/react-router";

const MEDIA_ORIGIN = "https://dallas-barbershop-go.lovable.app";
const ASSET_PATH = /^\/__l5e\/assets-v1\/[0-9a-f-]{36}\/[A-Za-z0-9._-]+$/;

async function serveMedia(request: Request) {
  const requestedUrl = new URL(request.url);
  const path = requestedUrl.searchParams.get("path");

  if (!path || !ASSET_PATH.test(path)) {
    return new Response("Mídia inválida", { status: 400 });
  }

  const headers = new Headers();
  const range = request.headers.get("range");
  if (range) headers.set("range", range);

  const upstream = await fetch(new URL(path, MEDIA_ORIGIN), {
    method: request.method === "HEAD" ? "HEAD" : "GET",
    headers,
  });

  if (!upstream.ok && upstream.status !== 206) {
    return new Response("Mídia indisponível", { status: upstream.status });
  }

  const responseHeaders = new Headers();
  for (const name of ["content-type", "content-length", "content-range", "accept-ranges", "etag", "last-modified"]) {
    const value = upstream.headers.get(name);
    if (value) responseHeaders.set(name, value);
  }
  responseHeaders.set("cache-control", "public, max-age=31536000, immutable");

  return new Response(request.method === "HEAD" ? null : upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  });
}

export const Route = createFileRoute("/api/public/media")({
  server: {
    handlers: {
      GET: ({ request }) => serveMedia(request),
      HEAD: ({ request }) => serveMedia(request),
    },
  },
});