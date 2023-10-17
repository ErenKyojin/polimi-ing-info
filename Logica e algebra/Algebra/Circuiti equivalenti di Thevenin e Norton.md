---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,0) to [R=$R_{th}$,i>^=$i_1$] (-4,0) to [american voltage source,l_=$E_{th}$] (-4,-3) to (0,-3) to [open, v=$v_1$] (0,0);
\draw (6,0) to[short, i>^=$i_2$] (2,0) to[american current source, l=$A_{nr}$] (2,-3) to (6,-3) to [open] (6,0);
\draw (4,0) to [R=$R_{nr}$] (4,-3);
\end{tikzpicture}
\end{document}
```

a