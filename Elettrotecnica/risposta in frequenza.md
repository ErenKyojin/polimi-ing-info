
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

## Rappresentazioni della Risposta in frequenza di una FdT $G(s)$


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
Diagramma di bode del modulo DBM
```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw[->,thick] (0,0) -- (5,0);
\node[below] at (0.25,0){1} node[below] at (1.25,0){10} node[below] at(2.25,0){100} node[below] at (3.25,0){1000};
\end{tikzpicture}
\end{document}
```

>[!def]
>$x|_{dB} := 20 \log_{10}|a|$
>$100|_{dB} = 40;\quad 0.1|_{dB} = -20$