function handler(_req: Request): Response {
  return new Response("Hello from Deno Deploy!");
}
Deno.serve(handler);