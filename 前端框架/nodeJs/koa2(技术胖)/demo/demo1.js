const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {

  // 从request中获取GET请求
  let url = ctx.url;
  let request = ctx.request;
  //格式化好的参数对象
  let req_query = request.query;
  // 请求字符串
  let req_quertstring = request.querystring;


  //从上下文中直接获取
  let ctx_query = ctx.query;
  let ctx_querystring = ctx.querystring;


  ctx.body = {
    url,
    req_query,
    req_quertstring,
    ctx_query,
    ctx_querystring
  }
})

app.listen(3000, () => {
  console.log('[demo] server is starting at port 3000');
})