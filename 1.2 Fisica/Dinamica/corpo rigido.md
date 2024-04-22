---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

In un sistema di particelle abbiamo $3N$ gradi di libertà, dove $N$ è il numero di particelle.
Inoltre abbiamo 6 equazioni scalari dalle equazioni della dinamica, e abbiamo quindi solo 7 condizioni.

>[!def] corpo rigido
>
>un corpo rigido è un sistema di punti nel quale le distanze relative fra i punti sono fisse
>

Un corpo rigido può compiere [[roto-traslazioni]], ossia composizioni di una [[rotazione]] e una [[traslazione]].

### parametri di un corpo rigido
Possiamo vedere il corpo rigido come un insieme di masse infinitesime con l'elemento infinitesimo $\d m$ sufficientemente piccolo possiamo dire che
- La [[massa]] totale è $M = \iiint_{V} \d m$
- Il [[volume]] totale è: $V = \iiint_{V} \d V$
- la posizione del [[centro di massa]] è $\vec{r}_{CM} = \frac{1}{M} \iiint_{V} \vec{r} \d m$

 inoltre possiamo definire la ![[densità#^f03abb]]

## Moto dei corpi rigidi
Per descrivere il moto di un corpo rigido bisogna descriver eposizione e orientamento di un sistema di riferimento $S'$ solidale con il corpo.
Visto che il sistema $S'$ è solidale al corpo, che è inooltre rigido, ogni $\d m$ sarà fissato rispetto a $S'$, quindi basta descrivere il moto di $S'$ (ossia la posizione dell'origine $O'$ e l'orientamento di $x',y',z'$ rispetto a S)

##### [[legge di composizione delle velocità]]  in [[Cinematica]] relativa
$$ \vec{v} = \vec{v}' + \vec{v}_{T} $$
con
- $\vec{v}$ velocità del sistema
- $\vec{v}'$ velocità nel sistema S
- $\vec{v}_{T}$ velocità di trascinamento

Quest'ultima può essere scritta genericamente come
$$ \vec{v}_{T} = \vec{v}_{o'} + \vec{\omega} \times \vec{r}' $$
con
- $\vec{v}_{o'}$ velocità del sistema S' rispetto ad S
- $\vec{\omega}$ velocità angolare
- $\vec{r}'$ posizione nel sistema S'

consideriamo un singolo elemento $dm$ di un corpo rigido, avrà velocità rispetto ad S pari a
$$ \vec{v} = \vec{v}' + \vec{v}_{T} = \vec{v}' + \vec{v}_{o'} + \vec{\omega} + \vec{r}' $$.
Ma essendo $S'$ solidale al corpo ovviamente $\vec{v}'=0$ e quindi
$$ \vec{v} = \vec{v}_{o'} + \vec{\omega} + \vec{r}' $$
possiamo scegliere arbitrariamente il centro del sistema S', facendolo coincidere con il centro di massa abbiamo
$$\vec{v} = \vec{v}_{CM} + \vec{\omega} \times \vec{r}'$$
E la posizione di $dm$ diventa
$$ \vec{r}' = \vec{r} - r_{CM}$$
otteniamo quindi
$$ \vec{v} = \vec{v}_{CM} + \vec{\omega} \times (\vec{r} - \vec{r}_{CM}) $$

### Moto solo traslatorio di un corpo rigido
Nel caso di una sola traslazione avremo velocità angolare nulla, e come espressione avremo
$$ \vec{v} = \vec{v}_{o'} + \vec{\omega} \times \vec{r}' = \vec{v}_{o'} $$
Se $O'$ coincide con il centro di massa:
$$ \vec{v} = \vec{v}_{CM} $$
considerando la prima equazione cardinale della dinamica:
$$ \vec{P} = M \vec{v}_{CM}\quad \text{ove}\ M = \iiint_{V} \delta(\vec{r}) \ \d V $$
Derivando la prima equazione cardinale della dinamica:
$$ \frac{d\vec{p}}{dt} = M \frac{d\vec{v}_{CM}}{dt} = M\vec{a}_{CM} = \vec{F}  $$

Possiamo quindi calcolare il [[momento angolare]] totale rispetto al centro di massa:
$$ \vec{L}_{CM} = \iiint \vec{r}' \times \vec{v} \ \d m $$
visto che $\vec{r}' = \vec{r}- \vec{r}_{CM}$ si ottiene
$$ \vec{L}_{CM} = \iiint (\vec{r} - \vec{r}_{CM} ) \times \vec{v}_{CM} \ \d m = \iiint_{CM} \vec{r} \times \vec{v}_{CM} \ \d m - \iiint \vec{r}_{CM} \times \vec{v}_{CM}\ \d m $$
possiamo raccogliere le costanti e portarle fuori:
$$ \vec{L}_{CM} = \left(\iiint \vec{r}\ \d m\right) \times \vec{v}_{CM} - \left( \vec{r}_{CM} \times \vec{v}_{CM} \right) \iiint \d m   $$
quindi considerando il primo termine, moltiplicando e dividendo per M otteniamo
$$ \frac{M}{M}\left( \iiint \vec{r}\ \d m \right) = M\left( \frac{1}{M}  \iiint\vec{r}_{dm}\right) \times \vec{v}_{CM} = M \vec{r}_{CM} \times \vec{v}_{CM} $$
Considerando invece il secondo termine:
$$ -(\vec{r}_{CM} \times \vec{v}_{CM}) \iiint \d m = - (\vec{r}_{CM} \times \vec{v}_{CM})M $$
quindi $$\vec{L}_{CM} = M \vec{r}_{CM} \times \vec{v}_{CM} - (\vec{r}_{CM} \times \vec{v}_{CM} M) = 0$$.
Possiamo quindi affermare che:
> [!proposition In un moto puramente traslatorio di un corpo rigido, il momento angolare rispetto al centro di massa è nullo

### Moto unicamente rotatorio rispetto ad un asse fisso di un corpo rigido
S' ed S sono arbitrari, possiamo quindi:
- far coincidere O e O'
- Posizionare O e O' lungo l'asse di rotazione
- far coincidere un asse qualsiasi con l'asse di rotazione.
- far coincidere le due assi scelte tra loro e con l'asse di rotazione

Con queste condizioni $\vec{v}_{o'}$ sarà nulla e quindi
$$ \vec{v} =  \cancel{ \vec{v}_{o'} } + \vec{\omega} \times \vec{r} = $$.
L'asse di rotazione coincide con un asse qualsiasi (ad esempio z=z'). Possiamo quindi dire che $\vec{\omega} = \omega \hat{u}_{z}$, inoltre l'espressione della velocità vale per qualsiasi punto del corpo rigido, centro di massa incluso, possiamo quindi scrivere

$$ \vec{v}_{CM} = \vec{\omega} \times \vec{r}_{CM} $$.

La prima equazione cardinale sarà
$$ \vec{P} = M\vec{v}_{CM} = M(\vec{\omega} \times \vec{r}_{CM}) $$ dove il termine fra parentesi è nullo se:
- $\vec{\omega} = 0$, ossia se non c'è rotazione
- $\vec{r}_{CM} = 0$, ossia se il centro di massa coincide con O'
- $\vec{\omega} \parallel \vec{r}_{CM}$, ossia se l'asse di rotazione passa per il centro di massa.

Quindi se il corpo rigido ruota intorno ad un asse passante per il centro di massa allora
$$ \vec{v}_{CM} = 0 \implies \vec{P} = 0 $$


Per il momento angolare rispetto al polo O:
$$ \vec{L}_{O} = \iiint \vec{r} \times \vec{v}\ \d m $$
Se il moto è puramente rotatio $\vec{v} = \vec{\omega} \times \vec{r}$:
$$ \vec{L}_{o} = \iiint \vec{r} \times (\vec{\omega} \times \vec{r}) \d m = \iiint \vec{r} \times [\omega r \sin \theta \hat{u}_{\theta}]\ \d m $$
Scomponendo $\vec{r}$ nelle sue componenti radiale e lungo z notando che $r \sin \theta = \rho$ si ottiene
$$ \vec{L}_{o} = \iiint (p \hat{u}_{z}+ z\hat{u}_{z}) \times (\omega p \hat{u}_{\theta})\ \d m$$

Sviluppando il prodotto vettoriale:
$$ \vec{L}_{0} = \iiint p\hat{u}_{r} \times \omega \rho \hat{u}_{\theta}\ \d m  + \iiint z \hat{u}_{z} \times \omega \rho \hat{u}_{\theta}\ \d m$$
Raccogliendo e procedendo con i prodotti vettoriali
$$ \vec{L}_{o}  = \underbrace{ \omega \iiint \rho^2\ \d m\ \hat{u}_{z} }_{ \vec{L}_{\parallel} } - \underbrace{ \omega \iiint \rho z\ \d m\ \hat{u}_{z} }_{ \vec{L}_{\perp} } $$

La componente parallela all'asse di rotazione del momento angolare
$$ \vec{L}_{\parallel} = \vec{\omega} \iiint \rho^2\ \d m $$
quindi $\vec{L}_{\parallel} = I \vec{\omega}$.

La componente pependicolare all'asse di rotazione del momento angolare
$$ \vec{L}_{\perp} = - \omega \iiint \rho z \ \d m\ \hat{u}_{r}  $$
risulta essere nulla se l'asse di rotazione è anche asse di simmetria del corpo rigido.

Quindi riassumendo il momento angolare di un corpo rigido che ruota intorno ad un asse fisso passante per O risulta essere
$$ \vec{L}_{o} = I_{o} \vec{\omega} + \vec{L}_{\perp} $$
dove $I_{o}$ è il [[momento di inerzia]] rispetto all'asse di rotazione passante per O 
# ANKI

```anki
id: 1705511622425
deck: Fisica
---
Corpo rigido
===
Un corpo rigido è un sistema di punti nel quale le distanze relative fra i punti sono fisse.
Ha 6 gradi di libertà:
- 3 di posizione nello spazio
- 3 di orientamento nello spazio
```


```anki
id: 1705511626450
deck: Fisica
---
Parametri di un corpo rigido
===
- La massa totale $\iiint_V dm$
- Il volume totale $\iiint_V dV$
- posizione del centro di massa $\vec{r}_{CM} = \frac{1}{M} \iiint_V \vec{r}\ \d m$
```


```anki
id: 1705511628627
deck: Fisica
---
moto dei corpi rigidi
===
Partendo dalla legge di composizione delle velocità in cinematica relativa, avendo un sistema di riferimento fisso ed un sistema di riferimento solidale con il corpo rigido, facendo coincidere il centro del secondo sistema con il centro di massa del corpo rigido possiamo scrivere la velocità del generico punto $dm$:
$$ \vec{v} = \vec{v}_{CM} + \vec{\omega} \times (\vec{r} - \vec{r}_{CM}) $$
```


```anki
id: 1705511629825
deck: Fisica
---
Moto unicamente traslatorio di un corpo rigido
===
La velocità di un corpo rigido in un moto unicamente traslatorio è:
$$ \vec{v} = \vec{v_{o'}} $$
che se coincide col centro di massa
$$ \vec{v} = \vec{v}_{CM} $$

Possiamo poi considerare la quantità di moto dalla prima equazione cardinale della dinamica
$$ \vec{P} = M \vec{v}_CM\quad M = \iiint_V \delta(\vec{r})\ \d $$
derivando
$$ \frac{d\vec{p}}{dt} = M \frac{d\vec{v}_{CM}}{dt} = M\vec{a}_{CM} = \vec{F} $$

Infine si dimostra che il momento angolare totale rispetto al centro di massa è $0$.
```



```anki
id: 1705511630677
deck: Fisica
---
Moto unicamente rotatorio rispetto ad un corpo rigido
===
Scegliamo due SdR tali che:
- Le origini O e O' coincidano
- Le origini siano collocate lungo l'asse di rotazione
- due assi dei due SdR coincidano tra di loro e con l'asse di rotazione

$\vec{v}_{o'}$ sarà nulla e avremo
\vec{v} = \vec{\omega} \times \vec{r}.

L'asse di rotazione coincide con un asse qualsiasi (prendiamo z=z'). Quindi $\vec{\omega} = \omega\hat{u}$, inoltre l'espressione della velocità vale per qualsiasi punto del corpo rigido, centro di massa incluso, scriviamo quindi
$$ \vec{v}_{CM} = \vec{\omega} \times \vec{r}_CM $$

La prima equazione cardinale sarà
$$ \vec{P} = M\vec{v}_CM = M(\vec{\omega} \times \vec{r}_{CM}) $$
con il termine tra parentesi nullo se:
- $\vec{\omega} = 0$, ossia non c'è rotazione
- $\vec{r}_{CM} = 0$, ossia il centro di massa coincide con O'
- $\vec{\omega} \parallel \vec{r}_{CM}$, se il centro di massa è sull'asse di rotazione

Quindi se il corpo rigido ruota attorno ad un asse passante per il proprio centro di massa $$\vec{v}_{CM} = 0 \implies \vec{P} = 0$$
```
