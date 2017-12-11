const koa = require('koa');
const app = new koa();

const logger = (ctx,next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request}`);
  next();
}

const main = ctx => {
  ctx.response.body = 'Hello World!'
}

app.use(logger);
app.use(main);
app.listen(3030);