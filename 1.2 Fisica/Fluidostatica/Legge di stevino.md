---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

Considerando un fluido immerso nel campo gravitazionale terrestre, applicando il principio di pascal, possiamo scrivere che
$$ \nabla p = \delta \vec{g} $$

in un sistema di riferimento cartesiano
$\vec{\nabla} p = - \delta g \hat{u}_{z}$
esplicitando quindi le componenti:
$$ \frac{ \partial p }{ \partial x } =0\quad;\quad \frac{ \partial p }{ \partial y } =0 \quad ; \quad \frac{ \partial p }{ \partial z } = - \delta g $$
Per un fluido immerso nel campo gravitazionale la pressione varia con z, integrando si ottiene:
$$ \partial p = -\delta g \partial z \implies \int _{p_{1}} ^{p_{2}}\! \partial p\, = \int _{z_{1}}^{z_{2}} \!- \delta g \partial z\, \implies p_{2} - p_{1} = \int _{z_{1}}^{z_{2}} \!- \partial g \, \mathrm{\delta}z    $$
considerando un fluido omogeneo, con densità costante, l'equazione diventa
$$ p_{2} - p_{1} = \int _{z_{1}}^{z_{2}} \!-\partial g \, \mathrm{\delta}x \implies p_{2} - p_{1} = -\delta \int _{z_{1}}^{z_{2}} \!g \partial z \implies p_{2}-p_{1} = \, \mathrm{\delta}g(z_{1}-z_{2})   $$

Quindi possiamo scrivere
>[!legge] legge di stevino
>La differenza di pressione tra due punti di un fluido in equilibrio è data dalla pressione esercitata dalla colonna di fluido di altezza $h$ uguale alla differenza di quota tra i due punti:
>$$ p_{2} - p_{1} = \delta gh $$
>Tutte le superfici con la medesima pressione sono dette isobare

Considerando il principio di pascal
$\vec{\nabla} p = \vec{p}$
se le forze di volume sono conservative allora $\vec{p} = - \nabla V$ (con V funzione potenziale), il principo di pascal diventa:
$$ \vec{\nabla}p = - \vec{\nabla} V $$
Quindi superfici isobare sono dette equipotenziali (e viceversa)

# ANKI

```anki
id: 1705511621826
deck: Fisica
---
Legge di stevino
===
La differenza di pressione tra due punti di un fluido in equilibrio è data dalla differenza dalla pressione esercitata dalla colonna di fluido di altezza $h$ uguale alla differenza di quota tra i due punti $$p_2 - p_1 = \delta gh$$

Le superfici con la medesima pressioen sono dette isobare
```
