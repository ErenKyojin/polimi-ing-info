---
aliases: 
creation date: 2023-05-09 12:18
modification date: 2023-05-09 12:18
---

Ipotesi fondamentale: i valori da ordinare sono tutti [[numeri naturali]] compresi tra 0 e una costante $k$.

```clike
counting-sort(A, B, k)
	for i := 0 to k
		C[i] := 0
	for j := 1 to A.length
		C[A[j]] := C[A[j]] + 1
	//C[i] ora contiene il numero di elementi uguali ad i
	for i = 1 to k
		C[i] := C[i] + C[i - 1]
	//C[i] ora contiene il numero di elementi <= i
	for j := A.length downto 1
		B[C[A[j]]] := A[j]
		C[A[j]] := C[A[j]] - 1

```
Con `A` array di input disordinato, `B` array di output ordinate e `k` il massimo tra i valori di `A`
(`A` e `B` sono della stessa lunghezza). Si ottiene la [[stabilità]] facendo una specie di [[integrale]] dell'array di conteggio (che è il terzo for loop)

$$ T(n) = \Theta(k) + \Theta(n) $$
