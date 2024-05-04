---
aliases: 
creation date: 2024-03-03
---

>[!definition]
>Una variabile aleatoria si dice esponenziale se la sua densità è data per qualche $\lambda > 0$ dalla formula:
>$$ f(x) = \begin{cases}
\lambda e^{-\lambda x} &x \geq 0 \\
0 &x < 0 
\end{cases} $$
La sua funzione di distribuzione sarà, per $a \geq 0$
$$ F(a) = P\{ X \leq a \} = \int _{0}^a \!\lambda e^{-\lambda x} \, \mathrm{d}x = 1 - e^{-\lambda a} $$

È sfruttata solitamente per la distribuzione dell'intervallo di tempo tra due eventi.