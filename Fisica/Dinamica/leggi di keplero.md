---
aliases: legge di Keplero
creation date: 2023-04-12 11:40
modification date: 2023-04-12 11:40
---

L'astronomo Johannes Kepler formulò le 3 leggi empiriche sulla [[cinematica]] del [[moto dei pianeti]]

1. Ogni pianeta descrive un'orbita ellittica ed il Sole occupa uno dei due fuochi dell'ellissi.
2. Il vettore posizione di ogni pianeta rispetto al Sole descrive aree uguali in tempi uguali
3. Il quadrato del tempo di rivoluzione di ciascun pianeta è proporzionale al cubo del semiasse maggiore della sua orbita $T^2 \propto a^3$

Le leggi di keplero possono essere dedotte dalla teoria della dinamica del [[moto]] sotto l'azione di una [[forza]] cenrale che dipende dall'inverso del quadrato della distanza.

La seconda legge risulta particolarmente semplice da dimostrare, ossia si può facilmente dimostrare che la velocità areolare $dA/dt$, ossia l'area spazzata dal vettore posizione nell'unità di tempo, è costante.
$$ \vec{L} =mr^2\vec{\omega} = \vec{\cost} \implies r^2 \frac{d\theta}{dt} = \cost  $$
ma
$$dA = \frac{1}{2} r \cdot (r d\theta) = \frac{1}{2}r^2 d\theta$$
Possiamo approssimare l'areola $dA$ a quella di un riangolo che ha per altezza $r$ e per base l'arco di cerchio $r d \theta$.
Allora abbiamo che la velocità areolare risulta
$$ \frac{dA}{dt} = \frac{1}{2}r^2 \frac{d\theta}{dt} = \frac{1}{2} \frac{L}{m} = \cost   $$
(Seconda legge di Keplero per il moto dei pianeti: il vettore posizione spazza aree uguali in tempi uguali)

```tikz
\begin{document}
\begin{tikzpicture}
\draw (0,0) circle (4 and 2);
\node[scale = 3,color = yellow] (F) at (-2,0){$\bullet$};
\node[above = 2mm] at (F){$S$};
\draw[fill = red, fill opacity = 0.2] (F.center) -- ++ (-1.2,1.2) arc (143.2:215.8:4 and 2) -- (F.center);
\draw[fill = red, fill opacity = 0.2] (F.center) -- ++ (5.45,1) arc (30:-30:4 and 2) -- (F.center);
\end{tikzpicture}
\end{document}
```
*L'area in rosso è equivalente*

Per quanto riguarda la terza legge, consideriamo il caso particolare di un orbita circolare di raggio $R.$ allora dalla prima equazione cardinale abbiamo:
$$ \vec{F} = m\vec{a}_{N} = m\vec{a}_{C} \implies - \frac{k}{R^2}\hat{u}_{r} = -m\omega^2R\hat{u}_{r} \implies \frac{k}{R^3}= m \frac{4\pi^2}{T} \implies T^2 = \frac{4\pi^2m}{k}R^3 $$
dove $m$ è la [[massa]] del pianeta.

Sostituendo l'espressione di $k$ per il sistema sole-pianeta, cioè $k = GM_{s}m$, dove $M_{S}$ è la massa del Sole, otteniamo
$$ T^2 = \frac{4\pi^2}{GM_{S}}R^3 $$
Si noti che la costante di proporzionalità tra ilcubo del raggio dell'orbita ed il quadrato del tempo di rivoluzione è la stessa per tutte le orbite.

Le dimostrazioni della prima e della terza legge nel caso generale delle orbite ellittiche sono piú laboriose e richiedono risoluzioni analitche del problema bidimensionale del moto del pianeta sotto l'effetto dell'attrazione gravitazionale del Sole.

# ANKI

```anki
deck: Fisica
---
Leggi di Keplero
===
1. Ogni pianeta descrive un'orbita ellittica ed il sole occupa uno dei due fuochi dell'ellissi
2. Il vettore posizione di ogni pianeta rispetto al sole descrive aree uguali in tempi uguali
3. il quadrato del tempo di rivoluzione di ciascun pianeta è proporzionale al cubo del semiasse maggiore della sua orbita $T^2 \propto a^3$

>[!dim] Dimostrazione seconda legge 
>Si può dimostrare che la veocità areolare $dA/dt$ è costante:
>$$\vec{L} = mr^2\vec{\omega} = \vec{\text{cost}} \implies r^2 \frac{d\theta}{dt} = \text{cost}$$
>ma
>$$ dA = \frac{1}{2}r \cdot (rd\theta) = \frac{1}{2}r^2 d\theta $$
>Possiamo pensare ad ogni areola $dA$ come un triangolo con altezza $r$ e come base l'arco di cerchio $rd\theta$.
>Abbiamo quindi velocità areolare:
>$$ \frac{dA}{dt} = \frac{1}{2}r^2 \frac{d\theta}{dt} = \frac{1}{2} \frac{L}{m} = \text{cost}$$

>[!dim] dimostrazione terza legge (caso particolare circolare)
>Dalla prima equazione cardinale abbiamo:
>$$ \vec{F} = m\vec{a}_N = m\vec{a}_C \implies - \frac{k}{R^2}\hat{u}_r = -m\omega^2 R\hat{u}_r \implies \frac{k}{R^3} = m \frac{4\pi^2}{T} \implies T^2 = \frac{4\pi^2m}{k}R^3 $$
>dove $m$ è la massa del pianeta.
>
>Sostituendo l'espressione di $k$ per il sistema sole-pianeta, quindi $k=GM_s m$, dove $M_S$ è la massa del Sole, otteniamo
>$$ T^2 = \frac{4\pi^2}{GM_S}R^3 $$
```
