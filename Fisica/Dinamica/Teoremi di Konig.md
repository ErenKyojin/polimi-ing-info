---
aliases: 
creation date: 2023-04-14 10:34
modification date: 2023-04-14 10:34
---

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
- $\displaystyle\sum_{i = 1}^n \vec{r}_{i}' \times m_{i}\vec{v}_{CM} = \left( \displaystyle\sum_{i = 1}^n \frac{m_{i}}{M} \right) \times M\vec{v}_{CM} = \vec{r}_{CM}'$
- 