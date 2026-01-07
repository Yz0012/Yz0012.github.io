---
title : 积分作业_7
path : docs\htmlDoc\html_mathwork\2025\Integral\
type : 数学作业
createTime : Wed, 07 Jan 2026 06:12:12 GMT
---

# 积分作业_定积分的换元法和分部积分法_7

## 238 5-3

!%&注意&{本文档使用ai辅助数据录入，部分进行人工修改，可能出现错误}

### 1.计算定积分
(1)
$$ \displaystyle \int_{\frac{\pi}{3}}^{\pi} \sin \left( x + \frac{\pi}{3} \right) \mathrm{d}x = - \left[ \cos \left( x + \frac{\pi}{3} \right) \right]_{\frac{\pi}{3}}^{\pi} = -\cos \frac{4}{3}\pi + \cos \frac{2}{3}\pi = 0 $$

(4)
<p>
$$ \displaystyle \int_{0}^{\pi} (1 - \sin^3 \theta) \mathrm{d}\theta = \int_{0}^{\pi} \mathrm{d}\theta + \int \sin^2 \theta \mathrm{d}(\cos \theta) = \int_{0}^{\pi} \mathrm{d}\theta + \int (1 - \cos^2 \theta) \mathrm{d}(\cos \theta) $$
$$ \displaystyle = [\theta]_{0}^{\pi} + \left[ \cos \theta - \frac{1}{3} \cos^3 \theta \right]_{0}^{\pi} = \pi - 0 - \frac{2}{3} - \frac{2}{3} = \pi - \frac{4}{3} $$
</p>

(8)
$$ \displaystyle \text{令 } x = \sin \theta, \theta \in \left[ 0, \frac{\pi}{2} \right] $$
$$ \displaystyle \text{原式} = \int_{\frac{1}{\sqrt{2}}}^{1} \frac{\sqrt{1 - \sin^2 \theta}}{\sin^2 \theta} \mathrm{d} \sin \theta = \int_{\frac{\pi}{4}}^{\frac{\pi}{2}} \frac{\cos \theta}{\sin^2 \theta} \cdot \cos \theta \mathrm{d}\theta $$
$$ \displaystyle = \int_{\frac{\pi}{4}}^{\frac{\pi}{2}} (\csc^2 \theta - 1) \mathrm{d}\theta = [-\cot \theta - \theta]_{\frac{\pi}{4}}^{\frac{\pi}{2}} $$
$$ \displaystyle \because \theta = \arcsin x, \arcsin 1 = \frac{\pi}{2}, \arcsin \frac{\sqrt{2}}{2} = \frac{\pi}{4} $$
$$ \displaystyle \text{原式} = 0 - \frac{\pi}{2} - \left( -1 - \frac{\pi}{4} \right) = 1 - \frac{\pi}{4} $$

(10)
$$\displaystyle \int_{1}^{\sqrt{3}} \frac{\mathrm{d}x}{x^{2} \sqrt{1+x^{2}}} , \text{令} x = \tan \theta$$
$$\displaystyle \text{原式} = \int_{\frac{\pi}{4}}^{\frac{\pi}{3}} \frac{\sec^{2} \theta}{\tan^{2} \theta \sec \theta} \mathrm{d}\theta = \int_{\frac{\pi}{4}}^{\frac{\pi}{3}} \frac{\cos \theta}{\sin^{2} \theta} \mathrm{d}\theta = \int_{\frac{\pi}{4}}^{\frac{\pi}{3}} \frac{1}{\sin^{2} \theta} \mathrm{d}(\sin \theta)$$
$$\displaystyle = \left[ -\frac{1}{\sin \theta} \right]_{\frac{\pi}{4}}^{\frac{\pi}{3}}$$
$$\displaystyle = -\frac{2}{\sqrt{3}} + \frac{1}{\frac{1}{\sqrt{2}}}$$
$$\displaystyle = -\frac{2\sqrt{3}}{3} + \sqrt{2}$$

(11)
<p>
$$\displaystyle \text{令} t = 5-4x , x = \frac{5-t}{4}$$
$$\displaystyle \text{原式} = \int_{9}^{1} \frac{\frac{5-t}{4}}{\sqrt{t}} \cdot (-\frac{1}{4}) \mathrm{d}t = -\int_{9}^{1} \frac{5-t}{16\sqrt{t}} \mathrm{d}t = \int_{1}^{9} (\frac{5}{16} t^{-\frac{1}{2}} - \frac{1}{16} t^{\frac{1}{2}}) \mathrm{d}t$$
$$\displaystyle = \frac{5}{16} [2t^{\frac{1}{2}}]_{1}^{9} - \frac{1}{16} [\frac{2}{3} t^{\frac{3}{2}}]_{1}^{9}$$
$$\displaystyle = \frac{5}{16} [2 \cdot 3 - 2 \cdot 1] - \frac{1}{16} [\frac{2}{3} \cdot 27 - \frac{2}{3} \cdot 1]$$
$$\displaystyle = \frac{5}{4} - \frac{13}{12}$$
$$\displaystyle = \frac{1}{6}$$
</p>

(15)
$$ \displaystyle \text{原式} = \frac{1}{2} \int_{0}^{1} 2t e^{-\frac{t^2}{2}} \text{d}t = \frac{1}{2} \int_{0}^{1} e^{-\frac{t^2}{2}} \text{d}t^2 = \int_{0}^{1} e^{-\frac{t^2}{2}} \text{d}(-\frac{t^2}{2}) = [e^{-\frac{t^2}{2}}]_0^1 = 1 - e^{-\frac{1}{2}} $$

### 8.
(2)
$$ \displaystyle \begin{aligned} \text{原式} &= [\frac{1}{2}x^2 \ln x]_1^e - \int_1^e \frac{1}{2}x \cdot \text{d}x \\\\ &= \frac{e^2}{2} - 0 - [\frac{1}{4}x^2]_1^e \\\\ &= \frac{e^2}{2} - \frac{e^2}{4} + \frac{1}{4} \\\\ &= \frac{1}{4}(e^2 + 1) \end{aligned} $$

(6)
$$
\begin{aligned}
\displaystyle \text{原式} &= \left[ \frac{1}{2} x^2 \arctan x \right]_0^1 - \int_0^1 \frac{1}{2} x^2 \cdot \frac{\mathrm{d}x}{1+x^2} \\\\
\displaystyle &= \frac{\pi}{8} - 0 - \frac{1}{2} \int_0^1 \frac{x^2+1-1}{x^2+1} \cdot \mathrm{d}x \\\\
\displaystyle &= \frac{\pi}{8} - \frac{1}{2} \int_0^1 \left( 1 - \frac{1}{x^2+1} \right) \cdot \mathrm{d}x \\\\
\displaystyle &= \frac{\pi}{8} - \frac{1}{2} \left[ x - \arctan x \right]_0^1 \\\\
\displaystyle &= \frac{\pi}{8} - \frac{1}{2} \left( 1 - \frac{\pi}{4} - 0 \right) \\\\
\displaystyle &= \frac{\pi}{4} - \frac{1}{2}
\end{aligned}
$$

(10)
$$
\begin{aligned}
\displaystyle \text{原式} &= \int_1^e \sin(\ln x) \cdot x \cdot \mathrm{d}(\ln x) = [\cos(\ln x) \cdot x]_1^e + \int_1^e \cos(\ln x) \cdot \mathrm{d}x \\\\
\displaystyle \because \int_1^e \cos(\ln x) \cdot \mathrm{d}x &= [\sin(\ln x) \cdot x]_1^e - \int_1^e \sin(\ln x) \cdot \mathrm{d}x \\\\
\displaystyle \therefore 2 \int_1^e \sin(\ln x) \cdot \mathrm{d}x &= [\sin(\ln x) \cdot x - \cos(\ln x) \cdot x]_1^e \\\\
\displaystyle &= e \sin 1 - e \cos 1 - (0 - 1) \\\\
\displaystyle &= e \sin 1 - e \cos 1 + 1 \\\\
\displaystyle \therefore \text{原式} &= \frac{e \sin 1 - e \cos 1 + 1}{2}
\end{aligned}
$$