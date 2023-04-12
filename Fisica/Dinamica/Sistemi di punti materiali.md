---
aliases: sistema di punti materiali
creation date: 2023-04-12 15:04
modification date: 2023-04-12 15:04
---

## Sistemi di particelle, [[forze interne]] e [[forze esterne]]

Un sistema di punti è costituito da un insieme di $n$ [[Punto materiale|punti materiali]] soggetti ad interazioni reciproche e con il mondo esterno.
Il problema generale della dinamica consiste nel determinare la [[legge oraria]] per ciascuno di tali punti (anche generalmente se nei casi con $n \gg 2$ una soluzione in forma analitica non è ottenibile).
La dinamica dei sistemi si occupa invece di determinare le proprietà del [[moto]] del sistema nel suo complessi.

Indicheremo le forze agenti sul punto $i$-esimo del sistema come
[[forze interne]]
[[forze esterne]]
E la risultante delle forze agenti sull'$i$-esimo punto come
$$\vec{F}_{i} = \vec{F}_{i}^{(I)} + \vec{F}_{i}^{(E)}$$
Le forze interne sono quelle dovute alle interazioni con gli altri $n-1$ punti del sistema:
$$ \vec{F}_{i}^{(I)} = \underset{ j \neq i }{ \sum_{j=1}^n } \vec{F}_{ij} $$
Dove con $\vec{F}_{i,j}$ abbiamo indicato la forza (interna) esercitata sull'$i$-esimo punto dal $j$-esimo punto.

>[!proposizione]
>Per la terza legge della [[dinamica]] di Newton avremo che $\vec{F}_{ji} = -\vec{F}_{ij}$ e quindi la risultante di tutte le [[forza|forze]] interne è nulla:
> $$ \vec{F}^{(I)} \equiv \sum_{i = 1}^n \vec{F}_{i}^{(I)} = \sum_{i = 1}^n \underset{ j \neq i }{ \sum_{j = 1}^n } \vec{F}_{ij} = \underset{ j \neq i }{ \sum_{\text{coppie }ij} } (\vec{F}_{ij} + \vec{F}_{ji} = 0)$$

>[!oss]
>Di conseguenza, la somma di tutte le forze agenti sul sistema è pari alla risultante delle sole [[forze esterne]]:
>$$ \vec{F} \equiv \sum_{i = 1}^n \vec{F}_{i} = \sum_{i = 1}^n \vec{F}_{i}^{(I)} + \sum_{i=1}^n \vec{F}_{i}^{(E)} = \sum_{i = 1}^n \vec{F}_{i}^{(E)} = \vec{F}^(E)$$

## Quantità di moto, prima equazione cardinale della dinamica dei sistemi e teorema dell'[[impulso]]

![[Quantità di moto#Quantità di moto in un sistema di punti materiali]]

osserviamo che in base alla seconda legge della dinamica di Newton, il moto di ciascun punto obbedisce all'equazione
$$ \vec{F}_{i} = \vec{F}_{i}^{(I)} + \vec{F}_{i}^{E} = m_{i}\vec{a}_{i} = \frac{d\vec{p}_{i}}{dt} \qquad \forall i  $$