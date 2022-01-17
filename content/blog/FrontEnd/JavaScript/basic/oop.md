---
title: JS 面向对象
date: 2021-02-28 10:28:48
cover: https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/bg/oop.png
tags: 
  - JavaScript
categories: JavaScript
---

> 将整个系统划分成规 模更小的部分，各部分之间彼此独立。如果这些较小的部分能够尽可能多地隐藏实现细节，它们 6 就会变得易于使用

## 理解对象

首先使用new操作符创建一个简单的对象

```javascript
let person = new Object()
person.name = 'nate'
person.age = 24

person.getName = function() {
  return this.name
}
```

这些属性（name、age、getName）在创建的时候都带有一些特定的类型

**属性类型**

> ECMA-262 定义这些特性是为了实现 JavaScript 引擎用的，因此在 JavaScript 中不能直接访问它们。为了 表示特性是内部值，该规范把它们放在了两对儿方括号中，例如`[[Enumerable]]`

1. 数据属性

数据属性包含了一个数据值的位置，在这个位置可以读取可以写入，有四个可以描述其行为的特性:

* `[[Configurable]]` 表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性, 默认值为true
* `[[Enumerable]]` 表示是否可以通过for-in循环返回属性，默认值为true
* `[[Writable]]` 表示是否可以修改属性的值，默认值为true
* `[[Value]]` 表示这个属性的值

**如果要修改属性默认的值，必须通过object.defineProperty()**

```javascript
var person = {}
// 参数 目标对象，对象属性，属性的描述符对象
object.defineProperty(person, 'name', {
  configurable: false, // 不能删除属性
  enumerable: true,
  writable: false, // 只读属性
  value: 'nate.wang'
})
person.name = 'newNate'
```

1. 访问器属性

访问器属性不包含数据值，他们包含一对getter和setter函数

* `[[Get]]`  表示读取属性调用 默认值 undefined
* `[[Set]]`  表示设置属性调用 默认值 undefined

```javascript
let person = {
  _name: '',
  age: 20
}

object.defineProperty(person, 'name', {
  set: function(val) {
    this._name = val;
    this.age = 24
  },
  get: function() {
    return this._name
  }
})
person.name = 'nate.wang'


// 定义多个属性
object.defineProperties(person, {
  _name: {
    value: 'nate'
  },
  age: {
    value: 20
  },
  name: {
    set: function(val) {
      this._name = val;
      this.age = 24
    },
    get: function() {
      return this._name
    }
  }
})
```

**读取属性的特性**

> 使用 ECMAScript 5 的 Object.getOwnPropertyDescriptor()方法，可以取得给定属性的描述 符。这个方法接收两个参数:属性所在的对象和要读取其描述符的属性名称。返回值是一个对象，如果 是访问器属性，这个对象的属性有 configurable、enumerable、get 和 set;如果是数据属性，这 个对象的属性有 configurable、enumerable、writable 和 value。

```javascript
let description = object.getOwnPropertyDesciptor(person, '_name')
// description.value
// description.configurable
// description.enumerable
// description.writable

// description.set
// description.get
```

## 创建对象

object构造函数或字面量形式都可以创建对象，但这些方式有个明显的缺点:使用同一个接口创建很多对象，会产生大量的重复代码。 因此出现了工厂模式和构造函数模式

1.  工厂模式

    这里使用工厂模式 用特定的函数来封装创建对象的细节

```javascript
function createObject(name, age, job) {
  let obj = new Object()
  obj.name = name;
  obj.age = age;
  obj.job = job;

  return obj;
}
```

**这种方式存在一个问题** 怎么样知道一个对象的类型, 这种方式继承应该如何实现？

1. 构造函数模式

类似于Object、Array这样的原生的构造函数，在运行的时候会自动出现在执行环境中。

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function() {
    return this.name
  }
  this.getName = getName
}

// new 操作符创建实例
let p1 = new Person('nate', 23)
let p2 = new Person('john', 25)
```

**new 操作符创建实例的过程**

* 创建一个新对象
* 构造函数的作用域赋给新对象 （this就指向了新对象）
* 执行构造函数中的代码
* 返回新对象 

**构造函数的问题** 使用构造函数的主要问题，每个方法都要在每个实例上重新创建一遍

```javascript
p1.sayName === p2.sayName //false

// 暂时解决方式
function getName() {
  return this.name
}
```

可以把函数定义转移到构造函数外面，这样可以共享同一个方法，但是如果存在多个方法，就要定义多个全局函数，于是我们这个自定义的引用类型就丝毫没有封装性可言了。因此，这些问题可以使用原型来解决

## 原型模式

创建的每一个函数都有一个prototype（原型）属性，它是一个指针，指向一个对象（包含了所有的实例共享的属性和方法）；字面意思来讲，prototype就是通过构造函数创建的对象实例的原型对象。

使用原型对象可以让所有对象实例共享他的属性和方法

```javascript
function Person() {}

Person.prototype.name = 'nate'
Person.prototype.age = 20
Person.prototype.getName = function () {
  return this.name 
}

let person1 = new Person()

person1.name; // nate
```

## 理解原型对象

创建一个函数，根据特定的规则会给函数创建一个prototype属性，这个属性指向了函数的原型的对象, 如下图：

![function-prototype](https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/prototype/proto\_1.png)

可以看到指针指向了一个对象（原型对象），它包含了一个constructor属性，而这个属性指向创建的函数。初次之外，原型对象默认只会取得constructor属性，其他属性都是继承于Object的

接下来，通过构造函数创建一个对象实例，该对象实例也会包含一个指针（**proto**），该指针也指向了构造函数的原型对象。这个**proto**连接存在于实例于构造函数的原型对象之间。如下图：

![object-proto](https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/prototype/proto\_2.png)

**检测原型和实例的方法**

* isPrototypeOf(person1)
* Object.getPrototypeOf(person1)
* hasOwnProperty() 检测属性是否来自于实例中
* in 操作符 检测属性是否存在于原型中

**原型语法**

将以对象字面量的形式创建的对象给到原型，但是这样有个例外，constructor不会再指向Person了

```javascript
function Person() {}

Person.prototype = {
  constructor: Person,
  name: 'nate',
  age: 20,
  getName: function() {
    return this.name
  }
}

let p1 = new Person()
```

在这里特意加了contructor属性，并指定了其值是Person，但是这样一来，constructor就是原型上的属性了，通过Object.keys(Person.prototype)就可以枚举出来,默认情况下，原生constructor是不可枚举的。但是可以通过object.defineProperty()修改constructor的enumerable值.如下图：

![simple-proto](https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/prototype/proto\_3.png)

**原型的动态性** 先看一个🌰：

```javascript
function Person() {}

let p3 = new Person()

Person.prototype.sayHay = function() {
  console.log('say hello')
}
p3.sayHay() // say hello
```

\*\* 即使实例是在原型添加方法之前创建的，仍然可以访问到其添加的方法，可以归结为原型和实例之间的松散关系。实例和原型连接的是一个指针，并非副本，因此实例寻找sayHay方法在自身没有找到之后，在其原型上可以找到。

例外情况: 上述情况是没有重写原型对象的基础上，可以随时添加原型属性。但是一旦重写原型对象，情况就变了。

调用构造函数时会为实例添加一个指向最初原型的\[\[Prototype]]指针，如果重写原型，就是切断了实例跟最初原型的联系。下面的例子：

```javascript
function Person() {}

let p1 = new Person()

Person.prototype = {
  constructor: Person,
  name: 'nate',
  age: 20,
  getName: function() {
    return this.name
  }
}

p1.getName() // error
```

这个例子是首先创建了实例，之后再重写原型，其结果琢磨之后，会发现跟前者是不同的, 可以看下来自红皮书中的截图：

![custom-proto](https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/prototype/proto\_4.png)

**原型对象的问题** 原型对象省略了为构造函数初始化参数的过程，导致了所有的实例共享同一属性值，如果这种共享对于函数来讲，可能会有一定的方便性，如果对引用类型的值来讲，可能会存在一定的问题。看个例子：

```javascript
function Person() {}

Person.prototype = {
  constructor: Person,
  name: 'natewang',
  friends: ['john', 'wang'],
  sayFriend: function() {
    consoloe.log(this.friends)
  }
}

let p1 = new Person()
let p2 = new Person()

p1.friends.push('nate')
console.log(p1.friends) // ['john', 'wang', 'nate']
console.log(p2.friends) // ['john', 'wang', 'nate']
```

### 组合构造函数和原型模式

最常见的方式就是使用组合构造函数和原型模式，构造函数用于定义实例属性，原型模式用于定义方法和共享属性

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age
  this.friends = ['john', 'wang']
}

Person.prototype = {
  constructor: Person,
  sayName: function() {
    console.log(this.name)
  }
}

let p1 = new Person('john', 20)
let p2 = new Person('nate', 23)

p1.friends.push('nate')

console.log(p1.friends);  // ['john', 'wang', 'nate']
console.log(p2.friends);  // ['john', 'wang']

console.log(p1.friends === p2.friends) // false
console.log(p1.sayName === p2.sayName) // true
```

### 动态原型模式

这种方式把所有的信息都封装到了构造函数中，通过构造函数来初始化原型

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;

  if(type of this.sayName !== 'function') {
    Person.prototype.sayName = function() {
      console.log(this.name)
    }
  }
}

let p1 = new Person('nate', 23)
console.log(p1.sayName()) // nate
```

### 寄生构造函数模式

这种模式基本思想是封装创建对象的代码，然后在返回创建的对象;

**注意** 这种模式实例跟构造函数或者构造函数的原型没有任何关系, 不建议使用这种模式

```javascript
function Person(name, age) {
  let o = new Object()
  o.name = name;
  o.age = age;
  o.sayName = function() {
    console.log(this.name)
  }
  return o
}

let p1 = new Person('name', 25) 
// 存在的问题 不能使用instanceof来判断类型
console.log(p1 instanceof Person) // false
```

### 稳妥构造函数模式

先看个例子：

```javascript
function Person(name, age) {
  let o = new Object()

  o.sayName = function() {
    return name
  }
  return o
}
let p1 = Person('nate', 28)
console.log(p1.sayName)
```

可以看到，这种模式没有this，new，没有共享模式，想要访问某一个属性，必须通过某个特定的方法，因此这种方式提供了安全性。

## 原型之间关系

下面图可以完全解释原型以及原型之间的关系

![](../../.gitbook/assets/prototype-relation.png)

可以从上图看出实例和构造函数以及其原型之间的关系。下面从代码方面分析一下

```javascript
// 构造函数 Foo
function Foo() {};
// 基于构造函数生成 Foo 实例 f1
let f1 = new Foo();

f1.__proto === Foo.prototype; // true 实例的原型指向的是构造函数的原型
Foo.prototype.constructor === Foo; // true 构造函数的原型的constructor指向的是其自身
f1.__proto.constructor === Foo; // true 实例的原型的constructor指向的是实例的构造函数
f1.constructor === Foo; // true 实例的constructor指向的也是构造函数

// 实例化 根对象 的实例 o1
let o1 = new Object();
// o1 的原型指向跟上述Foo结果是一致的 唯一的区别是Object.prototype.__proto__ 指向的是null
Object.prototype.__proto__ === null; // true

// Foo 和 Object之间的关系
Foo.prototype.__proto__ === Object.prototype; // true Foo 构造函数的原型的__proto__指向的是根对象的原型
f1.__proto__.__proto__ === Object.prototype; // true

// Foo 和 Function
Foo intanceof Function; // true 
Foo.constructor === Function; // true 所有函数的constructor最终都是指向Function

// Foo是由Function构造
Foo.__proto__ === Function.prototype; // true
// Object是由Function构造 同理
Object.__proto__ === Function.prototype; // true

// Function 的原型指向Object的原型
Function.prototype.__proto__ === Object.prototype; //true
```

* 每个对象有一个属性 _ proto _, 该属性指向一个对象，也就是 `原型` 。
* 每个对象或者对象的原型通过 `constructor` 获取改对象的构造函数。构造函数通过 `prototype` 获取该对象的原型。
* 所有的函数可以通过 _proto_ 获取 `Function` 对象。
* 所有的对象可以通过 _proto_ 获取 `Object` 对象。
* 对象之间通过_proto_ 连接起来，称之为原型链。
* 根对象 `Object` 的原型是 `null`。

## 继承

许多语言都支持两种继承方式，接口继承和实现继承；接口继承只继承方法签名，实现继承则继承实际的方法，函数没有签名，JS只支持实现继承 

### 原型链

> 原型链是实现继承的主要方法，基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法

首先用文字描述的方式来阐述一下原型链：

回顾一下构造函数、实例和原型之间的关系，每个构造函数都有一个原型对象，原型对象包含了一个指向构造函数的指针，而实例包含了一个指向原型对象的内部指针`[[Prototype]],` 如果让原型对象等于另一个类型（构造函数）的实例，会有什么样的结果呢？结果就是这个原型对象也包含了另一个原型的指针，因此这个原型对象实例化的实例对象也就继承了另一个原型的属性和方法。

### 实现原型链的基本模式

```javascript
function Parent() {
  this.parent = 0
}

Parent.prototype.getVal = function() {
  return this.parent
}

function Child() {
  this.child = 0
}
// Parent 的实例赋给了Child的原型 
// 重写了Child的原型对象
Child.prototype = new Parent();

// 注意 新增的方法要在 14line 之后
Child.prototype.getVal = function() {
  return this.child
}


let child = new Child();
```

可以看下Parent和Child之间的关系： 构造函数Child的原型对象是没有constructor的，它的原型对象被重写了，直接被Parent的实例覆盖了，因此，child.constructor指向了Parent

![simple-extends](https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/prototype/proto\_5.png)

这个例子通过原型链简单的实现了继承，下面引用一张红皮书(6.3.1)的原型链的图

![prototype-chain](https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/prototype/proto\_6.png)

**确定原型和实例的关系**

1. instanceof 操作符
2. isPrototypeof(instance)

**原型链的问题** 主要的问题来自包含引用类型值的原型

先看个例子：

```javascript
function Person() {
  this.lists = ['1', '2', '3'];
}

Person.prototype.getList = function() {
  return this.lists
}

function Child() {}

Child.prototype = new Person()

let c1 = new Child()
c1.lists.push('4')
console.log(c1.lists) // ['1', '2', '3', '4']

let c2 = new Child()
console.log(c2.lists) // ['1', '2', '3', '4']
```

这种方式带来的问题就是原型值为引用类型造成的数据共享，为了解决这个问题，借用构造函数（伪造对象或者经典继承也算是一种解决方案

### 借用构造函数

> 这种技术是在子类型构造函数内部调用超类型构造函数，不过需要在特定环境执行函数，需要使用call或者apply来执行超类型构造函数

```javascript
function Person() {
  this.lists = ['1', '2', '3'];
}

function Child() {
  // 继承了Person 美实例化一个Child instance的时候，都会重新初始化一下Person中的值
  Person.call(this)
}

let c1 = new Child()
c1.lists.push('4'); // ['1', '2', '3', '4']
let c2 = new Child()
console.log(c2); // ['1', '2', '3']
```

这样一来，每个实例的lists都会是一个副本

**传递参数**

```javascript
function Person(name) {
  this.name = name;
}

function Child(name) {
  Person.call(this, name)
}

let c1 = new Child('nate')
c.name // nate
```

**借用构造函数的问题** 使用构造函数，也就是无法避免构造函数模式存在的问题--方法在构造函数中定义，因此就无法复用。还有就是在超类型原型中定义的方法，在子类型的实例中也是无法调用的（因为没有原型继承）

### 组合继承

组合继承伪经典模式，就是将借用构造函数和经典模式组合到一起。背后的原理是使用原型继承实现原型属性和方法的继承，而通过借用构造函数来实现实例属性的继承

```javascript
function Person(name) {
  this.name = name
}

Person.prototype.getName = function() {
  return this.name
}

function Child(name){
  // 继承了实例的属性
  Person.call(this, name)
}

// 继承了原型的属性和方法
Child.prototype = new Person();
Child.prototype.constructor = Child;
```

这种模式融合了原型链和借用构造函数的优点，成为常用的继承模式。

### 原型式继承

这种方式是借助了已有的对象创建新对象，同时不必创建自定义类型。

```javascript
function object(obj) {
  function Fun() {}
  Fun.prototype = obj
  return new Fun()
}

var person = {
  name: 'nate',
  friends: ['john', 'weili', 'baoqi']
}

var otherPerson = object(person)
otherPerson.name = 'natewang'
otherPerson.friends.push('new john') // ['john', 'weili', 'baoqi', 'new john']
```

ECMAScript 5 新增了Object.create()规范了原型式继承，接收两个参数，如果只传一个参数，跟object的功能是一样的。如果传了第二个参数，格式跟object.definedProperty()的第二个参数格式相同。

```javascript
var anotherPerson = Object.create(person)
// {} => __proto__:person

var secondPerson = Object.create(person, {
  name: {
    value: 'natewbq'
  }
})
// {name: 'natewbq', __proto__: person}
```

### 寄生式继承

寄生式继承是和原型式继承紧密相关的一种思路，这种思路跟跟寄生构造函数和工厂模式相似，创建仅用于封装继承过程的函数，该函数在内部可以增强对象。

```javascript
function createAnther(org) {
  var clone = object(org)
  clone.sayName = function() {
    console.log('inherit')
  }
  return clone
}

var newPerson = createAnther(person)
newPerson.sayName() // inherit
```

### 寄生组合继承

组合继承是JavaScript最常用的继承方式。但是其不足之处是都会调用两次超类型构造函数 下面是组合继承中调用两次的例子：

```javascript
function Person(name) {
  this.name = name
  this.friends = ['lisi', 'wangwu', 'nateliu']
}

Person.prototype.sayName = function() {
  console.log(this.name)
}

function Child(name, age) {
  // 第二次次调用超类型 Person
  Person.call(this, name)
  this.age = age
}

// 第一次调用超类型 Person
Child.prototype = new Person()
```

寄生组合继承，即通过构造函数借用构造函数来继承属性，通过原型链的混成形式来继承。 背后的思想：不必为了指定子类型的原型而调用超类型的构造函数，所需要的只是超类型原型的副本而已，本质上就是使用寄生式继承来继承超类型的原型

```javascript
function object(obj) {
  function Fun() {}
  Fun.prototype = obj
  return Fun
}

function inheritPrototype(superType, subType) {
  // 处理超类型的副本
  var prototype = object(superType.prototype)
  prototype.constructor = subType
  subType.prototype = prototype
}

function Person(name) {
  this.name = name
  this.friends = ['lisi', 'wangwu', 'nateliu']
}

Person.prototype.sayName = function() {
  console.log(this.name)
}

function Child(name, age) {
  Person.call(this, name)
  this.age = age
}

inheritPrototype(Person, Child)

Child.prototype.sayAge = function() {
  console.log(this.age)
}
```

使用寄生组合继承方式，减少了调用超类型构造函数的次数。而且能保持原型链不变，能够正常使用instanceof和isPrototypeOf(),这种方式是引用类型最理想的继承方式。
