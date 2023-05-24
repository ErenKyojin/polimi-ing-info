---
aliases: 
creation date: 2023-04-26 15:27
modification date: 2023-04-26 15:27
---

La notazione omega grande indica un limite asintotico inferiore.

data una funzione $g(n), \Omega(g(n))$ è il seguente insieme di funzioni:
$$ \Omega(g(n)) = \{ f(n) | \exists c, n_{0}(c,n_{0} > 0) \ t.c.\ \forall n > n_{0}, 0 \leq cg(n) \leq f(n) \} $$
```tikz
\begin{document}
\begin{tikzpicture}
\draw[ultra thick, -latex] (0,0) -- (6,0);
\draw[ultra thick, -latex] (0,0) -- (0,4);

\draw (0,0) to[out=80,in = 180] (0.45,1) to[out = 0, in = 180] (0.75,0.75) to[out = 0, in = 180] (2.5,2) to[out = 0, in = 0] (4,2.2) to (5,3.2) to (5.5, 3.3); 
\end{tikzpicture}
\end{document}
```



