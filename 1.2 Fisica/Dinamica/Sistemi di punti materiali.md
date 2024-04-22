---
aliases: sistema di punti materiali
creation date: 2023-04-12 15:04
modification date: 2023-04-12 15:04
---

## Sistemi di particelle, [[forze interne]] e [[forze esterne]]

Un sistema di punti è costituito da un [[insieme]] di $n$ [[Punto materiale|punti materiali]] soggetti ad interazioni reciproche e con il mondo esterno.
Il problema generale della dinamica consiste nel determinare la [[Legge oraria]] per ciascuno di tali punti (anche generalmente se nei casi con $n \gg 2$ una soluzione in forma analitica non è ottenibile).
La dinamica dei sistemi si occupa invece di determinare le proprietà del [[moto]] del sistema nel suo complessi.

Indicheremo le forze agenti sul punto $i$-esimo del sistema come
[[forze interne]]
[[forze esterne]]
E la risultante delle forze agenti sull'$i$-esimo punto come
$$\vec{F}_{i} = \vec{F}_{i}^{(I)} + \vec{F}_{i}^{(E)}$$
Le forze interne sono quelle dovute alle interazioni con gli altri $n-1$ punti del sistema:
$$ \vec{F}_{i}^{(I)} = \underset{ j \neq i }{ \sum_{j=1}^n } \vec{F}_{ij} $$
Dove con $\vec{F}_{i,j}$ abbiamo indicato la forza (interna) esercitata sull'$i$-esimo punto dal $j$-esimo punto.

>[!proposition]
>Per la terza legge della [[Dinamica]] di Newton avremo che $\vec{F}_{ji} = -\vec{F}_{ij}$ e quindi la risultante di tutte le [[forza|forze]] interne è nulla:
> $$ \vec{F}^{(I)} \equiv \sum_{i = 1}^n \vec{F}_{i}^{(I)} = \sum_{i = 1}^n \underset{ j \neq i }{ \sum_{j = 1}^n } \vec{F}_{ij} = \underset{ j \neq i }{ \sum_{\text{coppie }ij} } (\vec{F}_{ij} + \vec{F}_{ji} = 0)$$

>[!remark]
>Di conseguenza, la somma di tutte le forze agenti sul sistema è pari alla risultante delle sole [[forze esterne]]:
>$$ \vec{F} \equiv \sum_{i = 1}^n \vec{F}_{i} = \sum_{i = 1}^n \vec{F}_{i}^{(I)} + \sum_{i=1}^n \vec{F}_{i}^{(E)} = \sum_{i = 1}^n \vec{F}_{i}^{(E)} = \vec{F}^(E)$$

## Quantità di moto, prima equazione cardinale della dinamica dei sistemi e teorema dell'[[impulso]]

![[Quantità di moto#Quantità di moto in un sistema di punti materiali]]

osserviamo che in base alla seconda legge della dinamica di Newton, il moto di ciascun punto obbedisce all'equazione
$$ \vec{F}_{i} = \vec{F}_{i}^{(I)} + \vec{F}_{i}^{E} = m_{i}\vec{a}_{i} = \frac{d\vec{p}_{i}}{dt} \qquad \forall i  $$
Sommando sull'indice $i$ tutte queste equazioni si ottiene:
$$ \vec{F}^{(E)} = \sum_{i = 1}^n \vec{F}_i = \sum_{i = 1}^n \frac{d\vec{p}_{i}}{dt} = \frac{d\vec{p}}{dt}  $$
Quest'ultima equazione esprime la **Prima equazione cardinale delle dinamica dei sistemi**

>[!theorem]
>In un sistema di riferimento inerziale, la risultante delle forze esterne applicate ad un sistema di punti materiali è pari alla derivata temporale della quantità di moto totale del sistema
> $$ \fbox{$\vec{F}^{(E)} = \frac{d\vec{p}}{dt}$} $$


![[teorema dell'impulso]]

### Principio di conservazione della quantità di moto
>[!theorem]
>In un sistema di riferimento inerziale, un sistema di punti materiali isolato oppure soggetto ad un sistema di forze esterne con risultante nulla conserva la quantità di moto totale.
> $$ \fbox{$\vec{F}^{(E)} = 0 \implies \vec{p} = \cost$} $$
>
>>[!cor]
>>Più in generale, se si annulla la componente della risultante delle forze esterne lungo un dato asse, allora si conserva la componente della quantità di moto totale lungo quell'asse e viceversa:
>> $$ F_{z}^{(E)} = 0 \implies p_{z} = \cost $$

>[!remark]
>Notiamo infine che, in base al teorema dell'impulso, la quantità di moto di un sistema di punti materiali si conserva in un intervallo di tempo infinitesimo anche in presenza di una risultante delle forze esterne non nulla purchè tale risultante sia non impulsiva. Vedremo che tale circostanza assumerà un ruolo chiave nello tudio degli [[urti]] tra punti materiali.

## Centro di massa e teorema del centro di massa
![[centro di massa]]


## Momento angolare, [[Seconda equazione cardinale della dinamica]] dei sistemi

![[Momento#momento nei Sistemi di punti materiali]]

![[momento angolare#momento angolare per Sistemi di punti materiali]]



![[Energia cinetica#energia cinetica in un sistemi di punti materiali sistema di punti materiali]]

# Teoremi di Konig

![[Teoremi di Konig]]

![[energia meccanica]]

# ANKI

```anki
id: 1705511622550
deck: Fisica
---
Sistema di punti
===
Un sistema di punti è costituito da un insieme di $n$ punti materiali soggetti a interazioni reciproche e con il mondo esterno.
```


```anki
id: 1705511626552
deck: Fisica
---
Risultante su un $i$-esimo punto materiale
===
La risultante delle forze agenti sull $i$-esimo punto è
$$ \vec{F}_i = \vec{F}_i^{(I)} + \vec{F}_i^{(E)}$$

Le forze interne sono dovute alle interazioni con gli altri $n-1$ punti del sistema:
$$ \vec{F}_i^{(I)} = \sum_{j = 1, j \neq i}^n \vec{F}_{i,j}$$
dove con $\vec{F}_{i,j}$ abbiamo indicato la forza interna esercitata sull'$i$-esimo punto dal $j$-esimo punto.

Notiamo che per la terza legge della dinamica la risultante di tutte le forze interne è nulla
```


```anki
id: 1705511628675
deck: Fisica
---
Prima equazione cardinale della dinamica dei sistema
===
In un sistema di riferimento iniziale, la risultante delle forze esterne applicate ad un sistema di punti materiali è pari alla derivata temporale della quantità di moto totale del sistema
$$\vec{F}^{(E)} = \frac{d\vec{p}}{dt}$$
```


```anki
id: 1705511629876
deck: Fisica
---
Principio diconservazione della quantità di moto in un sistema di punti materiali
===
In un sistema di riferimenti inerziale, un sistema di punti materiali isolato oppure soggetto ad un sistema di foze esterne con risultante nulla conserva la quantità di moto totale
$$ \vec{F}^{(E)} = 0 \implies \vec{p} = cost $$
```

