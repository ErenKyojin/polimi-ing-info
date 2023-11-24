---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

Aumentando la temperatura osserviamo che i corpi generalmente si dilatano.

> [!def] dilatazione lineare
> Si parla di dilatazione lineare se un corpo ha una dimensione molto maggiore delle altre, si osserva che al variare di T varia questa dimensione
> $$ l(T) = l_{0}(1 + \alpha\Delta T) $$
> con $\Delta T = T - T_{0}$ e $l_{0} = l(T_{0})$
> Possiamo scrivere $\Delta l$ come 
> $$ \Delta l = l_{0} \alpha \Delta T $$
> e quindi avremo $\alpha = \frac{1}{l_{0}} \frac{\Delta l}{\Delta T}$


>[!def] dilatazione cubica
>Si parla invece di dilataazione cubica se un copo ha 3 dimensioni comparabile e aumenta di volume all'aumentare di $T$. Immaginiamo quindi un parallelepipedo di un certo materiale, avremo:
>$$ \begin{align}
>V &= l_{1}l_{2}l_{3} = l_{1,0}(1 + \alpha \Delta T) l_{2,0}(1 + \alpha\Delta T) l_{3,0} (1 + \alpha\Delta T) = \\
> &= l_{1,0}l_{2,0}l_{3,0}(1 + 3\alpha\Delta T + \underbrace{ 3\alpha^2\Delta T^2 + \alpha^3 \Delta T^3 }_{ \text{trascurabile} }) \\
&\approx V_{0} (1 + 3\alpha\Delta T) = V_{0}(1 + \beta\Delta T)
>\end{align} $$
>con $\beta = 3\alpha$ e $V_{0}=l_{1,0}l_{2,0}l_{3,0}$

# ANKI

```anki
deck: Fisica
---
Dilatazione lineare
===
Se un corpo ha una dimensione molto maggiore delle altra, al variare di T varia queste dimensione, in particolare
$$
\Delta l = l_0 \alpha \Delta T
$$
```


```anki
deck: Fisica
---
Dilatazione cubica
===
Se un corpo ha tre dimensioni simili ed il suo volume aumenta all'amentare di T, in particolare
$$ V \approx V_0 (1 + \beta \Delta T)\qquad \beta = 3\alpha $$
```
<% tp.file.cursor(3) %>