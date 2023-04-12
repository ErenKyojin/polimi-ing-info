---
aliases: 
creation date: 2023-03-25 18:14
modification date: 2023-03-25 18:14
---

> [!def]
> Si definisce energia cinetica $E_{C}(P)$ di un [[punto materiale]] di [[massa]] $m$ nella posizione $P$ l'[[indice di stato fisico]]:
> $$
> E_{C}(P) = \frac{1}{2}mv^2_{P} + k
> $$
> dove $v_{P}^2 = \vec{v}_{P} \cdot \vec{v}_{P} = |\vec{v}_{P}|^2$, essendo $\vec{v}_{P}$ la velocità istantanea del [[punto materiale]] nella posizione $P$ e $k$ è una costante arbitraria, con le dimensioni di un [[Fisica/Dinamica/Lavoro|lavoro]]
> 


>[!oss]
>L'energia cinetica in $P$ è funzione della sola velocità in $P$, non del vettore posizione in $P$


Poniamoci in un sistema di riferimento ineraziale ed assumiamo che $\vec{F}$ sia la risultante di tutte le [[forza|forze]] applicate al punto materiale di massa $m$.
Sotto questa ipotesi vale ovviamente il [[secondo principio della dinamica]] $\vec{F} = m\vec{a}$.
Moltiplichiamo scalarmente tale equiazione per uno spostamento infinitesimo $d\vec{r}$
$$
\vec{F} \cdot d\vec{r} = m\vec{a} \cdot d\vec{r} = m\frac{d\vec{v}}{dt} \cdot d\vec{r} = md\vec{v} \cdot \frac{d\vec{r}}{dt} = md\vec{v} \cdot \vec{v} = \frac{1}{2}md(\vec{v}\cdot \vec{v}) = d\left( \frac{1}{2}mv^2 \right)
$$
Conssideriamo ora i due punti arbitrari $A$ e $B$ della traiettoria del punto materiale, allora, in base alla definizione di lavoro lungo un cammino finito, possiamo scrivere
$$
\mathcal{L}_{A \to B,\gamma} = \int _{A,\gamma}^B \!\vec{F} \cdot \, \mathrm{d}\vec{r} = \int _{A,\gamma}^B \!\mathrm{d}\left( \frac{1}{2}mv^2 \right) = \frac{1}{2m}v_{B}^2 - \frac{1}{2 m}v_{A}^2
$$
Ovvero considerando anche la definizione di energia cinetica avremo che il [[Fisica/Dinamica/Lavoro|lavoro]] compiuto da $\vec{F}$ nello spostamento del punto materiale da $A$ a $B$ è pari alla variazione di energia cinetica del [[punto materiale]] tra queste due posizioni:
$$
\fbox{$\mathcal{L}_{A \to B,\gamma} = E_{c}(B) - E_{c}(A) = \Delta E_{c}(A,B)$} 
$$
questa euqazione esprime il seguente:


>[!teorema] Teorema delle [[forza|forze]] vive o teorema dell'energia cinetica
>In un [[sistema di riferimento inerziale]], il lavoro compiuto dalla risultatnte di tutte le forze agenti su di un punto materiale quando esso si sposta dalla posizione $A$ alla posizione $B$ è pari alla variazione di energia cinetica del punto materiale tra le posizioni $A$ e $B$

>[!oss]
>Poichè come osservato in precedenza il lavoro dipende in generale dalla traiettoria e non solo dagli estremi $A$ e $B$, anche la variazione di energia cinetica subita dal punto materiale dipende in generale dalla traiettoria da esso seguita per giungere da $A$ a $B$


>[!oss]
>L'arbitrarietà della costante additiva $k$ introdotta nella definizione dell'energia cinetica non ha alcun effetto di rilevanza fisica , il teorema dell'energia cinetica dice che il lavoro è una differenza tra due valori dell'energia cinetica, e dunque non dipende da $k$.
>Visto che tale costante può essere inoltre scelta in modo arbitrario, fissiamola al valor nullo, quindi $E_{c} = \frac{1}{2}mv^2$. Anche se questa è la scelta piú comune, è comunque arbitraria.


# energia cinetica in un [[sistemi di punti materiali|sistema di punti materiali]]

Si definisce energia cinetica di un sistema di punti materiali in un dato SdR la somma delle energia cinetiche di tutti i punti rispetto allo stesso sistema di riferimento
$$ E_{c} = \sum_{i = 1}^n \frac{1}{2}m_{i}v_{i}^2 $$