>[!teorema]
>Esiste un'unica funzinoe
> $$ \det : M_{\mathbb{K}}(n,n) \to \mathbb{K} $$
> Con le seguenti proprietà:
> 1. **Invarianza per scorimento**: se la [[matrice]] $B$ è ottenuta da $A$ sommando ad una riga il multiplo di un'altra riga: $\det(B)= \det(A)$
> 2. **Alternanza**: se $B$ è ottenuta da $A$ scambiando due righe allora $\det(B) = -\det(A)$
> 3. **Normalizzazione**: se $U$ è una matrice triangolare alta, $\det(U)$ è il prodotto di termini sulla diagonale principale

la notazione per questa funzione è la seguente:
$$ \det \left( \begin{bmatrix}
a_{11} & \dots & a_{1n} \\
\vdots & \ddots & \vdots \\
a_{n1} & \dots & a_{nn}
\end{bmatrix} \right) \quad\text{si indica con }\quad
\begin{vmatrix}
a_{11} & \dots & 1_{1n} \\
\vdots & \ddots & \vdots \\
a_{n 1} &\dots & a_{nn}
\end{vmatrix}$$

>[!oss]
>Il teorema  precedente fornisce un metodo per calcolare il determinante di una matrice quadrata. Sia $A \in M_{\mathbb{K}(n,n)}$ se $U$ è una ridotta a scala di $A$ e $t$ è il numero di scambi di righe utilizzati nel [[Metodo di eliminazione di Gauss]] per ridurre $A$ ad $U$ allora:
> $$ \det(A) = (-1)^t \det(U) $$
> dove $\det(U)$ è il prodotto di termini sulla diagonale.
#1d283b

>[!esempio]
>Calcolare il determinante di
> $$ \begin{bmatrix}
>0 & 1 & 2 \\
3 & 1 & 1 \\
1 & 2 & 3
>\end{bmatrix} $$
> $$ \begin{vmatrix}
>0 & 1 & 2 \\
>3 & 1 & 1 \\
>1 & 2 & 3
>\end{vmatrix} =  (-1) \begin{vmatrix}
>1 & 2 & 3 \\
>3 & 1 & 1 \\
>0 & 1 & 2
>\end{vmatrix} = (-1)\begin{vmatrix}
>1 & 2 & 3 \\
>0 & -5 & -8 \\
>0 & 1 & 2
>\end{vmatrix} = (-1)\begin{vmatrix}
>1 & 2 & 3 \\
>0 & -5 & -8 \\
>0 & 0 & 2 / 5
>\end{vmatrix} =$$
> $$ = (-1)(-5)\left( \frac{2}{5} \right) = 2 $$


>[!teorema]
>Sia $A \in M_{\mathbb{K}}(n,n)$ sono equivalenti le seguenti affermazioni:
>1. $r(A) = n$
>2. $\det(A) \neq 0$
>3. $A$ è [[Matrice inversa|invertibile]]
>   
>>[!dim]
>>Abbiamo già dimostrato l'implicazione tra 1 e 3 (e viceversa) nel file della [[Matrice inversa]]. Dimostriamo che $r(A) = n \iff \det(A) \neq 0$.
>>Sia $U$ una ridotta a scala di $A$. Allora $\det(A) = (-1)^t \det(U)$ si ha che: $\det(A) \neq 0 \iff \det(U) \iff$ gli elementi della diagonale principale di $U$ sono tutti non nulli $\iff r(A) = n$
>>$\CVD$

>[!oss]
>Per una matrice $A \in M_{\mathbb{K}}(n,n)$ se una riga è combinazione lineare delle altre righe allora $r(A)$ non è massimo e quindi $\det(A) = 0$. La stessa considerazione vale per le colonne. In particolare se una matrice ha due righe o due colonne uguali oppure ha una riga ed una colonna nulle allora il determinante è nullo

Un altro metodo per calcolare il determinante di una matrie sono gli [[sviluppi di Laplace]]



# Proprietà del determinante
Sia $A = [a_{ij}] \in M_{\mathbb{K}(n,n)}$ allora
1. $\det(A) = \det(A^T)$
2. Sia $B \in M_{\mathbb{K}(n,n)}$ allora $\det(A\cdot B) = \det(A)\det(B)$ (detto **teorema di binet**).
   In particolare se $A$ è [[Matrice inversa|invertibile]] si ha $1 = \det(\mathbb{1}_{n}) = \det(A^{-1}A)= \det(A^{-1})\det(A) \implies \det(A^{-1})=\frac{1}{\det(A)}$
3. Se la matrice $A'$ è ottenuta dalla matrice $A$ moltiplicando una colonna per $t \in \mathbb{K}$ allora $\det(A') = t \det(A)$, in particolare $\det(tA)=t^n \det(A)$ con $n$ numero di colonne
4. Se $A = \left[ \mathbf{v}_{1} |\dots | t\mathbf{u} + s\mathbf{w} | \dots | \mathbf{v}_{n}  \right]$ allora $$ |A| = t \bigg|\mathbf{v}_{1} |\dots |\mathbf{u} |\dots | \mathbf{v}_{m}\bigg| + s \bigg|\mathbf{v}_{1}|\dots|\mathbf{w}|\dots|\mathbf{v}_{m}\bigg|$$
   In particolare sse $A'$ è ottenuta da $A$ sommando ad una colonna i multipli di un altra colonna di $A$ si ha che $\det(A') = \det(A)$
   $$ \text{sia }A = \begin{bmatrix}
\mathbf{a}_{1}^T \\
\vdots \\
s\mathbf{u}^T + t\mathbf{u}^T \\
\vdots \\
\mathbf{a}_{n}^T
\end{bmatrix} \text{allora }|A| = s \begin{vmatrix}
\mathbf{a}_{1}^T \\
\vdots \\
\mathbf{u}^T \\
\vdots \\
\mathbf{a}_{n}
\end{vmatrix} + t \begin{vmatrix}
\mathbf{a}_{1}^T \\
\vdots \\
\mathbf{w}^T \\
\vdots \\
\mathbf{a}_{n}^T
\end{vmatrix}  $$
5. $$ \begin{rcases}
\sum_{j=1}^n a_{i'j}C_{ij} = 0\quad se\quad i \neq i' \\
\sum_{i=1}^n a_{ij'}C_{ij} = 0\quad se\quad j \neq j'
\end{rcases} C_{ij} \text{ complemento algebrico del termine } a_{ij}$$
Da questa proprietà, ricordando gli [[sviluppi di Laplace]], se $A \in M_{\mathbb{K}(n,n)}$ e $r(A)=n$ allora
 $$ A' = \frac{1}{\det(A)} \left(  \begin{bmatrix}
C_{11} & C_{12} & \dots & C_{1n} \\
\vdots  &  &  & \vdots\\
\vdots  &  &  & \vdots \\
C_{n1} & C_{n2} & \dots & C_{nn}
\end{bmatrix}\right)^T \qquad\text{ è l'inversa di $A$} $$
Infatti: $[A \cdot A']_{ii} = \frac{1}{\det(A)}\sum_{j=1}^n a_{ij}C_{ij} = \frac{1}{\det(A)}\cdot \det(A) = 1$
mentre $[A \cdot A']_{ii} = \frac{1}{\det(A)} \sum_{j=1}^n a_{ij}C_{i'j} = 0\quad se\ i \neq i'$

## Regola di cramer
Se $A \in M_{\mathbb{K}}(n,n)$ e $r(A) = n$ allora il sistema lineare $A\mathbf{x} = \mathbf{b}$ ammetet un'unica soluzione. Tale soluzione è
$$ \mathbf{x} = A^{-1}\mathbf{b} = \frac{1}{\det(A)}\begin{bmatrix}
c_{11} & c_{21} & \dots & c_{n1} \\
c_{12} & c_{22} & \dots & c_{n2} \\
\vdots & \vdots &  & \vdots \\
c_{1n} & c_{2n} & \dots & c_{nn}
\end{bmatrix} \begin{bmatrix}
b_{1} \\
\vdots \\
\vdots \\
b_{n}
\end{bmatrix} = \begin{bmatrix}
\det(A_{1} ) /\det(A) \\
\det(A_{2}) /\det(A) \\
\vdots \\
\det(A_{n})/\det(A)
\end{bmatrix}$$
dove $A_{i}$ è la matrice ottenuta da $A$ sostituendo la $i$-esima colonna con il vettore $\mathbf{b}$. Osserviamo che
$$ \det(A_{i}) = b_{1}C_{1i} + b_{2}C_{2i} + \dots +b_{n}C_{ni} $$
## Teorema di Kronecker
Data $A \in M_{\mathbb{K}(n,n)}$, una sottomatrice di $A$ si ottiene cancellando da $A$ un certo numero di righe e di colonne. Ad esempio
$$ A = \begin{bmatrix}
1 & 1 & 2 \\
2 & 1 & 1 \\
3 & -1 & 0
\end{bmatrix} $$
Cancellando se $A$ la prima riga e la seconda riga ottengo la sottomatrice
$$ A' = \begin{bmatrix}
3 & 1 & 0
\end{bmatrix} $$
Cancellando da $A$ la prima colonna e la prima e la terza riga ottengo la sottomatrice
$$ A'' = \begin{bmatrix}
1 & 1
\end{bmatrix} $$
Un minore ordine $p$ di una matrice $A$ è il determinante di una sottomatrice $p \times p$ di $A$. Ad esempio se
$$ A = \begin{bmatrix}
-1 & 0 & 1 & 3 \\
1 & 1 & 1 & -1 \\
2 & -1 & 4 & 5 \\
3 & 0 & 1 & 1
\end{bmatrix} $$
Un minore di ordine 2 è
$$ \det(A') = \begin{vmatrix}
1 & -1 \\
-1 & 5
\end{vmatrix}= 5 -1 = 4 $$Dove $A'$ è ottenuta da $A$ cancellando la prima e la quarta riga e la prima e la terza colonna

>[!teorema] Teorema di Kronecker
>Sia $A \in M_{\mathbb{K}(m,n)}$ allora:
>1. Se $A'$ è sottomatrice di $A$ e $\det(A')\neq {0}$ allora le colonne o le righe di $A$ che contengono le colonne o le righe di $A'$ sono [[Dipendenza e indipendenza lineare|linearmente indipendenti]] 
>2. Il rango della matrice $A$ è $r$ se e solo se esiste una sottomatrice $A'$ di tipo $r \times r$ t.c. $\det(A') \neq 0$ ed ogni altra sottomatrice del tipo $(r+1) \times (r+1)$ che contiene $A'$ ha determinante nullo

