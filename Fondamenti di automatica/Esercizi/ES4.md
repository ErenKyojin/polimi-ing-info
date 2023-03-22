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
k
\end{bmatrix} \\
d
\end{align}$$
