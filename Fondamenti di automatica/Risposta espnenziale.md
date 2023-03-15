---
aliases: 
creation date: 2023-03-15 11:18
modification date: 2023-03-15 11:18
---




SD LTI a TC [[SISO]]


> [!question] 
> Dato 
>  $$
> \begin{align}
> \dot{x} = Ax + bu \\
> y = cx + du
>\end{align}
>$$
>sottoposto all'ingresso $u(t) = e^{\lambda t}\quad t \geq 0$ ($e^{\lambda t} \sca(t)$)
>$\exists x(0)$ tale che il risultate movimento di $y(t)$ del tipo $Ye^{\lambda t}$ per $t \geq 0$ con $Y$ ampiezza
>
>In altri termini
>$x(0)$ ML di $y$ fatto da modi del sistema
>$u(t)$ MF di $y$ fatto da modi del sistema $+\ Ye^{\lambda y}$ con $t \geq 0$
>
>la domande è:
> $\exists x(0)$ tale che i due modi si elidano tra loro?


Rispondiamo:
1. Se voglio che $y$ sia soltanto $Ye^{\lambda t}$ allora anche $x(t)$ dovrà avere la forma $Xe^{\lambda t}$ in quanto $y(t) = Cx(t) + d\underbrace{ e^{\lambda t} }_{ u(t) }$, e qualunque cosa in $x(t)$ che non sia del tipo costante per $e^{\lambda t}$ si vedrebbe in $y(t)$