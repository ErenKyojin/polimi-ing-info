---
aliases: 
creation date: 2023-04-26 09:14
modification date: 2023-04-26 09:14
---

# In elettrotecnica
Dato un grafo con $n$ nodi e $l$ lati, possiamo definire la matrice di incidenza del grafo come una matrice $n \times l$. 
La $k$-esima riga indica il nodo $k$, la $j$-esima colonna indica il lato $j$, e possiamo riempire la matrice:
$$ a_{jk} = \begin{cases}
+1
\end{cases} $$
C'è corrispondenza biunivoca tra un grafo e  la sua matrice di incidenza.
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


