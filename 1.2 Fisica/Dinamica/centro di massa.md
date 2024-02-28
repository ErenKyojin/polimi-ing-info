---
aliases: 
creation date: 2023-04-12 16:04
modification date: 2023-04-12 16:04
---

Il centro di [[massa]], indicato con il simbolo $CM$, è un punto (fittizio) la cui posizione è la [[Valore atteso|media]] delle posizioni dei [[Punto materiale|punti materiali]] del sistema, pesate rispetto alla loro massa.
Il vettore posizione corrispondente vale dunque:
$$ \vec{r}_{CM} = \sum_{i = 1}^n  \frac{m_{i}}{M}\vec{r}_{i} = \frac{\sum_{i = 1}^nm_{i}\vec{r}_{i}}{M}$$
con $M = \displaystyle\sum_{i = 1}^n m_{i}$ massa totale del sistema


Nota la risultante delle [[forze esterne]], senza bisogno di conoscere le singole interazioni interne ed esterne, possiamo ricavare il [[moto]] del CM grazia alla prima equazione cardinale. Infatti, se deriviamo l'equazione che definisce il vettore posizione del centro di massa rispetto al tempo otteniamo:
$$ \vec{v}_{CM} \equiv \frac{d\vec{r}_{CM}}{dt} = \frac{\sum_{i = 1}^n m_{i}\vec{v}_{i}}{M} = \frac{\sum_{i = 1}^{n}\vec{p}_{i}}{M} = \frac{\vec{p}}{M} \implies \vec{p} = M \cdot \vec{v}_{CM}  $$

>[!oss]
>La [[Quantità di moto]] totale è pari al prodotto della massa totale per la velocità del centro di massa.
>Derivando ancora rispetto al tempo e tenendo conto della prima equazione cardinale si ottiene:
> $$ \vec{F}^{(E)} = \frac{d\vec{p}}{dt} = M \cdot \vec{a}_{CM}  $$

Possiamo quindi enunciare il seguente

>[!teorema] Teorema del centro di massa
>In un sistema di riferimento inerziale, il centro di massa di un sistema di punti materiali si muove come un punto materiale di massa pari alla massa totale del sistema e soggetto alla risultante delle forze esterne applicate al sistema

>[!oss]
>L'utilità del CM si comprende immediatamente alla luce del suddetto teorema, infatti il moto del CM, al contrario del moto dell'$i$-esimo punto del sistema, dipende solo dalla risultante delle forze esterne, non dalla configurazione di tali forze e neppure dalle forze interne.
>Tale moto fornisce tuttavia solo delle informazioni medie sul sistema

>[!oss]
>Dal teorema del centro di massa discende immediatamente un'importante proprietà: se il sistema è isolato le forze esterne sono nulle e quindi il CM si muove di moto rettilineo uniforme oppure è in quiete in un sistema di riferimento inerziale.

# ANKI

```anki
id: 1705511622451
deck: Fisica
---
Centro di massa
===
Il centro di massa CM è un punto fittizzio la cui posizione è la media delle posizioni dei punti materiali del sistema pesate rispetto alla massa, il vettore posizione corrispondente vale dunque:
$$ \vec{r}_{CM} = \sum_{i = 1}^n \frac{m_i}{M}\vec{r}_i = \frac{\sum_{i = 1}^n m_i \vec{r}_i}{M} $$.
Con $M$ = $\sum_{i = 1}^n m_i$ massa totale del sistema.

Possiamo ricavare il moto del centrodi massa se conosciamo la risultante delle forze esterne grazie all'equazione cardinale
$$ \vec{v}_{CM} \equiv \frac{d\vec{r}_{CM}}{dt} = \frac{\sum_{i = 1}^n m_i \vec{v}_i}{M} = = \frac{\sum_{i =1}^n \vec{p}_i}{M} = \frac{\vec{p}}{M} \implies \vec{p} = M \cdot \vec{v}_{CM} $$
```


```anki
id: 1705511626475
deck: Fisica
---
Teorema del centro di massa
===
In un sistema di riferimento inerziale, il centro di massa di un sistema di punti materiali si muove come un punto materiale di massa pari alla massa totale del sistema e soggetto alla risultante delle forze esterne applicate al sistema
```