---
title: JS 代理与反射
date: 2021-03-03 10:28:48
cover: https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/bg/Proxy.png
tags: 
  - JavaScript
categories: 
  - JavaScript
---


Proxy 是**ECMAScript6**最新提出来的一种拦截并且可以增加一些额外操作的能力。比如拦截对象，在真正访问到目标对象之前做一些额外的操作。类似于 `Object.defineProperty()`  ，可以拦截对象的**属性，**而**Proxy**拦截的整个目标对象，当然也可以拦截其对象属性。

## 空代理

```javascript
const target = {
  name: 'nate'
}
// 空代理
const handle = {}
const proxy = new Proxy(target, handle)
console.log(target.name) // nate
console.log(proxy.name) // nate
```

## 捕获器

捕获器是在处理程序对象（`target`）上定义的基本的拦截器。每个处理程序对象上有一个或者多个拦截器，每个拦截器都对应一种操作方式，比如 `get`、`set`等。

添加了捕获器之后，代理对象在获取属性时，就会先通过对应的捕获器，拦截并且修改其属性。

捕获器有以下几种定义的方式

```javascript
const target = {
  name: 'nate'
}
const handle = {
  get() {
    return 'baoqi'
  }
}
const proxy = new Proxy(target, handle)
console.log(proxy.name); // baoqi
```

这种直接拦截了`name` 属性的获取，直接返回了拦截器中返回的值。

除此之外，get可以接收三个参数，`trapTarget`、`property`、`receive` 分别对应的目标对象、获取的属性名、代理对象。

```javascript
const target = {
  name: 'nate'
}
const handle = {
  get(trapTarget, property, receive) {
    console.log(trapTarget == target); // true
    console.log(property); // name
    console.log(receive == proxy); // true
    // 返回目标对象的属性值
    return trapTarget[property]; 
    
  }
}
const proxy = new Proxy(target, handle)
console.log(proxy.name); // nate
```

还有一种方式，就是使用反射**Reflect API（封装了原始的行为），这些方式与捕获器拦截的方法具有同样的名称和函数签名，也具有相同的行为。**

反射API也可以定义出空代理的模式

```javascript
const target = {
  name: 'nate'
}
const handle = {
  get() {
    return Reflect.get(...arguments)
  }
}
const proxy = new Proxy(target, handle)
console.log(proxy.name); // nate
console.log(target.name); // nate
```

还有简洁的定义的方式

```javascript
const handle = {
  get: Reflect.get
}
```

## 撤销代理

撤销代理可以将目标对象了代理对象之间的联系断开，其操作是不可逆的，撤销操作是幂等的，调用多少次结果都是一样的，撤销操作之后再使用代理会直接抛出异常

```javascript
const {proxy, revoke} = new Proxy(target, handle);
console.log(prxoy.name); // nate
revoke(); // 撤销代理
console.log(proxy.name); // TypeError
```

## 代理捕获器和反射API

上述讲过，捕获器和反射API是对应的，[反射API](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy#)是封装了原生的方法

* `get`
* `set`
* `has`
* `defineProperty`
* `getOwnPropertyDescription`
* `deleteProperty`
* `ownKeys`
* `getPrototypeOf`
* `setPrototypeOf`
* `isExtensible`
* `preventExtentsions`
* `apply`
* `construct`

## 代理模式

代理模式的使用可以很好的解决一些问题

## 跟踪属性访问

这个是实现双向绑定的方式，可以代替`Object.defineProperty`

```javascript
const proxy_p = new Proxy(object, {

  get(trapTarget, property, receiver) {
    return Reflect.get(...arguments)
  },

  set(target, property, value, receiver) {
    return Reflect.set(...arguments)
  }
})
```

## 隐藏属性

既然可以拦截属性，那么也可以对属性操作就跟简单了

```javascript
const hidden = ['name']
const proxy_p = new Proxy(object, {

  get(target, property, receiver) {
    if(hidden.includes(property)) {
      return undefined
    }
    return Reflect.get(...arguments)
  },

  has(target, property) {
    if(hidden.includes(property)) return false;
    return Reflect.has(...arguments)
  }
})

```

## 属性验证

在赋值的时候可以根据属性值的类型来判断是否需要赋值

```javascript
const proxy_p = new Proxy(object, {

  set(target, property, value) {
    if(typeof value != 'string') {
      return false
    }
    return Reflect.set(...arguments)
  }
})
```

## 函数和构造函数参数验证

拦截函数的参数是否是想要的类型

```javascript

const fn = (...num) => {
  return num.sort()
}

const proxy_fn = new Proxy(fn, {
  apply(target, thisArg, argList) {
    [...argList].map(e => {
      if(typeof e != 'number') {
        throw new Error('args not all is a number type')
      }
    })
    return Reflect.apply(...arguments)
  }
})

console.log(proxy_fn(1,'3',3), 'func'); // Uncaught Error: args not all is a number type

```

拦截构造函数的参数，判断是否需要参数

```javascript
class Person {
  constructor(name) {
    this.name = name
  }
}

const Proxy_c = new Proxy(Person, {
  construct(target, thisArg, newTarget) {
    if(!thisArg[0]) {
      throw new Error('constructor need a param')
    }
    return Reflect.construct(...arguments)
  }
})

console.log(new Proxy_c(), 'func');
```

## 数据绑定和可观察对象

数据绑定将代理之后的实例都添加到公共集合中

```javascript
const personList = []
const Proxy_d = new Proxy(Person, {
  construct() {
    const proxy = Reflect.construct(...arguments);
    personList.push(proxy)
    return proxy
  }
})

console.log(new Proxy_d('nate'), 'func');
console.log(personList, 'personList');
```

可观察对象 在添加消息的时候将这个消息分发出去

```javascript
const msgList = [];
const emit = (msg) => {
  console.log(msg, 'emit');
}
const proxy_m = new Proxy(msgList, {
  set(target, property, value, receiver) {
    const proxy = Reflect.set(...arguments)
    proxy && emit(Reflect.get(target, property, receiver));
    return proxy
  }
})

proxy_m.push('nate')
console.log(msgList, 'func');
```

