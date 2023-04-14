---
aliases: 
creation date: 2023-04-14 10:34
modification date: 2023-04-14 10:34
---

## Primo teorema di Konig

Consideriamo un SdR solidale con il [[centro di massa]], con l'origine in esso e con orientazione fissa rispetto ad un sistema inerziale (un tale SdR è detto SdR C), il suo [[moto di trascinamento]]  è traslatorio puro.
Le leggi di composizione del vettore posizione e del vettore velocità per l'$i$-esimo punto sono:
$$ \vec{r}_{i} = \vec{r}_{i}' + \vec{r}_{CM}\qquad \vec{v}_{i} = \vec{v}_{i}' + \vec{v}_{CM}$$
Essendo $\vec{r}_{i}'$ e $\vec{v}_{i}'$ la posizione e la velocità relative al sistema $C, \vec{r}_{i}$ e $\vec{v}_{i}$ quelle riferite al sistema inerziale (fisso), $\vec{r}_{CM}$ e $\vec{v}_{CM}$ quelle del centro di massa (nel sistema inerziale fisso).
Il [[momento angolare]] del sistema, nel riferimento inerziale, si scrive
$$ \begin{align}
\vec{L} &= \sum_{i = 1}^n \vec{r}_{i} \times m_{i}\vec{v}_{i} = \sum^n_{i = 1}(\vec{r}_{i} + \vec{r}_{CM}) \times m_{i}(\vec{v}_{i}' + \vec{v}_{CM}) =  \\
&=\sum_{i = 1}^n \vec{r}_{i} \times m_{i}\vec{v}_{i}' + \sum_{i  =1}^n\vec{r}_{i}' \times m_{i}\vec{v}_{CM} +\sum_{i = 1}^n\vec{r}_{CM} \times m_{i}\vec{v}_{i}' + \sum_{i = 1}^n \vec{r}_{CM} \times m_{i}\vec{v}_{CM}
\end{align}$$
Osserviamo ora che:
- $\displaystyle\sum_{i = 1}^n \vec{r}_{i}' \times m_{i}\vec{v}_{i} ' = \vec{L}_{O'}' = \vec{L}_{CM}'$ trovandosi l'origine $O'$ del SdR C nel CM
- $\displaystyle\sum_{i = 1}^n \vec{r}_{i}' \times m_{i}\vec{v}_{CM} = \left( \displaystyle\sum_{i = 1}^n \frac{m_{i}}{M} \right) \times M\vec{v}_{CM} = \vec{r}_{CM}' \times \vec{v}_{CM} = 0$ essendo $\vec{r}_{CM}' = 0$ nel SdR C
- $\displaystyle \sum_{i = 1}^n \vec{r}_{CM} \times m_{i}\vec{v}_{i}' = M\vec{r}_{CM} \times \sum_{i = 1}^n \dfrac{m_{i}}{M}\vec{v}_{i}' = M\vec{r}_{CM} \times \vec{v}_{CM}' = 0$, essendo $\vec{v}_{CM}' = 0$ nel SdR C
- $\displaystyle \sum_{i = 1}^n \vec{r}_{CM} \times m_{i}\vec{v}_{CM} = \vec{r}_{CM} \times \left( \sum_{i = 1}^n m_{i} \right) \vec{v}_{CM} = \vec{r}_{CM} \times M\vec{v}_{Cm} = \vec{L}_{O}^{(CM)}$

Abbiamo dimostrato il seguente teorema:

>[!teorema] Primo teorema di Konig
>Il momento angolare di un sistema di punti materiali in un riferimento inerziale è pari alla somma del momento angolare del centro di massa e del momento angolare del sistema rispetto al centro di massa (cioè nel sistema di riferimento C)
>$$ \vec{L}_{O} = \vec{L}_{O}^{(CM)} + \vec{L}_{CM}' $$


## Secondo teorema di Konig
In modo analogo possiamo calcolare l'energia cinetica del sistema nel riferimento inerziale
$$ \begin{align}
E_{c}  & = \sum_{i = 1}^n \frac{1}{2}m_{i}v_{i}^2 = \sum_{i = 1}^n \frac{1}{2}m_{i}\vec{v}_{i} \cdot \vec{v}_{i} = \sum_{i = 1}^n \frac{1}{2}m_{i}(\vec{v}_{i}' + \vec{v}_{CM}) \cdot (\vec{v}_{i}' + \vec{v}_{CM})
 \\
&= \sum_{i = 1}^n \frac{1}{2 } m_{i}\left( v_{i}'^2 + v_{CM}^2 + 2\vec{v}_{i}' \cdot \vec{v}_{CM}  \right) = \sum_{i = 1}^n \frac{1}{2}m_{i}v_{i}'^2 + \frac{1}{2}Mv^2_{CM} + \vec{v}_{CM} \cdot \sum_{i = 1}^n m_{i}\vec{v}_{i}'
\end{align} $$
L'ultimo addendo della somma è nullo, essendo:
$$ \sum_{i=1}^n m_{i}\vec{v}_{i}' = M\left( \sum_{i =1}^n \frac{m_{i}}{M}\vec{v}_{i}'\right) = M\vec{v}_{CM}' = 0\qquad \text{nel SdR C} $$
abbiamo quindi dimostrato il seguente:

>[!teorema] Secondo teorema di Konig
>L'energia cinetica di un sistema di punti materiali rispetto ad un riferimento inerziale è pari alla somma dell'energia cinetica del centro di massa e dell'energia cinetica del sistema di punti rispetto al centro di massa (cioè nel sistema di riferimento $C$).
>$$ E_{c} = \frac{1}{2}Mv_{CM}^2 + \sum_{i = 1}^n \frac{1}{2}m_{i}v_{i}'^2 = E_{c}^{(CM)} + E_{C}'$$

>[!oss]
>Il centro di massa, dunque, descrive le proprietà globali del sistema per quanto riguarda la quantità di moto totale e la risultante delle forze esterne, ma non per quanto riguarda il momento angolare e l'energia cinetica. Infatti:
>$$ \vec{p} = M \cdot \vec{v}_{CM}\qquad \vec{F}^{(E)} = \frac{d\vec{p}}{dt} = M \cdot \vec{a}_{CM} $$
>E si può dimostrare che
>$$ \vec{L}_{O} = \vec{L}_{O}^{(CM)} + \vec{L}_{CM}'\qquad E_{c} = E_{c}^{(CM)} + E_{c}' $$
>Nelle precedenti quazioni
