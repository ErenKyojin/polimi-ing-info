---
aliases: 
creation date: 2024-02-20
---

>[!definition]
>insieme di $n$ variabili che descrive la configurazione interna del sistema (rappresentata come vettore)
>$$x(t) \in \mathbb{R}^n$$

conosciuta la rappresentazione di stato riscriviamo l'[[equazione di stato]] come
$$ \begin{align}
&\frac{d}{dt}x(t) = f(x(t), u(t),t) \implies \\&\implies\begin{cases}
\frac{d}{dt}x_{1}(t) = f_{1}(x_{1}(t),x_{2}(t),\dots,x_{n}(t), u_{1}(t),\dots,u(n)) \\
\frac{d}{dt}x_{2}(t) = f_{2}(x_{1}(t),x_{2}(t),\dots,x_{n}(t), u_{1}(t),\dots,u(n)) \\
\vdots \\
\frac{d}{dt}x_{n}(t) = f_{n}(x_{1}(t),x_{2}(t),\dots,x_{n}(t), u_{1}(t),\dots,u(n))
\end{cases}  
\end{align}$$

E l'equazione di uscita
$$ \begin{align}
&y(t) = g(x,u) \\
&y(t) \in \mathbb{R}^p \\
&\begin{bmatrix}
y_{1}(t) \\
\dots \\
y_{p}(t)
\end{bmatrix} = \begin{bmatrix}
g_{1}(x,u) \\
\dots \\
g_{p}(x,u)
\end{bmatrix}
\end{align} $$

>[!remark]
>l'equazione di uscita è un sistema statico, mentre l'equazione di stato è un sistema dinamico infatti no nci son oderivate

## Modello dinamico a tempo discreto
$x(k+1) = f(x(k), u(k),k)$
$y(k) = g(x(k),u(k),k)$

Lo stato al tempo $k+1$ è funzione dello stato al tempo $k$, l'equazione di uscita è invece un legame istantaneo dello stato (come nel temop continuo)

>[!example] [[Equazione logistica]]
>Modello di crecità della popolazione
>$x(k + 1) = x(k) + rx(k)\left[ 1 - \frac{x(k)}{K} \right]$ implementando risorse limitate


