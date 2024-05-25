---
aliases: 
creation date: 2023-03-20 15:20
modification date: 2023-03-20 15:20
---
Date le seguenti variabili aleatorie con [[Densità discreta]]  tale che:
$$ \begin{align}
&\ \ \ p(X = 0) = 1 \\
&\begin{cases}
p(Y = 1) = \frac{1}{2} \\
p(Y = -1) = \frac{1}{2}
\end{cases} \\
&\begin{cases}
p(Z = 100) = \frac{1}{2} \\
p(Z = -100) = \frac{1}{2}
\end{cases}
\end{align} $$

Hanno tutte lo stesso valore atteso, nonostante abbiano intuitivamente una distanza diversa dal valore atteso stesso.
>[!definition]
>Sia $X$ una [[variabile aleatoria]] discreta o assolutamente continua tale che esista $E(X)$ se inoltre esiste $E((X - E(X))^2)$ allora si pone:
> $$
>\var(X) := E((X - E(X))^2)
>$$
>Detta varianza di $X$. La radice quadrata della varianza $\sqrt{ \var }$ è detta **deviazione standard** di $X$

Se $X$ è una variabile aleatoria discreta con densità $p_{X}$ e media $E(X) = \mu$ allora $\var(X) = \sum_{k}(x_{k}-\mu)^2p_{X}(x_{K})$ mentre deduciamo che se $X$ è una variabile aleatoria assolutamente continua con densità $f_{X}$ e media $E(X) = \mu$ allora $\var(X)= \int  \!(x-\mu)^2f_{X}(x) \, \mathrm{d}x$

>[!tldr]
>La varianza indica la distanza dei possibili valori di una variabile aleatoria rispetto al proprio valore medio

## Proprietà della varianza

>[!proposition]
>Sia $X$ una variabile aleatoria allora
>1. $\var(X) = 0$ se e solo se $P(X = c) =1$ per qualche costante $c$. In questo caso $c = E(X)$
>2. Se $X$ ammette varianza e $\alpha \in \mathbb{R}$ allora $\var(\alpha X) = \alpha^2\var(X)$
>3. Se $X$ ammette varianza e $\beta \in \mathbb{R}$ allora $\var(X + \beta) = \var(X)$
>4. Se $X$ ammette varianza allora $X^2$ ammette [[Valore atteso|media]] e $\var(X) = E(X^2)- E(X)^2$

## Varianza per variabili continue

> [!definition]
> Analogamente alla varianza per variabili aleatoriee discrete
> $$\delta(X) = E[(X-\mu)^2] $$
> $$ \delta(X) = E[X^2] - E[X]^2 $$ ^25665d