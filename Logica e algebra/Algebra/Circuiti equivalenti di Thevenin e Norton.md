---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\begin{scope}
\draw (0,0) to [R=$R_{th}$,i>^=$i_1$] (-4,0) to [american voltage source,l_=$E_{th}$] (-4,-3) to (0,-3) to [open, v=$v_1$] (0,0);
\end{tikzpicture}
\end{scope}
\end{document}
```

