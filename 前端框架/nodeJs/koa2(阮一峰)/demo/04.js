const fs = require('fs');
const koa = require('koa');
const app = new koa();

//返回模板文件
const main = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./template.html');
}

app.use(main);
app.listen(3030);