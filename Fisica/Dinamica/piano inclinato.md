---
aliases: 
creation date: 2023-03-25 12:06
modification date: 2023-03-25 12:06
---

Se un corpo viene appoggiato su un [[piano]] inclinato di una angolo $\beta$, la [[forza peso]] si può scomporre in una [[forza]] normale ed una tangente alla superfice piana, che valgono


$$
\begin{align}

&F_{n} = mg\cos \beta \Rightarrow R_{N} = mg\cos \beta \\
&F_{T} = mg \sin \beta \Rightarrow R_{T}=mg\sin \beta \leq \mu_{s}mg\cos \beta
\end{align}
$$


```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw[thick](0,0) -- (0,1) -- (3,0) -- (0,0);
\filldraw[thick,color = blue,fill = cyan!200](.2,.93) -- (.6,.8) -- (.75,1.2) -- (.35,1.33) -- (.2,.93);
\node[red](c) at(.45,1.05){$\bullet$};
\draw[->,thick,red] (c.center) -- (.75,.93);
\end{tikzpicture}
\end{document}
```

Quindi un corpo rimane fermo su di un piano inclinato scabro $\mu_{s}$ solo se l'angolo di inclinazione del piane $\beta$ è minore dell'angolo $\alpha = \arctan(\mu_{s})$

## Analisi delle forze in campo e diagramma delle forze
Poichè il piano è perfettamente liscio, trascuriamo le forze di attrito. Avremo quindi altre alla forza peso del corpo in moto, solo la reazione vincolare del piano, ortogonale alla superficie del piano stesso. Rappresentiamo in un disegno tte le forze agenti sul punto materiale comprese le reazioni vincolari.

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}[scale = 2, every node/.style={scale=1.5}]
\draw[draw = orange, fill = orange!40,ultra thick,fill opacity = 0.1] (0,0) coordinate (O) -- (30:6)coordinate[pos=.45] (M) |- coordinate (B) (O);
\draw[orange,thick] (O) ++(.9,0) arc (0:33:0.8)node[pos=.4,left]{$\alpha$};
\begin{scope}
\draw[fill = blue, fill opacity = .1] (M) rectangle ++(1.5,.9);
\draw[-{Stealth[scale = 2]}] (M) ++ (.75,.45) coordinate (MM) -- ++ (0, -1.3) node[right]{$\vec{W}_y$}node[](wy){};
\draw[-{Stealth[scale = 2]}] (MM) -- ++ (-.5,0) node[above](){$\vec{W}_x$} node[](wx){};
\draw[-{Stealth[scale = 2]}] (MM) -- ++ (0, +1.3)node[above](R){$\vec{R}$};
\draw[dashed] (wx.center) -- ++ (0, -1.3) -- (wy.center);
\node[scale = .5] at (MM){$\bullet$};
\end{scope}
\end{tikzpicture}
\end{document}
```

### Scelta del SDR
Fissiamo un sistema di riferimento cartesiano opportuno
