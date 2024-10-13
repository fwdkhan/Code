import { Application } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

// Middleware function to log requests
app.use(async (context, next) => {
  console.log(`HTTP ${context.request.method} on ${context.request.url}`);
  await next(); // Pass the request to the next middleware or route
});

// Basic route
app.use((context) => {
  context.response.body = 'Hello, World!';
});

await app.listen({ port: 8000 });

