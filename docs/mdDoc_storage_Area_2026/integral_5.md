---
title : 积分作业_5
path : docs\htmlDoc\html_mathwork\2025\Integral\
type : 数学作业
createTime : Wed, 31 Dec 2025 11:24:42 GMT
js_src : https://cdn.jsdelivr.net/npm/function-plot@1/dist/function-plot.js
---

###  积分作业_定积分的概念_5

#### 230 5-1

!%&注意&{本文档使用ai辅助数据录入，部分进行人工修改，可能出现错误}

##### 3.证明下列等式

##### 3.(1)

$$
\int_{0}^{1}2x \mathrm{d}x = 1
$$

> 根据定积分的几何意义，$\int_{0}^{1}2x \mathrm{d}x = 1$表示函数$2x$，$x=0$,$x=1$与$x$轴围成的面积，因此根据三角形面积公式，该面积$S=\frac{1}{2}\times 1\times 2=1$，所以等式$\int_{0}^{1}2x \mathrm{d}x = 1$成立

<button id='open_graph_0' onclick='functionPlot_0()' type='button'>
    <span>显示/刷新图像</span>
</button>
<div id='graph_0' class='graph_html'></div>

##### 3.(2)

$$
\int_0^{1}\sqrt{1-x^2} \mathrm{d}x = \frac{\pi}{4}
$$

> 根据定积分的几何意义，$\int_0^{1}\sqrt{1-x^2} \mathrm{d}x = \frac{\pi}{4}$表示函数$\sqrt{1-x^2}$，$x=0$,$x=1$与$x$轴围成的面积，根据函数图像判断其是一个四分之一圆，因此根据圆形面积公式，该面积$S=\frac{\pi \times 1^2}{4}=\frac{\pi}{4}$，所以等式$\int_0^{1}\sqrt{1-x^2} \mathrm{d}x = \frac{\pi}{4}$成立

<button id='open_graph_1' onclick='functionPlot_1()' type='button'>
    <span>显示/刷新图像</span>
</button>
<div id='graph_1' class='graph_html'></div>

##### 8.

$$ \int_{-1}^1 3f(x) \mathrm{d}x = 18, \quad \int_{-1}^3 f(x) \mathrm{d}x = 4, \quad \int_{-1}^3 g(x) \mathrm{d}x = 3. $$

求：

(2) $$ \int_1^3 f(x) \mathrm{d}x; $$

(4) $$ \int_{-1}^3 \frac{1}{5} \left[ 4f(x) + 3g(x) \right] \mathrm{d}x. $$

##### 8.(2)

$$ \int_{1}^{3} f(x) \mathrm{d}x = -\int_{-1}^{1} f(x) \mathrm{d}x + \int_{-1}^{3} f(x) \mathrm{d}x $$

$$ = -2 $$

##### 8.(4)

$$
\begin{aligned}
 \int_{-1}^{3} \frac{1}{5} \left[ 4f(x) + 3g(x) \right] \mathrm{d}x
    &= \frac{4}{5} \int_{-1}^{3} f(x) \mathrm{d}x + \frac{3}{5} \int_{-1}^{3} g(x) \mathrm{d}x \\\\
    &= \frac{16}{5} + \frac{3}{5} \times 3 \\\\
    &= 5 
\end{aligned}
$$

##### 10. 估计下列各积分的值

(2) $$ \int_{\frac{\pi}{4}}^{\frac{5}{4}\pi} (1 + \sin^2 x) \mathrm{d}x; $$

(4) $$ \int_{2}^{0} e^{x^2 - x} \mathrm{d}x. $$

##### 10.(2)

> 复合函数求得其函数的最大值为2,最小值为1，因此$\pi \le $ $\int_{\frac{\pi}{4}}^{\frac{5}{4}\pi} (1 + \sin^2 x) \mathrm{d}x$ $\le 2\pi$

##### 10.(4)

> 复合函数求得其函数的最大值为$e^2$,最小值为$e^{-\frac{1}{4}}$，$\int_{2}^{0} e^{x^2 - x} \mathrm{d}x = -\int_{0}^{2} e^{x^2 - x} \mathrm{d}x$，因此$-2e^2 \le $ $\int_{2}^{0} e^{x^2 - x} \mathrm{d}x$ $\le -2e^{-\frac{1}{4}}$

##### 13.

##### 13.(3)

比较$\int_1^{2}\ln x \mathrm{d}x$和$\int_1^{2}(\ln x)^2 \mathrm{d}x$大小

> $$
\begin{aligned}
    \int_1^{2}\ln x \mathrm{d}x - \int_1^{2}(\ln x)^2 \mathrm{d}x &= \int_1^{2}\ln x (1-\ln x) dx \\\\
    \because x \in [1,2] ,1 = \ln e > \ln 2 \\\\
    \therefore \ln x (1-\ln x) > 0
\end{aligned}
$$
由结论 <br>
$f(x)\ge 0,f(x) \not\equiv 0,则\int_{a}^{b} f(x) \mathrm{d}x >0$ <br>
得$\int_1^{2}\ln x \mathrm{d}x - \int_1^{2}(\ln x)^2 \mathrm{d}x >0$ <br>
即$\int_1^{2}\ln x \mathrm{d}x > \int_1^{2}(\ln x)^2 \mathrm{d}x$ <br>

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

    function functionPlot_1 () {
    functionPlot({
    target: '#graph_1',
    width: document.getElementById('wrap_0').clientWidth,
    height: 600,
    grid: false,
    data: [{
        graphType: 'polyline',
        strokeWidth: 4,
        fn: '(1-x^2)^0.5',
        range : [0,1],
        color: '#ff00aaff'
    }],
    xAxis: {
        domain: [-1, 2]     // x轴范围
    },
    yAxis: {
        domain: [-2, 2]    // y轴范围
    }
    });
    }
</script>
