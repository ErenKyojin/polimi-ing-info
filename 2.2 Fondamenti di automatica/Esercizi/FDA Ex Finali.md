---
aliases: 
creation date: 2023-05-17 10:32
modification date: 2023-05-17 10:32
---

# E1
Dato il sistema di controllo in retroazione a TL con
$$ P(s) = \frac{e^{-0.1s}}{1 + s}\quad, R(s) = k \frac{1 + s}{s}$$
1. Determinare k in modo che $\varphi_{m} = 45^o$ e calcolare $\omega_{c}$
2. Scelgiere $T_{s}$ per la [[Realizzazione]] digitale di $R(s)$ in modo che
	- $\omega_{s} \geq 20 \omega_{c}$
	- Attenuazione introdotta da $L$ a $\omega_{N}$ almeno $40 \dB$
3. Scrivere la legge di controllo a TD usando il metodo di eulero esplicito

#### 1.
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
$\implies 0,1k \frac{180^o}{\pi} = 45^o \implies k = \frac{45^o}{180^o * 0,1} \approx 7,85$
quindi $\omega_{c} = 7,85$

#### 2.
$\omega_{s} \geq 20\omega_{c} \implies \frac{2\pi}{T_{s}} \geq 20 \cdot 7,85 \implies T_{s} \leq \frac{2\pi}{20\cdot7,85} \approx 0,04$
$|L(j\omega_{N})|_{\dB} < -40$

```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex, thick] (-3,0) -- ++ (6,0)node[right]{$\omega$};
\draw[red] (-2.5,1) -- (2.5,-1);
\node[above] at (0,0){7,85};
\draw[blue] (-3,-1) node[left]{-40} -- (3,-1);
\draw[-latex, blue] (2.5,-1) -- ++ (0,1) node[above]{$\omega_N$ = 785};
\end{tikzpicture}
\end{document}
```

$\omega_{s} = 2 \cdot 785$
$\frac{2\pi}{T_{s}} \geq 2 \cdot 785 \implies T_{s} \leq \frac{\pi}{785} \approx 0,004$
$\implies$ scelgo $T_{s} = 0,004$

#### 3.
$$R^*(z) \underset{ \uparrow EE }{ = } R\left( \frac{z-1}{T_{s}} \right)= 7.85 \frac{\left( 1 + \frac{z-1}{0,004} \right)}{\frac{z-1}{0,004}} = 7,85 \frac{z-0,996}{z - 1} = \frac{7,85z - 7,82}{z - 1} = \frac{U(z)}{E(z)}$$
Quindi $(z-1)U(z) = (7.85z-7.82)E(z)$
$u(k + 1) - u(k) = 7,85e(k + 1) - 7,82e(k)$
$\implies$ legge di controllo
$$ u(k) = \fcolorbox{red}{}{$u(k - 1)$} + 7.85e(k) - 7.82 e(k - 1) $$
in rosso integratore, quindi polo in Z = 1

# E2