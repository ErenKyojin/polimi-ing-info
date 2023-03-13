---
aliases: 
creation date: 2023-03-13 10:48
modification date: 2023-03-13 10:48
---
Uno [[stato]] $\bar{x}$ so doce raggiungibile da zero se $\exists \bar{u}(t)$ tale che
$$\begin{rcases}

x(0) = 0 \\
u(t) - \bar{u}(t), t\geq 0
\end{rcases} \to x(\bar{t}) = \bar{x}, \bar{t} < \infty
$$
Un sistema si dice completamente raggiungibile se ogni stato è raggiungibile

>[!question]
>Cine deternubi se un sistema dinamico è o meno raggiungibile
>- Teorema di Cayley - Hamilton: Ogni matirce annulla il suo polinomio caratteristico
>$$\begin{align}
>&p(s) = \det(sI - A) = S^n + \beta_{1} s^{n-1} + \dots + \beta_{n} \\
>&p(A) = A^n + \beta_{1}a^{n-1} + \dots + \beta_{n}I = 0
>\end{align}$$
>
>Quindi possiamo dire che
>pepppe $$A^n =-\beta_{1}A^{n-1} - \beta_{2}A^{n-2} - \dots - \beta_{n}\mathbb{1}$$
>Di conseguenza, partenda da $x(0) = 0$ si avrà che:
> $$\begin{align}
>
> x(t) = \underbrace{ \int_{0}^t \!e^{A(t-\tau)} }_{ I + \frac{A(t-\tau + A^{2}(t-\tau)^2)}{2!} + \dots }u(\tau) \, \mathrm{d}\tau  \\
>= \int _{0}^t \!\sum_{l=0}^{n-1} \gamma_{l}(t-\tau) A^l \, \mathrm{d}x 
\end{align}
>$$


