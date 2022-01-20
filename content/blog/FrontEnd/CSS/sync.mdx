---
title: CSS 语法
date: 2021-01-29 12:28:48
cover: https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/css/css-syntax.png
tags: 
  - css
categories: CSS
---

## CSS 语法描述

关于CSS的语法规范目前可以在[CSS2.1 specification](https://www.w3.org/TR/CSS21)和[CSS Syntax Module Level 3](https://www.w3.org/TR/css-syntax-3/)规范中查到。

### CSS Statement

规则集是样式表的主要构建块，样式表通常只包含大量规则集。 但是 Web 作者还想在样式表中传达其他信息，比如字符集、要导入的其他外部样式表、字体正面或列表计数器描述等等。 它将使用其他和特定类型的语句来实现这一点。

语句是一个构建块，它以任何非空格字符开始，以第一个结束大括号或分号结束\(在字符串之外，非转义，不包含在另一个{}、\(\)或\[\]对中\)。

**语句种类**

1. RulesSets\(规则集\)： 将一组CSS声明关联到由选择器描述的条件的规则集（或规则）。
2. At-Rules： @rules

### CSS Rule

CSS是一系列的`规则`\(普通规则和@规则\)组成。

* 普通规则 - 是对文档中元素应用限定规则。是一个选择器，指定声明应用到那些元素。每个声明都有一个名称，后面跟`:`和值。声明之间用`;`分隔

```css
p > div {
  color: '#333'
}
/* p > div 是选择器*/
/* color: '#333' 是声明 */
```

* @rule - 定义特殊的处理规则或值，类似于@media。他们都是不同的，但它们有一个共同的基本结构，都是以`@`开头，后面跟着对应的名称作为CSS关键字。

有些`@rule`是简单的语句，其名称后跟更富哦的CSS值来指定他们的行为，最后以分号结束。其他的是块，可以在名称后面有CSS值，他们以`{}-wrapped`块结束。

```css
/* 导入对应的样式表 */
@import "style.less";

/* 可选的页选择器 */
@page :left {
  margin-left: 3px;
}
```

## CSS 总体结构

根据[CSS2.1规范](https://www.w3.org/TR/CSS21/grammar.html#q25.0)语法部分可以看到，CSS的整体结构大概为:

* `@charset`
* `@import`
* `rules`
  * `@media`
  * `@page`
  * `rule`

### At-Rules

一个`at-rule`是一个语句，以at符号开头, '@' \(U+0040\), 后跟一个标识符，并包括直到下一个分号的所有内容, ';' \(U+003B SEMICOLON\), 或下一个CSS块，以先到者为准。

从上述的脑图中可以看到`@rule`的种类。

**@charset字符集**

[@charset](https://www.w3.org/TR/CSS2/syndata.html#x57) 是指定样式表中使用的字符编码。必须是样式表中的第一个元素，前面不得有任何字符。若有多个`@charset`被声明，只有第一个起作用。

* 当样式表嵌入到另一个文档\(HTML中style元素或者style属性\)中时，样式表中会共享整个文档中字符编码
* 当样式表驻留在单独的文件中，用户代理在确定样式表的字符编码时的优先级
  1. Content-Type: Http中header中的charset中属性给出的值
  2. CSS样式表中 @charset
  3. 元素中的`charset`属性，该方法在`HTML5`中已经废弃。或者`metadata`元数据的值
  4. 假设 UTF-8

[@import](https://www.w3.org/TR/css-cascade-4/#at-import)rule,用于从其他样式表导入其他样式规则。这些规则必须先于所有其他类型的规则，`@charset`规则除外，并且不能在条件规则中使用。

**@import 规则引入的方式有2种**

* @import `url` 
* @import `url list-of-media-queries`

`url`是一个表示要引入资源位置的`<string>`或者`<url>`，这个路径可以是绝对路径或者是相对路径，可以只指明包名，会自动选择。

`url list-of-media-queries`是一个逗号分隔的`媒体查询`的列表，决定通过URL引入的CSS规则在什么条件下应用。

```css
/* */
@import 'style.css';

@import url('style.css');

/* 一个特定的样式表(example.css)应用于具有特定特性的特定媒体类型(‘ screen’)的设备(它必须是一个彩色屏幕)。 */
@import url(color.css) screen and (color);
```

[@media](https://www.w3.org/TR/css3-conditional/)媒体查询

可用于基于一个或多个媒体查询的结果来应用样式表的一部分。 使用它，您可以指定一个媒体查询和一个CSS块，当且仅当该媒体查询与正在使用其内容的设备匹配时，该CSS块才能应用于该文档。可置于您代码的顶层或位于其它任何@条件规则组内。

媒体查询的主要应用方式有两种。

```markup
<!--  第一种方式  -->
<style>
@media all {}
</style>
<!--  第二种方式  -->
<link rel='stylesheet' media='screen and (color)' href='index.css'/>
```

**媒体类型**

1. all - 适用于所有设备
2. print - 使用于在打印预览模式下在屏幕上查看的文档
3. screen - 主要用于屏幕
4. speech - 主要用于语音合成器

**逻辑操作符**

1. and - 将多个规则组合成单挑媒体查询，每个查询规则都为真，则该条媒体查询为真。
2. not - 用于否定媒体查询，如果不满足这个条件则返回true，否则返回false。 如果出现在以逗号分隔的查询列表中，它将仅否定应用了该查询的特定查询。 如果使用not运算符，则还必须指定媒体类型。
3. only - 仅在整个查询匹配时才用于应用样式，并且对于防止较早的浏览器应用所选样式很有用。
4. 逗号`,` - 用于将多个媒体查询合并为一个规则。 逗号分隔列表中的每个查询都与其他查询分开处理。 因此，如果列表中的任何查询为true，则整个media语句均返回true


