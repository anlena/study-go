// 首先定义一个star的类
var starObj=function(){
	this.x;
    this.y;
    this.picnum;    //定义一个随机数
    this.timer;     //定义一个时间值
    // 定义个初速度
    this.xSpd;
    this.ySpd;
}

// 先来绘制一个看看效果
// function drawStar(){
//     ctx.drawImage(star,300,400);
// }


starObj.prototype.init = function(){
    //给星星一个随机位置
    this.x = Math.random() * 800;
    this.y = Math.random() * 600;

    //随机位置
    this.picnum = Math.floor(Math.random() * 7);
    this.timer = 0;     //初始化为0

    //位移，来个随机的上下左右
	this.xSpd=Math.random()*3-1.5 // [-1.5,1.5]
	this.ySpd=Math.random()*3-1.5
}

starObj.prototype.draw = function(){
    /*context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
    使用的图片，开始剪切的x位置，开始剪切的y的位置，被剪切的图片的宽，被剪切的图片的高，
    在画布上的x位置，在画布上的y的位置，要使用的图像的宽，要使用的图像的高*/

    // ctx.drawImage(star,this.x,this.y);

    ctx.save();

    //这里使用全局透明度，它会控制整个画布的透明度，也就是为什么要把这部分内容写在save和restore中
    ctx.globalAlpha = alive;

    ctx.drawImage(star,this.picnum*7,0,7,7,this.x,this.y,7,7)
    ctx.restore();
}

// 鼠标控制,使用全局透明度搭配save，restore使用
function aliveUpdate(){
	if(switchy){
		alive+=0.03*deltaTime*0.05
		if(alive>1){
			alive=1
		}
	}else{
		alive-=0.03*deltaTime*0.05
		if(alive<0){
			alive=0
		}
	}
}

starObj.prototype.update = function(){
    //星星移动
    this.x += this.xSpd * deltaTime*0.002;
    this.y += this.ySpd * deltaTime*0.002;

    //超出边界的星星重生
    if(this.x < 0 || this.x > 800){
        this.init();
        return;
    }

    if(this.y < 0 || this.y > 600){
        this.init();
        return;
    }


    this.timer += deltaTime;
    //当前时间大于50毫秒后，动画帧加1，且不超过7个
    if(this.timer > 50){
        this.picnum += 1;
        this.picnum %= 7;
        this.timer = 0;
    }

    //这里由于星星图片只有7个动画帧效果
    if(this.picnum >= 7){
        this.picnum = 0;
    }
}

// 绘制一个
function drawStar(){
    for(var i = 0;i < num;i++){
        starts[i].draw();
        starts[i].update();
    }
}