---
aliases: 
creation date: 2023-04-10 10:40
modification date: 2023-04-10 10:40
---

Un [[moto di trascinamento]] qualunque può sempre essere scomposto in un moto di traslazione ed uno di rotazione che sono i casi visti finora. Per quanto riguarda quest'ultimo caso, studiamo piú in dettaglio il [[moto]] di rotazione della Terra intorno al proprio asse e le conseguenze di tale moto sulla caduta dei gravi.

Assumiamo come sistema relativo un sistema di riferimento con origine nel centro della Terra e solidale ad essa, cioè in moto rotatorio puro con la Terra, mentre come sistema assoluto approssimateivamente inerziale assumiamo un sistema con origine sempre nel centro della terra ma che non partecipa al suo moto di rotazione (partecipa invece al moto di rivoluzione intorno al Sola, al moto del Sistema Solare rintorno al centro della via Lattea, ... che sono piú lenti del primo e possono essere trascurati)

L'accelerazione assoluta di un grave in caduta libera è dovuta alla sola [[forza gravitazionale]]:
$$ \vec{a}_{a} = \vec{g}_{o} = \frac{1}{m}\vec{F}_{\text{grav}}(m,M_{T}) = -\frac{\gamma M_{T}}{R_{T}^2}\hat{u}_{r} $$
diretta verso il centro della Terra.

Per un osservatore solidale con la Terra, lo stesso grave subisce un accelerazione relativa
$$\vec{a}_{r} = \vec{a}_{a} - \vec{a}_{c} - \vec{a}_{t}$$
Vediamo alora le conseguenze in alcuni casi importanti:

### Grave fermo
Se il grave è fermo nel sistema relativo, l'[[accelerazione di coriolis]] si annulla (come nel caso del [[punto materiale]] vincolato alla piattaforma rotante), mentre l'accelerazione di trascinamento è:
$$
\vec{a}_{t} = \vec{\omega} \times (\vec{\omega} \times \vec{r}_{r} ) = +\omega^2R_{T}\cos(\lambda)\hat{u}_{N}
$$
Dove abbiamo indicato con $R_{T}$ il raggio della terra, con $\hat{u}_{N}$ il [[versore]] uscente da $P$ diretto perpendicolarmente verso l'asse di rotazione $z$ e con $\lambda$ la latitudine del punto $P$, ossia l'angolo che la congiungente con il centro della Terra forma con il [[piano]] equatoriale. L'accelerazione di trasinamento $\vec{a}_{t}$ dunque è diretta verso l'interno della Terra e dipende, in modulo, dalla latitudine: è nulla ai poli e massima all'equatore.
L'accelerazione effettiva di gravità vale quindi
$$
\vec{g} = \vec{a}_{r} = \vec{a}_{a} - \vec{a}_{t} = \vec{g}_{0} - \omega^2R_{T}\cos (\lambda)\hat{u}_{N} 
$$
```tikz
\usetikzlibrary{arrows.meta}

\begin{document}
\begin{tikzpicture}
\draw[fill = orange!50!black] (0,0) circle (3);
\draw[-latex] (0,-4) -- (0,4) node[below right]{$z$};
\draw[-stealth] (0,0) -- (0,1)node[right]{$\vec{\omega}$};
\draw (0,0) -- (-3,0) node[midway,below]{$R_T$};
\draw (0,0) -- (-2.6,1.5) node (p){};
\draw (-.5,0) arc (180:150:.5)node[left]{$\lambda$} node[above]{$\vec{r}$};
\draw[thick, -{Stealth[scale = 1]}] (p.center) -- ++ (-1,0)node[above left]{$-\vec{a}_t$} node(ma){};
\draw[thick, -{Stealth}] (p.center) -- ++ (1,0)node[above right]{$\vec{a}_t$};
\draw[thick, -{Stealth}] (p.center) -- (-1.3,.75)node[above]{$\vec{g}_o$} node (g0){};
\draw (g0.center) -- ++ (-1,0) node(g){} -- (ma.center);
\draw[thick, -{Stealth}] (p.center) -- (g.center) node[below]{$\vec{g}$};
\end{tikzpicture}
\end{document}
```

>[!oss]
>il termine **centrifugo** dovuto all'accelerazione di trascinamento riduce il valore dell'accelerazione di gravità di un fattore che dipende dalla latitudine

>[!oss]
>La variazione indotta dall'accelerazione di trascinamento è comunque abbastanza piccola infatti
> $$|\vec{a}_{t}| \leq \omega^2 R_{T} \approx 3.3 \cdot 10^{-2} m \cdot s^{-2} \ll 9.81 m\cdot s^{-2} = |\vec{g}_{0}|$$

>[!oss]
>Lo stesso termine centrifugo, sposta la verticale rispetto alla congiungente con il centro della Terra, nell'emisfero boreale la [[direzione]] di $\vec{g}$ punta lievemente verso sud mentre nell'emisfero australe punta lievemente verso nord.
>Ai poli l'effetto è nullo in quanto è nullo il termine centrifugo

### Corpo in caduta
Se un grave non è fermo al suolo, ma sta cadendo, la sua [[velocità relativa]] al sistema "Terra" non è nulla, perciò avremo un'accelerazione di Coriolis diversa da 0.
Per semplicità consideriamo ora solo gli effetti dell'accelerazione di Coriolis, sapendo che gli vanno sommati all'accelerazione di trascinamento.
La forza di coriolis è una forza apparente in grado di produrre un'accelerazione uguale ed opposta all'[[accelerazione di Coriolis]].
$$
\vec{F}_{c} = -m\vec{a}_{c} = -m_{2}\vec{\omega} \times \vec{v}_{r}
$$
Per analizzarne gli effetti dal punto di vista qualitativo immaginiamo che la [[velocità relativa]] sia diretta verticalmente, come l'accelerazione di gravità effettiva (perturbata dall'accelerazione di trascinamento), cosa che avrebbe in assenza della [[forza]] di Coriolis. SI noti che:

>[!oss]
>La forza di Coriolis ha direzione perpendicolare alla verticale, oltre che all'asse di rotazione della Terra (risulta quindi ortogonale al piano mediano passante per $P$) ed è diretta verso oriente in entrambi gli emisferi.
>Quindi la direzione di caduta dei gravi risulta spostata verso est rispetto alla verticale.

>[!oss]
>Il modulo della forza di Coriolis vale circa $F_{c} = 2m\omega v$