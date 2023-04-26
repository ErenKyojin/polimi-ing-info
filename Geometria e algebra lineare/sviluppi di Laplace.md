Sia $A = [a_{ij}] \in M_{\mathbb{K}(n,n)}$ denotiamo con $A_{ij}$ la matrice ottenuta da $A$ eliminando la $i$-esima riga e la $j$-esima colonna. Il complemento algebrico di $a_{ij}$ è:
$$ C_{ij}  = (-1)^{i+j} \det(A_{ij})$$
>[!oss]
>Il segno da anteporre a $\det(A_{ij})$ è + se $i+j$ è pari e - se $i + j$ è dispari


>[!teorema]
>Sia $A \in M_{\mathbb{K}(n,n)}$
>Si ha che fissato un indice $i$ compreso tra $1$ e $n$ allora
> $$ \det(A) = \sum_{j=1}^n a_{ij}C_{ij}$$
> Che si dice sviluppo di Laplace del [[determinante]] di $A$ rispetto alla riga $i$. Inoltre fissato un indice $j$ compreso tra $1$ ed $n$, allora $\det(A) = \sum_{i=1}^n a_{ij}C_{ij}$
> Che si dice sviluppo di Laplace del determinante di $A$ rispetto alla colonna $j$


>[!esempio]
>$$A = \begin{bmatrix}
>a_{11} & a_{12} \\
>a_{21}  & a_{22}
>\end{bmatrix}  \in M_{\mathbb{K}}(2,2)$$
>Quindi 
> $$ C_{11} = (-1)^{1+1}a_{22}, C_{12} = (-1)^{1+2} a_{21}, C_{21} = (-1)^{2+1}a_{12}, C_{22} = (-1)^{2+2} a_{11}$$
> E infine
> $$\det(A) = a_{11}C_{11} + a_{12}C_{12} = a_{11}a_{22} - a_{12}a_{21}$$


## Regola di Sarrus
Per le [[matrice]] $3 \times 3$ vale la regola di Sarrus, per calcolarne il determinante riscriviamo la matrice $A$ aggiungendo le prime due colonne
$$ A =\begin{bmatrix} 
1 & 1 & 3 \\
2 & 1 & 1 \\
1 & 1 & 2
\end{bmatrix} $$
$\implies$
$$ \left[ 
\begin{array}{ccccc}
1\grc & 1\cellcolor{Orange}& 3 \cellcolor{Violet}& \color{red}1 & \color{red}1 \\
2 & 1 \grc& 1\cellcolor{Orange} & \cellcolor{Violet}\color{red}2 & \color{red}1 \\
1 & 1 & 2 \grc& \cellcolor{Orange}\color{red}1 & \cellcolor{Violet}\color{red}1 
\end{array} \right]  $$
Si sommano i prodotti dei termini sulle diagonali dall'alto al basso:
$$ S_{1} = (1 \cdot 1 \cdot 2) + (1 \cdot 1 \cdot1) + (3 \cdot 2 \cdot 1) = 2 + 1 + 6 = 9 $$
E poi si sommano i prodotti dei termini sulle diagonali dal basso all'alto

$$ \begin{bmatrix}
1 & 1 & \grc 3 & \orc\color{red} 1 & \vrc \color{red} 1 \\
2 & \grc 1 & \orc 2 & \vrc\color{red} 2 & \color{red} 1 \\
\grc1 & \orc 1 & \vrc2 & \color{red}1 & \color{red} 1
\end{bmatrix} $$
$$ S_{2} = (1 \cdot 1 \cdot 3) + (1 \cdot 1 \cdot 1) + (2 \cdot 2 \cdot 1) = 8 $$
Il determinante di $A$ sarà $S_{1} - S_{2} = 9 - 8 = 1$
