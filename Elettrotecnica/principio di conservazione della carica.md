---
aliases: 
creation date: 2023-05-31 16:49
modification date: 2023-05-31 16:49
---

```tikz
\begin{document}
\begin{tikzpicture}
\shade[ball color = gray] (0,0,0) circle  (3cm);
\draw[thick, white] (0,0,0) circle (3cm);
\draw[draw=white,fill = lightgray,rotate = 30] (2,0,0) circle (.4cm and .6cm);
\node[] (C) at (1.8,1,0){};
\draw[thick,red,-latex] (C.center) -- ++ (1.5,0) node[below]{j};
\draw[thick,red,-latex] (C.center) -- ++ (1.5,.5) node[above]{$u_N$};
\node[below left=.3cm] at (C){dS};
\node{q};
\node at (0,3.2,0){S};
\end{tikzpicture}
\end{document}
```

Consideriamo il volume qui sopra, delimitato dalla superficie $S$ e sia $q$ la carica netta che è presente all'interno di esso in un dato istante di tempo $t$. Possiamo immaginare che ci sia un flusso di cariche, attraverso $S$, che entrano nel volume e/o che ne fuoriescono. Queste cariche in moto definiscono un campo di densità di corrente $\bar{\jmath}$ e la corrente $I$ attraverso $S$ sarà pari a 
$$ I = \oint_{S} \! \bar{\jmath} \cdot \hat{u}_{N}\, \d S $$
La corrente $I$, in base alla definizione, esprime la variazione della carica $q$ rispetto al tempo ovvero $\displaystyle \oint_{S} \!\bar{\jmath} \cdot \hat{u}_{N}\, \d S = I = -\frac{dq}{dt}$. Per giustificare