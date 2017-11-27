const koa = require('koa');
const app = new koa();

const main = ctx => {
  console.log(`${Date.now()}---${ctx.request.method}--${ctx.request.url}`)
}

app.use(main);
app.listen(3030);