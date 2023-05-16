---
aliases: 
creation date: 2023-05-16 10:51
modification date: 2023-05-16 10:51
---

```
INORDER-TREE-WALK(x)
	if(x) = NIL
	 INORDER-TREE-WALK(x.left)
	 print x.key //riga a caso
	 INORDER-TREE-WALK(x.right)
```