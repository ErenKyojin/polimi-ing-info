---
aliases: 
creation date: 2023-03-30 13:12
modification date: 2023-03-30 13:12
---

Coefficiente di correlazione lineare

>[!def]
>Se $x,y$ che hanno varianza $\var(x), \var(y)$
 >la $\cov(x,y)$ è il numero
>$$ E[(x,\mu x)(y-\mu y)] - \begin{cases}
>\text{ dsg } \sum_{x}\sum_{y}(x-\mu_{x})(y - \mu_{y})f_{x,y}(,y) \\
>\text{os cont } \iint_{\mathbb{R}^2}(x - \mu x)(y - mu) f_{x,y}(x,y) \mathrm{d}x\mathrm{d}y
>\end{cases} $$


## Proprietà
1. $\cov(x,y) = \cov(y,x)\quad ;\quad \cov \text{ è simmetrica}$
2. $\cov(x,x) = \var(x)$
3. $\cov(x,c) = E[(x-\mu x)(c - c)] = 0$ con $c$ costante