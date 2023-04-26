>[!def]
>Sia $U \in M_{\mathbb{R}(n,n)}$ [[matrice]], $U$ si dice **ortogonale** se $U^TU = \mathbb{1}_{n}$

>[!esempio]
>$\mathbb{1}_{n}$ è ortogonale: $(\mathbb{1}_{n})^T(\mathbb{1}_{n}) = \mathbb{1}_{n}\mathbb{1}_{n} = \mathbb{1}_{n}$

>[!oss]
>1.
>Se $U$ e $V$ sono ortogonali allora $UV$ è ortogonale. Infatti:
> $$ (UV)^T UV = (V^TU^T)UV = V^T\underbrace{ (U^TU) }_{ \mathbb{1}_{n} } V = V^TV = \mathbb{1}_{n}$$
> 2. Se $U$ è ortogonale la sua [[Matrice inversa]] è $U^T$ ed è ortogonale. Se $U$ è ortogonale ($U^TU+\mathbb{1}_{n}$)
> 3. Se $U$ è ortogonale allore $\det (U) = \pm1$

>[!proposizione]
>Sia $U \in M_{\mathbb{R}}(n,n), U$ è ortogonale se e solo se le sue colonne formano una base ortonormale di $\mathbb{R}^n$ rispetto al prodotto scalare standard
>
>>[!dim]



>[!oss]
>Se cambio di posto gli elementi di una base ortonormale o gli moltiplico per $-1$ quello che ottengo è comunque una base ortonormale. Quindi se scambio due colonne di una matrice ortogonale o moltiplico una colonna per $-1$ determino un'altra matrice ortogonale


>[!esempio]
>Se $n = 2$ le matrici ortogonali sono:
> $$ u = \begin{bmatrix}
>\cos \theta & -\sin \theta \\
>\sin \theta & \cos \theta
>\end{bmatrix} \quad e \quad V = \begin{bmatrix}
>\cos \theta & \sin \theta \\
> \sin \theta & -\cos \theta
>\end{bmatrix} \text{ con } \theta \in [0, 2\pi]$$
>
>$U$ è la matrice di rotazione, $V$ la riflessione ortogonale che ha per asse la retta generata da $\begin{bmatrix}\cos\left( \frac{\theta}{2} \right) \\ \sin\left( \frac{\theta}{2} \right)\end{bmatrix}$

## Matrici ortogonalmente [[Geometria e algebra lineare/diagonalizzabilità|diagonalizzabili]]

>[!def]
>Sia $A \in M_{\mathbb{R},(n,n)}$ si dice che $A$ è ortogonalmente diagonalizzabile se esiste $U \in M_{\mathbb{R}(n,n)}$. Si dice che $A$ è ortogonalmente diagonalizzabile se esiste $U \in M_{\mathbb{R}(n,n)}$ ortogonale tale che $U^TAU = D$ ove $D$ è una [[Geometria e algebra lineare/diagonalizzabilità|matrice diagonale]] poichè $U^{-1} = U^{T}$ si ha che $U^TAU = U^{-1}AU$


>[!oss]
>Se $A$ è ortogonalmente diagonalizzabil allora $A$ è simmetrica. Infatti esiste $U \in M_{\mathbb{R}(n,n)}$ ortogonale tale che:
> $$ A = UDU^T \implies A^T = (UDU^T)^T = (U^T)^TD^TU^T = UDU^T = A $$
> è vero anche il viceversa, se $A$ è simmetrica allora è ortogonalmente diagonalizzabile. Dimostreremo tale implicazione nel [[teorema spettrale]]
>

>[!proposizione] Proposizione 1
>Sia $A \in M_{\mathbb{R}(n,n)}$ simmetrica allora $A$ ammette $n$ autovalori reali contati con la loro [[molteplicità]] algebrica

>[!proposizione] Proposizione 2
>Sia $A \in M_{\mathbb{R}(n,n)}$ simmetrica. Siano $\lambda$ e $\mu$ in $\mathbb{R}$ autovalori di $A$ e $\lambda \neq \mu$. Se $\mathbf{v}$ e $\mathbf{w}$ sono autovettori relativi a $\lambda$ e $\mu$ rispettivamente, allora $\mathbf{v} \perp \mathbf{w}$
>
>>[!dim]