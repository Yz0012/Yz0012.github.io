---
title : 积分作业_2
path : docs\htmlDoc\html_mathwork\2025\Integral\
type : 数学作业
createTime : Sat, 20 Dec 2025 10:56:53 GMT
---

###  积分作业_换元积分法_2

#### 202 4-2

!%&注意&{本文档使用ai辅助数据录入，部分进行人工修改，可能出现错误}

(4)

$$
\begin{aligned}
 \int \frac{\mathrm{d}x}{(2-3x)^\frac{1}{3}} = \int (2-3x)^{-\frac{1}{3}} \mathrm{d}x
&= \int - \frac{1}{3} (2-3x)^{-\frac{1}{3}} \mathrm{d}(2-3x)\\\\
&=\frac{(2-3x)^{-1}}{2} + C. 
\end{aligned}
$$

(6)

$$ \int \frac{\sin \sqrt{t}}{\sqrt{t}} \mathrm{d}t =2 \int \sin \sqrt{t} \mathrm{d}\sqrt{t} = -2 \cos \sqrt{t} + C. $$

(7)

$$ \int x e^{-x^2} \mathrm{d}x = \int -\frac{1}{2} e^{-x^2} \mathrm{d}(x^2) = -\frac{1}{2} \int e^{-x^2} \mathrm{d}(x^2) = -\frac{e^{-x^2}}{2} + C. $$

(12)
$$ \int \cos^2(\omega t + \varphi) \sin(\omega t + \varphi) \mathrm{d}t = \int \frac{1}{\omega} \cos^2(\omega t + \varphi) \sin(\omega t + \varphi) \mathrm{d}(\omega t + \varphi) $$

$$ = - \int \frac{1}{\omega} \cos^2(\omega t + \varphi) \mathrm{d}[\cos(\omega t + \varphi)] $$

$$ = - \frac{1}{3\omega} \cos^3(\omega t + \varphi) + C. $$

(14)

$$ \int \frac{\sin x + \cos x}{(\sin x - \cos x)^{\frac{1}{3}}} \mathrm{d}x $$

$$
{令}u = \sin x - \cos x 
 \mathrm{d}u = (\sin x + \cos x) \mathrm{d}x 
 $$

 $$
 {原式} =  \int \frac{\mathrm{d}u}{u^{\frac{1}{3}}}  =  \int u^{\frac{1}{3}} \mathrm{d}u  =  \frac{3}{2} u^{\frac{2}{3}} + C  =  \frac{3}{2(\sin x - \cos x)^{\frac{2}{3}}} + C
$$

(15)

$$ \int \tan^{10} x \cdot \sec^2 x \mathrm{d}x = \int \tan^{10} x \mathrm{d}(\tan x) = \frac{\tan^{11} x}{11} + C. $$

(16)

$$ \int \frac{\mathrm{d}x}{x \ln x \cdot \ln(\ln x)} = \int \frac{\mathrm{d}(\ln x)}{\ln x \cdot \ln(\ln x)} = \int \frac{\mathrm{d}[\ln(\ln x)]}{\ln(\ln x)} = \ln |\ln(\ln x)| + C $$

(18)

$$ \int \frac{10^{2\arccos(x)}}{(1-x)^{\frac{1}{2}}} \mathrm{d}x = - \int 10^{2\arccos(x)} \cdot \mathrm{d}(\arccos x) $$

$$ = - \frac{1}{2} \int 10^{2\arccos(x)} \mathrm{d}(2\arccos x) $$

$$ = - \frac{1}{2} \cdot \frac{\int 10^{2\arccos(x)}}{\ln(10)} + C. $$

(22)

$$ \int \frac{\mathrm{d}x}{\sin x\cos x} = \int \frac{\mathrm{d}(2x)}{\sin (2x)} = \int \csc(2x) \mathrm{d}(2x) = \ln |\csc (2x) - \cot 2x| + C. $$

$$ = \ln |\tan x| + C. $$

(26)

$$ \int \sin 2x \cos 3x \mathrm{d}x = \frac{1}{2} \int 2 \sin \left( \frac{5x-5}{2} \right) \cos \left( \frac{5x+5}{2} \right) \mathrm{d}x $$

$$ = \frac{1}{2} \int (\sin 5x - \sin x) \mathrm{d}x $$

$$ = \frac{1}{2} \int (\sin 5x \cdot \sin x) \mathrm{d}(5x) - \frac{1}{2} \int \sin x \mathrm{d}x$$

$$ = - \frac{1}{10} \cos 5x + \frac{1}{2} \cos x + C. $$

(36)

$$ \int \frac{x^2 \mathrm{d}x}{(a^2 - x^2)^{\frac{1}{2}}} (a > 0) \quad \text{令} \quad x = a \sin t, \text{当} -\frac{\pi}{2} < t < \frac{\pi}{2}, \mathrm{d}x = a \cos t \mathrm{d}t , t = \arcsin \frac{x}{a}. $$

$$ \text{原式：} \int \frac{a^2 \sin^2 t \cdot a \cos t}{a \cos t} \mathrm{d}t = \int a^2 \sin^2 t \mathrm{d}t = \int a^2 \frac{1 - \cos 2t}{4} \mathrm{d}(2t). $$

$$ = \frac{a^2}{4} \int \mathrm{d}(2t) - \frac{a^2}{4} \int \cos 2t \space \mathrm{d}(2t) $$

$$ = \frac{a^2}{2} t - \frac{a^2}{4} \sin 2t + C $$

$$ = \frac{a^2 \cdot \arcsin \frac{x}{a}}{2} - \frac{a^2 \left[ 1 - 2 \left( \frac{x}{a} \right)^2 \right]}{4} + C $$

$$ = \frac{a^2 \cdot \arcsin \frac{x}{a}}{2} - \frac{a^4 - 2x^2}{4a^2} + C $$

(38)
$$
\int \frac{\mathrm{d}x}{(x^2+1)^{\frac{3}{2}}},{令}x = \tan t , -\frac{\pi}{2} < t < \frac{\pi}{2} , \mathrm{d}x = sec^2 t \mathrm{d}t
$$

$$
{原式} =  \int \frac{\sec^2 t \mathrm{d}t}{\sec^3 t} =  \int \frac{\mathrm{d}t}{\sec t} =  \int \cos t \mathrm{d}t =  \sin t + C.
$$

$$
\because \sin t = \frac{x}{\sqrt{x^2+1}} \\\\
\therefore {原式} = \frac{x}{\sqrt{x^2+1}} + C
$$

(40)

$$ \int \frac{\mathrm{d}x}{1 + \sqrt{2x}} = \int \frac{\sqrt{2x}}{1 + \sqrt{2x}}  \mathrm{d}(1 + \sqrt{2x}) = \int \frac{1 + \sqrt{2x} - 1}{1 + \sqrt{2x}}  \mathrm{d}(1 + \sqrt{2x}) $$

$$ = \int \left( 1 - \frac{1}{1 + \sqrt{2x}} \right) \mathrm{d}(1 + \sqrt{2x}) $$

$$ = \int \mathrm{d}(1 + \sqrt{2x}) - \int \frac{1}{1 + \sqrt{2x}}  \mathrm{d}(1 + \sqrt{2x}) $$

$$
= \int \frac{\mathrm{d}x}{1+\sqrt{2x}} - \ln (1+\sqrt{2x}) + C
$$

$$
= \sqrt{2x} - \ln(1+\sqrt{2x}) + C
$$