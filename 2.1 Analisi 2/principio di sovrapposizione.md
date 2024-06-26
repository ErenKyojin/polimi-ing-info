---
aliases: PSE
---
# Principio di sovrapposizione
>[!definition]
>Sia $a : J \subset \mathbb{R}$ continua su $J$, l'applicazione lineare
>$$y \overset{L}{\mapsto} L(y) = y' - a(t) \cdot y$$
>Più esplicitamente, dati $c_{1}, c_{2} \in \mathbb{R}$
>$$L (c_{1}y_{1} + c_{2}y_{2}) = c_{1}L(y_{1}) + c_{2}L(y_{2})$$
>$\forall y_{1},y_{2}$  derivabili su $J$, $\forall c_{1},c_{2} \in \mathbb{R}$.
>
>Ancora più esplicitamente:
>- Se $L(y_{1}) = b_{1} \Longrightarrow y_{1}' = a(t)y_{1}+b_{1}$
>- Se $L(y_{2}) = b_{2} \Longrightarrow y_{2}' = a(t)y_{2}+b_{2}$
>$\Longrightarrow L(c_{1}y_{1}+c_{2}y_{2}) = c_{1}L(y_{1})+c_{2}L(y_{2}) = c_{1}b_{1}+c_{2}b_{2}$
>$\Longrightarrow (c_{1}y_{1}+c_{2}y_{2})'=a(t)(c_{1}y_{1}+c_{2}y_{2})+c_{1}b_{1}+c_{2}b_{2}$


>[!example]
>Prendo due soluzioni distinte della EDO
> $$ y' = a(t)y + b(t) \Rightarrow
>\begin{align}
>y_{1}' = a(t)y_{1}+b(t) \\
>y_{2}' = a(t)y_{2}+b(t)
>\end{align} $$
>
> $$ \begin{align}
>
>(y_{1}+y_{2})' = y_{1}'+y_{2}' &=  a(t)y_{1}+b(t) a(t)y_{2}+b(t) \\
> &= a(t)[y_{1}+y_{2}]+2b(t)
>\end{align}$$
>$2b(t) \neq b(t) \Rightarrow y_{1}+y_{2}$ non è soluzione della EDO di partenza 
>$\Rightarrow$ non basta sommare le soluzioni trovate in una <u>non omogenea</u> per trovare altre soluzioni
>

>[!remark] caso particolare - omogenea
> $$ (c_{1}y_{1} + c_{2}y_{2})' = a(t)(c_{1}y_{1}+c_{2}y_{2}) + \xcancel{c_{1}b_{1}+c_{2}b_{2}}$$
>Se $y_{1}$ e $y_{2}$ sono soluzioni distinte della stessa EDO lineare omogenea
> $$ y'(t) = a(t)y(t) 
>\begin{align}
>y'_{1} = a(t)y  \\
>y'_{2} = a(t)y
>\end{align} $$
>Qualunque combinazione lineare
> $$ y(t) = c_{1}y_{1}(t) + c_{2}y_{2}(t)\qquad c_{1},c_{2} \in \mathbb{R} $$ è ancora soluzione dell omogenea

>[!example]
>Sommando due forze otteniamo la somma degli effetti delle singole forze.
>Moltiplicando una forza per una costante $k$ otteniamo il risultato per $k$ volte


# FISICA
Dato un [[insieme]] di cause tra loro indipendenti agenti contemporaneamente sul medesimo sistema, se il legame tra ciascuna causa ed l'effetto da essa prodotto e di tipo lineare allora l'effetto complessivo prodotto da tutte le cause è dato  dalla somma algebrica dei singoli effetti prodotti da ciascuna causa.
Avremo quindi
$$
\vec{F} = \sum_{i=1}^N \vec{F}_{i} = \sum_{i=1}^N \frac{d\vec{p}_{i}}{dt} =\frac{\sum_{i=1}^Nd\vec{p}_{i}}{dt} = \frac{d\vec{p}}{dt}   
$$