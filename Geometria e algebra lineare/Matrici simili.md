>[!def]
>$A,B \in M_{\mathbb{K}}(n,n)$ si dice che $B$ è simile ad $A$ se esiste $P \in M_{\mathbb{K}(n,n)}$ invertibile tale che
> $$ B = P^{-1}AP $$

>[!oss]
>$A$ è [[Geometria e algebra lineare/diagonalizzabilità|diagonalizzabile]] se e solo se è simile ad una [[matrice]] diagonale

>[!oss]
>$B$ rappresenta la **stessa** [[Applicazioni lineari|applicazione lineare]] di $A$ rispetto ad una base diversa. $P$ è la matrice di cambio di base. Inoltre se $V$ è spazio vettoriale su $\mathbb{K}$, $\mathcal{L} : V \to V$ è endomorfismo, $\mathcal{B}$ e $\mathcal{C}$ basi su $V$ allora $M_{\mathcal{B}}^{\mathcal{B}}(\mathcal{L})$ è simile a $M_{\mathcal{C}}^{\mathcal{C}}(\mathcal{L})$.
>Infatti: $\underbrace{ M_{\mathcal{C}}^\mathcal{C}(\mathcal{L}) }_{ B } = \underbrace{ M_{\mathcal{C}}^{\mathcal{B}}(id_{V}) }_{ P^{-1} }\underbrace{ M_{\mathcal{B}}^\mathcal{B}(\mathcal{L}) }_{ A } \underbrace{ M_{\mathcal{B}}^\mathcal{B}(id_{V}) }_{ P }$

>[!proposizione]
>La similitudine è una [[Geometria e algebra lineare/relazione di equivalenza]] nell'[[insieme]] delle matrici $M_{\mathbb{K}}(n,n)$
>>[!dim]
>>- **Proprietà riflessiva**: ogni matrice $A \in M_{\mathbb{K}(n,n)}$ è simile a se stessa. Infatti
>> $$ A = (\mathbb{1}_{n})^{-1}A\mathbb{1}_{n} $$
>>- **Proprietà simmetrica**: se $B$ è simile ad $A$ allora $A$ è simile a $B$, infatti sia $S \in M_{\mathbb{K}(n,n)}$ invertibile tale che $B = S^{-1}AS$ allora:
>> $A = SBS^{-1}$ e posto $Q = S^{-1}$ allora $A = Q^{-1}BQ$
>> - **Proprietà transitiva**: Se $A$ è simile a $B$ e $B$ è simile a $C$ allora $A$ è simile a $C$. Infatti siano $P$ ed $S \in M_{\mathbb{K}(n,n)}$ invertibili tali che:
>>  $$ \begin{cases}
>> A = S^{-1}BS \\
>> B =P^{-1}CP 
>>\end{cases} \implies A = S^{-1}P^{-1}CPS = (PS)^-1 C (PS)$$
>>Ponendo $Q = PS$ abbiamo $A = Q^{-1}CQ$ e quindi $A$ è simile a $C$
>> $\CVD$ 

Abbiamo peró un problema, visto che due matrici simili rappresentano la stessa applicazione lineare rispetto a due basi diverse. Cosa altro hanno in comune?

>[!proposizione]
>Siano $A$ e $B$ in $M_{\mathbb{K}(n,n)}$ matrici simili, allora:
>1. le due matrici hanno lo stesso polinomio caratteristico, la stessa traccia, lo stesso [[determinante]] e gli stessi autovalori con la stessa molteplicità algebrica
>2. Le due matrici hanno lo stesso [[rango]]
>3. Le due matrici hanno gli stessi [[Autovalori e Autovettori|autovalori]] con la stessa molteplicità geometrica
>
>>[!dim]
>>Poichè $A$ è simile a $B$ esiste $P \in M_{\mathbb{K}(n,n)}$ invertibile tale che $B = P ^{-1}AP$. Dimostriamo
>>1. Si ha che $$\begin{align}
>>p_{B} (\lambda) = &\det(B - \lambda \mathbb{1}_{n}) = \det(P^{-1}AP - \lambda P^{-1}P) = \det(P^{-1}(A - \lambda \mathbb{1}_{n})P) = \\
>> \overset{\text{t di binet}}{=} &\cancel{ \det(P^{-1}) }\det(A - \lambda \mathbb{1}_{n})\cancel{ \det(P) } = \det(A - \lambda \mathbb{1}_{n}) = p_{A}(\lambda)\\
>>\end{align}$$
>>Poichè: $p_{A}(\lambda) = p_{B}(\lambda) = (-1)^{n-1}c_{1} = tr(A), \det(B) = c_{n} = \det(A)$
>>si ha: $tr(B) = (-1)^{n-1} = tr(A), \det(B) = c_{n} = \det(A)$ ed inoltre gli autovalori di $B$ contati con la loro [[molteplicità]] algebrica coincidono con gli autovalori di $A$.
>>
>>2. Poichè $A$ e $B$ rappresentano uno stesso endomorfismo $\mathcal{L} : \mathbb{K}^n \to \mathbb{K}^n$ rispetto a basi diverse, allora
>> $$ r(\mathcal{L}) = \dim(\Im(\mathcal{L})) = r(A) = r(B)$$
>> 3. Dalla relazione $B = P^{-1}AP$ ricaviamo $PB = AP$. Se $\mathbf{v}$ è autovettore di $B$ allora $P\mathbf{v}$ è autovettore di $A$. Infatti
>> $$ A(P\mathbf{v}) = (AP)\mathbf{v} = (PB)\mathbf{v} = P(B\mathbf{v}) = \lambda P\mathbf{v} $$
>> Viceversa dalla relazione $B = P ^{-1}AP$ ricaviamo $BP ^{-1}= P ^{-1}A$. Se $\mathbf{w}$ è autovettore di $A$ allora $P^{-1}\mathbf{w}$ è autovettore di $B$. Infatti
>>  $$ B(P^{-1}\mathbf{w}) = (BP ^{-1})\mathbf{w} = (P ^{-1} A)\mathbf{w} = P ^{-1}(A \mathbf{w}) = \lambda P ^{-1} \mathbf{w} $$
>>  Dunque se $V_{\lambda}$ e $V'_{\lambda}$ sono autospazi di $\lambda$ relativi ad $A$ e a $B$ rispettivamente, $$\begin{align}
>>\mathcal{L}_{p} : V'_{\lambda} &\to V_{\lambda} \\
>> \mathbf{v} &\mapsto P\mathbf{v}
>>\end{align}$$è isomorfismo. Quindi $m_{g}^B(\lambda) = \dim(V_{\lambda}') = m_{g}^A(\lambda)$
>> $\CVD$

>[!oss]
>Sia $A \in M_{\mathbb{K}(n,n)}$ se $\lambda$ è autovalore di $A$ allora $\lambda^m$ è autovalore di $A^m$. Infatti se $\lambda$ è un autovalore di $A$ allora esiste $\mathbf{v} \in \mathbb{K}^n$ e $\mathbf{v} \neq 0$ tale che $A \mathbf{v} = \lambda \mathbf{v}$. Si ha che $$A^m \mathbf{v} = A^{m-1}(A\mathbf{v})= \lambda A^{m-1}\mathbf{v} = \ldots = \lambda^m\mathbf{v} $$ 
>Se $A$ è invertibile e $\lambda$ è autovalore di $A$ allora $\lambda^{-1}$ è autovalore di $A^{-1}$. Infatti: $A\mathbf{v} = \lambda \mathbf{v} \implies A^{-1}(A\mathbf{v}) = A^{-1}(\lambda \mathbf{v}) \implies \mathbf{v}=\lambda A^{-1}\mathbf{v} \implies A^{-1}\mathbf{v} = \frac{1}{\lambda}\mathbf{v}$

>[!oss]
>Se $A \in M_{\mathbb{K}(n,n)}$ è invertibile allora $A^{-m} =( A ^{-1})^{m}$

>[!oss]
>$A$ è diagonalizzabile e $B$ è simile ad $A$ allora $B$ è diagonalizzabile. Infatti se $A$ è diagonalizzabile allora $A$ è simile a $\diag(\lambda_{1},\dots,\lambda_{n})$. Essendo $A$ simile a $B$, per la proprietà transitiva è simile a $B$ e quindi $B$ è diagonalizzabile. Inoltre se $A$ è diagonalizzabile e $B$ non è diagonalizzabile allora $A$ non puó essere simile a $B$ perchè altrimenti $B$ sarebbe diagonalizzabile
>

>[!proposizione]
>$A$ e $B$ in $M_{\mathbb{K}(n,n)}$ diagonalizzabili, allora $A$ e $B$ sono simili se e solo se hanno lo stesso polinomio caratteristico
>
>>[!dim]
>> $(\implies)$ già dimostrata
>> $(\impliedby)$ Se $A$ e $B$ hanno lo stesso polinomio caratteristico allora hanno logicamente anche gli stessi autovalori: $\lambda_{1},\dots,\lambda_{n}$ e quindi
>> $$ \begin{rcases}
>> A \text{ è simile a } \diag(\lambda_{1},\dots,\lambda_{n}) \\
>> B \text{ è simile a } \diag(\lambda_{1},\dots,\lambda_{n})
>>\end{rcases}  \implies A \text{ simile a }B$$
>>$\CVD$


>[!oss]
>In generale se due matrici hanno lo stesso polinomio caratteristico ma non sono diagonalizzabili allora non è detto che siano simili. Ad esempio:
> $$ A = \begin{bmatrix}
>1 & 0 \\
>0 & 1
>\end{bmatrix}, p_{a}(\lambda) = (\lambda-1)^2 \text{ e } B = \begin{bmatrix}
>1 & 1 \\
>0 & 1
\end{bmatrix}, p_{B}(\lambda) = (\lambda-1)^2$$
>ma $A$ non è simile a $B$ perchè $m_{g}^{A}(1) = 2 \neq 1 = m_{g}^B(1)$

>[!oss]
>In generale se $A$ e $B$ non sono diagonalizzabili non abbiamo dato condizione necessarie e sufficienti affinchè le due matrici siano simili. Tale problema viene affrontato e risolto dalla teoria di Jordan (non trattata qui). Tuttavia alcune matrici, dette blocchi di Jordan, sono introducibili e definite nel seguente modo:
>
>>[!def]
>>Una blocco di jordan è una matrice $m\times m$ in cui sulla diagonale principale troviamo un valore $\lambda \in \mathbb{K}$ e sulle diagonali sopra a quella principale troviamo il valore $1$, in tutte le altre posizioni il valore è $0$
>
>>[!esempio]
>> $$ J_{m}(\lambda) = \begin{bmatrix}
>>\lambda & 1 & 0 & \dots & 0 \\
>>0 & \lambda & 1 & \ddots &\vdots \\
>>\vdots & \overset{0}{\vdots} & \ddots & \ddots & 1 \\
>>0 & 0 & 0 & \dots & \lambda 
>>\end{bmatrix} $$
>>
>> $$ \begin{bmatrix}
>>2 & 1  \\
>> 0 & 2
>>\end{bmatrix},\begin{bmatrix}
>>3 & 1 & 0 \\
>>0 & 3 & 1 \\
>>0 & 0 & 3
>>\end{bmatrix}, \begin{bmatrix}
>>4 & 1 & 0 & 0 \\
>>0 & 4 & 1 & 0 \\
>>0 & 0 & 4 & 1 \\
>>0 & 0 & 0 & 4
>>\end{bmatrix}$$
>
>Per questo tipo di matrici $m_{a}(\lambda) = m$ e $m_{g}(\lambda)=1$. I blocchi di Jordan si possono comporre per costruire matrici che abbiano determinati autovalori con prescritte molteplicità algebriche e geometriche. Ad esempio, determinare una matrice $4\times4$ che abbia due come autovalore con $m_{a}(2)=4$ e $m_{g}(2)=3$
> $$\begin{bmatrix}
>\grc 2 &\grc 1 & 0 & 0 \\
>\grc 0 & \grc 2 & 0 & 0 \\
>0 & 0 &\grc 2 & 0 \\
>0 & 0 & 0 &\grc 2
>\end{bmatrix}$$
>Determinare una matrice che abbia come autovalori $2$ e $3$ tali che $m_{a}(2) = m_{a}(3) = 2$ e $m_{g}(2) = m_{g}(3) = 1$
> $$ \begin{array}{cc|cc}
>2 & 1 & 0 & 0 \\
0 & 2 & 0 & 0 \\
\hline 0 & 0 & 2 & 0 \\
0 & 0 & 0 & 2
>\end{array} $$

