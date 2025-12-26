---
title : 站点中新增的markdown-it规则
path : docs\htmlDoc\html_sitedoc\
type : 站点文档
createTime : Wed, 24 Dec 2025 11:58:57 GMT
---

### 站点中新增的markdown-it规则

!%&注意&{本文为站点文档，其中可能含有未经诠释的信息。若其中信息已过时，则该文档可能会被删除}

<p></p>

!%&耦合&{本文档与genDoc.js产生耦合，修改时注意}

目前站点定义了三种markdown-it的规则

#### 第一种

用`!@`包裹的字符串将会被解析为用`<code><pre><code></code></pre></code>`包裹的字符串，其中`<pre>`中会包含一个含有`onclick()`函数的`<svgicon>`标签的icon，`onclick()`函数调用`copyToClipboard(this.parentElement)`函数，`copyToClipboard()`函数被定义在docs\docs_m.js中，用于复制`<code>`中的字符串

渲染效果如下

!@
print(hello world!)
!@

关于空行问题，见[log_0001](/docs/htmlDoc/html_sitedoc/log/log_0001.html "log_0001")

#### 第二种

结构：!#&标题&{文字}

渲染效果如下

!#&标题&{文字}

#### 第三种

结构：!%&标题&{文字}

渲染效果如下

!%&标题&{文字}