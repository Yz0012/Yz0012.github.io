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

根据输出结果或者根据提示，我们可以得知<code>state.eMarks</code>中的每个数字是指它所在行最后一个字符串(包括本身)之前所具有的字符串总数

除此之外，还可以输出<code>state</code>的其余属性，观察它所具有的意义，比如

<code>state.bMarks</code>中每个数字指它所在行第一个字符串(包括本身)之前所具有的字符串总数

<code>state.tShift</code>中每个数字指它所在行的缩进的空格数

现在我们已经大致明确了它其中的意义，但同时也明白它输出的是一个二维数组，所以我们需要行数来表示数字所在的行数以实现精确的定位，而这个行数可以在replace函数的第二个参数(startLine)和第三个参数(endLine)获取，照猫画虎地输出参数观察意义

<code>startLine</code>中每个数字指它起始所在行

<code>endLine</code>中每个数字表示结束所在行

接下来通过这些参数获取<code>!@</code>所包裹的字符串，返回相应的html数据

### 获取匹配的字符位置

根据上述分析，获取每行初始位置和结束位置

<pre>
<code>
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let endLine = state.eMarks[startLine];
</code>
</pre>

利用`substring`我们可以获取每行中的字符串，不过在这之前要对我们所指定的标签`!@`进行正则匹配，所以要使用`charCodeAt`获取指定位置处字符的Unicode值，并与`!@`的Unicode值进行匹配


