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



