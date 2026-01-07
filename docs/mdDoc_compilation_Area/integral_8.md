---
title : 积分作业_8
path : docs\htmlDoc\html_mathwork\2025\Integral\
type : 数学作业
createTime : Wed, 07 Jan 2026 07:34:03 GMT
---

# 积分作业_反常积分_8

## 255 5-4

!%&注意&{本文档使用ai辅助数据录入，部分进行人工修改，可能出现错误}

### 1.
(3)

$$ \displaystyle \int e^{-ax} \mathrm{d}x = -\frac{1}{a} e^{-ax} + C $$

$$ \displaystyle \because \text{当 } x \to +\infty \text{ 时, } e^{-ax} \to 0 $$

$$ \displaystyle \text{当 } x = 0 \text{ 时, } -\frac{1}{a} e^{-a \cdot 0} = -\frac{1}{a} $$

$$ \displaystyle \therefore \text{原函数收敛} $$

$$ \displaystyle \int_{0}^{+\infty} e^{-ax} \mathrm{d}x = \left[ -\frac{1}{a} e^{-ax} \right]_{0}^{+\infty} = 0 - \left( -\frac{1}{a} \right) = \frac{1}{a} $$

(6)

$$ \displaystyle \int \frac{\mathrm{d}x}{x^2+2x+2} = \int \frac{\mathrm{d}x}{(x+1)^2+1} = \int \frac{\mathrm{d}u}{u^2+1} = \arctan u $$

$$ \displaystyle \because \text{当 } x \to +\infty, u \to +\infty, \arctan u \to \frac{\pi}{2} $$

$$ \displaystyle x \to -\infty, u \to -\infty, \arctan u \to -\frac{\pi}{2} $$

$$ \displaystyle \therefore \int_{-\infty}^{+\infty} \frac{\mathrm{d}x}{x^2+2x+2} = \left[ \arctan(x+1) \right]_{-\infty}^{+\infty} = \frac{\pi}{2} - \left( -\frac{\pi}{2} \right) = \pi $$

(8)
<p>$$\displaystyle \text{原式} = -\int_{0}^{2} \frac{\mathrm{d}(1-x)}{(1-x)^{2}} = \left[ \frac{1}{1-x} \right]_{0}^{2}$$
$$\displaystyle \because \text{当 } x \to 1 \text{ 时, } \frac{1}{1-x} \to \infty$$
$$\displaystyle \therefore \int_{0}^{2} \frac{\mathrm{d}x}{(1-x)^{2}} = \infty$$</p>

### 2.

$$\displaystyle \int_{1}^{+\infty} \frac{\mathrm{d}x}{4x^{2}-1} = \frac{1}{4} \left[ \ln \left| \frac{2x-1}{2x+1} \right| \right]_{1}^{+\infty} = 0 + \frac{\ln 3}{4} = \frac{\ln 3}{4}$$

### 5.
<p>$$\displaystyle \int_{0}^{1} \ln x \cdot \mathrm{d}x = [x \cdot \ln x]_{0}^{1} - \int_{0}^{1} \mathrm{d}x = [x \cdot \ln x - x]_{0}^{1}$$
$$\displaystyle \because [x \cdot \ln x - x]_{\epsilon}^{1} \quad (\epsilon \to 0^{+} \text{ 时})$$
$$\displaystyle \lim_{\epsilon \to 0^{+}} (\epsilon \cdot \ln \epsilon - \epsilon) = 0$$
$$\displaystyle \therefore \text{原式} = -1 - 0 = -1$$</p>