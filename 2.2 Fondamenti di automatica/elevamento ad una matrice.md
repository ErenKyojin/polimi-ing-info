Per elevare alla potenza di una matrice $A$ vediamo prima il caoso in cui sia diagonalizzabile.

>[!def]
>$$e^M := I + M + \frac{M^2}{2!} + \frac{M^3}{3!} + \dots$$ 
>
>Se $M$ è diagonalizzabile vuol dire che $\exists T^{-1} : T^{-1}MT = \text{diag}(\lambda _{i})=D \implies M = TDT^{-1}$. Quindi possiamo scrivere
>$$\begin{align}
>e^M &= TT^{-1} + \underbrace{ TDT^{-1} }_{ M } + \frac{\overbrace{TDT^{-1} TDT^{-1}}^{M^2}}{2!} + \dots =  \\
> &=T\left( I + D + \frac{D^2}{2!} + \frac{D^3}{3!} + \dots \right) T^{-1} = Te^DT^{-1}
>\end{align}$$
>Ma
> $$
> D = \begin{bmatrix}
>\lambda_{1} &  & 0 \\
> & \ddots &  \\
> &  &  \lambda_{n}
>\end{bmatrix} \implies D^k =\begin{bmatrix}
>\lambda_{1}^k &  &  \\
> & \ddots &  \\
> &  & \lambda^k_{n}
>\end{bmatrix} \implies e^D = \begin{bmatrix}
>e^{\lambda_{1}} &  &  \\
> & \ddots &  \\
> &  & e^{\lambda_{n}}
>\end{bmatrix}
>$$
>
>Allora con $A$ diagonalizzabile $D_{A} = m$ diagonalizzabile
> $$
>\begin{align}
>e^{At} &= e^{TD_{A}T^{-1}t} = T\left( It + D_{a}t + \frac{(D_{a}t)^2}{2!} + \frac{(D_{a}t)^3}{3!}\right)T^{-1} = \\
>&= T \begin{bmatrix}
>e^{\lambda_{1}t} &  & 0 \\
> & \ddots &  \\
> 0&  & e^{\lambda_{n}t}
>\end{bmatrix}
>\end{align}
>$$
>
>I termini $e^{\lambda_{i}t}$ si chiamano **modi** del seistema


>[!esempio]
>$\dot{x} = Ax$, $A = \begin{bmatrix}1 & 1\\4 & 1\end{bmatrix}$