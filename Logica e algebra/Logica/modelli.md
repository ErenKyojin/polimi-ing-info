---
aliases: 
creation date: 2023-05-03 11:23
modification date: 2023-05-03 11:23
---


| $\sim$ | $A$ | $\land$ | $B$ | $\iff$ | ($A$ | $\implies$ | ($B$ | $\lor$ | $A$)) |
| ------ | --- | ------- | --- | :------: | ---- | ---------- | ---- | ------ | ----- |
| 1      | 0   | 0       | 0   | 1      | 0    | 1          | 0    | 0      | 0     |
| 1      | 0   | 0       | 1   | 1      | 0    | 1          | 1    | 1      | 0     |
| 1      | 1   | 0       | 0   | 1      | 1    | 1          | 0    | 1      | 1     |
| 0      | 1   | 1       | 1   | 0      | 1    | 1          | 1    | 1      | 1      |

Le righe della tavola di verità sono tutte le possibile interpretazioni della formula e le righe che restituiscono il valore $1$ nella colonna del connettivo principale sono i [[modelli]] della formula.

Sono allora modelli per la nostra formula le valutazioni:
$v_{1}$ per cui $v_{1}(A) = v_{1}(B) = 0$
$v_{2}$ per cui $v_{2}(A) = 0$, $v_{2}(B)=1$
$v_{3}$ per cui $v_{3}(A) = 1, v_{3}(B)=0$

Decidere se una [[formule ben formate|f.b.f.]] è soddisfacibile richiede un procedimento semplice, ma costoso dal punto di vista delle [[complessità]] (tale [[problema]] è infatti NP-completo).

I concetti di modello, soddisfacibilità e insoddisfacibilità si possono estendere ad un [[insieme]] $\Gamma$ di f.b.f. :
- Un modello per $\Gamma$ è una interpretazione che sia modello per ogni f.b.f. di $\Gamma$
- $\Gamma$ è soddisfacibile se ammette un modello
- $\Gamma$ è insoddisfacibile se nessuna [[interpretazione]] è un modello per $\Gamma$

Una f.b.f. $\mathcal{A}$ è una **coseguenza [[semantica]]** di un [[insieme]] $\Gamma$ di f.b.f., e si scrive $\Gamma \vDash \mathcal{A}$, se ogni modello di $\Gamma$ è un modello per $\mathcal{A}$.
In particolare $\mathcal{A}$ è conseguenza semantica di $\mathcal{B}$ se ogni modello di $\mathcal{B}$ è modello di $\mathcal{A}$. Si ottiene quindi il [[teorema di deduzione semantica]]




