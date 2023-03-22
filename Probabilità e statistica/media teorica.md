---
aliases: 
creation date: 2023-03-22 08:35
modification date: 2023-03-22 08:35
---

> [!def]
> 
> $X_{1},\dots,X_{n}$ iid F con comune [[Valore atteso|media]] $\mu=E(X_{1})$ e [[varianza]] $\sigma^2 = \var(X_{1})$
> $\bar{x} = \sum_{j=1}^nx_j/n$
> $\implies E(\bar{x})=\mu$
> 
> $\bar{x}$ è un'approssimazione di $\mu$ (detta **media teorica**) che si concentra intorno a $\mu$
> Non ha errori sistematici, è una misura accurata.
> $\implies\var(\bar{x}) = \frac{\sigma^2}{n} \to 0$ per $n \to \infty$.


# Legge dei grandi numeri

Cioè all'aumentare di n:
$E(\bar{x} - \mu)^2 \to 0$ se $n \gg 0 (\bar{x} \approx \mu)$

Se fisso un errore di misura $\varepsilon$
$$
P(|\bar{x} - \mu| < \varepsilon) ?
$$
Se $n \gg 0$ questa probabilità va a $1 \forall \varepsilon > 0$

---

$$P(|\bar{x} - \mu| < \varepsilon) \geq 1 - \frac{\var(\bar{x})}{\varepsilon^2 = 1 - \frac{\sigma^2}{n\varepsilon^2}} \xrightarrow{n \to +\infty} 1 \forall \varepsilon > 0$$
$\implies \lim_{ n \to \infty }P(|\bar{x}-\mu| < \varepsilon) \geq 1 \implies \lim_{ n \to \infty }P(|\bar{x} - \mu| < \varepsilon) = 1\quad\forall \varepsilon > 0$

Questa è la **Legge debole dei grandi numeri**


La legge forte dei grandi numeri:
$$
P(\lim_{ n \to \infty } \bar{x}_{n} = \mu) = 1
$$
