---
title: CSS 知识体系
date: 2021-01-28 10:28:48
categories: CSS
cover: https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/css/css-cover-all.png
tags: 
  - CSS
---

CSS（层叠样式表），英文 `Cascading Stylesheets`，其目的是去绘制结构性文档在页面上的呈现。

这里在绘制脑图的时候，也是查看了比较多的文档和规范。最终将其分为了几个模块:

![](https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/css/CSS-mind.png)

* `语法/词法`
* `构建模块`
* `组织策略`
* `future modules`

## 语法

CSS也是一门语言（但不是编程语言），因此它也有自己的语法和词法。

了解[浏览器工作原理 - render](/post/Browser/browser-render)就会知道，日常开发中，写的CSS结构都会被词法化，然后解析成`CSSOM`，最终和`DOM`合并成`Layout`树。

而[CSS语法内容](https://www.w3.org/TR/css-syntax-3/)正是将字节流形式的CSS结构解析成一个有意义的`stylesheet`(这里值的是对象形式的结构)。

## 构建模块

CSS层级在3之前，构建CSS的模块都在一个[CSS2.1](https://www.w3.org/TR/CSS2/)规范中, 在CSS3中，构建CSS的模块被分出来形成单独的一个规范，下面是具体的规范

* [CSS 语法](/post/FrontEnd/CSS/CSS语法)
* [CSS 选择器](/post/FrontEnd/CSS/CSS选择器)
* [CSS 层叠与继承](/post/FrontEnd/CSS/CSS层叠与继承)
* `CSS 盒子模型...`
* `CSS 弹性盒子...`
* `CSS 颜色...`
* `CSS 背景与边框...`
* `CSS 图像...`
* `CSS 字体...`
* `CSS 值和单位...`
* `CSS 媒体查询...`
* `CSS 用户界面...`
* `CSS 布局...`
* `CSS 命名空间...`
* `CSS Transition...`
* `CSS Transform...`
* `CSS Animation...`

<!-- * [CSS Syntax Level 3](https://www.w3.org/TR/css-syntax-3/)
* [CSS Style Attributes](https://www.w3.org/TR/css-style-attr/)
* [Media Queries Level 3](https://www.w3.org/TR/css3-mediaqueries/)
* [CSS Conditional Rules Level 3](https://www.w3.org/TR/css-conditional-3/)
* [CSS Namespaces](https://www.w3.org/TR/css-namespaces/)
* [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/css-cascade-4/)
* [CSS Values and Units Level 3](https://www.w3.org/TR/css-values-3/)
* [CSS Custom Properties for Cascading Variables Module Level 1](https://www.w3.org/TR/css-variables-1/)
* [CSS Box Model Level 3](https://www.w3.org/TR/css-box-3/)
* [CSS Color Level 3](https://www.w3.org/TR/css-color-3/)
* [CSS Backgrounds and Borders Level 3](https://www.w3.org/TR/css-backgrounds-3/)
* [CSS Images Level 3](https://www.w3.org/TR/css-images-3/)
* [CSS Fonts Level 3](https://www.w3.org/TR/css-fonts-3/)
* [CSS Writing Modes Level 3](https://www.w3.org/TR/css-writing-modes-3/)
* [CSS Multi-column Layout Level 1](https://www.w3.org/TR/css-multicol-1/)
* [CSS Flexible Box Module Level 1](https://www.w3.org/TR/css-flexbox-1/)
* [CSS User Interface Module Level 3](https://www.w3.org/TR/css-ui-3/)
* [CSS Containment Module Level 1](https://www.w3.org/TR/css-contain-1/)
* [CSS Transforms Level 1](https://www.w3.org/TR/css-transforms-1/)
* [CSS Compositing and Blending Level 1](https://www.w3.org/TR/compositing-1/)
* [CSS Easing Functions Level 1](https://www.w3.org/TR/css-easing-1/) -->

## CSS 规范层级

层叠样式表没有传统意义上的版本； 相反，它有层次。 每个级别的 CSS 都建立在先前的基础上，改进定义并添加功能。 每个更高级别的特征集是任何更低级别的超集，并且更高级别中的给定特征所允许的行为是更低级别中允许的行为的子集。 因此，符合更高级别 CSS 的用户代理也符合所有较低级别。

> CSS 所有规范文档在[这里](https://www.w3.org/Style/CSS/)

### CSS Level 1

CSS 工作组认为[CSS1规范](https://www.w3.org/TR/2008/REC-CSS1-20080411/)已过时。 CSS 级别 1 被定义为 CSS1 规范中定义的所有功能（属性、值、规则等），但使用 CSS2.1 规范中的语法和定义。 CSS 样式属性定义了它包含在特定于元素的样式属性中。

### CSS Level 2

尽管 [CSS2](https://www.w3.org/TR/2008/REC-CSS2-20080411/) 规范在技术上是 W3C 推荐标准，但它在 W3C 定义候选推荐阶段之前就进入了推荐阶段。 随着时间的推移，实施经验和进一步审查发现了 CSS2 规范中的许多问题，因此 CSS 工作组选择定义*CSS Level 2 Revision 1 (CSS2.1)*，而不是扩展已经很笨拙的[勘误表](https://www.w3.org/Style/css2-updates/REC-CSS2-19980512-errata.html)。 如果两个规范之间有任何冲突，CSS2.1 包含最终定义。

一旦 [CSS2.1](https://www.w3.org/TR/CSS2/) 成为候选推荐标准——虽然官方的稳定性水平与 CSS2 不同——但 CSS2 标准就废止了。 从 CSS2.1 中删除的 CSS2 中的特性应被视为处于候选推荐阶段，但请注意，其中许多已经或将被纳入 CSS 级别 3 工作草案，在这种情况下，该规范将，一旦 达到 CR，废弃 CSS2 中的定义。

### CSS Level 3

`CSS Level 3` 以 `CSS2.1` 规范为核心，逐模块构建在 CSS Level 2 之上。 每个模块都添加了功能或替换了 CSS2.1 规范的一部分。 CSS 工作组希望新的 CSS 模块不会与 CSS2.1 规范相矛盾：只是它们将添加功能并改进定义。 随着每个模块的完成，它会被插入到CSS2.1的现有系统和之前完成的模块中。

从这个级别开始，模块是独立的级别：例如，选择器级别 4 很可能在 CSS 线路模块级别 3 之前完成。没有 CSS 级别 2 等效项的模块从级别 1 开始； 更新 CSS 级别 2 中存在的功能的模块从级别 3 开始。

### CSS Level 4 及以上

没有 CSS Level 4。独立模块可以达到 Level 4 或更高，但 CSS 语言不再有级别。 （`CSS Level 3`这个术语仅用于将其与之前的单体版本区分开来。）
