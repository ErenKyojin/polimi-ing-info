---
aliases: Algoritmo divide et impera
creation date: 2023-05-02 11:15
modification date: 2023-05-02 11:15
---

Un algoritmo divide et impera ha le caratteristiche seguenti:
- Si divide il problema in sottoproblemi, ognuno di dimensione $1/b$ rispetto all'originale
- Se il sottoproblema ha dimensione $n$ piccola a sufficenza ($n < c$ con $c$ costante caratteristica del problema, può risultare costante)
- Indichiamo con $D(n)$ il costo di dividere il problema, e $C(n)$ il costo di ricombinare i sottoproblemi
- $T(n)$ è il costo del problema totale

Possiamo quindi esprimere $T(n)$ tramite la seguente equazione di ricorrenza
$$ T(n) = \begin{cases}
\Theta(1)\qquad &\text{se }n < c \\
D(n) + aT(n / b) +  C(n) &\text{altrimenti }
\end{cases} $$



