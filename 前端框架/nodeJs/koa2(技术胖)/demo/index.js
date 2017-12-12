const Koa = require("koa");
const app = new Koa();

app.use(async(ctx) => {
  ctx.body = 'Hello Koa';
})

app.listen(3030);
console.log('[demo] start-quick is starting at port 3000');