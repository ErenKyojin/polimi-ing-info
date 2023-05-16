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
\draw[ultra thick, -latex](1,-1.1) -- ++ (2,0);
\draw[ultra thick, latex-](1,-.9) -- ++ (2,0);
\end{tikzpicture}
\begin{tikzpicture}
\node[fill = red, draw, fill opacity = 0.5] {y}
	child{node {$\gamma$}}
	child{node[fill = red, draw, fill opacity = 0.5] {x}
	child{node {$\alpha$}}
	child{node {$\beta$}}};
\end{tikzpicture}
\end{document}
```
Cambiano le altezze dell'albero (ed anche i colori in un [[Albero rosso-nero|red-black tree]]), ma rimane sempre un BST mantenendo le proprietà.


```
LEFT-ROTATE(T,k)
	y := x.right
	x.right = y.left
	
	if y.left != T.nil
		y.left.p := x
	t
```