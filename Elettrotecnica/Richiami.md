# Trigonometria
$$
	\begin{cases}
	\cos^2(\alpha) +\sin^2(\alpha) = 1 \\
	\cos(\alpha - \beta) = \cos(\alpha)\cos(\beta) + \sin(\alpha)\sin(\beta) \\
	\cos(\alpha + \beta) = \cos(\alpha)\cos(\beta) - \sin(\alpha)\sin(\beta) \\
	\sin(\alpha - \beta) = \sin(\alpha)\cos(\beta) - \cos(\alpha)\sin(\beta) \\
	\sin(\alpha + \beta) = \sin(\alpha)\cos(\beta) + \cos(\alpha)\sin(\beta) \\
	\cos(\alpha + \frac{\pi}{2}) = -\sin(\alpha) \\
	\cos(\alpha - \frac{\pi}{2}) = \sin(\alpha)\\
	\frac{1}{2}[\cos(\alpha - \beta)+\cos(\alpha + \beta)] = \cos(\alpha)\cos(\beta)
	\end{cases}
$$

Da queste formule ricaviamo che 
$$X_m\cos(\omega t + \varphi) = X_m \cos(\varphi)\cos(\omega t) - X_m \sin(\varphi)\sin(\omega t)$$

Come riscrivere $A \cos(\omega t) + B \cos(\omega t)$ nella forma $X_m \cos(\omega t + \varphi)$ (ossia ricavare $X_m$ e $\varphi$)
$$
	\Rightarrow (X_m\cos(\varphi))^2 + (-X_M\sin(\varphi))^2
	 = X_m^2= A^2+B^2
$$
e quindi $X_m = \sqrt{A^2+B^2}$
inoltre
$$\frac{-X_m\sin\varphi}{X_m\cos\varphi} = -\tan\varphi = \frac{B}{A}$$

e quindi
$$
\begin{cases}
\varphi = -\arctan\frac{B}{A} &&& A>0 \\
\varphi = -\arctan\frac{B}{A} \pm \pi &&& A<0
\end{cases}
$$

# numeri complessi
un numero $z = a + jb$ con $a, b \in \mathbb{R}$ e $j$ unità immaginaria | $j^2= -1$ .
$a = Re\{z\} = \text{parte reale di } z$
$b = Re\{z\} = \text{parte immaginaria di }z$
e allora $z$ diventa
$$ z = Re\{z\}+jIm\{z\}$$

### rappresentazione cartesiana
Asse x è l'asse reale
Asse y è l'asse immaginaria

### rappresentazione polare
Va introdotto il modulo di z: $|z|$ e la <u>fase</u> o <u>argomento</u> $\varphi$ indicata con arg($z$) 
$$z = Re\{z\} + jIm\{z\} = |z|\cos\varphi + j|z|\sin\varphi$$

Quindi 
$$|z| = \sqrt{Re^2\{z\} + Im^2\{z\}}$$

e
$$
	\begin{cases}
	\varphi = \arctan\frac{Im\{z\}}{Re\{z\}} && Re\{z\}> 0\\
	\varphi = \arctan\frac{Im\{z\}}{Re\{z\}} && Re\{z\}< 0
	\end{cases}
$$

### rappresentazione di eulero
formula di eulero:
$$\cos\varphi + j\sin\varphi = e^{j\varphi}$$

e allora
$$z = Re\{z\}+jIm\{z\} = |z|\cos\varphi+j|z|\sin\varphi = |z|e^{j\varphi}$$


### uguaglianze in $\mathbb{C}$
$z_1 = z_2 \Leftrightarrow Re\{z_1\} = Re\{z_2\} \ e \ Im\{z_1\} = Im{z_2}$ 
inoltre
$z=0 \Leftrightarrow Im\{z\} = Re\{z\} = 0$

### complesso coniugato
se $z = Re\{z\} + jIm\{z\} = |z|e^{j\varphi}$
allora si definisce suo coniugato $z* = Re\{z\} - jIm\{z\}$ è il suo complesso coniugato.
Un numero e il suo coniugato hanno stesso modulo ma fase inversa
>ossia se la fase di $z$ è $\pi$, la fase di $z*$ è $-\pi$

#### somma di due numeri complessi
$$z = z_1 + z_2 = Re\{z_1\}+jIm\{z_1\}+Re\{z_2\}+jIm\{z_2\}$$
$$z = Re\{z_1\}+Re\{z_2\}+j(Im\{z_1\} + Im\{z_2\})$$

#### prodotto di due numeri complessi
$$z = z_1z_2 = Re\{z_1\}Re\{z_2\} - Im\{z_1\}Im\{z_2\} + j(Re\{z_1\}Im\{z_2\} + Im\{z_1\}Re\{z_2\})$$ 
in notazione esponenziale abbiamo
$$z = z_1z_2 = |z_1|e^{j{\varphi_2}}|z_2|e^{j{\varphi_2}} = |z_1||z_2|e^{j(\varphi_1 + \varphi_2)}$$

#### razionalizzazione del rapporto
$$z = \frac{|z_1|}{|z_2|}e^{j(\varphi_1-\varphi_2)}$$

alternativamente con la parte reale.
$$z = \frac{Re\{z_1\} + jIm\{z_1\}}{Re\{z_2\}+jIm\{z_2\}}$$
per rimuovere il numero complesso al denominatore basta moltiplicare per il $\frac{z_2*}{z_2*}$
$$z=\frac{(Re\{z_1\} + jIm\{z_1\})(Re\{z_2\} - jIm\{z_2\})}{Re^2\{z_2\} + Im^2\{z_2\}}$$




