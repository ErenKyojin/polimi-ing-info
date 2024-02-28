---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---


## Per le isobare

^3792a2

>[!legge] Legge di Gay-Lussac per le [[trasformazione isobara|isobare]]
>Se in un [[gas]] si mantiene la pressione costante allora il volume del gas è linearmente proporzionale alla temperatura
>$$ V = V_{0}(1 + \beta T)  $$
>Con $V_{0}$ voluem a $0^o C$ e T espressa in [[celsius]]
>in condizioni ideali $\alpha = \beta$ è una costante uguale per tutti i gas perfetti

^24ee84


```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex](0,0) to (4,0) node[right]{V};
\draw[-latex](0,0) to (0,3) node[left]{p};
\draw (0.5,1) to (2.5,1);
\end{tikzpicture}
\end{document}
```

## Per le isocore

^b5585f

>[!legge] Legge di Gay-Lussac per le [[trasformazione isocora|isocore]]
>Se in un [[gas]] si mantiene la pressione costante allora la pressione del gas è linearmente proporzionale alla temperatura
>$$ p = p_{0} (1 + \alpha T) $$
>Con $p_{0}$ pressione a $0^o C$ e T espressa in [[celsius]]
>in condizioni ideali $\alpha = \beta$ è una costante uguale per tutti i gas perfetti

^ea2591

```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex](0,0) to (4,0) node[right]{V};
\draw[-latex](0,0) to (0,3) node[left]{p};
\draw (1,0.5) to (1,2.5);
\end{tikzpicture}
\end{document}
```

# Per i gas ideali

^afef85

Avremo 
$$ \alpha = \beta = \frac{1}{273,15} \ ^o C^{-1} $$
Possiamo scrivere
$$ \begin{align}
&V = V_{0}(1 + \beta T_{^oC}) = V_{0}\beta\left( \frac{1}{\beta} + T_{^o C}  \right) = V_{0} \beta T \\
&p = p_{0}(1 + \beta T_{^o C}) = p_{o}\beta\left( \frac{1}{\beta} +T_{^o C} \right) =p_{0}\beta T
\end{align} $$
dove $T$ è la temperatura espressa in gradi Kelvin:
$$ T = \frac{1}{\beta} + T_{^o C} $$
Quindi un gas perfetto a temperatura di $0 K$ ha pressione e volume nulli. Ovviamente nessun gas rimane ideale a temperatura cosí bassa, che rimane una temperatura limite non raggiungibile ne superabile

# ANKI

```anki
id: 1705831177752
deck: Fisica
---
Legge di gay-lussac per le isobare
===
Se in un gas si mantiene la pressione costante allora il volume del gas è linearmente proporzionale alla T
$$ V = V_0 (1 + \beta T) $$
con
- T in gradi celsius
- $V_0$ volume a 0 gradi celsius

In un piano di clapeyron abbiamo una retta orizzontale
```


```anki
id: 1705831183227
deck: Fisica
---
Legge di Gay-Lussac per le isocore
===
Se in un gas si mantiene il volume costante allora la pressione del gas è linearmente proporzionale alla T
$$ p = p_0 (1 + \alpha T) $$
con 
- T temperatura in gradi celsius
- $p_0$ pressione a 0 gradi celsius
```



```anki
id: 1705831185852
deck: Fisica
---
Leggi di Gay-Lussac per i gas ideali
===
Nelle leggi di Gay-Lussac, sia per le isocore che per le isobare, nelle condizioni di gas perfetto abbiamo $\alpha = \beta = \text{cost.}$,
precisamente
$$ \alpha = \beta = \frac{1}{273.15} \ ^o C^{-1}  $$
possiamo inoltre dire che
$$V = V_0 \beta T \quad;\quad  p =p_0 \beta T$$
con T in Kelvin tale che
$$ T = \frac{1}{\beta} + T_{^o C} $$
Quindi un gas perfetto a temperatura di 0 gradi kelvin ha pressione e volume nulli. Tuttavia nessun gas può arrivare a questa temperatura rimanendo perfetto, ed in generale è una temperatura che non può essere raggiunta ne superata
```
