---
aliases: matrici
---
>[!def]
>Una matrice di tipo $(m,n)$ detta anche matrice $m \times n$ aa elementi in $\mathbb{K}$ è una tabella di elementi di $\mathbb{K}$ con $m$ righe e $n$ colonne
> $$ A = \begin{bmatrix}
>a_{11} &a_{12}  & \dots &a_{1n} \\
>a_{21} & a_{22} & \dots &a_{2n} \\
>\vdots & \vdots & \ddots &  \vdots \\
>a_{m1} & a_{m2}  & \dots  & a_{mn}
>\end{bmatrix} $$
>
>con $a_{ij} \in \mathbb{K}$ e $i$ e $j$ che indicano rispettivamente riga e colonna dell'elemento. Si può quindi srivere:
>$$ A = [a_{ij}]_{1 \leq i \leq m;1 \leq j \leq n} $$
>Alternativamente $A = [a_{ij}]$
>
>Possiamo indicare **l'insieme** delle matrici $m \times n$ con elementi di $\mathbb{K}$ come:
>$$ M_{(m,n)}(\mathbb{K}) \qquad o\qquad M_{\mathbb{K}}(m,n) $$
>
>Possiamo indicare l'elemento in posizione $i,j$ in una matrice $A \in M_{(m,n)}(\mathbb{K})$ come $[A]_{ij}$


>[!def]
>Date due matrici $A = [a_{ij}]$ e $B = [b_{ij}]$, entrambe $\in M_{(m,n)}(\mathbb{K})$ diremo che $A = B$ se e solo se $a_{ij} = b_{ij}\ \forall i,j$