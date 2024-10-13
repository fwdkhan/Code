import { serve } from "https://deno.land/std@0.106.0/http/server.ts";

const server = serve({ port: 8000 });
console.log('HTTP server is running on http://localhost:8000');

for await (const req of server) {
  if (req.method === 'GET') {

    const jsonResponse = JSON.stringify({ message: 'This is a GET request!' });
    req.respond({
      body: jsonResponse,
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });

  } else if (req.method === 'POST') {
    req.respond({ body: 'This is a POST request!' });
  } else {
    req.respond({ status: 405, body: 'Method Not Allowed' });
  }
}