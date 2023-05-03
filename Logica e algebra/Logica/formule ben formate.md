---
aliases: f.b.f.,
creation date: 2023-05-03 09:25
modification date: 2023-05-03 09:25
---

> [!def]
> Le **formule ben formate** o **f.b.f.** sono sequenze di simboli con una buona struttura che si definiscono in maniera ricorsiva:
> - Ogni lettere enunciativa è una f.b.f.
> - Se $\mathcal{A}$ è una f.b.f anche $(\sim \mathcal{A})$ è una f.b.f.
> - Se $\mathcal{A}$ e $\mathcal{B}$ sono f.b.f. anche $(\mathcal{A} \land \mathcal{B}), (\mathcal{A} \lor \mathcal{B}), (\mathcal{A} \implies \mathcal{B)}, (\mathcal{A} \iff \mathcal{B})$ sono f.b.f
> - Nient'altro è una f.b.f
> 

Le lettere in stampatello indicano lettere enunciative, le lettere corsive indicano una f.b.f

>[!esempio]
> $((\sim(A \land B)) \iff(A \implies (B \lor A)))$ è una formula ben formata, ma contiene troppe parentesi, introduciamo quindi [[connettivi#precedenza]]
> 



Una [[formule ben formate|f.b.f.]] $\mathcal{A}$ si dice **soddisfacibile** se esiste almeno una [[interpretazione]] $v$ tale che $v(\mathcal{A}) = 1$, l'interpretazione $v$ si dice in tal caso modello di $\mathcal{A}$.

Una f.b.f. $\mathcal{A}$ per cui ogni interpretazione è un modello si dice **tautologia** e si scrive $\vDash \mathcal{A}$.

Una f.b.f. $\mathcal{A}$ che non ammette modelli si dice **insoddisfacibile**

> [!oss]
> $\mathcal{A}$ è una tautologia se e solo $\sim \mathcal{A}$ è insoddisfacibile

A questo punto se vogliamo ottenere tutte le possibile interpretazioni della formula esempio $\sim (A \land B) \iff (A \implies (B \lor A))$ possiamo costruire la seguente tavola di verità:

| $A$ | $B$ | $A \land B$ | $B \lor A$ | $\sim(A \land B)$ | $A \implies (B \lor A)$ | $\sim (A \land B) \iff (A \implies (B \lor A))$ |
| :---: | :---: | :-----------: | :----------: | :-----------------: | :-----------------------: | :-----------------------------------------------: |
| 0   | 0   | 0           | 0          | 1                 | 1                       | 1                                               |
| 0   | 1   | 0           | 1          | 1                 | 1                       | 1                                               |
| 1   | 0   | 0           | 1          | 1                 | 1                       | 1                                               |
| 1   | 1   | 1           | 1          | 0                 | 1                       | 0                                               | 

Più brevemente possiamo calcolare la tavola di verità della nostra formula, senza riscrivere tutte le sue [[sottoformule]], ma mettendo i valori di verità di ogni sottoformula sotto il suo connettivo principale (cioè sotto l'ultimo connettivo usato per costruire la sottoformula)

| $\sim$ | $A$ | $\land$ | $B$ | $\iff$ | ($A$ | $\implies$ | ($B$ | $\lor$ | $A$)) |
| ------ | --- | ------- | --- | :------: | ---- | ---------- | ---- | ------ | ----- |
| 1      | 0   | 0       | 0   | 1      | 0    | 1          | 0    | 0      | 0     |
| 1      | 0   | 0       | 1   | 1      | 0    | 1          | 1    | 1      | 0     |
| 1      | 1   | 0       | 0   | 1      | 1    | 1          | 0    | 1      | 1     |
| 0      | 1   | 1       | 1   | 0      | 1    | 1          | 1    | 1      | 1      |

Le righe della tavola di verità sono tutte le possibile interpretazioni della formula e le righe che restituiscono il valore $1$ nella colonna del connettivo principale sono i modelli della formula.
Sono allora modelli per la nostra formula le valutazioni:
$v_{1}$ per cui $v_{1}(A) = v_{1}(B) = 0$
$v_{2}$ per cui $v_{2}(A) = 0$, $v_{2}(B)=1$
$v_{3}$ per cui $v_{3}(A) = 1, v_{3}(B)=0$

Decidere se una f.b.f. è soddisfacibile richiede un procedimento semplice, ma costoso dal punto di vista delle complessità (tale [[problema]] è infatti NP-completo).

I concetti di modello, soddisfacibilità e insoddisfacibilità si possono estendere ad un [[insieme]] $\Gamma$ di f.b.f.