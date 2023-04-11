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
$$ \vec{L}= m \vec{r} \times \vec{v} = m(\vec{r} \times v_{r}\hat{u}_{r} + \vec{r} \times v_{\theta}\hat{u}_{\theta}) = mrv_{\theta}\hat{u}_{r} \times \hat{u}_{\theta} = mr^2 \frac{d\theta}{dt}\hat{u}_{z} $$

>[!oss]
>Osserviamo che l'ultimo termine nell'espressione dell'energia meccanica può essere riscritto in funzione del modulo del momento angolare, che è anche una costante del moto. Tale termine energetico prende il nome di energia potenziale centrifuga del punto materiale $P$ nel campo di forze centrali
>$$ \frac{1}{2}mr^2\left( \frac{d\theta}{dt}  \right)^2 = \frac{L^2}{2mr^2} = E_{p} $$
>Poichè infatti questo termine non dipende esplicitamente dal modulo della velocità scalare, ma solo dalla distanza $r$, come l'energia potenziale, può essere interpretato come se fosse un'energia potenziale, benchè sia in realtà ricavato dall'espressione dell'[[energia cinetica]].
>Il suo effetto è lo stesso che avrebbe una forza repulsiva (centrifuga appunto)


## Energia potenziale efficace in un campo di forze centrali
Definiamo un'energia potenziale efficace del campo di forze centrale, come la somma dell'energia potenziale della forza del campo e dell'energia potenziale centrifuga:
$$ E_{P}^{(eff)} \equiv E_{P} + E_{P}^{(\mathit{centr})} = E_{P}(r) + \frac{L^2}{2mr^2} $$
Si può mostrare che l'energia potenziale efficace rappresenta l'energia potenziale totale del punto materiale in un sistema di riferimento (non inerziale) avente origine nel centro di forza e in moto rotatorio con il punto materiale stesso. In tale sistema di riferimento, un osservatore reale vede il punto materiale muoversi di moto rettilineo (lungo la direzione radiale) e quindi la posizione di tale punto risulta univocametne determinata dalla sola coordinata radiale $r$.
In un campo di forze centrali attrattivo, l'energia potenziale del campo è sempre negativa, (come per il campo gravitazionale). L'energia potenziale efficace, invece, può essere negativa, positiva o nulla a seconda che predomini il termine dovuto alla forza del campo o il termine centrifugo (che è sempre positivo)