---
aliases: 
creation date: 2024-05-11
---

Consideriamo $n$ variabili aleatorie $X_{1},\dots,X_{n}$ [[variabili aleatorie indipendenti ed identicamente distribuite|iid]] con media $\mu$ e varianaza $\sigma^2$ finite.
Sappiamo per la [[legge dei grandi numeri]] che per $n$ grandi vale che $\bar{X}_{n} \approx \mu$.
Se sono gaussiano è immediato che $\bar{X}_{n} \sim \mathcal{N}\left( \mu, \frac{\sigma^2}{n} \right)$

>[!theorem] teorema centrale del limite
>Sia $X_{1},X_{2},\dots$ una successione di variabili aleatorie i.i.d. con media $\mu$ e varianza $\sigma^2$, con $0 < \sigma^2 < +\infty$. Allora per ogni $x \in \mathbb{R}$:
>$$ \lim_{ n \to \infty }  P\left( \frac{\sqrt{ n }(\bar{X}_{n} -\mu)}{\sigma} \leq x\right)= \int _{-\infty}^x \frac{\!1}{\sqrt{ 2x }}e^{-u^2/2} \, \mathrm{d}u = \Phi(x) $$
>
>Quindi, a condizione di prendere un numero sufficiente di variabili nella sucessione, la funzione di ripartizione della standardizzata della media campionaria è approssimabile alla gaussiana standard con meadia $n \mu$ e varianza $n \sigma^2$

Affinchè l'approssimazione sia valida, solitamente deve valere $n \approx 30$
## Applicazioni
Un'applicazione importante del teorema centrale del limite riguarda le [[variabile aleatoria binomiale|variabili aleatorie binomiali]], infatti consideriamo una binomiale $X$ di parametri $(n,p)$, possiamo vederla come
$X = X_{1} + X_{2} + \dots + X_{n}$
dove $X_{i} = \begin{cases}1&\text{se successo}\\ 0&\text{se fallimento}\end{cases}$
Sappiamo che $E[X_{i}] =p, \text{var}(X_{i}) = p(1-p)$
Quindi per $n$ sufficientemente grande vale che 
$$ \frac{X-np}{\sqrt{ np(1-p) }} $$ 
sarà approssimatamente una [[Variabile aleatoria normale]] standard.

Questa è la seconda approssimazione per una binomiale, dopo la [[Variabile aleatoria di Poisson]].