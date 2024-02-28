---
id: "matrice"
aliases:
  - "Matrici"
  - "Nomenclatura"
tags: []
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
>Grazie a questo possiamo riscrivere un sistema lineare in forma matriciale. Dato il sistema lineare
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
>Allora possiamo scrivere il sistema come $A \cdot \mathbf{x} = \mathbf{b}$ dove con $\cdot$ si intende il prodotto righe per colonne

### Proprietà del prodotto righe per colonne

#### 1. Proprietà associativa
date $A \in M_{(m,n)}(\mathbb{K}), B \in M_{(n,p)}(\mathbb{K}), C \in M_{(p,z)}(\mathbb{K})$ allora $$(A \cdot B) \cdot C = A \cdot (B \cdot C)$$

#### 2. Proprietà distributiva
date $A \in M_{(m,n)}(\mathbb{K}), B\ e\ C \in M_{(n,p)}(\mathbb{K})$ allora
$$A \cdot ( B + C ) = A \cdot B + A \cdot C$$
Se $D \in M_{(p,r)}(\mathbb{K})$
$$ (B + C)\cdot D = B \cdot D + C \cdot D $$

#### 3. Omogeneità
$\forall t \in \mathbb{R}, \forall A \in M_{(m,n)}(\mathbb{K})$ e $\forall B \in M_{(n,p)}(\mathbb{\mathbb{K}})$ 
$$ t \cdot (A \cdot B) = (t \cdot A) \cdot B $$


>[!Oss] 4\. NON VALE LA PROPRIETÀ COMMUTATIVA
> 1. Se $A \in M_{(m,n)}(\mathbb{K})$ e $B\in M_{n,r}(\mathbb{K})$ 
> 	- $A \cdot B \in M_{(m,r)}(\mathbb{K})$ 
> 	- $B\cdot A$ non è definita
> 2. Se $A \in M_{(m,n)}(\mathbb{K})$ e $B \in M_{(n,m)}$
> 	- $A \cdot B \in M_{(m,m)}(\mathbb{K})$
> 	- $B \cdot A \in M_{(n,n)} (\mathbb{K})$
> 3. Se $A, B \in M_{(n,n)}(\mathbb{K})$
> 	- $A \cdot B \in M_{(n,n)}(\mathbb{K})$
> 	- $B \cdot A \in M(n,n)(\mathbb{K})$
> 	  
> 	 Ma in generale la matrice risultante sarà diversa

>[!oss] 5\. NON VALE LA LEGGE DI ANNULLAMENTO DEL PRODOTTO
>
>Quindi $A \cdot B = 0 \cancel{ \iff } A = 0 \lor B = 0$

#### 6. Elemento neutro
L'elemento neutro del prodotto riga per colonna è la [[matrice identità]], tuttavia:

>[!Oss]
>Data $A \in M_{(m,n)}(\mathbb{K})$ non esiste $A' \in M_{\mathbb{K}}(n,m)$ tale che $A \cdot A' = \mathbb{1}_{m}$

La 4 e la 5 valgono nel caso di matrici $1\times1$, inoltre qualsiasi matrice $1\times 1$ diversa da $[ 0]$ è invertibile

-----

![[Trasposizione]]

---

### Nomenclatura 2
#### Triangolare superiore
Una matrice $A = [a_{ij}] \in M_{(n,n)}(\mathbb{K})$ si dice **triangolare superiore** se $a_{ij}=0\ \forall\ i > j$.

Ad esempio $A = \begin{bmatrix}1 & 0 & 0 \\0 & 0 & -1\\0 & 0 & 2\end{bmatrix}$ è triangolare superiore.

#### Triangolare inferiore
Una matrice $A=[a_{ij}] \in M_{(n,n)}(\mathbb{K})$ si dice **triangolare inferiore** se $a_{ij} = 0\ \forall i < j$. 

Ad esempio $A = \begin{bmatrix}1 & 0 & 0 \\1 & 1 & 0\\1 & 0 & 2\end{bmatrix}$ è triangolare inferiore

#### Diagonale
Una matrice $A \in M_{(n,n)}(\mathbb{K})$ si dice **diagonale** se $a_{ij} = 0 \forall i \neq j$

Ad esempio $A = \begin{bmatrix}1 & 0 & 0\\0 & \pi & 0 \\0 & 0 & 2\end{bmatrix}$ è diagonale

#### Simmetrica
Una matrice $A \in M_{(n,n)}(\mathbb{K})$ si dice **simmetrica** se $A^T = A$. 

Ad esempio $A = \begin{bmatrix}1 & -1 & 2\\-1 & 3 & 0\\2 & 0 & 1\end{bmatrix}$ è una matrice simmetrica $3\times 3$

#### Antisimmetrica
Una matrice $A \in M_{\mathbb{K}}(n,n)$ si dice **antisimmetrica** se $A^T = -A$.

Ad esempio $A = \begin{bmatrix}0 & -1 & 2\\1 & 0 & 0\\-2  & 0 & 0\end{bmatrix}$

-----

![[pivot]]

>[!def]
>Data una matrice $A = [a_{ij}] \in M_{\mathbb{K}}(m,n)$, siano $A_{1},A_{2},\dots,A_{m}$ le sue righe. Si dice che $A$ è **a scala** se:
>1. se due righe $A_{i}$ e $A_{i+1}$ sono non nulle, il pivot di $A_{i+1}$ è a destra del pivot di $A_{i}$ 
>2. Se $A_{i} = 0$ anche $A_{i + 1} = 0$ 

>[!Oss]
>$A \in M_{(n,n)}(\mathbb{K})$ a scala $\implies$ $A$ è triangolare superiore, non vale però il viceversa.

Partendo da una matrice a scala è possibile risolvere il sistema "all'indietro", partendo dal fondo della matrice otteniamo il valore dell'ultima variabile, che possiamo usare per ottenere il valore della penultima e così via.

>[!esempio]
>$$ \begin{cases}
>x_{1} + x_{2} + x_{3} = 3 \\
>x_{2} - x_{3} = 1 \\
>2x_{3} = 4
>\end{cases} \text{ la matrice completa } \begin{bmatrix}
>1 & 1 & 1 & 3 \\
0 & 2 & -1 & -1 \\
0 & 0 & 2 & 4
\end{bmatrix}$$
>È una matrice a scala. A questo punto osserviamo che, partendo dal basso:
> $$ \begin{cases}
>x_{3} = 2 \\
>x_{2} = -1 + x_{3} = -1 + 2 = 1 \\
>x_{1} = 3 - x_{2} - x_{3} = 3 - 1 - 2 = 0 
>\end{cases} $$

Anche quando il sistema ha $\infty$ soluzioni si può usare questo metodo, risolvendo ovviamente tenendosi una (o più dipendentemente dal sistema) variabili dall'ultima equazione come parametro.

Ovviamente se ci fosse un modo per ridurre ogni matrice ad una matrice a scala potremmo risolvere qualsiasi matrice, a questo proposito si sfrutta il [[Metodo di eliminazione di Gauss]] 


```anki
id: 1695223921169
deck: GAL
---
# Matrici
===
Una matrice di tipo $(m,n)$ detta anche matrice $m \times n$ a elementi in $\mathbb{K}$ è una tabella di elementi di $\mathbb{K}$ con $m$ righe e $n$ colonne
$$ A = 
\begin{bmatrix}
a_{11} &a_{12}&...&a_{1n} \\
a_{21} &a_{22}&...&a_{2n} \\
\vdots &\vdots &\ddots &\vdots \\
a_{m1} &a_{m2}&... &a_{mn}

\end{bmatrix}$$
con $a_{ij} \in \mathbb{K}$ e $i$ e $j$ che indicano rispettivamente la riga e la colonna dell elemento.
Possiamo quindi scrivere $A = [a_{ij}]$

Possiamo indicare l'insieme delle matrici $m \times n$ con elementi di $\mathbb{K}$ come:
$$ M_{(m,n)}(\mathbb{K})\qquad o\qquad M_{\mathbb{K}}(m,n) $$.

Date due matrici $A=[a_{ij}]$ e $B=[b_{ij}]$ con $A,B \in M_{(m,n)}(\mathbb{K})$ diremo che $A = B$ se e solo se $a_{ij} = b_{ij} \forall i = 1,...,m \land \forall j = 1,...,n$
```
```anki
id: 1695223921944
deck: GAL
---
# Nomenclatura delle matrici
===
- Una matrice quadrata è una matrice qualsiasi del'insieme $M_{(n,n)}(\mathbb{K})$
- Una qualsiasi matrice dell'insieme $M_{(1,n)} (\mathbb{K})$ è detta vettore riga
- Una qualsiasi matrice dell'insieem $M_{(n,1)} (\mathbb{K})$ è detta vettore colonna

```
