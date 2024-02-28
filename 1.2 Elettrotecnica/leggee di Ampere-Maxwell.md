---
aliases: 
creation date: 2023-07-05 20:38
modification date: 2023-07-05 20:38
---

Per cercare un duale della [[legge di Faraday-Henry]] è intuitivo partire dalla [[legge di ampère]] che interessa la circuitazione del campo magnetico:
$$ \oint_{L} \bar{B} \cdot \d \bar{l} = \mu_{0} \int _{S} \! \bar{\jmath}  \, \cdot \hat{u}_{N}\mathrm{d}S  $$
Ma non c'è alcuna variazione rispetto al tempo del flusso del campo elettrico, ed in effetti la abbiamo ottenuta in condizioni statiche.

Possiamo ottenere la legge di Ampere-Maxwell partendo dalla legge di ampere ma considerando il principio di conservazione della carica che tiene conto dei fenomeni tempo varianti:
$$ \oint_{L} \bar{B} \cdot \d l = \mu_{0} \int _{S} \! \bar{\jmath} \, \cdot \hat{u}_{N}\mathrm{d}S  + \mu_{0}\varepsilon_{0} \int _{S} \!\frac{d}{dt}\bar{E}  \, \cdot \hat{u}_{N}\mathrm{d}S $$
Si noti come la presenza del termine
$$ \mu_{0}\varepsilon_{0} \int _{S}  \! \frac{ \partial  }{ \partial x } \bar{E} \, \cdot \hat{u}_{N}\mathrm{d}S  = \mu_{0} \varepsilon_{0} \frac{d}{dt} \int _{S} \!\bar{E} \, \cdot \hat{u}_{N}\mathrm{d}S  $$
Fa cessare la validità delle KCL in regime tempo variante.

La constatazione sperimentale che confermò questa equazione è stata l'esistenza dell'onda elettromagnetica.

La legge di Ampere-maxwell mostra che anche un campo elettrico dipendente dal tempo contribuisce al campo magnetico. In assenza di correnti abbiamo:
$$ \oint_{L} \bar{B} \cdot \d \bar{l} = \mu_{0}\varepsilon_{0} \frac{d}{dt} \int _{S} \!\bar{E} \, \cdot \hat{u}_{N}\mathrm{d}S   $$
che mostra più chiaramente la relazione tra un campo elettrico dipendente dal tempo ed il campo magnetico associato. Quindi un campo elettrico dipendente dal tempo comprota l'esistenza nello stesso luogo di un campo magnetico.

La circuitazione del campo magnetico è chiamata ![[forza magnetomotrice]]
![[Pasted image 20230705211028.png]]

L'orientamento relativo dei campi elettrico e megnatico è mostrato nella figura. Se il campo elettrico aumenta (rispettivamente diminuisce) l'orientamento delle linee di forza del campo magnetico è lo stesso (rispettivamente opposto) del senso di rotazione di una vite destra che avanza nella direzione del campo elettrico.

Possiamo quindi enunciare le [[Equazioni di maxwell del campo elettro-magnetico]] 