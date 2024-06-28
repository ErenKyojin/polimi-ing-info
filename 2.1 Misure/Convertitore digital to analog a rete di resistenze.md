---
aliases: DAC a rete di Resistenze, DAC a rete di R
creation date: 2024-06-28
---

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\node[op amp,thick] (OPAMP) at (11,-4.5){};
\node[sground,thick] (GND) at (9.5,-6){}; 
\draw[thick] (0,0) to (8,0);
\draw[thick] (2,0) to[R, label=$2^{n-1}$R] (2,-2) to[switch] (2, -4);
\draw[thick] (4,0) to[R, label=$2^{n-2}$R] (4,-2) to[switch] (4, -4);
\draw[thick] (6,0) to (6,-.5);
\draw[thick] (6,-4) to (6,-3.5);
\draw[thick] (8,0) to[R, label=$2^{0}$R] (8,-2) to[switch] (8, -4);
\draw[thick] (2,-4) to (OPAMP.-);
\node[scale=2] at (6,-2){...};
\draw[thick] (GND.north) |- (OPAMP.+);
\draw[thick] (9,-4) to (9,-2) to[R,label=$R/2$] (13,-2) |- (OPAMP.out);
\end{tikzpicture}
\end{document}
```
