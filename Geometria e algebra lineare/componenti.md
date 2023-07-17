---
aliases: coordinate
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

In un [[sistema di riferimento]] le componenti di un [[vettori|vettore]] sono gli [[scalare|scalari]] che descrivono il vettore rispetto alla base, sono anche dette coordinate e si identificano con una n-upla verticale:
$$ \begin{bmatrix}
x_{1} \\
x_{2} \\
\vdots \\
x_{n}
\end{bmatrix} $$

## Linearità delle componenti di un vettore
Fissata una base dello spazio $(\mathbf{u}_{1},\mathbf{u}_{2},\mathbf{u}_{3})$ la componente
$$ \begin{align}
x : V &\to \mathbb{R} \\
\mathbf{v} &\mapsto x(\mathbf{v})
\end{align} $$
è lineare:
1. $x(\mathbf{v}_{1} + \mathbf{v}_{2}) = x(\mathbf{v}_{1}) + x(\mathbf{v}_{2})\quad \forall \mathbf{v}_{1},\mathbf{v}_{2} \in V$
2. $x(t\mathbf{v}) = tx(\mathbf{v}) = tx(\mathbf{v})\quad \forall t \in \mathbb{R}, \forall \mathbf{v} \in V$
Analogamente per le componenti $y$ e $z$.

>[!dim]
>Dimostriamo la 1, la 2 è analoga:
>abbiamo che $\mathbf{v}_{1} = x_{1}\mathbf{u}_{1} + y\mathbf{u}_{2} + z_{1}\mathbf{u}_{3}$ e $\mathbf{v}_{2} = x_{2}\mathbf{u}_{1} + y_{2}\mathbf{u}_{2} + z_{2}\mathbf{u}_{3}$ allora
>$$ \begin{align}
>\mathbf{v}_{1} + \mathbf{v}_{2} &= (x_{1}\mathbf{u}_{1} + y_{1}\mathbf{u}_{2} + z_{1}\mathbf{u}_{3}) + (x_{2}\mathbf{u}_{1} + y_{2}\mathbf{u}_{2} + z_{2}\mathbf{u}_{3}) = \\
> &= (x_{1} + x_{2})\mathbf{u}_{1} + (y_{1} + y_{2})\mathbf{u}_{2} + (z_{1} + z_{2})\mathbf{u}_{3}
>\end{align}$$
>quindi $x(\mathbf{v}_{1} + \mathbf{v}_{2}) = x_{1} + x_{2} = x(\mathbf{v}_{1}) + x(\mathbf{v}_{2})$
>$\CVD$

