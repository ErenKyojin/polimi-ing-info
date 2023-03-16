
>[!def]
>Data una [[funzione di trasferimento|FdT]] $G(s)$
>$b$ sua restrizione al suo semiasse positivo $y^+$ si dice **RISPOSTA IN FREQUENZA** (RF) di $G(S)$



- $G(s) = \frac{1}{1 + 0.1 s}$ AS
- $u(t) = 5 \sin(20t)$
- $y(t) \to ?$ per $t = \infty$

Sistema AS $\implies$ per il teorema della risposta in frequenza $y(t) \to 5 | g(j_{2}0)| \sin(20t + \arg G(j_{2}0))$
$$G(j 20) = \frac{1}{1 + 2j} \implies \begin{cases}
|G(j 20)| = \frac{1}{\sqrt{ 5 }} \approx 0.45 \\
\arg^o = \arctan^o(2) = -63,5^o)
\end{cases}$$

## Rappresentazioni della Risposta in frequenza di una [[funzione di trasferimento|FdT]] $G(s)$


### 1. Diagramma polare
```tikz
\usepackage{pgfplots}
\begin{document}
\begin{tikzpicture}
\begin{axis}[axis lines = left, smooth, samples = 50]

\end{axis}
\draw[->, red] (0,0) -- (0,5);
\end{tikzpicture}
\begin{tikzpicture}
\begin{axis}[axis lines = left, smooth, samples = 50]
\end{axis}
\node at (3,3){spirale};
\end{tikzpicture}
\end{document}
```
Piani complessi

### 2. Diagramma cartesiani o di Bode
1. Diagramma di bode del [[modulo]] DBM
```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw[->,thick] (0,0) -- (5,0) node[above]{$\omega$};
\node[below] at (0.25,0){1} node[below] at (1.25,0){10} node[below] at(2.25,0){100} node[below] at (3.25,0){1000} node[below] at (4.25,0){10000};
\end{tikzpicture}
\end{document}
```

Si tratta di un asse [[logaritmo]], pari distanza significa pari rapporto
>[!def]
>$x|_{dB} := 20 \log_{10}|x|$
>$100|_{dB} = 40;\quad 0.1|_{dB} = -20,$

2. Diagramma di bode della fase DBF
	uguale ma con l'argomento sull'asse y



#### Tracciamento dei diagrammi di Bode (asintotici)
Per tracciare diagrammi di Bode asintotici scriviamo la [[funzione di trasferimento|FdT]] $G(s)$ della cui risposta in frequenza vogliamo i diagrammi di bode nela forma:
$$\large G(s)= \frac{\fcolorbox{red}{}{ $ \mu $}}{s^{\fcolorbox{yellow}{}{ $ g $}}} \frac{\fcolorbox{purple}{}{ $ (1+s\tau_{1})(1 + s\tau_{2})\dots $}}{\fcolorbox{pink}{}{ $ (1+s\tau_{1})(1 + s\tau_{2})\dots $}} \frac{\left( 1 + \frac{2\xi}{\sigma_{n}}s + \frac{1}{\sigma_{n}^2}s^2 \right)\dots}{\left( 1 + \frac{2\xi}{\omega_{n}} s + \frac{1}{\omega_{n}^2}s^2\right)\dots}$$
- $\mu$ è detto guadagno della fdt
- $g$ è detto tipo della FdT
- Zeri $\mathbb{R}$ non nell'origine (in viola)
- Poli $\mathbb{R}$ non nell'origine (in rosa)
- $t,\tau$ costanti di tempo di poli e zeri
- La seconda vale 1 per $S = 0$
- Coppie di zeri $\mathbb{C}$ coniugati num
- Coppie di poli $\mathbb{C}$ coniugati den
- $\omega, \sigma$: frequenze naturali
- $\xi, I$ frequenze di smorzamento

>[!esempio]
> $$
> G(s) = \frac{s+2)(s^2 - 3s + 2}{s^3 + 4s^2 + s}
>$$
>Ai fini dei diagrammi di Bode:
> $$
> G(s) = \frac{2(1 + 0,5s)(s-1)(s-2)}{s(s^2 + 4s + 1)} = \frac{2(1 + 0.5s)(-1)(1 - s)(-2)(1 - 0.5s)}{(s-s_{1})(s-s_{2})}
>$$
>Con $s_{1,2} = -2 \mp \sqrt{ 3 }$
>quindi:
> $$
> \frac{\text{""}}{S(-s_{1})\left( 1-\frac{s}{s_{1}} \right)(-s_{2})\left( 1 - \frac{s}{s_{2}} \right)} = \frac{2(-1)(-2)}{(-s_{1})(-s_{2})} \frac{1}{s} \frac{1 + 0.5s)(1-s)(1-0.5s}{\left( 1-\frac{s}{s_{1}} \right)\left( 1-\frac{s}{s_{2}} \right)}
>$$


Quindi ogni funzione di trasferimento razionale fratta si puó esprimere come prodotto di termini del tipo
$$
\begin{array}{cc}

G_{a}(s) = \mu & G_{c}(s) = 1 + sT \\
G_{b}(s) = \frac{1}{s^y} & G_{d}(s) = 1 + 2 \frac{\xi s}{\omega +} + \frac{1}{\omega _{m^2}}s 
\end{array}
$$
Quindi detti $G(s)$ i fattori che compongono la FdT $G(s)$
$$
\begin{align}

&G(s) = \Pi G_{i}(s) \\
&\implies |G| = \Pi |G_{i}| \implies |G|_{dB} = \sum |G_{i}|_{dB} \\
\angle G = \sum \angle G
\end{align}
$$
Vediamo percio come tracciare i DBM e DBF asintotici di $G_{a,b,c,d}$

# $G_{a}$
$G_{a}(s) = \mu \implies G_{a}(j\omega ) = \mu$
$|G_{a}(j\omega)|_{dB} = 20 \log_{10}|\mu|$
$\angle G(j\omega) = \begin{cases}0 &\mu > 0 \\ -180 & \mu < 0\end{cases}$


```tikz
\begin{document}
\begin{tikzpicture}
\node at (5,2){DBM};
\draw[->] (0,0) -- (10,0)node[right]{$\omega$};
\draw[red] (0,.5) -- (10,.5) node[right]{$|\mu|>1$};
\draw[blue] (0,-.5) -- (10,-.5) node[right]{$|\mu|>1$};
\end{tikzpicture}
\end{document}
```


DBF
```tikz
\begin{document}
\begin{tikzpicture}
\draw[->,red] (0,0) node[left,above]{0} -- (10,0)node[right]{$\omega$};
\draw[blue](0,-.5) node[left, above]{-180} -- (10,-.5);
\end{tikzpicture}
\end{document}
```


# $G_{b}$

$|G_{b}(j\omega)| = \frac{1}{\omega^g} \implies -20 g \log_{10} \omega$
$\angle G_{b}(j\omega) = - g \cdot 90$

```tikz
\usetikzlibrary{decorations.pathreplacing}
\begin{document}
\begin{tikzpicture}
\node at (5,2){DBM};
\draw[->] (0,0) -- (10,0)node[right]{$\omega$};
\draw[blue,thick] (0,.5) -- (10,-.5) node[right]{$g>1$};
\draw[red,thick] (0,-.5) -- (10,.5) node[right]{$g=-2$};
\node[above] at (5,0){1};
\node[above] at (2,0){0.1};
\node[above] at (8,0){10};
\draw [decorate, decoration = {brace,mirror}] (2,0) -- (5,0);
\end{tikzpicture}
\end{document}
```

Tra 0.1 ed 1 e tra 1 e 10 ci è una decade

La pendenza è $-20 g \dB/\text{decade }$, si dice "pendenza-$g$"

BBF orizzonatale al valore $-g \cdot90$



# $G_{C}$
$G_{c}(s) = 1 + sT$
$G_{c}(j\omega ) = 1 + j\omega T$

### APPROSSIMAZIONE
- QUando $|\omega T| \gg 1$
$G_{c}(j\omega) \approx j\omega T$


```tikz
\begin{document}
\begin{tikzpicture}
\draw[->,red] (0,0) -- (0,3)node[right]{$j\omega T, T > 0$};
\draw[->] (0,0) -- (.3,0)node{1};
\draw[->,blue] (0,0) -- (0,-3)node[right]{$j\omega T, T < 0$};
\end{tikzpicture}
\end{document}
```
$|G_{c}(j\omega)| \approx |\omega T|$
$\angle G_{c}(j\omega) = \begin{cases}90 &T > 0\\-90 &T < 0\end{cases}$

- Quando $\omega T \ll 1$
$G_{c}(j\omega) \approx 1$ #todo foto
```tikz
\begin{document}
\begin{tikzpicture}
\draw[->] (0,0) -- (5,0);
\draw[->] (5,0) -- (5,.5);
\draw[->] (5,0) -- (5,-.5);
\end{tikzpicture}
\end{document}
```
```tikz
\usetikzlibrary{decorations.pathreplacing}
\begin{document}
\begin{tikzpicture}
\node at (5,2){DBM};
\draw[->] (0,0) -- (10,0)node[right]{$\omega$};
%\draw[blue,thick] (0,.5) -- (10,-.5) node[right]{$g>1$};
\draw[red,thick] (0,.01) -- (5,.01) -- (10, 5);
\node at (5,0)(c){|};
\node[below] at (c){$1/|T|$};
\end{tikzpicture}
\end{document}
```


idealmente quello rosso, ma realmente c'è un errore che vale massimo $3 \dB$

-----
```tikz
\usetikzlibrary{decorations.pathreplacing}
\begin{document}
\begin{tikzpicture}
\node at (5,2){DBF};
\draw[->] (0,0) -- (10,0)node[right]{$\omega$};
%\draw[blue,thick] (0,.5) -- (10,-.5) node[right]{$g>1$};
\draw[red,thick] (0,.01) -- (5,.01) -- (5, 1) -- (10,1) node[right]{T > 0};
\draw[blue,thick] (0,-.01) -- (5,-.01) -- (5, -1) -- (10,-1) node[right]{T < 0};
\node at (5,0)(c){|};
\node[below] at (c){$1/|T|$};
\end{tikzpicture}
\end{document}
```
realmente è un arcotangente,

# $G_{d}$
$G_{d}(j\omega) = 1 + \frac{2s}{\omega_{s}}j\omega + \frac{1}{\omega_{s}^2}(j\omega)^2 = 1 - \frac{\omega^2}{\omega^2} = 1 - \frac{\omega^2}{\omega_{s}^2} + j 2 \frac{\xi \omega}{\omega_{s}}$

$\omega \to 0 \implies \Re \to 1, \Im \to 0$

$|G_{d}(j\omega)|_{\dB} \to 0$
$\angle G_{d}(j\omega) \to 0$

$$
G_{d}(s) = \frac{1}{\omega_{n}^2}(s - s_{1})(s-s_{2})
$$

```tikz
\begin{document}
\begin{tikzpicture}
\draw[->](0,0) -- (10,0) node[below]{$\Re$};
\draw[->](5,-5) -- (5,5) node[right]{$\Im$};
\node at (1,2)(s1){$\bullet$};
\node at (1,-2)(s2){$\bullet$};
\node at (5,0)(c){};
\node at (5,3)(jw){};
\node at (s1)[above]{$S_1$};
\node at (s2)[above]{$S_2$};
\node at (jw)[right]{$j\omega$ generico};
\draw (c.center) -- (s1.center);
\draw (c.center) -- (s2.center);
\draw[red,->] (s1.center) -- (jw.center);
\draw[red,->] (s2.center) -- (jw.center);
\end{tikzpicture}
\end{document}
```
la distanza tra il centro e le radici è $\omega_n$
$|G_{d}| \to \infty$ come $\omega ^2$ e 
$\angle G_{d} \to 180$

>[!oss]
> $|j\omega - s_{2}|$ è monotona crescente
> $|j\omega - s_{1}|$ ha un minimo
>
>piú s1 ed s2 sono vicini all'asse immaginario piú tale minimo è pronunciato

```tikz
\usetikzlibrary{decorations.pathreplacing}
\begin{document}
\begin{tikzpicture}
\node at (5,2){DBM};
\draw[->] (0,0) node[left]{$0 dB$} -- (10,0)node[right]{$\omega$};
%\draw[blue,thick] (0,.5) -- (10,-.5) node[right]{$g>1$};
\draw[red,thick] (0,.01) -- (5,.01) -- (10, 10);
\node at (5,0)(c){|};
\node[below] at (c){$1/|T|$};
\end{tikzpicture}
\end{document}
```
