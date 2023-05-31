---
aliases: 
creation date: 2023-05-31 15:37
modification date: 2023-05-31 15:37
---

```tikz
\usetikzlibrary{patterns}
\begin{document}
\begin{tikzpicture}
\draw[pattern = grid,pattern color = red] (0,0) .. controls (.2,2) .. (2,0) 
			.. controls (2.8,-1) .. (2,-1.4)
			.. controls (-.4,-2) .. (0,0)
			;
\end{tikzpicture}
\end{document}
```

Data una superficie aperta $S$ identifichiamo il suo bordo $\gamma$ e decidiamo arbitrariamente