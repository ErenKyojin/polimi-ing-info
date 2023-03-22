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
x(k) = \begin{bmatrix}
-1 & 0.5 \\
2 & -1 
\end{bmatrix}x(k-1) + \begin{bmatrix}
0.5 \\
1 
\end{bmatrix}v(k-1) \\
y(k) = \begin{bmatrix}
2 & 1
\end{bmatrix}x(k) + u(k)
\end{align}$$
1. è strettamente proprio
2. As/S/I
3. Primi tre va;pri di $y$
