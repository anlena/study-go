var can, ctx, w, h;

var img = new Image();
var star = new Image();

var num = 100;
var starts = []; //存放星星的数组

var lastTime;
var deltaTime;

var switchy = false;
var alive = 0; //星星的显示状态，初始化为0
var px, py;

function init() {
    can = document.getElementById("canvas");
    ctx = can.getContext('2d');
    w = can.width;
    h = can.height;

    //初始化鼠标滑过事件
    document.addEventListener('mousemove', mousemove, false);

    img.src = "image/girl.jpg";
    star.src = "image/star.png";

    //初始化星星
    for (var i = 0; i < num; i++) {
        starts[i] = new starObj();
        starts[i].init();
    }

    //初始化上一帧的时间为当前时间
    lastTime = Date.now();

    gameloop();
}


function mousemove(e) {
    if (e.offsetX || e.layerX) {
        px = e.offsetX == undefined ? e.layerX : e.offsetX
        py = e.offsetY == undefined ? e.layerY : e.offsetY
        // 判断鼠标是否在 画布内
        if (px > 0 && px < 800 && py > 0 && py < 600) {
            switchy = true
        } else {
            switchy = false
        }
    }
    console.log(px + '-' + py + '-' + switchy);
}


function gameloop() {
    /* 做兼容, 循环调用gameloop，这里的requestAnimationFrame 方法封装在commonFunctions.js中*/
    window.requestAnimationFrame(gameloop);
    var now = Date.now(); //当前时间
    deltaTime = now - lastTime //时间差
    lastTime = now; //上一帧等于当前时间
    drawImage();
    drawStar();
    aliveUpdate();
}

//绘制图片
function drawImage() {
    ctx.drawImage(img, 0, 0, w, h);
}

document.body.onload = init;