---
aliases: 
creation date: 2024-03-12
---

>[!def]
>Date due variabili aleatorie $X$ e $Y$, queste sono dette indipendenti se dati due insiemi $A$ e $B$ qualsiasi tali che $A \subseteq \mathbb{R}, B \subseteq \mathbb{R}$, vale che
>$$ P\{ X \in A, Y \in B \} = P\{ X \in A \} P\{ Y \in B \} $$
>che è verificata se $\forall a,b \in \mathbb{R}$
>$$P\{ X \leq a, Y \leq b \} = P\{ X \leq a \} P\{ Y \leq b \}$$

Vale inoltre la seguente:

> [!proposizione]
> Due variabili aleatorie $X$ e $Y$ sono indipendenti se e solo se la loro densità congiunta può essere espressa come
> $$ f_{X,Y}(x,y) = h(x)g(y)\qquad \forall x,y \in (-\infty, +\infty) $$

È utile tenere a mente che l'indipendenza tra variabili aleatorie è simmetrica, date due variabili aleatorie $X$ ed $Y$, se $X$ è indipendente rispetto ad $Y$ anche $Y$ è indipendente rispetto ad $X$.
Questo è in particolar modo utile nella verifica dell'indipendenza, se sembra particolarmente complicato dimostrare l'indipendenza in una via, è possibile provarla nell'altra.

L'indipendenza di più variabili aleatorie si può provare ricorsivamente
- $X_{2}$ indipendente da $X_{1}$
- $X_{3}$ indipendente da $X_{2},X_{1}$
- $\dots$ 
- $X_{n}$ indipendente da $X_{n-1},\dots,X_{2},X_{1}$

## Somma di v.a. indipendenti
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