---
aliases: 
creation date: 2023-03-30 13:12
modification date: 2023-03-30 13:12
---

Ricordando il [[Valore atteso#^da9cb5]] 

>[!def]
>Siano $X_{1},X_{2}$ due variabili aleatorie definite sul medesimo spazio di probabilità che ammettono varianza. La **covarianza** di $X_{1},X_{2}$ è
>$$ \cov(X_{1},X_{2})=E[(X_{1}- E(X_{1}))(X_{2}-E(X_{2}))] $$
>Definita la varianza possiamo definire anche il [[coefficiente di correlazione lineare]]

## Proprietà
1. $\cov(X,Y) = \cov(Y,X)\quad ;\quad \cov \text{ è simmetrica}$
2. $\cov(X,X) = \var(X)$
3. $\cov(X,c) = E[(X-\mu X)(c - c)] = 0$ con $c$ costante
4. $\cov(aX,bY)= E[(aX - a\mu X)(bY-b\mu Y)]=E[(X - \mu X)(Y - \mu Y)]ab = ab\ \cov(X,Y)$
5. $\cov(aX, bY + W) = E[a(x-\mu x)(by + W - bE(y) - E(W))] = aE[(X-\mu X)(b(Y-\mu Y) + (W - \mu W))]$
   $= ab\ \cov(X,Y) + a\cov(X,W)$
   Quindi $\cov(X,Y)$ è un operatore bilineare
   
6. $E[(x-\mu x)(y - \mu y)] = E[xy - x\mu_{y} - \mu_{x}y + \mu_{x}\mu_{y}] = E(xy) - \mu_{y}E(x) - \cancel{ \mu_{x}E(y) } + \cancel{ \mu_{x}\mu_{y} }$
   quindi $\cov(x,y) = E(x,y) - E(x)E(y)$

## Difetti della covarianza come misura di interazione

$x =$ altezza in $m$ $\implies$ $\hat{x} =$altezza in $cm$
$y =$ peso in $kg \implies \hat{y} =$ peso in $hg$

$\cov(\hat{x},\hat{y}) = cov(100x,10y) = 1000\cov(x,y)$
covarianza non è ridotta rispetto a $c$ cambiamenti di scala $\implies$ riscalo
$$ \cov\left( \frac{x-\mu_{x}}{\sigma_{x}} , \frac{y-\mu y}{\sigma_{y}}\right)= \frac{1}{\sigma_{x}\sigma_{y}}\left[ \cov(x_{\gamma}y - \mu_{y} )+ \cov(-\mu_{x}, y-\mu_{y}) \right]  = \frac{\cov(x+y)}{\sigma_{x}\sigma_{y}}$$

$\rho(x,y)$ è detto [[coefficiente di correlazione lineare]]


#### Quartetto di Anscombe
![[Pasted image 20230330135642.png]]


