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
Quindi applichiamo due volte il risultato ottenuto per $y(t) = Ue^{\lambda t}$ e combiniamo i risultati/
Poniamo
$$
\begin{align}
u_{1}(t) = e^{j\omega t} \\
u_{2}(t) = e^{-j\omega t}
\end{align} \implies u(t) = \frac{u}{2j} (u_{1}(t)-u_{2}(t))
$$
- $u_{1}$: se $j\omega$ non è [[Autovalori e Autovettori|autovalore]] di $A$ allora:
$$
\begin{align}
\exists ! x(0) = x' : \text{l'uscita ottenuta è } y_{1} (t) = G(j \omega) e^{j \omega t}
\end{align}
$$

- $u_{2}$: se $-j\omega$ non è [[Autovalori e Autovettori|autovalore]] di $A$
$$
\exists! x(0) = x'' : \text{ l'uscita ottenuta è } y_{2}(t) = G(-j\omega)e^{j\omega t}
$$

Quindi combinando:
$$
\begin{rcases}
u(t) = \frac{U}{2j}(u_{1}(t) - u_{2}(t))  = U\sin(\omega t) \\
x(0) = \frac{U}{2j}(x' - x'')
\end{rcases} \to y(t) = \frac{U}{2j}(y_{1}(t) - y_{2}(t))
$$

$$
y(t) = \frac{U}{2j}(G(j\omega)e^{j\omega t} - G(-j\omega)e^{-j\omega t})
$$
>[!oss]
>$G(s)$ è razionale fratta, quindi $G(-j\omega) = \overline{G(j\omega)}$

allora $$\begin{align}
y(t) &= \frac{U}{2j}(\underbrace{ M e^{j\varphi} }_{ G(j\omega) } e^{j\omega t} - \underbrace{ Me^{-j\varphi} }_{ G(-j\omega) }e^{-j\omega t}) = \\
&= MU \frac{e^{j(\omega t + \varphi)}- e^{-j(\omega t + \varphi)}}{2j} = \\
&=MU \sin(\omega t + \varphi)
\end{align}$$


