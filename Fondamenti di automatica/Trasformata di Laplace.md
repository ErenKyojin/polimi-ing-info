Dato un segnale $v(t)$ definito per $t \geq 0$ (o nullo per $t < 0$), se ne definisce la trasforrmata di Laplace (TDL) come:
 $$
V(s) = \mathcal{L}[v(t)] = \int _{0}^{\infty} v(t)e^{-st} \, dt\qquad s, V(s) \in \mathbb{C} 
$$
L'antitrasformata è
$$
v(t) = \mathcal{L}^{-1}[V(s)] = \frac{1}{2\pi j}\int_{\alpha - j \infty}^{\alpha + j\infty} V(s)e^{st}\, ds 
$$
>[!oss]
>è un integrale complesso, dobbiamo dire su che linea ci muoviamo, ossia $\alpha$
>
> ```tikz
>\begin{document}
>\begin{tikzpicture}[scale = 2]
>\draw[->] (-1,0) -- (2,0);
>\draw[->] (0,-1) -- (0,2);
>\draw[->, red,thick] (1,-1) -- (1,1.5);
>\draw[red] (1,-1)-- (1,2);
>\end{tikzpicture}
>\end{document}
>```
>In rosso alpha col percorso di percorrenza