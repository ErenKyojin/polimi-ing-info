---
aliases: 
creation date: 2023-03-29 10:36
modification date: 2023-03-29 10:36
---

>[!oss]
>$T = \frac{L}{1+L} = \frac{Y}{W}$
>$S = \frac{1}{1 + L} = \frac{Y}{D_{a}}$
>$\frac{Y}{D_{r}} = -\frac{L}{1+L} = -T$, quindi a meno del segno $w$ e $d_{r}$ hanno lo stesso effetto su $y$
>Infatti posso accoppiare i nodi diversamente


Mettendo tutto insieme
$$Y = \fcolorbox{yellow}{}{ $ \frac{Y}{w} $} \cdot \fcolorbox{purple}{}{ $ w $} + \fcolorbox{yellow}{}{ $ \frac{Y}{D_{a}} $} \cdot \fcolorbox{purple}{}{ $ D_{a} $} + \fcolorbox{yellow}{}{ $ \frac{Y}{D_{r}} $}\cdot \fcolorbox{purple}{}{ $ D_{r} $} = Tw + S\cdot D_{a} - TD_{r}$$

In viola, [[Trasformata di Laplace|trasformate di laplace]] quindi segnali
In giallo, funzioni di trasferimento quindi [[sistemi]]


Lego questo alla rel $(w,d_{a},d_{r}) \to y$
quindi tutto dipende da $L(s)$


## Requisiti del controllo
1. Sistema in anello chiuso asintoticamente stabile
2. Precisione statica
   Con ingressi costanti e cioè 
   $$ \begin{rcases}
u(t) = \bar{w} \\
d_{a}(t) = \bar{d_{a}} \\
d_{r}(t) = 0
\end{rcases} \to \exists \text{ finito } \lim_{ t \to \infty } e(t) = e_{\infty} $$
con $e_{\infty}$ detto errore a regime o errore a [[transitorio]] esaurito.

Si richiede tipicamente $e_{\infty} = 0$ o $|e_{\infty}| < tot$

>[!oss]
>Si può estendere a ingressi canonici


>[!esempio]