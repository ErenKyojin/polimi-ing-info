---
aliases: Binary search trees, BST
creation date: 2023-05-16 10:46
modification date: 2023-05-16 10:46
---

Un albero binario di ricerca è un albero binario che soddisfa le seguenti proprietà:
Per tutti i nodi $x$ del BST se $l$ è un nodo nel sottoalbero sinistro allora `l.key` $\leq$ `x.key`

> [!esempio]
> ```tikz
> \begin{document}
> \begin{tikzpicture}
> \node {5}
> 	child {node {3}
> 	 child{node {2}}
> 	 child{node {5}}}
> 	child {node {7}
> 	child {node {8}}};
> \end{tikzpicture}
> \end{document}
> ```

Per visitare un'albero si sfrutta un [[algoritmo di attraversamento]], vediamo invece la ricerca

## Ricerca
```
TREE-SEARCH(x, k)
	if x = NIL or k = x.key
		return x
	if x < x.key
		return TREE-SEARCH(x.left, k)
	else return TREE-SEARCH(x.right, k)
```
Il tempo di ese