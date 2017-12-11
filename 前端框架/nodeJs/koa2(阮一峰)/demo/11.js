const koa = require('koa');
const compose = require('koa-compose');
const app = new koa();

const logger = (ctx,next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
}

const main = ctx => {
  ctx.response.body = 'Hello World!';
}

const middlewares = compose([logger,main]);

app.use(middlewares);
app.listen(3030);