---
aliases: 
creation date: 2024-02-19
---
Il calcolo combinatorio consiste nel contare tutte le funzioni tra due insiemi

Dato un insieme A di a elementi e un insieme B di b elementi è facile osservare che ci sono $b^a$ possibili funzioni.


>[!definition] principio fondamentale del calcolo combinatorio
>Il principio fondamentale del calcolo combinatorio afferma che dati $r$ esperimenti, contando che il primo abbia $n_{1}$ risultati possibili, il secondo $n_{2}$ per ogni risultato $n_{1}$, il terzo $n_{3}$ per ogni risultato dei due precedenti, ecc. Allora il numero di risultati possibili degli $r$ esperimenti è
>$$ n = n_{1} \cdot n_{2} \cdot n_{3} \dots n_{r}  $$

---

Data una generica funzione $S : A \to B$, definiamo $\mathbb{1}_{S}(x) : A \to \mathbb{R}$ tale che
$$ \mathbb{1}_{S}(x) =\begin{cases}
1 & x \in S \\
0 & x \notin S
\end{cases} $$
detta funzione indicatrice di S

$2^a$ funzioni possibili #todo 

---

Contare tutte le funzioni iniettive
$$f : A \to B$$
- conto le assegnazioni possibili da $x_{1}$ a $B$, che saranno $b$
- Le assegnazioni possibili sono ora $b - 1$
- ...

$$b\times(b-1)\times(b-2)\times\dots \times(b - a + 1) = \frac{b!}{(b-a)!}$$

