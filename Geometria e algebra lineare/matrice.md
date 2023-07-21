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
>Date due matrici $A = [a_{ij}]$ e $B = [b_{ij}]$, entrambe $\in M_{(m,n)}(\mathbb{K})$ diremo che $A = B$ se e solo se $a_{ij} = b_{ij}\ \forall i =1,\dots,m\ \forall j = 1,\dots,n$


### Nomenclatura
- Una qualsiasi matrice dell'insieme $M_{(n,n)}(\mathbb{K})$ è detta **matrice quadrata**
- Una qualsiasi matrice dell'insieme $M_{(1,n)}(\mathbb{K})$ è detta **vettore riga**
- Una qualsiasi matrice dell'insieme $M_{(n,1)}(\mathbb{K})$ è detta **vettore colonna**


# Operazioni tra matrici
## Somma
$$\begin{align}
+ : M_{(m,n)}(\mathbb{K}) \times M_{(m,n)}(\mathbb{K}) &\to M_{(m,n)}(\mathbb{K}) \\
(A,B) & \mapsto A + B := [a_{ij} + b_{ij}]
\end{align} $$
La somma è quindi definita solo tra matrici appartenenti allo stesso insieme

### Proprietà della somma
1. **Proprietà associativa** $(A + B) + C = A + (B + C) \forall A, B, C \in M_{(m,n)}(\mathbb{K})$
2. **Proprietà commutativa** $A + B = B + A\ \forall A,B  \in M_{(m,n)}(\mathbb{K})$
3. **Elemento neutro** $0_{m,n} = \begin{bmatrix}0 & \dots & 0\\\vdots & \ddots & \vdots \\0 & \dots & 0\end{bmatrix}$ detto [[matrice nulla]] 
4. **Elemento opposto** $\forall A \in M_{(m,n)}(\mathbb{K})\quad \exists\ A' \in M_{(m,n)}(\mathbb{K})$ tale che $A + A' = 0_{(m,n)}$, se $A = [a_{ij}] \implies A' = [-a_{ij}]$


## Moltiplicazione tra matrice e tra scalare
$$ \begin{align}
\cdot : \mathbb{K}  \times M_{(m,n)}(\mathbb{K}) &\to M_{(m,n)}(\mathbb{K}) \\
(t, A)  & \mapsto t\cdot A := [t\cdot a_{ij}]
\end{align} $$

> [!esempio]
> $$A = \begin{bmatrix}
> 1 & 3 & 0 \\
> \pi & 4 & 9
> \end{bmatrix}, t = 2 \implies t\cdot A = \begin{bmatrix}
> 2  & 6 & 0 \\
> 2\pi & 8 & 18
> \end{bmatrix} $$

### Proprietà del prodotto tra matrice e scalare
1. **Proprietà distributiva rispetto alla somma di scalari** $(t + s)\cdot A = t\cdot A + s\cdot A$
2. **Proprietà distributiva rispetto alla somma di matrici**: $t\cdot(A + B) = t \cdot A + t\cdot B$
3. **Proprietà distributiva rispetto al prodotto di scalari**: $(t\cdot s)\cdot A = t\cdot(S \cdot A)$
4. **Elemento neutro**: $1 \cdot A = A$ ($1 \in \mathbb{K}$)

>[!oss]
>Possiamo ottenere la [[matrice opposta]] di una matrice $A$ attraverso il prodotto: $-1 \cdot A = [-a_{ij}]$, si indica con $-A$


>[!def]
>Diciamo che una matrice $A$ è combinazione lineare delle matrici $B_{1},\dots,B_{d} \in M_{(m,n)}(\mathbb{K})$ se esistono $x_{1},\dots,x_{d} \in \mathbb{K}$ tali che
>$$ A = x_{1}B_{1} + x_{2}B_{2} + \dots + x_{d}B_{d} $$

> [!esempio]
> A titolo di esempio la matrice $A =\begin{bmatrix}12 \\e\end{bmatrix}$ è combinazione lineare di $\begin{bmatrix}1\\0\end{bmatrix}$ e $\begin{bmatrix}0\\1\end{bmatrix}$ infatti:
> $$ A = 12\begin{bmatrix}
> 1 \\
> 0
> \end{bmatrix} + e\begin{bmatrix}
> 0 \\
> 1
> \end{bmatrix}$$

## Prodotto righe per colonne
$$ \begin{align}
\cdot : M_{(m,\color{lime}{n}\color{lightgrey})}(\mathbb{K}) \times M_{(\color{lime}{n}\color{lightgray},p)}(\mathbb{K}) &\to M_{(m,p)}(\mathbb{K}) \\
(A,B) &\mapsto A\cdot B
\end{align} $$
Se $A = [a_{ij}]$ e $B = [b_{jl}]$ con $1 \leq i \leq m, 1 \leq j \leq n, 1 \leq l \leq p$ allora avremo che 
$$ [A \cdot B]_{il} = \sum_{j = 1}^n a_{ij} \cdot b_{jl} $$

>[!tip]
>Il prodotto riga per colonna ci restituisce una matrice con un numero di righe uguale a quello della prima matrice ed un numero di colonne uguale a quello della seconda
>

### Esempi

>[!esempio] $(1 \times n) \cdot (n \times 1)$
>$A \in M_{(1,n)}(\mathbb{K})$ e $B \in M_{(n,1)}(\mathbb{K})$ allora
>$$A = \begin{bmatrix}a_{11} & a_{12} & \dots & a_{1n}\end{bmatrix} \quad B = \begin{bmatrix}b_{11}\\b_{21}\\\vdots \\ b_{n 1}\end{bmatrix}$$
>allora il prodotto riga per colonna sarà una matrice ($1\times1$):
>$$ [ a_{11}\cdot b_{11} + a_{21}\cdot b_{12} + \dots + a_{n1} \cdot a_{1 n} ]  $$
>
>Consideriamo il caso $n = 3$, prendiamo due matrici qualsiasi:
>$$ A = \begin{bmatrix}3 & 1 & 2\end{bmatrix} \qquad B= \begin{bmatrix}0\\2\\ \pi\end{bmatrix}$$
>Allora il prodotto $A \cdot B = [3\cdot 0 + 1 \cdot 2 +  2 \cdot \pi] = [3 + 2\pi]$

>[!esempio] $(m \times n) \cdot (n \times p)$
>
>$$A = \begin{bmatrix}
>1 & 2  & 1 \\
>0 & 1  & 0\\ 
\end{bmatrix}\qquad B = \begin{bmatrix}
>1 & 2 & 1 & 0 \\
>0 & 0  & 0 & 1\\
>1 & 4 & 1 & 3
\end{bmatrix}$$

avremo una matrice $(2\times4)$:
$$ A\cdot B = \begin{bmatrix}
1 \cdot 1+ 2\cdot 0 + 1 \cdot 1 & 1 \cdot 2 + 2 \cdot 0 + 2\cdot4 & 1\cdot 1 + 2 \cdot 0 + 1\cdot 1 & 1 \cdot 0 + 1\cdot1 + 1\cdot3 \\
0\cdot 1 + 0 \cdot 0 + 0 \cdot 1 & 0 \cdot2 + 1 \cdot 0 + 0 \cdot 4 & 0 \cdot 1 + 1 \cdot 0 + 0 \cdot 1 & 0 \cdot 0 +1\cdot1 + 0 \cdot 3
\end{bmatrix} =$$
$$ =\begin{bmatrix}
2 & 10 & 2 & 4 \\
0 & 0 & 0 & 1
\end{bmatrix} $$

>[!oss]
>Grazie a questoossiamo riscrivere un sistema lineare in forma matriciale. Dato il sistema lineare
>$$ \begin{cases}
>a_{11}x_{1} + a_{12}x_{2} + \dots + a_{1n}x_{n} = b_{1} \\
>a_{21}x_{1} + a_{22}x_{2} + \dots + a_{2n}x_{n} = b_{2} \\
>\vdots \\
>a_{m1}x_{1} + a_{m2}x_{2} + \dots + a_{mn}x_{n} = b_{m}
>\end{cases} $$
>Poniamo
>$$ A = \begin{bmatrix}
>a_{11} & a_{12} & \dots & a_{1n} \\
>a_{21} & a_{22} & \dots & a_{2n} \\
>\vdots & \vdots & \ddots & \vdots \\
>a_{m1} & a_{m2}  & \dots & a_{mn} 
>\end{bmatrix}\quad \mathbf{x} = \begin{bmatrix}
>x_{1} \\
>x_{2} \\
>\vdots \\
>x_{m}
>\end{bmatrix} \mathbf{b} = \begin{bmatrix}
>b_{1} \\
>b_{2} \\
>\vdots \\
>b_{m}
>\end{bmatrix} $$
>
>Allora possiamo scrivere il sistema come $A \cdot \mathbf{x} = \mathbf{b}$



