---
aliases: 
creation date: 2023-03-23 13:25
modification date: 2023-03-23 13:25
---

La dinamica si occupa del moto dei corpi in relazione alle **cause** che lo producono. Il moto di un corpo è il risultato delle sue **interazioni** con i corpi che lo circondano.
Ogni interazione è descritta formalmente attraverso una [[grandezza fisica]] vettoriale: la **[[forza]]**. Il [[moto]] di un corpo è anche il risultato di una proprietà intrinseca del corpo, la sua inerzia, che rappresenta la tendenza del corpo a mantenere invariata la propria velocità. Questa proprietà è descritta formalmente attraverso una grandezza fisica [[scalare]], la [[massa]]

![[sistema di riferimento inerziale]]


# Principi della dinamica

![[primo principio della dinamica]]

![[secondo principio della dinamica]]

![[terzo principio della dinamica]]


## [[Problema]] della dinamica del punto materiale
Il problema generale della dinamica del punto materiale consiste nella ricerca della [[legge oraria]] di un [[punto materiale]] di massa $m$ che si muove sotto l'azione della risultate $\vec{F}$ delle forze ad esso applicate.

>[!success]
>Per il [[secondo principio della dinamica]] $\vec{F}(t) = m\vec{a}(t) = m\frac{d\vec{v}(t)}{dt} = m\frac{d^2\vec{r}(t)}{dt^2}$, dunque, se l'andamento temporale della risultante è noto basta eseguire una doppia integrazione vettoriale nel tempo, inserendo le condizioni iniziali di velocità e di posizione:
>$$ \begin{align} 
 m\int_{t_{0}}^t \!d\vec{v}(t') \, \mathrm{d}t = \int _{t_{0}}^t \!F(t') \, \mathrm{d}t' \implies &\vec{v}(t) = \vec{v}(t_{0}) + \frac{1}{m} \int _{t_{0}}^t \!\vec{F}(t') \, \mathrm{d}t'    \\
>& \vec{r}(t) = \vec{r}(t_{0}) + \int _{t_{0}}^t \!\vec{v}(t') \, \mathrm{d}t' 
\end{align} $$

>[!oss]
>In generale tuttavia l'andamento temporale della risultante delle forze non è noto esplicitamente ma si conosce ad esempio la sua dipendenza dalla posizione e dalla velocità del [[punto materiale]], oltre che del tempo.
>Quindi in quanto il secondo principio della dinamica permette di scrivere un'equazione vettoriale del tipo 
>$$
>m\frac{d^2\vec{r}(t)}{dt^2} = \vec{F}\left( \vec{r}(t), \frac{d\vec{r}(t)}{dt},t  \right) 
>$$
>il problema generale della dinamica anche per un singolo punto materiale è un sistema complesso che si esprime come un sistema di tre equazioni differenziali scalari del tipo
> $$ \begin{cases}
>m\frac{d^2x(t)}{dt^2} = F_{x}\left( x(t),y(t),z(t), \frac{dx(t)}{dt},\frac{dy(t)}{dt}, \frac{dz(t)}{dt},t    \right)  \\
>m\frac{d^2y(t)}{dt^2} = F_{y}\left( x(t),y(t),z(t), \frac{dx(t)}{dt}, \frac{dy(t)}{dt}, \frac{dz(t)}{dt}, t    \right) \\
>m \frac{d^2z(t)}{dt^2} = F_{z}\left( x(t),y(t),z(t), \frac{dx(t)}{dt}, \frac{dy(t)}{dt}, \frac{dz(t)}{dt},t    \right) 
>\end{cases} $$
>In generale tale sistema non ammette una soluzione esatta in forma analitica. Caso per caso sarà possibile determinare la soluzione o per via analitica esatta (casi particolari) o sulla base di talune approssimazioni, analitiche o numeriche



# Dinamica in [[sistemi non inerziali]]

Sappiamo che in un [[sistema di riferimento inerziale]] il [[secondo principio della dinamica]] si scrive come
$$
\vec{F} = m\vec{a}
$$
dove $\vec{a}$ rappresenta l'accelerazione assoluta, cioè riferita al sistema fisso, o meglio inerziale, del [[punto materiale]] soggetto alla [[forza]] $\vec{F}$.
Ricordiamo tuttavia che un sistema solidale con la Terra non è inerziale, come non lo sono molti altri sistemi di riferimento comunemente usati. Sappiamo però dalla [[cinematica]] del [[moto relativo]] che l'accelerazione assoluta viene scomposta ([[legge di composizione delle accelerazioni]]):
$$
\vec{a}_{a} = \vec{a}_{r} + \vec{a}_{c} + \vec{a}_{t}
$$
con
- $\vec{a}_{r}$ accelerazione relativa
- $\vec{a}_{c}$ [[accelerazione di coriolis]]
- $\vec{a}_{t}$ accelerazione di trascinamento

>[!oss]
>L'accelerazione relativa misurata in un sistema di riferimento non inerziale non coincide con l'accelerazione assoluta riferita al sistema inerziale. Poichè la forza $\vec{F}$ è la stessa in enrambi i sistemi di riferimento, nel sistema non inerziale non puó valere il secondo principio della dinamica:
>$$ \vec{F} = m\vec{a}_{a} \neq m\vec{a}_{r} $$


Questo ci porta a definire le ![[forze apparenti]]
In un sistema non inerziale non vale neppure il principio d'inerzia, un corpo non soggetto ad interazioni si muove in generale di moto accelerato, infatti:
$$
\vec{F} = 0 \implies \vec{a}_{a} = 0\quad ;\quad\vec{a}_{r} = \vec{a}_{c} - \vec{a}_{t} \neq 0\quad \vec{a}_{r} = \frac{1}{m}\vec{F}_{app}
$$

## Sistemi notevoli

### Sistema in moto traslatorio puro

>[!esempio] ascensore in discesa accelerata.
>Come sistema inerziale si puó escegliere un sistema solidale con la terra, come sistema mobile quello dell'ascensore, studiamo le forze che agiscono sul passeggero.
>
> ```tikz
> \usetikzlibrary{arrows.meta}
>\begin{document}
>\begin{tikzpicture}[scale = 1.5, every node/.style={scale = 2}]
>\draw[-{Stealth[scale = 2]}] (0,0) -- (0,5)node[below left]{$y$}; 
>\draw[fill = cyan, fill opacity = 0.2] (1,1) -- (1,4) -- (3,4) -- (3,1) -- (1,1);
>\draw[fill = white,thick] (2,2.5) circle (.2);
>\draw[thick] (2,2.3) -- (2,1.5);
>\draw[thick] (1.5,1.9) -- (2,2) -- (2.5,1.9);
>\draw[thick] (1.8, 1) -- (2,1.5) -- (2.2, 1);
>\draw[-{Stealth[scale = 2]}] (2,1) -- (2,0)node[right]{$\vec{a}_{d}$};
>\node[scale = .5] (p) at (2.8,2){$\bullet$};
>\draw[-{Stealth[scale = 2]}] (p.center) -- ++ (0,-1.5) node[right]{$m\vec{g}$};
>\draw[-{Stealth[scale = 2]}] (p.center) -- ++ (0,.5) node[right]{$\vec{R}$};
>\end{tikzpicture}
>\end{document}
>```
>
>Ascensore in discesa accelerata. Come sistema inerziale si puó scegliere un sistema solidale con la terra, come sistema mobile quello dell'ascensore. Studiamo le forze che agiscono su un passeggero.
>L'accelerazione di trascinamente è la stessa per tutti i punti del sistema (essendo un moto traslatorio) e vale per ipotesi:
>$\vec{a}_{t} = -a_{d}\hat{u}_{y}$
>Il passeggero è fermo rispetto alla cabina quindi:
>$$ \begin{align} \\
>&\vec{v}_{r} = 0 \implies \vec{a}_{c} = 2\vec{\omega} \times \vec{v}_{r} =0 \\
>&\vec{a}_{r} = 0 \implies m\vec{a}_{r} = \vec{F} + \vec{F}_{t} = 0
>\end{align} $$
>La forza $\vec{F}$ è la somma della forza peso e della reazione vincolare, avremo quindi
>$$ \vec{F} = (-mg + R)\hat{u}_{y}\quad ; \quad \vec{F}_{t} = -m\vec{a}_{t} = +ma_{d}\hat{u}_{y} \implies R=m(g-a_{d}) $$
>È come se all'interno dell'ascensore l'accelerazione di gravità fosse diminuita al valore $g - a_{d}$ per effetto della discesa accelerata. Se risulta $a_{d} = g$ il passeggero ha la sensazione di essere privo di peso; la forza in grado di contrastare la sensazione di peso è una **forza apparente**

### Sistema in moto rotatorio puro
Consideriamo un punto materiale $P$ di massa $m$ che sia vincolato ad una piattaforma rotante con velocità angolare costante.

```tikz
\usepackage[svgnames]{xcolor}
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}[scale = 1.2]
\draw[fill = Peru] (0,0) circle (2);
\draw (0,0) circle (.3);
\draw[-{Stealth},thick] (0,0) -- ++ (.75,1.25) node[](P){$\bullet$} node[above]{$P$};
\draw[-{Stealth},thick] (P.center) -- ++ (-1.25,.75) node[above]{$\vec{v}_a$};
\draw[-{Stealth},thick] (-2.5,0) -- (2.5,0) node[below]{$x$};
\draw[-{Stealth},thick] (0,-2.5) -- (0,2.5) node[right]{$y$};
\node (ome) at (-.5,-.5){$\bullet$};
\draw (ome) circle (.3);
\node[below right = 1.25mm] at (ome){$\vec{\omega}$};
\draw[-{Stealth},thick] (-1,-.3) arc (180:270:.7);
\end{tikzpicture}
\end{document}
```

Siano $r$ la distanza di $P$ dall'asse di rotazione e $\vec{\omega}$ il vettore velocità angolare (costante). La legge di composizione della velocità si scrive in questo caso:
$$
\vec{v}_{r} = 0 \implies \vec{v}_{a} = \vec{v}_{t} = \vec{\omega} \times \vec{r}_{r} = \vec{\omega} \times \vec{r}
$$
Il punto $P$ si muove di moto circolare uniforme per un osservatore inerziale, metnre rispetto al sistema rotante solidale con la piattaforma è fermo. Avremo quindi:
$$
\vec{a}_{r} = 0 \implies \vec{F} + \vec{F}_{app} = \vec{F} + \vec{F}_{t} + \vec{F}_{c} = 0
$$
Le forze reali sono la forza peso e la reazione vincolare, avremo quindi:
$$ \vec{W} + \vec{R} - m(\vec{a}_{c} + \vec{a}_{l})=0 \implies m\vec{g} + \vec{R} - m[2\vec{\omega} \times \vec{v}_{r} + \vec{\omega} \times (\vec{\omega} \times \vec{r})]=0 $$
Il primo terime fra parentesi è la **forza di Coriolis**, che si annulla se la  velocità relativa è zero (come nel nostro caso), o se è parallela all'asse di rotazione.
Il secondo termine, dovuto all'accelerazione di trascinamento, prende il nome di **forza centrifuga** e vale in questo caso $\vec{F}_{t} = m \omega^2 r \hat{u}_{r}$. È diretta radialmente verso l'esterno (da cui il nome centrifuga) in verso opposto all'accelerazione di trascinamento, che è poi l'accelerazione centripeta del moto circolare.
L'equazione di equilibrio diventa:
$$
-mg\hat{u}_{z} + \vec{R} + m\omega^2 r\hat{u}_{r} = 0 \implies \vec{R} = mg\hat{u}_{z} - m\omega^2r\hat{u}_{r} = \vec{R}_{N} + \vec{R}_{T}
$$
La reazione vincolare ha quindi una **componente normale** alla piattaforma, che bilancia la forza peso, ed una ad essa **tangente** che bilancia la forza centrifuga.

Supponiamo che ad un certo istante di tempo il punto materiale $P$ si stacchi dalla piattaformaL non abbiamo piú alcuna reazione vincolare tangente (supponendo per semplicità che la superficie della piattaforma sia priva di attrito) la velocità relativa non è piú vincolata a zero. Si avrà che:
- Per un osservatore inerziale il punto $P$ fugge lungo la tangente alla traiettoria circolare con una velocità $v = \omega r$ muovendosi di moto rettilineo uniforme sulle piattaforma (la reazione vincolare bilancia la forza peso e la risultante delel forze reali è nulla)
- Per un osservatore solidale con la piattaforma il punto si muove in maniera piú complessa, sotto l'azion della forza centrifuga e della forza di Coriolis (mentre le forze reali si annullano). La traiettoria sarà curvilinea, diretta verso l'esterno (a causa della forza centrifuga) e in direzione opposta a quella del moto della piattaforma per effetto della forza di Coriolis.

In figura è schematizzato il moto del punto materiale $P$ a partire dall'istante in cui si stacca dalla piattaforma, nel riferimento inerziale $(a)$ e nel sistema solidale con la piattaforma

```tikz
\usepackage[svgnames]{xcolor}
\usetikzlibrary{arrows.meta}
\begin{document}

%(a)
\begin{tikzpicture}[scale = 1.2]
\draw[fill = Peru] (0,0) circle (2);
\draw (0,0) circle (.3);
\draw[-{Stealth},thick] (0,0) -- ++ (.75,1.25) node[](P){$\bullet$} node[above]{$P$};
\draw[-{Stealth},thick] (P.center) -- ++ (-1.25,.75) node[above]{$\vec{v}_a$};
\draw[-{Stealth},thick] (-2.5,0) -- (2.5,0) node[below]{$x$};
\draw[-{Stealth},thick] (0,-2.5) -- (0,2.5) node[right]{$y$};
\node (ome) at (-.5,-.5){$\bullet$};
\draw (ome) circle (.3);
\node at (-.3,.3){z};
\node[below right = 1.25mm] at (ome){$\vec{\omega}$};
\draw[-{Stealth},thick] (-1,-.3) arc (180:270:.7);
\end{tikzpicture}

\hspace{5cm}

%(b)
\begin{tikzpicture}[scale = 1.2]
\draw[fill = Peru] (0,0) circle (2);
\node at (-.3,.3){z};
\draw (0,0) circle (.3);
\draw[-{Stealth},thick] (0,0) -- ++ (.75,1.25) node[](P){$\bullet$} node[above]{$P$};
\draw (P) to ();
\draw[-{Stealth},thick] (-2.5,0) -- (2.5,0) node[below]{$x$};
\draw[-{Stealth},thick] (0,-2.5) -- (0,2.5) node[right]{$y$};

\end{tikzpicture}

\end{document}
```
#todo animazione :3