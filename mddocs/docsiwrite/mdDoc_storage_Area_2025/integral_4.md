---
title : 积分作业_4
path : docs\htmlDoc\html_mathwork\2025\Integral\
type : 数学作业
createTime : Thu, 25 Dec 2025 12:45:23 GMT
---

###  积分作业_有理函数的积分_4

#### 213 4-4

!%&注意&{本文档使用ai辅助数据录入，部分进行人工修改，可能出现错误}

##### (3)

$$ \int \frac{x + 1}{x^2 - 2x + 5} \mathrm{d}x = \int \frac{x - 1 + 2}{x^2 - 2x + 5} \mathrm{d}x = \int \frac{x - 1}{x^2 - 2x + 5} \mathrm{d}x + \int \frac{2}{x^2 - 2x + 5} \mathrm{d}x $$

$$ = \frac{1}{2} \int \frac{2x - 2}{x^2 - 2x + 5} \mathrm{d}x + \int \frac{2}{(x - 1)^2 + 4} \mathrm{d}x $$

$$ = \frac{1}{2} \ln(x^2 - 2x + 5) + \arctan\left( \frac{x - 1}{2} \right) + C $$

- 这里使用到了$\frac{g^\prime(x)}{g(x)} = [\ln{g(x)}]^\prime$

##### (4)

$$ \int \frac{\mathrm{d}x}{x(x^2+1)} = \int \frac{1}{x} \mathrm{d}x - \int \frac{x}{x^2+1} \mathrm{d}x = \ln|x| - \frac{1}{2}\int \frac{1}{x^2+1} \mathrm{d}(x^2 + 1) $$

$$ = \ln|x| - \frac{1}{2} \ln(x^2+1) + C $$