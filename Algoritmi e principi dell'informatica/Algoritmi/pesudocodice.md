	---
aliases: 
creation date: 2023-04-27 10:42
modification date: 2023-04-27 10:42
---

Non un vero [[linguaggio]] di programmazione, ma simile, è facile da tradurre in codice vero e proprio (in C, Java, Python, ...), ed il linguaggio scelto per l'implementazione è come cambiare hardware per un programma.

- Assegnamento: `i:= j`
	- Assegnamento multiplo: `i := j := e`
	- Come scrivere `j := e`, `i := e`
- while, for, if-then-else come in c
- `//` commenti
- Blocchi dati da indentazione


>[!Multi-column]
>
>>[!pseudo]
>>```clike
>>while i > 0 and A[i] > key
>>	A[i + 1] := A[i]
>>	i := i - 1
>>A[i + 1] := key
>>```
>
>>[!c]
>>```c
>>while(i > 0 and A[i] > key)
>>{
>>	A[i + 1] := A[i];
>>	i := i - 1;
>>}
>>A[i + 1] := key
>>```

- Le variabili sono locali alla procedura
- Agli elementi dell'array si accede come C, ed il primo elemento può avere indice diverso da 0
- Esistono sottoarray