---
title: JS 期约Promise
date: 2021-03-01 10:28:48
cover: https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/bg/promise.png
tags: 
  - javascript
categories: 前端
---


## 异步编程

异步编程是一个关注度很高的话题，也是一个很重要的一个知识点，尤其是在JavaScript 这种单线程语言中，为了提高执行效率，异步编程的版本也是不断的演化中。

在早期的ECMAScript的版本中，用回调函数来解决异步操作，但是这种回调函数嵌套的太多（回调地狱），对于代码的维护成本变的异常高，随着ES6版本的出现，在异步编程方向也出现了广受欢迎的一种方案（期约），随着ECMAScript的版本不断迭代，又出现了 异步函数（async function）。

先来看看早期JavaScript是如何实现异步编程的

## 回调

**回调 **这个概念想必已经深入人心了，应用的场景已经非常多了（事件监听、Ajax请求）等等。那什么是 **回调 **呢？

回调其实**就是将来要发生的事**，比如事件监听的回调函数、异步请求的回调函数，这些都是在不确定的将来发生的。在**期约（承诺）**没有出现之前，JavaScript中都是使用回调来处理异步的，也就是**回调是JS的最基本的异步模式。**

**回调存在的问题**

1. **执行顺序**

JS 是一门单线程的语言，在同步代码块上是线性、阻塞式执行的。由于事件循环的存在，异步代码块会暂存在**任务队列**中**，等主线程任务执行完毕之后，会按顺序执行任务队列中的代码块。**

回调函数也是暂存在**任务队列**中，它的执行时非线性、非阻塞式的。因此想要准确的判断回调何时执行，是非常困难的，这样做也容易出现bug。

同样如果回调函数嵌套了，那手动的编码了所有可能事件和路径（回调函数的异常和正确处理），代码就会变的很复杂且难以维护（每一个回调都有重复的异常处理以及不同业务的处理，显得很冗余）。**回调地狱的真正问题所在**

因此对于我们大脑的思考方式来讲，更加需要一种同步的、顺序的、更阻塞的方式来表达异步。

1. **信任问题**

信任问题是基于**控制反转（将自己一部分的代码块的控制交给了第三方，第三方的代码或者库并不是由你维护的）**的，因此，这种场景下，是很容易出现信任问题的，如果一些第三方的库存在bug，此时对于你的产品也是有一定的影响的。

因此我们需要一个通用的方案来解决信任问题，不管创建多少回调，都可以复用且没有重复的代码。

随着异步编程的领域的发展，回调也逐渐的暴露出的问题难以更优雅的解决异步，随着ES6 的到来，也出现了一种更高级、功能更加强大的异步模式（期约）。

## 期约

期约（对尚不存在的结果的替身），其应用也就是 `Promise` 

**Promise** 产生的原因就是为了**更好的**解决回调所带来的的**执行顺序**和**信任问题。**

**Promise **通过**链式调用（then）**将异步操作以**同步**的方式展示，直观看来执行顺序更符合我们人脑的思维，但是内部的实现还是回调的方式。

**Promise** （承诺）也完美的解决了信任问题，将回调中存在的**控制反转**问题再次**反转，**也就是将第三方调用的回调函数**承诺**给了一个**机构（Promise），**通过**期约状态机**在未来的某个时刻将这个**承诺**原封不动的返回，将信任问题不在交由第三方库，而是由自己手动来掌控。

**Promise **的实现也是完全遵循[**Promise/A+**](https://promisesaplus.com)规范。后面会手动[实现Promise](<../../source code/javascript-api/promise 实现篇.md>)，以便更好的理解Promise异步机制。

### 期约状态机 

期约有三种状态，pending（待定）、fulfilled（兑现、已解决）以及 rejected（已拒绝）。

期约一开始处于待定状态，通过执行函数来控制状态的流转，只有两种可能的流转`pending - fulfilled `和 `pending - rejected`  ，并且都是**不可逆**的，只要状态改变为fulfilled或者rejected，**期约状态都不能在改变的。**

### 执行函数

执行函数就是改变期约状态的函数，也就是常见的 `resolve` 和 `reject`  

`resolve` 是将待定状态改变为兑现或者已解决状态。

`reject` 是将待定状态改变为已拒绝状态

```javascript
const promise = new Promise((resolve, reject) => {
  // console.log('promise create');
  resolve('resolved')
})
const promise1 = Promise.resolve('resolved')
// promise 和 promise1 期约状态结果是一致的
```

期约的状态开始不一定是 `pending` 的，是由执行函数来决定。

### 期约实例方法

期约的实例方法是连接**外部同步代码**和**内部异步代码**的桥梁。可以处理期约成功或者失败的数据，连续对期约求值。

这些方法可以**访问异步操作返回的数据，**具体可以看源码实现。

#### then

期约实例方法 `then` 是比较重要的一个方法，可以获取到执行器函数传递的参数。

接收两个参数（可选），`onResolved`  和 `onRejected`  函数，前者处理期约状态为 `resolve` ，后者处理期约状态为 `reject` ，如果传递非函数的参数，都会静默不会处理。如果只处理期约状态只为 `reject` ，第一个参数传 `undefined` 。

返回一个新的期约实例（promise）。

```javascript
const promise = new Promise((resolve, reject) => {
   resolve('right control')
})
.then((res) => {
   console.log(res); // right control
})
.then((v) => {
   console.log(b) // undefined
})
```

#### catch

期约实例方法 catch 用于指定出错的回调，是特殊的 `then` ，`promise.then(null, reject)` ，之后可以继续链式调用

```javascript
promise.then(res => {
   console.log(result)
})
.catch(e => {
   console.log(e); // ReferenceError result is not defined
})
// or 
promise.then(res => {
   console.log(result)
})
.then(null, e => {
   console.log(e); // ReferenceError result is not defined
})
```

#### finally

期约实例方法 `finally` 不管之前的状态是什么，都会执行的，这个是**ES7（ES2018）标准引入的。**

`finally` 回调函数不接受任何参数，跟 `promise` 的状态是无关的。并且返回一个新的 `promise` 对象，可以链式调用

```javascript
promise.then(res => {
  return res
})
.finally(() => {
  return 'finally'
})
.then(res => {
  console.log(res); // right control
})
```

可以看到 `finally` 里回调函数返回任何类型，下一个 `then` 都不会获取到

### 期约实例方法


#### Promise.all

`Promise.all` 将多个 `promise` 实例包装成一个新的期约实例。Promise.all 接受一个数组为参数，数组内部为期约实例。

```javascript
const p = Promise.all([p1,p2,p3])
```

`Promise.all `的状态由其多个期约实例决定

* 如果`p1`、`p2`、`p3`的状态都是 `fulfilled` ，则 `p` 的状态为 `fulfilled` 
* 如果 `p1`、`p2`、`p3` 中有一个状态为`reject` ， 则 `p `的状态为 `rejected` 

#### Promise.race

`Promise.race` 跟 `Promise.all` 类似，只不过 `race` 的状态跟 `all` 稍有点区别。

```javascript
const p = Promise.race([p1,p2,p3])
```

Promise.race 的状态取决于`p1`、`p2`、`p3` 谁的状态先改变，首先改变的实例的状态就是最终的状态。

#### Promise.resolve


#### Promise.reject

### 期约非重入

**非重入**其实就是**期约实例方法的执行顺序。**

当期约的状态落定后（不管执行的位置），处理对应的期约状态的实例方法会等到**当前同步代码执行结束**之后才会执行。这个就涉及到了JavaScript的 `Runtime` 了。

```javascript
let pp1 = Promise.resolve()
pp1.then(() => { 
  console.log('pp1 then');
})
console.log('pp1 log');
// pp1 log
// pp1 then
```

上述首先创建 `resolved` 的期约 ，然后在 `then`上调用 `onResolved` 的执行代码（此时JavaScript引擎会将 `onResolved` 推入到消息队列中，等待当前一次 **EventLoop **中的同步代码执行结束，再去执行当前循环中的微任务，而`onResolved` 正好是在当前循环的微任务队列中），最后看到执行结果跟想象的不一致，就是** 非重入** 的原因。

```javascript
let foo;
let pp1 = new Promise((resolve, reject) => {
  foo = function() {
    console.log('pp1 resolve before');
    resolve();
    console.log('pp1 resolve after');
  }
})
pp1.then(() => { 
  console.log('pp1 then');
})
foo();
console.log('pp1 foo() excute');

// pp1 resolve before
// pp1 resolve after
// pp1 foo() excute
// pp1 then
```

再来看上述例子，期约状态落定是在 调用 `then` 实例方法上的 `onResolved` 之后，结果还跟 **非重入** 特性一致。

### 期约扩展

期约规定，一旦期约状态落定，是不可更改的。因此期约也不是完美的，主要体现在 **期约取消 **和 **进度追踪**。

#### 期约取消

ES6 规定，期约是具有“激进型”的特性，一旦开始，不会取消，直到状态终止。但是第三方期约库像 [bluebird](http://bluebirdjs.com/docs/api/cancellation.html) 是实现了期约取消的。

不过可以模拟一下

```javascript
class CancelToken {
  constructor(cancelFn) {
    this.promise = new Promise((resolve, reject) => {
      cancelFn(() => {
        resolve('cancel delay')
      })
    })
  }
}

function cancelDelayResolve(delay) {
  setTimeout(console.log, 0, 'set delay')

  return new Promise((resolve, reject) => {
    const id = setInterval((() => {
      setTimeout(console.log, 0, 'delayed resolved')
      fetchHttp('../mock/index.json')
        .then(res => {
          resolve(res)
          console.log(res, 'fetch res');
        })
    }), delay);

    const cancelToken = new CancelToken((cancelCb) => {
      // 取消异步
      btnCancel.addEventListener('click', cancelCb)
    })
    cancelToken.promise.then((res) => {
      console.log(res);
      // 清除定时器
      clearInterval(id);
    })
  })
}
// 异步开始
btnStart.addEventListener('click', () => cancelDelayResolve(1000))
```
