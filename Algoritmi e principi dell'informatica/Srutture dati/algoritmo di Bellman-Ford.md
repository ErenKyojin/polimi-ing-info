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
			for each v in u.Adj
				if d[v] > d[u] + w(u,v):
					d[v] := d[u] + w(u,v)
					P[v] := u
	return d, P
```
Rilasso un passo alla volta partendo da $s$, avanzando nei cammini di un passo. Al $|V|-1$-esimo passo sicuramente avrò toccato tutti i nodi raggiungibili. (chiaramente non converge se ci sono cicli negativi).

È un