---
aliases: 
creation date: 2023-03-20 15:20
modification date: 2023-03-20 15:20
---

>[!def]
>Sia $X$ una variabile aleatoria discreta o assolutamente continua tale che esista $E(X)$ se inoltre esiste $E((X - E(X))^2)$ allora si pone:
> $$
>\var(X) := E((X - E(X))^2)
>$$
>Detta varianza di $X$. La radice quadrata della varianza $\sqrt{ \var }$ è detta **deviazione standard** di $X$

Se $X$ è una variabile aleatorai discreta con densità $p_{X}$ e media $E(X) = \mu$ allora $\var(X) = \sum_{k}(x_{k}-\mu)^2p_{X}(x_{K})$ mentre deduciamo che se $X$ è una variabile aleatoria assolutamente continua con densità $f_{X}$ e media $E(X) = \mu$ allora $\var(X)= \int  \!(x-\mu)^2f_{X}(x) \, \mathrm{d}x$

## Proprietà della varianza

>[!proposizione]
>Sia $X$ unavariabile aleatoria allora
>1. $\var(X) = 0$ se e solo se $P(X = c) =1$ per qualche costante $c$. In questo caso $c = E(X)$
>2. Se $X$ ammette varianza e $\alpha \in \mathbb{R}$ allora $\var(\alpha X) = \alpha^2\var(X)$
>3. Se $X$ ammette varianza e $\beta \in \mathbb{R}$ allora $\var(X + \beta) = \var(X)$
>4. Se $X$ ammette varia enza allora $X^2$ ammette [[Valore atteso|media]] e $\var(X) = E(X^2)- E(X)^2$

## Varianza campionaria
Stima della variazione dell'intera popolazione $\sigma^2(x)$ attraverso lo stimatore
$$ \begin{align}
s^2(x) = s^2(x_{k}) := \frac{1}{n-1}\sum_{k=1}^n (x_{k}-\bar{x})^2 \\
\sigma^2(x) =\sigma_{x}^2 := E[(x-\mu)^2] = s^2(x) = s^2(x_{k})
\end{align} $$

1/n-1 in quanto la variazione standard di un solo dato è 0.

### Alternative di calcolo per la varianza