---
aliases: 
creation date: 2024-06-28
---

> [!def]
> Una misura è un insieme finito e discreto di valori sperimentali, l'interpolazione è una funzione che passa per i punti e ne approssima quindi l'andamanto


### Interpolazione lineare
Colleghiamo con una retta ogni coppia di punti
- <b style="color: #a6da95">Vantaggi:</b> semplice implementazione
- <b style="color: #ed8769 ">**Svantaggi**:</b> non mantiene derivate

### Interpolazione lineare cubica
Dati due punti $x_{i}$ e $x_{i+1}$, l'interpolazione nell'intervallo i-esimo sarà
$$ S_{i}(x) =ax^3 + bx^2 + cx +d $$
detta spline.

per trovare i parametri $a,b,c, d$
- proprietà di interpolazione: $S(x_{i}) = f(x_{i})$
- continuità delle spline: $S_{i-1}(x_{i} ) =S_{i}(x_{i})$ 
- continuità delle derivate: $s'_{i-1}(x_{i}) =\frac{S'_{i}(x_{i})}{S''(x_{i})}$
- $S(x_i)' = \cost$
- $S(x_{n})'=\cost$

### Inter