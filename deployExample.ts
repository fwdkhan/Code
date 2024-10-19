function handler(_req: Request): Response {
  return new Response("Welcome to my updated Deno app!");
}
Deno.serve(handler);