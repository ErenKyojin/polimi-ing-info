---
aliases: 
creation date: 2024-02-20
---

>[!def]
>insieme di $n$ variabili che descrive la configurazione interna del sistema (rappresentata come vettore)
>$$x(t) \in \mathbb{R}^n$$

conosciuta la rappresentazione di stato riscriviamo l'equazione differenziale come
$$ \begin{align}
&\frac{d}{dt}x(t) = f(x(t), u(t),t) \implies \\&\implies\begin{cases}
\frac{d}{dt}x_{1}(t) = f_{1}(x_{1}(t),x_{2}(t),\dots,x_{n}(t), u_{1}(t),\dots,u(n)) \\
\frac{d}{dt}x_{2}(t) = f_{2}(x_{1}(t),x_{2}(t),\dots,x_{n}(t), u_{1}(t),\dots,u(n)) \\
\vdots \\
\frac{d}{dt}x_{n}(t) = f_{n}(x_{1}(t),x_{2}(t),\dots,x_{n}(t), u_{1}(t),\dots,u(n))
\end{cases}  
\end{align}$$