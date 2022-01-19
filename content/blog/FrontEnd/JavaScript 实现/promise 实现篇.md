---
title: JS Promise 实现篇
date: 2021-06-01 10:28:48
cover: https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/bg-api/async.png
tags: 
  - javascript 实现
categories: 前端 实现
---


Promise 的实现要遵循 [Promise/A+](https://promisesaplus.com) 规范，其实现过程也可以进一步掌握 Promise 的原理。该规范主要是实现了** thenable **的接口。

之前[期约和异步函数](<../../javascript-advance/javascript advanced/sync promise.md>)详细解释了Promise，接下里通过代码的方式来理解比较抽象的概念。

### 术语

**thenable** 是定义 then 方法的函数或者对象。

**exception** 是使用 **throw** 抛出来的值。

**reason** 是用来表示被拒绝的原因。

### Promise Status

promise 有三种状态（pending、fulfilled 以及 rejected）。

当promise状态处于待定（pending）状态时，可以转换为已解决（fulfilled）或者 已拒绝（rejected）。

当promise状态处于已解决（fulfilled）状态时，不可以再转换为其他状态，此时必须有一个值，且该值不可改变。

当promise状态处于已拒绝（rejected）状态时，不可以再转换为其他状态，此时必须有一个值，且该值不可改变。

**\*** 这里, “不可改变” 意味者恒等 (即通过 === 判断), 而不意味者更深层次的不可变。

```javascript
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED =  'rejected';
```

### Promise Constructor

**Promise** 是一个构造函数，接收一个执行器（**excutor**）函数，该执行器函数接收 resolve （已解决）和reject（已拒绝）函数，用来改变promise状态。

```javascript
function PromiseN(excutor) {
  const self = this;
  // 当前状态
  this.status = PENDING;
  // 已解决值
  this.value = null;
  // 已拒绝原因
  this.reason = null;
  // resolvedCallbacks 和 rejectedCallbacks 用来保存 then 中的回调
  this.resolvedCallbacks = [];
  this.rejectedCallbacks = [];
  
  // 初始化 resolve 和 reject 函数
  // ...
  
  try {
    excutor(resolve, reject)
  }catch(e) {
    reject(e)
  }
}
```

上述初始化了Promise构造函数内部私有值

* **status**： 初始化当前状态 - 待定
* **value**：初始化已解决状态的值 - 默认为null
* **reason**： 初始化已拒绝状态的值 - 默认为null
* **resolvedCallbacks**： 用来保存then中已解决状态的回调
* **rejectedCallbacks**： 用来保存then中已拒绝状态的回调

之后执行**执行器函数，**传递** resolve **和** reject **函数用来异步调用，这里注意一点，**执行器函数中的同步代码是首先执行的**。接下来实现 **resolve** 和 **reject** 函数。

```javascript
// 状态落地为已解决函数
function resolve(val) {
  if(self.status === PENDING) {
    self.status = FULFILLED;
    self.value = val;
    self.resolvedCallbacks.map(fn => fn());
  }
}
// 状态落地为已拒绝函数
function reject(reason) {
  if(self.status === PENDING) {
    self.status = REJECTED;
    self.reason = reason;
    self.rejectedCallbacks.map(fn => fn());
  }
}
```

上述两个函数分别当状态落定为**已解决**或者**已拒绝**时执行。

规范规定，只有状态为待定时才可以改变为 **resolve** 或者 **reject**，因此在改变状态之前需要判断一下。之后将待定状态改变为对应落定状态，然后执行回调函数数组。

到此为止，简易的Promise构造函数就完成了，接下来测试一下

```javascript
const testPromise = new PromiseN((resolve, reject) => {
  resolve('testPromise')
})
// PromiseN{ status: 'fulFilled', onFulFilled: [], onRejected: [], value: 'testPromise' }

const promise = new Promise((resolve, reject) => {
  resolve('promise')
})
// Promise{ <fulfilled>: 'promise'}
```

可以看到，当执行**resolve 执行器**之后，状态更改为 **fulFIlled** ，已解决状态当前的值也更改了。对比原生Promise，其结果也是一致。

### Promise then

promise 必须提供一个 `then` 方法来访问当前值，或最终值以及已拒绝的理由

```javascript
// 伪代码
function then(onFulfilled, onRejected) {
  const that = this;
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
  onRejected = typeof onRejected === 'function' ? 
                                     onRejected : 
                                     reason => { throw reason};
  
  const promise = new PromiseN((resolve, reject) => {
     // 处理不同的状态
     // 处理当前状态是待定
     if(that.status === PENDING) {
       that.resolvedCallbacks.push(onFulfilled);
       that.rejectedCallbacks.push(onRejected);
     }
     // 处理当前状态是已解决
     if(that.status === FULFILLED) {
       that.resolvedCallbacks.push(onFulfilled);
     }
     // 处理当前状态是已拒绝
     if(that.status === REJECTED) {
       that.rejectedCallback.push(onRejected)
     }
  })
  return promise;
}
```

从上述 `then` 的伪代码框架来看， `then` 函数接受两个参数，返回了一个新的**promise**对象。

根据 [Promise/A+ 2.2](https://promisesaplus.com) 规范，`then` 接收的参数除了 `function` 类型 之外不管是什么类型，都会转换成函数类型。

```javascript
// 参数非函数 默认转换为函数是为了透传参数
Promise.Resovle('default params of function').then().then((val) => { console.log(val) })
```

上述伪代码大概展示了 then 方法的框架，接下来根据规范来剖析其细节。

根据上述伪代码，将 `then` 方法完整实现一遍

```javascript
PromiseN.prototype.then = function(onFulfilled, onRejected) {
  const that = this;
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
  onRejected = typeof onRejected === 'function' ? 
                                     onRejected : reason => {
                                                    throw reason;
                                                  }
  
  const promise = new PromiseN((resolve, reject) => {
    // 状态为已解决
    if(that.status === FULFILLED) {
      // 为何用 setTimeout
      setTimeout(() => {
        try {
          const thenChain = onFulfilled(that.value)
          // promise 解析过程 ...
        }catch(e) {
          reject(e)
        }
      })
    }
    // 状态为已拒绝
    if(that.status === REJECTED) {
      // 为何用 setTimeout
      setTimeout(() => {
        try {
          const thenChain = onRejected(that.reason)
          // promise 解析过程 ...
        }catch(e) {
          reject(e)
        }
      })
    }
    
    if(that.status === PENDING) {
    
      that.resolveCallbacks.push(() => {
        setTimeout(() => {
          try {
            const thenChain = onFulfilled(that.value)
            // promise 解析过程 ...
          }catch(e) {
            reject(e)
          }
        })
      })
      
      that.rejectCallbacks.push(() => {
        setTimeout(() => {
          try {
            const thenChain = onRejected(that.reason)
            // promise 解析过程 ...
          }catch(e) {
            reject(e)
          }
        })
      })
    }
  })
  
  return promise;
}
```

可以看到，上述代码中，可以看到用 `setTimeout`  包裹了 `then` 中的 `resolve` 和 `reject` 函数，这是因为规范规定在[执行上下文](https://es5.github.io/#x10.3)**堆栈仅包含平台代码之前，不得调用** **`onFulfilled`** **或** **`onRejected`  。**

使用 `setTimeout` 涉及到了 **JavaScript Runtime** 了，之前也提到了[期约的非重入](<../../javascript-advance/javascript advanced/sync promise.md#qi-yue-fei-zhong-ru>) ，在当前同步代码没有执行完毕之前是不能执行异步代码的，比如这里的 **`onFulfilled`** **或** **`onRejected` 。**

从[**事件循环**](<../../browser v8/浏览器工作原理/browser eventloop.md>)角度来讲，`setTimeout` 是一个异步操作，所以会将其置入[异步队列](<../../browser v8/浏览器工作原理/browser eventloop.md#shi-jian-xun-huan-settimeout>)中，等当前任务（同步代码）执行结束之后，才会执行异步队列中的任务**。**

规范规定，在执行完 `onResolved` 或者 `onRejected` 之后，会执行 **promise 解决步骤 **过程。

### Promise Resolution Procedure

promise 解决过程 是一个抽象操作，将 `promise` 和 `value` 作为输入，表示为`[[promise]] (promise, x`) , 如果 x 具有`thenable` 特性，就假设  `x` 的 行为至少有点像`promise`。将试图使`promise` 接收 `x` 的状态，否则，它使用值 `x` 执行 `promise` 。

```javascript
function resolutePromise(promise, x, resolve, reject) {

  // 规范2.3.1 如果promise和x相等 那么抛出一个 TypeError
  if(promise === x) return new TypeError('type circle');
  
  // 规范2.3.2 如果 x 是一个promise
  if(promise instanceof PromiseN) {
     // 规范2.3.2.1 如果x是PENDING状态 promise必须保持PENDING状态，直到fulfilled/reject
     if(x.status === PENDING) {
        x.then(
          (value) => {
            resolutePromise(promise, value, resovle, reject)
          },
          reject()
        )
     }else {
       // 规范2.3.2.2/规范2.3.2.3
       // 如果x的状态为fulfilled/reject，则肯定是一个正常的值，继续传递正常值
       x.then(resolve, reject)
     }
  }
  // 规范2.3.3 如果x是一个对象或者函数  
  if(x && typeof x === 'object' && typeof x === 'function') {
    let called = false;
    
    try {
      // 规范2.3.3.1 
      let then = x.then;
      // 规范2.3.3.3 如果then是一个函数 
      // 调用then.call(x, resolvePromiseFn, rejectPromise)
      if(typeof then === 'function') {
        then.call(
          x,
          // 规范2.3.3.3.1 resolvePromiseFn 的入参为y,
          // 执行resolutePromise(promise, y, resolve, reject)
          y => {
            if(called) return;
            called = true;
            resolutePromise(promise, y, resolve, reject);
          },
          // 规范2.3.3.3.2 rejectPromise 的入参为e,
          // 执行reject(e)
          e => {
            if(called) return;
            called = true;
            reject(e);
          }
        )
      }else { // 规范2.3.3.4 如果then不是一个函数，fulfilled promise with x
        if(called) return;
        called = true;
        resolve(x)
      }
    }catch (e) { // 规范2.3.3.2 如果x.then出错 reject promise with as a reason 
      if(called) return;
      called = true;
      reject(e);
    }
  }else { // 规范2.3.3.3 如果x不是一个函数或者对象 fulfilled promise with x 
    resolve(x)
  }
}
```

### Promise.resolve





