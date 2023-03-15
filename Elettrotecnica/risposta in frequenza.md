
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
\begin{axis}
\end{axis}
\begin{axis}
\end{axis}
\end{tikzpicture}
\end{document}
```
