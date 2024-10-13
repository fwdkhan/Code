import { serve } from "https://deno.land/std@0.106.0/http/server.ts";

const server = serve({ port: 8000 });
console.log('Server running at http://localhost:8000');

for await (const req of server) {
  const url = new URL(req.url, `http://${req.headers.get('host')}`);

  if (url.pathname === '/' && req.method === 'GET') {
    req.respond({ body: 'Welcome to the Home Page!' });
  } else if (url.pathname === '/about' && req.method === 'GET') {
    req.respond({ body: 'This is the About Page!' });
  } else if (url.pathname === '/api' && req.method === 'GET') {
    req.respond({
      body: JSON.stringify({ message: 'Welcome to the API endpoint!' }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
  } else {
    req.respond({ status: 404, body: 'Page Not Found' });
  }
}