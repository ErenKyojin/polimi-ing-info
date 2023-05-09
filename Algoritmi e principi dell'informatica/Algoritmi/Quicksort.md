---
aliases: 
creation date: 2023-05-09 11:17
modification date: 2023-05-09 11:17
---

[[algoritmi divide et impera|Algoritmo dividi et impera]] che può avere complessità quadratica, quindi non sembra tanto buono, tuttavia solitamente è molto piú efficiente.


```clike
quicksort(A, p, r)
	Q := partition(A, p ,r) //Q posizione del perno
	quicksort(A, p , q - 1)
	quicksort(A, q + 1, r)
```
Tutti gli elementi prima del perno sono minori del perno stesso e tutti gli elementi successivi al perno sono maggiori del perno stesso. 

Vediamo piú dettagliatamente la funzione partition:

```clike
Partition(A, p, r)
	x := A[r]
	i := p - 1
	for 1 := p to r - 1
		if A[j] <= x
			i := i + 1
			swap A[i] <-> A[j]
	swap A[i + 1] <-> A[r]
	return i + 1
```

Per ordinare un array `A`: `quicksort(A, 1, A.length)`


La complessità dipende da come scegliamo i due sottoarray 
$T(n) = 2T(n / 2) + \Theta(n)$
Se uno dei due sottoarray è sempre vuoto e l'altro contiene $n-1$ elementi si ha il caso pessimo:
$$ T(n)= T(n-1) + \Theta(n) $$
Ossia il caso pessimo è quando l'array è sempre ordinato