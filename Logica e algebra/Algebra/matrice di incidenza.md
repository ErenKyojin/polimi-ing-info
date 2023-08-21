---
aliases: 
creation date: 2023-04-26 09:14
modification date: 2023-04-26 09:14
---

# In elettrotecnica

> [!def]
> Dato un grafo con $n$ nodi e $l$ lati, possiamo definire la matrice di incidenza del grafo come una matrice $n \times l$. 
> La $k$-esima riga indica il nodo $k$, la $j$-esima colonna indica il lato $j$, e possiamo riempire la matrice:
> $$ a_{kj} = \begin{cases}
> +1 &\text{il lato $j$ incide nel nodo $k$ uscente} \\
> -1 &\text{il lato $j$ incide nel nodo $k$ entrante}\\
> 0 &\text{il lato $j$ non incide nel nodo $k$}
> \end{cases} $$
> C'è corrispondenza biunivoca tra un grafo e  la sua matrice di incidenza.

notiamo come ogni colonna ha sempre due elementi, -1 e 1 (infatti ogni lato può uscire da un solo nodo ed entrare in un solo nodo), inoltre 
# In logica e algebra
Dopo aver fissato un ordine fra gli $|A_{1}|$ elementi di $A_{1}$ e fra gli $|A_{2}|$ elementi di $A_{2}$ (ad esempio quello in cui vengono elencati gli lementi in ciascun [[insieme]]) la matrice di incidenza di $R$ è una matrice con $|A_{1}|$ righe e $|A_{2}|$ colonne, con gli elementi in $\{ 0,1 \}$ tale che il suo elemento di posto $(i,k)$ è $1$ se e solo se la coppia costituita dall'$i$-esimo elemento di $A_{1}$ e dal $j$-esimo elemento di $A_{2}$ appartiene a $R$.

> [!esempio]
> Facendo riferimento al primo esempio del [[grafo di incidenza]] la matrice di incidenza di $R$ è:
> $$
> M_{R} = \begin{bmatrix}
> 1 & 0 & 0 & 1 \\
> 1 & 1 & 1 & 0 \\
> 0 & 0 & 0 & 0
> \end{bmatrix}
> $$
> 


