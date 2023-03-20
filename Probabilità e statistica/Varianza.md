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