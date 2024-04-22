---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---
Con urto si indica una serie di fenomeni estremamente importanti nella fisica sperimentale, si possono studiare attraverso gli urti proprietà della materia e la natura delle interazioni che richiederebbero meccanica quantistica e relatività per il loro studio.

## Urto tra punti materiali

>[!def]
>Un urto è un'interazione breve e intensa tra punti materiali


>[!remark]
>Possiamo distinguere diverse fasi di un urto
>1. moto indipendente iniziale
>2. interazione (contatto + deformazione + rilascio della deformazione)
>3. moto indipendente finale

Si identifica quindi un istante iniziale $t_{0}$ subito prima dell'urto, ed un istante finale $t_{0} + \Delta t$, appena dopo l'urto, separati di un intervallo temporale $\Delta t$.

Durante l'urto, che ha durata $\Delta t$ molto breve, si sviluppano delle forze di interazione interna al sistema di punti materiali urtanti di tipo impulsivo.
Sulla $i$-esima particella agirà in generale una forza risultante interna impulsiva $\vec{F}_{i}^{(t)}$ di impulso
$$ \vec{I}_{i} = \int _{t_{0}}^{t_{0} + \Delta t} \! \vec{F}_{i}(t) \, \mathrm{d}t = \Delta \vec{p}_{i}(t_{0},t_{0} + \Delta t)  $$
con $\vec{F}_{i}^{(t)}$ forza esercitata durante l'urto dai restanti corpi sul corpo i-esimo

>[!remark]
>In generale i corpi o le particelle interagenti tra loro durante l'urto non sono isolati, tuttavia data la breve durata $\Delta t$ dell'urto, le eventuali forze esterne agenti di natura non impulsiva danno un contributo trasurabile alla variazione della quantità di moto totale del sistema


>[!remark]
>Forze esterne dovute a reazioni vincolari invece possono manifestare un comportamento di tipo impulsivo. In presenza di vincoli con l'esterno non possiamo quindi assumere che la quantità di moto totale del sistema si conservi in un urto

### Conservazione della quantità di moto
Dunque in base al teorema dell'impulso se, come avviene quasi sempre, tutte le forze esterne sono di natura non impulsiva la quantità di moto totale del sistema si conserva durante l'urto, indipendentemente dalla natura dell'urto stesso

consideriamo due particelle urtanti, avremo allora
$\vec{P} = \vec{p}_{1} + \vec{p}_{2} = \cost$ ovvero
$\vec{P}_{i} = \vec{P}_{1,i} + \vec{p}_{2,i} = \vec{p}_{1,f} + \vec{p}_{2,f} = \vec{P}_{F}$ ovvero
$\Delta \vec{p}_{1} + \Delta \vec{p}_{2} = \mathbf{0}$

### Classificazione degli urti e conservazione dell'energia cinetica
In generale gli urti si classificano in base alla conservazione dell'energia cinetica del sistema di particelle urtanti
- Se l'energia cinetica totale del sistema è conservata nell'urto, si dice che l'urto è **elastico** 
- Se l'energia cinetica totale del sistema non è conservata nell'urto, si dice che l'urto è **anelastico**

>[!remark]
>Se l'urto è anelastico vi è evidentemente lavoro di forze interne non conservative. Ma il lavoro compiuto da queste forze è limitato dal [[Quantità di moto#Principio di conservazione della quantità di moto|principio di conservazione della quantità di moto]] che equivale ad affermare per il [[Sistemi di punti materiali#Centro di massa e teorema del centro di massa|teorema del centro di massa]] che la velocità del centro di massa si conserva. Quindi l'energia cinetica finale non potrà essere minore dell'energia cinetica del centro di massa $\frac{1}{2}Mv_{C}^2$

>[!remark]
>L'urto più anelastico quindi è l'urto in cui l'energia cinetica finale interna è nulla, e quindi tutte le particelle urtanti non hanno nessun moto relativo e procedono come un unico punto mateirale. Questo urto è detto **perfettamente anelastico**

>[!remark]
>In alcuni urti l'energia cinetica finale è maggiore di quella iniziale, per via della conversione di una qualche forma di energia interna al sistema in energia cinetica delle particelle urtanti, questi urti sono detti **superelastici**