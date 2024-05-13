## a tempo continuo

$$
\begin{cases}
\dot{x} = Ax + bu \\
y = cx + du
\end{cases}
$$

$$
\begin{cases}
x(t) = e^{At} x(0) + \int _{0}^t e^{A(t-\gamma)}bu(\tau)\, d\tau \\
y(t) = c e^{At}x(0) + c \int_{0}^t e^{A(t-\gamma)}bu(\tau)  \, dx + du(t)  
\end{cases}
$$

dove $\int _{0}^t e^{A(t-y)} bu(\tau) \! \, \mathrm{d}x$ è un operatore lineare detto [[convoluzione]] e corrisponde a $e^{At} \ast bu(\tau)$ ossia una [[Matrice esponenziale]]