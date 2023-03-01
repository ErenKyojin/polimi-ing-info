Dato un segnale $v(t)$ definito per $t \geq 0$ (o nullo per $t < 0$), se ne definisce la trasforrmata di Laplace (TDL) come:
 $$
V(s) = \mathcal{L}[v(t)] = \int _{0}^{\infty} v(t)e^{-st} \, dt\qquad s, V(s) \in \mathbb{C} 
$$
L'antitrasformata è
$$
v(t) = \mathcal{L}^{-1}[V(s)] = \frac{1}{2\pi j}\int_{\alpha - j \infty}^{\alpha + j\infty} \, dx 
$$
>[!oss]-
>è un integrale complesso, dobbiamo dire su che linea ci muoviamo, ossia $\alpha$