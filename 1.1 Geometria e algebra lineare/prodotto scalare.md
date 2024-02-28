>[!def]
>$\mathbf{v} \cdot \mathbf{w} = \|\mathbf{v}\| \cdot \|\mathbf{w}\| \cos(\alpha)$ se $\mathbf{v} \neq \mathbf{0}$ e $\mathbf{w} \neq \mathbf{0}$
>Se $\mathbf{v} = \mathbf{0}$ o $\mathbf{w}=\mathbf{0}$ allora $\mathbf{v} \cdot \mathbf{w} = 0$ e si puó indicare con $<\mathbf{v},\mathbf{w}>$


>[!oss]
>Sia ${\mathbf{i},\mathbf{j},\mathbf{k}}$ una base ortonormale dello spazio. Se $\mathbf{v}$ ha coordinate $x,y,z \in \mathbb{R} ; \mathbf{v} = x \mathbf{i} + y \mathbf{j} + z \mathbf{k}$ allora:
> $$ x = \mathbf{v} \cdot\mathbf{i} , y = \mathbf{v} \cdot \mathbf{j} , z = \mathbf{v} \cdot\mathbf{k}$$


## Proprietà del prodotto scalare
È possibile dimostrare che valgono le seguenti proprietà per il prodotto scalare:
1. **Commutativa**: $\mathbf{v} \cdot \mathbf{w} = \mathbf{w} \cdot \mathbf{v}\quad \forall \mathbf{v},\mathbf{w} \in V$
2. **linearità del primo fattore** (e di conseguenza del secondo):
   $$ (\lambda_{1} \mathbf{v}_{1} + \lambda_{2}\mathbf{v}_{2} )\mathbf{w} = \lambda_{1}\mathbf{v}_{1}\mathbf{w} + \lambda_{2}\mathbf{v}_{2}\mathbf{w} \quad \forall\mathbf{v}_{1},\mathbf{v}_{2},\mathbf{w} \in V, \forall \lambda_{1}, \lambda_{2} \in \mathbb{R}$$
   
3. **Positività**: $\mathbf{v} \cdot \mathbf{v} = \|\mathbf{v}\| \cdot \|\mathbf{v}\| \cos(0) = \|\mathbf{v}\|^2 \geq 0$  e l'uguaglianza vale solo se $\mathbf{v} = \mathbf{0}$

>[!proposizione] Prodotto scalare in coordinate
>Sia $\left\{ \mathbf{i},\mathbf{j},\mathbf{k} \right\}$ una base ortonormale e siano $\mathbf{v}_{1},x_{1}\mathbf{i} + y_{1}\mathbf{j} + z_{1}\mathbf{k}$ e $\mathbf{v}_{2} = x_{2}\mathbf{i} + y_{2}\mathbf{j} + z_{2}\mathbf{k}$ due vettori allora $\mathbf{v}_{1} \cdot \mathbf{v}_{2} = x_{1} x_{2} + y_{1}y_{2} + z_{1}z_{2}$
>
>>[!dim]
>>$$\begin{align}
>>\mathbf{v}_{1} \cdot \mathbf{v}_{2} &= (x_{1}\mathbf{i} + y_{1}\mathbf{j} + z_{1}\mathbf{k}) \mathbf{v}_{2} = x_{1}(i\mathbf{v}_{2}) + y_{1}(j\mathbf{v}_{2})+z_{1}(k\mathbf{v}_{2}) \\
>> &= x_{1}x_{2} + y_{1}y_{2} + z_{1}z_{2}
>>\end{align}$$
>> $\CVD$


>[!oss]
>1. Con il prodotto scalare possiamo calcolare tutto quello introdotto fino ad ora:
> 	1. $\|\mathbf{v}\| = \sqrt{ \mathbf{v} \cdot \mathbf{v} }$
> 	2. $\cos(\alpha) = \frac{\mathbf{v} \cdot \mathbf{w}}{\|\mathbf{v}\|\|\mathbf{w}\|}$
> 	3. $\mathbf{v}_{\mathbf{w}} = \frac{\mathbf{v} \cdot \mathbf{w}}{\mathbf{w} \cdot \mathbf{w}}\mathbf{w}$
> 
> 2. Due vettori sono ortogonali se l'angolo da essi formato è $\pi /2$ e quindi il loro  prodotto scalare è nullo ($\mathbf{v} \perp \mathbf{w} \implies \mathbf{v} \cdot \mathbf{w} = 0$). Ad esempio, fissata nello spazio una base ortonormale, i vettori:
>  $\begin{bmatrix}1\\2\\3\end{bmatrix}$ e $\begin{bmatrix}2\\-1\\0\end{bmatrix}$ sono ortogonali, infatti: $\begin{bmatrix}1\\2\\3\end{bmatrix}\cdot \begin{bmatrix}2\\-1\\0\end{bmatrix} = 1 \cdot 2 + 2 \cdot(-1) + 3 \cdot 0 = 0$

