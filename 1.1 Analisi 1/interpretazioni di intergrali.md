# interpretazione geometrica di [[integrale 2]]

Sia $f\geq 0$ e sia $f$ continua. Ogni addendo della [[somma di Cauchy-Riemann]] è l'area del rettangolo avente come base il segmento $[x_{j-1},x_{j}]$ e come altezza $f(\xi_{j})$. La somma $S_{n}$ rappresenta quindi un'approssimazione dell'area della parte del piano tra l'asse $x,a\leq x \leq b$ e il grafico di $f$.
Passando al limite per $n \to +\infty$ si ha
$$
\fbox{$S_{n}\longrightarrow\int  \!f(x) \, \d x = $ area del trapezoide}
$$
Più preisamente, è l'integrale che costituisce un definizione precisa dell'area del trapezoide individuato da una curva $y = f(x)$ e non viceversa. Quindi è il calcolo infinitesimale che ci permette di dare senso all'area di una figura piana generica. Se $f$ dovesse cambiare segno l'integrale rappresenta una somma di aree con segno, ad esempio

>[!esempio]
>```desmos-graph
>top = 4; left = -1.5; bottom = -4; right = 7.5;
>---
>
>y = -(x-1)\sin(x-1)-0.50(x-1) + 0.75|0<x<6.9
>0<y < -(x-1)\sin(x-1)-0.50(x-1) + 0.75|x>0
>-(x-1)\sin(x-1)-0.50(x-1) + 0.75<y<0|0<x<6.9
>(1,0.3)|open|#43835c|label: T1
>(3,-1)|open|#564185|label: T2
>(5.8,1.5)|open|#43835c|label: T3
>(6.9,0)|hidden|label: y = f(x)
>```
>Avremmo allora che:
>$$
>\int _{a}^b \!f(x) \, \d x = \text{area $(T_{1})-$ area $(T_{2})$ + area $(T_{3})$} 
>$$
>Esempio molto banale:
>$$
>\int_{0}^{2\pi}  \! \sin x \, \d x = 0
>$$
>```desmos-graph
>top = 3; bottom = -3; left = -1; right = 8;  
>---
>y = \sin(x)|x > 0|x < 2\pi
>0<y < \sin(x)|#43835c|0<x<2\pi
>\sin(x)<y<0|#43835c|x>0
>```
>
>infine se $c$ è una costante $\int_{a}^b  \! c \, \d x$ è l'area del rettangolo con base $(b-a)$ e altezza $c$
>```desmos-graph
>hideAxisNumbers = true;
>---
>y = 3
>c=(0,3)|open|label: c|#3072da
>a=(3,0)|open|label: a|
>b=(5,0)|open|label: b|#43835c
>0<y < 3| 3<x<5
>```

# interpretazione fisica
