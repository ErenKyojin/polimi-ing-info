---
aliases: 
creation date: 2023-03-23 13:11
modification date: 2023-03-23 13:11
---
La traiettoria è una circonferenza, con $R$ il suo raggio. Conviene scegliere un sistema di riferimento cartesiano con l'origine nel centro della traiettoria e con i due assi $(x,y)$ ad essa [[complanari]], è utile servirsi, anzichè delle coordinate cartesiane, dell'ascissa curvilinea $s$ lungo la traiettoria, o equivalentemente dell'angolo $\theta$ formato dal raggio vettore con il [[versore]] dell'asse $x$. Il semplice legame fra queste due variabili è
$s = R\theta$
La [[velocità vettoriale]] su puó scrivere come
$$\vec{v} = v\hat{u}_{T}\quad ;\quad v = \frac{ds}{dt} = R\frac{d\theta}{dt}\quad ;\quad \hat{u}_{T} \perp \vec{R}$$
Ricordando la definizione di [[velocità angolare]], la velocità vettoriale si puó anche scrivere come
$$
\vec{v} = \omega \times \vec{R} = \omega R\hat{u}_{\theta} = \omega R\hat{u}_{T}\qquad \text{risultando in questo caso }\hat{u}_{\theta}=\hat{u}_{T}
$$
Oppure applicando $\overrightarrow{\omega}$ in un altro punto dell'asse di rotazione:
$\vec{v} = \overrightarrow{\omega} \times \vec{r}'$

Il risultato del prodotto vettore è lo stesso.

### MOTO CIRCOLARE UNIFORME
Caso particolare di moto circolare estremamente importante, la velocità angolare si mantiene costante nel tempo. L'accelerazione si riduce alla sua componente normale diretta verso il centro della traiettoria (detta accelerazione centripeta)
$$
\omega = \cost \quad;\quad v = \omega R = \cost \implies \vec{a}_{T} = 0\quad;\quad\vec{a} = \vec{a}_{N} = \vec{a}_{C}
$$
$$a = a_{c} = \frac{v^2}{R} = \omega R$$
Si tratta di un moto periodico in quanto
$$\vec{r}(t + T) = \vec{r}(t)\quad\forall t\text{ con }T = \frac{2\pi R}{v}= \frac{2\pi}{\omega}\quad [T] = s\qquad\text{periodo del [[moto]]}$$
La freuquenza del moto è
$\nu \equiv \frac{1}{T} = \frac{\omega}{2\pi}\quad ;\quad [\nu] =Hz$
E la legge oraria si puó scrivere come
$$
\theta(t) = \theta_{0} + \omega t\qquad\text{ ovvero }\qquad s(t) = s_{0} + vt
$$

Se la velocità non dovesse essere costante nel tempo si definisce un vettore [[accelerazione angolare]], nel caso di [[moto]] circolare, la velocità angolare non cambia mai [[direzione]], possiamo scrivere quindi:
$$
\vec{\alpha} = \frac{d}{dt}\left( \frac{d\theta}{dt}\hat{u}_{z}  \right) = \frac{d^2\theta}{dt^2} \hat{u}_{z}  
$$
Mentre piú in generale l'accelerazione angolare può non essere parallela alla velocità angolare

### Componenti dell'accelerazione nel moto circolare
Per il moto circolare in generale
$$
\vec{a}_{T} = \frac{dv}{dt}\hat{u}_{T} = R \frac{d\omega}{dt}\hat{u}_{T} = R\alpha(t)\hat{u}_{T}\qquad ;\qquad \vec{a}_{N} = \frac{v^2(t)}{R}\hat{u}_{N} = \omega^2(t)R\hat{u}_{N}
$$
Considerando quindi l'espressione della velocità
$$
\vec{a} = \frac{d\vec{v}}{dt} = \frac{d}{dt}(\vec{\omega} \times \vec{R} ) = \frac{d\vec{\omega}}{dt}\times \vec{R} + \vec{\omega} \times \frac{d\vec{R}}{dt} = \vec{\alpha} \times \vec{R} + \vec{\omega} \times \vec{v} = \vec{\alpha} \times \vec{R} + \vec{\omega} \times (\vec{\omega} \times \vec{R})    
$$
Che nel moto circolare uniforme diventa
$$\vec{a} = \vec{\omega} \times (\vec{\omega} x \vec{R}) = \omega^2R\hat{u}_{N}$$
essendo nulla l'accelerazione angolare





