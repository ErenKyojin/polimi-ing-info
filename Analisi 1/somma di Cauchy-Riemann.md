# Somma di Cauchy-Riemann
Sia $f : [a,b]\to\mathbb R$ limitata. Notiamo che $f$ potrebbe non essere continua, tuttavia assumiamo che sia definitiva in ogni punto di $[a,b]$ individuata dai punti
$$a = x_0\qquad  x_1,x_2,\ldots,x_{n-1}\qquad x_n = b$$
Con
$$x_{j} = a+ jh,\qquad h = \frac{b-a}{n}\qquad j = 0,\ $$
E scegliamo in ognuno degli $n$ intervalli $[x_{j-1},x_{j}]$, un punto arbitrario $\xi_{j}$ ($j=1,2,\dots,n$).
Costruiamo la (detta somma di Cauchy-Riemann)
$$
S_{n} = \sum_{j=1}^n f(\xi_{j})\cdot(x_{j}-x_{j-1}) = \frac{b-a}{n}\sum_{j=1}^nf(\xi) $$
Ad ogni passo della costruzione, l'intervallo $[a,b]$ viene diviso in $N$ intervalli minori, ed in casi uno di questi viene scelto un punto $\xi_{j}$, ad esempio i punti $\xi_{1},\xi_{2},\xi_{3},\dots,\xi_{6}$ scelti con $n = 6$ sono diversi dai punti $\xi_{1},\xi_{2},\xi_{3},\xi_{4}$ scelti con $n=4$.
Ad ogni passo della costruzione, in generale, gli addendi della somma $S_{n}$ cambiano, diventando più numerosi e contemporaneamente più piccoli in valore assoluto.
Passiamo quindi al limite per $n\to+\infty$ sperando di ottenere un risultato significativo,  arriviamo quindi alla definizione di [[integrale 2|integrabile]]
