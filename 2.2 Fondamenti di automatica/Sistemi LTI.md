---
aliases: 
creation date: 2024-03-22
---

Modello dei sistemi LTI
$$ \begin{align}
\frac{dx(t)}{dt} = Ax(t) + Bu(t) \\
y(t) = Cx(t) + Du(t)
\end{align}  $$

>[!example]
>Rete elettrica


[[Movimento]] dello stato e dell'uscita attraverso la [[Formula di lagrange]]

>[!teorema]
>Per ogni coppia di scalari $\alpha$ e $\beta$, la soluzione del sistema per $x'''(t_{0})=\alpha x'(t) + \beta x''(t_{0})$ e $u'''(t) = \alpha u'(t) + \beta u''(t)$ e $x'''(t) = \alpha x'(t) + \beta x''(t)$

#### Rappresentazioni equivalenti
Possiamo fare un cambio nella scelta delle variabili di stato $z(t) = Tx(t)$ a patto che $T$ non sia singolare ossia deve valere che $\det(t) \neq 0$, infatti $x(t) = T^{-1}z(t)$

Possiamo quindi riscrivere il sistema come
$$ \dot{x} = Ax + Bu $$

$z = Tx$
$\dot{z} = T\dot{x}$
$\dot{z} = T(Ax + Bu)$
$\dot{z} = TAT^{-1}Z + TBu$
$\dot{z}=A'z + B'u$

dove
$A' = TAT^{-1}$ (matrice simile ad A)
$B' = TB$


Inoltre $y = cx + du \implies y = CT^{-1}z + Du$
$C' = CT^{-1}$
$D' = D$
La $D$ rimane la stessa in quanto non ha a che fare con lo stato