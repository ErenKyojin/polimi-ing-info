>[!def]
>Siano $V$ e $W$ [[spazio euclideo|spazi euclidei]]. Un'applicazione $\mathcal{L} : V \to W$ è una **isometria** se $$\|\mathcal{L}(\mathbf{v})-\mathcal{L}(\mathbf{w})\|_{W} = \|\mathbf{v} - \mathbf{w}\|_{V}$$
>Se $\mathcal{L}$ è lineare ed è una isometria diremo che $\mathcal{L}$ è una **isometria lineare**

>[!oss]
>$\mathcal{L} : V \to W$ lineare è un'isometria se e solo se $\|\mathcal{L}(\mathbf{v})\| = \|\mathbf{v}\|$ per ogni $\mathbf{v} \in V$

>[!esempio]
>Siano $V = W = \mathbb{R}^2$. Se $\mathcal{L}$ è una traslazione allora $\mathcal{L}$ è una isometria mentre se $\mathcal{L}$ è una rotazione allora $\mathcal{L}$ è una isometria lineare


>[!proposizione] Proposizione - [[Matrici ortogonali]] rappresentano isometrie lineari
> Sia $U \in M_{\mathbb{R}(n,n)}$ le seguenti condizioni sono equivalenti:
>  1. $U$ è ortogonale: $U^TU = \mathbb{1}_{n}$
>  2. $U$ preserva la norma euclidea: $\|U \mathbf{x}\| = \|\mathbf{x}\|$
>  3. $U$ preserva il prodotto scalare standard di $\mathbb{R}^n$
>    $$ <U\mathbf{x}, U\mathbf{y}> = <\mathbf{x},\mathbf{y}> \qquad \forall\mathbf{x},\mathbf{y} \in \mathbb{R}^n$$
> 
>>[!dim]
>>#todo
>>
>
>>[!corollario]
>>Sia $U \in M_{\mathbb{R}}(n,n)$ ortogonale allora, se $\lambda$ è autovalore reale di $U, \lambda =1$ o $\lambda = -1$


