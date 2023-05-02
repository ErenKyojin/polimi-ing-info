---
aliases: 
creation date: 2023-05-02 11:03
modification date: 2023-05-02 11:03
---

> [!def]
> 
> ```clike
> n1 := q - p + 1
> n2 := r - q
> crea (alloca) due nuovi array L[1...n1 + 1] e R[1...n2 + 1]
> for i := 1 to n1
> 	L[i] := A[p + i - 1]
> for j := 1 to n2
> 	R[j] := A[q + j]
> L[n1 + 1] := infty
> R[n2 + 1] := infty
> i := 1
> j := 1
> for k := p to r
> 	if L[i] <= R[j]
> 		A[k] := L[i]
> 		i := i + 1
> 	else A[k] := R[j]
> 		j := j + 1
> ```
> 

## Complessità
$T_{\text{ MERGE }}(n) = \Theta(n)$
È abbastanza immediato che la complessità sia $n$, ossia lineare.

