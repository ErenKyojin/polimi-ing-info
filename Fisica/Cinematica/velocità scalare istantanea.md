---
aliases:
creation date: 2023-03-16 14:34
modification date: 2023-03-16 14:34
---

Se la velocità scalare media tra due istanti di tempo non è costante il moto si dice vario e si definisce la velocità scalare istantanea come
$$
v(t) \equiv \lim_{ \Delta t \to 0 }  \frac{s(t+\Delta t)-s(t)}{\Delta t} = \lim_{ \Delta t \to 0 } \frac{\Delta s}{\Delta t} = \frac{ds}{dt}
$$


Risulta anche che $v = v(t) = \tan(\alpha(t))$.
Ossia che la velocità scalare istantanea nel diagramma orario è pari al coefficiente angolare della retta tangente alla curva nel punto $(t,s(t))$ del diagramma orario


## Calcolo della legge oraria a partire dall'andamento della velocità
$$
s_{n} - s_{0} = \sum_{i=1}^n (s_{i} - s_{i-1}) = \sum_{i = 1}^n v_{m}(t_{i-1},t_{i})\cdot(t_{i}-t_{i-1}) = \sum_{i=1}^nv_{mi}\Delta t_{i}
$$
Passando al limite per $\Delta t_{i} \to 0$ si ottiene:
$$
\fbox{$s(t) = s(t_{0}) + \int _{t_{0}}^t \!v(t') \, \mathrm{d}t'$}
$$

