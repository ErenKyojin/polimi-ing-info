---
aliases: 
creation date: 2024-02-20
---


> [!def]
> Se l'uscità $y(t)$ è determinata dall'ingresso al tempo $t$ e da tutto il suo andamento passato o futuro
>
>$$ \frac{d^n}{dt^n}y(t) + a_{n-1} \frac{d^{n-1}}{dt^{n-1}}y(t) + \dots + a_{1} \frac{d}{dt}y(t) + a_{0}y(t) = f(t)  $$

Un forno è un **sistema dinamico**, se cambio la temperatura non avviene istantaneamente.
Una valvola è un **sistema statico**, se cambio la rotazione il flusso cambia immediatamente.

>[!esempio] forno
> ingresso: $v_{IN}(t), \theta_{E}$ (temperatura esterna, nel modello è un disturbo)
> uscità: $\theta_{i}$
> Parametri: $R_{e}, R_{T},C_{T}$
> 
> $G=mc$
> $\theta_{i} =$ temperatura interna
> $$ \begin{align}
>G \cdot \frac{d}{dt} \theta_{i} &= q_{in} - q_{out}  \\
>G \frac{d}{dt}\theta_{i}&= \left( \frac{V_{in}^2(t)}{R_{e}} - \frac{\theta_{i} - \theta_{e}}{R_{T}} \right) 
>\end{align} $$


>[!esempio] sistema pendolo
>$I \frac{d^2}{dt^2}x_{1}(t) = u(t) - mgl \cdot \sin(x_{1}(t)) - \beta x_{1}(t)$ 
>$u(t)$ - coppia d'ingresso
>coppia gravitazionale
>attrito viscoso

## Sistema causale e non causale
Un sistema dinamo è causale se $y(t)$ dipende dagli ingressi al tempo $t$ e dall'andamento passato

L'opposto è detto sistema non causale

