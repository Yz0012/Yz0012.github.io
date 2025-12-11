---
title : 为Markdown-it新增解析规则
path : docs\htmlDoc\html_sitedoc\
type : 站点文档
createTime : Thu, 11 Dec 2025 14:38:22 GMT
---

## Markdown-it 新增解析规则

为了给markdown-it新增规则，我们需要了解[markdown-it文档](https://markdown-it.github.io/markdown-it/#Ruler)内的Ruler类和其属性

这里的~~结果尝试使用<code>push</code>属性~~为markdown-it新增一个根据<code>!@</code>包裹而解析为<code>&lt;pre>&lt;code>&lt;/code>&lt;/pre></code>
的规则

不过在此之前先尝试使用块级元素<code>before</code>属性，从而使replace函数能正常执行

根据官方的示例

<pre>
<code>
var md = require('markdown-it')();

md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
  //...
});
</code>
</pre>

我们可以写一个相同的形式的，尝试输出<code>state.eMarks</code>

<pre>
<code>
md.block.ruler.before('paragraph', '!@codeblock_0', function replace(state) {
  console.log(state.eMarks);
});
</code>
</pre>

### 参数分析

根据输出结果或者根据提示，我们可以得知<code>state.eMarks</code>中的每个数字是指它所在行最后一个字符串(包括换行)之前所具有的字符串总数

除此之外，还可以输出<code>state</code>的其余属性，观察它所具有的意义，比如

<code>state.bMarks</code>中每个数字指它所在行第一个字符串(包括换行)之前所具有的字符串总数

<code>state.tShift</code>中每个数字指它所在行的缩进的空格数

现在我们已经大致明确了它其中的意义，但同时也明白它输出的是一个二维数组，所以我们需要行数来表示数字所在的行数以实现精确的定位，而这个行数可以在replace函数的第二个参数(startLine)和第三个参数(endLine)获取，照葫芦画瓢地输出参数观察意义

<code>startLine</code>中每个数字指所在行

<code>endLine</code>中每个数字也表示所在行

每行指的是没有换行的一行

接下来通过这些参数获取<code>!@</code>所包裹的字符串，返回相应的html数据

### 获取匹配的字符位置

根据上述分析，获取每行初始位置和结束位置

<pre>
<code>
let pos = state.bMarks[startLine] + state.tShift[startLine];
let endLine_0 = state.eMarks[startLine] + state.tShift[startLine];
</code>
</pre>

利用`substring`我们可以获取每行中的字符串，不过在这之前要找到我们所指定的标签`!@`，因为使用的是块级元素，所以要使用`charCodeAt`获取行开头处两个字符的十六进制ASCII值，并与`!@`的十六进制ASCII值进行比较，这样便可以去除无关行

将`!`和`@`的HEX ASCII转换成String类型进行相加然后再比较，防止数字相加重复，~~不管怎样先能跑就行~~

<pre>
<code>
let hexAscii = state.src.charCodeAt(pos).toString() + state.src.charCodeAt(pos + 1).toString();

if (hexAscii != 3364) { return false; }
</code>
</pre>

使用正则表达式将`!@`字符中间的内容提取出

<pre>
<code>
let text = state.src.substring(pos, endLine_0);
let match = text.match(/(?<=!@).*(?=!@)/g);
</code>
</pre>

最后需要将所要解析的标签，文本内容根据token所定义的参数输入

<pre>
<code>
let Tokens = state.push('codeblock_open', 'pre', 1);
Tokens.markup = '!@';
Tokens.map = [startLine, startLine + 1];

let Tokens_2 = state.push('codeblock_open_1', 'code', 1);

Tokens_2 = state.push('html_block', 'code', 0);
Tokens_2.content = match;
Tokens_2.children = [];

Tokens = state.push('html_block', 'code', 0);
Tokens.map = [startLine, startLine + 1];
Tokens.children = [];

Tokens_2 = state.push('codeblock_close_1', 'code', -1);

Tokens = state.push('codeblock_close', 'pre', -1);
Tokens.markup = '!@';
</code>
</pre>
根据提示的参数输入即可，不过编译后我们不难发现编译后的文本中还含有未经编译的文本，而且只会解析第一行，这时候就需要将`state.line`标记为原文本之后的行数，即`state.line = startLine + line_number`，最后再`return true`

!#&信息&{关于`state.push`中type的值，请参阅[Default renderer rules](https://github.com/markdown-it/markdown-it/blob/master/docs/examples/renderer_rules.md#default-renderer-rules "Default renderer rules")获取更多信息}

### 完整代码

<pre>
<code>
md.block.ruler.before('paragraph', '!@codeblock_0', function replace(state, startLine, endLine) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let endLine_0 = state.eMarks[startLine];
  let hexAscii = state.src.charCodeAt(pos).toString() + state.src.charCodeAt(pos + 1).toString();

  if (hexAscii != 3364) { return false; }

  let text = state.src.substring(pos, endLine_0);
  let match = text.match(/(?<=!@).*(?=!@)/g)[0];

  if (match != null) {
    let Tokens = state.push('codeblock_open', 'pre', 1);
    Tokens.markup = '!@';
    Tokens.map = [startLine, startLine + 1];

    let Tokens_2 = state.push('codeblock_open_1', 'code', 1);

    Tokens_2 = state.push('html_block', 'code', 0);
    Tokens_2.content = match;
    Tokens_2.children = [];

    Tokens = state.push('html_block', 'code', 0);
    Tokens.map = [startLine, startLine + 1];
    Tokens.children = [];

    Tokens_2 = state.push('codeblock_close_1', 'code', -1);

    Tokens = state.push('codeblock_close', 'pre', -1);
    Tokens.markup = '!@';

    state.line = startLine + 1;
    return true;
  }
});
</code>
</pre>

经过测试很容易发现，这样做往往只能解析一行，因此寻找到符合要求的单个标签后还要往下继续寻找，根据函数中的参数`endLine`很容易就能想到写一个循环去下文匹配符合条件的标签

### 完整代码_2

!@
md.block.ruler.before('paragraph', '!@codeblock_0', function replace(state, startLine, endLine) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let endLine_0 = state.eMarks[startLine] + state.tShift[startLine];
  let hexAscii = state.src.charCodeAt(pos).toString() + state.src.charCodeAt(pos + 1).toString();

  if (hexAscii != 3364) { return false; }
  if (pos == (endLine_0 - 2)) {
    for (let i = 1; i <= endLine; i++) {
      let pos_1 = state.bMarks[startLine + i] + state.tShift[startLine + i];
      let hexAscii_1 = state.src.charCodeAt(pos_1).toString() + state.src.charCodeAt(pos_1 + 1).toString();
      if (hexAscii_1 == 3364) {
        let text = state.src.substring(pos + 2, pos_1);

        if (text != null) {
          tokenPush(text, startLine, endLine);
          state.line = startLine + i + 1;
          return true;
        }

        break
      };
    }
  } else {

    let text = state.src.substring(pos, endLine_0);
    let match = text.match(/(?<=!@).*(?=!@)/g);

    if (match != null) {
      tokenPush(match[0], startLine, endLine);
      state.line = startLine + 1;
      return true;
    }

  }

  function tokenPush(match, startLine, endLine) {
    let Tokens = state.push('codeblock_open', 'pre', 1);
    Tokens.markup = '!@';
    Tokens.map = [startLine, startLine + 1];

    let Tokens_2 = state.push('codeblock_open_1', 'code', 1);

    Tokens_2 = state.push('html_block', 'code', 0);
    Tokens_2.content = match;
    Tokens_2.children = [];

    Tokens = state.push('html_block', 'code', 0);
    Tokens.map = [startLine, startLine + 1];
    Tokens.children = [];

    Tokens_2 = state.push('codeblock_close_1', 'code', -1);

    Tokens = state.push('codeblock_close', 'pre', -1);
    Tokens.markup = '!@';
  }
});
!@

这篇文章的的完整代码_2，就是在原始markdown文件中拿`!@`生成的哦(～￣▽￣)～

当然，那种稀奇古怪的写法比如

!@ <br>
text!@

!@ text <br>
!@

只能靠读者慢慢解决了