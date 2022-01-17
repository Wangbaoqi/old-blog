---
title: JS 对象
date: 2021-02-25 10:28:48
cover: https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/bg/object.png
tags: 
  - JavaScript
categories: JavaScript
---


对象是 JavaScript 中常用的一种类型，可以存储键值对或者复杂的实体数据。

除了自定义的一些对象之外，ECMAScript Specification 中还有`Build in`内置对象，包括`Global Object`（全局对象）和`Fundamental Object`（基本对象），下面列举一下这些内置对象以及全局对象。

![](https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/Object/object-api.png)

有关`Global Object`对象在上一章节「**引用类型**」已经列举了JavaScript 中所有的内置对象，不过大部分在一般的开发中是用不到的，常用到子类型有以下几种:

* Object
* Array
* Function
* String
* Number
* Boolean
* Date
* Error
* RegExp

## Object 内容

object 的内容无非有属性（可计算属性）、方法、对象的复制、属性描述符（数据属性和访问属性）、对象遍历等

### 可计算属性名

可计算属性名是**es6**新增的特性

```javascript
let obj = {
  a: 1,
  b: 2,
  // 可计算属性名
  ["f" + "oo"]() {
    console.log("foo");
  },
};

obj.bc; // 3
obj["bc"]; // 3
obj.foo(); // foo
```

### 属性描述器

属性描述器是从**ES5**开始才有的，可以看到对象中某个属性的特性，比如`writable`(可访问性)、`configurable`（可配置性）、`enumerable`（可枚举性）以及 `value`(值)

获取对象的某个特性 _Object_ 也提供了方法 _Object.getOwnPropertyDescriptor(obj, 'a')_

同时也有定义对象的某个特性的方式 _Object.defineProperty_

合并对象的方式 _Object.assign_

```javascript
// Object.getOwnPropertyDescriptor

let obj = { a: 1, b: 2 };
Object.getOwnPropertyDescriptor(obj, "a"); // 获取属性 a 的描述特定

Object.defineProperty(obj, "c", {
  writable: true,
  configurable: true,
  enumerable: true,
  value: 3,
});
obj; // {a: 1, b: 2, c:3}
```

### 不变性

对象的不变性其实就是对对象的属性描述器特性进行修改，有以下几种方式：

* Object.preventExtensions - 禁止一个对象添加新属性保留原来的属性
* Object.seal - 在现有的对象调用 _preventExtensions_，并对所有属性的_configurable_ 标记为_false_
* Object.freeze - 在现有的对象上调用_seal_，并对所有属性的_writable_ 标记为_false_

### 属性访问器

属性访问器也就在访问对象属性所调用的，也就是常说的**setter**和**getter**，其语言内部调用 **\[\[Get]]** 和 **\[\[Put]]** 如果要对属性的值有自定义的操作（数据劫持），可以使用使用他们。属性访问器关心的是 **configurable** 和 **enumerable。**

`[[Configurable]]`：属性是否可以通过**delete**删除；是否可以修改属性；默认为**true。**

`[[enumerable]]`： 属性是否可以使用**for in** 进行枚举；默认为true

```javascript
let obj = { a: "" };

// 不能配置 writable 否则 get set 不生效
Object.defineProperty(obj, "a", {
  enumerable: true,
  configurable: true,
  get a() {
    return "3";
  },
  set a(val) {
    this.a = val;
  },
});
```

## Object 遍历

对象的遍历一般会用到 **for in，**需要注意的是  `for in`  也会遍历原型链上的属性，因此会用 `hasOwnProperty`来判断要遍历的属性是否在目标对象上。

```javascript
let obj = {
  a: 0,
  b: '1',
  c: [1,2,3],
  d: function() {},
  e: Symbol(3)
}

Object.prototype.f = 3

for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
  }
}
```

除了  `for in`  可以遍历对象，`for of`  也是可以遍历对象的，不过要实现迭代器   `@@iterator`   接口，有关迭代器可以转入「[**JavaScript进阶  迭代器与生成器**](<../javascript advanced/generator.md>)」，对象可以通过增加属性 `[Symbol.iterator]`  来实现迭代器接口。

要实现`@@iterator`首先要知道该接口是怎么执行的以及返回数据类型

```javascript
Array.prototype[Symbol.iterator]; // ƒ values() { [native code] }
```

可以看到 Array是实现了迭代器接口的，而它是返回了一个**Function**

```javascript
Array.prototype[Symbol.iterator](); // Array Iterator {}
```

执行这个函数，会返回一个对象，这个对象有个`next`方法

```javascript
Array.prototype[Symbol.iterator]().next(); // {value: undefined, done: true}
```

手动执行next方法 返回结果对象 当前遍历的值以及是否还需要遍历的标识。

知道了迭代器接口 实现对象迭代器接口就方便多了

```javascript
// 对象实现迭代器接口
Object.definedProperty(obj, Symbol.iterator, {
   writable: true,
   configurable: true,
   enumerabale: true,
   [Symbol.iterator]: function() {
      let self = this;
      let idx = 0; // 手动调next时的指针
      let keys = Object.keys(self); // 
      return {
         next() {
            return {
               value: self[keys[idx++]],
               done: idx > keys.length
            }
         }
      }
   }
)

// 两种遍历方式
// 1. 使用for of
for(let iter of obj) {
   console.log(iter)
}
// 2. 手动调用next
const iter = obj[Symbol.iterator]();
iter.next()
iter.next()
iter.next()
```

除了手动实现迭代器接口来遍历对象之外，Object 构造函数提供原生的方法，`Object.keys`、`Object.values`和 `Object.entries`

```javascript
Object.keys(obj); // ["a", "b", "c", "d", "e"]
Object.values(obj): // [0, "1", Array(3), ƒ, Symbol(3)]
Object.entries(obj); // [['a', 0], ['b', '1'], ...]
```

## Object 拷贝

Object的深浅拷贝可以转到 「[JavaScript实现篇 - 深浅拷贝](<../../source code/javascript-api/对象实现篇.md#shen-qian-kao-bei-shi-xian>)」

