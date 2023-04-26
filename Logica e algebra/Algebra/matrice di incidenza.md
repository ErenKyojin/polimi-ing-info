---
aliases: 
creation date: 2023-04-26 09:14
modification date: 2023-04-26 09:14
---

Dopo aver fissato un ordine fra gli $|A_{1}|$ elementi di $A_{1}$ e fra gli $|A_{2}|$ elementi di $A_{2}$ (ad esempio quello in cui vengono elencati gli lementi in ciascun insieme) la matrice di incidenza di $R$ è una matrice con $|A_{1}|$ righe e $|A_{2}|$ colonne, con gli elementi in $\{ 0,1 \}$ tale che il suo elemento di posto $(i,k)$ è $1$ se e solo se la coppia costituita dall'$i$-esimo elemento di $A_{1}$ e dal $j$-esimo elemento di $A_{2}$ appartiene a $R$.

Facendo riferimento al primo esempio del [[grafo di incidenza]] la matrice di incidenza di $R$ è:
$$
M_{R} = \begin{bmatrix}
1 & 0 & 0 & 1 \\
1 & 1 & 1 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$
Osserviamo che, date le matrici di incidenza $M_{R}$ e $M_{T}$ di due relazioni binarie $R,T \subseteq A_{1} \times A_{2}$ si possono immediatamente ottenere la matrice di incidenza di $R \cap T$ (facendo il prodotto elemento per elemento di $M_{R}$ con $M_{T}$) e quella di $R \cap T$



