---
aliases: 
creation date: 2023-03-23 17:38
modification date: 2023-03-23 17:38
---

```tikz
\usepackage{amsfonts}
\begin{document}
\begin{tikzpicture}
\draw[->] (-2,0) -- (2,0)node[below]{$\mathbb{R}$};
\draw[->] (0,-2) -- (0,2)node[left]{$\mathbb{I}$};
\draw[->,red] (0,0) -- (0,1.5)node{$j\omega$}; 
\end{tikzpicture}
\begin{tikzpicture}
\draw[->] (0,5) -- (5,5)node[midway]{$G(s)$};
\end{tikzpicture}
\begin{tikzpicture}
\draw[->] (-2,0) -- (2,0)node[below]{$\mathbb{R}$};
\draw[->] (0,-2) -- (0,2)node[left]{$\mathbb{I}$};
\draw plot [smooth] coordinates {(0,0)  (-1,-.5)  (-.6,-1)};
\end{tikzpicture}
\end{document}
```
Scriviamo $G(s) = \frac{\mu}{S^g} \frac{1 + \dots}{1 + \dots}$ com per bode,
e del diagramma polare DP analizziamo
- comportamento asintotico per $\omega \to 0^+$ e $\omega \to + \infty$
- aspetto qualitativo


Comportamento per $\omega \to 0$ se $G(0)$ è definito o asintoticamente per $\omega \to 0^+$
- $g = 0$, $G(0) = \mu$
  ```tikz
\usepackage{amsfonts}
\begin{document}
\begin{tikzpicture}
\draw[->] (-2,0) -- (2,0)node[below]{$\mathbb{R}$};
\draw[->] (0,-2) -- (0,2)node[left]{$\mathbb{I}$};
\node at (-1,0){\bullet};
\node (b) a
\end{tikzpicture}
\end{document}
```
- $g < 0$, $G(0) = 0$ $\qquad$ il diagramma polare parte nell'origine
- $g > 0, G(0)$ non è definita $\qquad$ il diagramma polare parte all'infinito con fase $-g 90^o$

