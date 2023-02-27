# Teorema della media
Vale per le funzioni integrabili [[continuità|continue]]

>[!teorema]
>Sia $f : [a,b] \to \mathbb{R}$ continua, allora esiste $c \in [a,b]$ tale che
>$$
\frac{>1}{b-a}\int_{a}^b  \! f(x)\, \d x = f(c)
>$$
>
>>[!dim]
>>Essendo $f$ continua in $[a,b]$, per il [[Teorema di Weierstrass]], essa è dotata di massimo $= M$ e minimo $= m$. Dalla proprietà di monotonia degli integrali si ha
>>$$m = \frac{1}{b-a} \int_{a}^b  \!m \, \d x  \leq \frac{1}{b-a} \int_{a}^b  \!f(x) \, \d x \leq \frac{1}{b-a} \int_{a}^b  \!M \, \d x = M$$
>>Quindi il valore $\frac{1}{b-a}\int _{a}^b \!f(x) \, \d x$ è compreso tra il minimo e massimo di $f$. Per il [[Teorema dei valori intermedi]] delle funzioni continue tale valore è uguale ad $f(c)$ per qualche $c \in [a,b]$

Da non confondere con il [[valore efficace]]
