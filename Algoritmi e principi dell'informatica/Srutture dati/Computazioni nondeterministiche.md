---
aliases: 
creation date: 2023-05-23 12:06
modification date: 2023-05-23 12:06
---

Data una macchina di Turing non deterministica $M$ definiamo la sua complessità temporale $T_{M}(x)$ per riconoscere la stringa $x$ come la lunghezza della computazione più breve tra tutte quelle che accettano $x$.
- $T_{m}$ poi è il massimo tra tutti i $T_{m}(x)$ con $|x| = n$

Quindi `NTIME(T)` è la classe dei linguaggi riconoscibili in tempo $T$ mediante macchine di Turing nondeterministiche a $k$ nastri di memoria