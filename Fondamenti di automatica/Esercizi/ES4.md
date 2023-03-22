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
2. Con un sistema del secondo ordine conviene calcolare gli autovalori, $(-1-\lambda)^2 - 1 = 0 \implies\lambda^2 -2\lambda =0 \implies \lambda_{1,2} = 0,-2 \implies$ sistema instabile (Conta il modulo essendo a tempo discreto)
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
5. $y(t)$ per $x(t) = \begin{bmatrix}0\\2\end{bmatrix}$, $Re$
