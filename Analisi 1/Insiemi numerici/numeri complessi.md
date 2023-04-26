# Numeri complessi
Definiamo $i$.

$i\ |\ i^2 = -1$

$z = a + bi$
$w =c+ di$

$$
\begin{flalign}
z + w &= (a+bi) + (c + di) = (a+c)+(b+d)i \\
z \cdot w &= (a+bi) \cdot (c + di) = (ac -bd) + (ad + bc)i \\
\frac zw &= \frac{a+bi}{c+di} =^\text{razionalizziamo}\frac{a+bi}{c+di}\cdot\frac{c-di}{c-di} = \frac{(ac-bd) + i(ad+bc)}{c^2+d^2}
\end{flalign}
$$

Valgono tutte le prorietà di $\mathbb R$

## Definizione formale
$\mathbb C = \{(a,b); a,b \in \mathbb R\}$
- somma: $(a+b)+(c+d) = (a+c, b+d)$
- prodotto: $(a+b)\cdot(c+d) = (ac - bd, ad + bc)$
- elemento neutro <u>somma</u>: $(a,b) + (0, 0) = (a,b)$ 
- elemento neutro prodotto: $(a,b) \cdot (1,0)$
- opposto: $(a,b) \rightarrow (-a,-b)$
- Se $(a,b) \neq (0,0) \Rightarrow (a,b)^{-1} = \left(\frac{a}{a^2+b^2},\frac{-b}{a^2+b^2}\right)$

$\Rightarrow \mathbb C$ è un [[Analisi 1/Insiemi numerici/Campo]]


$\mathbb C_0 \subset \mathbb C\ |\ \mathbb C_0 = \{(a,0);a \in \mathbb R\} \equiv \mathbb R$

### Unità immaginaria
$(0,1)\cdot(0,1) = (-1,0)$ Quindi il quadrato del numero $(0,1)$ è il [[numeri reali|numero reale]] $-1 \Rightarrow (0,1) = i$

>[!example]
>$(a,b) = (a,0) + (0,1)(b,0) = a + ib$

# Forma algebrica
$z = a +ib$ è in forma algebrica e
- $a$ è la parte reale di $z \Longrightarrow Re\{z\} = a$
- $b$ è la parte immaginaria di $z \Longrightarrow Im\{z\}=b$

Il [[coniugato]] di un numero complesso è il numero complesso con parte reale uguale e parte complessa opposta.

I numeri complessi possono essere visualizzati nel [[Piano di gauss]].


## Modulo
Essendo $z\cdot\bar z = a^2+b^2$, ossia il quadrato della distanza
$|z| = \sqrt{z\cdot\bar z} = \sqrt{a^2+b^2}$
$|z| \geq 0$ e $|z| = 0 \Leftrightarrow z = 0 \lor z = 0 + 0i$


# Forma polare
- $(x,y)$ cordinate cartesiane.
- $(\rho,\theta)$ coordinate polari.

$$\begin{cases}
x =\rho\cos\theta \\
y =\rho\sin\theta
\end{cases}$$
La distanza dall'origine è $\rho = \sqrt{x^2+y^2}$
Per trovare l'angolo $\theta$ invece: $\frac{y}{x} = \frac{\sin\theta}{\cos\theta} = \tan\theta$, notiamo che $x \neq 0$ e quindi $\theta$ non descrive l'angolo dell'asse y.
$$
\theta =
\begin{cases}
\arctan\frac{y}{x} \qquad &se\ x>0 \\
\pi + \arctan\frac{y}{x}\qquad &se\ x>0\\
\frac\pi2&se\ x = 0, y>0 \\
\frac{3}{2}\pi \lor -\frac{\pi}{2}&x=0,y<0\\
\text{indeterminato} &x=0,y=0\\
\end{cases}
$$

>[!tip] Passare tra le forme
>- ##### forma  algebrica -> forma polare
>	$z = a + ib = \rho\cos\theta + i\rho\sin\theta = \rho(\cos\theta + i\sin\theta)$
>
>- ##### forma polare -> forma algebrica
>$$\begin{cases}
>a = \rho\cos\theta \\
>b = \rho\sin\theta
>\end{cases}$$
>$\rho=\sqrt{a^2+b^2} =|z|$
>$\theta = arg(z)$

>[!dim] ##### #dimostrazione  prodotto in forma polare
>$z = \rho(\cos\theta+ i\sin\theta)$
>$w = r(\cos\alpha + i\sin\alpha)$
>$$\begin{flalign}
>z\cdot w &= \rho(\cos\theta + i\sin\theta)\cdot r(\cos\alpha+i\sin\alpha) \\&=\rho r[\cos\theta\cos\alpha - \sin\theta\sin\alpha + i(\sin\theta\cos\alpha+\cos\theta\sin\alpha)] \\
>&=\rho r(\cos(\theta + \alpha) +i\sin(\theta+\alpha))
>\end{flalign}$$
>
>$|z\cdot w| = |z|\cdot|w| \Rightarrow arg(zw) = arg(z)+arg(w)$
>$\frac{z}{w} = \frac\rho r\cos(\theta - \alpha) + i\sin(\theta-\alpha)$

# Forma esponenziale

$e^{i\theta} = \cos\theta + i\sin\theta$
$$\begin{flalign}&z = a + ib = \rho(\cos\theta + i\sin\theta) = \rho e^{i\theta}\qquad w=re^{i\alpha}\\
&z\cdot w = \rho re^{i(\theta + \alpha)}
\end{flalign}$$

$z^n = \rho^n(\cos(n\theta) + i\sin(n\theta)) = \rho^ne^{in\theta}$

Grazie ai numeri complessi possiamo espandere le [[soluzioni di una radice]] nel campo complesso.