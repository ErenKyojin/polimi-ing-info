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

Le righe della tavola di verità sono tutte le possibile interpretazioni della formula e le righe che restituiscono il valore $1$ nella colonna del connettivo principale sono i [[modelli]] della formula.


Ad ogni tavola di verità corrisponde sempre una f.b.f. che la ammette come tavola di verità? La risposta è sí, ed il metodo per costrui la formula è il seguente:
Ad ogni riga della tavolesi associa un termine costruito facendo l'and di ogni lettera enunciativa o della sua negazione, a seconda che le lettere assumano il valore 1 o 0, poichè i termini così costruiti hanno la caratteristica di valere $1$ solo in corrispondenza dell'assegnamento di valori di verità fassiato da quella riga, facendo l'or dei termini che corrispondono alle righe in cui la formula assume il valore $1$, si costruisce una f.b.f. che ha esattamente la tavola di verità assegnata. La formula così costruita ha una forma speciale detta forma normale disgiuntiva.

> [!esempio]
> Data la tavola
> 
> | A   | B   | C   | f(A,B,C) |
> | --- | --- | --- | -------- |
> | 0   | 0   | 0   | 0        |
> | 0   | 0   | 1   | 0        |
> | 0   | 1   | 0   | 1        |
> | 0   | 1   | 1   | 1        |
> | 1   | 0   | 0   | 0        |
> | 1   | 0   | 1   | 0        |
> | 1   | 1   | 0   | 1        |
> | 1   | 1   | 1   | 0        | 
> 
> Una formula (in forma normale disgiuntiva) che ammette la tavola data come tavole di verità è:
>  $$ (\sim A \land B \land \sim C) \lor (\sim \land A \land B \land C) \lor (A \land B \land \sim C) $$
>  
>Possiamo quindi osservare che un qualsiasi f.b.f. annette una fomrula equivalente che usa solo i tre [[connettivi]] $\sim, \land, \lor$.

Per trasformare una formula in modo da costruire una f.b.f. equivalente alla data e che sia "più semplice" perchè utilizza un numero minore di connettivi, o un numero minore di tipi di connettivi, si utilizzano le seguenti osservazioni:

- Se in una formula $\mathcal{A}$ si sostituisce una sottoformula $\mathcal{B}$ con una formula $\mathcal{B}'$ equivalente a $\mathcal{B}$, si ottiene una formula $\mathcal{A}'$ equivalente ad $A$.
- Se in una tautologia $\mathcal{A}$ si sostituisce ogni occorrenza di una stessa lettera enunciativa $A$ con la stessa formula $\mathcal{B}$ si ottiene ancora una tautologia

E le seguenti equivalenze fondamentali:
$$ \begin{align} 
\sim (\sim A) &\equiv A\\
A \land B &\equiv B \land A\qquad&A \lor A &\equiv A \\
 A \land A &\equiv A & A \lor B&\equiv B  \lor A\\
 (A \land B) \land C &\equiv A \land (B \land C) & (A \lor B) \lor C &\equiv A \lor (B \lor C) \\
A \land (A \lor B) &\equiv A & A \lor (A \land B) &\equiv A \\
A \land (B \lor C) &\equiv (A \land B) \lor (A \land C) &A \lor (B \land C) &\equiv (A \lor B) \land (A \lor C) \\
\sim(A \land B) &\equiv \sim A \lor \sim B &\sim(A \lor B)&\equiv \sim A \land \sim B \\
A \implies B &\equiv \sim A \lor B & A \implies B &\equiv \sim(A \land \sim B) \\
B &\equiv (\sim A \land A) \lor B  & B  & \equiv (\sim A \lor A) \land B
 
\end{align} $$
Inoltre le due ultime formula si possono sostituire rispettivamente con:
- $\perp \equiv \sim A \land A$ e $\perp \lor B \equiv B$
- $\top \equiv \sim A \lor A$ e $\top \land B \equiv B$

Possiamo quindi definire gli [[insiemi adeguati]] 

# Nel [[linguaggio del primo ordine]]

>[!def]
>- Ogni formula atomica è una f.b.f.