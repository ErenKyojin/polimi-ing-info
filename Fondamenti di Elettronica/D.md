---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,-3) to [R=$R_{in}$] (0,3) to (-2,3) to[ZZener diode] (-2,-3) to (0,-3);
\draw (-2,-3) to (-4,-3) to[V] (-4,3) to[R] (-2,3);
\end{tikzpicture}
\end{document}
```
