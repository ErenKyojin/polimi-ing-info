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



Una [[formule ben formate|f.b.f.]] $\mathcal{A}$ si dice **soddisfacibile** se esiste almeno una interpretazione $v$ tale che $v(\mathcal{A}) = 1$, l'interpretazione $v$ si dice in tal caso modello di $\mathcal{A}$.

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

Più brevemente possiamo calcolare la tavola di 