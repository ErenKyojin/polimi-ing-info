---
aliases: 
creation date: 2024-05-25
---

## Distribuzioni campionarie da una popolazione normale
Se abbiamo $X_{1},X_{2},\dots,X_{n}$ campioni da una popolazione normale con media $\mu$ e varianza $\sigma^2$. Sono quindi indipendenti e $X_{i} \sim \mathcal{N}(\mu,\sigma^2)$ con $i = 1,\dots,n$. Inoltre
$$ \bar{X} = \sum_{i=1}^n \frac{X_{i}}{n} $$
e
$$ S^2 = \frac{1}{n-1} \sum_{i=1}^n (\bar{X}_{i} - \bar{X})^2$$

Sono rispettivamente [[Media campionaria|media campionaria]] e [[Varianza campionaria|varianza campionaria]]


#### Distribuzione della media campionaria
La somma di variabile aleatorie normali indipendenti è distribuita in modo normale, segue che $\bar{X}$ è normale con 
$$ \begin{align}
E[\bar{X}]&=\sum_{i=1}^n \frac{E[X_{i}]}{n}=\mu \\
\text{var}(\bar{X}) &= \frac{1}{n^2} \sum_{i=1}^n \text{var}(X_{i})=\frac{\sigma^2}{n}
\end{align} $$

rispettivamente media e varianza.
$\bar{X}$ è quindi normale con media uguale alla media della popolazione ma con varianza ridotta di un fattore $\frac{1}{n}$ segue che
$$ \frac{\bar{X}-\mu}{\frac{\sigma}{\sqrt{ n }}} $$
è una variabile aleatoria normale standard

### Distribuzione congiunta di $\bar{X}$ e $S^2$