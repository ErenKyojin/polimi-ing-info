i---
aliases: 
creation date: 2023-04-10 18:19
modification date: 2023-04-10 18:19
---

Dati un [[punto materiale]] $P$, avente [[quantità di moto]] $\vec{p}$ ed un polo $O$ si definisce momento della quantità di [[moto]] o momento angolare $\vec{L}_{O}$ di $P$ rispetto ad $O$ il vettore
$\vec{L}_{O} = \vec{r} \times \vec{p}$ 
dove $\vec{r}$ è il vettore che va da $O$ a $P$


![[Seconda equazione cardinale della dinamica]] per un singolo punto materiale



# Momento angolare a planarità del moto
Osserviamo che, per le proprietà del prodotto vettore, il momento angolare risulta sempre ortogonale al piano individuato dal vettore $\vec{p}$ (ovvero da $\vec{v}$, ad esso parallelo) e dal punto $O$. In generale tale piano non è fisso durante il moto del punto materiale, ma è, per così dire, un piano locale, diverso in punti diversi della traiettoria del moto. Ne consegue che, sempre in generalem la direzione del momento angolare di un punto materiale rispetto ad un dato polo $O$ varia nel tempo.
Vi sono casi però in cui il punto materiale compie un moto [[piano]]. Se anche il polo $O$ viene scelto nel piano del moto, allora ilmomento angolare è sempre ortogonale al piano del moto, e quindi la sua direzione resta costante nel tempo.
Viceversa, se il momento angolare $\vec{L}$ di un punto materiale $P$ ha una [[direzione]] costante, allora il moto di $P$ è un moto piano, infatti sarà costante la direzione del prodotto vettore $\vec{r} \times \vec{p}$, cioè il piano in cui giacciono $\vec{r}$ e $\vec{p}$ è lo stesso in tutti gli istanti del moto.


>[!esempio] [[Moto circolare]]
>Consideriamo il moto lungo una circonferenza di raggio $r$ e centro $O$: il momento angolare di $P$ rispetto al centro $O$ vale
>$$ \vec{L} = m\vec{r} \times \vec{v}= mr^2\vec{\omega}$$
>
> ```tikz
> \usetikzlibrary{arrows.meta}
>\begin{document}
>\begin{tikzpicture}
>\node (O) at (0,0,0){};
>\draw (0,0,0) circle (2 and 1);
>\draw[thick,-{Stealth[scale = 1.3]}] (O.center) -- ++ (0,2,0) node[below right]{$\vec{\omega}$};
>\draw[thick,-{Stealth[scale = 1.3]}] (O.center) -- ++(2,0,2)node[midway, above]{$\vec{r}$}node(P){};
>\draw[thick,-{Stealth[scale = 1.3]}] (P.center) -- ++ (1,0,-3) node[above left]{$\vec{p}$};
>\draw[thick,-{Stealth[scale = 1.3]}] (-1.5,0,0) arc [start angle=180, end angle = 270, x radius = 1.5, y radius = 0.75];
>\end{tikzpicture}
>\end{document}
>```

>[!esempio] moto piano non circolare
>Conviene utilizzare le [[coordinate polari]] del piano, e scomporre la velocità secondo le componenti
>$$ v_{r} = \frac{dr}{dt}\quad;\quad v_{\theta} = r \frac{d\theta}{dt} = r\omega   $$
>Il momento angolare rispetto all'origine vale quindi:
>$$ \begin{align}
>\vec{L} &= m\vec{r}\times \vec{v} = m\vec{r} \times (v_{r}\hat{u}_{r} + v_{\theta}\hat{u}_{\theta}) = \\
> &= m[v_{r}\vec{r} \times \hat{u}_{r} + v_{\theta}\vec{r} \times \hat{u}_{\theta}] = mv\theta \vec{r} \times \hat{u}_{\theta} = \\
> &=mr \frac{d\theta}{dt} r (\hat{u}_{r} \times \hat{u}_{\theta}) = mr^2 \omega \hat{u}_{z} = mr^2 \vec{\omega}
>\end{align} $$
>essendo $\vec{r} \times \hat{u}_{r} = 0$
> ```tikz
> \usetikzlibrary{arrows.meta}
>\begin{document}
>\begin{tikzpicture}
>\draw[-{Stealth[scale = 1.3]}] (-.5,0) -- (5,0) node[below]{$x$};
>\draw[-{Stealth[scale = 1.3]}] (0,-.5) -- (0,5)node[left]{$y$};
>\node[below left] at (0,0) {$O$};
>\draw[-{Stealth[scale = 1.3]},thick] (0,0) -- ++ (2,3)node[midway,above]{$\vec{r}$} node(r){};
>\begin{scope}[rotate = -32]
>\draw[-{Stealth[scale = 1.3]},thick] (r.center) -- ++ (0,1.5)node[midway,left]{$\vec{v}_{r}$};
>\draw[-{Stealth[scale = 1.3]},thick] (r.center) -- ++ (1,0)node[midway,below]{$\vec{v}_{\theta}$};
>\draw[-{Stealth[scale = 1.3]},thick] (r.center) -- ++ (1,1.5)node[above]{$\vec{v}$};
>\draw (r.center) -- ++ (0,1.5) -- ++ (1,0) -- ++ (0,-1.5);
>\end{scope} 
>\draw[smooth] (.2,1) to[out = 90, in =180] (2,3) to[out = -20, in = 200] (4,3) to[out = 20, in = 270] (4.5,4);
>\draw (1,0) arc (0:55:1) node[midway,right]{$\theta$};
>\end{tikzpicture}
>\end{document}
>```
>Consideriamo un riferimento inerziale ed un punto materiale $P$ in moto in esso. Ricordiamo che la [[seconda equazione cardinale della dinamica]] afferma che:
>In ogni istante la [[derivata]] temporale del momento angolare di un punto materiale $P$ è pari al momento della risultante delle forze applicate a $P$ rispetto allo stesso polo $O$.
>$$ \fbox{$\vec{\tau} = \frac{d\vec{L}}{dt}$} $$
>Osserviamo che $\vec{\tau} = 0 \implies \frac{d\vec{L}}{dt} = 0 \implies \vec{L} = \cost$ in modulo, direzione e verso.
>
>Dunque, dalla seconda equazione cardinale segue che se il momento delle forze applicate ad un punto materiale $P$ rispetto ad un certo polo $O$ è nullo, allora il momento angolare di $P$ rispetto a $O$ è costante, ed il moto di $P$ è piano.

## momento angolare per [[Sistemi di punti materiali]]
Si definisce momento della quantità di moto, o momento angolare di un sistema di punti rispetto ad un polo $O$ la somma vettoriale dei momenti della quantità di moto dei singoli punti rispetto allo stesso polo:
$$ \vec{L} \equiv \sum_{i = 1}^n \vec{L}_{i} = \sum_{i = 1}^n \vec{r}_{i} \times \vec{p}_{i} $$
*Dove omettiamo il pedice $\text{O}$ per brevità.*
Per ciascun punto materiale del sistema vale la seconda equazione cardinale vista in precedenza cioè
$$ \frac{d\vec{L}_{i}}{dt} = \vec{\tau}_{i}  $$
Sommando sull'indice $i$ tale equazione otteniamo:
$$ \sum_{i=1}^n \frac{d\vec{L}_{i}}{dt} = \frac{d\vec{L}}{dt} = \sum_{i = 1}^n \vec{\tau}_{i} = \vec{\tau}   $$
Tenendo conto, inoltre, che il momento risultante delle forze agenti sul sitema è pari al momento risultante delle sole forze esterne risulta
$$ \fbox{$\frac{d\vec{L}}{dt} = \vec{\tau}^{(E)}$} $$
Tale equazione prende il nome di seconda equazione cardinale per i [[sistemi di punti materiali]] ed afferma che:

>[!quote] .
>La derivata temporale del momento della quantità di moto di un sistema di punti rispetto ad un dato polo fisso è uguale al momento risultante, rispetto allo stesso polo, delle forze esterne applicate al sistema


>[!oss]
>Un sistema è isolato se si annullano sia la risultante delle forze esterne, sia il momento risultante delle forze esterne. In generale il fatto che la risultante delle [[forze esterne]] sia nulla non implica che si annulli anche il momento risultante delle forze esterne:
>$$ \vec{F}^{(E)} = 0 \cancel{ \implies } \vec{\tau}^{(E)} = 0 $$
>Per un sistema isolato si conservano sia la [[quantità di moto]] sia il [[momento]] angolare

>[!def] Seconda euqazione cardinale rispetto ad un polo mobile
>Consideriamo ora un polo $\text{O}$ che si muove con velocità $\vec{v}_{\text{O}}$ in un [[sistema di riferimento inerziale]].
>Il momento angolare di $P$ rispetto a $\text{O}$ vale:
>$$ \vec{L}_{\text{O}} = \vec{r} \times \vec{p}\quad \vec{r} = \vec{r}_{P} - \vec{r}_{O} \implies \vec{v} = \frac{d\vec{r}}{dt} = \frac{d\vec{r}_{P}}{dt} - \frac{d\vec{r}_{O}}{dt} = \vec{v}_{P} - \vec{v}_{O}   $$
>$$ \frac{d\vec{L}_{\text{O}}}{dt} = \frac{d\vec{r}}{dt} \times \vec{p} + \vec{r} \times \vec{F} = (\vec{v}_{P} - \vec{v}_{\text{O}}) \times \vec{p} + \vec{\tau} = -\vec{v}_{\text{O}} \times \vec{p} + \vec{\tau}  $$
>Essendo $\vec{v}_{P} \parallel \vec{p} \implies \vec{v}_{p} \times \vec{p} = 0$.
>In conclusione, la [[seconda equazione cardinale della dinamica]] rispetto ad un polo mobile con velocità $\vec{v}_{\text{O}}$ diventa, per un singolo punto materiale:
>$$ \fbox{$\frac{d\vec{L}_{O}}{dt} + \vec{v}_{\text{O}} \times \vec{p} = \vec{\tau}$} $$
>Per un [[Sistemi di punti materiali|sistema di punti materiali]] tale equazione varrà per ciascun punto del sistema. Sommando su tutti i punti, otteniamo banalmente
>$$ \fbox{$\frac{d\vec{L}_{\text{O}}}{dt} + \vec{v}_{\text{O}} \times \vec{p} = \vec{\tau}^{(E)}$} $$
>con ovvio significato dei simboli utilizzati per le grandezze totali del sistema


>[!oss]
>Se il polo mobile coincide con il centro di massa del sistema di punti materiali $(O = CM)$
>$$ \vec{v}_{CM} \times \vec{p} = \vec{v}_{CM} \times M \vec{v}_{CM} = 0 \implies \frac{d\vec{L}_{CM}}{dt} = \vec{\tau}_{CM}^{(E)}  $$
>Il centro di massa è un polo mobile ma gode di proprietà particolari

