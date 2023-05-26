---
aliases: proposizioni
creation date: 2023-05-03 09:16
modification date: 2023-05-03 09:16
---

frase compiuta che è sempre o vera o falsa. Può essere atomica o composta (ossia più atomiche connesse da [[connettivi]])

## Sintassi
Per costruire le proposizioni usiamo un [[linguaggio]] il cui alfabeto è composto da:
- Lettere enunciative: A, B, ...., (Al più infinità numerabile, quindi indicabili con $A_{i}$)
- Connettivi $\sim$, $\land$, $\lor$, $\implies$, $\iff$
- Simboli ausiliari: (, )

>[!oss]
>Spesso si aggiungono alle lettere enunciativi altri due siboli $\perp$ e **T**

Dobbiamo considerare le possibili sequenze di simboli che hanno una buona struttura (dette [[formule ben formate]], o f.b.f). 
Per ogni formula inoltre possiamo definire l'[[albero di struttura]] della formula.

Per come le f.b.f. sono definite appare chiaro che uno strumento importante per dimostrare che le f.b.f. godono di una data proprietà è l'induzione sulla [[Complessità]] di una proposizione:
- Se una proprietà vale per tutte le lettere enunciative e se, supposta vera per $\mathcal{A}$ e $\mathcal{B}$ vale per $\sim \mathcal{A}$, $\mathcal{A \land B}, \mathcal{A \lor B}, \mathcal{ A \implies B}, \mathcal{A \iff B}$ allora vale per tutte le formule

## Semantica
Ovvero come stabilire che valore una f.b.f. a partire dai valori delle lettere enunciative che vi compaiono.
Definiamo l'[[interpretazione]]


