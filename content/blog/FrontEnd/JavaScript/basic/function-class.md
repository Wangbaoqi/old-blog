---
title: JS 函数、类
date: 2021-02-27 10:28:48
cover: https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/bg/function-class.png
tags: 
  - JavaScript
categories: 
  - JavaScript
---



> function 相当于一个'子程序'，由外部代码或者自身来调用。在 JavaScript 中，function 是一流的对象，可以像对象那样具有属性和方法。

## Function 函数

在 JavaScript 中，每个 function 都是一个`Function object`，都会继承其属性和方法。

```javascript
(function() {}.constructor === Function); // true
```

调用`Function`构造函数，可以创建 function 函数，尽管这种创建跟`eval`类似，但是通过这种方式创建的是可以在全局范围里调用的。

**_实例属性_**

1. `Function.arguments`: 与传递函数的参数对应的数组，可以在函数中调用`arguments`使用，不推荐将其作为参数传递。
2. `Function.length`: 指定函数期望的参数数目
3. `Function.name`: 函数的名称

**_实例方法_**

1. Function.prototype.apply(thisArg, argArray)
2. Function.prototype.call(thisArg, ...arg)
3. Function.prototype.bind(thisArg, ...arg)
4. Function.prototype.toString()

`function`可以接受传入参数，也可以返回值。如果在函数体内更改非引用类型的值时，外部对应的值时不会改变的，如果是引用类型的值，则是改变的、

### 定义函数

函数的定义通常有以下几种方式

1. 函数声明

函数声明也是常用的一种定义函数的方法

```javascript
function foo(params) {
  // statement
}
```

2. 函数表达式

函数表达式类似于函数声明，函数表达式可以为函数定义名称，也可以是匿名的。使用函数表达式不能在其之前使用它，因为它不会被挂起在作用域的开头。 创建命名函数表达式的好处是在追踪报错时，可以在堆栈信息中查到函数名称。

```javascript
var foo = function() {};
// 命名函数表达式
var foos = function bar() {};
// arrow function
var fooa = () => {};
```

3. IIFE（立即执行函数表达式）

当函数只需要执行一次时，就可以使用 IIFE 了，也可以用来解决作用域问题。

```javascript
(function foo() {
  // statement
})();
```

除此之外，定义函数可以在运行时中字符串中定义，类似于`eval`

4. 箭头函数

ES6中新增了箭头函数的概念，其功能跟普通函数基本一致，除了一下几种功能有所差异：

* 不能用作构造函数
* 不能使用 `arguments`   
* 不能使用 `new.target `  
* 没有原型 `prototype`  
* `this`  的指向不能显式的改变，是在定义时所在的对象
* 不能用作 `generator`  函数

上述几点中，this 的指向是比较重要的一点，这里赘述一下

箭头函数的 `this` 之所以指向其定义所在的对象，是因为箭头函数里就没有 `this` ，它的 this 来源于外层

```javascript
function foo() {
  this.a = 'this f'
  return () => {
    console.log(this.a);
  }
}
const bar = foo()
bar.call({a: 'nate'}) // 'this f'

// 嵌套多个箭头函数

function fooAll() {
  return () => {
    return () => {
      return () => {
        console.log(this.a); // window
      }
    }
  }
}
```

上述箭头函数中 `this` 是在其定义的时候定义的，也就是 `foo`  函数中的 `this` ，因为箭头函数没有 `this` ，因此调用 `call` 、`apply` 和 `bind` 都是无效的。初次之外，不管在箭头函数中嵌套了多少层，这些箭头函数只有一个 `this` ，也就是定义时所在对象。

### 函数参数

函数参数有显式形式和默认隐式形式，显式是直接命名式的传参，隐式的是通过 `arguments` 来获取参数或者修改参数，注意，在箭头函数中是无法获取 `arguments` 的。

arguments 是一个类数组，因此不管参数的数量有多少个或者没有，解析时也不会报错

```javascript
function foo(sum1, sum2) {
  arguments[1] = 10
  console.log(arguments[0], sum2)
}

foo(10); // 10 undefined
foo(10, 29); // 10 10
```

可以看到，在参数存在的情况下，**`arguments`** 是可以修改参数值，但是无法修改不存在的参数。

在箭头函数中，是不能使用 arguments 的，不过ES6中有扩展运算符可以将参数转换为数组的形式，也是方便传参的一种形式

在箭头函数中，是不能使用 arguments 的，不过ES6中有扩展运算符可以将参数转换为数组的形式，也是方便传参的一种形式

```javascript
const foo = (...list) => {
  // list 是数组
  return list.reduce((pre, cur, idx, arr) => {
    return pre + cur
  }, 0)
}
foo(1,2,3,4,5) // 15
```

```javascript
const foo = (...list) => {
  // list 是数组
  return list.reduce((pre, cur, idx, arr) => {
    return pre + cur
  }, 0)
}
foo(1,2,3,4,5) // 15
```

在一些场景下，可能需要**默认参数**来让代码更优美，但是要注意以下两点 

1. 默认参数的作用域  -  默认参数的赋值操作是在函数调用的时候执行的，其赋值的顺序跟 **`let` **声明的顺序是一致的
2. 存在暂时性死区 -  因默认参数的赋值是按顺序的，所以前面不能使用后者的变量

```javascript
function foo(name = 'nate', age = 18) {
  // ...
}

function foo1(name = anthor, anthor = 'bao') {
  // ...
}
foo1(); // Referewance Error
```

### 函数尾调用

函数尾调用是函数执行的**最后一步(不一定是函数尾部)**调用了函数

```javascript
function foo5() {
  // 尾调用
  return foo6();
}
function foo6() {
  return 'tail chain'
}

function foo5() {
  // 尾调用
  if(s > 2) {
    return foo6()
  }
  // 尾调用
  return foo6();
}


// 以下不是尾调用
function foo5() {
  return foo6() + 2
}
function foo5() {
  let res = foo6()
  return res
}
```

### 尾调用优化

由于尾调用特殊的位置，当执行尾调用函数时，此时当前函数已经执行完毕了，因此在调用栈中没有必要存在该函数的执行上文了，可以从调用栈中弹出。节省内存空间，这也就是 `尾调用优化 `  。

### 尾递归

尾递归在函数的执行的最后一步调用的是自身。可以想到，如果进行了尾调用优化，将节省多少的内存空间。注意：递归调用容易抛出 `栈溢出` 异常。

看一下阶乘函数

```javascript
function factorial(n) {
  if(n == 1) {
    return n
  }
  return n * factorial(n - 1)
}
```

上述计算阶乘的函数不是属于尾递归，这样存在的问题 - 如果 `n` 的量级很大，很有可能出现内存消耗过多，导致 `栈溢出`

### 优化成尾递归调用

```javascript
// 尾递归调用
function factorialT(n, total) {
  if(n == 1) return total;
  return factorialT(n - 1, n * total)
}
factorialT(2, 1)
```

所以，在递归中使用尾调用还是很有必要的。在 ES6 中，使用尾递归优化，就不发生 `栈溢出`

变量提升应该是一个在interview中出现频率很好的问题，me也不例外，但是怎么样才能完美的解释这个问题呢？

### 先有鸡还是先有蛋

我们直觉上JavaScript代码是按顺序执行的，但是这个不完全正确，特殊情况（var）。。

看个例子

```javascript
a = 3;
var a;

console.log(a); // ?
```

这个很有可能会认为是undefined，a 的声明是在a = 3之后，以为被重新赋值了，其实不然，真正输出的是 3

再看个例子

```javascript
console.log(b) // ?

var b = 2
```

这个例子的结果也很有可能会被认为抛出异常-renferenceError,但是结果并不是这样，真正输出 undefined。

刚开始学习JS的时候看到这个的时候可能会有很大的困惑。。。

但是掌握的JavaScript的执行顺序「会有单独的章节解释」的时候，这个问题可能会迎刃而解

接下来就从**编译器**的角度剖析这个提升这个问题

JavaScript引擎在执行（解释）一段代码之前，都会对其进行编译（编译器的工作），在编译阶段会找到所有的声明，并跟相关的作用域关联起来 - 这个也是词法作用域的关键

正确的思路是：在所有的声明包括变量和函数，在执行之前都会被优先处理。

可以看到上述的例子，执行的结果跟认为的大不相同，这个也就是**提升**的作用

注意：提升的只是声明，并不会改变代码的执行顺序

因此，先有蛋(声明)，后有🐔(赋值)

### 函数提升

除了变量提升之外，函数也是可以提升的，但是这里函数提升，只是函数声明会被提升，函数表达式并不会提升

```javascript
foo()
// 函数声明
function foo(){
  console.log(a) // undefined

  var a = 0;
}


bar() // TypeError
doo() // ReferencError
// 函数表达式(含有具名)
var bar = function doo() {
  console.log(4)
}
```

上述两个例子，可以看一下提升之后代码

```javascript
function foo() {
  var a 
  console.log(a)
  a = 0
}
foo();


var bar;
bar(); // TypeError
doo(); // RefenceError

bar = function() {
  var doo = ..self..
}
```

### 函数优先

如果有重复声明的代码中，函数的优先级要高于变量

```javascript
foo(); // 3

var foo;

function foo() {
  console.log(3)
}

foo = function() {
  console.log(2)
}
```

### 提升带来的问题

1. 变量在没有察觉的时候被覆盖了 

```javascript
var global = 'global'
function foo() {
  console.log(global)
  if(1) {
    var global = 'inner'
  }
  console.log(global)
}
foo()
```

**这个例子由于global=inner被提升了，因此，打印结果是 undefined inner**

下面改动一下：

```javascript
var global = 'global'
function foo() {
  console.log(global)
  if(1) {
    let global = 'inner'
  }
  console.log(global)
}
foo()
```

**上面将var改成了let, 因此有了块级作用域，变量将不能被提升，打印结果是 global global**

1. 本应该销毁的变量没有销毁

```javascript
function foo() {
  for(var i = 0; i < 6; i++) {
    // ...
  }
  console.log(i)
}
foo()
```

如果是c语言或者类似大部分语言，for循环结束之后，i变量就会销毁了，但是在JS中，并没有销毁，就是因为变量提升的原因

1. 变量函数同名时，函数声明会覆盖变量声明

```javascript
var a = 3;
if(1) {
  a = 4;
  function a() {};
  a = 21
  console.log(a)
}
console.log(a)
```

### JS是如何支持块级作用域的

众所周知，ES6 中的let和const都可以实现块级作用域，那么块级作用域和变量提升是怎么并存的呢？

可以看一段代码, 用执行上下文来解释：

```javascript
function foo() {
  let a = 1;
  var b = 2;
  if(1){
    let a = 3;
    var c = 4;
    let d = 5;
    console.log(a)
    console.log(b)
  }
  console.log(a)
  console.log(c)
  console.log(d)
}
foo()
```

![foo-执行上下文](https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/ctx/ctx.png)

通过图发现，在编译foo函数阶段，所有通过var声明的变量都在变量环境对象中，而通过let声明的变量只有 a = undefined，在词法环境中，在执行foo函数阶段，可以看到上图执行阶段，let声明的变量在词法环境中重新 开辟了一块，而此时的a变量是不会提升的.

## Class 类

**Class** 的出现会让 JS 的面向对象编程更像传统语言，是一种语法糖，让面向对象的实现更加清晰一点。

### constructor

**constructor**构造函数是类默认的方法，可以通过`new`命令生成实例时，自动调用此方法，如果没有显示定义该方法，空的**constructor**会被默认添加。

```javascript
class Foo {
  constructor() {}
}
let foo = new Foo();
Foo.prototype === foo.__proto__; //true
```

### 类的实例

类的实例通过调用`new`关键字产生的，实例上的属性除非是**显式**在构造函数中定义的，否则实例是获取不到的。只能从实例的原型中获取。

```javascript
class Foo {
  _bar = "bar"; // 实例属性新写法
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `x-${this.x},y-${this.y}`;
  }
  getValue() {
    return this.x;
  }
}
let foo = new Foo(3, 4);
foo.getValue(); // 3 调用原型中的方法
foo; // {x: 3, y: 4}
foo.__proto__; // { construtor: class Foo, toString: f, getValue: f}
foo.hasOwnProperty("x");
foo.hasOwnProperty("toString");
foo.hasOwnProperty("getValue");
```

### this 的指向

一般来讲，this 的指向是实例，但是有时结果就不一样了。

```javascript
class Foo {
  constructor() {
    // bind 方式绑定
    this.getBar = this.getBar.bind(this);
  }
  getBar() {
    return this.getRes();
  }

  getRes() {
    return "result";
  }
}
let foo = new Foo();
foo.getBar(); // 'result' 显式调用，this就是 当前实例 foo

const { getBar } = new Foo();
getBar(); // TypeError Cannot read property 'getRes' of undefined
```

后者显然是找不到当前的 this 了，因此可以在声明的时候，可以给对应的方法绑定**this**。React 中是不是也是这种方式呢？

```javascript
class Foo {
  constructor() {
    // bind 方式绑定
    this.getBar = this.getBar.bind(this);
  }
  getBar() {
    return this.getRes();
  }

  getRes() {
    return "result";
  }
}

// Arrow 函数 绑定this
class Foo {
  // class Field
  getBar = () => {
    return this.getRes();
  };
  getRes() {
    return "result";
  }
}

const { getBar } = new Foo();
getBar(); // result
```

### 静态方法

类的定义中，定义的方法都会被实例继承，而如果在方法前面加上`static`，则这个方法只有类本身可以访问。 静态方法中的**this**指向是当前类。静态方法可以通过**extends**来继承，静态方法也可以从**super**上调用的。

```javascript
class Foo {
  static bar() {
    return this.baz();
  }
  baz() {
    return "baz";
  }
  static baz() {
    return "static baz";
  }
}

class Bar extends Foo {
  constructor(props) {
    super(props);
    this.barProps = props;
  }
  static getBar() {
    return super.bar();
  }
}
Foo.bar(); //
let foo = new Foo();
let bar = new Bar();
```

### 静态属性

类的定义中，有了静态方法，那静态属性是怎么定义的，在**ES6**中明确确定，是没有静态属性的，不过在_提案_中，有了一种新方式，也是用`static`

```javascript
class Foo {
  fooName = "foo";
  // 新 静态属性
  static fooAge = 30;

  constructor() {
    this.bav = "bav";
  }
  bac() {}
  static bar() {
    return "bar";
  }
}

// 旧 静态属性
Foo.fooAge; // foo
```