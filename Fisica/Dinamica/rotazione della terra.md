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
Se il grave è fermo nel sistema relativo, l'[[accelerazione di coriolis]] si annulla (come nel caso del punto materiale vincolato alla piattaforma rotante), mentre l'accelerazione di trascinamento è:
$$
\vec{a}_{t} = \vec{\omega} \times (\vec{\omega} \times \vec{r}_{r} ) = +\omega^2R_{T}\cos(\lambda)\hat{u}_{N}
$$
Dove abbiamo indicato con $R_{T}$ il raggio della terra, con $\hat{u}_{N}$ il versore uscente da $P$ diretto perpendicolarmente verso l'asse di rotazione $z$ e con $\lambda$ la latitudine del punto $P$, ossia l'angolo che la congiungente con il centro della Terra forma con il piano equatoriale. L'accelerazione di trasinamento $\vec{a}_{t}$ dunque è diretta verso l'interno della Terra e dipende, in modulo, dalla latitudine: è nulla ai poli e massima all'equatore.
L'accelerazione effettiva di gravità vale quindi
$$
\vec{g} = \vec{a}_{r} = \vec{a}_{a} - \vec{a}_{t} = \vec{g}_{0} - \omega^2R_{T}\cos (\lambda)\hat{u}_{N} 
$$
```tikz
\begin{document}
\begin{tikzpicture}
\draw[fill = orange!50!black] (0,0) circle (3);
\draw[-latex] (0,-4) -- (0,4);
\draw[-stealth] (0,0) -- (0,1)node[right]{$\vec{\omega}$};
\end{tikzpicture}
\end{document}
```
