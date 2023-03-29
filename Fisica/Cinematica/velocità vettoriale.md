---
aliases: 
creation date: 2023-03-16 15:03
modification date: 2023-03-16 15:03
---

velocità vettoriale media:
$$
\vec{v}_{m}(t_{1},t_{2}) \equiv \frac{\vec{r}(t_{2}) - \vec{r}_{1}(t_{1})}{t_{2}-t_{1}}= \frac{\Delta \vec{r}(t_{1},t_{2})}{t_{2} - t_{1}}
$$

velocità vettoriale istantanea:
$$
\vec{v}(t) \equiv \lim_{ \Delta t \to 0 } \frac{\vec{r}(t + \Delta t)-\vec{r}(t)}{\Delta t} = \lim_{ \Delta t \to 0 } \frac{\Delta \vec{r}}{\Delta t}= \frac{d\vec{r}}{dt}
$$



Le grandezze [[Cinematica|cinematiche]] scalari e vettoriali sono assai diverse tra loro, quando si passa al limite per $\Delta t \to 0$ la misura della corda $|\Delta \vec{r}|$ r quella del corrispondente arco $|\Delta s|$ possono essere molto diverse, addirittura nel caso di [[Traiettoria]] non semplice, ossia che presenta un nodo, possiamo avere una velocità vettoriale media nulla senza che si annulli la [[Velocità scalare media]].
$$
\begin{align}
\Delta \vec{r} = 0 \implies \vec{v}_{m} =0 \\
\Delta s \neq 0 \implies v_{m} \neq 0
\end{align}
$$

>[!oss] Scomposizione della velocità vettoriale istantanea in componenti cartesiane
>Dall'espressione del vettore posizione in componenti cartesiani ricaviamo immediatamente
> $$
> \overrightarrow{v} = \frac{dx}{dt}  \hat{u}_{x} + \frac{dy}{dt} \hat{u}_{y} + \frac{dz}{dt} \hat{u}_{z} = v_{x}\hat{u}_{x} + v_{y}\hat{u}y + v_{z}\hat{u}_{z}
>$$

>[!oss] Proprietà di tangenza della velocità vettoriale istantanea alla traiettroia del [[moto]]
> Nella definizione di velocità vettoriale, passando al [[limite]] per $\Delta t \to 0$  si ha che lo spostamento diventa tangenta alla traiettoria, e quindi anche la velocità vettoriale istantanea risultà sempre essere tangente alla traiettroia


```tikz
\usepackage{amsmath}
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw plot[smooth,thick] coordinates {(-.5,0) (0.1,1) (2,1.6)};
\node at (0.3,1.1) (B) {$\bullet$};
\node at (-.42,.2) (A) {$\bullet$};
\draw[-Latex,thick,red] (A.center) -- (B.center) node[midway, below right]{$\Delta \vec{r}$};
\node[above left] at (B) {$P(t + \Delta t)$};
\node[left] at (A) {$P(t)$};
\end{tikzpicture}
$\xrightarrow{\Delta t \to 0}$
\begin{tikzpicture}[scale = 2]
\draw plot[smooth,thick] coordinates {(-.5,0) (0.1,1) (2,1.6)};
\node at (-.42,.2) (A) {$\bullet$};
\draw[-Latex,thick,red] (A.center) -- (-.2,.8) node[above left]{$d\vec{r}$};
\node[left] at (A){$P(t$};
\end{tikzpicture}
\end{document}
```



>[!oss] Legame tra velocità vettoriale e velocità scalare istantanee.
>Definiamo [[versore tangente]] il versore $\hat{u}_{T}$, tangente punto per punto alla [[Traiettoria]] con verso concorde a quello scelto per la misura dell'[[ascissa curvilinea]] $s$.
>Osserviamo che
> $$
> \lim_{ \Delta t \to 0 } \Delta \overrightarrow{r} = \lim_{ \Delta t \to 0 } \Delta s \hat{u}_{T} \implies \overrightarrow{v}(t) = \lim_{ \Delta t \to 0 } \frac{\Delta s \hat{u}_{T}}{\Delta t} = \frac{ds}{dt} \hat{u}_{T} = v(t)\overrightarrow{u}_{T}(t) 
>$$
>Cioè la velocità vettoriale ha per modulo il modulo della velocità scalare

>[!oss] Determinazione della legge oraria della velocità vettoriale istantanea
>Se conosciamo la posizione iniziale $\overrightarrow{r}_{0}$ e l'andamento nel tempo della velocità vettoriale istantanea $\vec{v}(t)$ possiamo ricavare la legge orario $\vec{r} = \vec{r}(t)$ esattamente come nel caso scalare
> $$
> \Delta \vec{r}_{tot}= \sum_{i}\Delta \vec{r}_{i} = \sum_{i}\vec{v}_{m,i}\Delta t_{i} \implies \vec{r}(t) = \overrightarrow{r}_{0} + \int _{t_{0}}^t \!\vec{v}(t') \, \mathrm{d}t' 
>$$
>ovvero in termini di coordinate cartesiane:
> $$
>\fbox{$\begin{align}
>x(t) = x_{0} + \int _{t_{0}}^t \!v_{x}(t') \, \mathrm{d}t' \\
>y(t) = y_{0} + \int _{t_{0}}^t \!v_{y}(t') \, \mathrm{d}t' \\
>z(t) = z_{0} + \int _{t_{0}}^t \!v_{z}(t') \, \mathrm{d}t'
>\end{align}$}
>$$



