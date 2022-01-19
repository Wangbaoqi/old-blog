---
title: CSS 选择器
date: 2021-01-30 20:28:48
categories: CSS
cover: https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/css/css-selector.png
tags: 
  - css
---


选择器表示一个结构，这个结构可以用于一个条件，可以用作匹配HTML文档中哪些元素，

所有的选择器是不区分大小写的，除了不受选择器控制的部分。

## 选择器语法

选择器是由一个或多个简单选择器序列组成的链，这些选择器`组合器`(`空格`、`>` 、`+`、`~`)分隔。一个伪元素可以附加到选择器中的最后一个简单选择器序列。

## 选择器分类

选择器主要分为

* `简单选择器`
* `伪元素选择器`
* `组合选择器`

## 简单选择器

* Type selectors 类型选择器
* Universal selectors 通用选择器
* Attribute selectors 属性选择器
* Class selectors 类选择器
* ID selectors ID 选择器
* Pseudo-classes 伪类

### Type Selector 类型选择器

CSS元素选择器(也称为类型选择器)通过node节点名称匹配元素. 因此,在单独使用时,寻找特定类型的元素时,元素选择器都会匹配该文档中所有此类型的元素.

```html
<!-- html -->
<section>
  <h1>this is selector 1</h1>
  <div >
    <p>this is selector 2</p>
  </div>
</section>
```

```css
p {
  color: red;
}
```

### Universal selector 通用选择器

通用选择器`*`匹配所有类型的元素

```css
/* Selects all elements */
* {
  color: red;
}
```

### Attribute selectors 属性选择器

选择器允许表示元素的属性。当选择器用作表达式来匹配元素时，如果元素的属性与属性选择器表示的属性相匹配，则必须考虑属性选择器来匹配该元素。

1. 属性存在和值选择器

* `[attr]`: 表示具有`att`属性的元素，不管该属性的值是什么.
* `[attr=val]`: 表示值正好为`val`的`att`属性的元素.
* `[attr~=val]`: 表示具有`att`属性的元素，该元素的值是以空格分隔的单词列表，其中一个单词正好是`val`.
* `[attr|=val]`: 表示带有`att`属性的元素，它的值要么正好是`val`，要么以`val`开头，紧接着是`-`.

```css
p[name] {
  color: darkcyan;
}

p[name='frank'] {
  color: blueviolet;
}

p[name~='nate'] {
  color: darkorange;
}

p[name|='nate'] {
  color: darkturquoise;
}
```

2. 子字符串匹配属性选择器

* `[att^=val]`: 表示值以前缀`val`开头的`att`属性的元素。如果`val`是空字符串，那么选择器不表示任何东西。
* `[att$=val]`: 表示值以后缀`val`结尾的 `att`属性的元素。如果`val`是空字符串，那么选择器不表示任何东西。
* `[att*=val]`: 表示具有 `att`属性的元素，该元素的值至少包含子字符串`val`的一个实例。如果`val`是空字符串，那么选择器不表示任何东西。


```css
p[name^='#'] {
  color: blue;
}

p[name$='#'] {
  color: green;
}

p[name*='nate'] {
  color: black;
}

```

```html
<!-- attr selector -->
<section class="attr">
  <p name='#bao'>#bao</p>
  <p name='bao#'>bao#</p>
  <p name='frank'>frank</p>
  <p name='nate wang'>nate</p>
  <p name='nate-frank'>nate-frank</p>
  <p name='nate-frank'>nate</p>
</section>
```

### Class selectors 类选择器

类选择匹配基于具有`class`属性的元素

```css
.name {}
```

### ID selectors ID 选择器

类选择匹配基于具有`id`属性的元素

```css
#name {}
```

### Pseudo-classes 伪类

引入伪类概念是为了允许基于文档树之外的信息或者不能使用其他简单选择器表示的信息进行选择。

伪类总是由“冒号”(:)后跟伪类的名称和括号之间的值组成。

* Dynamic pseudo-classes 动态伪类
* target pseudo-class target 伪类

#### Dynamic pseudo-classes 动态伪类

动态伪类根据名称、属性或内容以外的特征对元素进行分类，原则上这些特征无法从文档树中推导出来。

动态伪类不会出现在文档源或文档树中。

**链接伪类: `:link` 和: `:visited`**

1. `:link`伪类应用于尚未访问的链接。
2. 一旦用户访问了链接，将应用`:visited`伪类。

这两种状态是相互排斥的。

**user action 伪类: `:hover`、 `:active`和`:focus`**

1. `:hover`伪类在用户指定带有指向设备的元素时应用，但不一定激活它。例如，当光标(鼠标指针)悬停在元素生成的框上时，可视化用户代理可以应用这个伪类。
2. 当用户激活元素时，应用: `:active`伪类。
3. `:focus`伪类在元素具有 focus 时应用(接受键盘或鼠标事件，或其他形式的输入。

这三种伪类并不互斥，一个元素可以同时匹配多个伪类。

```css
.fork a:visited {
  color: lightgreen;
}
.fork a:hover {
  background-color: cadetblue;
}
.fork button:active {
  color: crimson;
}
.fork input:focus {
  background-color: darkblue;
  color: #fff;
}
```

```html
<section class="fork">
 <a href="">伪类</a>
 <button>button</button>
 <input type="text">
</section>
```

#### target pseudo-class Target 伪类

有些 uri 引用资源中的位置。这种 URI 以“数字符号”(#)结尾，后跟锚标识符(称为片段标识符)。

目标元素可以用: target 伪类表示。如果文档的 URI 没有片段标识符，那么文档就没有目标元素。

**Target 伪类**: `:target`

#### The language pseudo-class 语言伪类

**语言伪类**：`html:lang(C)` C 必须是有效的 CSS 标识符[ CSS21] ，并且不能为空(否则，选择器无效)

#### UI element states pseudo-classes UI 伪类

1. `:enabled`: 伪类表示处于启用状态的用户界面元素; 这些元素具有相应的禁用状态.
2. `:disabled`: 禁用的伪类表示处于禁用状态的用户界面元素; 这些元素具有相应的启用状态。
3. `:checked`: 单选和复选框元素可以由用户切换

```css
.ui .radio:enabled {
  color: dodgerblue;
}
.ui .checkbox:disabled {
  color:navajowhite;
}
.ui .checkbox:checked {
  color: palegoldenrod;
}
```

```html
<form class="ui" action="" method="post">
 <input class="radio" type="radio" name="" id="">
 <input class="checkbox" type="checkbox" disabled name="" id="">
 <input class="checkbox" type="checkbox" name="" id="">
</form>
```

#### Structural pseudo-classes 结构化伪类

选择器引入了结构化伪类的概念，以允许基于文档树中的额外信息进行选择，这些信息不能用其他简单的选择器或组合符表示。

1. [:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)：表示作为文档根的元素。在 HTML 中，这通常是 <html> 元素。
2. [:empty](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty)：表示一个元素，除了空白字符之外没有子元素。
3. [:nth-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)：使用 An+B 表示法从兄弟元素列表中选择元素。
4. [:nth-last-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child)：使用 An+B 表示法从列表中选择元素同级元素，从列表的末尾开始倒数。
5. [:first-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child)：匹配第一个兄弟元素的元素。
6. [:last-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child)：匹配最后一个兄弟元素的元素。
7. [:only-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child)：匹配没有兄弟的元素。例如，该列表中没有其他列表项的列表项。
8. [:nth-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type)：使用 An+B 表示法从列表中选择元素同级元素列表中匹配特定类型的同级元素。
9. [:nth-last-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type)：使用An+B表示法来选择同级元素列表中的元素与从列表末尾向后计数的同级元素列表中的某个类型匹配。
10. [:first-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type)：匹配第一个兄弟元素的元素，并且还匹配某个类型选择器。
11. [:last-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type)：匹配最后一个兄弟元素的元素，并且还匹配某个类型选择器。
12. [:only-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type)：匹配没有所选类型兄弟的元素选择器。

## Pseudo-elements 伪元素

伪元素在文档语言指定的范围之外创建关于文档树的抽象。

例如，文档语言不提供访问元素内容的第一个字母或第一行的机制。伪元素允许引用本来不可访问的信息。伪元素还可以提供一种引用源文档中不存在的内容的方法(例如: `:before` 和: `:after` 伪元素提供了对生成内容的访问)。

伪元素由两个冒号`::`后跟伪元素的名称组成。

1. `::first-line`: 第一行伪元素描述元素的第一个格式化行的内容。
2. `::first-letter`: 第一个字母的伪元素表示元素的第一个字母，如果它前面没有任何其他内容(例如图像或行表格)。第一个字母的伪元素可用于“首字母大写”和“下拉大写”。
3. `::before`: 描述元素内容之前生成的内容。
4. `::after`: 描述元素内容之后生成的内容。

## Combinators 组合器

1. [后代组合器](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator)：`space` 组合器选择作为第一个元素的后代的节点。
2. [子组合器](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator)：`>` 组合器选择作为第一个元素的直接子元素的节点。
3. [一般兄弟组合](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator)：`~`组合选择兄弟。这意味着第二个元素跟在第一个元素之后（虽然不一定是立即），并且都共享同一个父元素。语法：A ~ B 示例：p ~ span 将匹配紧跟在之后的所有元素，无论是否立即。
4. [相邻兄弟组合子](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator)：`+` 组合子仅在紧跟在第一个元素之后才匹配第二个元素。语法：A + B 示例：h2 + p 将匹配紧跟在元素之后的所有元素。

## 选择器的优先级

> 浏览器通过优先级来判断哪些属性值与一个元素最为相关，从而在该元素上应用这些属性值。优先级是基于不同种类选择器组成的匹配规则。

### 优先级的计算

优先级的计算是跟根据`选择器的类型`为前提，计算每个类型的选择器作用到元素上的个数。

这里的选择器可以计算权重的类型只有以下几种：

* ID选择器
* 类选择器
* 伪类选择器
* 类型选择器
* 属性选择器
* 伪元素选择器

#### 计算方法

计算选择器列表中的具有上述类型的个数。

1. ID选择器的个数记为`a`
2. 类选择器、属性选择器和伪类选择器的个数记为`b`
3. 类型选择器和伪元素选择器的个数记为`c`

**在`:not()`中声明选择器会影响权重**，比如`:not(.class)`、`:not(p)`

最终得到`a-b-c`权重数字（这里权重大小基于数字的大小）

```css
*               /* a=0 b=0 c=0 -> specificity =   0 */
li              /* a=0 b=0 c=1 -> specificity =   1 */
ul li           /* a=0 b=0 c=2 -> specificity =   2 */
ul ol+li        /* a=0 b=0 c=3 -> specificity =   3 */
h1 + *[rel=up]  /* a=0 b=1 c=1 -> specificity =  11 */
ul ol li.red    /* a=0 b=1 c=3 -> specificity =  13 */
li.red.level    /* a=0 b=2 c=1 -> specificity =  21 */
#foo           /* a=1 b=0 c=0 -> specificity = 100 */
#foo:not(FOO)   /* a=1 b=0 c=1 -> specificity = 101 */
```

在[specifishity](https://specifishity.com/)中可以看到更多计算权重的示例。

### 选择器的权重比较

在 [CSS2](https://www.w3.org/TR/2011/REC-CSS2-20110607/cascade.html#specificity) 计算权重中，多出了一项元素的属性`style`，说明其的数值在这里是最高的，因此其权重也就最大。

除此之外，当在一个样式声明中使用一个`!important` 规则时，此声明将覆盖任何其他声明。虽然，从技术上讲，`!important` 与优先级无关，但它与最终的结果直接相关。

## 参考

* [Selectors Level 3](https://www.w3.org/TR/selectors-3/)
* [Selectors MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)