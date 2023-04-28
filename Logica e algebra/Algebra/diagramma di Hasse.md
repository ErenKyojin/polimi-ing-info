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
>$A = \{ 2,3,4,6,12 \}$, consideriamo su $A$ la relazione definita ponendo $a \leq b$ sse $a$ divide $b$. Quindi abbiamo $2 \leq 2, 2 \leq 4, 2 \leq 6, 2 \leq 12, 3 \leq 6, 3 \leq 12, 4 \leq 12, 6 \leq 12$

