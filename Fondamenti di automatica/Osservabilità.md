---
aliases: osservabile, osservabili,
creation date: 2023-03-13 11:21
modification date: 2023-03-13 11:21
---
SD LTI a TC [[SISO]]


Uno [[stato]] $\bar{x}$ √® non osservabile se prendendo
$$
\begin{rcases}
x(0) = \bar{x} \\
u(t) = 0\quad t \geq 0
\end{rcases} \to y(t) = 0\qquad t  \geq 0
$$

Un sistema dinemico √® completamente osservabile (0) se nessuno stato √® non osservabile

# Criterio di osservabilit√†
$$
M_{0} = \begin{bmatrix}
c^T & Ac^T & A^2c^T  & \dots & A^{n-1}c^T 
\end{bmatrix}
$$

#todo cancellazione