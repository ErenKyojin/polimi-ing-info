# Tensione
Se una [[carica]] viene lasciata libera di muoversi in una regione in cui vi è presente un campo elettrico, essa subisce una forza e quindi si mette in moto. La forza prodotta dal campo elettrico tende a farla muovere lungo le linee di forza del campo stesso. Nel muovere la carica nella regione di spazio in cui è presente il campo elettrico, esso stesso compie lavoro e quindi modifica l'energia della carica. Cosa accade se voglio muovere una carica da un punto $A$ ad un punto $B$, lungo ad esempio il percorso $\gamma_{1}$? In questo caso non sarà il campo a compiere lavoro ma dovrò essere io a dovermi opporre alla forza generata dal campo elettrico.

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}

\begin{scope}
\draw(0,0) .. controls (0.2,2) and (2.8,4) .. (3,6);
\node (A) at (1,2.25){$\bullet$};
\draw[-latex,thick] (A.center) -- ++ (.5,1)node[above left]{$\bar{E}_A$};
\node[left] at (A){A};
\draw[-{>[scale = 2]}] (A.center) -- ++ (.6,.9);
\node[below] at (A) {q};
\end{scope}

\begin{scope}[shift={(2,0)}]
\draw(0,0) .. controls (0.2,2) and (2.8,4) .. (3,6);
\node (p1) at (1.15,2.25){$\bullet$};
\draw[-latex,thick] (p1.center) -- ++ (.5,1)node[above left]{$\bar{E}_A$};
\node[right] at (p1){$P_1$};
\end{scope}

\begin{scope}[shift={(4,0)}]
\draw(0,0) .. controls (0.2,2) and (2.8,4) .. (3,6);
\end{scope}

\begin{scope}[shift={(6,0)}]
\draw(0,0) .. controls (0.2,2) and (2.8,4) .. (3,6);
\end{scope}

\draw(1,2.25) .. controls (2.5,3) and (4.5,2) .. (8,2.75);

\end{tikzpicture}
\end{document}
```

Se dividiamo il percorso $\gamma_{1}$ in tanti


# Tensioni #trifase bilanciate
Per definizione tre tensioni sinusoidali, alla stessa pulsazione $\omega$, con lo stesso [[valore efficace]], sfasate tra di loro di 120° o di $\frac{2}{3}\pi \text{ rad}$

$$\begin{flalign}
v_a(t)\quad &=\quad V_0\cos(\omega t + \phi_0) \\
v_b(t) \quad &= \quad V_0\cos\left(\omega t + \phi_0 - \frac{2}{3}\pi\right) \\
v_c(t) \quad &= \quad V_0\cos\left(\omega t + \phi_0 - \frac{4}{3}\pi\right)
\end{flalign}$$
Questa terna trifase, la cui fase $\phi_0$ può essere scelta arbitrariamente $0$ è detta *sequenza abc* o *sequenza positiva* in quanto $v_a(t)$ anticipa $v_b(t)$ di $\frac{2}{3}\pi$ e a sua volta $v_b(t)$ anticipa $v_c(t)$ di $\frac{2}{3}\pi$

**analogamente**

Possiamo definire la *sequenza acb* o *sequenza negativa* come:
$$
\begin{flalign}
	v_a(t) \quad &= \quad V_0\cos(\omega t + \phi_0) \\
	v_c(t) \quad &= \quad V_0\cos\left(\omega t + \phi_0 - \frac{2}{3}\pi\right) \\
	v_b(t) \quad &= \quad V_0\cos\left(\omega t + \phi_0 - \frac{4}{3}\pi\right) \\
\end{flalign}
$$

Queste due sequenze vengono prodotte da un generatore trifase detto [[alternatore]]