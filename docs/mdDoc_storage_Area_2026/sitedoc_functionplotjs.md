---
title : 站点文档_利用function plot绘制函数图像
path : docs\htmlDoc\html_sitedoc\
type : 站点文档
createTime : Fri, 02 Jan 2026 11:58:06 GMT
js_src : https://cdn.jsdelivr.net/npm/function-plot@1/dist/function-plot.js
---

### 利用function plot绘制函数图像

#### 零.前言

想给网站新增展示函数图像的功能，也就找到了function plot这个库

可以点击下面的按钮预览function plot绘制的函数

<button id='open_graph_0' onclick='functionPlot_0()' type='button'>
    <span>显示/刷新图像</span>
</button>
<div id='graph_0' class='graph_html'></div>

#### 一.使用方法

首先需要给html加上脚本

<pre><code>&lt;script src="https://cdn.jsdelivr.net/npm/function-plot@1/dist/function-plot.js" id="js_file_newElm_">&lt;/script></code></pre>

然后在html中写一个容器

<pre><code>&lt;div id='graph_0' class='graph_html'>&lt;/div>
</code></pre>

最后在JavaScript中写上需要绘制的函数

<pre><code>function functionPlot_0 () {
    functionPlot({
    target: '#graph_0',
    width: document.getElementById('wrap_0').clientWidth,
    height: 400,
    grid: true,
    data: [{
        strokeWidth: 4,               // 线宽
        fn: '2x',                  // 函数表达式
        color: '#b7ed88'        // 线条颜色
    }],
    tip: {
    xLine: true,                  // 显示垂直辅助线
    yLine: true,                  // 显示水平辅助线
        renderer: function(x, y, index) {
        return `${'y=2x'}:(${x.toFixed(2)}, ${y.toFixed(2)})`;
    }
    },
    xAxis: {
        domain: [-5, 5]     // x轴范围
    },
    yAxis: {
        domain: [-5, 5]    // y轴范围
    }
    });
}
</code></pre>

这里使用按钮进行绘制，所以外层套了一层函数以便调用。以上代码很好理解，这里不过多赘述

#### 二.可能出现的问题

目前我遇到的是`power is not an integer, you should use nth-root instead, returning an empty interval`报错，具体表现为函数无图像显示，出现这种问题的函数一般是非整数的指数函数，比如$\sqrt{1-x^2}$，解决方法也很简单：在`data: [{}]`中添加`graphType: 'polyline'`

<script id='graph_javascript'>
    function functionPlot_0 () {
    functionPlot({
    target: '#graph_0',
    width: document.getElementById('wrap_0').clientWidth,
    height: 400,
    grid: true,
    data: [{
        strokeWidth: 4,               // 线宽
        fn: '2x',          // 函数表达式
        color: '#b7ed88'        // 线条颜色
    }],
    tip: {
    xLine: true,                  // 显示垂直辅助线
    yLine: true,                  // 显示水平辅助线
        renderer: function(x, y, index) {
        return `${'y=2x'}:(${x.toFixed(2)}, ${y.toFixed(2)})`;
    }
    },
    xAxis: {
        domain: [-5, 5]     // x轴范围
    },
    yAxis: {
        domain: [-5, 5]    // y轴范围
    }
    });
    }
</script>