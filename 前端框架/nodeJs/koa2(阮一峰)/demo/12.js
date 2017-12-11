const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');


//静态资源加载 插件的使用
const main = serve(path.join(__dirname));

app.use(main);
app.listen(3030);