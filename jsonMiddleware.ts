import { Application } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

// Middleware to parse JSON body
app.use(async (context, next) => {
  if (context.request.hasBody) {
    const body = context.request.body();
    if (body.type === 'json') {
      const json = await body.value;
      context.state.data = json; // Store parsed data in state
    }
  }
  await next();
});

// Route that uses the parsed JSON
app.use((context) => {
  if (context.state.data) {
    context.response.body = `Received data: ${JSON.stringify(context.state.data)}`;
  } else {
    context.response.body = 'No JSON data received';
  }
});

await app.listen({ port: 8000 });
