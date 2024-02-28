>[!def]
>dati due vettori $\mathbf{v},\mathbf{w}$ l'operazione prodotto vettoriale associa un vettore $\mathbf{v} \times \mathbf{w}$ tale che se $\mathbf{v}$ non è parallelo a $\mathbf{w}$ allora:
>1. $\|\mathbf{v} \times \mathbf{w}\| = \|\mathbf{v}\|\|\mathbf{w}\|\sin(\alpha)$
>2. $\mathbf{v} \times \mathbf{w} \perp \mathbf{v}$ e $\mathbf{v} \times \mathbf{w} \perp \mathbf{w}$
>3. $\left\{ \mathbf{v},\mathbf{w},\mathbf{v} \times \mathbf{w} \right\}$ è terna destrorsa.
>
>Se $\mathbf{v}$ e $\mathbf{w}$ sono paralleli allora $\mathbf{v} \times \mathbf{w} = \mathbf{0}$
>
> ```tikz
>\begin{document}
>\begin{tikzpicture}
>\filldraw[
>draw = green,
>fill = green!30,
>](-0.5,0.5,-0.5) (0,0,-3) -- (3,0,-3) -- (3,0,0) -- (0,0,0) -- (0,0,-3);
>\draw[->,very thick, ForestGreen] (0,0,0) -- (0,0,-3)node[left,black]{$\mathbf{w}$};
>\draw[->,red,thick] (0,0,0) -- (0,3,0) node[below left] {$\mathbf{v} \times \mathbf{w}$};
>\draw[->,very thick,ForestGreen] (0,0,0) -- (3,0,0)node[below,black]{$\mathbf{v}$};
>\node[green] at (4,2.7,3){$\|\mathbf{v} \times \mathbf{w}\|$};
>\end{tikzpicture}
>\end{document}
>```


## proprietà del prodotto vettoriale
1. **Proprietà anticommutativa**: $\mathbf{v} \times \mathbf{w} = -\mathbf{w} \times \mathbf{v}$
2. **Bilinearità**: $(t_{1}\mathbf{v}_{1} + t_{2}\mathbf{v}_{2})\times \mathbf{w} = t_{1}\mathbf{v}_{1} \times \mathbf{w} + t_{2}\mathbf{v}_{2}\times \mathbf{w}$
   $\mathbf{v} \times (t_{1}\mathbf{w}_{1} + t_{2}\mathbf{w}_{2}) = t_{1}\mathbf{v} \times \mathbf{w}_{1} + t_{2}\mathbf{v} \times \mathbf{w}\quad\forall t_{1},t_{2} \in \mathbb{R}$ e $\mathbf{w}_{1},\mathbf{w}_{2},\mathbf{v}_{1},\mathbf{v}_{2}$ 
3. **Annullamento**: $\mathbf{v} \times \mathbf{w} = 0$ se e solo se $\mathbf{v}$ e $\mathbf{w}$ sono parallelo


## Prodotto vettoriale in coordinate
Sia $\left\{ \mathbf{i},\mathbf{j},\mathbf{k} \right\}$ base autonormale e $\mathbf{v}_{1} = x_{1}\mathbf{i} + y_{1}\mathbf{j} + z_{1}\mathbf{k}$ e $v_{2}=x_{2}\mathbf{i} + y_{2}\mathbf{j} + z_{2}\mathbf{k}$ allora
$$ \mathbf{v}_{1} \times \mathbf{v}_{2} = \begin{vmatrix}
\mathbf{i} & x1 & x_{2} \\
\mathbf{j} & y_{1} & y_{2} \\
\mathbf{k} & z_{1} & z_{2}\end{vmatrix}  \begin{align}
&= \mathbf{i} \begin{vmatrix}
y_{1} & y_{2} \\
z_{1} & z_{2} 
\end{vmatrix} - \mathbf{j} \begin{vmatrix}
x_{1} & x_{2} \\
z_{1} & z_{2}
\end{vmatrix} + \mathbf{k} \begin{vmatrix}
x_{1} & x_{2} \\
y_{1} & y_{2}
\end{vmatrix} \\
&=(y_{1}z_{2} -z_{1}y_{2})\mathbf{i} - (x_{1}z_{2} - x_{2}z_{1})\mathbf{j} + (x_{1}y_{2} - y_{1}x_{2})\mathbf{k}
\end{align}$$
che è una diretta conseguenza delle proprietà del prodotto vettoriale

