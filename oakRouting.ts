import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();
const router = new Router();

router
  .get('/', (context) => {
    context.response.body = 'Welcome to the Home Page!';
  })
  .get('/about', (context) => {
    context.response.body = 'This is the About Page!';
  })
  .get('/api', (context) => {
    context.response.body = { message: 'Welcome to the API endpoint!' };
  });

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
