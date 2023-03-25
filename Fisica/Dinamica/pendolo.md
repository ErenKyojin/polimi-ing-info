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
\begin{document}
\begin{tikzpicture}
\node (O) at (0,5){$\bullet$};
\draw (O) node[above]{O} -- ++ (0,-5)node[](Op){};
\draw (O) -- ++ (3, -4)node[](m){};
\draw (m) arc (360:0:5);
\end{tikzpicture}
\end{document}
```
$a^2 + b^2 = 5^2$
