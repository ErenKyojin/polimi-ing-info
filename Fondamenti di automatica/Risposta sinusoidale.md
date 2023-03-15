---
aliases: 
creation date: 2023-03-15 11:52
modification date: 2023-03-15 11:52
---
SD LTI a TC [[SISO]]



> [!question] Domanda
> Dato
>  $$
>\begin{cases}
>\dot{x} = Ax + b \\
>y = cx + du
>\end{cases}$$
>Sottoposto a $u(t) = U\sin(\omega t)\quad t \geq 0$
>$\exists x(0)$ tale che
> $$
>y(t) = Y \sin(\omega t + \varphi)\quad t \geq 0
>$$
>?


Per rispondere ricordiamo che:
$$\sin(\omega t) = \frac{e^{j\omega t}-e^{-j\omega t}}{2j}$$
E che, data la linearità del sistema de il [[principio di sovrapposizione|PSE]].
Quindi applichiamo due volte il risultato ottenuto per $y(t) = Ue^{\lambda t}$ e cambiamo i risultati/
Poniamo
$$
\begin{align}
u_{1}(t) = e^{j\omega t} \\
u_{2}(t) = e^{-j\omega t}
\end{align} \implies u(t) = \frac{u}{2j} (u_{1}(t)-u_{2}(t))
$$
- $u_{1}$: se $j\omega$ non è autovalore di $A$ allora:
$$
\begin{align}
\exists ! x(0) : \text{l'uscita ottenuta è } y_{1} (t) = G(j \omega) e^{j \omega t}
\end{align}
$$

