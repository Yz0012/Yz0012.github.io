---
title : 积分作业_6
path : docs\htmlDoc\html_mathwork\2025\Integral\
type : 数学作业
createTime : Sun, 04 Jan 2026 08:05:35 GMT
---

# 积分作业_微积分基本公式_6

## 238 5-2

!%&注意&{本文档使用ai辅助数据录入，部分进行人工修改，可能出现错误}

### 3.
$
\displaystyle\text{求由 } \int_{0}^{y} e^{t} dt + \int_{0}^{x} \cos t dt = 0 \text{ 所确定的隐函数对 } x \text{ 的导数 } \frac{dy}{dx}.
$


$$ \displaystyle \int_{0}^{y} e^{t}\mathrm{d}t = e^{y} - 1 $$
$$ \displaystyle \int_{0}^{x} \cos t\mathrm{d}t = \sin x - \sin 0 = \sin x $$
$$ \displaystyle \therefore e^{y} - 1 + \sin x = 0 $$
$$ \displaystyle e^{y} \cdot \frac{\mathrm{d}y}{\mathrm{d}x} + \cos x = 0 \quad\quad \frac{\mathrm{d}y}{\mathrm{d}x} = -\frac{\cos x}{e^{y}} = \frac{\cos x}{\sin x - 1} $$

### 4.
$
\displaystyle\text{当 } x \text{ 为何值时，函数 } I(x) = \int_{0}^{x} t e^{-t^{2}} dt \text{ 有极值？}
$

$$ \displaystyle I^\prime(x) = xe^{-x^2} $$
$$ \displaystyle \text{令 } I^\prime(x) = 0 \quad \text{得 } x = 0 $$
$$ \displaystyle \because x < 0, \quad I^\prime(x) < 0 $$
$$ \displaystyle x > 0, \quad I^\prime(x) > 0 $$
$$ \displaystyle \therefore x = 0 \text{ 时 } I(x) \text{ 有极值} $$

### 5.计算下列各导数：

$$
\begin{aligned}
& \quad (1) \frac{d}{dx} \int_{0}^{x^{2}} \sqrt{1+t^{2}} dt; \\\\
& \quad (2) \frac{d}{dx} \int_{x^{2}}^{x^{3}} \frac{dt}{\sqrt{1+t^{4}}}; \\\\
& \quad (3) \frac{d}{dx} \int_{\sin x}^{\cos x} \cos (\pi t^{2}) dt.
\end{aligned}
$$

(1)

$$ \displaystyle \frac{\mathrm{d}}{\mathrm{d}x} \int_{0}^{x^2} \sqrt{1+t^2}\mathrm{d}t = \frac{\mathrm{d}}{\mathrm{d}u} \int_{0}^{u} \sqrt{1+t^2} \cdot (x^2)^\prime $$
$$ \displaystyle = \sqrt{1+u^2} \cdot 2x - 0 $$
$$ \displaystyle = 2x \cdot \sqrt{1+x^4} $$

(2)

$$ \displaystyle \frac{\mathrm{d}}{\mathrm{d}x} \int_{x^2}^{x^3} \frac{\mathrm{d}t}{\sqrt{1+t^4}} \quad \text{令 } x^3 = u, \quad x^2 = v $$
$$ \displaystyle \text{原式} = \frac{1}{\sqrt{1+u^4}} \cdot u^\prime - \frac{1}{\sqrt{1+v^4}} \cdot v^\prime $$
$$ \displaystyle = \frac{3x^2}{\sqrt{1+x^{12}}} - \frac{2x}{\sqrt{1+x^8}} $$

(3)

$$ \displaystyle \frac{\mathrm{d}}{\mathrm{d}x} \int_{\sin x}^{\cos x} \cos(\pi t^2)\mathrm{d}t \quad \text{令 } \cos x = u, \quad \sin x = v $$
$$ \displaystyle \text{原式} = \cos(\pi \cos^2 x) \cdot u^\prime - \cos(\pi \sin^2 x) \cdot v^\prime $$
$$ \displaystyle = -\sin x \cos(\pi \cos^2 x) - \cos x \cos(\pi \sin^2 x) $$

### 第 9 题
(6) $$ \displaystyle \int_{0}^{\sqrt{3}a} \frac{\mathrm{d}x}{a^2 + x^2} =  \frac{1}{a} \arctan \frac{\sqrt{3}a}{a} = \frac{1}{a} \arctan \sqrt{3} = \frac{\pi}{3a} $$

(7) $$ \displaystyle \int_{0}^{1} \frac{\mathrm{d}x}{\sqrt{4 - x^2}} = \arcsin \frac{1}{2} - \arcsin 0 = \frac{\pi}{6} $$

(8) $$ \displaystyle \int_{-1}^{0} \frac{3x^4 + 3x^2 + 1}{x^2 + 1}\mathrm{d}x = \int_{-1}^{0} \frac{3x^2(x^2 + 1) + 1}{x^2 + 1}\mathrm{d}x = \int_{-1}^{0} \left( 3x^2 + \frac{1}{x^2 + 1} \right)\mathrm{d}x $$
$$ \displaystyle = [x^3 + \arctan x]_{-1}^{0} $$
$$ \displaystyle = 0 + \arctan 0 - (-1 + \arctan(-1)) $$
$$ \displaystyle = 1 + \frac{\pi}{4} $$

(10) $$ \displaystyle \int_{0}^{\frac{\pi}{4}} \tan^2 \theta\mathrm{d}\theta = \int_{0}^{\frac{\pi}{4}} (\sec^2 \theta - 1)\mathrm{d}\theta = [\tan \theta - \theta]_{0}^{\frac{\pi}{4}} $$
$$ \displaystyle = 1 - \frac{\pi}{4} - (0 - 0) $$
$$ \displaystyle = 1 - \frac{\pi}{4} $$

(11) $$ \displaystyle \int_{0}^{2\pi} |\sin x|\mathrm{d}x = 2 \int_{0}^{\pi} \sin x\mathrm{d}x = -2 [\cos x]_{0}^{\pi} $$
$$ \displaystyle = -2 \cos \pi + 2 \cos 0 $$
$$ \displaystyle = 4 $$

<!-- 正常情况下]_符号会被编译为<em>标签，导致无法正常显示 -->
<p>
(12) 
$$ \displaystyle \int_{0}^{2} f(x)\mathrm{d}x = \int_{1}^{2} \frac{1}{2}x^2\mathrm{d}x + \int_{0}^{1} (x + 1)\mathrm{d}x = \frac{1}{6} [x^3]_{1}^{2} + [\frac{1}{2}x^2 + x]_{0}^{1} $$
$$ \displaystyle = \frac{7}{6} + \frac{9}{6} = \frac{8}{3} $$
</p>

### 11.证明
(1) 
> $$ \displaystyle \text{左边} = \frac{1}{2} \int_{-\pi}^{\pi} \sin[(k+l)x]\mathrm{d}x - \frac{1}{2} \int_{-\pi}^{\pi} \sin[(k-l)x]\mathrm{d}x $$
$$ \displaystyle \because k+l, k-l \text{ 不为零}, \quad \sin ax \text{ 在区间 } [-\pi, \pi] \text{ 上为奇函数} $$
$$ \displaystyle \therefore \frac{1}{2} \int_{-\pi}^{\pi} \sin[(k+l)x]\mathrm{d}x = 0, \quad \frac{1}{2} \int_{-\pi}^{\pi} \sin[(k-l)x]\mathrm{d}x = 0 $$
$$ \displaystyle \therefore \text{左边} = 0 = \text{右边} $$

(2) 
> $$ \displaystyle \text{左边} = \frac{1}{2} \int_{-\pi}^{\pi} \cos[(k+l)x]\mathrm{d}x + \frac{1}{2} \int_{-\pi}^{\pi} \cos[(k-l)x]\mathrm{d}x $$
$$ \displaystyle \because \text{在 } [-\pi, \pi] \text{ 内 } \int_{-\pi}^{\pi} \cos(ax)\mathrm{d}x = \left[ \frac{\sin(ax)}{a} \right]_{-\pi}^{\pi} = \frac{\sin(a\pi) - \sin(-a\pi)}{a} = 0 $$
$$ \displaystyle \text{由于 } k+l, k-l \text{ 不为零}, \quad \therefore \text{左边} = 0 = \text{右边} $$

(3)
> $$ \displaystyle \text{左边} = \frac{1}{2} \int_{-\pi}^{\pi} \cos[(k-l)x] \mathrm{d}x - \frac{1}{2} \int_{-\pi}^{\pi} \cos[(k+l)x] \mathrm{d}x $$
$$ \displaystyle \because k+l, k-l \text{ 不为零} $$
$$ \displaystyle \therefore \text{左边} = 0 = \text{右边} $$

### 14.
<blockquote>
<p>
$$ \displaystyle \text{当 } x < 0 \text{ 时, } \Phi(x) = -\int_{x}^{0} 0 \mathrm{d}t = 0 $$
$$ \displaystyle \text{当 } 0 \le x \le \pi \text{ 时, } \Phi(x) = \int_{0}^{x} \frac{1}{2} \sin t \mathrm{d}t = -\frac{1}{2} [\cos t]_{0}^{x} = \frac{1}{2} - \frac{1}{2} \cos x $$
$$ \displaystyle \text{当 } x > \pi \text{ 时, } \Phi(x) = 0 + \left[ \frac{1}{2} - \frac{1}{2} \cos x \right]_{0}^{\pi} + \int_{\pi}^{x} 0 \mathrm{d}t = 0 + 1 + 0 = 1 $$
$$ \displaystyle \therefore \Phi(x) = \begin{cases} 0, & x < 0 \\ \frac{1}{2} - \frac{1}{2} \cos x, & 0 \le x \le \pi \\ 1, & x > \pi \end{cases} $$</p></blockquote>