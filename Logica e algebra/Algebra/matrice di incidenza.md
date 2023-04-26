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
Osserviamo che, date le matrici di incidenza $M_{R}$ e $M_{T}$ di due relazioni binarie $R,T \subseteq A_{1} \times A_{2}$ si possono immediatamente ottenere la matrice di incidenza di $R \cap T$ (facendo il prodotto elemento per elemento di $M_{R}$ con $M_{T}$) e quella di $R \cup T$ (facendo la somma di $M_{R}$ con $M_{T}$ e ponendo uguale ad $1$ tutti gli elementi della somma maggiore di $0$).

Siano ora date le relazioni $R \subseteq A_{1} \times A_{2}$ e $T \subseteq A_{2} \times A_{3}$. Si chiama prodotto delle due relazioni la relazione $R \cdot T \subseteq A_{1} \times A_{3}$ cosî



