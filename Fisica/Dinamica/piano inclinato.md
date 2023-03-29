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

\begin{scope}[rotate=30]
\draw[fill = blue, fill opacity = .1] (M) rectangle ++(1.5,.9);
\draw[-{Stealth[scale = 2]}] (M) ++ (.75,.45) coordinate (MM) -- ++ (0, -1.3) node[right]{$\vec{W}_y$}node[](wy){};
\draw[-{Stealth[scale = 2]}] (MM) -- ++ (-.5,0) node[above](){$\vec{W}_x$} node[](wx){};
\draw[-{Stealth[scale = 2]}] (MM) -- ++ (0, +1.3)node[above](R){$\vec{R}$};
\draw[dashed] (wx.center) -- ++ (0, -1.3) node(W){} -- (wy.center);
\node[scale = .5] at (MM){$\bullet$};
\draw[-{Stealth[scale = 2]}] (MM) -- (W.center) node[below right]{$\vec{W}$};
\draw[-{Stealth}](0,3) -- (0,4)node[left]{$y$};
\draw[-{Stealth}](0,3) -- (-1,3)node[below]{$x$};
\end{scope}

\node[orange] at (5,1){$h$};

\end{tikzpicture}
\end{document}
```

### Scelta del SDR
Fissiamo un sistema di riferimento cartesiano opportuno come in figura


### Equazioni del moto
Scomponiamo tutte le forze lungo le direzioni ortogonali del nostro SdR. La forza peso lungo le direzioni $x$ ed $y$ avrà rispettivamente componenti
$$
\begin{cases}
W_{x} = mg\sin(\alpha) \\
W_{y} = -mg\cos(\alpha)
\end{cases}
$$

Scriviamo le equazioni scalari del moto
$$
\begin{cases}
W_{x} = ma_{x} &\text{lungo direzione }x \\
R + W_{y} = ma_{y} &\text{lungo direzione }y
\end{cases}
$$

### Integrazione delle equazioni del moto
Integriamo le equazioni del moto imponendo:
- I vincoli cinematici lungo $y$, $a_{y} = 0$
- Condizioni iniziali $\vec{x}_{0} = 0\quad ;\quad \vec{v}_{0} = 0$

Il moto è unidimensionale lungo $x$:
$$
\begin{align}
&v_{x}(t)=v_{0,x} + \int_{0}^t \!a(t')\, \mathrm{d}t'   = g\sin \alpha t\\
&x(t) = x_{0} + \int _{0}^t \!v(t') \, \mathrm{d}t = \frac{1}{2}g\sin \alpha t^2
\end{align}
$$

>[!oss]
>Il moto è uniformemente accelerato ed il diagramma spazio-tempo è di tipo parabolico

>[!oss]
>Nota la lunghezza $L$ del piano inclinato possiamo determinare l'intervallo di tempo $t_{f}$ che il corpo impiega a percorrerlo e quindi la sua velocità finale $v_{f}$:
> $$
> L = \frac{h}{\sin \alpha} = \frac{1}{2}g\sin \alpha t^2_{f} \implies t_{f} = \sqrt{ \frac{2h}{g\sin^2 \alpha} }\qquad v_{f} = v(t_{f})= \sqrt{ 2gh }
>$$

>[!oss]
>La velocità finale non dipende ne dalla massa ne dall'inglinazione, è la stessa di un peso in caduta libera dalla quota $h$.

