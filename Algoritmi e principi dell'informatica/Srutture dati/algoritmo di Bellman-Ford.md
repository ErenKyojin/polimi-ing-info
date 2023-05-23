---
aliases: Bellman-Ford
creation date: 2023-05-23 11:35
modification date: 2023-05-23 11:35
---
Vengono usati due vettori per costruire la soluzione
$\forall v \in V$


```
BELLMAN-FORD(G, w, s)
	allocate vectors d, P of size |G.V|
	for i from 0 to |G.V| - 1
		d[i] := infty
	d[s] := 0
	repeat for |V| - 1 times
		for each u in G.V
			
```