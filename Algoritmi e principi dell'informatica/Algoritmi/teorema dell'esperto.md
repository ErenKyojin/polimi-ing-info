---
aliases: 
creation date: 2023-05-02 12:33
modification date: 2023-05-02 12:33
---

> [!teorema]
> Data la ricorrenza
> $$T(n) = aT(n / b) + f(n)$$
> Con $a \geq 1, b > 1$ e $n/b$ uguale o a $\lfloor n / b \rfloor$ o $\lceil n / b \rceil$
> - Se $f(n) = O(n^{\log_{b} a - \varepsilon})$ per qualche $\varepsilon > 0$ allora $T(n) = \Theta(n^{\log_{b}a})$
> - Se $f(n)= \Theta(n^{\log_{b}(a)})$ allora $T(n) = \Theta(n^{\log_{b}(a)} \log(n))$
> - Se $f(n) = \Omega(n^{\log_{b}(a + \varepsilon)})$ per qualche $\varepsilon > 0$ e $af(n / b) \leq cf(n)$ per qualche $c < 1$ e per tutti gli $n$ grandi a sufficienza allora $T(n) = \Theta(f(n))$

 Se $f(n)$ è una funzione $\Theta(n^k)$ con $k$ qualche costante:
 1. Se $k < \log_{b}(a) \implies T(n)=\Theta(n^{\log_{b}(a)})$
 2. Se $k = \log_{b}(a) \implies T(n) = \Theta(n^k \log(n))$
 3. Se $k < \log_{b}(a) \implies T(n) = \Theta(n^k)$

Abbiamo un ulteriore risultato

## Ricorrenze lineari di ordine costante
Data la ricorrenza
$$ T(n) = \begin{cases}
\Theta(1) \qquad &\text{se } n \leq m \leq h \\
\sum_{1 \leq i \leq h} a_{i}T(n-1)+cn^k &\text{se } n > m
\end{cases} $$
In cui poniamo $a= \sum a_{i}$
allora abbiamo che
- Se $a = 1 \implies T(n)= O(n ^{k + 1})$
- Se $a \geq 2 \implies T(n) = O(a^nn^k)$