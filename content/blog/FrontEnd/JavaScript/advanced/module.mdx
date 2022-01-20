---
title: JS 模块
date: 2021-03-04 10:28:48
cover: https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/bg/module.png
tags: 
  - javascript
categories: 前端
---



## 模块化

> 除了上述两种方式可以体验到闭包，还有其他的方式的可以体验到闭包的强大之处么？模块

### 模块是什么

* 将一个程序分成功能不同的几块（文件），并组合到一块
* 这些块之间（文件）内部的实现是私有的，只是向外部抛出调用的API

**模块化的好处**

* 避免了命名冲突
* 高复用性，高维护性
* 更好的分离，按需加载

### 模块化的进化

**1.全局function模式**

把不同的功能封装成不同的全局函数, 但是缺点是全局命名可能会被污染，容易引起命名冲突

```javascript
function a() {};
function b() {};
```

**2.namespace模式**

简单的对象封装，减少全局变量，解决命名冲突，但是可以更改模块中的数据

```javascript
let myModule  = {
  name: 'nate',
  foo() {},
  bar() {}
}

myModule.name = 'wangbaoqi'
```

**IIFE模式 现代模块化基石**

立即执行函数可以实现一个封闭的作用域环境，这样解决了命名冲突，只能通过window向外抛出API，通过传参的形式可以依赖其他的模块

```javascript
(function(window, $) {
  let a = 'nate'
  let b = 'wangbaoqi'
  function foo() {
    console.log(a)
  }
  function bar() {
    console.log(b)
  }
  window.myModule = {
    foo: foo,
    bar: bar
  }
})(window, otherModule)
```

```markup
<!-- 引入的js必须有一定顺序 -->
<script type="text/javascript" src="jquery-1.10.1.js"></script>
<script type="text/javascript" src="myModule.js"></script>
<script type="text/javascript">
  myModule.bar()
</script>
```

引入过多的**script**会导致的问题

1. 请求过多
2. 文件一多，各个模块的依赖关系就会很模糊
3. 很难维护，各个模块的加载顺序可能会很乱

### 模块化规范

**commonJS**

nodeJS中采用的是commonJS规范，node是有很多模块组成的，每隔模块中的数据都是私有的，在server端，模块的运行时同步进行的，b端，需要提前编译打包好

特点： 1. 所有的模块都在模块作用域中，不会污染全局作用域 2. 模块第一次加载会缓存下来，第二次加载直接会读缓存，除非清掉缓存 3. 模块加载的顺序，是由代码决定的 4. 模块的加载时同步的，只有加载完模块，才能执行后面的操作

用法： 1. 导出：module.exports 或 exports 2. 引入：require

**模块的加载机制**

commonJS中 输入的值是输出的值得副本，也就是拷贝，一旦输出，模块外对此值更改不了了。这块跟ES模块有很大的不同

```javascript
// index.js
let count = 0;
function foo() {
  count++
}
module.exports = {
  count,
  foo
}
```

```javascript
// user.js
const {count, foo} = require('/index.js')
console.log(count) // 0
foo();
console.log(count) // 0 值得拷贝
```

**AMD**

AMD规范是非同步加载机制，允许指定的回调函数。如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用AMD规范

```javascript
// define
define(function() {
  function bar() {
    console.log('hello')
  }
  return { bar }
})
// 有依赖的模块
define(['module1', 'module2'], function(m1, m2) {
  return 模块
})
```



