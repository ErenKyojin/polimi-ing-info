---
aliases: 
creation date: 2023-05-02 10:36
modification date: 2023-05-02 10:36
---
L'insertion sort funziona come 

```clike
for j := 2 to A.length
	key := A[j]
	//inserisci A[j] nella sequenza ordinata
	i := j - 1
	while i > 0 and A[i] > key
		A[i + 1] := A[i]
		i := i - 1
	A[i + 1] := key
```

>[!c]-
>```c
>void insertion_sort(int* array, int size){
>	for(int j = 1; j < size; j++)
>		int key = A[max];
>		int i = max - 1;
>		while(i > 0 && A[i] > key)
>		{
>			A[i + 1] = A[i];
>			i = i - 1;
>		}
>		A[i + 1] = key;
>}
>```

Notiamo che in ogni dato momento le carte dalla 1 alla $j-1$-esima sono sempre ordinate, le restanti sono ancora quelle da considerare nell'array ordinato.
Queste proprietà sono dette [[invarianti di ciclo]]
## Costo di esecuzione

> [!multi-column]
>
>>[!faq] codice
> > ```clike
> > for j := 2 to A.length
> > 	key := A[j]
> > 	// ins A[j] in A[1....j-1]
> > 	i := k - 1
> > 	while i > 0 and A[i] > key
> > 		A[i + 1] := A[i]
> > 		i := i - 1
> > 	A[i + 1] := key
> > ```
>
>>[!tip] costo 
>>```clike
>>c1 
>>c2 
>>0 
>>c4 
>>c5 
>>c6
>>c7
>>c8
>>```

>[!oss] Numero di volte
> c1: $n$
> c2: $n-1$
> c4: $n-1$
> c5: $\sum_{j = 2}^n t_{j}$
> c6: $\sum_{j = 2}^n (t_{j} - 1)$
> c7: $\sum_{j = 2}^n (t_{j} - 1)$
> c8: $n - 1$

efficenza $n^2$
