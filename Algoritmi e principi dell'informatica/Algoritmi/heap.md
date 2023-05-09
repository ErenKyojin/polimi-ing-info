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
Dato un elemento di un Array i cui figli sono Max-Heap ma 