---
aliases: 
creation date: 2024-03-16
---

>[!definition]
>Il **calcolo relazionale su tuple con dichiarazione di range** è un tipo di [[Calcolo relazionale]] tale che le espressioni hanno forma
>$$ \{ \mathcal{T} | \mathcal{L} | f \} $$
>- $\mathcal{T}$ è la target list, una lista con elementi del tipo $Y = x.Z$, $x$ variabile e $Y$ e $Z$ sequenze di attributi. 
>  In particolare gli attributi di $Z$ devono comparire nello schema della relazione che definisce il range(campo di variabilità) di $X$
>  Si indica con $x.*$  $x$ con tutti i suoi attributi
>- $\mathcal{L}$ è detta range list, elenca le variabili libere della formula $f$ con i rispettivi range. $\mathcal{L}$ è lista di elementi del tipo $x(R)$, con $x$ variabile e $R$ nome della relazione
>- $f$ è una formula del tipo
>	- atomica: $x.A\theta c, x_{1}. A_{1}\theta x_{2}.A_{2}$, con $\theta \in \{ =, \neq , <, >, \leq, \geq \}$, $c$ costante.
>	- connettivi $\lor, \land, \neg$
>	- quantificatori $\exists x (R) (f), \forall x(R)(f)$
>		- esiste nella relazione $R$ una tupla $x$ tale che $f$
>		- per ogni tupla $x$ in $R$, $f$ è vera.


Il calcolo su tuple non è equivalente all'algebra relazionale, questo perchè le interrogazioni che in algebra relazionale sono figlie dell'unione, e quindi che provengono da due relazioni differenti, non sono realizzabili con il range fisso imposto nell'espressione. Si può ovviare a questo problema, e così è stato fatto ad esempio in SQL, per esprimere interrogazioni non altrimenti esprimibili, con un costrutto di unione definito a parte.