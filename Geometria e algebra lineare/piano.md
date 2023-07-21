## Equazioni parametriche e cartesiane per un piano nello spazio

Fissato un [[sistema di riferimento]] ($O, \mathbf{u}_{1},\mathbf{u}_{2},\mathbf{u}_{3}$) e tre punti non allineati $A,B$ e $C$, consideriamo il piano $\pi$ passante per $A,B$ e $C$, fissato $P \in \pi$ esistono unici $t, s \in \mathbb{R}$:
$$ \vec{OP}\equiv \vec{OA} + t \vec{AB} + s \vec{AC} $$
```tikz
\begin{document}
\begin{tikzpicture}
\node (O) at (0,0,0){$\bullet$};
\draw[-latex] (O.center) -- ++ (1,0,0);
\draw[-latex] (O.center) -- ++ (0,1,0);
\draw[-latex] (O.center) -- ++ (0,0,1);

\node (A) at (3,1.2,1){};
\node (B) at (3,1.2,-4){};
\node (C) at (6,1.2,1){};
\end{tikzpicture}
\end{document}
```
