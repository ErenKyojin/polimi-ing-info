---
aliases: 
creation date: 2023-05-17 14:30
modification date: 2023-05-17 14:30
---

## Ricorrenze
[[teorema dell'esperto|teorema principale]]
Data una ricorrenza $T(n) = aT\left( \frac{n}{b} \right) + f(n)$
 con $a \geq 1$
 $b > 1$
 $f$ una certa funzione (detta forzante)
 si ha
1. Se $f(n) = O(n^{\log_{b}(a)-\varepsilon})$ allora $T(n) = (n^{\log_{b}(a)})$
2. Se $f(n) = \Theta(n^{\log_{b}(a)})$ allora $T(n) = \Theta(n^{\log_{b}(a)}\log n)$
3. Se $f(n) =\Omega(n^{\log_{b}(a) + \varepsilon})$ ed è regolare allora $T(n) = \Theta(f(n))$

Regolare significa che
$\exists c < 1, \exists n_{0} \in \mathbb{N} t.c. \forall n \geq n_{o}$ 
$$af\left( \frac{n}{b} \right) \leq c f(n)$$

$\forall h,k \geq 0$
$$n^k\log^h(n) \text{ è regolare}$$

Data $T(n) = aT\left( \frac{n}{b} \right) + n^k\log^h(n)$
$$ T(n) = \begin{cases}
\Theta(n^{\log_{b}(a)}) \quad&se\ \log_{b}(a) > k \\
\Theta(n^k \log^{h + 1}(n)) &se\ \log_{b}(a) = k \\
\Theta(n^k \log^h (n)) &se\ 0 \leq \log
\end{cases} $$