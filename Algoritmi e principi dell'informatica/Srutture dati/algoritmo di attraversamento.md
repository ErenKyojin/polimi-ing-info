---
aliases: 
creation date: 2023-05-16 10:51
modification date: 2023-05-16 10:51
---

```
INORDER-TREE-WALK(x)
	if(x) != NIL
	 INORDER-TREE-WALK(x.left)
	 print x.key //riga a caso
	 INORDER-TREE-WALK(x.right)
	
```

Se T è un [[alberi binari di ricerca|BST]], `INORDER-TREE-WALK(T.root)` stampata tutti gli elementi, la complessità è banale. Faccio un insieme costante di operazione per ogni nodo, quindi se $|T| = n$ allora $\Theta(t)=n$.

