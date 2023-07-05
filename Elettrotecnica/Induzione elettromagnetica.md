---
aliases: 
creation date: 2023-07-05 17:52
modification date: 2023-07-05 17:52
---

Poniamo un conduttore che forma un circuito chiuso in una regione con un campo magnetico $\bar{B}$. Assumiamo che il circuito sia fermo (non si deforma al variare del tempo). Se il flusso $\Phi_{B}$ concatenato con il circuito varia con il tempo si osserva una corrente nel circuito mentre il flusso sta variando.

La presenza di una corrente elettrica indica l'induzione di una forza elettromotrice che agisce nel circuito e quindi di un campo elettro $\bar{E}$, mi.
Misurazioni di questa forza elettromotrice indotta mostrano che dipende dalla rapidità di variazione del flusso magnetico $\frac{d}{dt} \Phi_{B}$.
Ad esempio se un magnete è posto vicino ad un circuito chiuso si osserva un fem del circuito se o il magnete o il circuito viene mosso in modo tale che il flusso magnetico concatenato cambi.
La magnitudine della forza indotta dipende dalla velocità con cui viene mosso ed è tanto maggiore tanto lo è la derivata del flusso, mentre la direzione dipende dal segno della derivata del flusso (quindi se diminuisce o aumenta).

Quando il flusso magnetico aumenta si manifesta una fem indotta
$$ V_{fem} = \oint_{L} \bar{E} \cdot \d \bar{l} < 0 $$
quindi si manifesta un campo elettrico $\bar{E}$ diretto come in figura. Tale campo metterebbe naturalmente in moto una carica positiva in senso orario o una negativa in senso antiorario. $V_{fem}$ agisce in senso negativo rispetto all'orientamento di $L$, se invece $V_{fem} > 0$ agisce in senso positivo.

>[!oss]
>Il segno della FEM indotta è sempre opposto rispetto a quello di $\frac{d}{dt}\Phi_{B}$

Ma non solo questo, osservazioni sperimentali mostrano che il valore della fem indotta è in modulo uguale alal derivata rispetto al tempo del flusso magnetico, quindi:

![[legge di Faraday-Henry#Legge]] 

La linea chiusa $L$ è una spira di materiale conduttore, e l'induzione di una fem lungo la linea genera una corrente $I$ che circola nella spira, che genera un campo magnetico $\bar{B}_{ind}$ per la [[formula di Biot-Savart]] che in base al verso di $I$ è diretto in modo da opporso alle variazioni del flusso.
L'opporsi alla variazione del flusso magnetico da parte di $\bar{B}_{ind}$ esprime il segno negativo nella legge di Faraday-Henry.

Intuitivamente ha senso questa cosa, infatti se non vi fosse il segno negativo, $\bar{B}_{ind}$ contribuirebbe ad aumentare il flusso, che aumenterebbe la fem, che aumenterebbe la corrente che aumenterebbe il flusso in un circolo vizioso.

Scegliamo la superficie $S$ di cui $L$ è il contorno ed ipotizziamo che il campo magnetico $\bar{B}$ abbia modulo $B = B_{0} \sin(\omega t)$ e sia parallelo al versore normale ad $S$ $\hat{u}_{S}$ si ricava
$$ V_{fem} = - \frac{d}{dt} \Phi_{B} = - SB_{0} \omega \cos (\omega t)  $$
E vediamo la correlazione tra $V$ e $\omega$.
Essendo $V_{fem} = \oint_{L} \bar{E} \cdot \d \bar{l}$ e che le entità geometriche sono considerate fisse possiamo riscrivere:
$$ - \oint_{L} \bar{E} \cdot \d \bar{l} = \frac{d}{dt} \int _{S} \! \bar{B}  \cdot \hat{u}_{N} \mathrm{d}s  = \int _{S} \! \frac{ \partial  }{ \partial t }  \bar{B} \cdot \hat{u}_{N} \mathrm{d}S  $$
Quindi il campo elettrico $\bar{E}$ non ammette un potenziale e non valgono le [[leggi di Kirchoff]] per le tension. 

La legge di Faraday-Henry coincide con la [[Leggi di Maxwell per il campo magnetostatico|terza legge di Maxwell]] in versione integrale.


Possiamo infine generalizzare ancora di più la legge di Faraday-Henry, non è necessario che il percorso $L$ coincida con un conduttore.
![[legge di Faraday-Henry#Generalizzazione]]

Quindi **un campo elettrico deve esistere ogni volta che varia un campo magnetico**.