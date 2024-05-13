---
aliases: 
creation date: 2024-05-07
---

# Soluzione movimento libero matrice $A$ diagonale
Poniamo quindi $u(t) = 0$
$\dot{x} = Ax \implies x(t) = e^{At}x_{0}, t_{0}=0$

Se $A$ è diagonale abbiamo che
$$\dot{x} = \begin{bmatrix}
a_{11} & 0 & \dots & 0 \\
0 & a_{22}  & \dots & 0 \\
\vdots &\dots &\ddots &\vdots \\
0 & \dots & \dots  & a_{nn}
\end{bmatrix} x$$
allora abbiamo che
$$ e^{At} = \begin{bmatrix}
e^{a_{11}t} &0  & \dots & 0 \\
0 & e^{a_{22}t}  &\dots & 0 \\
\vdots & \dots & \ddots & \vdots \\
0 & \dots & \dots & e^{a_{nn}t}
\end{bmatrix} \begin{bmatrix}
x_{1}(0) \\
\vdots \\
x_{n}(0)
\end{bmatrix} $$

# Soluzione movimento libero matrice $A$ triangolare superiore
$$ \dot{x} = \begin{bmatrix}
a_{11}  & a_{12}  & \dots & a_{1n} \\
0 & a_{22} &\dots &a_{2n} \\
\dots &\dots  & \vdots \\
0 & \dots &0  & a_{nn} 
\end{bmatrix} x $$

$\dot{x}_{n}$ indipendente da $\dot{x}_{1},\dots,\dot{x}_{n-1}$
$x_{n}(t) = e^{a_{nn} t} x_{n}(0)$ scalare
$\dot{x}_{n-1} = a_{n-1,n-1} x_{n-1} + a_{n-1,n} x_{n}$ dove $x_{n}$ è nota per il punto precedente ed è quindi un "ingresso virtuale"
$$ \dot{x}_{n-1}= a_{n-1} x_{n-1} + a_{n-1,n} \cdot u^v(t) $$
Diventa quindi un sistema forzato è possiamo quindi utilizzare la [[formula di lagrange]]

$$ x_{n-1} = e^{a_{n-1}t}x_{n-1}(0) +\int_{0}^t  \!e^{a_{n-1} (t-\tau) }a_{n-1,n} x_{n}(\tau) \, \mathrm{d}\tau $$

e si prosegue risolvendo all'indietro

## Soluzione movimento libero matrice $A$ diagonalizzabile
Abbiamo quindi $A \in M_{n,n}$ tale che $\dot{x} = Ax$ con autovalori $\lambda \in \mathbb{C}$ e $\mathbf{v} \in \mathbb{C}^n$ ed equazione caratteristica $\det(\lambda \mathbb{1} - A) = 0$.

Se ci sono $n$ autovettori $A$ è diagonalizzabile
$z = TX$
$$T^{-1} = \begin{bmatrix}
\mathbf{v}_{1} | \mathbf{v}_{2} | \dots | \mathbf{v}_{n}
\end{bmatrix}$$
$\dot{z} = TAT^{-1} z$, notiamo che $TAT^{-1}$ è diagonalizzabile a sua volta
$$\dot{z} = \begin{bmatrix}
\lambda_{1}  &  &  & 0 \\
 & \lambda_{2} &  \\  &  & \ddots\\

0 &  &  & \lambda_{n}
\end{bmatrix} \implies z(t) = \begin{bmatrix}
e^{\lambda_{1}t}z_{1}(0) \\
... \\
e^{\lambda_{n}t}z_{n}(0)
\end{bmatrix}$$


Abbiamo risolto in zeta, ora dobbiamo tornare alla base $x$
$x(t) = T^{-1}z(t)$, inoltre $z(t) = e^{\lambda t}z(0)$ (matrice della diagonale degli autovalori)
$x(t) = T^{-1}e^{diag(\lambda) t} T x(0)$
$x(t) = e^{At}x(0) x(0) \implies e^{At} = T^{-1}e^{diag(\lambda)t} T$