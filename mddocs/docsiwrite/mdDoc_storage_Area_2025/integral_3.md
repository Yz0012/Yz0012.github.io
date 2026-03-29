---
title : 积分作业_3
path : docs\htmlDoc\html_mathwork\2025\Integral\
type : 数学作业
createTime : Sun, 21 Dec 2025 14:02:45 GMT
---

###  积分作业_分部积分法_3

#### 207 4-3

!%&注意&{本文档使用ai辅助数据录入，部分进行人工修改，可能出现错误}

##### (3)
$ \int \arcsin x \mathrm{d}x $

设

$$ u = \arcsin x, \mathrm{d}v = \mathrm{d}x, $$
则
$$ \int \arcsin x \mathrm{d}x = \arcsin x \cdot x - \frac{1}{2} \int \frac{x}{\sqrt{1-x^2}} \mathrm{d}x = x \arcsin x + \frac{1}{2} \int \frac{\mathrm{d}(1- x^2)}{(1-x^2)^{\frac{3}{2}}} $$

$$ = x \arcsin x + \sqrt{1-x^2} + C $$

##### (7)

$$ \int e^{-2x} \sin\frac{x}{2} \mathrm{d}x = - \frac{1}{2} e^{-2x} \sin\frac{x}{2} + \frac{1}{4} \int e^{-2x} \cos\frac{x}{2} \mathrm{d}x $$

$$ \because \int e^{-2x} \cos\frac{x}{2} \mathrm{d}x = - \frac{1}{2} e^{-2x} \cos\frac{x}{2} - \frac{1}{4} \int e^{-2x} \sin\frac{x}{2} \mathrm{d}x $$

$$ \therefore \int e^{-2x} \sin\frac{x}{2} \mathrm{d}x = - \frac{1}{2} e^{-2x} \sin\frac{x}{2} - \frac{1}{8} e^{-2x} \cos\frac{x}{2} - \frac{1}{16} \int e^{-2x} \sin\frac{x}{2} \mathrm{d}x $$

$$ \int e^{-2x} \sin\frac{x}{2} \mathrm{d}x = - \frac{2}{17} \left( 4 \sin\frac{x}{2} + \cos\frac{x}{2} \right) e^{-2x} + C $$

##### (8)

$$ \int x \cos\frac{x}{2} \mathrm{d}x = 2 x \sin\frac{x}{2} - 2 \int \sin\frac{x}{2} \mathrm{d}x = 2 x \sin\frac{x}{2} - 4 \int \sin\frac{x}{2} \mathrm{d}(\frac{x}{2}) = 2 x \sin\frac{x}{2} + 4 \cos\frac{x}{2} + C $$

##### (9)

$$ \int x^2 \arctan x \mathrm{d}x = \frac{1}{3} x^3 \arctan x - \frac{1}{3} \int \frac{x^3}{1+x^2} \mathrm{d}x $$

$$ = \frac{1}{3} x^3 \arctan x - \frac{1}{6} \int \left( 1 - \frac{1}{1+x^2} \right) \mathrm{d}(x^2) $$

$$ = \frac{1}{3} x^3 \arctan x - \frac{x^2}{6} + \frac{1}{6} \ln|1+x^2| + C $$

##### (12)

$$ \int t e^{-2t} \mathrm{d}t = - \frac{1}{2} t e^{-2t} + \frac{1}{2} \int e^{-2t} \mathrm{d}t = -\frac{1}{2} e ^ {-2t}(t + \frac{1}{2}) + C
$$

##### (13)

 $$ \int x \ln(x-1) \mathrm{d}x = \frac{1}{2} x^2 \ln(x-1) - \frac{1}{2} \int \frac{x^2}{x-1} \mathrm{d}x $$

$$ = \frac{1}{2} x^2 \ln(x-1) - \frac{1}{2} \int \left( x + 1 + \frac{1}{x-1} \right) \mathrm{d}x $$

$$
= \frac{1}{2} x^2 \ln(x-1) - \frac{1}{4}x^2 - \frac{x}{2} - \frac{1}{2}\ln|x-1| + C
$$