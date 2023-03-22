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


$$\begin{align}
&X \sim P(\alpha,\lambda) \to m_{X}(t) &= \int _{0}^\infty \frac{\!e^{tx}}{P(\alpha)}\lambda^\alpha x^{\alpha-1}e^{-\lambda x}\, \mathrm{d}x \\
&&= \int _{0}^\infty \frac{\!\lambda^\alpha}{P(\alpha)}x^{\alpha-1}e^{-x(\lambda-t)} \, \mathrm{d}x  \\

&\quad\text{se }\lambda-t > 0 \\
&= \left( \frac{\lambda}{\lambda-t} \right)^\alpha  & \forall(t <\lambda) \\
\implies &E(x) = m'_{x}(t)\big\vert_{t=0} = \dots = \frac{d}{\lambda} \\
&\delta(x) = m''_{x}(t) \big\vert_{t=0} - \left( \frac{\alpha}{\lambda} \right)^2 = \dots = \\
&= \frac{\alpha}{\lambda^2}
\end{align}$$

>[!oss]
>$Y \sim \exp(\lambda)\qquad\begin{align}E(y)=\frac{1}{\lambda}\\ \delta(y) = \frac{1}{\lambda ^2} \end{align}$
>Allora
>$X \sim \Gamma(1, \lambda)\quad m_{X}(t) = \frac{\lambda}{\lambda-t} \implies x \sim \exp(\lambda)$
>$\Gamma(1,\lambda) = \exp(\lambda)$
>

## Proprietà di $X \sim \Gamma(\alpha,\lambda)$
1. Di scala

Se $x \sim \Gamma(\alpha,1), c > 0$ e $Y = cX$ allora $m_{Y}(t) = m_{X}(ct) = (\frac{\lambda}{\lambda-ct})^\alpha =$
se $\lambda-ct > 0 \iff t < \frac{\lambda}{c}$


