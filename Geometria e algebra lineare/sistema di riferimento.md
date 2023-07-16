---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

>[!def]
>Un sistema di riferimento $(O, \mathbf{u}_{1}, \mathbf{u}_{2}, \mathbf{u}_{3} )$ dello spazio Euclideo consiste di:
> 1. un punto $O$ detto origine delle coordinate
> 2. tre vettori liberi $\mathbf{u}_{1},\mathbf{u}_{2},\mathbf{u}_{3}$ che applicati ad $O$ danno tre punti $A,B$ e $C$ in modo tale che $O, A, B$ e $C$ non giacciono nello stesso piano.

Se $(O, \mathbf{u}_{1}, \mathbf{u}_{2}, \mathbf{u}_{3})$ è un sistema di riferimento e $P$ è un punto arbitrario dello spazio esistono tre scalari $x_{p}, y_{p}, z_{p} \in \mathbb{R}$ tali $\vec{OP} = x_{p} \mathbf{u}_{1} + y_{p}\mathbf{u}_{2} + z_{p}\mathbf{u}_{3}$

```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\node (O) at (0,0,0){};
\node (P) at (2,1,1){$\bullet$};
\draw[dashed] (O.center) ++ (-2,0,0) -- ++ (5,0,0);
\draw[dashed] (O.center) ++ (0,-1,0) -- ++ (0,3,0);
\draw[dashed] (O.center) ++ (0,0,-2) -- ++ (0,0,4);
\draw[thick,-latex] (O.center) -- ++ (1,0,0) node[below]{$\mathbf{u}_1$}; 
\draw[thick,-latex] (O.center) -- ++ (0,1,0) node[left]{$\mathbf{u}_1$};
\draw[thick,-latex] (O.center) -- ++ (0,0,1) node[below]{$\mathbf{u}_1$};
\draw[thick,-latex,red] (O.center) -- ++ (P.center) node[above]{P};
\draw[green, dashed] (2,0,0) -- ++ (0,0,1) -- ++ (0,1,0);
\draw[green, dashed] (2,0,0) -- ++ (0,1,0) -- ++ (0,0,1);
\draw[green, dashed] (0,0,1) -- ++ (2,0,0);
\draw[green, dashed] (0,0,1) -- ++ (0,1,0) -- ++ (2,0,0);
\draw[green, dashed] (0,1,0) -- ++ (2,0,0);
\draw[green, dashed] (0,1,0) -- ++ (0,0,1);
\end{tikzpicture}
\end{document}
```
