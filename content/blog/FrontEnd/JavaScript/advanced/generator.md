---
title: JS 迭代器与异步函数
date: 2021-03-02 10:28:48
cover: https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/bg/generator.png
tags: 
  - JavaScript
categories: 
  - JavaScript
---

## 迭代协议

> 作为ECMAScript 2015 的补充规范，迭代协议并不是新的内置实现或语法，而是_协议_。这些协议可以被任何遵循某些约定的对象来实现。

迭代协议分为两部分，可迭代协议和迭代器协议

### 可迭代协议

可迭代协议允许 JS 定制自身的迭代行为，可以通过`for of`来遍历，JS 也有一些内置的具有迭代器的对象，比如`Array`和`Map`，要实现迭代，必须实现`@@iterator`方法，也就意外着该对象或者其原型上有`@iteraor`属性。 该属性可以通过`[Symbol.iterator]`（一个无参数的函数，返回一个**符合迭代器**协议的对象）来获取。

每当迭代一个对象时，就会调用`@@iterator`方法，不带任何参数，使用返回的迭代器获取迭代的值。

```javascript
// 获取迭代器
let arr = [];
// 返回符合迭代器的对象的 0 参数函数
arr[Symbol.iterator]; // function() { Native Code }
arr[Symbol.iterator](); // Array Iterator {}
// Array Iterator {
  // next: {
    // done: false,
    // value: 2
  // }
}
```

### 迭代器协议

定义了产生一系列值，当所有值产生时，可能会产生一个返回值。当一个对象实现了具有`next`方法时，它就是一个迭代器。

```javascript
// 迭代器对象
const iteratorObj = {
  next() {
    return {
      done: false,
      value: ''
    }
  },
  [Symbol.iterator]() { return this }
}
```

一些内置可迭代的对象，也是迭代器，比如，`String`、`Array`、`Map`等。Object是没有实现迭代器协议的，如果想使用for of 来遍历对象，可以自定义的实现内部的迭代器协议。

```javascript
const object = {
  a: 1,
  b: {},
  c: '3',
  d: [],
  [Symbol.iterator]() {
    const _this = this;
    let idx = 0;
    const keys = Object.keys(_this);
    return {
      next() {
        value: _this[keys[idx++]]
        done: idx > keys.length,
      }
    }
  }
}
```

### 生成器函数

生成器也是ES6增加的一个灵活的数据结构，可以暂停和恢复代码的执行。可以自定义迭代器和实现协程。

`function *` 定义了一个 generator 函数，返回一个`Generator`对象，`Generator`对象由`Generator`构造函数返回，符合_迭代协议_和_迭代器协议_，它是一个可以退出又重新进入的函数

调用`Generator`函数不会立即执行，而是会返回该函数的迭代器对象，当调用迭代器对象的`next()`方法，会执行生成器函数的函数体，直到`yield`表达式，该表达式指定从迭代器返回的值，或者`yield*`将值委托给另一个生成器函数。

```javascript
// 简单的生成器函数
function* generator() {
  let index = 0;
  while (true) {
    yield index++;
  }
}
let gen = generator();
gen.next(); // { value: 0, done: false }
gen.next(); // { value: 1, done: false }
gen.next(); // { value: 2, done: false }
// ...

// yield* 委托
function* anGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generators(i) {
  yield i;
  yield* anGenerator(i);
  yield i + 10;
}
let gen1 = generators(1);
gen1.next(); // { value: 1, done: false }
// excute anGenerator function
gen1.next(); // { value: 2, done: false }
gen1.next(); // { value: 3, done: false }
gen1.next(); // { value: 4, done: false }
// go on excute genarators
gen1.next(); // { value: 11, done: false }
gen1.next(); // { value: undefined, done: true }

// 传参数到generator function
function* generatorParam() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}
let parGen = generatorParam();
parGen.next();
parGen.next("nate"); // 1, nate { value: 'undefined', done: false }
parGen.next("nate wang"); // 2, nate wang { value: 'undefined', done: false }
parGen.next("nate wangbao"); // 3 nate wangbao { value: 'undefined', done: false }

// 函数体中使用return 语句
function* reGenetator() {
  yield "baoqi";
  return "nate";
  yield "wang";
}
let reGen = reGenetator();
reGen.next(); // { value: 'baoqi', done: false}
reGen.next(); // { value: 'nate', done: true}
reGen.next(); // { value: 'undefiend', done: true}
```

### Async 函数

async 函数是由构造函数`AsyncFunction`的实例，函数体内可以使用关键字`await`，返回一个`promise`，如果返回值不是显示的`promise`，则会返回一个隐式的`promise`。当函数体中有多个 `await`表达式时，整个进度会被暂时挂起，同步的执行`await`表达式，等待异步的执行结果，异步执行结束之后，进度会被恢复。

可以在异步函数周围使用`try catch`块，捕捉异常。

```javascript
// async Function
async function foo() {
  return 1;
}
foo(); // Promise{<resolved>: 2}

// 等同于
function bar() {
  return Promise.resolve(1);
}
bar(); //Promise{<resolved>: 2}
```

每个`await`表达式后面的代码可以认为存在于`.then`回调中，也就是说`await`表达式返回的是一个`promise`.

```javascript
async function foo() {
  const resNor = await 1;
  const resAwa = await new Promise((resolve, reject) =>
    setTimeout(() => resolve("setTime"))
  );
  console.log(resNor);
  console.log(resAwa);
}
foo(); // 1, 'setTime'
```

在执行`foo`异步函数时，会返回_Promise_，因此在遇到异常时，可以使用`catch`来捕捉错误。

```javascript
async function bar() {
  const p1 = new Promise((resolve, reject) => setTimeout(() => resolve('setTime1')));
  // 发生异常
  const p2 = new Promise((resolve, reject) => setTimeout(() => reject('setTime2')));
  const res = [await p1, await p2]
}
// 捕捉异常
bar().catch(res => console.log(res))；
```

**async function 执行顺序**

_await 和 parallelism\(等待和并行\)_

遇到`await`表达式，就意外着这个线程的控制会暂停，等待`await`后面的表达式执行，待执行完成，线程才会继续执行。

```javascript
// setTimeout slow
function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
}
// setTimeout slow
function resolveAfter1Second() {
  console.log("starting fast promise");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("==SEQUENTIAL START==");
  // 1. Execution gets here almost instantly
  const slow = await resolveAfter2Seconds();
  console.log(slow); // 2. this runs 2 seconds after 1.

  const fast = await resolveAfter1Second();
  console.log(fast); // 3. this runs 3 seconds after 1.
}

async function concurrentStart() {
  console.log("==CONCURRENT START with await==");
  const slow = resolveAfter2Seconds(); // starts timer immediately
  const fast = resolveAfter1Second(); // starts timer immediately

  // console.log(await slow) // 2. this runs 2 seconds after 1.
  // console.log(await fast) // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved

  // once has more task need to parallelism, best way to use Promise.all
  const promise = Promise.all([slow, fast]);
  promise
    .then((res) => {
      console.log(res, "res");
    })
    .catch((err) => {
      console.log(err, "error");
    });
}
sequentialStart(); // function await
concurrentStart(); // function parallelism
```

上述_resolveAfter2Seconds_和_resolveAfter1Second_是返回 Promise 的具有定时器功能的方法。

`sequentialStart`异步方法则是采用`await`的方式依次的执行上述两个方法。

`concurrentStart`异步方法则是采用`Primise.all`并行执行的的方式执行上述两个方法。

**return await foo 和 return foo 的区别**

如果一个`async`函数没有显示的返回`return`，则会隐式的返回`Promise.resolved`，如果返回的结果有`value`，则会将这个`value`包装到 Promise 中，状态是`resolved`。

`return await foo`则会等待解析 foo，如果 foo 是**Promise**，有可能会**reject**，所以`await`后面会`throwError`，而`return foo`不会报错，而且是立即返回结果。所以在处理`return await foo`的时候，可以采用`try catch`的方式来捕捉错误。

```javascript
// return await and return
async function getProcess() {
  try {
    return await resolveAfter2Seconds();
  } catch (error) {
    return null;
  }
}
let pro = getProcess(); // Promise { [[PromiseStatus]]: "resolved", [[PromiseValue]]: "slow"}
```



