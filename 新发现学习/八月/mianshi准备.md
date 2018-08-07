1. HTML、css方面
   1. stylus、less、sass
2. js方面
   1. EventLoop
   2. 柯里化和反柯里化
   3. promise
   4. Generator 
   5. async和await
   6. class和设计模式(常用)
   7. 数组降维
   8.  Map、FlatMap 和 Reduce
3. 框架方面
4. 





小知识点：

* 内置类型
  * 0.1 + 0.2 ！= 0.3
  * NaN != NaN
  * 深拷贝和浅拷贝
  * 通过Object.prototype.toString.call(xx)来判断变量的正确类型

* 类型转换

  * [JS中的各种类型转换规则(转)](https://www.cnblogs.com/lmy-ms/p/4121564.html)
  * 加法运算，有字符串，转字符串。其他运算有数字，转换为数字。

* 原型

  * 指向创建该函数的构造函数的原型的`_proto_`就是原型链
  * 每个函数都有prototype属性，除了Function.prototype.bind(),该属性指向原型。
  * 每个对象都有`_proto_`属性，指向了创建该对象的构造函数的原型。其实这个属性指向了`[[prototype]]`，但是`[[prototype]]`是内部属性，我们并不能访问到，所以用`_proto_`来访问。
  * 对象可以通过`_proto_`来寻找不属于该对象的属性，`_proto_`将对象连接起来组成了原型链。
  * [三张图搞懂JavaScript的原型对象与原型链](https://www.cnblogs.com/shuiyi/p/5305435.html)

* new

  *  new的过程

    ```js
    function create() {
        // 创建一个空的对象
        let obj = new Object()
        // 获得构造函数
        let Con = [].shift.call(arguments)
        // 链接到原型
        obj.__proto__ = Con.prototype
        // 绑定 this，执行构造函数
        let result = Con.apply(obj, arguments)
        // 确保 new 出来的是个对象
        return typeof result === 'object' ? result : obj
    }
    ```

  * new的运算符优先级

    ```js
    function Foo() {
        return this;
    }
    Foo.getName = function () {
        console.log('1');
    };
    Foo.prototype.getName = function () {
        console.log('2');
    };
    
    new Foo.getName();   // -> 1
    new Foo().getName(); // -> 2      
    ```

* instanceof

  * [js中的instanceof运算符](https://www.cnblogs.com/SourceKing/p/5766210.html)

* this

  * call、apply、bind的使用
  * 箭头函数没有this,函数中的this取决于它外面第一个不是箭头函数的函数的this

* 执行上下文

  * [原型系列文章](http://www.cnblogs.com/wangfupeng1988/tag/%E5%8E%9F%E5%9E%8B%E9%93%BE/)
  * 自由变量找值，去创建该函数的作用域找，循环

* 闭包

  * 函数作为返回值
  * 把函数作为参数传递

* 深浅拷贝

  * 浅拷贝

    * Object.assign()

      ```js
      let a = {
          age: 1
      }
      let b = Object.assign({}, a)
      a.age = 2
      console.log(b.age) // 1
      ```

    * (...)

      ```js
      let a = {
          age: 1
      }
      let b = {...a}
      a.age = 2
      console.log(b.age) // 1
      ```

  * 深拷贝

    * JSON.parse(JSON.stringify(object)) 
      * 会忽略 `undefined`
      * 不能序列化函数
      * 不能解决循环引用的对象
    * lodash

* 模块化

  * commonJS
  * AMD
  * ES6

* 防抖和节流

  * 防抖动是将多次执行变为最后一次执行
  * 节流是将多次执行变成每隔一段时间执行

* call,apply,bind的区别

  * call,参数列表
  * apply,参数数组