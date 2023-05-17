---
aliases: 
creation date: 2023-05-17 10:32
modification date: 2023-05-17 10:32
---

# E1
Dato il sistema di controllo in retroazione a TL con
$$ P(s) = \frac{e^{-0.1s}}{1 + s}\quad, R(s) = k \frac{1 + s}{s}$$
1. Determinare k in modo che $\varphi_{m} = 45^o$ e calcolare $\omega_{c}$
2. Scelgiere $T_{s}$ per la [[realizzazione]] digitale di $R(s)$ in modo che
	- $\omega_{s} \geq 20 \omega_{c}$
	- Attenuazione introdotta da $L$ a $\omega_{N}$ almeno $40 \dB$
3. Scrivere la legge di controllo a TD usando il metodo di eulero esplicito

#### 1
$$ L(s) = R(s)P(s) = k \frac{1 + s}{s} \frac{e^{-0.15}}{1 + s} =k \frac{e^{-0.1s}}{s} $$
```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex,thick] (-3,0) -- ++ (6,0) node[right]{$\omega$};
\draw[red] (-2.5,1) -- (2.5,-1);
\end{tikzpicture}
\end{document}
```
$\angle^o (j \omega) = -90^o - 0,1 \omega_{c} \frac{180^o}{\pi}$
$\implies \varphi_{c} = \angle^o L(j \omega_{c}) = \angle^o L(jk) = -90^o - 0,1k \frac{180^o}{\pi}$
Voglio $\varphi_{m} = 45^o$ cioè $\varphi_{c} = 135^o$
m