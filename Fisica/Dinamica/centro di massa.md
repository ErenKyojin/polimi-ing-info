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
>La [[quantità di moto]] totale è pari al prodotto della massa totale per la velocità del centro di massa.
>Derivando ancora rispetto al tempo e tenendo conto della prima equazione cardinale si ottiene:
> $$ \vec{F}^{(E)} = \frac{d\vec{p}}{dt} = M \cdot \vec{a}_{CM}  $$

Possiamo quindi enunciare il seguente
>[!teorema] Teorema del centro di massa