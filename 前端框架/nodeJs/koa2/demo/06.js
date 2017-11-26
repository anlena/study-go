const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

//使用koa-route

const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
}

const main = ctx => {
  ctx.response.body = 'Hello World!';
}

app.use(route.get('/',main));
app.use(route.get('/about',about));

app.use(main);
app.listen(3030);