---
aliases: 
creation date: 2023-05-16 12:20
modification date: 2023-05-16 12:20
---

```tikz
\begin{document}
\begin{tikzpicture}
\node[fill = red, draw, fill opacity = 0.5] {x}
	child{node {$\alpha$}}
	child{node[fill = red, draw, fill opacity = 0.5] {y}
	child{node {$\beta$}}
	child{node {$\gamma$}}};
\end{tikzpicture}
\begin{tikzpicture}
\node[fill = red, draw, fill opacity = 0.5] {x}
	child{node {$\alpha$}}
	child{node[fill = red, draw, fill opacity = 0.5] {y}
	child{node {$\beta$}}
	child{node {$\gamma$}}};
\end{tikzpicture}
\end{document}
```
