;//Javascript 弱语法的特点，如果前面刚好有个函数没有以“;”结尾，那么可能会有语法错误
(function(root,factory){
    if(typeof define === 'function' && define.amd){
        define([],factory);
    }else if(typeof module === 'object' && module.exports){
        module.exports = factory;
    }else{
        root.Plugin = factory;
    }
}(typeof self !== "undefined" ? self : this,function(){
    'use strict';

    //tool
    function extend(o,n,override){
        for(var p in n){
            if(n.hasOwnProperty(p) && (!o.hasOwnProperty(p) || override)){
                o[p] = n[p];
            }
        }
    }

    //polyfill
    var EventUtil = {
        addEvent:function(element,type,handler){
            //添加绑定
            if(element.addEventListener){
                //使用DOM
            }
        }
    }
}))  
