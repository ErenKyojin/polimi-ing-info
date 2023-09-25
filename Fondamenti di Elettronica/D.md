---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,-3) to [R=$R_{in}$, I=$i$] (0,3) to (-2,3) to[ZZener diode,invert] (-2,-3) to (0,-3);
\draw (-2,-3) to (-4,-3) to[V] (-4,3) to[R=$R_{in}$] (-2,3);
\end{tikzpicture}
\end{document}
```
Questo circuito ha tra i due capi del diodo una tensione minima e una tensione massima