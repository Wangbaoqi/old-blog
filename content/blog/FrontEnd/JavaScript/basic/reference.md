---
title: JS 引用类型
date: 2021-02-24 10:28:48
cover: https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/bg/reference-type.png
tags: 
  - javascript
categories: 前端
---


> 在ECMAScript中，引用类型是一种数据结构，而**引用类型的值**是引用类型的一个**实例。**这样理解，引用类型跟**类**的概念差不多，是将**数据**和**功能**组织到一起的一种结构。但是严格意义上讲，引用类型并不能称之为类，虽然JavaScript是一门面向对象的语言，但是并没有提供类、接口的有关数据结构。

尽管ES6提出了关键字**Class**来更直观的看到面向对象的实现，但是根本意义上来讲，JavaScript是没有类的，只不过**Class**是语法糖而已。

```javascript
let obj = new Object();
```

上面就实现了一个简单的引用类型的实例，关键字 **new** 后面跟一个构造函数 **Object** 可以进行实例化。除了Object 引用类型，ECMAScript中可以将引用类型分为 基本引用类型 和 集合引用类型

## 基本引用类型

基本引用类型也是原生引用类型，是可以直接使用的，比如说常见的 [**Date**日期](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)引用类型、[RegExp 正则](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)、原始类型包装引用类型（**Number**、**String**、**Boolean）** 以及单体内置对象（[**Global**](https://developer.mozilla.org/en-US/docs/Glossary/Global_object)、**Math**）

Global 对象是JavaScript中最特殊的一个对象，因为它是不存在的，只能访问到它的属性。

![Global 属性](https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/Object/object_global.png)

每个宿主环境（browser 和 Node）都存在Global对象，因此这些属性可以直接在全局中访问。

## 集合引用类型

集合引用类型有 [Object](object.md) 、[Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)、[TypeArray](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)、Map、WeakMap、Set 和 WeakSet，后四种是ES6新增的引用类型。

有关Object、Array等经常使用的引用类型后面章节会专门涉及。这里阐述一下ES6新增的四种类型

### Map 映射

Map是ES6新增的一种**键值对**的数据结构，在之前以**键值对**存储数据的方式为对象。

#### Object和Map存储数据之间的区别

* 键名：Object只能使用**数字**、**字符串**和**符号**作为键。而Map可以时候用任何类型的值作为键
* 键值：Object和Map都可以使用任何类型的值
* 内存占用：Object和Map在不同的浏览器中实现存在明显差异，而存储的键值对所占的内存要看浏览器给该类型分配到内存大小。但是给定固定的内存大小，Map存储的键值对所占的内存大小要比Object大50%。
* 插入性能：Object和Map 在插入性能上所消耗的时间差不多，如果代码涉及大量的插入操作，Map的性能明显要好于Object
* 查找性能：Object和Map在查找方面差异极小。
* 删除性能：Map的删除操作都要比插入和查找更快，存在大量删除操作的时候，选择Map是个好的选择。

#### Map 基本API

* set
* get
* has
* clear
* delete
* entries
* values
* keys
* size

```javascript
let map = new Map();
let map1 = new Map([]); // map 和 map1都是空映射
```

Map接收一个[可迭代对象](<../javascript advanced/generator.md>)作为参数，默认为`[]`   。需要包含键值对的数组，按照顺序插入到映射实例中。

```javascript
let map2 = new map([
  ['key', 'value'],
  [1, null],
  [null, undefined]
])
map2; // Map(3) {"key" => "value", 1 => null, null => undefined}
```

除了上述初始化实现映射实例之外，也可以使用API `set`  ，如果要添加多个话，也可以链式的添加

```javascript
const obj = {a: 1};
let map3 = map.set('sex', 'man')
              .set(1, '1')
              .set(null, 0)
              .set(undefined, null)
              .set(Symbol('1'), undefined)
              .set(obj, function(){})
              .set(false, 'pp')
              .set(function(){}, null)
```

在获取键值的时候，对键名的是有要注意一下，对于基本类型来讲，键名映射其原始值，这里也会有其他意外情况发生。对于引用类型来讲，键名映射的是这个对象的引用（副本），跟这个对象的内容没有关系，在映射的过程中，该对象的属性发生了变化，改对象映射的键名还是没有变。

```javascript
let a = 2 * undefined; // NaN
let b = 0 / ''; // NaN
let obj = {};
let objV = [];
let map4 = new Map();
map4.set(a, 'nate');
map4.set(b, 'frank');
map4.set(obj, objV);
console.log(map4.get(a)); //nate
console.log(map4.get(b)); //nate 这里原始两者的原始值是相同的
obj.a = 'foo';
objV.push('foo');
console.log(map4.get(objV)); // ['foo'] 引用类型内部和映射没有关系
```

判断映射中的键值可以用`has`来判断。

#### Map 迭代

Map的迭代和Object的对象不一样，Map内部是实现了迭代器协议（这个迭代器是由`entries`实现的）的，而且在迭代的过程中，迭代的顺序是按照初始化映射的顺序来的。

映射的实例可以通过`entries` 或者`  [symbol.iterator]  `来获取迭代器

```javascript
let map5 = new Map();
map.set(1, '1')
map.set(2, '2')
// ƒ entries() { [native code] }
console.log(map5.entries == map5[Symbol.iterator]); // true 

for(let item of map5.entries()) {
  console.log(item); // [1, '1']
}

for(let item of map5[Symbol.iterator]()) {
  console.log(item); // [1, '1']
}
```

除此之外，还有`keys`、`values`、`forEach`方法可以遍历。

```javascript
let map6 = new Map();
map.set(3, '3')
map.set(2, '2')

for(let key of map6.keys()) {
  console.log(key); // 3
}

for(let val of map6.values()) {
  console.log(val); // '3'
}
```

除了遍历的方法之外，还有`delete`和`clear`方法了，删除映射和清除映射。

### WeakMap 弱映射

WeakMap 也是ES6新增的一种增强键值对存储的机制。强调的“弱”，具体现在在弱键这里，如果弱引用的**键**不属于真正的引用，因此不会阻止垃圾回收。

**从垃圾回收的角度讲：**

 **弱引用的键（对象）有其他引用的话（对象是被弱持有的），如果该对象被垃圾机制回收了，那么弱映射中的对应的键值对也会被移除，而Map是不会的，还是会保持在映射中，除非手动的清除该键值对。**

弱引用的键只能是对象，不能是其他类型的值，否则会抛出异常。

```javascript
const obj = {a: 1}
let wm = new WeakMap();
wm.set(obj, 'nate')
  .set(1, '1'); // TypeError: Invalid value used as weak map key
```

#### WeakMap 基本API

* set
* get
* has
* delete

可以看到，弱映射是没有迭代功能的，是因为键值对在任何时候都有可能被销毁。因此，也就没有`clear`方法了。

### Set 集合

Set也是ES6新增的集合类型，也像是加强的Map，两个有类似的API

Set 实例化也是给构造函数传递一个可迭代的对象，其中就是插入到集合实例的元素，类似数组的形式。

Set 会去掉插入中重复的值（包括引用类型，同一个引用的话)

```javascript
let st = new Set(['a', '2', '4'])
let st1 = new Set();
st1.add('0')
st1.add('1')
```

#### Set 基本API

* add
* size
* clear
* delete
* has
* keys
* values
* entries

这些API的用法跟Map 类似，尤其是迭代的用法，不同的是Set的实例也提供了一个迭代器，不过这个迭代器是由 `values` 实现的。

除此之外，add 和 delete 的操作是`幂等`的，同一个值只能添加一次或者删除一次。

### WeakSet 弱集合

跟WeakMap 类似，weak 都是垃圾回收机制对待 **弱映射中的对象键** 和 **弱集合中的值**的方式。

WeakSet 中的值只能是Object类型或者是继承Object的对象。

同样，如果说WeakSet中对值（对象）的引用是弱的，不是正式的引用，一旦这些对象被垃圾回收了，则WeakSet也就失去了该值，因此也就没有**迭代功能。**

**WeakSet 基本API**

* add
* has
* delete

