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
2. Quindi $x(t) = x(0)e^{\lambda t}$ (noi stiamo cercando $x(0)$). Di conseguenza $\dot{x}(t) = \lambda x(0)e^{\lambda t}$
3. Il movimento trovate $x(t) = x(0)e^{\lambda t}$ e la sua derivata devono ovviamente soddisfare l'equazione di stato, possiamo quindi sostituirli: $$\lambda x(0)e^{\lambda t} = Ax(0)e^{\lambda t} + be^{\lambda t} \qquad (e^{\lambda t} \neq 0)$$
   Otteniamo quindi: $$(\lambda \mathbb{1} - A)x(0) = b$$

Quindi in generale con $u(t) = \underbrace{ U }_{ \text{ampiezza} }e^{\lambda t}$ se $\lambda$ non è [[Autovalori e Autovettori|autovalore]] di $A$ allora $\exists! x(0) = (\lambda \mathbb{1} - A)^{-1}bU$
tale che $x(t) = x(0)e^{\lambda t} = (\lambda \mathbb{1} - A)^{-1}b U e^{\lambda t}$ e $y(t) = cx(t) + du(t) = [c(\lambda \mathbb{1}-A^{-1})b + d]Ue^{\lambda t} = G(\lambda )u(t)$ con $t \geq 0$


Riassumendo

1.
$$\begin{align}
&\begin{cases}
\dot{x} = Ax + bu \\
y = cx + du
\end{cases} \\
&u(t) = Ue^{\lambda t} \\
&\lambda \in \left\{ \text{aut di }A \right\} 
\end{align} \implies x_{0} = (\lambda \mathbb{1} -A)^{-1}bU \implies y(t) = G(\lambda)u(t)\quad t \geq 0
$$
2. Se $G(\lambda) =0 \implies$ con lo stesso $x(0)$ si ottiene $y(t) = 0\quad t \geq 0$
 proprietà bloccanti deglizeri
3. Se vale il punto 1 ed **inoltre** il sistema è asintoticamente stabile allora $$\forall x(0)\quad y(t) \to G(\lambda)u(t)\qquad t \to \infty$$