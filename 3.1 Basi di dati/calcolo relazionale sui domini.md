---
aliases: 
creation date: 2024-03-16
---

>[!def]
>Il **calcolo relazionale sui domini** è un tipo di [[calcolo relazionale]] tale che le espressioni hanno forma
>$$ \{ A_{1} : x_{1} , A_{2} : x_{2}, \dots, A_{n} : x_{n} | f \} $$ 
>- $A_{1},\dots,A_{k}$ attributi
>- $x_{1},\dots,x_{k}$ variabili
>- $f$ formula tale che
>	- $R(A_{1} : x_{1}, \dots, A_{p} : x_{p})$, con $(A_{1}, \dots, A_{p})$ schema di relazione, è una formula atomica
>	- $x = y, x \neq y, x > y, x< y, x \geq y, x \leq y$ con $x,y$ variabili, sono formule atomiche
>	- $x = c, x \neq c, x > c, x < c, x \geq c, x \leq c$  con $x$ variabile, $c$ costante, sono formule atomiche
>	- se $f_{1}$ ed $f_{2}$ sono formule, allora $f_{1} \land f_{2}, f_{1} \lor f_{2}, \neg f_{1}$  sono formule
>	- se $f$ è una formula ed $x$ è una variabile, $\exists x(f), \forall x (f)$ sono formule

La lista di coppie $A_{1} : x_{1}, A_{2} : x_{2},\dots, A_{n} : x_{n}$ è detta target list