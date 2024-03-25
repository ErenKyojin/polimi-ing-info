---
aliases: 
creation date: 2024-03-03
---

>[!def]
>Una [[variabile aleatoria#^a0cf7e|variabile aleatoria continua]] è detta uniforme sull'intervallo $(\alpha, \beta)$ se la sua densità è:
>$$ f(x) = \begin{cases}
\frac{1}{\beta-\alpha}&\alpha \leq x \leq \beta \\
0 & \text{altrimenti}
\end{cases} $$

Caso particolare $(\alpha, \beta) = (0,1)$, si ha quindi $f(x) = 1$ se $X$ cade nell'intervallo $(a,b)$ e $f(x)=0$ altrimenti.

>[!oss]
>Considerati $0 < a < b < 1$
>$$ P\{ a \leq X \leq b \} =   \int _{a}^b \!f(x) \, \mathrm{d}x = b - a$$
> quindi la probabilità che una variabile aleatoria continua uniforme $X$ cada all'interno di un intervallo è la lunghezza dell'intervallo stesso.

Dalla definizione di [[funzione di ripartizione]] per una variabile continua, considerando un intervallo $\alpha, \beta$
$$ F(a) = \begin{cases}
0  &a \leq \alpha\\
\dfrac{a-\alpha}{b-\beta}&\alpha < a < \beta \\
1 & a \geq \beta
\end{cases} $$

## Somma di variabili aleatorie uniformi indipendenti

Siano  $X_{1},X_{2},\dots,X_{n}$ variabili aleatorie uniformi indipendenti su $(0,1)$.