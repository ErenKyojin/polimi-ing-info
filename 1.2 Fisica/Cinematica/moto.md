---
aliases: moti
creation date: 2023-03-16 13:48
modification date: 2023-03-16 13:48
---

Opposoto di quiete, sono entrambi concetti relativi dipendenti dal sistema di riferimento stesso. Per desrivere il moto di un [[Punto materiale]] occorre fissare un **sistema di riferimento** e disporre di un **orologio**

>[!def]
>moto uniforme => moto in cui la [[Velocità scalare media]] è costante


# Moto del [[Punto materiale]]

Fissato un opportuno [[sistema di riferimento cartesiano]] dello spazio, la posizione occupata dal punto materiale $P$ puó essere descritta attraverso le tre coordinate cartesiano o attraverso il vettore posizione:
$$
 \overrightarrow{r}\equiv\overrightarrow{OP} = x\hat{u}_{x} + y\hat{u}_{y} + z\hat{u}_{z}
$$

>[!remark] Componenti scalari del vettore posizione
>Il vettore posizione ha per componenti scalari cartesiane le coordinate cartesiane del punto materiale da esso individuato.

>[!remark] Modulo direzione e verso del vettore posizione
>Il modulo del vettore posizione vale $r \equiv |r| = \sqrt{ x^2 + y^2 + z^2 }$.
>La sua direzione ed il suo verso sono individuati dagli angoli $(\alpha,\beta,\gamma)$ formati con i versori degli assi cartesiani, che sono legati alle coordinate del punto attraverso i coseni direttori:
> $$
> x = r\cos \alpha, y = r\cos \beta, z = r \cos \gamma; \cos^2 \alpha + \cos^2 \beta + \cos ^2 \gamma = 1
>$$

[[velocità vettoriale]]
[[Accelerazione vettoriale]]

Possiamo scomporre l'accelerazione in componenti cartesiane:
$$
\vec{a}(t) = \frac{d\vec{v}}{dt} = \frac{d}{dt}\left( \frac{d\vec{r}}{dt}  \right) = \frac{d^2\vec{r}}{dt^2} = \frac{d^2x}{dt^2}\hat{u}_{x} +\frac{d^2y}{dt^2}\hat{u}_{y} + \frac{d^2z}{dt^2}\hat{u}_{z}    
$$
Un'altra utile scomposizione dell'accelerazione è quella in componeni tangenziale e normale. vedremo che essa sarà alla base della comprensione del moto circolare.
In base alla proprietà descritta nella terza osservazione abbiamo:
$$
\vec{v}(t) = v(t)\vec{u}_{T}(t) \implies \vec{a} = \frac{d}{dt}(v\hat{u}_{T}) = \frac{dv}{dt}\hat{u}_{T} + v \frac{d\hat{u}_{T}}{dt} 
$$

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}[scale = 1.5]
\draw (-5,0) .. controls (-6,7) and (2,6) .. (2,6);
\node at (-4.8,3)(P){$\bullet$};
\node at (0,0)(C){$C$};
\draw (C.center) to (P.center);
\draw[-{Latex[length=3mm]},thick,red] (P.center) -- (-4,4.5) node[midway,left,color=black](F){$\large\hat{u}_T(t)$};
\draw[-{Latex[length=3mm]},thick,red] (P.center) -- (-3.5,5) node[left,color=black]{$\large\hat{u}_T(t + \Delta t)$};
\draw[-{Latex[length=3mm]},thick,blue] (P.center) -- (-3.5,4)node[above right]{$\Delta \hat{u}_T (t)$};
\node at (-4,4.5)(F){};
\node at (-3.5,4)(FF){};
\draw[-{Latex[length=3mm]},green] (F.center) -- (FF.center);
\draw (C.center) -- (FF.center);
\draw (-1.3,1.5) arc[start angle = 130, end angle = 146, x radius = 2, y radius = 2] node[midway, above left]{$\Delta \theta$};
\end{tikzpicture}
\end{document}
```


La componente normale puó essere meglio esplicitata come segue. Consideriamo la situazione schematizzata nella figura sopra, la derivata del versore tangente è diretta veso la concavità della traiettoria. Se indichiamo con $C$ il punto di incontro delle rette ortogonali al versore tangente nei punti $P(t)$ e $P(t + \Delta t)$ avremo che per $\Delta t \to 0$ l'angolo $\Delta \theta$ tende a 0 e $C$ diventa il centro di un cerchio che approssima molto bene la traiettoria nell'intorno di $P$.

Questo cerchio è detto cerchio oscuratore alla traiettoria in $P$ e la distanza $\rho \equiv \bar{CP}$ prende il nome di raggio di curvatura della traiettoria nel punto $P$.
Sfruttando queste definizioni e le proprietà di similitudine tra i due triangoli rettangoli in figura possiamo scrivere:
$$
|ds| = \rho |d\theta|\quad \text{e}\quad |d\hat{u}_{T}| = |\hat{u}_{T}|\cdot |d\theta|\text{ da cui }|d\hat{u}_{T}|= |d\theta| = \frac{|ds|}{\rho} \implies \left| \frac{d\hat{u}_{T}}{dt} \right| = \left| \frac{ds}{dt}  \right| \frac{1}{\rho} = \frac{|v|}{\rho}
$$
Considerando anche direzione e verso della derivata del versore tangente avremo:
$$
\frac{d\hat{u}_{T}}{dt} = \frac{v}{\rho}\hat{u}_{N}
$$
Dove il [[versore]] $\hat{u}_{N}$ è normale ad $\hat{u}_{T}$ ed è sempre diretto verso l'interno della traiettoria per definizione. Dunque il verso di $d\hat{u}_{T}/dt$ è determinato dal segno di $v$, se $v$ è positivo la derivata del [[versore tangente]] punta verso l'interno della traiettoria, se $v$ è negativo punta veso l'esterno.

Per determinare $\vec{a}_{N}$ basta ora moltiplicare $\frac{d\hat{u}_{T}}{dt}$ per $v$ e quindi $\vec{a}_{N}$ punterà in ogni caso verso l'interno della [[Traiettoria]]. In definitiva l'accelerazioen vettoriale istantanea puó essere scritta come:
$$
\vec{a} = \vec{a}_{T} + \vec{a}_{N} \qquad \vec{a}_{T} = \frac{dv}{dt}\hat{u}_{T}\qquad\vec{a}_{N} = \frac{v^2}{\rho}\hat{u}_{N} 
$$
>[!remark] Significato della scomposizione in componenti tangenziale e normale
>La componente tangente dell'accelerazione rende conto della variabile del [[Modulo]] della velocità, mentre la componente normale dipende dalla variazione in [[direzione]] della [[velocità vettoriale]]

>[!remark] Alcuni importanti tipi di moto
>
> 1. $\rho \to \infty \implies \vec{a}_{N} = 0$ moto rettilineo
> 2. $v = \cost \implies \vec{a}_{T }=0$ moto uniforme

## Moto in [[coordinate polari]]
Se il moto avviene in un piano le sole coordinate cartesiane $x$ ed $y$ sono sufficienti a descriverlo. Alternativamente possiamo utilizzare le [[coordinate polari]] nel [[piano]] che a volte risultano piú convenienti delle cartesiane.
Le definiamo cosí:
>[!def]
>- $r \equiv |\vec{r}| = \overline{OP}$ raggio vettore, distanza del punto $P$ dall'origine e numero reale positivo
>- $\theta \equiv \angle(\vec{r},\hat{u}_{x})$ anomalia, angolo formato da $\vec{r}$ con $\hat{u}_{x}$ definito tra 0 e $2\pi$

Legame con le coordinate cartesiane:

```tikz
\begin{document}
\begin{tikzpicture}[scale = 2,every node/.style={scale=1.3}]
\draw[->](-1,0) -- (4,0)node[below]{$x$};
\draw[->](0,-.5) -- (0,3)node[left]{$y$};
\draw[thick] (0,0) -- (3.5,2.5)node[midway,above]{$r$} node(P){$\bullet$};
\draw[dashed] (0,2.5) node[left]{$y_0$} -- (3.5,2.5);
\draw[dashed] (3.5,0) node[below]{$x_0$} -- (3.5,2.5);
\draw (.5,0)node[above right]{$\theta$} arc (0:35:.5); 
\node[above right] at (P){$P$};
\end{tikzpicture}
\end{document}
```

Si ha che
$$
\fbox{$\begin{align}
&r = \sqrt{ x^2 + y^{2} } \\
&\theta = \arctan(y/x)
\end{align}$}\qquad \fbox{$\begin{align}
&x = r\cos \theta \\
 & y = r\sin \theta
\end{align}$}
$$
![[Legge oraria#Legge oraria in coordinate polari]]

### [[Traiettoria]]
Si può scrivere come
$\theta = \theta(r)$ o come $r = r(\theta)$

### Versori
Si definisce una coppia di versori
$\large\hat{u}_{r} = \frac{\vec{r}}{r}$ detto versore radiale
$\hat{u}_{\theta} = \hat{u}_{z} \times \hat{u}_{r}$ versore trasversale

```tikz
\begin{document}
\begin{tikzpicture}[scale = 2, every node/.style = {scale=1.4}]
\draw[->] (-1,0) -- (4,0)node[below]{$x$};
\draw[->] (0,-.5) -- (0,3)node[left]{$y$};
\draw[->,thick] (0,0) -- (3.2,1.6)node[below]{$\hat{u}_r$};
\draw[->,thick] (0,0) -- (2.8,1.4)node[midway,above]{$\vec{r}$};
\draw[->,thick] (2.8,1.4) -- (2.55,1.9)node[right]{$\hat{u}_\theta$};
\draw (1,0) arc (0:27:1) node[midway, right]{$\theta$};
\end{tikzpicture}
\end{document}
```
>[!remark]
>I versori $\hat{u}_{r}$ e $\hat{u}_{\theta}$ variano con il punto $P$ al contrario di $\hat{u}_{x}$ e $\hat{u}_{y}$. Non vanno inotlre confusi con la coppia $\hat{u}_{N}$ e $\hat{u}_{r}$ che è riferita alla traiettoria e non al sistema di riferimento scelto


Velocità vettorale in coodinate polari e velocità angolare
$$
\vec{v} = \frac{d\vec{r}}{dt} = \frac{d}{dt}(r\hat{u}_{r}) = \frac{dr}{dt}\hat{u}_{r} + r \frac{d\hat{u}_{r}}{dt}   
$$
(Dalle proprietà delle derivate)

Ma
$$\frac{d\hat{u}_{r}}{dt} = \frac{|\hat{u}_{r}|d\theta}{dt} \hat{u}_{\theta} = \frac{d\theta}{dt}\hat{u}_{\theta} = \omega \hat{u}_{\theta} \times \hat{u}_{r} = \overrightarrow{\omega} \times \hat{u}_{r} $$
In questi passaggi abbiamo definito una nuova grandezza, la [[velocità angolare]]



# Casi particolari di moto
Approfondiamo alcuni dei casi particolari di moto, con quindi particolari condizioni che li rendono di interesse:


![[Moto rettilineo]]


![[moto circolare]]

![[moto armonico]]


Con forza costante si ha:
![[moto uniformemente accelerato]]


### Moto lungo un [[piano inclinato]]
Un peso di massa $m$ si trova a muoversi su un [[piano inclinato]] liscio di un angolo $\alpha$ rispetto all'orizzontale e di altezza $h$. Il punto materiale è inizialmente fermo sulla somimtà del piano inclinato. Determinare la legge oraria del suo moto e la velocità finale con cui giunge al suolo.

# ANKI

```anki
id: 1700212221170
deck: Fisica
---
# Moto del punto materiale
===
Fissato un opportuno sistema di riferimento cartesiano dello spazio, la posizione occupata dal punto materiale $P$ può essere descritta attraverso le tre coordinate cartesiano o attraverso il vettore posizione
$\vec{r} \equiv \vec{OP} = x\hat{u}_x + y\hat{u}_y + z\hat{u}_z$
```


```anki
id: 1700212222992
deck: Fisica
---
Scomposizione dell'accelerazione in componenti cartesiane
===
$$\vec{a}(t) = \frac{d}{dt}{\vec{v}} = \frac{d}{dt}\left(\frac{d\vec{r}}{dt}\right) = \frac{d^2\vec{r}}{dt^2} = \frac{d^2x}{dt^2}\hat{u}_x + \frac{d^2y}{dt}\hat{u}_y + \frac{d^2z}{dt^2}\hat{u}_z$$
```


```anki
id: 1700212224371
deck: Fisica
---
scomposizione dell'accelerazione in componenti vettoriali
===
$$ \vec{v}(t) = v(t)\hat{u}_T(t) \implies \vec{a} = \frac{d}{dt}(v\hat{u}_T) = \frac{dv}{dt} \hat{u}_T + v\frac{d}{dt} \hat{u}_T$$

attraverso la dimostrazione del raggio del cerchio oscuratore
$$ \frac{d}{dt}\hat{u}_T = \frac{v}{\rho}\hat{u}_N $$
quindi $$\vec{a} = \vec{a}_T + \vec{a}_N$$
```


```anki
id: 1700212225196
deck: Fisica
---
Moto in coordinate polari
===
$r \equiv |\vec{r}| = \bar{OP}$ ragigo vettore, distanza del punto $P dall'origine e numero reale positivo
$\theta \equiv \angle(\vec{r},\hat{u}_x)$ anomalia, angolo formato da $\vec{r}$ con $\hat{u}_x$ definito tra 0 e $2 \pi$

Si ha che
$$ \begin{align}
r = \sqrt{x^2 + y^2} \qquad&\qquad   x = r\cos\theta \\
&\!\!\!\!\!\!\iff \\
\theta = \arctan(y/x) \qquad&\qquad  y = r\sin\theta
\end{align}$$
```


```anki
id: 1700212225668
deck: Fisica
---
Legge oraria in coordinate polari
===
Possiamo scrivere la coppia di equazioni
$$ \begin{cases}
r = r(t)
\theta = \theta(t)
\end{cases} $$
```


```anki
id: 1700212225920
deck: Fisica
---
Traiettoria in coordinate polari
===
Si può scrivere come
$\theta = \theta(r)$
o
$r = r(\theta)$
```


```anki
id: 1700212226142
deck: Fisica
---
Versori in coordinate polari
===
Si definisce una coppia di versori:
$\hat{u}_r  = \frac{\vec{r}}{r}$ detto versore radiale
$\hat{u}_\theta = \hat{u}_z \times \hat{u}_r$ versore trasversale
```


```anki
id: 1700212226318
deck: Fisica
---
Velocità vettoriale in coordinate polari e velocità angolare:
===
$\vec{v} = \frac{d\vec{r}}{dt} = \vec{d}{dt}(r\hat{u}_r) = \vec{dr}{dt}\hat{u}_r + r \frac{d\hat{u}_r}{dt}$
ma abbiamo che
$$ \frac{d\hat{u}_r}{dt} = \frac{|\hat{u}_r|d\theta}{dt}\hat{u}_\theta = \frac{d\theta}{dt}\hat{u}_\theta = \omega \hat{u}_\theta \times \hat{u}_r = \vec{\omega} \times \hat{u}_r$$
```



```anki
id: 1700212226468
deck: Fisica
---
Casi particolari di moto
===
- Moto rettilineo
	- Triettoria linea retta
	- accelerazione solo componente tangenziale
	$$\vec{r}(t) = x(t)\hat{u}_x\quad \vec{v}(t) = \frac{dx(t)}{dt}\hat{u}_x\quad \vec{a}(t) = \frac{d^2x(t)}{dt^2} \hat{u}_x$$
- Moto rettilineo uniforme
	- Velocità costante
	$$\vec{r}(t) = (x_0 + vt)\hat{u}_x$$
- Moto circolare
	- traiettoria circonferenza di raggioR
	- sdr preferibilmente cartesiano, origine nel centro e due assi complanari
	- utile l'ascissa curvilinea $s$ o l'angolo $\theta$ ($s = R\theta$)
	- velocità vettoriale:
	$$ \vec{v} = v\hat{u}_T\quad v = \frac{ds}{dt} = R \frac{d\theta}{dt} \quad \hat{u}_T \perp \vec{R} $$
	- velocità angolare:
	$$ \vec{v} = \omega \times \vec{R} = \omega R\hat{u}_\theta = \omega R\hat{u}_T $$
		applicando $\vec{\omega}$ in un altro punto dell'asse di rotazione:
		$$ \vec{v} = \vec{\omega} \times \vec{r}' $$
- Moto circolare uniforme
	- velocità angolare costante nel tempo
	- accelerazione puramente normale
	$$
	\omega = \cost \quad;\quad v = \omega R = \cost \implies \vec{a}_{T} = 0\quad;\quad\vec{a} = \vec{a}_{N} = \vec{a}_{C}
	$$
	$$a = a_{c} = \frac{v^2}{R} = \omega^2 R$$
	- si tratta di un moto periodico di periodo $\frac{v}{2\pi R} = \frac{\omega}{2 \pi}$
	- legge oraria:
		$$ \theta(t) = \theta_0 + \omega t \iff s(t) = s_0 + vt $$
- Moto circolare accelerato
	- si definisce un vettore accelerazione angolare
	$$ \vec{\alpha} = \frac{d}{dt}(\frac{d\theta}{dt}\hat{u}_z) = \frac{d^2\theta}{dt^2}\hat{u}_z $$

- moto armonico semplice
	- legge oraria
		$$x(t) = A\sin(\omega t  + \phi)$$
		- $A$ ampiezza dell'oscillazione
		- $\omega t = \phi$ fase dell'oscillazione
		- $\phi$ fase iniziale o costante di fase
		- $\omega$ pulsazione dell'oscillazione
	- moto periodico di periodo $\omega / 2\pi$
	$$ v(t) = \frac{dx}{dt} = A\omega \cos(\omega t + \phi) $$
	$$ a(t) = \frac{dv}{dt} = -A\omega^2\sin(\omega t + \phi) = -\omega^2 x(t) $$
	 quindi 
	 $$ \frac{d^2x}{dt^2} + \omega^2 x(t) = 0 $$
- Moto uniformemente accelerato
	- moto tipico della dinamica
	- accelerazione pari al rapporto tra la forza e la massa del punto materiale
```

