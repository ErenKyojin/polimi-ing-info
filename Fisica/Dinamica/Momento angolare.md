---
aliases: 
creation date: 2023-04-10 11:59
modification date: 2023-04-10 11:59
---

## Momento di un vettore
Dati un vettore applicato $\vec{a}$ ed un punto $O$, detto polo, si dice momento $\vec{M}$ di $\vec{a}$ rispetto ad $O$ il vettore
$$
\vec{M}_{O} = \vec{r} \times \vec{a}
$$
dove $\vec{r}$ è il vettore che va da $O$ al punto di applicazione di $\vec{a}$. Come conseguenza della definizione, il momento è ortogonale al piano individuato da $\vec{a}$ e da $O$ ed ha per modulo $M_{O} = r \cdot a \cdot \sin \alpha = d \cdot a$ dove $\alpha$ è l'angolo compreso tra $\vec{r}$ e $\vec{a}$, $d$ è la distanza della retta di applicazione di $\vec{a}$ dal polo $O$.

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw (-1,0) -- (5,0);
\draw[-{Stealth},thick] (0,0) node(O){} -- (0,2) node[right]{$\vec{M}$};
\node[above left] at (O){$O$};
\draw[-{Stealth},thick] (O.center) -- ++ (2,0) node(r){} node[midway,above]{$\vec{r}$};
\draw[-{Stealth},thick] (r.center)  -- ++ (2,1.5)node[midway,above left]{$\vec{a}$};
\draw (2.75,0) arc (0:40:.75) node[below right]{$\alpha$};
\draw (r.center) -- ++ (2.5,1.875);
\draw (r.center) -- ++ (-2.5,-1.875);
\begin{scope}[rotate = 30]
\draw (O.center) -- ++ (0,01)
\end{scope}


\end{tikzpicture}
\end{document}
```

>[!oss]
>Se trasliamo il vettore applicato $\vec{a}$ lungo la sua retta di applicazione, il momento rispeto allo stesso polo $O$ non cambia


