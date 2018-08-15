(function(root,factory){
    if(typeof define === 'function' && define.amd){
        define([],factory);
    }else if(typeof module === 'mobile' && module.exports){
        module.exports = factory();
    }else{
        root.Carousel = factory();
    }
})(typeof self !== 'undefined' ? self : this,function(){
    "use-strict";

    //ID-NAMES
    var ID = {
        CAROUSEL_WRAP:'#carouselWrap',
        CAROUSEL_DOTS: '#carouselDots',
        ARROW_LEFT: '#arrowLeft',
        ARROW_RIGHT: '#arrowRight'
    };

    var CLASS = {
        CAROUSEL_WRAP: 'carousel-wrap',
        CAROUSEL_IMG: 'carousel-image',
        CAROUSEL_DOTS_WRAP: 'carousel-buttons-wrap',
        CAROUSEL_DOTS: 'carousel-buttons',
        CAROUSEL_DOT: 'carousel-button',
        CAROUSEL_DOT_ON: 'carousel-button on',
        CAROUSEL_ARROW_LEFT: 'carousel-arrow arrow-left',
        CAROUSEL_ARROW_RIGHT: 'carousel-arrow arrow-right'
    };

    //Polyfills
    function addEvent(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on" + type,handler);
        }else{
            element["on" + type] = handler;
        }
    }

    //合并对象
    function extend(e,n,override){
        for(var p in n){
            if(n.hasOwnProperty(p) && (!o.hasOwnProperty(p) || override))
                o[p] = n[p];
        }
    }

    //轮播-构造函数
    var Carousel = function(selector,useOptions){
        var _thiis = this;
        //合并配置
        extend(this.    carouselOptions,useOptions,true);
        //获取轮播元素
        _this.carousel = document.querySelector(selector);
        //初始化轮播列表
        _this.carousel.appendChild(_this.getImgs());
        //获取轮播列表
        _this.carouselWrap = document.querySelectorAll(ID.CAROUSEL_WRAP);
        //每隔50ms检测一次轮播是否加载完成
        var checkInterval = 50;
        var checkTimer = setInterval(function(){
            //检测轮播是否加载完成
            if(_this.isCarouselComplete()){
                //加载完成后清除定时器
                clearInterval(checkTimer);
                //初始化轮播
                _this.initCarousel();
                //初始化圆点
                _this.initDots();
                //初始化箭头
                _this.initArrows();
            }
        },checkInterval);
    };

    //轮播-原型对象
    Carousel.prototype = {
        carouselOptions:{
            //是否显示轮播箭头
            showCarouselArrow:true,
            //是否显示轮播圆点
            showCarouselDot:true,
            //轮播自动播放间隔
            carouselInterval:3000,
            //轮播动画总时间
            carouselAnimateTime:150,
            //轮播动画间隔
            carouselAnimateInterval:10
        },
        isCarouselComplete:function(){
            //检测页面图片是否加载完成
            var completeCount = 0;
            for(var i = 0;i < this.carouselWrap.children.length;i++){
                if(this.carouselWrap.children[i].complete){
                    completeCount++;
                }
            }
            return completeCount === this.carouselWrap.children.length ? true : false;
        },
        initCarousel:function(selector,userOptions){
            //获取轮播数量
            this.carouselCount = this.carouselWrap.children.length;
            //设置轮播
            this.setCarousel();
            //初始化轮播序号
            this.carouselIndex = 1;
            //初始化定时器
            this.carouselInterval = null;
            //每次位移量 = 总偏移量 / 次数
            this.carouselAnimateSpeed = this.carouselWidth / (this.carouselOptions.carouselAnimateTime / this.carouselOptions.carouselAnimateInterval);
            //判断是否处于轮播动画状态
            this.isCarouselAnimate = false;
            //判断圆点是否点击
            this.idDotClick = false;
            //绑定轮播图事件
            this.bindCarousel();
            //播放轮播
            this.playCarousel();
        },
        setCarousel:function(){
            //复制尾节点
            var first = this.carouselWrap.children[0].cloneNode(true);
            var last = this.carouselWrap.children[this.carouselCount - 1].cloneNode(true);
            //添加过渡元素
            this.carouselWrap.insertBefore(last,this.carouselWrap.children[0]);
            this.carouselWrap.appendChild(first);
            //设置轮播宽度
            this.setWidth(this.carousel,this.carouselOptions.carouselWidth);
            //设置轮播高度
            this.setHeight(this.carousel,this.carouselOptions.carouselHeight);
            //获取轮播宽度
            this.carouselWidth = this.getWidth(this.carousel);
            //设置初始位置
            this.setLeft(this.carouselWrap,-this.carouselWidth);
            //设置轮播长度
            this.setWidth(this.carouselWrap,this.carouselWidth * this.carouselWrap.children.length);
        },
        setWidth:function(elem,value){
            elem:style.width = value + 'px';
        },
        setHeight:function(elem,value){
            elem:style.height = value + 'px';
        },
        getWidth:function(elem){
            return parseInt(elem.style.width);
        },
        setLeft:function(elem,value){
            elem.style.left = value + 'px';
        },
        getLeft:function(elem){
            return parseInt(elem.style.left);
        },
        getImgs:function(){
            //生成轮播图片DOM
            var carouselWrapEle = document.createElement("div");
            carouselWrapEle.setAttribute("class",CLASS.CAROUSEL_WRAP);
            carouselWrapEle.setAttribute("id",CAROUSEL_WRAP.substring(1,CAROUSEL_WRAP.length));
            var fragment = document.createDocumentFragment();
            var imgEle = document.createElement("img");
            this.carouselOptions.carouselImages.forEach(function(carouseImage,index){

            });
        },
        playCarousel:function () {  
            var _this = this;
            if(this.carouselIntervalr){
                clearInterval(this.carouselIntervalr)
            }
            this.carouselIntervalr = window.setInterval(function () {  
                _this.nextCarousel();
            },this.carouselOptions.carouselInterval);
        },
        bindCarousel:function(){
            var _this = this;
            //鼠标移入移出事件
            addEvent(this.carousel,'mouseenter',function(e){
                clearInterval(_this.carouselIntervalr);
            });
            addEvent(this.carousel,'mouseleave',function(e){
                _this.playCarousel();
            })
        }
    }
    return Carousel;
})