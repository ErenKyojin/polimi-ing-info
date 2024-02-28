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


Mettendo tutto [[insieme]]
$$Y = \fcolorbox{yellow}{}{ $ \frac{Y}{w} $} \cdot \fcolorbox{purple}{}{ $ w $} + \fcolorbox{yellow}{}{ $ \frac{Y}{D_{a}} $} \cdot \fcolorbox{purple}{}{ $ D_{a} $} + \fcolorbox{yellow}{}{ $ \frac{Y}{D_{r}} $}\cdot \fcolorbox{purple}{}{ $ D_{r} $} = Tw + S\cdot D_{a} - TD_{r}$$

In viola, [[Trasformata di Laplace|trasformate di laplace]] quindi segnali
In giallo, funzioni di trasferimento quindi [[Sistemi]]


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
> ```tikz
>\begin{document}
>\begin{tikzpicture}
>\draw[red,thick] (0,0)node[left]{$w_{0}$} -- (1,0) -- (3,2) -- (4,2)node[right]{$\Delta$};
>\draw[->] (1,0) -- (1,2) node[right]{$w(t)$};
>\draw[->] (1,0) -- (4,0)node[below]{$t$};
>\end{tikzpicture}
>\end{document}
>```
>per $t \to \infty$ questo è indistinguibile da $w(t) = \Delta sca(t)$
>
>Ma dov'è $t = \infty$?
>1. mi va bene 
>   ```tikz
>\begin{document}
>\begin{tikzpicture}[scale = 2]
>\draw (0,0) -- (1,0) -- (2,1) -- (3,1);
>\draw[blue] (0,0) -- (1,0) to[in = 200, out= 30] (2.2,1) -- (3,1);
>\end{tikzpicture}
>\end{document}
>```
>chiedere $e_{\infty} = 0$ per $w(t) = sca(t)$
>
>2. voglio invece
>   ```tikz
>\begin{document}
>\begin{tikzpicture}[scale = 2]
>\draw (0,0) -- (1,0) -- (2,1) -- (3,1);
>\draw[blue] (0,0) -- (1,0) to[out= 30, in = 225] (1.5,.5);
>\end{tikzpicture}
>\end{document}
>```
>chiedere $e_{\infty} = 0$ per $w(t) = ram(t)$

3. Precisione dinamica
Quando $w$ cambia $y$ deve inseguirla presto e bene, cioè per esempio senza oscillazione
$\implies$ la FdT $\frac{Y}{N}$ deve avere certe caratteristiche, per esempio poli ben smorzati

4. Grado di stabilità (asintotica)
   Il sistema in anello chiuso deve essere abbastanza lontano dal perdere la stabilità asintotica di variazioni di qualche suo paraetro
   N robustezza => definiamo indicatori o margini di stbailità
5. Modulazione del controllo
   a parità delle altre proprietà è preferibile il controllore che sollecita meno l'attuatore


# Stabilità AS di sistemi retroazionati
poichè lo stato non dipende dagli ingresso posso studiare
#todo Posto $L(s) = \frac{L_{n}(s)}{L_{d}(s)}$ con $L_{n}$ e $L_d$ polinomi per ora senza ritardi si ha

```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw (0,0) rectangle (1.5,1);
\node at (.7,0.5){$L$};
\draw[->] (1.5,0.5) -- (2, 0.5) node[above]{$q$}-- (2, -1) -- (-2,-1) -- (-2,0.5) -- (-0,0.5);
\end{tikzpicture}
\end{document}
```

$-Lq = q$
$q + Lq = 0$
$q + \frac{L_{n}}{L_{d}}q = 0 \implies \frac{L_{n} + L_{d}}{L_{d}}q =0$
$\implies (L_{n} + L_{d})q = 0$
$L_{n} + L_{d} = 0$ è l'equazione caratteristica del sistema in anello chiuso, le sue radici sono i poli di tale sistema

Ci occorrono quindi criteri per studiare la stabilità asintotica dell'anello **chiuso**, osservando la FdT dell'anello **aperto**.
Perchè, siccome $L = RP$ se si trova una buona $L$ è immediato calcolare $R = L / P$


Vediamo due di questi criteri:
- [[criterio di Nyquist]]
- 