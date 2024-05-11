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
>Considerata $X_{1},X_{2},\dots$ una successione di variabili [[aleatorie indipendenti ed identicamente distribuite]] (i.i.d.) con media $\mu$ e varianza $\sigma^2$ finite. Sia $S_{n} = X_{1} + \dots + X_{n}$. Allora vale per ogni $\varepsilon > 0$
>$$ \lim_{ n \to \infty } P\left( \left|\frac{S_{n}}{n}-\mu\right| >\varepsilon\right)  =0 $$ 
>
>>[!dim]
>>dimostrazione
>>$X_{i}$ sono iid quindi
>>$$ \text{var}(S_{n}) = n \text{var}(X_{1})=n\sigma^2 $$
>>quindi
>>$$ \text{var}\left( \frac{S_{n}}{n} \right)=\frac{1}{n^2}n\sigma^2 = \frac{\sigma^2}{n} $$
>>quindi
>>$$E\left( \frac{S_{n}}{n} \right)=\mu$$
>>Infine, dalla [[Disuguaglanza di Chebychev|disuguaglianza di Chebychev]]
>>P(mod)
>>`fine`


La legge forte dei grandi numeri:
$$
P(\lim_{ n \to \infty } \bar{x}_{n} = \mu) = 1
$$


