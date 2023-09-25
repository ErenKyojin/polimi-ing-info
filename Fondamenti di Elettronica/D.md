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
\draw(0,0) to [V] (0,4) to []
\end{tikzpicture}
\end{document}
```