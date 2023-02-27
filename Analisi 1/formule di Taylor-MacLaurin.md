---
alias: serie di Taylor, serie di MacLaurin, serie di Taylor-MacLaurin, sviluppi di Taylor, sviluppi di MacLaurin, sviluppi di Taylor-MacLaurin
---
# Formule di Taylor-MacLaurin con resto secondo peano
Vogliamo generalizzare l'approssimazione per [[linearizzazione]] ad un'approssimazione polinomiale, vogliamo quindi sapere, data una funzione, derivabile quanto necessario, esiste un polinomio che intorno ad un punto fissato, approssima la funzione meglio della sua tangente?

>[!esempio]
>Prendiamo la funzione $\cos x$, è approssimata in $x=0$ dalla funzione $y = 1 - \frac{1}{2}x^2$ piuttosto che dalla retta $y = 1$
>```desmos-graph
>top = 1.5; bottom = -1.5; left = -2.5; right = 2.5
>---
>y = \cos x
>y = 1
>y = 1 - \frac{1}{2}x^2
>```
>Quindi è la funzione è approssimata meglio dal polinomio di secondo grado in quanto lo scarto è $o(x^2)$


### Formula di MacLaurin
Iniziamo a lavorare nell'intorno di $x_0 = 0$ per semplicità e dividiamo il procedimento in due passi:

1. Troviamo un polinomio che approssimi bene la funzione, cercando un polinomio che abbia tutte le derivate fino all'ordine $n$ uguali a quelle di $f(x)$ nel punto $x = 0$. Ovviamente perchè sia possibile il polinomio deve essere di grado almeno $n$ (essendo la derivata $n$ di un polinomio di grado minore di $n$ automaticamente nulla). Così troviamo il polinomio di MacLaurin

>[!teorema]
>Data una funzione $f$ derivabile $n$ volte in $x = 0$, esiste uno ed un solo polinomio di grado $\leq n$, chiamiamolo $T_n$ con la proprietà che:
>$$T_n(0) = f(0), T_n'(0) = f'(0),\ldots,T_n^{(n)}(0) = f^{(n)}(0)$$
E il polinomio, detto di MacLaurin di $f(x)$ di grado $n$ è:
>$$\begin{flalign}
>T_n(x) &= f\!(0)\!+\!xf'(0)\!+\!\frac{1}{2}x^2f''\!(0)\! +\! \frac{1}{3!}x^3f'''\!(0)\!+\!\ldots\!+\!\frac{1}{n!}x^nf^{(n)}\!(0) = \\
>&=\sum_{k=0}^n\frac{1}{k!}f^{(k)}(0)x^k 
>\end{flalign}$$

2. Proviamo ora che il polinomio trovato approssima bene $f(x)$ in un intorno di $x = 0$:

>[!teorema] Formula di MacLaurin all'ordine $n$ con resto secondo Peano
>Sia $f : (a,b)\to\mathbb R$ derivabile $n$ volte in $0 \in (a,b)$. Allora
>$$f(x) = T_n(x) + o(x^n)\text{ per } x \to 0$$
>La formula precedente si dice formula di MacLaurin di ordine $n$ con resto secondo peano
Con struttura:
Funzione da approssimare = polinomio approssimante + errore di approssimazione, dove l'errore è il termine $o(x^n)$ detto "resto secondo Peano"


### formula di Taylor
Tutto questo discorso si può generalizzare anche ad un punto $x_0\neq 0$: data una funzione derivabile $n$ volte in $x_0$ si può costruire il suo polinomio di Taylor:
$$T_{n,x_0}(x) = \sum_{k = 0}^n\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k$$
>[!teorema] Formula di Taylor all'ordine $n$ con resto secondo Peano
>Sia $f : (a,b) \to\mathbb R$ derivabile $n$ volte in $x_0 \in (a,b)$ allora:
>$$f(x) = T_{n,x_0}(x)+o((x-x_0)^n)\text{ per } x\to x_0$$


>[!esempiO]
>$f(x) = e^x$ quindi $f^{(n)}(x) = e^x\forall n$, quindi $f^{(n)}(0) = 1$ per ogni $n$:
>$$e^x = T_{n,0}(x) = 1 + x + \frac{x^2}{2!}+\frac{x^3}{3!}+\ldots+\frac{x^n}{n!}+o(x^n)$$ 
>per $x\to0$
>```desmos-graph
>y = e^x
>y = 1 + x + \frac{1}{2}x^2 + \frac{1}{6}x^3
>``` 
In blu $e^x$, in verde $T_{3,0}$ 


# [[sviluppi di MacLaurin notevoli]]

# formula di Taylor-MacLaurin con resto secondo Lagrange
Nella formula con il resto secondo Peano l'errore è "dinamico", ossia cambia ed è sempre più veloce del più veloce incremento $(x-x_0)^n$, questo è utile nel calcolo dei limiti, ma per un valore fisso dell'incremento $(x-x_0)$ non abbiamo informazioni sull'entità dell'errore commesso. Noi vogliamo invece stimarlo in questi casi, facciamo un esempio

>[!esempio]
>Consideriamo il polinomio di MacLaurin di ordine $3$ di $e^x$
>$$T_3(x) = 1 + x + \frac{1}{2}x^2+\frac{1}{6}x^3$$
>Se volessimo usare questo fatto per calcolare ad esempio $\sqrt e$, ossia approssimassimo
>$$e^\frac{1}{2}\text{ con } T_3\left(\frac{1}{2}\right) = \frac{79}{48}$$
>Come possiamo stimare l'errore In questo caso?

>[!teorema] Formula di Taylor all'ordine $n$ con resto secondo Lagrange
>Sia $f : [a,b]\to\mathbb R$ derivabile $n+1$ volte in $[a,b]$, e sia $x_0 \in [a,b]$. Allora esiste un punto $c$ compreso tra $x_0$ e $x$ tale che
>$$f(x) = T_{n,x_0}(x) + \frac{f^{(n+1)(c)}}{(n+1)!}(x-x_0)^{n+1}$$ 
>Questa formula è detta "formula di Taylor (o di MacLaurin se $x_0 = 0$) di ordine $n$ con resto secondo Lagrange"

La formula ha struttura
$$\text{funzione da approssimare $=$ polinomio approssimante $+$ errore di approssimazione}$$
Dove l'errore è il termine $\dfrac{f^{(n+1)(c)}}{(n+1)!}(x-x_0)^{n+1}$
Per $n = 0$ la formula coincide col [[Teorema del valor medio|teorema di Lagrange]]
Il punto $c$ dipende da $x_0,x$ ed $n$ ed è compreso tra $x_0$ e $x$. Se si riesce a dimostrare che $|f^{(n+1)}(t)|\leq M$ per ogni $t$ compreso tra $x:0$ e $x$ allora la formula di Taylor con il resto secondo Lagrange dice che
$$|f(x)-T_{n,x_0}(x)|\leq\frac{M}{(n+1)!}|x-x_0|^{n+1}$$
Che è una stima dell'errore commesso.

