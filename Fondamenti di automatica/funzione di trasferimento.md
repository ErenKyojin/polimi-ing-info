---
aliases: 
creation date: 2023-03-02 17:33
modification date: 2023-03-02 17:33
---
[[sistemi dinamici LTI]] TC [[SISO]]

$$
\begin{cases}
\dot{x} = Ax+bu \\
y = cx + du
\end{cases}\qquad \text{rappresentazione di stato}
$$
trasformiamo secondo [[Trasformata di Laplace|laplace]] l'equazione di stato
$$\begin{align}
\mathcal{L}[&\dot{x}(t)] &&= \mathcal{L}[ax(t) + bu(t)] \\
&\downarrow\text{prop deriv} &&\downarrow \text{linearità}\\
&sX(s) - x(0) &&= AX(s) + bU(s)
\end{align}$$
quindi
$$
(s\mathbb{1} - A)X(s) = x(0) + bU(s)
$$
$\mathbb{1}$ [[matrice]] identità di $A$