---
aliases: 
creation date: 2023-05-23 12:06
modification date: 2023-05-23 12:06
---

Data una [[Macchine di Turing|macchina di Turing]] non deterministica $M$ definiamo la sua [[complessità]] temporale $T_{M}(x)$ per riconoscere la [[stringa]] $x$ come la lunghezza della computazione più breve tra tutte quelle che accettano $x$.
- $T_{m}$ poi è il massimo tra tutti i $T_{m}(x)$ con $|x| = n$

Quindi `NTIME(T)` è la classe dei [[Linguaggio|linguaggi]] riconoscibili in tempo $T$ mediante macchine di Turing nondeterministiche a $k$ nastri di [[memoria]].

Molti problemi si risolvono in modo molto naturale attraverso nondeterminismo (esempio, trovare un cammino che tocca tutti i nodi in un grafo). Tuttavia i meccanismi di calcolo che usiamo noi sono deterministici, potremmo provare a passare da un algoritmo non deterministico ad uno equivalente deterministico, tuttavia questo comporta spesso un aumento di complessità.
dato $Q_{ND}$ numero di stati nell'automa non deterministico, $Q_{D}= 2^{|Q_{ND}|}$.


## Relazione tra DTIME E NTIME
Abbiamo detto che sarebbe utile passare tra computazioni non deterministiche a e deterministiche non cambiasse la classe dei problemi risolvibili, quindi
`DTIME(F) = NTIME(F)` per certe famiglie $\mathcal{F}=\{ T_{i} \}$ di funzioni

Una fondamentale classe di problemi
$$ P = \bigcup_{i \geq 1} DTIME(n^i) $$
detti problemi trattabili, allo stesso modo
$$ \text{NP} = \bigcup_{i \geq 1} \text{NTIME}(n^i) $$
Altre class iinteressanti:
PSPACE, NPSPACE, EXPTIME, NEXPTIME, EXPSPACE, NEXPSPACE

EXPTIME tempo esponenziale

# P = NP ?
Problema ancora aperto, probabilmente no, ma non c'è ancora una dimotrazioni

