---
aliases: 
creation date: 2023-03-25 17:06
modification date: 2023-03-25 17:06
---

>[!def] Lavoro elementare di una forza
>Si dice che una forza compie un lavoro quando il punto materiale al quale è applicata si sposta. Si definisce lavoro elementare $d\mathcal{L}$ di una forza $\vec{F}$ durante lo spostamente $d\vec{r}$ il prodotto scalare:
> $$
> d\mathcal{L} = \vec{F} \cdot d\vec{r} = F\ dr\cos \theta
>$$
>Dove $\theta$ è l'angolo formato da $\vec{F}$ con $d\vec{r}$
>
> ```tikz
> \usetikzlibrary{arrows.meta}
>\begin{document}
>\begin{tikzpicture}[scale = 3]
>\draw (0,1) to[out = 20,in = 70] (2,0);
>\draw[-{stealth[scale = 2]},thick] (1,1.05) node(P){} -- (2,.8) node[midway,above]{$d\vec{r}$};
>\node[above] at (P){$P$};
>\draw[-{stealth},thick] (P.center) -- ++ (.2,-.5)node[midway,left]{$\vec{F}$};
>\end{tikzpicture}
>\end{document}
>```
>#### Dimensioni
>In base alla definizione risulta che il lavoro è una grandezza scalare, con dimensioni
>$[d\mathcal{L}] = [F][dr] = [L]^2[M][T]^{-2}$
>
>#### Unità di Misura
>L'unità di misura nel sistema internazionale è il [[Joule]], pari ad un newton x un metro


>[!oss]
>Non è detto che sia la forza $\vec{F}$ a determinare lo spostamento $d\vec{r}$, se ad esempio $\theta > \pi / 2$, avremo $d\mathcal{L} < 0$ ossia la forza $\vec{F}$ si oppone allo spostamento, provocato da altre interazioni.
>In generale se $d\mathcal{L}< 0$ il lavoro elementare compito da $\vec{F}$ si dice lavoro resistente, viceverse se $d\mathcal{L} > 0$ si dice lavoro motore. Ad esempio le forze di attrito compiono sempre un lavoro resistente (negativo)

>[!oss]
>Per calcolare il prodotto scalare possiamo scomporre la forza e lo spostamento in diversi modi:
>1. Nelle componenti parallela e normale alla traiettoria:
>   $$ \vec{F} = F_{T} \hat{u}_{T} + F_{N}\hat{u}_{N}\quad ;\quad d\vec{r} = ds \hat{u}_{T} \implies d\mathcal{L} = F_{T}ds \quad \text{Il lavoro non dipende da }F_{N}!$$
>
>2. Nelle componenti cartesiane:
> $$ \vec{F} = F_{x}\hat{u}_{x} + F_{y}\hat{u}_{y} + F_{z}\hat{u}_{z}\quad;\quad d\vec{r} = dx\hat{u}_{x} + dy\hat{u}_{y} + dz\hat{u}_{z} \implies d\mathcal{L} = F_{x}dx + F_{y}dy + F_{z}dz $$

>[!oss]
>Il lavoro elemntare risulta nullo se la forza e lo spostamento sono ortogonali, come ad esempio nel caso del moto circolare unfirome, in cui l'unica forza è centripeta, ortogonale in ogni