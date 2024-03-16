---
aliases: 
creation date: 2024-03-16
---

>[!def]
>Il **calcolo relazionale su tuple con dichiarazione di range** è un tipo di [[Calcolo relazionale]] tale che le tuple hanno forma
>$$ \{ \mathcal{T} | \mathcal{L} | f \} $$
>- $\mathcal{T}$ è la target list, una lista con elementi del tipo $Y = x.Z$, $x$ variabile e $Y$ e $Z$ sequenze di attributi. 
>  In particolare gli attributi di $Z$ devono comparire nello schema della relazione che definisce il range(campo di variabilità) di $X$
>- $\mathcal{L}$ è detta range list, elenca le variabili libere della formula $f$ con i rispettivi range. $\mathcal{L}$ è lista di elementi del tipo $x(R)$, con $x$ variabile e $R$ nome della relazione
>- $f$ è una formula del tipo
>	- atomica: $x.A\theta c, x_{1}. A_{1}\theta x_{2}.A_{2}$, con $\theta \in \{ =, \neq , <, >, \leq, \geq \}$, $c$ costante.
>	- connettivi $\lor, \land, \neg$
>	- quantificatori $\exists x (R) (f), \forall x(R)(f)$
>		- esiste nella relazione $R$ una tupla $x$ tale che $f$
>		- 