function handler(_req: Request): Response {
  return new Response("Hello from Deno Deploy v2!");
}
Deno.serve(handler);