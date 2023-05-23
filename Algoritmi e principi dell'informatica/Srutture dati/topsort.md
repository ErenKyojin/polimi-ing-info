---
aliases: 
creation date: 2023-05-23 10:31
modification date: 2023-05-23 10:31
---

```
TOPOLOGICAL-SORT(G)
	L := 0
	for each u inn G.V
		u.color := WHITE
	for each u inn G.V
		if u.color = WHITE
			TOPSORT-VISIT(L, u)
	return L
```

```
TOPSORT-VISIT(L, u)
	u.color := GRAY
	for each v inn u.Adj
		if v.color = WHITE
			TOPSORT-VISIT(L, v)
	crea l'elemento di lista x
	x.key := u
	LIST-INSERT(L, x)
	u.color := BLACK
```

Il tempo di esecuzione di TOPSORT è lo stesso di DFS cioè $\Theta(|V| + |E|)$
- Le linee 5-7 di TOPSORT-VISIT impiegano tempo $\Theta(1)$ come le linee 2-3 e 7-8 di DFS-VISIT, il resto dell'algoritmo è analogo a DFS.

