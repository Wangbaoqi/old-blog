---
title: JS 数据类型
date: 2021-02-20 10:28:48
cover: https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/bg/data-type.png
tags: 
  - JavaScript
categories: 
  - JavaScript
---


> ECMAScript 语言中所有的值都有一个对应的语言类型。ECMAScript 语言类型包 括 Undefined、Null、Boolean、String、Number 和 Object。

## 内置类型

**JavaScript 中有八种内置类型**

* Null
* Undefined
* Number
* Boolean
* String
* Object
* Symbol (ES6 新增)
* BigInt (ES11 新增)

### Null类型

**Null**类型明确只有一个值，即特殊值**null**，逻辑上讲，表示一个`空对象指针`，这也是 `typeof null == 'object'`因此，初始化对象可以用**null**表示。

**null**跟**undefined**在表面上是相等的，是因为**undefined**是**null**派生而来的。但是两者的意义完全不同。

### Undefined 类型

**Undefined**类型也明确只有一个值，特殊值**undefined**，字面意思是`声明了变量但是未定义值`（只针对与**var**和**let**声明的变量）。

### Boolean 类型

**Boolean**类型具有两个值的逻辑实体，字面值为**true**和**false**

:::tip
注意，**Boolean**类型字面量是区分大小的，`True`和`False`会被识别为变量
:::

### Number 类型

**Number**类型使用**IEEE 754**格式表示整数和浮点值，也就是`双精度值`。**Number**类型[详情内容](/post/FrontEnd/JavaScript/basic/数值)

### BigInt 类型

BigInt 是一种内置对象，它提供了一种方法来表示大于 2^53 - 1 的整数。

### String 类型

**String**类型表示0个或者多个**Unicode**字符序列。**String**类型[详情内容](/post/FrontEnd/JavaScript/basic/字符)

### Symbol 类型

**Symbol**是ES6新增的类型，用途是确保对象属性使用唯一标识符。

**Symbol 使用**

```js
let s = Symbol();

let ss = Symbol('s');
```

**Symbol 作为属性使用**

```js
let obj = {
  s: 1,
  ss: 2
}
```

**Symbol 全局符号注册表**

`Symbol()`和`Symbol.for()`之间的区别是前者在使用是会去全局搜索是否有值，而后者会重新生成符号值。

```js
Symbol.for('foo') == Symbol.for('foo'); // true
Symbol('a') == Symbol('a'); // false
```

**Symbol 作为常用内置符号**

**ECMAScript** 通过**Symbol**提供了可以修改对象内部方法的内置符号，比如`Symbol.iterator`可以使对象具有迭代协议，可以通过`for of`来遍历值。

```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
  Symbol.iterator: function() {
    let keys = Object.keys(this);
    let idx = 0;
    return {
      next() {
        return {
          value: keys[idx++],
          done: idx > keys.length
        }
      }
    }
  }
}
```

除了`Symbol.iterator`内置符号之外，还提供了以下几种：

`Symbol.hasInstance` 一个确定一个构造器对象识别的对象是否为它的实例的方法

```js
class Array1 {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance)
  }
}
```

`Symbol.toPrimitive` 一个将对象转化为基本数据类型的方法

```js
const obj = {
  [Symbol.toPrimitive](hint) {
    console.log(hint)
    if(hint == 'number') {
      return 'number'
    }
    if(hint == 'string') {
      return 'string'
    }
    return true
  }
}
```

除了上述三种之外，还有其他的[内置符号](https://tc39.es/ecma262/#sec-well-known-symbols)

### Object 类型

对象类型在ECMAScript中司空见惯，关于[对象的详细内容](/post/FrontEnd/JavaScript/basic/对象)

## 判断类型

### typeof 判断类型

可以使用typeof运算符来判断值的类型, 返回字符串类型

```javascript
typeof null; // "Object“
typeof undefined; // "undefined"
typeof 10; // "number"
typeof "10"; // "string"
typeof {}; // "object"
typeof function(){}; // "function"
typeof [1,3]; // "object"
typeof Symbol(); // ”symbol“
```

**因此使用typeof并不能准确的判断所有的类型**

**undefined和undeclared**

undefined 和 undeclared（未声明）不是同一个概念；undefined是已经声明了，并未赋值；而undeclared是没有声明，已经使用了 

```javascript
var a;
typeof a; // undefined

console.log(b); // ReferenceError： b is not defined
typeof b; // undefined
```

### instanceof 判断类型

判断类型也可以使用instanceof，其原理是通过原型链来判断的

```javascript
let obj = new Object();
obj instanceof Object; // true

[] instanceof Array; // true

null instanceof Object; // false

'123' instanceof String; // false

123 instanceof Number; // false

let str = new String('str');
str instanceof String; // true
```

**因此instanceof是不能判断基本类型的值，除了 hack 的方式**

```javascript
class CheckIsNumber {
  static [Symbol.hasInstance](number) {
    return typeof number === 'number'
  }
}
1 instanceof CheckIsNumber
```

### constructor 构造函数判断类型

使用构造函数来判断

null和undefined在判断的时候会报错, 这种方法知道就好，不建议使用

```javascript
let obj = {};
obj.constructor === Object
[].constructor === Array
'22'.constructor === String
22..constructor === Number
```

### toString 判断类型

toString 方法可以算是判断类型的终极解决方法

```javascript
Object.prototype.toString.call(333) // "[Object Number]"
Object.prototype.toString.call("hello") // "[Object String]"
Object.prototype.toString.call(false) // "[Object Boolean]"
Object.prototype.toString.call({name: 'xiaofan'}) // "[Object Object]"
Object.prototype.toString.call(null) // "[Object Null]"
Object.prototype.toString.call(undefiend) // "[Object Undefiend]"
Object.prototype.toString.call(function(){}) // "[Object Function]"
Object.prototype.toString.call([1,2,4]) // "[Object Array]"
```

## 类型转换

JS类型转换的情况大致有三种：

1. **转换成boolean**
2. **转换成string**
3. **转换成number**

**类型转换表格**

| 原始值                       |   转换目标  | result                              |
| ------------------------- | :-----: | ----------------------------------- |
| number                    | boolean | 0, -0, NaN为false， 其他为true           |
| string                    | boolean | '' => false                         |
| undefined, null           | boolean | false                               |
| 引用类型                      | boolean | true                                |
| number                    |  string | 2 => '2'                            |
| boolean, function, symbol |  string | true => 'true'                      |
| array                     |  string | \[] => '' \[1,3] => "1,3"           |
| object                    |  string | {} => "\[object object]"            |
| string                    |  number | '' => 0 '2' => 2                    |
| array                     |  number | \[] => 0   \[1] => 1  \[1,2] => NaN |
| null                      |  number | 0                                   |
| 除了数组的引用类型                 |  number | NaN                                 |
| symbol                    |  number | 报错                                  |

### 转换成Boolean

除了 null, undefined, false, 0, -0, '', NaN为false，其他都为true

### 引用类型转原始类型

引用类型转原始类型会调用内置的函数\[\[ToPrimitive]],会经历一下过程：

* 已经是原始类型的话，不需要转
* 转换成字符串的话，调用toString,不是字符串就会调用valueOf，不是的话继续调用toString
* 没有原始类型的值，就会抛错

### 四则运算

**+法运算符**

* 运算符一侧为字符串，就会把另一方转化为字符串
* 运算符一方不是数字或者字符串，就会转化为字符串或者数字
* 运算符一方是字符串或数字，另一方是引用类型，则会转换为字符串

```javascript
0 + '2'; // '02'
true + 0; // 1
3 + []; // '30'
0 + [1]; // '01'
2 + [1,2]; // '21,2'

'3' + []; // '3'
'3' + [1]; // '31'

3 + {}; // '3[object object]'
'3' + {}; // '3[object object]'
```

**+法运算符注意**

```javascript
+ 'n'; // NaN 
+ '1': // 1
'a' + + 'b'; // 'aNaN'
```

**除了加法运算符的其他运算符**

那么对于除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字

## 参考

* [ECMAScript Language Types](https://tc39.es/ecma262/#sec-ecmascript-language-types)
* [JavaScript DataType MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)