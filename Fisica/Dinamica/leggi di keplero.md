---
aliases: 
creation date: 2023-04-12 11:40
modification date: 2023-04-12 11:40
---

L'astronomo Johannes Kepler formulò le 3 leggi empiriche sulla cinematica del moto dei pianeti

1. Ogni pianeta descrive un'orbita ellittica ed il Sole occupa uno dei due fuochi dell'ellissi.
2. Il vettore posizione di ogni pianeta rispetto al Sole descrive aree uguali in tempi uguali
3. Il quadrato del tempo di rivoluzione di ciascun pianeta è proporzionale al cubo del semiasse maggiore della sua orbita $T^2 \propto a^3$

Le leggi di keplero possono essere dedotte dalla teoria della dinamica del moto sotto l'azione di una forza cenrale che dipende dall'inverso del quadrato della distanza.

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
\draw[] (F.center) -- ++ (-1.22,1.22) arc (135:215:4 and 2); 
\end{tikzpicture}
\end{document}
```
