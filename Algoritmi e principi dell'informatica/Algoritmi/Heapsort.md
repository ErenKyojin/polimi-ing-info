---
aliases: 
creation date: 2023-05-02 12:50
modification date: 2023-05-02 12:50
---

L'idea alla base di Heapsort è che un array si può interpretare come un albero binario
- $A[i]$ è la radice
- Per ogni elemento $A[i], A[2i]$ e A$[2i + 1]$ sono i suoi figli e $A[\lfloor i / 2 \rfloor]$ è il papdre

 
 | pos  | 1   | 2   | 3   | 4   |
 | ---- | --- | --- | --- | --- |
 | elem | 5   | 7   | 2   | 1    |


```mermaid
graph TB
	A(5) --> B(7)
	
```
