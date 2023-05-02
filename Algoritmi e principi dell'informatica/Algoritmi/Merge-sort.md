---
aliases: 
creation date: 2023-05-02 10:57
modification date: 2023-05-02 10:57
---


>[!def] Merge-sort(A, p, r)
>```clike
>if p < r
>	q := floor( ( p + r ) / 2 )
>	merge-sort(A, p, q)
>	merge-sort(A, q + 1, r)
>	merge(A, p, q, r)
>```


Per ordinare un array `A = [A[1], A[2],...,A[n]]`
