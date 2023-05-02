---
aliases: 
creation date: 2023-05-02 11:27
modification date: 2023-05-02 11:27
---
È un metodo meno preciso ma permette di fare una congettura da verificare con il metodo di sostituzione.
A partire dalla ricorrenza, sviluppiamo l'albero delle chiamate, indicando per ogni chiamata la sua complessità.

>[!esempio]
>$T(n) = T(\lfloor n / 3 \rfloor) + T(\lfloor  2n / 3 \rfloor) + O(n)$


Prima chiamata
```mermaid
graph TB
	A --> B
	A --> C
```

Espandiamo

```mermaid
graph TB
	A(cn) --> B(cn / 3)
	A --> C(2cn / 3)
	B --> B1(n / 9)
	B --> B2(2n / 9)
	C --> C1(2n /9)
	C --> C2(4n / 9)
```



