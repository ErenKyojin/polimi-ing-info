---
aliases: 
creation date: 2023-05-02 12:50
modification date: 2023-05-02 12:50
---

L'idea alla base di Heapsort è che un array si può interpretare come un [[heap]].

```clike
heapsort(A)
	build-max-heap(A)
	for i := A.length, downto 2
		swap A[1] <-> A[i]
		A.heap-size := A.heap-size - 1
		max-heapify(A, 1)
```

Ogni ciclo posizioniamo l'elemento piú grande (primo edll'array, in quanto quello è un max-heap) in fondo alla parte di array ancora da ordinare (quella corrispondente all'heap).

Costo $n \log(n)$