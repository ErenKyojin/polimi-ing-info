# teorema fondamentale del calcolo integrale
>[!teorema]
>Se $f : [a,b] \in \mathbb{R}$ è continua e $G$ è una sua primitiva su $\left[ a,b \right]$ allora:
>$$
>\int_{a}^b \!f(x) \, \d x  = G(b) - G(a)
>$$
>Per indicare $G(b)-G(a)$ si usa il simbolo:
>$$\left[ G(x) \right]_{b}^a $$
>Che si legge $G(x)$ valutato tra $a$ e $b$
>
>>[!esempio]
>>Consideriamo di voler calcolare
>>$$\int_{1}^2 \! x^2 \, \d x $$
>>Essendo $\left( \frac{x^3}{3} \right)' = x^2, G(x)=\frac{x^3}{3}$ è una primitiva di $x^2$ in $\left[ 0,1 \right]$, quindi
>>$$
>> \int_{0}^1 \!x^2 \, \d x = \left[ \frac{x^3}{3} \right]_{0}^1 = \frac{1}{3} 
>>$$
>
>Per questo teorema derivata ed integrale vengono chiamate operazioni opposte, tuttavi è bene osservare che in realtà, per come li abbiamo definiti, non hanno niente a che fare tra di loro. Tuttavia il calcolo di un integrale è ridotto alla ricerca di una primitiva, operazione inversa della derivazione.
>>[!dim]
>>Siano $a = x_{0},x_{1},\dots,x_{n}=b$ punti che suddividono $[a,b]$ in $n$ intervalli di uguale grandezza. Quindi, aggiungendo e togliendo $G(x_{j})$ per $j=1,2,\dots,n-1$ si ha
>>$$\begin{align}
>>
>>G(b)-G(a) &= G(x_{n})-G(x_{0}) = [G(x_{n})-G(x_{n-1})]+[G(x_{n-1})-G(x_{n-2})]+\dots+[G(x_{2})-G(x_{1})]+[G(x _{1})-G(x_{0})] = \\ \\
>> &= \sum [G(x_{j})-G(x_{j-1})]
>>\end{align}
>>$$
Applichiamo adesso il [[Teorema del valor medio|teorema di Lagrange]] alla funzione $G(x)$ su ogni intervallo $[x_{j-1},x_{j}]$. Esiste allora $\xi_{j}\in[x_{j-1},x_{j}]$ tale che:
>>$$
>>G(x_{j})-G(x_{j-1})=(x_{j}-x_{j-1})G'(\xi_{j})=(x_{j}-x_{j-1})f(\xi_{j})
>>$$
>>Infatti per ipotesi $G(x)$ è una primitiva di $f(x)$, quindi $G'(\xi_{j}) = f(\xi_{j})$
>>Ne segue che
>>$$
>>G(b)-G(a) = \sum_{j=1}^n(x_{j}-x_{j-1})f(\xi_{j})=S_{n}
>>$$
>>Dove $S_{n}$ è una somma $n$-esima di [[somma di Cauchy-Riemann|Cauchy-Riemann]] di $f$. L'identità scritta vale per ogni $n$, facendo quindi tendere $n$ all'infinito abbiamo:
>>$$
>>G(b)-G(a)=\int_{a}^b \!f(x) \, \d x 
>>$$


# teorema fondamentale del calcolo integrale 2
>[!teorema]
>Sia $f:[a,b]\to \mathbb{R}$ una funzione integrabile, sia $x_{0} \in [a,b]$ e sia
>$$
>F(x) = \int_{x_{0}}^{x} \! f(t) \, \d t
>$$
>Allora 
>1. La funzione $F$ è continua in $[a,b]$
>2. Se inoltre $f$ è continua in $[a,b]$, allora $F$ è deriabile in $[a,b]$ e vale
>$$F'(x)=f(x)\quad\forall x\in[a,b]$$
>
>>[!dim]
>>Proviamo il punto 1 nell'ipotesi in cui $f$ è integrabile in senso proprio, ed è quindi limitata. Quindi esiste $k>0$ per cui è
>>$$\left\vert f(t) \right\vert \leq k\ \forall t \in[a,b]$$
>>per provare che $F$ è continua in un generico punto $\overline{x} \in [a,b]$ consideriamo ora:
>>$$\begin{align}
>> \left\vert F(\overline{x}+h)-F(\overline{x}) \right\vert &= \left\vert \int_{x_{0}}^{\overline{x}+h} \!  f(t)\, \d t  -\int_{x_{0}}^{\overline{x}} \! f(t) \, \d t \right\vert =  \\
>>&=\left\vert \int_{\overline{x}}^{\overline{x}+h} \! f(t) \, \d t  \right\vert \leq \left\vert \int_{\overline{x}}^{\overline{x}+h} \! |f(t)| \, \d t \right\vert \leq \\
>>&\leq \left\vert \int_{\overline{x}}^{\overline{x}+h} \! k \, \d t  \right\vert = k\left\vert h \right\vert
>>
>>\end{align}
>>$$
>Usando l'additività dell'integrale rispetto all'intervallo di integrazione e la disuguaglianza del valore assoluto. Per $h\to 0$ si ha $F(\overline{x}+h)\to F(\overline{x})$ e $F$ è continua in $\overline{x}$.
>Abbiamo considerato però che $f$ fosse integrabile solo in senso proprio, supponiamo invece che $f$ sia integrabile in senso generalizzato, e che $\overline{x}$ sia un punto nel cui intorno $f(x)$ è illimitata. Abbiamo ancora:
>$$F(\overline{x}+h)-F(\overline{x}) = \int_{\overline{x}}^{\overline{x}+h} \!f(t)  \, \d t $$
>Allora scriviamo che:
>$$\int_{\overline{x}}^{b} \! f(t) \, \d t = \int_{\overline{x}}^{\overline{x}+h} \! f(t)  \, \d t +\int_{\overline{x}+h}^{b} \! f(t) \, \d t $$
>>Per ipotesi $f$ è integrabile in senso generalizzato, quindi per definizione:
>>$$\int_{\overline{x}+h}^{b} \! f(t) \, \d t \to \int_{\overline{x}}^{b} \! f(t) \, \d t \quad\text{per }h\to 0^{+}$$
>>E quindi per differenza
>>$$\int_{\overline{x} }^{\overline{x}+h} \! f(t) \, \d t \to 0\quad\text{per } h \to 0^{+}$$
>>Che significa che $F(\overline{x}+h) \to F(\overline{x})$ per $h\to 0^{+}$. Si ragiona analogamente per $h\to 0^{-}$
>>---
>>Per provare il punto 2 partiamo ancora dall'uguaglianza
>>$$F(\overline{x}+h)-F(\overline{x})=\int_{\overline{x}}^{\overline{x}+h} \! f(t) \, \d t $$
>>Poichè per ipotesi $f$ è continua, per il [[teorema della media]] si ha
>>$$\int_{\overline{x}}^{\overline{x}+h} \! f(t) \, \d t = hf(x_{h})$$
>>Per qualche $x_{h}\in[\overline{x},\overline{x}+h]$. Ne segue che
>>$$\frac{F(\overline{x}+h)-F(\overline{x})}{h} = f(x_{h})$$
>>Per $h \to 0$ si avrà che $x_{h}\to\overline{x}$ e quindi per la continuità di $f$, $f(x_{h})\to f(\overline{x})$, quindi esiste
>>$$\lim_{ h \to 0 } \frac{F(\overline{x}+h)-F(\overline{x})}{h}=f(\overline{x})$$
>>$$\tag{$\blacksquare$}$$