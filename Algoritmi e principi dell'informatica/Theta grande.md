---
aliases: 
creation date: 2023-04-26 15:11
modification date: 2023-04-26 15:11
---

La notazione teta grande indica un limite asintotico che è sia inferiore che superiore.

>[!def]
>Data una funzione $g(n), \Theta(g(n))$ è il seguente insieme di funzioni:
>$$ \Theta(g(n)) = \{ f(n) | c_{1},c_{2}, n_{0} (c_{1},c_{2},n_{0} > 0 \text{ t.c. } \forall n > n_{0}, 0 \leq c_{1}g(n) \leq f(n) \leq c_{2}g(n))\} $$
>
>Quindi
>
> ```tikz
> \begin{document}
> \begin{tikzpicture}
> \draw[ultra thick, -latex] (0,0) -- (6,0);
> \draw[ultra thick, -latex] (0,0) -- (0,4);
> 
> \draw[black] (0,0) to[out=80,in = 180] (0.45,1) to[out = 0, in = 180] (0.75,0.75) to[out = 0, in = 180] (2.5,2) to[out = 0, in = 200] (4,2.2) to[out = 40,in = 200] (5,3.2) to (5.5, 3.3) node[right]{$f(n)$};
> \draw[red] (0,.75) to[out = 20, in = 190] (2.5,1.8) to[out = 0, in = 180] (4,2) to[out = 0] (5.2,3) node[below right]{$c_{1}g(n)$};
> \draw[red] (0,0) to[out = 70, in = 180] (1,2) to[out = 10, in = 180] (6,4) node[above right] {$c_{2}g(n)$};
> \end{tikzpicture}
> \end{document}
> ```


Abbiamo
- $3n^2 + 12n + 35 = \Theta(n^2)$
- $2n^2 \log(n) + 5 = \Theta(n^2 \log(n))$
- $n_{2}^n + n^{45} = \Theta(n^2 \log(n))$

Però
- $3n^2 + 12n + 35 \neq \Theta(n)$
- 3