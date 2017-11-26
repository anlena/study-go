const koa = require('koa');
const app = new koa();

const main = ctx => {
  //判断返回给客户端的数据类型
  if(ctx.request.accepts('xml')){
    ctx.response.type = 'xml';
    ctx.response.body = '<data>Hello world!</data>'
  }else if(ctx.request.accepts('json')){
    ctx.response.type = 'json';
    ctx.response.body = {data:'Hello world!'}
  }else if(ctx.request.accepts('html')){
    ctx.response.type = 'html';
    ctx.response.body = '<p>Hello world!</p>';
  }else{
    ctx.response.type = 'text';
    ctx.response.body = 'Hello world!'
  }
}


app.use(main);
app.listen(3030);