---
aliases: 
creation date: 2023-04-26 15:27
modification date: 2023-04-26 15:27
---

La notazione omega grande indica un limite asintotico inferiore.

> [!def]
> data una funzione $g(n), \Omega(g(n))$ è il seguente insieme di funzioni:
> $$ \Omega(g(n)) = \{ f(n) | \exists c, n_{0}(c,n_{0} > 0) \ t.c.\ \forall n > n_{0}, 0 \leq cg(n) \leq f(n) \} $$
> ```tikz
> \begin{document}
> \begin{tikzpicture}
> \draw[ultra thick, -latex] (0,0) -- (6,0);
> \draw[ultra thick, -latex] (0,0) -- (0,4);
> 
> \draw[black] (0,0) to[out=80,in = 180] (0.45,1) to[out = 0, in = 180] (0.75,0.75) to[out = 0, in = 180] (2.5,2) to[out = 0, in = 200] (4,2.2) to[out = 40,in = 200] (5,3.2) to (5.5, 3.3) node[right]{$f(n)$};
> \draw[red] (0,.75) to[out = 20, in = 190] (2.5,1.8) to[out = 0, in = 180] (4,2) to[out = 0] (5.2,3) node[below right]{$cg(n)$};
> \end{tikzpicture}
> \end{document}
> ```

Abbiamo:
- $3n^2 + 12n + 35 = \Omega(n^2)$
- $2n^2\log(n) + 5 = \Omega(n^2 \log(n))$
- $n2^n + n^{45} = \Omega(2^n)$

ma anche:
- $3n^2 + 12 + 35 = \Omega(n)$
- $3n^2 + 12n + 35 = \Omega(\log n)$

tuttavia: 
$3n^2 + 12n + 35 \neq \Omega(n^2 \log(n))$

