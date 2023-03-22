---
aliases: 
creation date: 2023-03-22 14:36
modification date: 2023-03-22 14:36
---

# 1
Costruire una macchina di turing a k nastri che riconosca $\mathcal{L} = \left\{ w \in \left\{ a,b,c \right\}^* | \#_{a}(w)=\#_{b}(w) = \#_{c}(w)\right\}$
k = 3

```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[every node/.style={scale=1.2},scale = 4,node distance = 5cm]
\node(q0)[state]{$q_0$};
\node(q1)[state, right = of q0]{$q_1$};
\node(q2)[state, right = of q1]{$q_2$};
\path[->](q0) edge node[above] {$o$} (q1)
edge node (q2);
\end{tikzpicture}
\end{document}
```





$\cancel{ b }$