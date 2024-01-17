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

## teorema delle forze vive
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

# energia ginetica in un [[corpo rigido]]
Per ogni $\d m$ è possibile scriverne la velocità come
$$ \vec{v} = \vec{v}_{CM} + \vec{\omega} \times (\vec{r} - \vec{r}_{CM}) $$
per definizione di energia cinetica
$$ E_{c} = \frac{1}{2}mv^2 $$
per un corpo rigido l'energia cinetica totale è la somma dell'energia cinetica di ciascun $\d m$
$$ E_{c} = \frac{1}{2} \iiint 
\! \d m [v_{CM} + \omega^2 \times (\vec{r} - \vec{r}_{CM})] \cdot [2 \vec{v}_{CM}  + \vec{\omega} \times (\vec{r} - \vec{r}_{CM}) ]$$
ossia
$$ E_{c} = \frac{1}{2} \iiint \d m [v_{CM}^2 + |\vec{\omega} \times (\vec{r} - \vec{r}_{CM})|^2 + 2\vec{v}_{CM} \cdot (\vec{\omega} \times (\vec{r} - \vec{r}_{CM}))] $$
poniamo $\vec{r}' = \vec{r} - \vec{r}_{CM}$, possiamo quindi scrivere
$$ |\vec{\omega} \times (\vec{r} - \vec{r}_{CM}) |^2 = |\vec{\omega} \times \vec{r}'|^2 = |\omega r' \sin(\theta)\hat{u}_{\theta}|^2 = \omega^2p'^2 $$
otteniamo sostituendo nell'espressione dell'energia cinetica
$$ \begin{align}
E_{c} &= \frac{1}{2} \iiint \d m [v_{CM}^2 + \omega^2p'^2 + 2\vec{v}_{CM} \cdot \vec{\omega} \times (\vec{r} - \vec{r}_{CM})]= \\
&= \frac{1}{2}v_{CM}^2 \iiint \d m + \frac{1}{2}\omega^2 \iiint p'^2 \d m + \vec{v}_{CM} \cdot \vec{\omega} \times \iiint (\vec{r} - \vec{r}_{CM}) \d m
\end{align} $$
moltiplicando e dividendo per M il terzo elemento a destra:
$$ E_{c} = \frac{1}{2}v_{CM}^2 \underbrace{ \iiint \d m }_{ M } + \frac{1}{2} \omega \underbrace{ \iiint p'^2 \d m  }_{ I_{CM} }+ \vec{v}_{CM} \cdot \omega^2 \times \underbrace{ \frac{M}{M} \iiint (\vec{r} - \vec{r}_{CM}) \d m  }_{ 0 }$$
Quindi, in conclusione
$$ E_{c}  = \frac{1}{2} Mv_{CM}^2 + \frac{1}{2}I_{CM}\omega^2$$
Possiamo scriverla nei tre casi:
- solo traslazione: $E_{c}  = \frac{1}{2} Mv_{cm}^2$
- solo rotazione: $E_{c} = \frac{1}{2} I_{0} \omega^2$
- roto traslazione: $E_{c} = \frac{1}{2} Mv_{CM}^2 + \frac{1}{2}I_{0}\omega^2$
# ANKI

```anki
id: 1700212221045
deck: Fisica
---
Energia cinetica
===
Si definisce energia cinetica $E_C (P)$ un punto materiale di massa $m$ nella posizione $P$ l'indice di stato fisico:
$$ E_C (P) = \frac{1}{2} mv_P^2 + k $$
dove $v_P^2 = \vec{v}_P \cdot \vec{v}_P = |\vec{v}_P|^2$, essendo $\vec{v}_P$ la velocità istantanea del punto materiale nella posizione $P$ e $k$ una costante arbitraria con le dimensioni di un lavoro
```


```anki
id: 1700212222918
deck: Fisica
---
Teorema delle forze vive
o
Teorema dell'energia cinetica
===
In un sistema di riferimento inerziale, il lavoro compiuto dalla risultante di tutte le forze agenti su di un punto materiale quando esso si sposta dalla posizione $A$ alla posizione $B$ è pari alla variazione di energia cinetica del punto materiale tra le posizioni $A$ e $B$

>[!dim]
>assumiamo che $\vec{F}$ sia la risultante di tutte le forze applicate al punto materiale di massa $m$.
>Sotto questa ipoetsi vale ovviamente il secondo principio della dinamica $\vec{F} = m\vec{a}$.
>Moltiplicando scalarmente tale equazione per uno spostamento infinitesimo $d\vec{r}$ abbiamo
>$$ \vec{F} \cdot d\vec{r} = m\vec{a} \cdot d\vec{r} = m \frac{d\vec{v}}{dt} \cdot d\vec{r} = md\vec{v} \cdot \frac{d\vec{r}}{dt} = md\vec{v} \cdot \vec{v} = \frac{1}{2}md(\vec{v} \cdot \vec{v}) = d \left( \frac{1}{2} mv^2\right) $$
>Consideriamo quindi due punti arbitrari $A$ e $B$ della traiettoria del punto materiale, allora, in base alla definizione di lavoro lungo un cammino finito, possiamo scrivere
>$$ \mathcal{L}_{A \to B,\gamma} = \int_{A, \gamma}^B \vec{F} \cdot d\vec{r} = \int_{A,\gamma}^B d(\frac{1}{2} mv^2) = \frac{1}{2m}v_B^2 - \frac{1}{2m}v_A^2 $$
>Quindi avremo che il lavoro compiuto da $\vec{F}$ nello spostamento del punto materiale da $A$ a $B$ è pari alla variazione di energia cinetica del punto materiale tra queste due posizioni
>$$ \mathcal{L}_{A \to B, \gamma} = E_C(B) - E_C(A) = \Delta E_C (A,B) $$
```


```anki
id: 1700212224295
deck: Fisica
---
Il lavoro dipende in generale dalla ~~traiettoria~~ e non solo dagli estremi $A$ e $B$, anche la variazione di ~~energia cinetica~~ subita dal punto materiale dipende in generale dalla ~~traiettoria~~ di esso seguita per giungere da $A$ a $B$.

```

 
```anki
id: 1705511629951
deck: Fisica
---
Energia cinetica in un sistema di punti materiali
===
Si definisce energia cinetica di un sistema di punti materiali in un dato SdR la somma delle energie cinetiche di tutti i punti rispetto allo stesso sistema di riferimento
$$ E_C = \sum_{i = 1}^n \frac{1}{2}m_i v_i^2 $$
```


```anki
id: 1705511630776
deck: Fisica
---
Energia cinetica di un corpo rigido
===
Si può scrivere nei tre diversi casi possibili di moto:
- solo traslazione: $E_c = \frac{1}{2} Mv_{CM}^2$
- solo rotazione: $E_c = \frac{1}{2} I_0 \omega^2$
- roto traslazione: $E_c = \frac{1}{2} Mv_{CM}^2 + \frac{1}{2}I_0 \omega^2$
```
