---
title: CSS 层叠与继承
date: 2021-01-31 19:28:48
categories: CSS
cover: https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/css/css-inherit.png
tags: 
  - css

---

> CSS 层叠和继承模块描述如何整理样式规则并为所有元素的所有属性赋值。通过级联和继承，可以为所有元素的所有属性传播值。

## 层叠

层叠是理解CSS最基础的概念之一，当一个元素被多个**规则（rules）**选择时，浏览器如何选择正确的规则应用到该元素上呢？

而这个**选择正确的规则的过程**也就是理解层叠最关键的一点。

当元素上的规则出现声明冲突时，浏览器会根据下面的三条规则进行解决。

**层叠解决规则声明冲突的方式**

* `StyleSheet origin`
* `Selectors specificity`
* `Source order`

### Stylesheet origin

样式表源：样式表来源于哪里？用户代理样式表或者作者开发样式。

**用户代理样式表**：也就是浏览器默认样式，每个浏览器的默认样式不完全一致，此样式表的优先级最低，可以被**作者开发样式表**覆盖

**作者开发样式表**：就是web开发者编写的样式，可以覆盖默认浏览器样式。

在规则声明中，有一个*特殊情况*，当元素的属性值（`property: value`）被标记为 **! important**时，当前规则的**优先级是最高的**。

因此，在样式表源中，优先级是这样的: **Author important > Author > User agent**

### Selectors specificity

当浏览器在解决声明冲突的过程中，判定`Stylesheet origin`是一致的话，则开始第二条规则的判定。

选择器的特异性：也就是选择器的权重，在[CSS 选择器 - 选择器的优先级](/post/FrontEnd/CSS/CSS选择器) 中阐明了选择器的权重。

在特异性中，也有一种*特殊情况*，当元素的样式以**内联样式**的方式声明的话，其优先级是大于任何选择器的优先级的。

在特异性中，优先级是：**inline style > ID > class(同权重还有 属性、伪类选择器) > type(权重还有 伪元素选择器)**

### Source order

当浏览器在解决声明冲突的过程中，判定`Stylesheet origin`和`Selectors specificity`是一致的话，则开始第三条规则的判定。

源顺序：就是在源样式表中声明元素规则的顺序，如果顺序出现的位置是靠后的，则会覆盖前面的样式，优先级比前者要高。

:::tip 注意的两条法则

- 不要使用`ID选择器`，因为ID选择器只能使用一个，如果想要覆盖ID规则集的话，则要向更高优先级的规则添加样式或者将ID选择器改为类选择器。
- 不要使用`important`，其优先级最高，如果想覆盖它，则每次都需要使用它，而且还需要处理特异性。

:::

## 继承

除了声明的方式给元素设置样式之外，还有一种方式，那就是**继承**。

默认情况下，并不是所有的属性都可以继承的。当然，CSS提供了**通用特定值**，来控制继承。

**文本属性继承**

默认情况下，文本属性是可以通过继承实现的；

`color`, `font`, `font-family`, `font-size`, `font-weight`, `font-variant`, `font-style`, `line-height`, `letter-spacing`, `text-align`, `text-indent`, `text-transform`, `white-space`, 和 `word-spacing`。

**列表属性继承**

`list-style`, `list-style-type`, `list-style-position`, 和 `list-style-image`

**表格元素的边框属性** 

`border-collapse`，`border-spacing`。

### Special Value

CSS提供了特殊的值（可以在任何属性上使用）可以控制继承。

**inherit**: 开启继承属性，子元素属性会继承父元素属性。

**initial**: 设置属性跟浏览器默认样式相同。

**unset**: 设置属性为自然值。如果属性的级联值是 unset 关键字，那么如果它是一个继承的属性，那么它被视为继承，如果它不是，那么它被视为初始的

**revert**: 如果属性的级联值是 revert 关键字，则行为取决于声明所属的 **stylesheet origin**，**兼容性差**

* user-agent origin: 相当于`unset`
* user origin: 将级联的值回滚到用户代理级别，以便计算指定的值，就好像没有为此元素的此属性指定作者原点或用户原点规则一样。
* author origin: 将级联值回滚到用户级别，以便计算指定的值，就好像没有为此元素上的此属性指定 author-origin 规则一样。为了进行还原，此原点包括动画原点。

## 参考

* [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/css-cascade-4/#intro)
* [MDN Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
* [CSS in Depth](https://github.com/CSSInDepth)