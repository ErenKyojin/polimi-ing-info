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


