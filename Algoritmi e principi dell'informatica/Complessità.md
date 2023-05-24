---
aliases: 
creation date: 2023-05-23 12:01
modification date: 2023-05-23 12:01
---
Avendo capito come realizzare se un problema sia risolibile o meno, vogliamo sapere il costo che comporta risolverlo. Ma costo può avere piú significati:
- Costo di tempo
- Costo di spazio
- Costo di sviluppo

Noi ci concentriamo principalmente su cositi oggettivi, quelli sulle risorse (come memoria e tempo di esecuzione).

Sarebbe interessante partire
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
Un linguaggio (problema) $L_{1}$ è riducibile in tempo polinomiale ad un altro linguaggio $L_{2}$ se e solo se esiste una MT deterministica (Traduttrice) con complessità in $P$ che per ogni $x$ produce una stringa $\tau(x)$ tale che $\tau(x) \in L_{2}$ e e solo se $x \in L_{1}$

Se $\mathcal{L}$ è una classe di linguaggi diciamo che un linguaggio $L$ (che non è detto debba essere in $\mathcal{L}$) è $\mathcal{L}$ difficile rispetto alle riduzioni in tempo polinomiale se e solo se per ogni $L' \in \mathcal{L}$, $L$ è riducibile in tempo polinomiale a $L$.
- Cioè se risovlere $L$ è almeno tanto dificciile quanto risolvere un qualunque linguaggio in $\mathcal{L}$

Un linguaggio $L$ è $\mathcal{L}-$completo se è $\mathcal{L}$-difficile ed è in $\mathcal{L}$.

Se si trovasse un problema NP-completo che è risolvibile in tempo polinomiale da una macchina deterministica allora avremo $P=NP$, alternativamente se si trovasse un problema NP-compelsso che non è risolvibile in tempo polinomiale da macchina deterministica allora avremo $P \subset NP$


SAT è NP difficile, quindi NP-completo, quindi codificando le computazioni di una generica MT nondeterministica M (con complessità polinomiale) in SAT, in modo che M accetta una stringa $x$ se e solo se una opportuna formula $s$ è soddisfacibile

HC è anch'esso NP-difficile (e NP completo, che si dimostra riducendo SAT a HC), tanti altri problemi di interesse pratico sono NP-completi