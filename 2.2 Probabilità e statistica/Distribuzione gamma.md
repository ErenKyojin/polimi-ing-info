---
aliases: 
creation date: 2024-03-11
---

Una variabile aleatoria ha una distribuzione è detta di tipo gamma, o distribuzione $\Gamma$, di parametri $(\alpha, \lambda)$ tale che $\alpha > 0, \lambda > 0$ se la sua densità $f(x)$ è data da
$$ f(x) = \begin{cases}
\dfrac{\lambda e^{-\lambda x} (\lambda x)^{\alpha - 1}}{\Gamma(\alpha)} &x \geq 0\\ 
0 &x < 0
\end{cases} $$

con
$$\Gamma(\alpha) = \int _{0}^\infty \! e^{-\lambda}y^{\alpha - 1} \, \mathrm{d}y = (\alpha - 1)\Gamma(\alpha-1) $$
Quindi per $\alpha = n$ intero, abbiamo
$$ \Gamma(n) = (n-1)! $$


### Utilizzo
La distribuzione Gamma è sfruttata solitamente per problemi del determinare quando avvengono $n$ eventi. Una distribuzione gamma notevole è la distribuzione con parametri $\left( \frac{n}{2}, \frac{1}{2} \right)$, detta [[distribuzione chi-quadro]]