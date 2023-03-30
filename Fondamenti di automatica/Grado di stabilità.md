---
aliases: 
creation date: 2023-03-30 18:02
modification date: 2023-03-30 18:02
---

L'ipotesi, quantomeno iniziale, è $p_{D} = 0$

```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw[->](-2,0) -- (2,0)node[below]{$\Re$};
\draw[->](0,-2) -- (0,2)node[right]{$\Im$};
\draw[red,thick,->] (-2,-2) arc (180:90:2);
\draw plot[smooth] coordinates {(0,0) (2,2)};
\end{tikzpicture}
\end{document}
```

Consideriamo due sistemi in AC con FdT d'anello aperto rispettivamente $L_{1}(s)$ e $L_{2}(s)$, con $p_{D}=0$ in ambo i casi $N = 0 \implies$ anello chiuso asintoticamente stabile



