---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

A interruttore chiuso la tenisione campionata viene memorizzata su un condensatore (memoria analogica)  che poi la manteine quando l'interruttore è aperto

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,0) to [switch] (2,0) to [short] (4,0) to [open] (4,-2) to (0,-2);
\draw (3,0) to [capacitor] (3,-2);
\end{tikzpicture}
\end{document}
```

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\node[op amp] (opamp) at (3,0){};
\draw(0,0) to [switch] (2,0) to [capacitor] (2,-1);
\end{tikzpicture}
\end{document}
```