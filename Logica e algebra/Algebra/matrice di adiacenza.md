---
aliases:
  - matrice di incidenza
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

notiamo come ogni colonna ha sempre due elementi, -1 e 1 (infatti ogni lato può uscire da un solo nodo ed entrare in un solo nodo), inoltre la matrice di incidenza è sempre linearmente dipendente, è immediato osservare che se su ogni colonna vi sono sempre due valori opposti, la somma delle righe sarà la riga nulla.
Questo succede perchè la matrice di incidenza contiene troppe informazioni, ed in effetti sappiamo che considerando un grafo con $n$ nodi sono sufficienti $n- 1$ nodi per conoscere tutte le correnti, possiamo prendere solo le $n-1$ righe corrispondenti ai nodi a cui vogliamo calcolare la KCL, escludendo quindi un nodo
# In logica e algebra
Dopo aver fissato un ordine fra gli $|A_{1}|$ elementi di $A_{1}$ e fra gli $|A_{2}|$ elementi di $A_{2}$ (ad esempio quello in cui vengono elencati gli lementi in ciascun [[insieme]]) la matrice di incidenza di $R$ è una matrice con $|A_{1}|$ righe e $|A_{2}|$ colonne, con gli elementi in $\{ 0,1 \}$ tale che il suo elemento di posto $(i,k)$ è $1$ se e solo se la coppia costituita dall'$i$-esimo elemento di $A_{1}$ e dal $j$-esimo elemento di $A_{2}$ appartiene a $R$.

> [!esempio]
> Facendo riferimento al primo esempio del [[grafo di adiacenza]] la matrice di incidenza di $R$ è:
> $$
> M_{R} = \begin{bmatrix}
> 1 & 0 & 0 & 1 \\
> 1 & 1 & 1 & 0 \\
> 0 & 0 & 0 & 0
> \end{bmatrix}
> $$
> 


$R \subseteq A_{1} \times A_{2}, T \subseteq A_{1} \times A_{2}$ con $|A_{1}| = n$ e $|A_{2}|=m$ date le matrici di incidenza $M_{R}$ e $M_{T}$
$$ \begin{align}
R \cap T \subseteq A_{1} \times A_{2} \quad M_{R \cap T}  \\
R \cup T \subseteq A_{1} \times A_{2}\quad M_{R\cup T}
\end{align}$$
C'è una relazione tra le matrici delle relazioni e la matrice della nuova relazione?
$$ \begin{align}
M_{R\cap T} = M_{R} \cdot M_{T} \\
M_{R \cup T} = M_{R} + M_{T}
\end{align} $$
Con il primo prodotto elemento per elemento (avremo 1 solo nelle posizioni che hanno entrambi 1) ed il secondo somma booleana (1 + 1 = 1, 1 + 0 = 1, 0 + 0 = 0)


```anki
deck: LeA
---
# Matrice di adiacenza
===
La matrice di adiacenza $M_R$ di una relazione $R$ tra $A$ e $B$ con $|A| = n$ e $|B| = m$ è una matrice $n \times m$ dove se $m_{ij} = 1$ significa che l'$i$-esimo elemento di $A$ è in relazione con il $j$-esimo elemento di $B$.
```
