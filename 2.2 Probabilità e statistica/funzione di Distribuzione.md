---
aliases: 
creation date: 2024-03-03
---

> [!def]
> Data $X$ variabile aleatoria binomiale di parametri $p,n$, la sua funzione di distribuzione è data dalla seguente:
> $$ P\{ X \leq i \} = \sum_{k = 0}^i \begin{pmatrix}
> n \\
> k
> \end{pmatrix}p^k(1-p)^{n-k}\quad i=0,1,\dots,n$$
> 
> Si può utilizzare la formula ricorsiva:
> $$ P\{ X = k + 1 \} = \frac{p}{1-p} \frac{n-k}{k+1}P\{ X=k \} $$