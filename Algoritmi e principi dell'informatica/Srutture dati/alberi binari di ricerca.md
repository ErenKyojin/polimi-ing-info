---
aliases: Binary search trees
creation date: 2023-05-16 10:46
modification date: 2023-05-16 10:46
---

Un albero binario di ricerca è un albero binario che soddisfa le seguenti proprietà:
Per tutti i nodi $x$ del BST se $l$ è un nodo nel sottoalbero sinistro allora `l.key` $\leq$ `x.key`

```tikz
\begin{document}
\begin{tikzpicture}
\node {5} child
	{node {3}}
	{node {7}};
\end{tikzpicture}
\end{document}
```
