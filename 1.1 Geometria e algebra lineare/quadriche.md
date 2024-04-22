>[!def]
>Una quadrica in $\mathbb{R}^n$ è il luogo dei punti di $\mathbb{R}^n$ che soddisfano un'equazione di secondo grado in $x_{1},\dots,x_{n}:$
> $$ q(\mathbf{x}) = \sum_{i=1}^n a_{ii}x_{i}^2 + \sum_{1 \leq i \leq j \leq n}2a_{ij}x_{i}x_{j}  + \sum_{i = 1}^n 2b_{i}x_{i} + c=0, a_{ij} \in \mathbb{R}$$
> e $a_{ij} \neq0$ per almeno una coppia di indici $i,j$
> Definiamo la matrice simmetrica $A \in M_{\mathbb{R}(n,n)}$ come $[A]_{ij} := a_{ij}$ se $i \leq j$ e $[A]_{ji} := [A]_{ij}$. Inoltre poniamo $\mathbf{b} = \begin{bmatrix}b_{1} & \dots & b_{n}\end{bmatrix}^T$. Con queste definizioni un'equazione di secondo grado puó essere definita in forma matriciale:
>  $$ q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x} + 2 \mathbf{b}^T \mathbf{x} + c = 0 $$

>[!oss]
>Le quadratiche in $\mathbb{R}^2$ sono dette coniche


>[!oss]
>Per studiare le forme quadratiche abbiamo considerato cambiamenti di coordinate lineari del tipo $\mathbf{x} = S\mathbf{y}$ ove $S \in M_{\mathbb{R}(n,n)}$ invertibile e $\mathbf{v} \in \mathbb{R}^n$ tali che: $F(\mathbf{y})=S\mathbf{y}+\mathbf{v}$. Un cambiamento di coordinate affine si dice rototraslazione se $S$ è una [[matrice ortogonale]] ed il suo determinante è 1

>[!oss]
>Nel caso $n=3$, le  matrici ortogonali con determinante uguale ad $1$ sono rotazioni, inoltre:
>1. La matrice identica è un'affinità (e una rotottraslazione)
>2. La composizione di due affinità (o di due rototraslazioni) è ancora un'affinità (o una rototraslazione)
>3. Ogni affinità (o rototraslazione) ammette un'affinità (o rototraslazione) inversa. Se $F(\mathbf{y})= S\mathbf{y} + \mathbf{v}$ allora $F^{-1}(\mathbf{x}) =S^{-1}\mathbf{x} - S^{-1}\mathbf{v}$ è l'inversa di $F$ infatti:
>$$ F(F^{-1}(\mathbf{x})) = S (S^{-1}\mathbf{x}-S^{-1}\mathbf{v}) + \mathbf{v} = SS^{-1}\mathbf{x} - SS^{-1}\mathbf{v} + \mathbf{v} = \mathbf{x} - \mathbf{v} + \mathbf{v} = \mathbf{x} $$


>[!oss]
>Le rototraslazioni sono delle isometrie:
> $$ \|F(\mathbf{x}_{1})-F(\mathbf{x}_{2})\| = \|S\mathbf{x}_{1} + \mathbf{v} -S\mathbf{x}_{2} - \mathbf{v}\| = \|S(\mathbf{x}_{1} - \mathbf{x}_{2})\| = \|\mathbf{x}_{1} - \mathbf{x}_{2}\|$$


Come trasformiamo un polinomio di secondo grado componendolo con una rototraslazione?

>[!proposizione]
>Dato un polinomio di secondo grado in $n$-variabili $x_{1},\dots,x_{n}: q(\mathbf{x}) = \mathbf{x}^TA\mathbf{x} + 2\mathbf{b}^T\mathbf{x} + c$
>ed una rototraslazione : $F(\mathbf{y})=Q\mathbf{y} + \mathbf{v}$ allora
> $$ \hat{q}(\mathbf{y}) = q(Q\mathbf{y} + \mathbf{v}) = \mathbf{y}^T\hat{A}\mathbf{y} + 2\hat{b}^T\mathbf{y} + \hat{c} $$
> Dove $\hat{A}=Q^TAQ, \hat{b} = Q^TA\mathbf{v} +Q^T\mathbf{b}$ e $\hat{c} = \mathbf{v}^T A \mathbf{v} + 2\mathbf{b}^T\mathbf{v} + c$
> 
>>[!dim]


>[!oss]
>C'è un modo ancora piú compatto per scrivere un polinomio di secondo grado: $q(\mathbf{x}) = \mathbf{x}^TA\mathbf{x} + 2\mathbf{b}^T\mathbf{x}+c$
>Definiamo $B = \begin{bmatrix}A & \mathbf{b}\\\mathbf{b}^t & c\end{bmatrix}$ simmetrica di ordine $n+1$ allora
> $$ q(\mathbf{x}) = \begin{bmatrix}\mathbf{x}^T & 1\end{bmatrix} B \begin{bmatrix}\mathbf{x}\\1\end{bmatrix} $$


>[!oss]
>Le rotazioni in $\mathbb{R}^3$ attorno agli assi coordinati sono:
> $$ 
> \text{asse }z:\begin{bmatrix} 
>\cos \theta & -\sin \theta & 0 \\
>\sin \theta & \cos \theta & 0 \\
>0 & 0 & 1 
>\end{bmatrix}\qquad \text{asse }y \begin{bmatrix}
>\cos \theta & 0 & -\sin \theta \\
>0 & 1 & 0 \\
>\sin \theta & 0 & \cos \theta
>\end{bmatrix}
> $$
> $$\text{asse }x \begin{bmatrix}
>1 & 0 & 0 \\
0 & \cos \theta & -\sin \theta \\
>0 & \sin \theta & \cos \theta
>\end{bmatrix} $$

# classificazione metrica di una quadrica
#cheatsheet
Classificare metricamente una quadrica significa determinare la sua equazione in [[Forma canonica di un polinomio|forma canonica]], 
Data $\mathcal{2} = \left\{ \mathbf{x} \in \mathbb{R}^n : \mathbf{x}^TA\mathbf{x} + 2\mathbf{b}^T\mathbf{x} + c= 0 \right\}$ si procede nel seguente modo
* Si stabilisce se la quadrica è a centro o meno ( $r(A) = r([A|-\mathbf{b}])$ )
	* Se $r(A) = r([A|-\mathbf{b}])$ si trovano gli autovalori non nulli di $A$ e si calcola $\hat{c} = \mathbf{b}^T = \mathbf{w} +c$ con $\mathbf{w}$ soluzione di $A\mathbf{x} = -\mathbf{b}$. L'equazione è: $\lambda_{1}x_{1}^2 + \dots + \lambda_{r}x_{r}^2 + \hat{c} = 0$
	* Se $r(A) < r([A|-\mathbf{b}])$ si trovano gli autovalori non nulli di $A$ e si calcola $p = \|\mathbf{b}_{H^\perp}\|$ dove $\mathbf{b}_{H^\perp}$ è la proiezione ortogonale di $\mathbf{b}$ sul $\ker(A)$. L'equazione è: $$\lambda_{1}x_{1}^2 + \dots + \lambda_{r}x_{r}^2 - 2px_{r+1} = 0$$

>[!def]
>Una quadrica si dice degenere se $\det(B) =0$

>[!oss]
>Se la quadrica è non degenere e a centro si ha che
> $$ \hat{c} = \frac{\det(B)}{\det(A)} $$ 
> Se la quadrica è non degenere e non a centro si ha che $p^2 = -\dfrac{\det(B)}{\lambda_{1}\cdot\ldots \cdot \lambda_{r}}$ con $\lambda_{1},\dots,\lambda_{r}$ autovettori non nulli di $A$


# classificazione affine di una quadrica
Attraverso un ulteriore cambio di coordinate possiamo semplificare la [[Forma canonica di un polinomio|forma canonica]] di un'equazione di secondo grado per ottenere il tipo affine. Di seguito la riduzione per ciascun caso. Per comodità introduciamo la funzione 
$$ sgn(x) : \begin{cases}
-1\quad &se\ x<0 \\
0\quad &se\ x = 0 \\
1\quad& se\ x > 0
\end{cases} $$
1. $r(A) = r([A|-\mathbf{b}])$ e $\hat{c}=0$.
   - forma canonica $\lambda_{1}y_{1}^2 + \dots + \lambda_{2}y_{r}^2=0$
   - cambio di coordinate: $$\mathbf{y} = \left[  \sqrt{ \frac{1}{|\lambda_{1}|} }\hat{y}_{1},\dots,\sqrt{ \frac{1}{|\lambda_{r}|} }\hat{y}_{r}, \hat{y}_{r+1}, \dots, \hat{y}_{n}\right] \implies \lambda_{1}\left( \frac{\hat{y}_{1}}{\sqrt{ |\lambda_{1}| }} \right)^2 + \dots + \lambda_{r}\left( \frac{\hat{y}_{r}}{\sqrt{ |\lambda_{r}| }}\right) = 0$$
   - tipo affine: $sgn(\lambda_{1})\hat{y}_{1}^2 + \dots + sgn(\lambda_{r})\hat{y}_{r}^2 = 0$
2. $r(A) = r([A|-\mathbf{b}])$ e $\hat{c} \neq 0$
	- forma canonica: $\lambda_{1}y_{1}^2 + \dots + \lambda_{r}y_{r}^2 + \hat{c} = 0$, divido per $\hat{c}$:
	  $$ \frac{\lambda_{1}}{|\hat{c}|} y_{1}^2 + \dots +\frac{\lambda_{r}}{|\hat{c}|} = 0 $$
	- cambio di coordinate: $$ \mathbf{y} = \left[ \sqrt{ \frac{|\hat{c}|}{|\lambda_{1}|}\hat{y}_{1}, \dots, \sqrt{ \frac{|\hat{c}|}{|\lambda_{r}|} }\hat{y}_{r}, \hat{y}_{r+1}+ \dots + \hat{y}_{n} } \right]  $$
	 - Tipo affine: $sgn(\lambda_{1})\hat{y}_{1}^2 + \dots +sgn(\lambda_{r})\hat{y}_{r}^2 + sgn(\hat{c}) = 0$
3. $r(A) < r([A|-\mathbf{b}])$
	 - forma canonica: $\lambda_{1}y_{1}^2 + \dots + \lambda_{r}y_{r}^2 - 2py_{r+1} = 0$ con $p > 0$
	 - cambio di coordinate: $\mathbf{y} = \left[ \sqrt{ \frac{2p}{|\lambda_{1}|} }\hat{y}_{1},\dots,\sqrt{ \frac{2p}{|\lambda r|} }\hat{y}_{r}, \hat{y}_{r+1},\dots,\lambda_{n} \right]$ 
	 - Tipo affine: $sgn(\lambda_{1})\hat{y}_{1}^2 + \dots + sgn(\lambda_{2})\hat{y}_{r}^2 - \hat{y}_{r+1} =0$


>[!oss]
>Per determinare il tipo affine è sufficiente determinare:
> $$ r(A), r([A|-\mathbf{b}]), \sigma(A) \text{ segnatura di }A \text{ e il segno di $\hat{c}$ nel caso di ranghi uguali} $$ 
> Moltiplicando per $-1$ l'equazione descrive la stessa quadrica. Quindi ad ogni tipo affine rimangono associate due coppie di segnature e di segni di $\hat{c}$


## piani di simmetria per una quadrica in $\mathbb{R}^3$
Analizzando la forma canonica di una quadrica a centro a punti reali $\lambda_{1}\hat{x}^2 + \lambda_{2}\hat{y}^2 + \lambda_{3}\hat{z}^2 + \hat{c} = 0$. Osserviamo che i piani $\Pi_{\hat{y}\hat{z}}: \hat{x} = 0, \Pi_{\hat{x}\hat{z}}: \hat{y} =0, \Pi_{\hat{x}\hat{y}} : \hat{z} = 0$ sono i piani di simmetria. Nelle coordinate iniziali tali piani passano per il centro e sono ortogonali agli autovettori di $A$. Analizzando la forma canonica di una quadrica non a centro e non degenere a punti reali: $\lambda_{1}\hat{x}^2 + \lambda_{2}\hat{y}^2 - 2p\hat{z} = 0$, osserviamo che i piani $\Pi_{\hat{y}\hat{z}} : \hat{x} = 0$ e $\Pi_{\hat{x}\hat{z}}:\hat{\mathbf{y}} =0$ sono piani di simmetria per la quadrica. Nelle coordinate iniziali tali piani contengono l'asse di simmetria ed in particolare il vertice e sono ortogonali algi autovettori relativi agli autovalori non nulli.

Nel caso del cilindo ellittico e del cilindo iperbolico
$$ \lambda_{1}\hat{x}^2 + \lambda_{2}\hat{y}^2 + \hat{c} = 0 $$
l'asse $z$ è formata da centri di simmetria ed i piani $\hat{z} = k$ sono piani di simmetria. Nelle coordinate iniziali tali piani passano per un centro di simmetria e sono ortogonali alla direzione data dal $\ker(A)$

Nel caso del cilindo parabolico:
$$ \lambda_{1}\hat{x}^2 - 2p\hat{z} = 0 $$
Il piano $\Pi_{\hat{y}\hat{z}} : \hat{x} =0$ è di simmetria e, nelle coordinate iniziali, corrisponde al piano : $a\mathbf{x} = - \mathbf{b}_{ker(A)^\perp}$ Inoltre anche i piani $\hat{y}=k$ sono di simmetria. Tali piani corrispondono nelle coordinate iniziali al fascio di piani ortogonale ai vettori del $\ker(A)$ che sono ortogonali alla proiezione ortognale di $\mathbf{b}$ sul $\ker(A)$

## Invarianti ortogonali per una conica
Data una conica in $\mathbb{R}^2$
$$ \mathcal{2} = \left\{ [x\quad y] \in \mathbb{R}^2 : q(x,y) =[x\quad y] A \begin{bmatrix}x\\y\end{bmatrix} + 2\mathbf{b}^T \begin{bmatrix}x\\y \end{bmatrix} + c =0\right\}  $$
Dove $A = \begin{bmatrix}a_{11} &a_{12}\\a_{21} & a_{11} \end{bmatrix} \in M_{\mathbb{R}(n,n)}$ simmetrica, $\mathbf{b} = \begin{bmatrix}b_{1}\\b_{2}\end{bmatrix} \in \mathbb{R}^2$ e $c \in \mathbb{R}$ $\implies B = \begin{bmatrix}A & \mathbf{b} \\\mathbf{b}^T & c\end{bmatrix}$.
Consideriamo una rototraslazione $\mathbf{x} = Q\mathbf{\hat{x}}+\mathbf{v}$ dove $Q \in M_{\mathbb{R}(n,n)}$ ortogonale e $\det (Q)=1$ e $\mathbf{v} \in \mathbb{R}^2$. Sia $\mathcal{\hat{2}}$ la conica ottenuta ruotando $\mathcal{2}$ secondo la matrica $Q$ e traslandola secondo $\mathbf{v}$ allora $\mathcal{\hat{2}}$ avrà l'equazione:
$$ \hat{q} (\hat{x},\hat{y}) = q(Q\hat{\mathbf{x}} + \mathbf{v}) = \hat{x}^T\hat{A}\hat{x} + 2\mathbf{\hat{b}}^T \mathbf{\hat{x}} + \hat{c} = 0 $$
$A$ e $\hat{A}$ sono [[Matrici simili]] ed hanno lo stesso polinomio caratteristico. Se $\lambda_{1}$ e $\lambda_{2}$ sono gli autovalori di $A$ e $\hat{A}$ allora 
$$ p_{A}(\lambda) = p_{\hat{A}}(\lambda) = (\lambda_{1}-\lambda) (\lambda_{2}-\lambda) \cdot \lambda^2-(\lambda_{1}+\lambda_{2})\lambda + \lambda_{1}\lambda_{2} $$
Definiamo: #cheatsheet 
1. $I_{1} = tr(A) = tr(\hat{A}) = \lambda_{1}+\lambda_{2}$ invariante lineare
2. $I_{2} = \det(A) = \det(\hat{A}) = \lambda_{1}\lambda_{2}$ invariante quadratico
3. $I_{3}= \det(B) = \det(\hat{B})$ invariante cubico

>[!oss]
>Se moltiplichiamo per una costante $k$ l'equazione di una conica $I_{1}$ viene moltiplicato per $K,I_{2}$ viene moltiplicato per $k^2$ e $I_{3}$ viene moltiplicato per $k^3$



### classificazione di una conica con gli invarianti ortogonali
Siano $\lambda_{1}$ e $\lambda_{2}$ gli autovalori di $A$
1. $r(A) = r(B) = r$
	- Se $I_{3} = I_{2} = 0$ allora $r = 1$ e il tipo affine $\hat{x}^2 = 0$ (retta doppia), forma canonica $\hat{x}^2 = 0$
	- Se $I_{3}=0$ e $I_{2} \neq 0$ allora $r = 2$. Se $I_{2} \geq 0$ il tipo affine è $\hat{x}^2 + \hat{y}^2 = 0$ (coppia di rette incidenti immaginarie), se $I_{2} <0$ il tipo affine è  $\hat{x}^2 - \hat{y}^2=0$ (coppia di rette incidenti reali). Forma canonica: $\lambda_{1}\hat{x}^2 + \lambda_{2}\hat{y}^2 = 0$ 
2. $r(B) = r(A) + 1$
	- Se $I_{3} = I_{2} = 0$  ($r(A)=1$ e $r(B)-2$  il tipo affine è $\hat{x}^2 \pm 1 = 0$. Forma canonica $\lambda_{1}\hat{x}^2 + \hat{c}$
	- Se $I_{3} \neq 0$ e $I_{2} \neq 0 (r(A) = 2\text{ e }r(B)=3)$ allora
		  - Se $I_{2} < 0$ il tipo affine è: $\hat{x}^2 - \hat{y}^2 - 1 =0$ (iperbole)
		  - Se $I_{2} > 0$ e $ $
3. #TODO 

## invarianti ortogonali per una quadrica in $\mathbb{R}^3$
Sia $\mathcal{2} = \left\{ \begin{bmatrix}x & y & z\end{bmatrix}^T \in \mathbb{R}^3 : q(x,y,z) = \begin{bmatrix}x & y & z\end{bmatrix} A \begin{bmatrix}x\\y\\z\end{bmatrix} + 2\mathbf{b}^T \begin{bmatrix}x\\y\\z \end{bmatrix} + c = 0\right\}$
Una quadrica in $\mathbb{R}^3$ ove $A = \begin{bmatrix}a_{11} & a_{12} & a_{13}\\a_{21} & a_{22} & a_{23}\\a_{31} & a_{32} & a_{33}\end{bmatrix} \in M_{\mathbb{R}(n,n)}$ è simmetrica, $\mathbf{b} = \begin{bmatrix}b_{1}\\b_{2}\\b_{3}\end{bmatrix} \in \mathbb{R}^3$  e $c \in \mathbb{R}$. 