---
aliases: 
creation date: 2023-04-28 14:56
modification date: 2023-04-28 14:56
---

>[!def]
>Il diagramma di Hasse è una versione semplificata del [[grafo di incidenza]], utilizzato solitamente per [[relazione d'ordine|relazioni d'ordine]] su [[insieme|insiemi]] finiti.
>Si ottiene a partire dal grafo di incidenza utilizzando alcune convenzioni:
> - Non si rappresentano gli autoanelli (su ogni vertice ce n'è uno)
> - Non si mette la freccia sugli archi (ogni arco ha una sola freccia), si assume che ogni arco vada dal vertice piú in basso verso quello piú in alto.
> - Se c'è un arco che va dal vertice $a$ al vertice $b$ ed uno che va dal vertice $b$ al vertice $c$, si evita di disegnare l'arco (sicuramente presente nel grafo per la transitività della [[Relazioni|relazione]]) che va dal vertice $a$ al vertice $c$.

>[!esempio]
>$A = \{ 2,3,4,6,12 \}$, consideriamo su $A$ la relazione definita ponendo $a \leq b$ sse $a$ divide $b$. Quindi abbiamo $$2 \leq 2, 2 \leq 4, 2 \leq 6, 2 \leq 12,3 \leq 3, 3 \leq 6, 3 \leq 12,4 \leq 4, 4 \leq 12, 6 \leq 6, 6 \leq 12, 12 \leq 12$$
>Ed il diagramma di Hasse è allora
> ```tikz
>\begin{document}
>\begin{tikzpicture}
>\node (3) at (0,0){3};
>\node (6) at (2,2){6};
>\node (2) at (4,0){2};
>\node (4) at (6,2){4};
>\node (12) at (4,4){12};
>\draw (3) -- (6) -- (2) -- (4) -- (12) -- (6);
>\end{tikzpicture}
>\end{document}
>```
>È semplice disegnare il grafo di incidenza ed osservarne la complessità.


Si consideri ora un insieme parzialmente ordinato $A$ (e indichiamo con $\leq$ la sua relazione d'ordine).
- Diciamo **minimo** di $A$ (se esiste) un $m \in A$ tale che per ogni $a \in A$ sia $m \leq a$
- Diciamo **massimo** di $A$ (se esiste) un $m \in A$ tale che per ogni $a \in A$ sia $a \leq m$
- Diciamo **elemento minimale** di $A$ (se esiste) un $m \in A$ tale che $a \in A$ e $a \leq m$ implichino $a = m$ in altre parole per ogni $a \in A$ si ha o $a$ non confrontabile con $m$ o $m \leq a$)
- Diciamo **elemento massimale** di $A$ (se esiste) un $m \in A$ tale che $a \in A$ ed $m \leq a$ implichino $a = m$ (in altre parole per ogni $a \in A$ si ha o $a$ non confrontabile con $m$ o $a \leq m$)

L'insieme parzialmente ordinato di cui abbiamo sopra il diagramma di Hasse ha 12 come massimo e 2, 3 come elementi minimali.

Osserviamo che
