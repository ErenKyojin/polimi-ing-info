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
>Come determino se un sistema dinamico è o meno raggiungibile
>- Teorema di Cayley - Hamilton: Ogni matirce annulla il suo [[polinomio caratteristico]]
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
> x(t) &=  \int_{0}^t \!\fcolorbox{red}{}{$e^{A(t-\tau)}$} u(\tau) \, \mathrm{d}\tau  \\
>&= \int _{0}^t \!\sum_{l=0}^{n-1}U \gamma_{l}(t-\tau) A^l \, \mathrm{d}\tau =   \sum_{l=0}^{n-1}A^lb \int _{0}^t \!\gamma_{l}(t-\tau)u(t) \, \mathrm{d}\tau 
\end{align}
>$$
>
>con in rosso $= { I + \frac{A(t-\tau + A^{2}(t-\tau)^2)}{2!} + \dots }$
>
>Ovvero
> $$
>x(t) = \sum_{l=0}^{n-1}A^lb Z_{l}(t)
>$$
> o ancora
> $$
>x(t) = \begin{bmatrix}
>b & Ab & A^2b & \dots  & A^{n-1}b
>\end{bmatrix} \begin{bmatrix}
>Z_{0}(t) \\
>Z_{1}(t) \\
> \vdots \\
>{Z}_{n-1}(t)
>\end{bmatrix}
>$$
>(Essendo un sistema [[SISO]]) deve essere una matrice $n\times n$ per una [[matrice]] $n \times 1$
>
>
> $x(t) = M_{R}Z(t)$ con $Z(t)$ che contiene l'ingresso. 
> 
> 
> 
> 


 
Supponiamo di voler portare lo [[stato]] da $0$ a $\bar{x}$, perchè questo sia possibile deve esistere una certa $\bar{Z}$ tale che $M_{R}\bar{Z}(t) = \bar{x}$
Quindi dire che ciò è possibile qualunque sia $\bar{x}$ equivale a dire $M_{R}$ non è singolare, ovvero
$$
\text{Sistema } R \iff M_{R} \text{ non singolare}
$$


>[!esempio] Esempio 1
> $$
> \begin{cases}
> \dot{x}_{1} = - x_{1} + u \\
> \dot{x}_{2} = -x_{2} + i
>\end{cases}
>$$
>Evidentemente se $x(0) = 0$ si avrà $x_{1}(t) = x_{2}(t) \forall u(t)$
>$\implies \forall$ stato con $x_{1} \neq x_{2}$ non è raggiungibile
> ```tikz
>\begin{document}
>\begin{tikzpicture}
>\draw[->] (-2,0) -- (2,0) node[below]{$x_1$};
>\draw[->](0,-2) -- (0,2) node[left]{$x_{2}$};
>\draw[red, thick, ->] (-2,-2) -- (2,2);
>\draw[red, thick, ->] (2,2) -- (-2,-2);
;>\end{tikzpicture}
>\end{document}
>```
>Verifico col criterio
> $$
> A = \begin{bmatrix}
>-1 0 \\
>0 -1
>\end{bmatrix}\quad \begin{bmatrix}
> 
>\end{bmatrix}
>$$




