---
aliases: 
creation date: 2023-05-23 12:01
modification date: 2023-05-23 12:01
---

[[Complessità spaziale]]
[[Complessità temporale]]

## Complessità e non [[determinismo]]
Data una [[Funzioni|funzione]] $T(n)$ indichiamo come `DTIME(T)` l'[[insieme]] dei [[problema|problemi]] tali che esiste un [[algoritmo]] che risolve in tempo $T(n)$

Più precisamente
- Problema = riconoscimento di un linguaggio
- Algoritmo = [[Macchine di Turing|macchina di turing]]

`DTIME(T)` e (rispettivamente `DSPACE(T)`) è la classe dei [[Linguaggio|linguaggi]] (ricorsivi) riconoscibili in tempo T (rispettivamente spazio) mediante macchina di Turing deterministiche a k nastri di [[memoria]]


Data una funzione totale e computabile $T(n)$ esiste un linguaggio ricorisvo che non è `DTIME(T)`, c'è quindi una gerarchia di linguaggi definita sulla base della complessità temporale deterministica. Una cosa analoga vale per DSPACE e le [[Computazioni nondeterministiche]] (NTIME e NSPACE).

## Riduzione in tempo polinomiale e completezza
Un linguaggio (problema) $L_{1}$ è riducibile in tempo po