// 异步操作 async函数

const fs = require('fs.promised');
const koa = require('koa');
const app = new koa();

const main = async function (ctx,next) {  
  ctx.response.type = 'html';
  ctx.response.body = await fs.readFile('./template.html','utf-8');
}