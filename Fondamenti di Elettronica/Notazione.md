---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw[thick] (0,0) node[vcc]{ 10 V} to [R] (0,-3) to [R](0,-6) node[sground]{ground};
\node (vx) at (0,-3){$\bullet$};
\node[right] at (vx){$v_x$};
\draw[thick] (2,0) to [R] (2,-3) to [R] (2,-6) to (4,-6) to [] (4,0)
\end{tikzpicture}
\end{document}
```
