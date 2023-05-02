---
aliases: 
creation date: 2023-05-02 12:33
modification date: 2023-05-02 12:33
---

Data la ricorrenza
$$T(n) = aT(n / b) + f(n)$$
Con $a $
- Se $f(n) = O(n^{\log_{b} a - \varepsilon})$ per qualche $\varepsilon > 0$ allora $T(n) = \Theta(n^{\log_{b}a})$
- Se $f(n)= \Theta(n^{\log_{b}(a)})$ allora $T(n) = \Theta(n^{\log_{b}(a)} \log(n))$
- Se $f(n) = \Omega(n^{\log_{b}(a + \varepsilon)})$ per qualche $\varepsilon > 0$ e $af(n / b) \leq cf(n)$ per qualche $c < 1$ e per tutti gli $n$ grandi a sufficienza allora $T(n) = \Theta(f(n))$


