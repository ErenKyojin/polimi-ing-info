>[!teorema]
>Sia $(V,<,>)$ uno [[Spazi euclidei|spazio euclideo]] con $\dim(V) < +\infty$ e $\mathcal{L} : V \to V$ un endomorfismo simmetrico. Allora esiste una base ortonormale di $V$ formata da autovettori di $\mathcal{L}$. In particolare una matrice simmetrica reale è ortogonalmente diagonalizzabile
>
>>[!dim]
>
>>[!corollario]
>>Sia $A \in M_{\mathbb{R}(n,n)}$ simmetrica e $\lambda_{1},\dots,\lambda_{s} \in \mathbb{R}$ i suoi autovalori distinti. Sia
>> $$ V_{j} = \left\{ \mathbf{v} \in V: A\mathbf{v} = \lambda_{j}\mathbf{v} \right\} \forall j = 1,\dots,s  $$
>> e $\mathcal{B}_{j}$ una base ortonormale di $V_{j}$ allora:
>> 1. $\mathcal{B_{1}} \cup \dots \cup \mathcal{B_{s}}$ è base ortonormale di $V$
>> 2. $V_{1} + V_{2} + \dots + V_{s} = \mathbb{R}^n$
>> 3. $V_{j} \perp V_{i}$ se $i \neq j$ e $i,j = 1,\dots,s$

>[!oss]
>Data $A \in M_{\mathbb{R}(n,n)}$ simmetrica per determinare una base ortonormale di $\mathbb{R}^n$ autovettori di $A$ si puó procedere nel seguente modo:
>1. Determino gli autovalori di $A: \lambda_{1},\dots,\lambda_{s}$
>2. Determino le basi $\mathcal{B}_{1}',\dots,\mathcal{B}_{s}'$ degli autospazi associati a $\lambda_{1},\dots ,\lambda_{s}$
>3. Se serve, trasformo sfruttando l'[[Algoritmo di Gram-schmidt]] le basi $\mathcal{B}_{1}',\dots,\mathcal{B}_{s}'$ in basi ortonormali $\mathcal{B}_{1},\dots,\mathcal{B}_{s}$
>4. $\mathcal{B}_{1} \cup \dots \cup \mathcal{B}_{s}$ è la base ortonormale cercata


## Decomposizione spettrale

>[!corollario]
>Sia $A \in M_{\mathbb{R}(n,n)}$ simmetrica e siano $\lambda_{1},\dots,\lambda_{s}$ i suoi autovalori distinti. Sia $P_{j}$ la matrice della proiezione ortogonale sull'autospazio $V_{j}$ relativo a $\lambda_{j}$. Allora
>1. $A = \lambda_{1}P_{1} + \dots + \lambda_{s}P_{s}$
>2. $\mathbb{1}_{n} = P_{1} + \dots + P_{s}$
>3. Le matrici $P_{j}$ sono simmetriche, $P^2_{j} = P_{j}$ e $P_{i} \circ P_{j} = 0$ se $i \neq j$
>
>>[!dim]


>[!oss]
>1. L'insieme degli autovalori di $A$ si dice lo spettro di $A$ e la decomposizione  $A =\lambda_{1}P_{1} + \dots + \lambda_{s}P_{s}$ si dice **decomposizione spettrale** di $A$
>
>2. Dalla proprietà 3. del precedente corollario si ha che, per ogni $A \in M_{\mathbb{R}(n,n)}$ simmetrica e per ogni intero $m > 0$, $A^m = \lambda_{1}^mP_{1} +\dots + \lambda_{s}^m P_{s}$ 
>   
>  Se $A$ è invertibile (non ha autovalori nulli) allora vale anche:
>  $$ A^{-m} = \lambda_{1}^{-m}P_{1} +  \dots + \lambda_{s}^{-m}P_{s} $$
>  Per ogni funzione $f(x)$ definita sullo spettro di $A$ definiamo
>  $$ f(A) := f(\lambda_{1})P_{1} + \dots + f(\lambda_{s})P_{s} $$