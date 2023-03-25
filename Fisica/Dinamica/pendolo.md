---
aliases: pendoli
creation date: 2023-03-25 15:31
modification date: 2023-03-25 15:31
---
un [[punto materiale]] di [[massa]] $m$ è vincolato ad un punto $O$ attraverso una fune ideale (inestensibile di lunghezza $l$ e di massa trascurabile)

>[!oss]
>La [[traiettoria]] del suo [[moto]] non puó che essere un arco di circonferenza di raggio $l$ sul quale prendiamo ascissa curvilinea $s$.

>[!oss]
>Trascuriamo la forza di attrito viscoso dell'aria e le altre forze di attrito.
>Prendiamo come verso positivo della coordinata curvilinea il verso antiorario di percorrenza della traiettoria e fissiamo lo zero nel punto in cui la massa transita per la verticale, abbiamo quindi
>$$s(t) = \theta(t) \cdot l$$

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}[scale = 1.5]

\node (O) at (0,5){$\bullet$};
\draw[dashed] (O) node[above]{O} -- ++ (0,-5)node[](Op){} node[midway,left]{$l$};
\draw (O.center) -- ++ (3, -4)node[](m){};
\draw (m) arc (-53:-127:5);
\draw[fill=blue, thick] (m) circle (.25) node[right=.6cm,above =.25cm]{$m$};
\draw (O) ++ (0,-1) arc (-90:-53:1) node[below,midway]{$\theta$};
\node[below] at (Op){$O'$};

\begin{scope}[rotate = 37]
\draw[thick, -{Stealth}] (m.center) -- ++(0,2)node(T){} node[right]{$\vec{T}$};
\draw[thick, -{Stealth}] (m.center) -- ++(0,-2)node(WN){} node[right]{$\vec{W}_n$};
\draw[thick, -{Stealth}] (m.center) -- ++(-1,0)node(WT){} node[above]{$\vec{W}_T$};
\draw[dashed] (WT) -- ++ (0,-2) node(W){} -- (WN);
\draw[thick,-{Stealth}] (m.center) -- (W.center) node[below]{$\vec{W} = m\vec{g}$};
\draw (m) ++ (0,-.8) arc (-90:-117:.8) node[midway,below]{$\theta$};
\end{scope}

\end{tikzpicture}
\end{document}
```
