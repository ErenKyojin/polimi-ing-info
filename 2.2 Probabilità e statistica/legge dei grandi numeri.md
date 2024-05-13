---
aliases: 
creation date: 2024-05-11
---

Se lanciamo $n$ monete regolari e consideriamo le teste ottenute negli $n$ lanci
$$ \frac{X_{1} + X_{2} + \dots + X_{n}}{n} $$
dove $X_{i}$ è 1 se esce testa all'$i$-esimo lancio e 0 altrimenti, si osserva sperimentalmente (e con l'intuito) che all'amentare di $n$ questo valore si avvicina ad $\frac{1}{2}$

Cioè all'aumentare di n:
$E(\bar{x} - \mu)^2 \to 0$ se $n \gg 0 (\bar{x} \approx \mu)$

Se fisso un errore di misura $\varepsilon$
$$
P(|\bar{x} - \mu| < \varepsilon) ?
$$
Se $n \gg 0$ questa probabilità va a $1 \forall \varepsilon > 0$

---

>[!legge] legge debole dei grandi numeri
>Considerata $X_{1},X_{2},\dots$ una successione di variabili [[variabili aleatorie indipendenti ed identicamente distribuite]] ([[variabili aleatorie indipendenti ed identicamente distribuite|i.i.d.]]) con media $\mu$ e varianza $\sigma^2$ finite. Sia $S_{n} = X_{1} + \dots + X_{n}$. Allora vale per ogni $\varepsilon > 0$
>$$ \lim_{ n \to \infty } P\left( \left|\frac{S_{n}}{n}-\mu\right| >\varepsilon\right)  =0 $$ 
>>[!dim]
>>$X_{i}$ sono iid quindi
>>$$ \text{var}(S_{n}) = n \text{var}(X_{1})=n\sigma^2 $$
>>quindi
>>$$ \text{var}\left( \frac{S_{n}}{n} \right)=\frac{1}{n^2}n\sigma^2 = \frac{\sigma^2}{n} $$
>>quindi
>>$$E\left( \frac{S_{n}}{n} \right)=\mu$$
>>Infine, dalla [[Disuguaglanza di Chebychev|disuguaglianza di Chebychev]]
>>$$P\left(\left| \frac{S_{n}}{n} - \mu \right| > \varepsilon\right) \leq \frac{\sigma^2}{n\varepsilon} \to 0\quad (n \to +\infty)$$
>>$\CVD$

La quantità $\frac{X_{1} + \dots + X_{n}}{n}$ è detta [[Media campionaria]] e si indica con $\bar{X}_{n}$, quindi la legge debole dei grandi numeri indica che $P(| \bar{X}_{n} - \mu| \leq \varepsilon) \to 1$ per $n$ che tende a infinito.



>[!legge] legge forte dei grandi numeri
>Data una successione di variabili aleatorie iid con media finita $\mu$ allora
>$$
>P\left( \left\{ \omega : \lim_{ n \to \infty } \frac{\bar{S}_{n}(\omega)}{n} = \mu  \right\}\right) = 1
>$$

Afferma quindi che per (quasi) tutte le successioni identificate da $\omega$, la probabilità che la media campionaria sia uguale al valore atteso è 1.

>[!corollary]
>Sia $h$ funzione su $[0,1]$ tale che $\int_{0}^1 \!h(x) \, \mathrm{d}x <\infty$. Siano $U_{1},U_{2},\dots$ variabili aleatorie iid con densità uniforme su $[0,1]$ allora.
>$$ P\left( I_{1n} := \frac{1}{n} \sum_{j=1}^n h(U_{j}) \to \int _{0}^1 \!h(x) \, \mathrm{d}x , n \to +\infty\right)=1 $$
>>[!dim]
>>È sufficiente osservare che $h(U_{1}),h(U_{2}),\dots$ sono i.i.d. con media finita $\int _{0}^1  \!h(x) \, \mathrm{d}x$ ed applicare la legge dei grandi numeri

