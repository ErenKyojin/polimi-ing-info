---
aliases: 
creation date: 2023-03-25 17:06
modification date: 2023-03-25 17:06
---

>[!def] Lavoro elementare di una [[forza]]
>Si dice che una forza compie un lavoro quando il [[punto materiale]] al quale è applicata si sposta. Si definisce lavoro elementare $d\mathcal{L}$ di una forza $\vec{F}$ durante lo spostamente $d\vec{r}$ il [[prodotto scalare]]:
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
>L'unità di misura nel sistema internazionale è il [[Joule]], pari ad un newton x un [[metri|metro]]


>[!oss]
>Non è detto che sia la forza $\vec{F}$ a determinare lo spostamento $d\vec{r}$, se ad esempio $\theta > \pi / 2$, avremo $d\mathcal{L} < 0$ ossia la forza $\vec{F}$ si oppone allo spostamento, provocato da altre interazioni.
>In generale se $d\mathcal{L}< 0$ il lavoro elementare compito da $\vec{F}$ si dice lavoro resistente, viceverse se $d\mathcal{L} > 0$ si dice lavoro motore. Ad esempio le [[forze di attrito]] compiono sempre un lavoro resistente (negativo)

>[!oss]
>Per calcolare il prodotto scalare possiamo scomporre la forza e lo spostamento in diversi modi:
>1. Nelle componenti parallela e normale alla [[traiettoria]]:
>   $$ \vec{F} = F_{T} \hat{u}_{T} + F_{N}\hat{u}_{N}\quad ;\quad d\vec{r} = ds \hat{u}_{T} \implies d\mathcal{L} = F_{T}ds \quad \text{Il lavoro non dipende da }F_{N}!$$
>
>2. Nelle componenti cartesiane:
> $$ \vec{F} = F_{x}\hat{u}_{x} + F_{y}\hat{u}_{y} + F_{z}\hat{u}_{z}\quad;\quad d\vec{r} = dx\hat{u}_{x} + dy\hat{u}_{y} + dz\hat{u}_{z} \implies d\mathcal{L} = F_{x}dx + F_{y}dy + F_{z}dz $$

>[!oss]
>Il lavoro elemntare risulta nullo se la forza e lo spostamento sono ortogonali, come ad esempio nel caso del [[moto circolare]] unfirome, in cui l'unica forza è centripeta, ortogonale in ogni punto alla traiettoria. Altrimenti il lavoro elemntare è positivo per angoli minori dell'angolo retto, negativo per angoli superiori all'angolo retto.

>[!oss]
>Se un certo numero $n$ di forze agiscono sul [[punto materiale]] $P$, il lavoro elemntare della [[forza risultante]] è la somma dei singoli lavori:
> $$
> d\mathcal{L} = \vec{F} \cdot d\vec{r} = \left( \sum_{i=1}^n \vec{F}_{i}\right) \cdot d\vec{r} = \sum_{i=1}^n (\vec{F}_{i} \cdot d\vec{r}) = \sum_{i=1}^n d\mathcal{L}_{i}
>$$

>[!def] lavoro di una forza lungo un cammino finito
>Il lavoro $\mathcal{L}$ compiuto da una forza $\vec{F}$ nello spostamento dal punto $A$ al punto $B$ lungo la traiettoria $\gamma$ si definisce come l'**l'[[integrale]] di linea** del lavoro elementare lungo $\gamma$
> $$
> \mathcal{L} = \int _{A,\gamma}^B \!\vec{F} \cdot\, \mathrm{d}\vec{r} 
>$$
>
> ```tikz
> \usetikzlibrary{arrows.meta}
>\begin{document}
>\begin{tikzpicture}[scale = 2,auto, every node/.style = {scale = 1.5}]
>
>\begin{scope}[-{Stealth[scale = 2]}]
>\node (O) at (0,0,0){};
>\draw (O.center) node[below]{O} -- (2,0,0) node[above]{$y$};
>\draw (O.center) -- (0,2,0) node[right]{$z$};
>\draw (O.center) -- (0,0,2) node[below]{$x$};
>\end{scope}
>
>\draw (.2,1.4,.2) to[in = 20, out = -70] (1.8,.7,.6) node[below]{$\gamma$};
>\node[scale = .5] (A) at (.28,1.3,.25){$\bullet$};
>\node[scale =.5] (B) at (1.8,.85,.6){$\bullet$};
>\node[above right] at (A) {$A$};
>\node[above right] at (B){$B$};
>\draw[-{Stealth[scale = 2]}] (O) -- (A.center) node[midway,left]{$\vec{r}$};
>\end{tikzpicture}
>\end{document}
>```
>

>[!oss]
>In generale $\mathcal{L}$ non dipende solo da $A$ e $B$ ma anche che il lavoro elementare $d\mathcal{L}$ non è differenziale esatto e per distinguere questa sua natura inesatta andrebbe indicato piú propriamente con la notazione $\delta \mathcal{L}$

Se sono note la dipendenza dalla posizione delle componenti cartesiane di $\vec{F}$ e la legge oraria in coordinate cartesiane scriveremo:
$$
\mathcal{L} = \int _{\gamma} \!F(x,y,z)\mathrm{d}x + F_{y}(x,y,z)\mathrm{d}y + F_{z}(x,y,z) \, \mathrm{d}z \quad ;\quad \gamma : \begin{cases}
x = x(t) \\
y = y(t) \\
z = z(t)
\end{cases} 
$$
In alternativa avremo
$\mathcal{L} = \int _{\gamma} \!F_{T}(s) \, \mathrm{d}s$


[[potenza]]
[[Energia cinetica]]
## caso di una forza costante
Consideriamo una forza $\vec{F}$ costante che agisce su un punto materiale di massa $m$, il lavoro compiuto da $\vec{F}$ quando il punto si sposta da $A$ a $B$ vale
$$
\mathcal{L}_{A \to B,\gamma} = \int _{A,\gamma}^B \!\vec{F}\cdot \, \mathrm{d}\vec{r} = \vec{F} \cdot \int _{A,\gamma}^B \! \, \mathrm{d}\vec{r} = \vec{F}(\vec{r}_{B}-\vec{r}_{A}) = \vec{F} \cdot \Delta \vec{r}(A,B),\quad\forall \gamma
$$
Quindi il lavoro compiuto da una forza costante è indipendente dalla traiettoria ma dipende solo dagli estremi $A$ e $B$, precisamente dal vettore spostamento $\Delta \vec{r} = \overrightarrow{AB}$

>[!esempio] Forza peso
>$\vec{W} = m\vec{g} = -mg\vec{u}_{y} = \vec{\cost}$
>$$ \begin{align}
>\mathcal{L}_{A\to B} &= \vec{F} \cdot \Delta \vec{r} = F_{x}\Delta x + F_{y}\Delta y = F_{y}\Delta y = \\
>&= -mg(y_{B} - y_{A}) = +mg(y_{A} - y_{B})
>\end{align} $$
>
>>[!oss]
>>Il lavoro compiuto dipende solo dalle quote dei punti $A$ e $B$ e risulta indipendente dalla traiettoria seguita (caduta libera, moto lungo piano inclinato)

>[!oss]
>In base al teorema dell'energia cinetica si dimostra ora, in modo del tutto generale, che un corpo che ccade da una data altezza subendo solo ed esclusivamente il lavoro della forza peso giunge a terra con la stessa velocità indipendentemente dalla traiettoria da esso seguita.
>Se supponiamo che il punto materiale abbia in $A$ velocità $v_{A}$ e in $B$ velocità $v_{B}$ in base al teorema dell'energia cinetica avremo:
>$$ \begin{align}
>\mathcal{L}_{A\to B} &= \frac{1}{2} mv_{B}^2 - \frac{1}{2}mv_{A}^2 \implies mg(y_{A} - y_{B}) = \frac{1}{2}mv_{B}^2 - \frac{1}{2}mv_{A}^2  \\
>&\implies v_{B} = \sqrt{ v_{A}^2 + 2g(y_{A}-y_{B}) } \qquad \forall \gamma
>\end{align} $$

Possiamo quindi definire l'[[energia potenziale]] della forza peso