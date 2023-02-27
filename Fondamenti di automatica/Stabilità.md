Si può applicare il concetto a [[Equilibrio|equilibri]], (movimenti) e qualche volta a [[sistemi]]:
 - Stabilità di un equilibrio (tempo continuo)
	 Sia $\bar{x}$ uno stato di equilibrio del sistema dinamico $\dot{x} = f(x,u) \dot{c}$ per $u = \bar{u}$ costante
	 
	- Equilibrio stabile (S)$$\forall \varepsilon > 0 \exists \delta > 0 | \lvert x(0) - \bar{x} \rvert < \delta \implies \lvert x(t) - \bar{x} \rvert < \varepsilon \quad\forall t > 0$$
	  Interpretazione grafica, giallo è stabile, verde no (ogni linea rappresenta un movimento):
	```tikz
	\begin{document}
	\begin{tikzpicture}[scale = 2]
	\draw[->](0,0) -- (5,0);
	\draw[->] (0,0) -- (0,2);
	\draw[blue] (0,1)node[left]{$\bar{x} $} -- (5,1);
	\draw[red] (0,1.5) node[left]{$\bar{x}+ \varepsilon$} -- (5,1.5);
	\draw[red] (0,.5) node[left]{$\bar{x}- \varepsilon$} -- (5,.5); 
	\draw[yellow] (0,1) -- (2,1.4) -- (4,.6) -- (4.5,1.1) -- (5,.9);
	\draw[green] (0,1.5) -- (1,-.4) -- (2, .8) -- (5, .9);
	\end{tikzpicture}
	\end{document}
	```
	- Equilibrio asintoticamente stabile (AS)
	  Vuol dire che:
		  - Equilibrio stabile
		  -  $\lvert \lvert x(t) - \bar{x} \rvert \rvert \to 0$ per $t \to \infty$
	-  Equilibrio  instabile (I) altrimenti



# Stabilita nei [[sistemi dinamici LTI]] (STC)
$\dot{x} = Ax + bu$
Sia $\bar{x}$ uno stato di equilibrio per $u = \bar{u}$ costante, allora
$$
\begin{rcases}
x(t) = \bar{x} \\
u(t) = \bar{u}
\end{rcases} \to x(t) = \bar{x} \quad t \geq 0
$$
E quindi
$$
e^{At} x(0) + \int_{0}^t e^{A(t-\tau)} bu(\tau) \, d\tau = \bar{x} 
$$

Consideriamo ora il [[movimento]] perturbato $x_{\Delta}(t)$ prodotto da $u(t) =\bar{u}$ e $x(0) = \bar{x} + \Delta \bar{x}$
$$
x_{\Delta}(t) = \underbrace{ e^{At}(\bar{x} + \Delta \bar{x}) }_{ \text{ML cambiato} } + \underbrace{ \int _{0}^t e^{A(t-\tau)}bu(\tau)\, d\tau }_{ \text{MF uguale} }
$$
Quindi $x_{\Delta}(t) - \bar{x} = e^{At} \Delta \bar{x}$ dove a sinistra abbiamo il modo in cui $x_{\Delta}(t)$ si muove attorno a $\bar{x}$ (che non dipende dal particolare $\bar{x}$ non essendoci al secondo membro).

>[!important] Importante
>Quindi **tutti** gli equilibri (se ve ne sono) hanno le stesse  caratteristiche di stabilità


>[!tldr]
>Nei sistemi lineari tempoinvarianti la stabilità è una proprietà intrinseca del sistema, e non dei singoli equilibri.
>Inoltre la stabilità del sistema dipende soltanto dal copmortamento (convergente, limitato o divergente) di $e^{At}\Delta \bar{x}$ cioè $e^{At}$ ($\Delta \bar{x}$ è solo un fattore di scala), cioè dalla matrice $A$ (in particolare dai suoi autovalori)


>[!esempio]
>Sistema LTI a TC di ordine $1$: $\dot{x} = ax$ con $a$ sclaare, l'equilibrio è $\bar{x} = 0$
> $$
> x(0) = \Delta \bar{x} \implies x(t) = e^{at}\Delta \bar{x} = \begin{cases}
>a < 0 \implies x(t) \to 0 \implies \text{Sist AS} \\
>a = 0 \implies x(t) \text{ cost} \implies \text{ Sist S} \\
> a > 0 \implies x(t) \text{ diverge} \implies \text{sist I}
>\end{cases}
>$$


In generale $x_{\Delta}(t) - \bar{x} = e^{At}\Delta \bar{x}$ quindi
- $e^{At} = \mathbf{0}_{(n,n)}$ per $t \to \infty \implies$ sistema AS (Movimento libero di $x \to \mathbf{0}$)
- $e^{At}$ diverge per $t \to \infty \implies$ sistema instabile (Movimento libero di $x$ diverge tranne eccezzioni)
- $e^{At}$ non tende a $0$ ne diverge per $t \to \infty$ $\implies$ sistema Stabile (Il movimento libero ne va a zero ne diverge)


### Proprietà dei SD LTI AS (a TC)

1. I ML di $x$ e di $y$ tendono a $0$ per $t \to \infty$ quindi tali sistemi dinamici "dimenticano" lo stato iniziale
2. Se $$
u(t) = \begin{cases}
\text{Qualsiasi segnale }&t < \bar{t} \\
0 &t \geq \bar{t}
\end{cases}
$$ allora per $t \geq \bar{t}$ c'è movimento libero e quindi $x,y \to 0$ per $t \to \infty$ (Puoi "spegnerli", tolgo l'ingresso -> il sistema si spegne)


## Stabilità dei [[sistemi dinamici LTI]] e matrice $A$ (TC)
- Caso $A$ diagonalizzabile
  $$\begin{align}
\underbrace{ x_{L}(t) }_{ \text{ML di }x } &= e^{At}x(0)  = e^{T \text{diag}
(\lambda_{1})T^{-1}}x(0) = \\
&= Te^{\text{diag}(\lambda_{1})t}T^{-1}x(0) = \\
&= T \text{diag}(\underbrace{ e^{\lambda t} }_{ \text{modi del sistema} })T^{-1}x(0)
\end{align}$$

$A$ reale $\implies \lambda_{i}$ reali oppure a coppie complesse coniugate
ML $\to 0 \forall x(0)$ equivae a dire che tutti i modi $e^{\lambda_{i}t}$ devono tendere a $0$ per $t \to \infty$
- $\lambda_{i}$ reale:
	-  $\lambda_{i} > 0$ modo diverge
	- $\lambda_{i} = 0$ modo costante
	- $\lambda_{i} < 0$ modo $\to 0$
- $\lambda_{i} = \alpha \pm j\beta$ coppia complessa coniugata con $\alpha,\beta \in \mathbb{R}$:
  $e^{(\alpha + j\beta )t} = e^{\alpha t} \underbrace{ \cancel{ (\cos(\beta t) + j\sin(\beta t)) } }_{ \text{limitata} }$:
	-  $Re(\lambda_{i}) < 0$ modo converge
	- $Re (\lambda_{i}) = 0$ modo costante
	- $Re(\lambda_{i}) > 0$ modo diverge 

## Stabilità e autovalori di $A$  (SD LTI a TC)
- Tutti gli autovalori di $A$ hanno parte $Re < 0$ $\iff$ il sistema **asintitcamente stabile**
- Almeno un autovalore di $A$ ha parte reale positiva (ne basta uno) $\implies$ **Sistema instabile**
- Tutti gli autovalori di $A$ hanno parte reale minore o uguale di 0 e ne esiste almeno uno con parte reale uguale a zero $\implies$ il sistema può essere **o instabile** **o stabile** ma **non** __asintoticamente stabile__

## Caso lineare a tempo invariante a tempo discreto
$$x_{L}(k) = A^kx(0)$$
### Caso con $A$ diagonalizzaible
$$\begin{align}
A^k &= (T\text{diag}(\lambda_{i})T^{-1})^k = \\
&= T\text{diag}(\lambda_{i})\cancel{ T^{-1}T }\text{diag}(\lambda_{i})\dots k \text{ volte} \\
&= T\text{diag}(\underbrace{ \lambda_{i}^k }_{ \text{modi} })T^{-1}
\end{align}$$

Quindi, generalizzando al caso non diagonalizzabile piú avanti, in generale è vero che:
- $|\lambda_{i}| < 1\quad \forall i \iff$ sistema AS
- $\exists i : |\lambda_{i}| > 1 \implies$ sistema I
- $\begin{cases}|\lambda_{i}| \leq 1\forall i\\\exists i : |\lambda_{1}| = 1\end{cases} \implies$ Sistema I o Sistema S, **MAI** sistema AS 


[[criteri di stabilità]]
