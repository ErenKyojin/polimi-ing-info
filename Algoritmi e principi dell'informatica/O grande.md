---
aliases: 
creation date: 2023-04-26 15:11
modification date: 2023-04-26 15:11
---
La funzione $O$-grande indica un limite asintotico superiore
>[!def]
>$$f,g : \mathbb{N} \to \mathbb{N}$$
>$f$ è un $O$-grande di $g$, in simboli $f(n) = O(g(n))$ se definitivamente $f$ è dominata da un multiplo di $g$:
>$$ \exists c > 0 \exists n_{0} \in \mathbb{N} : \forall n \geq n_{0} $$

- $n = O(n)\qquad c =1, n_{0}=1$
- $2n = O(n)\quad c = \frac{1}{2},n_{0}=1$
- $n = O(n^2)\quad c = 1. n_{0}=1$
- $10^{100} = O(n^2)\quad c=1, n_{0} = 10^{100}$

Se $f,g$ crescenti, $f = O(g)$ sse
$$ \lim_{ n \to \infty } \frac{f(n)}{g(n)} < +\infty $$
negli esempi di prima
1
2
0
0

>[!esempio]
>- $3n^2 + 12n + 35 \in O(n^2)$
>- $5n^3 + 2 \in O(n^3)$
>- 2