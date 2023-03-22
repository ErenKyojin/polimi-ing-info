---
aliases: 
creation date: 2023-03-22 09:18
modification date: 2023-03-22 09:18
---

>[!def]
>$X$ variabile aleatoria assoluta continua positiva ha densità gamma di parametri $\alpha >0, \lambda > 0$ se la sua densità è
> $$
>f(x) = \frac{\lambda^\alpha}{P(\alpha)} \underbrace{ x^{\alpha-1} e^{-\lambda x} }_{ \text{nucleo} } \mathbb{1}(x)
>$$
>$\alpha$ è detto parametro di shape o di forma, $\lambda$ è il rate (o tasso)
>
>$\Gamma(\alpha)$ è il valore dell'integrale
> $$
>\int _{0}^\infty \!e^{-x}x^{\alpha - 1} \, \mathrm{d}x 
>$$
>se $\alpha = n \implies P(n) = \int _{0}^\infty \! e^{-x}x^{n-1} \, \mathrm{d}x = (n-1)!$ (dimostrazione integrando per parti)
>
> $P(n) = (n-1)!$ 
> $$\begin{align}
>\Gamma(\alpha + 1) &= \int _{0}^\infty \!e^{-x}x^{(\alpha + 1)-1} \, \mathrm{d}x = -e^{-x}x^{(\alpha + 1)-1}\vert_{0}^\infty - \int _{0}^\infty \!-e^{-x}dx^{\alpha - 1} \, \mathrm{d}x = \\
> &= +\alpha \int _{0}^\infty \!e^{-x}x^{\alpha - 1} \, \mathrm{d}x = \alpha P(\alpha) \\
>&\forall \alpha > 0\quad P(\alpha + 1)= \alpha \Gamma(\alpha)  
>\end{align}$$
>
>$\implies P\left( \frac{1}{2} \right) = \sqrt{ \pi }; P(1) = 1$ 


$X \sim P(\alpha,\lambda) \to m_{X}(t) = \int _{0}^\infty \!e \, \mathrm{d}x$




