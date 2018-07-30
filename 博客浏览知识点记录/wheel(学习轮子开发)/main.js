
// UMD规范  --  同时兼容了浏览器、Node环境及AMD规范，这样我们的代码使用UMD包装后就可以在不同的环境中运行了
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        //AMD. Register as an anonymous module.
        define([], factor);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return {};
}));



//对象合并
function extend(o,n,override){
    for(var p in n){
        if(n.hasOwnProperty(p) && !o.hasOwnProperty(p) || override){
            p[p] = n[p];
        }
    }
}

//默认参数
var options = {
    pageNumber:1,
    pageShow:2
}

//用户设置
var userOptions = {
    pageShow:3,
    pageCount:10
}

extend(options,userOptions,true);

// 合并后
options = {
    pageNumber:1,
    pageShow:2,
    pageShow:3,
    pageCount:10
}