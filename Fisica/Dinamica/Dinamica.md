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
>L'accelerazione di trascinamente è la stessa per tutti i punti del sistema (essendo un moto traslator)

