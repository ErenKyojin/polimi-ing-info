---
aliases: 
creation date: 2024-02-20
---

> [!def] modello
> Rappresentazione approssimativa dela realtà (di un sistema)

> [!def] modello matematico
> insieme di equazioni che descrivono le relazioni tra variabili d'ingresso e uscità di un sistema

>[!example] pendolo
>$$I \frac{d^2}{dt^2}x_{1} = u(t) - mlg\sin(x_{1})-\beta \frac{d}{dt}x_{1}$$
>Problema, equazione di secondo ordine
>stato:
>$$ x(t) = \begin{bmatrix}
>x_{1}(t) \\
>\omega(t)
>\end{bmatrix} \begin{rcases}
>\text{ pos } \\
>\text{ vel }
>\end{rcases}$$
>
>$$ \begin{cases}
>\frac{d}{dt}x_{1} = \omega (t) \\
>\frac{d}{dt} \omega = \frac{1}{I}[u(t) - mlg\sin(x_{1}) - \beta \omega]  
>\end{cases} \quad \text{modello di stato}$$
>
>Uscita
>$$ y(t) = l(1-\cos(x_{1})) $$
