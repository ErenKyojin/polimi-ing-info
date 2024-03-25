---
aliases: 
creation date: 2024-03-25
---

>[!def]
>Siano $X$ ed $Y$ variabili aleatorie continue ed indipendenti, la distribuzione di $X+Y$, con densità pari a $f_{X}$ ed $f_{Y}$ è pari a:
>$$
> \begin{align}
>F_{X+Y}(a) &= P \{ X + Y \leq a \} = \\
>&= \iint_{{x+y \leq a}} f_{X}(x)f_{Y}(y)\d x \d y \\
>&= \int _{-\infty}^{\infty} \int _{-\infty}^{a-y} \!f_{X}(x)f_{Y}(y) \, \mathrm{d}x  \! \, \mathrm{d}y \\
>&= \int _{-\infty}^{\infty} \int _{-\infty}^{a-y} \!f_{X}(x) \, \mathrm{d}x  \!f_{Y}(y) \, \mathrm{d}y \\
>&= \int _{-\infty}^{\infty} \!F(a-y)f_{Y}(y) \, \mathrm{d}y   
>\end{align} 
>$$


La somma di variabili aleatorie indipendenti è una [[convoluzione]] delle rispettive funzioni di distribuzione.
Possiamo inoltre differenziare la formula e ottenere
$$ f_{X+Y}(a) = \frac{d}{da} \int _{-\infty}^{\infty} \!F_{X}(a-y)f_{Y}(y) \, \mathrm{d}y=\int _{-\infty}^{\infty} \!f_{X}(a-y)f_{Y} (y)\, \mathrm{d}y   $$


## Somme notevoli
- [[Variabile aleatoria uniforme#Somma di variabili aleatorie uniformi indipendenti]]
