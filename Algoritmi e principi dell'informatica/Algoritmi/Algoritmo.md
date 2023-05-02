---
aliases: Algoritmi
creation date: 2023-04-27 10:41
modification date: 2023-04-27 10:41
---

Un algoritmo può essere scritto in diversi linguaggi, noi utilizziamo lo [[pesudocodice]]:

```clike
for j := 2 to A.length
	key := A[j]
	i := j - 1
	while i > 0 and A[i] > key
		A[i + 1] := A[i]
		i := i - 1
	A[i + 1] := key
```

(L'algoritmo sopra riportato è l'[[algoritmo di insertion sort]])

## Modello di computazione
Il modello di computazione utilizzato è la [[macchina RAM]]