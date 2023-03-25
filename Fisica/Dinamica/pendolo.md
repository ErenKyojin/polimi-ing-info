---
aliases: pendoli
creation date: 2023-03-25 15:31
modification date: 2023-03-25 15:31
---
un [[punto materiale]] di [[massa]] $m$ è vincolato ad un punto $O$ attraverso una fune ideale (inestensibile di lunghezza $l$ e di [[massa]] trascurabile)

>[!oss]
>La [[traiettoria]] del suo [[moto]] non puó che essere un arco di circonferenza di raggio $l$ sul quale prendiamo [[ascissa curvilinea]] $s$.

>[!oss]
>Trascuriamo la forza di attrito viscoso dell'aria e le altre [[forze di attrito]].
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
\draw[thick, -{Stealth}] (m.center) -- ++(0,-1.25)node(WN){} node[right]{$\vec{W}_n$};
\draw[thick, -{Stealth}] (m.center) -- ++(-1,0)node(WT){} node[above]{$\vec{W}_T$};
\draw[dashed] (WT) -- ++ (0,-1.25) node(W){} -- (WN);
\draw[thick,-{Stealth}] (m.center) -- (W.center) node[below]{$\vec{W} = m\vec{g}$};
\draw (m) ++ (0,-.8) arc (-90:-117:.8) node[midway,below]{$\theta$};
\end{scope}

\end{tikzpicture}
\end{document}
```

Prendiamo come verso positivo della coordinata curvilinea il verso antiorario di percorrenza della traiettoria e fissiamo lo zero nel punto in cui la massa transita per la verticale. Abbiamo allora $s(t) = \theta(t) \cdot l$.

Scegliamo un [[sistema di riferimento cartesiano]] locale $T,N$ e scomponiamo lungo queste due direzioni le forze agenti su $m:$
$$
\begin{align}
&W_{T} = -mg\sin \theta \\
&W_{N} = -mg\cos \theta 
\end{align}
$$
Le equazioni del moto lungo le direzioni tangente e normale alla [[traiettoria]] sono allora:
$$
\begin{cases}
W_{T} = ma_{T} = m\dfrac{d^2s}{dt^2}= ml \dfrac{d^2\theta}{dt^2} &\implies \dfrac{d^2\theta}{dt^2} = -\dfrac{g}{l}\sin \theta \\
T + W_{N} = ma_{N} &\implies T - mg\cos \theta = m \dfrac{v^2(\theta)}{l} =\dfrac{m}{l} \left( \dfrac{ds}{dt}  \right)^2 = ml\left( \dfrac{d\theta}{dt}  \right)^2
\end{cases}
$$

>[!oss]
>Si tratta di un sistema di due [[equazione differenziale|equazioni differenziali]] non lineari nelle due funzioni incognite $\theta(t)$ e $T(t)$. Una soluzione analitica in generale non c'è


>[!oss]
>Consideriamo la prima equazione, se ci limitiamo al caso di piccole oscillazioni del pendolo ($\ll 1 \rad$), essa emmette una soluzione analitica. Infatti abbiamo
> $$ \sin \theta \approx \theta \implies \frac{d^2\theta}{dt^2} + \frac{g}{l}\theta = 0 \implies \theta(t) = A\sin(\omega t + \varphi)\quad ;\quad \omega = \sqrt{ g/l } $$

>[!oss]
>Consideriamo ora la seconda equazione. In quanto abbiamo già determinato $\theta(t)$ dalla prima è immediato determinare $T(t)$
>
>Della espressione di $\theta(t)$ ricaviamo $\frac{d\theta}{dt} = A\sqrt{ g / l  } \cos(\omega t + \varphi)$ e quindi:
> $$\begin{align}
>  T(t) = mg\cos \theta + ml \left( \frac{d\theta}{dt}  \right)^2 = mg \left[ \cos \theta + \frac{l}{g} \left( \frac{d\theta}{dt}  \right)^2 \right] = mg\left\{ \cos[A\sin \omega t + \varphi] \right\} + A^2 \cos^2 (\omega t + \varphi) \\
>
>\end{align}$$

