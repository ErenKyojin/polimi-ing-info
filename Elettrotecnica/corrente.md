---
aliases: corrente elettrica
---


La corrente elettrica $I$, misurata in Ampere ($A = Cs^{-1}$), è definita, in termini operativi, come la carica elettrica che fluisce, nell'unità di tempo, attraverso una superficie di controllo posta in una ragione dello spazio. La possiamo introdurre facendo riferimento alla situazione semplice e semplificata riportata in figura.

> [!def]
> ```tikz
> \usetikzlibrary{shapes.geometric}
> \begin{document}
> \begin{tikzpicture}
> 
> \node[cylinder,draw,minimum height = 4cm, minimum width = 2cm] (c) at (0,0){};
> \draw[dashed] (-1.75,-1) arc (170:190:-5.6);
> 
> \draw[->] (0,0) node{$\bullet$} -- ++ (.5,0);
> \draw[->] (1,.5) node{$\bullet$} node[left]{$q$} -- ++ (.5,0);
> \draw[->] (-1.2,-.25) node{$\bullet$} -- ++ (.5,0);
> \draw[->] (1.2,-.75) node{$\bullet$} -- ++ (.5,0);
> \node at (0,-1.5){$V \cdot \Delta t$};
> \node at (2.25,-1){$dS$};
> 
> \end{tikzpicture}
> \end{document}
> ```
> Immaginiamo un piccolo cilindretto di lunghezza $v\Delta t$ che contiene $n$ cariche $q$ che si muovono a velocità costante $\bar{v}$ parallelamente all'asse del cilindretto stesso. Nell'intervallo di tempo $\Delta t$, tutte le $n$ cariche attraversano la superficie di base $\d S$ del cilindretto.
> 
> Si rileva dunque una intensità media di corrente $I$ attraverso a $\d S$ pari a $\frac{nq}{\Delta t}$. Se si assume $\Delta t = t - t_{0}$ e $\Delta Q = Q(t) - Q(t_{0})$, cioè la carica che attraversa $\d S$ in $\Delta t$ viene espressa come l'incremento della carica che aveva attraversato la superficie fino a $t_{0}$, passando al limite per $\Delta t \to 0$ si ottiene
> $$ I = \frac{dQ}{dt}  $$

È evidente che, in base alla sua definizione, la corrente $I$ è una grandezza scalare. Tuttavia, nei circuiti elettrici che studieremo, indicheremo abitualmente la corrente con una freccia dotata di verso. In questa rappresentazione assumeremo, per convenzione, che una corrente $I$ abbia il verso e la direzione delle cariche positive. In altre parole, quando indicheremo con una freccia il verso in cui fluisce una corrente $I$, indicheremo che in quel verso si stanno muovendo cariche positive o che cariche negative si stanno muovendo nel verso opposto.

Fino ad ora abbiamo considerato una situazione specifica, in cui le cariche si muovono con velocità costante $\bar{v}$, nella medesima direzione e con lo stesso verso. Più in generale, consideriamo una superficie infinitesima $\d S$ con versore normale $\hat{u}_{N}$, attraverso la quale sono in moto con velocità $\bar{v}$ particelle cariche la cui densità per unità di volume sia $\rho_{V}$. La carica netta passante attraverso l'unità di area nell'unità di tempo è dunque
$$ \rho_{V}\bar{v} \cdot \hat{u}_{N} \d S = \bar{\jmath} \cdot \hat{u}_{N} \d S $$
Essendo $\bar{\jmath} = \rho_{V}\bar{v}$ il campo vettoriale che indica la **densità di corrente**. Se indichiamo con $S$ una superficie orientata che si trovi in un regione dello spazio in cui è presente il campo $\bar{\jmath}$ la corrente elettrica $I$ attraverso $S$ è espressa come
$$ I = \Phi_{S}(\bar{\jmath}) = \int _{S} \bar{\jmath} \cdot \hat{u}_{N} \! \, \mathrm{d}S  $$
Se $S$ è in ogni suo punto perpendicolare a $\bar{\jmath}$, la corrente è lo scalare $I = \rho_{V} vS$.

Grazie al concetto di corrente elettrica possiamo formalizzare il [[principio di conservazione della carica]] e di [[conduttori]], ed attraverso il principio possiamo enunciare la [[Legge di Kirchhoff per le correnti]] ed iniziare a studiare i primi [[circuito elettrico|circuiti]]


>[!tldr]
>Supponiamo di misurare il flusso delle cariche all'interno di un filo metallico, contando quelle che passano attraverso una sezione $\sigma$ del filo. Fissiamo un verso di attraversamento come positivo (quindi orientiamo $\sigma$) e contiamo la quantità di carica elettrica positiva che attraversa la sezione nell'unità di tempo. L'unità di misura della corrente è chiamata ampere $[A]$.
>Anche il valore della corrente è dotato di segno, ad indicare se il flusso delle cariche positive è concorde o discorde rispetto al senso di attraversamento fissato sulla superficie.
>
>La corrente si misura attraverso un'[[amperometro]]


## proprietà
Indichiamo con $\sigma$ una superficie orientata e con $-\sigma$ la stessa superficie ma orientata nel verso opposto.
La misura di corrente lungo $-\sigma$ si ottiene invertendo l'inserimento dei morsetti dell'amperometro
- disparità: $I^{-\sigma} = -I^{\sigma}$
- additiva: Consideriamo le superfici $\sigma_{1}$ e $\sigma_{2}$, orientate in modo concorde e che condividono parte della loro frontiera. La loro unione da origine alla superficie complessive $\sigma = \sigma_{1 } \cup \sigma_{2}$.
  Se $i_{1} = I^{\sigma_{1}}$ e $i_{2} = I^{\sigma_{2}}$ sono le correnti misurate attraverso le superfici parziali e $i = I^{\sigma}$ è la misura attraverso la superficie complessiva, la proprietà additiva dice che
  $$ i = I^{\sigma} = I^{\sigma_{1} \cup \sigma_{2}} = I^{\sigma_{1}} + I^{\sigma_{2}} = i_{1} + i_{2} $$
- additività + disparità: siano $\sigma_{1}, \sigma_{2}$ e $\sigma_{3}$ tre superfici orientate come in figura cioè con $\sigma_{2}$ orientata in modo discorde alle prime due e sia $\sigma=\sigma_{1} \cup (-\sigma_{2}) \cup \sigma_{3}$. Si sono eseguite le relative misure di corrente $i_{1},i_{2},i_{3}$.  Dalla disparità abbiamo che $i(-v_{2}) = -i_{2}$, dall'additività:
  $$ i = I^{\sigma_{1} \cup (-\sigma_{2}) \cup \sigma_{3}} = i_{1} - i_{2} + i_{3} $$

# ANKI

```anki
id: 1694785449376
deck: elettrotecnica
---
# Corrente elettrica
con cariche a velocità costante
===
Dato un piccolo cilindro di lunghezza $v \Delta t$, contenente $n$ cariche $q$, che si muovono a velocità costante $\bar{v}$ parallele all'asse del cilindro,
Nell'intervallo di tempo $\Delta t$ tutte le cariche $n$ attraversano la superficie $dS$ "base" del cilindretto.
Vi sarà un intensità di corrente media $I$ attraverso la superficie $dS$ pari a $nq/\Delta t$.
Assumendo $\Delta t = t - t_0$ e $\Delta Q = Q(t) - Q(t_0)$, cioè la carica che attraversa $dS$ in $\Delta t$ viene espressa come l'incremento della carica che aveva attraversato la superficie fino a $t_0$.
Se passiamo al limite per $\Delta t \to 0$ abbiamo.
$$ I = \frac{d}{dt}Q $$
```


```anki
deck: elettrotecnica
---
# corrente elettrica
con cariche a velocità variabile
===
Consideriamo una superficie infinitesima $\dS$, con un **versore normale** $\hat{u}_N$ attraverso la quale sono in moto con velocità $\bar{v}$ particelle cariche con densità volumetrica $\rho_V$.

La carica netta passante attraverso l'unità di area nell'unità di tempo è dunque
$$ \rho_V \bar{v} \cdot \hat{u}_N dS = \bar{j}\cdot \hat{u}_N dS $$
$\hat{j} = \rho_V v$ indica la densità di corrente. Indicando quindi con $S$ una superficie orientata che si trova in una regione dello spazio in cui è presente il campo $\bar{j}$ la corrente elettrica $I$ attraverso $S$ è espressa come
$$ I = \Phi_S (\bar{j}) = \int_S \bar{j} \cdot \hat{u}_N dS $$.
Se la superficie $S$ è perpendicolare al campo $\bar{j}$ in ogni suo punto, la corrente è lo scalare $I = \rho_V vS$
```


```anki
deck: Elettrotecnica
---
# proprietà corrente
===
Indicando con $\sigma$ una superficie orientata e con $-\sigma$ la medesima supericie orientata nel verso opposto possiamo dire che le correnti passando per $\sigma$ e $-\sigma$ hanno le seguenti proprietà:
- Disparità: $I^{- \sigma} = - I^{\sigma}$
- additività: considerando le superfici $\sigma_1$ e $\sigma_2$ orientate in modo concorde, condividenti parte della loro frontiera. Possiamo effettuarne l'unione per ricavarne la superficie $\sigma = \sigma_1 \cup \sigma_2$.
  Se $i_1 = I^{\sigma_1}$ e $i_2 = I^{\sigma_2}$ sono le correnti misurate attraverso le superfici parziale e $i = I^{\sigma}$ è la misura attraverso la superficie complessiva, la proprietà additiva dice che
  $$ i = I^{\sigma} = I^{\sigma_1 \cup \sigma_2} = I^{\sigma_1} + I^{\sigma_2} = i_1 + i_2 $$
- Additività e disparità: dati $\sigma_1, \sigma_2$ e $\sigma_3$ tre superfici orientate tali che $\sigma_2$ sia discorde alle altre due, e sia $\sigma = \sgima_1 \cup (- \sigma_2) \cup \sigma_3$
```
<% tp.file.cursor(3) %>