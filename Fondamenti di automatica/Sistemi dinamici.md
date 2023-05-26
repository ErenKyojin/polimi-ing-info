![[Sistemi dinamici.canvas]]
Se conosco $u(t)$ sull'intervallo $[t_{0},t]$ queso mi basta per conoscere $y(t)$ su $[t_{0},t]$

- Si $\implies$ sistema **non dinamico**
- No $\implies$ sistema **dinamico**

>[!esempio] Esempio 1
> ![[Segnali.canvas]]
> $y(t) = \frac{1}{R}v(t)$
> Quindi $u(t)$ su $[t_{0},t] \implies$ noto $y(t)$ su $[t_{0},t]$ quindi il sistema non è dinamico
> 
>
>


>[!esempio] Esempio 2
>
>[[Circuito RC]]
>Per conoscere $y(t)$ su $[t_{0},t]$ mi ocorrono $u(t)$ su $[t_{0},t]$ e la condizione iniziale $y(t_{0})$ tensione iniziale sul [[condensatore]]. Sistema dinamico.

>[!esempio] Esempio 3
>Sistema massa molla
>
>Per conoscere $y([t_{0},t])$ mi occorrono $u([t_{0},t])$ oltre posizione e velocità iniziali
>
>>[!oss]
>>I parametri fisici non sono variabili e si considerano noti

>[!esempio] Esempio 4
>Fermate di un tram
>$0,\dots,N$ con l'indice $k$ che conta le fermate
>$u(k) =$ numero di passaggeri saliti - passeggeri scesi alla fermata k
>$y(k) =$ numero di passeggeri a bordo quando si lascia la fermata $k$
>è necessario conoscere le condizioni iniziali $y(k_{0})$ e $u[k_{0},k]$, quindi è un sistema dinamico

>[!esempio] Esempio 5
>Nastro trasportatore su cui una tramoggia deposita polvere
>
>$u(t) \quad [\frac{kg}{s}]$
>$y(t)$ portata d'uscita 
>
>$y(t) = u(t) - \tau$ con $\tau$ tempo di trasporto
>Per conoscere $y$ da $[t_{0},t]$ occorono $u([t_{0},t])$ e $y([t_{0}-\tau,t_{0}])$ 
>Per l'esattezza $u[t_{0},t - \tau]$
>

>[!esempio] Esempio 6
>Lampada con un pulsante
>Il pulsante accende o spegne in base allo stato, per conoscere l'andamento dell'accensione $y(t)$ su $[t_{0},t]$ occore conoscere l'ingresso, ossia gli istanti di rilascio del pulsante entro $[t_{0},t]$ e lo stato di accensione iniziale a $t_{0}$ (che è un booleano). Si tratta di un sistema dinamico
>
>>[!oss]
>> ```tikz
>>\begin{document}
>>\begin{tikzpicture}
>>\draw (-1.5,0) --(-1,0) -- (-1,1) -- (0,1) -- (0,0) -- (1,0) -- (1,1) -- (1.2,1) -- (1.2,0);
>>\end{tikzpicture}
>>\end{document}
>>```
>>Se gli istanti di rilascio sono l'ingresso è equivalente
>
>>[!oss]
>>Se non interessa tutta $y([t_{0},t])$ ma soltanto $y(t)$ l'informazione che occorre è $y(t_{0})$ ed il fatto che il numero di rilasci sia pari o dispari


Al momento ci specializziamo in 2 classi di sistemi dinamici ma l'idea è molto piú generale di esse

# Sistema dinamico (SD) a tempo continuo (TC)
La quantità di cui occorre conoscere il valore iniziale per poter conoscere l'uscita noto l'ingresso ed ovviamente i parametri del sistema. Si dicono **variabili di stato** e tradizionalmente si indicano con $x$, un certo $x(t_{0})$  ed un certo $u([t_{0},t])$

quindi
$$
\begin{rcases}
x(t_{0}) \\
u[t_{0},t]
\end{rcases}\rightarrow  x(t), y(t) \text{ su }[t_{0},t]\quad t \in \mathbb{R}
$$

($u$ ingresso, $x$ stato, $y$ uscita)

Consideriamo **quasi** sempre sistemi dinamici con un solo ingresso ed una sola uscita, detti anche single input single output
![[SISO]] 

## Espressione del sistema
$$\begin{align}
&\begin{rcases}
x_{1}(t) = \phi_{1}(x_{1}(t_{0}),x_{2}(t_{0}),\dots ,x_{n}(t_{0}),u[t_{0},t],t) \\ 
\vdots \\
x_{n}(t) = \phi_{n}(x_{1}(t_{0}),x_{2}(t_{0}),\dots ,x_{n}(t_{0}),u[t_{0},t],t)
\end{rcases} &\text{funzioni di transizione dello stato} \\
&\begin{rcases}
y(t)  = g(x_{1}(t_{0}),x_{2}(t_{0}),\dots ,x_{n}(t_{0}),u[t_{0},t],t)\quad
\end{rcases} &\text{equazione a trasformazione d'uscita}
\end{align}$$

Questo puó sostanziaresi matematicamente in diversi modi. Il principale è attraverso l'uso di equazioni differenziali

$x(t) = \begin{bmatrix}x_{1}(t) \\ \vdots \\ x_{n}(t)\end{bmatrix}$ è soluzione di un equazione differenziale
$$\begin{align}
\dot{x}_{1}(t) = f_{1}(x_{1}(t),x_{2}(t),\dots,x_{n}(t),u(t),t)\\
\dot{x}_{n}(t) = f_{n}(x_{1}(t),x_{2}(t),\dots,x_{n}(t),u(t),t)
\end{align} \text{equazioni di stato}$$
$y(t) = g(x_{1}(t),x_{2}(t),\dots,x_{n}(t),u(t),t)$


E l'espressione vettoriale diventa
$$
\begin{cases}
\dot{x}(t) = f(x(t_{1}),u(t),t) \\
y(t) = g(x(t),u(t),t)
\end{cases}$$

>[!def]
>$f$ e $g$ lineare in $x$ e $u$ allora il sitema dinamico è **lineare **

>[!def]
>$f = f(x,u)$ e $g=g(x,u)$ il sistema dinamico è **tempo invariante** o **stazionario**.

>[!def]
>$g = g(x,t)$ allora il sistema dinamico è **strettamente proprio**
>
>>[!warning]
>>L'ingresso influenza comunque l'uscita **attraverso** lo stato!


>[!esempio]
>circuito RC
>
>$x + Ri = u$
>$i = C \frac{d}{dt}x = C\dot{x}$
>
> $$\begin{cases}
>x + RC\dot{x} = u \\
> y = x
>\end{cases} \implies \begin{cases}
> \dot{x} = \frac{1}{RC}x + \frac{1}{RC}u \\
> y = x
>\end{cases}
>$$
>Sistema dinamico, lineare, tempo invariante


>[!esempio]
> $$
> m\ddot{y} + ky + h\dot{y} = F
>$$
>$u = F$
>$x_{1} =$ posizione $=y$
>$x_{2} =$ velocità $=\dot{y}$
>$\implies \begin{cases}m\dot{x}_{2} + kx_{1} + hx_{2} = u\\y = x_{1}\end{cases}$
> $$
>\begin{cases}
>\dot{x}_{1} = x_{2} \\
> \dot{x}_{2} = -\frac{1}{m}x_{1} & -\frac{h}{m}x_{2} + \frac{1}{m} \\
>y=x_{1}
>\end{cases}
>$$
> Dinamico lineare, tempo invariante, strettamente proprio, secondo ordine


>[!Esempio] Esempio 3
>Pendolo
> ```tikz
>\begin{document}
>\begin{tikzpicture}[scale=2]
>\node[above] at (.5,-.7) {l};
>\draw[thick](0,0) -- (1,-1.5)node[below]{m};
>\draw (0,0) -- (0,-2);
>\draw (-0.5,0) arc (0:10:-.5);
>\end{tikzpicture}
>\end{document}
>```
>$\ddot{\theta} = \sum$ coppie
> $$
> \begin{align}
> &\tau_{m} = u \\
> &\tau_f = \text{ coppia di attrito} = -h \dot{\theta} \\
> &\tau_{g} = \text{ coppia gravità} = mgl \sin \theta
>\end{align}
>$$
>
> $$
>\begin{align}
>&\dot{x}_{1 } = x_{2}\\
> &\dot{x}_{2} = -\frac{g}{l}\sin x_{1} -\frac{h}{ml^2} x_{2} + \frac{1}{ml^2}u \\
>&y=x_{1}
>\end{align}
>$$
>Dinamico non lineare tempo invariante strettamente proprio


# Sistema dinamico a tempo discreto (TD)
Indice "temporale" discreto $k$ intero
$$
\begin{align}
\begin{rcases}
x_{1}(k) = \phi_{1}(x_{1}(k_{0}),\dots,x_{n}(k_{0}),u[k_{0},k],k)  \\
\vdots \\
x_{n}(k) = \phi_{n}(x_{1}(k_{0}),\dots,x_{n}(k_{0}),u[k_{0},k],k) \\
\end{rcases} \\ \\
\begin{rcases}
y(k) = g(x_{1}(k_{0}),\dots,x_{n}(k_{0}),u[k_{0},k],k)
\end{rcases}
\end{align}

$$

Un modo di sostituzione il legame ($x(k_{0}),u[k_{0},k] \to x[k_{0},k]$) è tramite un equazione **alle defferenze**:
$$
\begin{align}
&\begin{rcases}
x_{1}(k) =f_{1}(x_{1}(k-1),\dots,x_{n}(k-1),u(k-1),k) \\
\vdots \\
x_{n}(k) = f_{n}(x_{1}(k-1),\dots,x_{n}(k-1),u(k-1),k)
\end{rcases} \text{eqazione di stato} \\
&y(k) = y(x_{1}(k),\dots,x_{n}(k),u(k),k)
\end{align}
$$
Lin,TI,SP come in TC

>[!oss]
>L + TI importante, [[sistemi dinamici LTI]]


![[Equilibrio]]

