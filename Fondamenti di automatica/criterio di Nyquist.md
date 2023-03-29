---
aliases: 
creation date: 2023-03-29 11:29
modification date: 2023-03-29 11:29
---

Prima di vedere il criterio dobbiamo studiare il [[diagramma di Nyquist]] di una FdT $G(s)$



Si consideri il sistema dinamico
```tikz
\usetikzlibrar
\begin{document}
\begin{tikzpicture}
\draw (-1,-.5) rectangle (1,.5);
\node (o) at (0,0){$-WO$};
\draw[-{Stealth[scale = 2]}] (1,0) -- (1.5,0) -- (1.5,-1) -- (-1.5,-1) -- (-1.5,0) -- (-1,0);
\end{tikzpicture}
\end{document}
```

