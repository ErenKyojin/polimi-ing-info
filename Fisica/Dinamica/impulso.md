---
aliases: 
creation date: 2023-03-23 17:02
modification date: 2023-03-23 17:02
---

>[!def]
>Si definisce impulso di una [[forza]] in un certo [[intervallo]] di tempo l'[[integrale]] vettoriale della forza nello stesso intervallo di tempo.
> $$
>\vec{I}_{F}(t_{1},t_{2}) = \int _{t_{1}}^{t_{2}} \!\vec{F}(t) \, \mathrm{d}t 
>$$
>

>[!oss]
>Nel sistema internazionale l'impulso si misura dunque in $kg \cdot m \cdot s^{-1}$ oppure in $N \cdot s$


Per comprendere l'utilità di questa definizione consideriamo l'espressione di una forza agente su un [[punto materiale]] di cui sia nota la [[quantità di moto]]:
$$
\vec{F} = \frac{d\vec{p}}{dt} 
$$
e moltiplichiamo ambo i membri per il differenziale $dt$
$d\vec{p} = \vec{F}dt$
Considerando poi un intervallo di tempo finito, integriamo nel tempo dall'istante iniziale all istante finale ottenendo
$$
\vec{p}(t_{2}) - \vec{p}(t_{1}) = \int _{t_{1}}^{t_{2}} \!d\vec{p}(t') \, \mathrm{d}t'
$$
ovvero ricordando la definizione di impulso
$$
\fbox{$\Delta \vec{p}(t_{1},t_{2}) = \vec{I}_{F}(t_{1},t_{2})$}
$$

>[!teorema] Teorema dell'impulso
>La variazione della quantità di moto di un [[punto materiale]] è pari all'impulso della risultante delle [[forza|forze]] agenti su quel punto materiale

>[!oss]
>Questo teorema è diretta conseguenza delle definizioni di forza e di impulso, trova applicazioni nei casi in cui forze intense si manifestano per intervalli molto brevi ([[urti]])

>{!oss}
>Forze impulsive sono le [[reazioni vincolari]]

>[!esempio]
>Una palla che cadendo dall'alto colpisce il suolo rimbalzando mostra ad ogni rimbalzo una repentina variazione della quantità di moto (e inversione del segno della velocità). È l'impulso della forza di [[Reazioni vincolari|reazione vincolare]] del [[piano]] la causa di tale variazione.

