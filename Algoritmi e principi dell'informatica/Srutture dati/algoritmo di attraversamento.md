---
aliases: 
creation date: 2023-05-16 10:51
modification date: 2023-05-16 10:51
---

```
INORDER-TREE-WALK(x)
	if(x) != NIL
	 INORDER-TREE-WALK(x.left)
	 print x.key //riga a caso, qua accediamo al dato
	 INORDER-TREE-WALK(x.right)
	
```

Se T è un [[alberi binari di ricerca|BST]], `INORDER-TREE-WALK(T.root)` stampata tutti gli elementi, la complessità è banale. Faccio un insieme costante di operazione per ogni nodo, quindi se $|T| = n$ allora $\Theta(t)=n$.

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
> 
> Stampa in ordine 2, 3, 5, 5, 7, 8

Algoritmi alternativi sono POSTORDER-TREE-WALK e PREORDER-TREE-WALK (dipende dove leggiamo la chiave, provare ad implementare). Si tratta comunque sempre di **visita in profondità**, ossia visitiamo "in verticale" l'albero, vedremo con i [[grafi]] 