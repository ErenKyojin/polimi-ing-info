Domanda, Dato un sistema dinamico sottoposto ad ingresso $u = \begin{pmatrix}t\\k\end{pmatrix} = \bar{u}$ costante.
$\exists$ quale $\bar{x}$ costante/i tale per cui
 $$
\begin{rcases}
x(0) = \bar{x} \\
u = \begin{pmatrix}
t \\
k
\end{pmatrix} = \bar{u}\quad \text{per }t,k \geq 0
\end{rcases} \to x \begin{pmatrix}
t \\
k
\end{pmatrix} = \bar{x} 
\text{ per } t,k \geq 0 ?
$$

Se esistono, tali $\bar{x}$ si dicono **stati di equilibrio** per $u = \bar{u}$


Come trovare gli stati di equilibrio?

## Tempo continuo
Se $x$ deve rimanere costante ($\bar{x}$) allora $\dot{x}$ deve essere zero quindi dato $\dot{x} = f(x,u)$
con $u = \bar{u}$ costante
Gli eventuali stati di equilibrio $\bar{x}$ sono le eventuali soluzioni di $f(\bar{x},\bar{u}=0)$



## Tempo determinato
Se $x$ deve rimanere costante allora $x(k+1) = x(k) \forall k$ quindi dato $x(k) = f(n(k-1),u(k-1))$ con $u(k) = \bar{u}$ cost.
Gli equilibri sono le soluzioni di $\bar{x} = f(\bar{x},\bar{u})$

## [[sistemi dinamici LTI]] a tempo continuo
$$
\begin{cases}
\dot{x} = Ax + bu \\
y = cx + du
\end{cases}
$$
$u=\bar{u}$ costante gli equilibri soluzionei di $0 = A\bar{x} + b\bar{u}$
Se $A$ non è singolare (?) $\exists! \bar{x} = -A^{-1}b\bar{u}$
altrimenti o $\cancel{ \exists } \bar{a}$ o $\exists \infty \bar{a}$i

## Uscita di equilibrio
Se $\exists \bar{x}$ per $u = \bar{u}$ in generale puó esistere l'uscita di equilibrio $\bar{y} = g(\bar{x},\bar{u})$
Nel caso LTI $\exists$ sempre $\bar{y} = c\bar{x} + d\bar{u}$



>[!esempio] Esempio 1 - Massa molla
> $$
>\begin{cases}
>\dot{x}_{1} = x_{2} \\
\dot{x}_{2} = -\frac{k}{m}x - \frac{h}{m}x_{2} + \frac{1}{m}u \\
y= x
>\end{cases}
>$$
>
> $$
> \begin{align}
> \begin{bmatrix}
>\dot{x}_{1} \\
> \dot{x}_{2}
>\end{bmatrix} = \begin{bmatrix}
>0 & 1 \\
>-\frac{k}{m} & \frac{h}{m}
>\end{bmatrix} + \begin{bmatrix}
>0 \\
>\frac{1}{m}
>\end{bmatrix}u \\
>y = \begin{bmatrix}
1 & 0
\end{bmatrix} \begin{bmatrix}
x_{1} \\
x_{2}
\end{bmatrix}
>\end{align}
>$$
>Pongo $u = \bar{u} : \exists \bar{x}$?


>[!esempio] Esempio 2 - pendolo
> ```tikz
>\begin{document}
>\begin{tikzpicture}[scale=2]
>\node[above] at (.5,-.7) {l};
>\draw[thick](0,0) -- (1,-1.5)node[below]{m};
>\draw (0,0) -- (0,-2);
>\draw (0.,-.5) arc (270:300:.5);
>\end{tikzpicture}
>\end{document}
>```
>
>Pongo $u = \bar{u}$ e cerco gil stati di equilibrio
> $$
> \begin{align}
> & \dot{x}_{1} = 0 \\
>  & \dot{x}_{2} = 0
>\end{align} \implies \begin{cases}
>\bar{x}_{2}= 0 \\
>0 = -\frac{g}{l} \sin \bar{x}_{1} - \cancel{ \frac{h}{ml^2}\bar{x}_{2} } + \frac{1}{ml^2}\hat{u}
>\end{cases}
>$$
>
>Risultato:
>$$\begin{cases}
>\bar{x}_{1} = \arcsin \left( \frac{\bar{u}}{mgl} \right) \\
>\bar{x}_{2} = 0
>\end{cases}$$
>Che ci porta a diversi casi
>1. Se $|U| = mgl$ non esiste equilibrio, quindi non si ferma mai
>2. $\bar{u}=0$ se $x = 0, \pi$
>   
>   ```tikz
> \usetikzlibrary{arrows.meta}
>\begin{document}
>\begin{tikzpicture}
>\draw[thick,-{Circle}] (0,0) -- (0,2);
>\draw (0,0) -- (0,-2);
>\draw(0,-0.25) arc (90:270:-.3);
>\draw[thick,{Circle}] (4,0) -- (4,-2);
>\end{tikzpicture}
>\end{document}
>```


# Equilibrio nel caso LTI a TD
Deve essere $\bar{x} = A\bar{x} + b\bar{u}$
$$
\implies (I - A) \bar{x} = b\bar{u}
$$
Se $I - A$ non è singolare, ossia se $A$ non ha [[Autovalori e Autovettori|autovalori]] in $1$, $\exists! \bar{x} = (I-A)^{-1}b\bar{u}$ altrimenti o $\cancel{ \exists } \bar{x}$ o $\exists \infty \bar{x}$


$$
\begin{rcases}
x(0)\\
u\left(\begin{align}
t \\
k
\end{align}\right)
\end{rcases} \to x \begin{pmatrix}
t \\
k
\end{pmatrix}, y \begin{pmatrix}
t \\
k
\end{pmatrix} \qquad t,k \geq 0
$$

$$\begin{cases}
x(k) = Ax(k-1) + bu(k-1) \\
y(k) = cx(k) + du(k)
\end{cases}$$

Dati $x(0)$ (ricordando che tempo invariante significa che posso mettere lo zero dei tempi dove voglio), e $u(k)$ con $k \geq 0$ il movimento dello stato:
$$
\begin{align}
&x_{0} \text{ dato} \\
&x(1) = Ax(0) + bu(0) \\
&x(2) = Ax(1) + bu(1) = A^2x(0) + Abu(0) + bu(1) \\
&x(3) = A^3x(0) + A^2bu(0) + Abu(1) + bu(2) \\
&\dots \\
&\fbox{$x(k) = \fcolorbox{blue}{}{$A^kx_{0}$} + \fcolorbox{red}{}{$\sum_{l = 0}^{k-1} A^{k-l-1} bu(l)$}$}
\end{align}
$$
**Quella riquadrata si dice [[formula di lagrange]] a tempo determinato per lo stato**

In blu movimento libero delo stato
In rosso movimento forzato dello stato

- Movimento di $x$ è la somma di ML e MF
- Il movimento libero dipende linearmente da $x(0)$ e non dipende da $u(k)$
- Il movimento forzato dipende linearmente da $u(k)$ e non dipende da $x(0)$
  
  Vale cioè il principio di [[sovrapposizione degli effetti]]

Movimento dell'uscita (Formula di Lagrange)

$$
\begin{align}
y(k) &= cx(k) + du(k) \\
 & = \fcolorbox{blue}{}{$cA^kx(0)$} + \fcolorbox{red}{}{$c \sum_{l=0}^{k-1} A^{k-l-1} bu(l) + du(k)$}
\end{align}
$$

Formule di lagrange a TC


Movimento a $TC$
$$
\begin{align}

&\dot{x} = 2x \\
&x(0 ) = 4 \\
&x(t)\ t \geq 0 \\
&x(t) = e^{2t}x(0) = 4e^{-2t}
\end{align}
$$

>[!oss]
>Per sistemi di ordine maggiore di uno occorre calcolare $e^{At}$ con $A$ matrice. [[elevamento ad una matrice]]

