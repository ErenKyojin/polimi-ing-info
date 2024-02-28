## Equazioni parametriche e cartesiane per un piano nello spazio

Fissato un [[sistema di riferimento]] ($O, \mathbf{u}_{1},\mathbf{u}_{2},\mathbf{u}_{3}$) e tre punti non allineati $A,B$ e $C$, consideriamo il piano $\pi$ passante per $A,B$ e $C$, fissato $P \in \pi$ esistono unici $t, s \in \mathbb{R}$:
$$ \vec{OP}\equiv \vec{OA} + t \vec{AB} + s \vec{AC} $$
```tikz
\begin{document}
\begin{tikzpicture}
\node (O) at (0,0,0){$\bullet$};
\draw[-latex] (O.center) -- ++ (1,0,0) node[right]{$\mathbf{u}_1$};
\draw[-latex] (O.center) -- ++ (0,1,0) node[right]{$\mathbf{u}_2$};
\draw[-latex] (O.center) -- ++ (0,0,1) node[below]{$\mathbf{u}_3$};

\node (A) at (3,1.2,1){};
\node (B) at (3,1.2,-4){};
\node (C) at (7,1.2,1){};

\draw[-latex,thick] (A.center) node[below]{A} -- (B.center) node[above]{B};
\draw[-latex,thick] (A.center) -- (C.center) node[right]{C};
\draw[dashed] (B.center) -- ++ (0,0,-2) -- ++ (2,0,0) node[above right]{P} -- ++ (0,0,7);
\end{tikzpicture}
\end{document}
```

Se $A= \begin{bmatrix} x_{A} \\y_{A} \\ z_{A}\end{bmatrix}$, $\vec{AB} = \begin{bmatrix}a_{1}\\b_{1}\\c_{1}\end{bmatrix}$, $\vec{AC} = \begin{bmatrix}a_{2}\\b_{2}\\c_{2}\end{bmatrix}$ allora una parametrizzazione per $\pi$ è:
$$ \begin{cases}
x = x_{A} + t a_{1} + sa_{2} \\
y = y_{A} + t b_{1} + s b_{2} \\
z = z_{A} + t c_{1} + s c_{2}
\end{cases} $$

Anche nel piano come per le rette un piano ha infinite parametrizzazioni.

Scriviamo i parametri $t$ ed $s$ in funzione delle coordinate $x,y,z$ per ottenere l'equazione cartesiana

>[!esempio]
>$$ \begin{cases}
>x = 1 + 2t \\
>y = 2t + 4s \\
>z = s + 1
>\end{cases} \implies \begin{cases}
>t = x / 2 - 1 / 2 \\
>s = z - 1 \\
>y - x + 1 + 4z - 4 = -
>\end{cases}  \implies -x + y - 4z - 3 = 0$$
>È l'equazione cartesiana del piano

>[!oss]
>Un piano si può sempre descrivere con una sola equazione cartesiana, una retta si può sempre descrivere attraverso due equazioni cartesiane, i punti di una retta sono dati dall'intersezione di due piani
