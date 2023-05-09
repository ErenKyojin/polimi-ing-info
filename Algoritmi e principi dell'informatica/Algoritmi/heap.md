---
aliases: 
creation date: 2023-05-09 10:43
modification date: 2023-05-09 10:43
---
>[!def]
>Albero quasi completo, eccetto l'ultimo livello (quello delle foglie) che può non esserlo

>[!def] max-heap
>Ogni nodo $x$ ha un valore $\leq$ del padre e $\geq$ dei figli
>$A[\lfloor i / 2 \rfloor] \geq A[i]$
> l'elemento massimo è la radice, l'elemento minimo è una foglia

>[!def] min-heap
>Come il max-heap ma con segni invertiti


>[!multi column]
>
>>[!parent]
>>```clike
>>return floor(i/2)
>>```
>
>>[!left]
>>```clike
>>return  2*i
>>```
>
>>[!right]
>>```clike
>>return 2*i + 1
>>```


## Algoritmi di supporto

### MAX-HEAPIFY
Dato un elemento di un Array i cui figli sono Max-Heap ma in cui `A[i]` potrebbe essere minore dei suoi figli, modifica l'array affinchè l'albero di radice `A[i]` sia max-heap.

```clike
max-heapify(A, i)
	l := LEFT(i)
	r := RIGHT(i)
	if l <= A.heap-size and A[l] > A[i]
		max := l
	else max := i
	if r <= A.heap-size and A[r] > A[max]
		max := r
	if max != i then
		swap A[i] <-> A[max]
		max-heapify(A, max)
```

È una funzione ricorsiva ed il caso pessimo per singola chiamata è che un sottoalbero abbia due figli mentre l'altro non ne abbia, ossia che il livello inferiore sia pieno a metà.

### BUILD-MAX-HEAP
Si costruisce un max-heap partendo dall'osservazione che le foglie siano già dei max-heap

```clike
build-maxheap(A)
	A.heap.size := A.length
	for i := A.length / 2 downto 1
		max-heapsize(A, i)
```

Per la complessità potremmo pensare di fare un ciclo di $n/2$ passi chiamando una funzione di complessità $\log(n)$, potremmo pensare quindi che la complessità sia $n \log(n)$, tuttavia non è cosí semplice.

Osserviamo che l'altezza di un albero quasi completo di $n$ node è $\lfloor \log_{2}(n) \rfloor$, e se definiamo come l'altezza di un nodo di un heap la lunghezza del cammino piú lungo che porta ad una foglio il costo di max-heapify invocato su un nodo di altezza $h$ è $O(h)$. Ed il numero massimo di nodi di altezza $h$ in un heap è $\lceil n / 2^{h+1} \rceil$.
Max-heapify viene invocato $\lceil n / 2^{h+1} \rceil$ volte ad ogni altezza $h$ quindi il costo di Build-max-heap è 
$$ \sum_{h = 0}^{|\log n|} \lceil \frac{n}{2^{h + 1}} \rceil O(h) = O \left( n \sum_{h = 0}^{|\log n| } \frac{h}{2^h} \right) $$
quindi $O(n)$ in quanto la sommatoria tende a 2.