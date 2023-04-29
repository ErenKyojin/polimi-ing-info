---
aliases: 
creation date: 2023-04-29 14:32
modification date: 2023-04-29 14:32
---

> [!def]
> Chiamiamo **funzione inversa** di una [[Funzioni|funzione]] $f : A \to B$, una funzione $g : B \to A$, se esiste, t.c. $f \cdot g = \imath_{A}$ e $g \cdot f = \imath_{B}$.
> Una funzione $h : B \to A$ per cui si abbia $f \cdot h = \imath_{A}$ si dice **inversa destra** di $f$; una funzione $k : B \to A$ per cui si abbia $k \cdot f$ si dice **inversa sinistra** di $f$. 

Sussistono i seguenti teorema:

>[!teorema]
>Condizione necessaria e sufficiente affinchè $f$ ammetta inversa destra è che $f$ sia [[Funzione iniettiva|iniettiva]].
>
>>[!dim]
>>Se $f$ ammette inversa destra $h$ allora $f$ è iniettiva in quanto $\imath_{A} = f \cdot h$ e $\imath_{A}$ è iniettiva. Viceversa se $f$ è iniettiva costruiamo una sua inversa destra ampliando la drelazione inversa di $f$. Infatti per ogni $b \in B$, se $b$ ammette una contrimmagine, che indichiamo con $a_{b}$, poniamo $h(b) = a_{b}$, mentre se $b$ non ha controimmagini allora poniamo $h(b) = a$ per un fissato elemento di $a \in A$. La $h$ è ovviamente una funzione ed è inversa destra di $f$, infatti per ogni $x \in A$ si ha $f \cdot h(x) = h(f(x)) = x$, quindi $f \cdot h = \imath_{A}$

>[!teorema]
>Condizione necessaria e sufficiente affinchè $f$ ammetta inversa sinistra è che $f$ sia [[Funzione suriettiva|suriettiva]]  (la condizione sufficente utilizza il postulato della scelta)
>
>>[!dim]
>>Se $f$ ammette inversa sinistra $k$ allora $f$ è suriettiva in quanto $\imath_{B} = k \cdot f$ e $\imath_{B}$ è suriettiva. Viceversa se $f$ è suriettiva costruiamo una sua inversa sinistra come [[Relazioni|relazione]] contenuta nella relazione inversa di $f$. Infatti supponiamo di poter scegliere per ogni $b \in B$ nell'insieme delle controimmagini di $b$ un elemento $a_{b}$ e poniamo $k(b) = a_{b}$. La $k$ è ovviamente una funzione ed è inversa sinistra perchè per ogni $b \in B$ si ha $k \cdot f(b) = f(k(b)) = f(a_{b}) = b$ cioè $k \cdot f = \imath_{B}$


