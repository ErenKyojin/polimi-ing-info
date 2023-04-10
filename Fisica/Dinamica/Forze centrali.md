---
aliases: 
creation date: 2023-04-10 11:59
modification date: 2023-04-10 11:59
---

# planarità del [[moto]]
In un campo di forze centrali avremo sempre
$$
\vec{F}(\vec{r}) \parallel \vec{r} \implies \frac{d\vec{L}}{dt} = \vec{r} \times \vec{F} = 0 \implies \vec{L} = \cost 
$$
e quindi il moto è piano
Si tratta di una delle caratteristiche principali dei campi di [[forza|forze]] centrali:

>[!proposizione]
>In un campo di forze centrali il momento angolare rispetto al centro di una forza si conserva.

>[!oss]
>Non è vera, in generale, l'implicazione inversa. Se infatti il momento angolare è costante, avremo certamente che il [[momento]] della [[forza risultante]] si annulla, ma ciò puó corrispondere a due situazioni differenti:
>1. $\vec{F}(\vec{r}) \parallel \vec{r} \implies$ il [[punto materiale]] $P$ si muove effettivamente in un [[GAL/campo|campo]] di forze centrali di centro di forza $O$
>2. Il punto materiale $P$ non è soggetto ad alcuna interazione e quindi si muove di [[moto rettilineo]] uniforme

## [[Energia potenziale]] centrifuga in un campo di forze centrali
L'energia meccanica di un punto materiale $P$ di massa $m$ che si muove con velocità scalare $v$ in un campo di forze centrali e si trova a distanza $r$ dal centro delle forze $E = E_{p}(r) + \dfrac{1}{2}mv^2$.
Poichè il punto si muove in un campo di forze centrali, il moto è piano (il [[momento angolare]] si conserva, ed in particolare la sua [[direzione]] resta costante). Scriviamo allora la [[velocità vettoriale]] di $P$ in un sistema di coordinate polari nel piano del moto e con origine nel centro di forza del campo:
$$ \vec{v} = \frac{dr}{dt}\hat{u}_{r} + r\frac{d\theta}{dt}   $$
Dunque il quadrato della velocità scalare è
$$ v^2 = \vec{v} \cdot \vec{v} = \vec{v}_{r}^2 + \vec{v}_{\theta}^2 = \left( \frac{dr}{dt}  \right)^2 + r^2\left( \frac{d\theta}{dt}  \right)^2 $$
Sostituendo questa espressione in quella dell'[[energia meccanica]] otteniamo:
$$ E = E_{p}(r) + \frac{1}{2}m\left( \frac{dr}{dt}  \right)^2 + \frac{1}{2}mr^2\left( \frac{d\theta}{dt}  \right)^2 $$
Consideriamo ora il momento angolare del punto materiale rispetto al centro di forza del campo
$$ \vec{L}= m $$