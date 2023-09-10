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
>>##### $1 \implies 2 \implies 3 \implies 1$
>>###### $1 \implies 2$
>>$$ \lvert \lvert U \cdot \mathbf{x} \rvert  \rvert ^2 = \left< U \cdot \mathbf{x}, U \cdot \mathbf{x} \right> = (U \mathbf{x})^T \cdot U \mathbf{x} = \mathbf{x}^T \cdot U^T \cdot U \cdot \mathbf{x} = \mathbf{x}^T \frac{x.}{ = \left< \mathbf{x},\mathbf{x} \right> }$$
>>##### $2 \implies 3$ usiamo la formula di polarizzazione:
>> $$ \begin{align}
>>\left< U\mathbf{x},U\mathbf{y} \right> &= \frac{1}{2} (\lvert \lvert U\mathbf{x} -  U \mathbf{y}\rvert  \rvert^2 - \lvert \lvert  U\mathbf{x} \rvert  \rvert^2 - \lvert \lvert U\mathbf{y} \rvert  \rvert ^2  ) \\
>>&= \frac{1}{2} (\lvert \lvert U(\mathbf{x} - \mathbf{y}) \rvert  \rvert ^2 - \lvert \lvert  \mathbf{x} \rvert  \rvert ^2 - \lvert \lvert y \rvert  \rvert ^2) \\
> &=\frac{1}{2}(\lvert \lvert \mathbf{x} - \mathbf{y} \rvert  \rvert ^2 -\lvert \lvert \mathbf{x} \rvert  \rvert^2 -\lvert \lvert \mathbf{y} \rvert  \rvert ^2) = \left< \mathbf{x},\mathbf{y} \right> 
>>\end{align} $$
>>##### $3 \implies 1$ sia $\mathcal{E}_{n} = \{ \mathbf{e}_{1},\dots,\mathbf{e}_{n} \}$ la base canonica di $\mathbb{R}^n$
>>Allora $\left< \mathbf{e}_{i},\mathbf{e}_{j} \right> = \delta_{ij} = \begin{cases}1&se\ i = j\\0&se\ i \neq j\end{cases}$
>>Inoltre osserviamo che:
>>$$ \left< U\mathbf{e}_{i}, U\mathbf{e}_{j} \right> = (U \mathbf{e}_{i})^T (U\mathbf{e}_{j}) = \mathbf{e}_{i}^T U^T \cdot U \mathbf{e}_{j} = [U^TU]_{ij} $$
>>Quindi poichè $U$ preserva il prodotto scalare:
>>$$ \delta_{ij} = \left< \mathbf{e}_{i},\mathbf{e}_{j} \right> = \left< U\mathbf{e}_{i}, U\mathbf{e}_{j} \right> = [U^T \cdot U]_{}  $$
>
>>[!corollario]
>>Sia $U \in M_{\mathbb{R}}(n,n)$ ortogonale allora, se $\lambda$ è autovalore reale di $U, \lambda =1$ o $\lambda = -1$


