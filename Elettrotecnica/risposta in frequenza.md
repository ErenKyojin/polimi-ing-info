
>[!def]
>Data una [[funzione di trasferimento|FdT]] $G(s)$
>$b$ sua restrizione al suo semiasse positivo $y^+$ si dice **RISPOSTA IN FREQUENZA** (RF) di $G(S)$



- $G(s) = \frac{1}{1 + 0.1 s}$ AS
- $u(t) = 5 \sin(20t)$
- $y(t) \to ?$ per $t = \infty$

Sistema AS $\implies$ per il teorema della risposta in frequenza $y(t) \to 5 | g(j_{2}0)| \sin(20t + \arg G(j_{2}0))$
$$G(j 20) = \frac{1}{1 + 2j} \implies \begin{cases}
|G(j 20)| = \frac{1}{\sqrt{ 5 }} \approx 0.45 \\
\arg^o = \arctan^o(2) = -63,5^o)
\end{cases}$$

## Rappresentazioni della Risposta in frequenza di una [[funzione di trasferimento|FdT]] $G(s)$


### 1. Diagramma polare
```tikz
\usepackage{pgfplots}
\begin{document}
\begin{tikzpicture}
\begin{axis}[axis lines = left, smooth, samples = 50]

\end{axis}
\draw[->, red] (0,0) -- (0,5);
\end{tikzpicture}
\begin{tikzpicture}
\begin{axis}[axis lines = left, smooth, samples = 50]
\end{axis}
\node at (3,3){spirale};
\end{tikzpicture}
\end{document}
```
Piani complessi

### 2. Diagramma cartesiani o di Bode
1. Diagramma di bode del [[modulo]] DBM
```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw[->,thick] (0,0) -- (5,0) node[above]{$\omega$};
\node[below] at (0.25,0){1} node[below] at (1.25,0){10} node[below] at(2.25,0){100} node[below] at (3.25,0){1000} node[below] at (4.25,0){10000};
\end{tikzpicture}
\end{document}
```

Si tratta di un asse [[logaritmo]], pari distanza significa pari rapporto
>[!def]
>$x|_{dB} := 20 \log_{10}|x|$
>$100|_{dB} = 40;\quad 0.1|_{dB} = -20,$

2. Diagramma di bode della fase DBF
	uguale ma con l'argomento sull'asse y



#### Tracciamento dei diagrammi di Bode (asintotici)
Per tracciare diagrammi di Bode asintotici scriviamo la [[funzione di trasferimento|FdT]] $G(s)$ della cui risposta in frequenza vogliamo i diagrammi di bode nela forma:
$$\large G(s)= \frac{\fcolorbox{red}{}{ $ \mu $}}{s^{\fcolorbox{yellow}{}{ $ g $}}} \frac{(1+s\tau_{1})(1 + s\tau_{2})\dots}{(1+s\tau_{1})(1 + s\tau_{2})\dots}$$
- $\mu$ è detto guadagno della fdt
- $g$ è detto tipo della FdT
- Zeri $\mathbb{R}$ non nell'origine
- Poli $\mathbb{R}$ non nell'origine
- $t,\tau$ costanti di tempo di poli e zeri