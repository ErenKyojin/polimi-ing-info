---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,-3) to [R=$R_{in}$, i^<=$i_i$] (0,3) to (-2,3) to[ZZener diode,invert,v_<=$V_{out}$] (-2,-3) to (0,-3);
\draw (-2,-3) to (-4,-3) to[V] (-4,3) to[R=$R_{in}$] (-2,3);
\end{tikzpicture}
\end{document}
```
Questo circuito ha tra i due capi del diodo una tensione minima e una tensione massima
voltage dir = EF.


In queste situazioni si calcola quando la corrente del diodo cambia corrente, ... 

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw(0,0) to [V=$V_M(t)$] (0,4) to [R=$R_1$] (2,4) to [diode, l=$D_1$] (2,2) to [V=$V_{DD}$] (2,0);
\draw (2,4) to (4,4) to [diode, invert,l=$D_2$,v<=$V_{D_2}$] (4,2) to [V=$V_{SS}$] (4,0);
\draw(0,0) to (6,0) to (8,0) to [generic] (8,4) to (6,4);
\draw(4,4) to (6,4);

\node (A) at (6,4){$\bullet$};
\node (B) at (6,0){$\bullet$};
\node[above] at (A){A};
\node[below] at (B){B};
\end{tikzpicture}
\end{document}
```
V out tensione ad A B