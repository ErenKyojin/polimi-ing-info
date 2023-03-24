---
aliases: 
creation date: 2023-03-16 13:58
modification date: 2023-03-16 13:58
---
definiamo la velocità scalare media come:
$$
v_{m}(t_{1},t_{2}) \equiv \frac{s_{2} - s_{1}}{t_{2}-t_{1}} = \frac{\Delta s}{\Delta t}
$$


$[v_{m}] =m \cdot s^{-1}$

$v_{m} = \tan(\alpha)$ (non una [[Legge fisica]], dimensioni scorrette)


```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw[->,very thick] (-1,.5) -- (3,0.5)node[below]{$t$};
\draw[->,very thick] (0,-1.5) -- (0,2.5)node[left]{$s$};
\draw plot [smooth,thick] coordinates { (0.3, 1.2) (0.5,1.2) (0.9,1) (1.5,.8) (2,1.2) (2.6,2) (2.8,2.1)};
\node[below left] at (0,0.5) {$O$};
\node[left] at (0,.95)(s1) {$S_1$};
\node[left] at (0,1.2)(s2) {$S_2$};
\node[below] at (1,0.5) {$t_1$};
\node[below] at (2,0.5) {$t_2$};
\draw (1,0.5) -- (1,.95);
\draw (2,0.5) -- (2,1.2);
\draw(s1) -- (1,.95);
\draw(s2) -- (2,1.2);
\draw plot[smooth] coordinates {(-.5,0.5)(1,0.95) (2,1.2) (2.5, 1.35)};
\node[above right] at (0,0.5) {$\alpha$};
\end{tikzpicture}
\end{document}
```
La velocità media è pari al coefficiente angolare della congiungente dei due estremi dell'[[intervallo]] considerato. Puó anche essere negativa o nulla.
Nel caso in cui $v_{m} = \cost = v$ il [[moto]] si dice uniforme e avremo per ogni valore di $t$ valido
$$\frac{
s(t)-s(0)}{t - 0} = v \implies \fbox{$s(t) = s(0) + v\cdot t$}
 $$


[[velocità scalare istantanea]]
