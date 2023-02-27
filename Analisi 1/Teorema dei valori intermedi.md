# Teorema dei valori intermedi
>[!Teorema]
>Se $f$ è continua su $[a,b]$, allora per ogni valore $\lambda$ compreso tra $m$ e $M$ (minimo e massimo di $f$ in $[a,b]$ rispettivamente), esiste un ingresso $x$ in $[a,b]$, che ha il valore di $\lambda$ come uscita
>
>>[!dim]
>>Questo teorema è una conseguenza del [[Teorema di Weierstrass]] e del [[Teorema degli zeri]]:
>>Sia $m < \lambda < M, f(x_2) =m, f(x_1) =M$.
>>Allora la funzione $g(x) = f(x) - \lambda$ è continua in $[x_1,x_2]$ (supponendo $x_1 < x_2$, osserviamo inoltre che $g(x)$ è $f(x)$ traslata sull'asse delle ordinate) mentre $g(x_1) = f(x_1) - \lambda = M - \lambda > 0$
>>$g(x_2) = f(x_2) - \lambda = m - \lambda < 0$
>>Dal teorema degli zeri, esiste $l$ tale che $g(l) = 0$ e cioè $f(l) = \lambda$
>>

Il teorema dei valori intermedi ed il teorema di weierstrass si possono riassumere nel seguente teorema

>[!teorema]
>Se $f:[a,b]\to\mathbb R$ è continua, allora $f([a,b]) = [m,M]$; cioè l'immagine di un intervallo $[a,b]$ è l'intervallo di estremi $m = \underset{[a,b]}{\min}f$ e $M = \underset{[a,b]}\max f$

