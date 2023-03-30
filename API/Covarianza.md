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
4. $\cov(ax,by)= E[(ax - a\mu x)(by-b\mu y)]=E[(x - \mu x)(y - \mu y)]ab = ab\ \cov(x,y)$
5. $\cov(ax, by + W) = E[a(x-\mu x)(by + W - bE(y) - E(W))] = aE[(x-\mu x)(b(y-\mu Y) + (W - \mu W))]$
   $= ab\ \cov(x,y) + a\cov(x,w)$
   Quindi $\cov(x,y)$ è un operatore bilineare
   
6. $E[(x-\mu x)(y - \mu y)] = E[xy - x\mu_{y} - \mu_{x}y + \mu_{x}\mu_{y}] = E(xy) - \mu_{y}E(x) - \cancel{ \mu_{x}E(y) } + \cancel{ \mu_{x}\mu_{y} }$
   quindi $\cov(x,y) = E(x,y) - E(x)E(y)$

## Difetti della covarianza come misura di interazione

$x =$ altezza in $m$ $\implies$ $\hat{x} =$altezza in $cm$
$y =$ peso in $kg \implies \hat{y} =$ peso in $hg$

$\cov(\hat{x},\hat{y}) = cov(100x,10y) = 1000\cov(x,y)$
covarianza non è ridotta rispetto a $c$ cambiamenti di scala $\implies$ riscalo
$$ \cov\left( \frac{x-\mu_{x}}{\sigma_{x}} , \frac{y-\mu y}{\sigma_{y}}\right)= \frac{1}{\sigma_{x}\sigma_{y}}\left[ \cov(x_{\gamma}y - \mu_{y} )+ \cov(-\mu_{x}, y-\mu_{y}) \right]  = \frac{\cov(x+y)}{\sigma_{x}\sigma_{y}}$$

$\rho(x,y)$ è detto [[coefficiente di correlazione lineare]]
