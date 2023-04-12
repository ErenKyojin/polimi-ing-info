---
aliases: 
creation date: 2023-04-12 10:56
modification date: 2023-04-12 10:56
---

Il concetto di [[energia potenziale]] efficace, introdotto nell'energia potenziale gravitazionale, è utile per studiare il [[moto]] di un [[punto materiale]] di [[massa]] $m$ immerso nel campo gravitazionale generato dalla massa $M \gg m$. 
Osserviamo che:
1. Le condizioni iniziali stabiliscono il momento angolare $\vec{L}$ e l'energia totale $E$, che si conservano durante il moto; la direzione di $\vec{L}$ stabilisce il piano del moto, mentre dal suo modulo dipende l'entità dell'energia potenziale cenrifuga, e quindi i valori $r_{z},r_{\min}$ ed $E_{p,\min}^{(\text{ eff })}$
2. Poichè risulta $E = \frac{1}{2}m \left( \dfrac{dr}{dt} \right)^2 + E_{p}^{\text{ (eff) }}(r) \geq E_{p}^{\text{ (eff) }}(r)$ avremo anzitutto che, fissato il valore di $L$, sarà certamente $- \dfrac{G^2M^2m^3}{2L^2} = E_{p,\min}^{\text{(eff)}} \leq E_{p}^{\text{ (eff) }}(r) \leq E$, quindi:
3. Se l'energia totale è negativa $(E = E_{1} < 0)$, avremo che anche l'energia potenziale efficace deve sempre restare negativa, ed in particolare al di sotto del valore $E_{1} < 0$. Di conseguenza il punto materiale $P$ si trova confinato entro una buca di potenziale, e la sua distanza dal centro delle forze varierà tra un valore minimo ed un valore massimo; la traiettoria pertanto si dimostra essere un ellisse.
   Il perielio e l'afelio si trovano alle distanze $r_{\text{per,af}} - 2GMm^2r_{\text{per,af}} + L^2 = 0 \implies$
   $$ \implies r_{\text{per}} = \frac{GMm}{2|E_{1}|} - \sqrt{ \left( \frac{GMm}{2E_{1}} \right)^2 - \frac{L^2}{2m |E_{1}|}}\quad ;\quad r_{\text{af}} = \frac{GMm}{2|E_{1}|} + \sqrt{ \left( \frac{GMm}{2E_{1}} \right)^2 - \frac{L^2}{2m|E_{1}|} } $$
   Si noti che dovendo essere $E_{1} \geq E_{p,\min}^{\text{(eff)}} = -(G^2M^2m^3 )/(2L^2)$ risulta $(G^2M^2m^2) / (E|E_{1}|) \geq L^2 / m$.
   L'argomento della radice nelle precedenti formule è positivo e quindi entrambe lo soluzioni sono accettabili.
4. Se in particolare, lenergia totale negativa coincide con l'energia potenziale efficace minima, la traiettoria è una circonferenza, ed infatti le distanze corrispondenti al perielio e all'afelio vanno a coincidere perchè la radice si annulla, ed entrambe valgono proprio $r_{\min}$
5. Se l'energia totale è positiva $(E = E_{2} > 0)$, il punto materiale $P$ è libero di sfuggire alle forze del campo, e la traiettoria è un'iperbole; il massimo avvicinamento consentito al centro delle forze si determina imponendo vel