---
title: JS 字符编码
date: 2021-02-21 18:28:48
cover: https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/bg/string.png
tags: 
  - JavaScript
categories: JavaScript
---

## SourceCharacter 

**SourceCharacter**在规范中的定义是 **any Unicode code point**（任何Unicode码点）。

>ECMAScript code is expressed using Unicode. ECMAScript source text is a sequence of code points. All Unicode code point values from U+0000 to U+10FFFF
在ECMAScript代码是使用Unicode来表示的，ECMAScript源文本是一系列的码点，所有的码点的值的范围是
U+0000 - U+10FFFF （16进制表示） 

**[Character Encoding](https://zh.wikipedia.org/zh/%E5%AD%97%E7%AC%A6%E7%BC%96%E7%A0%81)**: 字集码是把字符集中的字符编码为指定集合中某一对象（例如：比特模式、自然数序列、8位元组或者电脉冲），以便文本在计算机中存储和通过通信网络的传递。常见的例子包括将拉丁字母表编码成摩斯电码和ASCII。其中，**ASCII将字母、数字和其它符号编号，并用7位元的二进制來表示这个整数**。通常会额外使用一个扩充的位元，以便于以1个字节的方式存储。

## ASCII

> **[ASCII](https://zh.wikipedia.org/wiki/ASCII)**: 是基于拉丁字母的一套电脑编码系统。它主要用于显示现代英语，而其扩展版本延伸美国标准信息交换码则可以部分支持其他西欧语言，并等同于国际标准ISO/IEC 646。

ASCII码的表达方式：使用指定的7位或者8位二进制组合来表示128或者256中可能的字符（字符一般是字母、数字、符号的统称）。

在计算机中，所有信息都是一个```二进制值```, ```二进制位```组成了```二进制值```, 每个二进制位有两种状态，```0```和```1```, 而在ASCII码的表达方式中，由7位或者8位```二进制位```组合成字符，而字符的种类就有了2^7（128）或者2^8（256）种。而这个7位或者8位的二进制的组合被称之为```字节```, 因此一个字节有128种或者256种表示方式，比如：00000000 字节就表示空字符。而字符表示的范围是 00000000 - 11111111。

标准的ACSII码也是基础ACSII码（是由7位二进制组成，剩下的一位用0来补位），表示所有的的大写、小写字母、数字0-9、标点符号以及美式英语中的特殊字符。

**0-31**以及127（33个）是控制字符或通信专用字符（其余为可显示字符），如控制符：LF（换行）、CR（回车）、FF（换页）、DEL（删除）、BS（退格)、BEL（响铃）等；通信专用字符：SOH（文头）、EOT（文尾）、ACK（确认）等；ASCII值为8、9、10 和13 分别转换为退格、制表、换行和回车字符。它们并没有特定的图形显示，但会依不同的应用程序，而对文本显示有不同的影响

**32-126**(95个) 是字符，32是空格，**48-57**是十个阿拉伯数字，**65-90**为26个大写英文字母，**97-122**是26个小写英文字母。

**Basic ACSII Table**
![basic ascii](https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/grammar/grammar_2.gif)

**Extended ACSII Table**
![extended table](https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/JavaScript/grammar/grammar_3.gif)

ASCII的局限就是只能显示基本的26个英文字符、阿拉伯数字以及英式标点符号，为了解决这个问题，现在基本都使用Unicode编码。

**中文的编码方式**：是GB2312，使用两个字节代表一个汉字，那么最多就有 256*256 种字符。

## Unicode

**[Unicode](https://zh.wikipedia.org/wiki/Unicode)**: 是计算机科学领域里的一项业界标准。它对世界上大部分的文字系统进行了整理、编码，使得电脑可以用更为简单的方式来呈现和处理文字。
`Unicode`的实现方式称为 Unicode转换格式（Unicode Transformation Format，简称为 UTF），实现方式总共有UTF-8，UTF-16，UTF-32。

**常用的UTF-8**

UTF-8 最大的特点，它是一种变长的编码方式，可以使用1-4个字节来表示字符，根据不同的字符来减少字节长度。

UTF-8 的编码规则：

* 单字节的字符，首位设置为0，后面7位表示这个字符的Unicode吗。因此，对于英文字母，ACSII吗的表示和UTF-8的编码是相同的
* 多字节的字符`n`，第一个字节的前`n`位都是`1`，第`n+1`位都是0，后面字节前两位为`10`，剩下的都是Unicode码

| Unicode符号范围  16进制      | UTF-8编码方式  2进制
| -------------------------- |:------------------------------------------:  
| 0000 0000-0000 007F        | 0xxxxxxx                       
| 0000 0080-0000 07FF        | 110xxxxx 10xxxxxx            
| 0000 0800-0000 FFFF        | 1110xxxx 10xxxxxx 10xxxxxx               
| 0001 0080-0010 FFFF        | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx           

**Encoding a character to UTF-8 proceeds as follows**:

1. 获取字符的Unicode code point，在上表第一列进行对比，寻找对应行数
2. 找到对应的第一列中Unicode符号范围，然后找到对应的UTF-8的二进制编码方式
3. 然后对`x`对应的位置进行补位

接下里有个🌰，**将一个字符编码成UTF-8编码格式**

```js
// 1 char byte: Unicode code point 0 - 127
// 2 char byte: Unicode code point 128 - 2047
// 3 char byte: Unicode code point 2048 - 0xFFFF
// 4 char byte: Unicode code point 65536 - 0x1FFFFF
// 5 char byte: Unicode code point 0x200000 - 0x3FFFFFF
// 6 char byte: Unicode code point 0x4000000 - 0x7FFFFFFF

const HEXRANGELIST = [
  {
    from: '0x00', // 0
    to: '0x7F' // 127
  },
  {
    from: '0x80', // 128
    to: '0x7FF' // 2047
  },
  {
    from: '0x800', // 2048
    to: '0xFFFF' // 65535
  },
  {
    from: '0x1000', // 65536
    to: '0x10FFFF' // 1114111
  }
]
// 
const BINARYRANGELIST = [
  '0xxxxxxx',
  '110xxxxx10xxxxxx',
  '1110xxxx10xxxxxx10xxxxxx',
  '11110xxx10xxxxxx10xxxxxx10xxxxxx',
]

/**
 * GetRangeUnicode 
 * @param {*} char 
 * @returns index
 */
function GetRangeUnicode(char) {
  char = parseInt(char, 16)
  return HEXRANGELIST.findIndex(e => e.from < char && e.to > char)
}

/**
 * UTF-8 Encoding
 * @param char any one char
 */
function UTF8Encoding(char) {
  if(!char) return;
  // get the char hex code point of the unicode
  const charHex = char.codePointAt().toString(16);
  // get the char binary code point of the unicode, and convert array. e.g '100111000100101'
  const charBinary = char.codePointAt().toString(2).split('');

  // get the range of the char that converted hex code point, 
  // and concert array. e.g '1110xxxx10xxxxxx10xxxxxx'
  let rangeBinary = BINARYRANGELIST[GetRangeUnicode(charHex)].split('');

  let cLen = charBinary.length - 1;
  let rLen = rangeBinary.length - 1;

  // fraom
  while(rLen >= 0) {
    if(rangeBinary[rLen] === 'x') {
      rangeBinary[rLen] = cLen < 0 ? '0' : charBinary[cLen];
      cLen--;
    }
    rLen--;
  }
  return {
    binary_utf_8: rangeBinary.join(''),
    hex_utf_8: parseInt(rangeBinary.join(''), 2).toString(16)
  }
}
UTF8Encoding('严')
// {binary_utf_8: "111001001011100010100101", hex_utf_8: "e4b8a5"}
```

