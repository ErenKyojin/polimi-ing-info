---
aliases: Forza di superficie
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

> [!def]
> Consideriamo una superficie di area S, la pressione è definita come
> $$ p = \frac{F_{n}}{S} = |\vec{F} \cdot \frac{\hat{n}|}{S} $$
> La pressione è uno scalare la qui unità di misura è $[p] = \frac{N}{m^2} = Pa$ ([[pascal]])
>
>Quindi la forza di superficie si può definire come $dF_n = p\ \d S$

>[!oss]
>La pressione dipende o meno dall'orientazione della superficie considerata in un fluido all'equilibrio? Per rispondere consideriamo un elemento $\d m$ di fluido
>Tutte le forze orizzontali e verticali all'equilibrio si devono compensare:
>$$ \begin{cases}
>\d F_{A} = \d F_{C} \cos(\theta) \\
>\d F_{B} = \d F_{C} \sin(\theta)
>\end{cases} $$
>
>Ricordando la definizione di forza di superficie:
>$$ \begin{cases}
>\d F_{A} = p_{A} \d S_{A} \\
>\d F_{B} = p_{B} \d S_{B} \\
>\d F_{C} = p_{C} \d S_{C}
>\end{cases} $$
>
>Sostituendo nel sistema precedente:
>$$ \begin{cases}
>p_{A} \d S_{A} = p_{C} \d S_{c} \cos(\theta) \\
>p_{B} \d S_{B} = p_{C} \d S_{c} \sin(\theta)
>\end{cases} $$
>Sostituendo $\d S_{A} = \d x\d z$, $\d S_{B} = \d y \d z$, $\d S_{C}=\d l \d z$
>abbiamo
>$$ p_{A} = p_{B} = p_{C} = p $$
>La pressione è una quantità scalare che non dipende dall'orientamento della superficie

# ANKI

```anki
id: 1705511621802
deck: Fisica
---
Pressione
===
Consideriamo una supericie di area S, la pressione è definita come 
$$ p = \frac{F_n}{S} = \left|\vec{F} \cdot \frac{\hat{n}}{S}\right| $$
Lapressione è uno scalare la qui unità di misura è $[p] = N/m^2 = Pa$.
La superficie si può definire come $dF_n = p dS$
```
