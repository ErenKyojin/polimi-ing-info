---
aliases: Dijkstra
creation date: 2023-05-23 10:51
modification date: 2023-05-23 10:51
---
Per l'[[algoritmo]] di Dijkstra è utile ricordare il concetto di [[heap]] visto con l'[[heapsort]].
Idea: Eseguiamo una [[visita in ampiezza]] ma quando estraggo un nodo da $Q$ non prendo quella che da più tempo è in $Q$ ma quello che ha distanza minima da $s$.
All'inizio metto tutti i nodi in $Q$ e per ogni nodo $v$ diverso da $s$ metto `v.dist` a $\infty$.

**rilassamento**: quando estraggo un nodo $u$ da $Q$ ontrollo tutti i suoi nodi adiacenti $v$ e, se `u.dist + w(u, v)` è minore del valore `v.dist` trovato fino ad ora, aggiorno `v.dist` con `u.dist + w(u,v)`.
Se aggiorno `v.dist` allora $v$ rimane in $Q$
Tengo traccia per ogni nodo visitato $v$ del suo predecessore nel cammino da $s$, memorizzandolo nell'attributo `v.prev` che viene aggiornato ogni volta che aggiorniamo `v.dist`

```
DIJKSTRA-SHORTEST-PAST
```

```
HEAP-EXTRACT-MIN(A)
	if A.heap-size < 1 //min-heap vuoto
		error "underflow"
	min := A[1]        //minimo primo elemento
	A[1] := A[A.heap-size]  //inseriamo l'ultimo elemento al posto della sorgente
	A.heap-size := A.heap-size - 1 //Diminuiamo la dimensione dell'heap
	MIN-HEAPIFY(A,1) //Risistemiamo l'heap
	return min
```
Con complessità $O(h)$

```
HEAP-DECREASE-
```