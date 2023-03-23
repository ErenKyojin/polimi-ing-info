---
aliases: 
creation date: 2023-03-22 10:37
modification date: 2023-03-22 10:37
---




# 6
Dato il sistema dinamico lineare tempo inveriante a tempo continuo [[siso]] con funzione di trasferimento 
$$
G(s) = \frac{(s+1)(s+2)}{s^3 + ks^2+(k-2)s + 3}
$$
1. Dire per quali valori di $k$ esso è asintoticamente stabile: [[criterio di Routh]]
2. Dire per quali valori di $k$ esso presenta parti nascoste
--- 
1. Routh
   $$\begin{array}{ccc} \\
1 & k-2  \\
k & 3 \\
\alpha \\
\beta
\end{array}\qquad\begin{align}
\alpha = \frac{1}{k}\det \begin{bmatrix}
1 & k-2 \\
k & 1 
\end{bmatrix}=\frac{k^2-2k-3}{k}, \beta = -\frac{1}{\alpha}\det \begin{bmatrix}
k & 3 \\
\alpha & 0
\end{bmatrix} = 3 \\
k^2 - 2k - 3 = 0 \implies k = 1 \mp \sqrt{ 1 + 3 } = -1,3 \\
\begin{cases}
k^2-2k-3 > 0 \\
k > 0
\end{cases}\qquad k > 3
\end{align}$$

2. Devono essere cancellazioni, osia almeno una radice del numeratore di $G(s)$ deve annullarne anche il denominatore.
   ossia solo per $k = 1/2$, infatti
$D(-1) = -1 + k -k + 2 + 3 = 4 \implies$ non esiste $k :$ lo zero in $1$ si cancelli
$D(-2) = -8 + 4k -2k + 4 + 3 = 2k - 1 \implies k = 1/2$
$\CVD$
# 7
Dato il sistema dinamico lineare tempo invariante a tempo discreto [[siso]]
$$\begin{align}
&x(k) = \begin{bmatrix}
-1 & 0.5 \\
2 & -1 
\end{bmatrix}x(k-1) + \begin{bmatrix}
0.5 \\
1 
\end{bmatrix}u(k-1) \\
&y(k) = \begin{bmatrix}
2 & 1
\end{bmatrix}x(k) + u(k)
\end{align}$$
1. è strettamente proprio
2. As/S/I
3. Primi tre valori di $y$ (essendo a tempo discreto $k = 0,1,2$) prodotti da $x(0) = \begin{bmatrix}1\\0\end{bmatrix}$ e $u(k) = \sca(k) + 3\text{ram}(k)$

Ricordando che
$$\sca(k) = \begin{cases}
1 & k\geq0 \\
0 & k < 0
\end{cases}\qquad
\text{ram}(k) = k\sca(t)$$
---
1. **No**, $u$ compare nell'equazione di uscita.
2. Con un sistema del secondo ordine conviene calcolare gli [[Autovalori e Autovettori|autovalori]], $(-1-\lambda)^2 - 1 = 0 \implies\lambda^2 -2\lambda =0 \implies \lambda_{1,2} = 0,-2 \implies$ sistema instabile (Conta il modulo essendo a tempo discreto)
3. Esprimiamo $u$, abbiamo
   $$
u(k) = \sca(k) + 3\sca(k)
$$
$$
\begin{align}
\begin{array}{c|ccc} \\
k & 0 & 1 & 2 \\
\hline\sca(t) & 1 & 1 & 1 \\
3\sca(t) & 0 & 3 & 6 \\
\hline u(k) & 1 & 4 & 7
\end{array}
\end{align}
$$
Quindi 
- $k = 0$
	- $x(0) = \begin{bmatrix}1\\0\end{bmatrix}$
	- $y(0) = cx(0) + du(0) = \begin{bmatrix}2 & 1\end{bmatrix}\begin{bmatrix}1\\0\end{bmatrix} + 1 = 3$
- $k = 1$
	- $x(1) = \begin{bmatrix}-0.5\\3\end{bmatrix}$
	- $y(1) = 6$
- $k=2$
	- $x(2) = \begin{bmatrix}4\\0\end{bmatrix}$
	- $y(2) = 15$

$\CVD$
# 8
dato
$$
\begin{cases}
\dot{x} = \begin{bmatrix}
-1 & 0 \\
1 & -2
\end{bmatrix}x + \begin{bmatrix}
1 \\
0
\end{bmatrix}u \\
y = \begin{bmatrix}
0 & 2
\end{bmatrix}x
\end{cases}
$$
1. SP?
2. $AS/S/I$
3. FDT
4. R?0?
5. $y(t)$ per $x(t) = \begin{bmatrix}0\\2\end{bmatrix}$, $u(t) = \sca(t)$
---
1. Si, $d = 0$
2. $A$ triangolare inferiore => autovalori $-1$ e $-2$ con $\Re < 0 \implies$sistema AS
3. $G(s) = c(s\mathbb{1} - A)^{-1}b + d =$
   $$\begin{align}
&=\begin{bmatrix}
0 & 2
\end{bmatrix}\begin{bmatrix}
s + 1 & 0 \\
-1 & s+2
\end{bmatrix}^{-1}
\begin{bmatrix}
1 \\
0
\end{bmatrix} = \\
&=\frac{1}{(s+1)(s+2)}\begin{bmatrix}
0 & 2
\end{bmatrix}\begin{bmatrix}
/ & / \\
1 & /
\end{bmatrix}\begin{bmatrix}
1 \\
0
\end{bmatrix} = \frac{2}{(s+1)(s+2)}
\end{align} $$
(non dobbiamo neanche considerare gli altri valori per gli zeri nei vettori)
4. ?
5. calcolo il ML con $e^{At}$ e il MF con $G(s)$
	1. [[Autovalori e Autovettori|Autovalori]] di $A: S_{1} =-1,S_{2} = -2$
	2. [[Autovalori e Autovettori|Autovettori]]:
	   $$\begin{bmatrix}
1 \\
1
\end{bmatrix}\qquad\begin{bmatrix}
0 \\
1
\end{bmatrix}$$
...
# 9
Dato lo schema a blocchi
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,0) to [generic,name = G2] (2,0) to [generic,name = G4](4,0);
\draw (0,0) to[short, -*] (1,1) to [generic,name = G3] (3,1) to (4,0);
\draw(4.5,0) to (4.5,-1) to [generic,name = G5] (-.2,-1) to (-.2,0);
\draw(-2,0)node[left]{$u$} to [generic,name = G1] (0,0);
\draw(4,0) to (6,0) node[right]{$y$};
\node at (G1){$G_1$};
\node at (G2){$G_2$};
\node at (G3){$G_3$};
\node at (G4){$G_4$};
\node at (G5){$G_5$};
\end{tikzpicture}
\end{document}
```
1. Esprimere la FdT $G(s) = \frac{Y(s)}{u(s)}$ in funzione di $G_{1}(s)\dots G_{5}(s)$
2. Dire se lo stato asintotico di qualcuno dei blocchi $G_{1}(s)\dots G_{5}(s)$ è necessario e o sufficiente per quello del sistema compelssivo
---
2. È necessaria la stabilità asintotica di $G_1$ in quanto non è parte di alcun anello.
$\CVD$

# 10
