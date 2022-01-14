---
title: HTML语法 - 编写文档
date: 2021-01-23 14:44:05
cover: https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/html/html-cover-write.png
tags: 
  - HTML
categories: 
  - HTML
---


## HTML 语法

HTML 必须由下面几部分顺序组成

1. 可选地，单个 `u + feff` 字节顺序标记(BOM)字符。
2. 注释和任意的`ASCII`空格
3. 一个 `DOCTYPE`
4. 注释和任意的`ASCII`空格
5. document 元素，以HTML元素的形式
6. 注释和任意的`ASCII`空格

## DOCTYPE 文档类型

`doctype`由于遗留问题，必须要使用，否则浏览器解析可能不会遵循相关规范。

`doctype`由以下几部分顺序组成。

1. 一个字符串 `<!DOCTYPE`
2. 一个或多个`ASCII`空格
3. 一个字符串**html**
4. 可选的**DOCTYPE legacy string**
5. 0个或者多个`ASCII`空格
6. 一个字符**U+003E**(>)

**DOCTYPE legacy string** （遗留字符串），除非文档来自无法输出较短字符串的系统，否则不建议使用。

```markup
<!DOCTYPE html> 
<!-- **DOCTYPE legacy string** -->
<!DOCTYPE html SYSTEM "about:legacy-compat">
<!DOCTYPE html SYSTEM 'about:legacy-compat'>
```

上述的`doctype`是基于**HTML5**的，而在**HTML5**之前的版本**HTML4**是怎们定义的呢？

在**HTML4**以及之前的版本，HTML是SGML的子应用，所以有些规范要遵从SGML。`DOCTYPE`的声明的用法是创建对文档类型定义**DTD**的引用，**DTD**是负责指定`SGML`的规则，可以使浏览器正确的处理内容。 但是**HTML5**中，则不用声明**DTD**，因为HTML5不是基于SGML的。

## Elements 元素

在HTML文档中，elements是重要的组成部分，主要有**6**种不同元素类型，`Void Elements`, `Template Elements`, `Raw Text Elements`, `Escapable Raw Text Elements`, `Foreign Elements`以及`Normal Elements`。

`Tag` 是用来分隔元素的开始和结束标记的。**Raw Text Elements**，**Escapable Raw Text Elements** 和 **Normal Elements** 都有一个起始标记和结束标记，比如是`<script></script>`、`<title></title>`和`<div></div>`等。某些**Normal Elements**可以省略结束标记。**Void Elements** 不能指定结束标记，只能出现起始标记。

`Content` 元素的内容必须是放在起始标记和结束标记之中的。不同类型的元素的允许的内容是不一致的，这个要符合其规范或者语义化。

**Void Elements**

_area_, _base_, _br_, _col_, _embed_, _hr_, _img_, _input_, _link_, _meta_, _param_, _source_, _track_, _wbr_

这种元素的`Tag`没有结束标记，比如`<br>`, 元素之间不能出现内容

**Template Elements**

_template_

模板元素可以有模板内容，但是这样的模板内容不是模板元素本身的子元素。相反，它们存储在一个与另一个文档相关的 DocumentFragment 中，没有浏览上下文，以避免模板内容干扰主文档。模板元素的模板内容的标记放在模板元素的开始标记之后和模板元素的结束标记之前(与其他元素一样) ，可以包含任何文本、字符引用、元素和注释，但文本不能包含字符 u + 003 c LESS-THAN SIGN (<)或不明确的符号。

**Raw Text Elements**

_script_, _style_

原始文本元素可以有文本，但是它有描述的限制。

**Escapable Raw Text Elements**

_textarea_, _title_

可逃避的原始文本元素可以有文本和字符引用，但文本不能包含含义不明确的符号。还有的进一步限制。

**Foreign Elements**

_elements from MathML namespace and SVG namespace_

标记为自动关闭标记的外部元素不能有任何内容(因为同样没有结束标记，所以不能在开始标记和结束标记之间放置任何内容)。起始标记未标记为自关闭的外部元素可以包含文本、字符引用、 CDATA 节、其他元素和注释，但文本不能包含字符 u + 003 c LESS-THAN SIGN (<)或不明确的符号

**Normal Elements**

_html elements_

普通元素可以包含文本、字符引用、其他元素和注释，但文本不能包含字符 u + 003 c LESS-THAN SIGN (<)或含义不明确的符号。除了内容模型和本段中描述的限制之外，一些常规元素还对它们允许包含的内容有更多的限制。

**Start Tag 起始标签**

开始标签遵循以下的格式：

1. 第一个字符必须是`U+003C` LESS-THAN SIGN 字符(<)
2. 紧接着就是`tagName`了
3. 如果接下来有`Attributes`，则之前要有一个或多个空格字符
4. 属性之后，如果该元素是**Void Elements** 或者 **Foreign Elements**，则可能存在单个字符`/`，该字符对**Void Element** 没有影响，对于**Foreign Element**，则是起到自闭合标签的作用
5. 最后，开始标签闭合通过使用字符`>`

**End Tag 结束标签**

结束标签遵循以下的格式：

1. 第一个字符必须是字符`<`
2. 第二个字符必须是字符`/`
3. 接下来是标签名
4. 标签名之后，可能有一个或多个空格字符
5. 最后，结束标签通过字符`>`关闭

**Attributes 属性**

元素的属性在开始标签中表示。

属性是以`name-value`键值对的方式呈现的.

`name`必须由空格字符以外的一个或多个字符组成: u + 0000 NULL，u + 0022引号(”) ，u + 0027 APOSTROPHE (’) ，u + 003 e GREATER-THAN SIGN (>) ，u + 002 f SOLIDUS (/) ，u + 003 d EQUALS SIGN (=)字符，控制字符，以及 Unicode 未定义的任何字符。在 HTML 语法中，属性名称，即使是外部元素的属性名称，也可以使用任何大小写混合字母编写，这些字母是对属性名称的 ASCII 不区分大小写的匹配。

`value`是文本和字符引用的混合体，除了文本不能包含含义不明确的符号以外。

_属性可以通过四种方式来指定_

**空属性语法**

只有属性名称，其值为空字符串

```markup
<input disable >
```

**无引号属性语法**

如果使用非引号属性语法的属性后面跟着另一个属性，或者在上面开始标记语法的步骤6中允许使用可选的 u + 002 f SOLIDUS 字符(/) ，那么这两个属性之间必须有 ASCII 空白。

```markup
<input value=true>
```

**单引号属性语法**

如果使用单引号属性语法的属性后面跟着另一个属性，那么这两个属性之间必须有 ASCII 空格。

```markup
<input type='text'>
```

**双引号属性语法**

如果使用双引号属性语法的属性后面跟着另一个属性，那么这两个属性之间必须有 ASCII 空格。

```markup
<input type="text">
```

**可选的Tags**

某些tags是可以忽略的。但是省略的元素的开始标记并不意味着该元素不存在; 它是隐含的，但仍然存在。

* 如果 html 元素内的第一个东西不是注释，则可以省略 html 元素的开始标记。
* 如果 html 元素后面没有立即跟上注释，那么 html 元素的结束标记可能会被省略。
* 如果 head 元素是空的，或者 head 元素内的第一个东西是一个元素，那么 head 元素的开始标记可以省略。
* 如果 head 元素后面没有立即跟随 ASCII 空格或注释，那么 head 元素的结束标记可能会被省略。
* 如果 body 元素是空的，或者 body 元素中的第一个元素不是 ASCII 空格或注释，则 body 元素的开始标记可以省略，除非 body 元素中的第一个元素是 meta、 link、 script、 style 或 template 元素。
* 如果 body 元素后面没有立即跟注释，则 body 元素的 end 标记可能会被省略。

还有其他可以[忽略的场景](https://html.spec.whatwg.org/multipage/syntax.html#optional-tags)。
