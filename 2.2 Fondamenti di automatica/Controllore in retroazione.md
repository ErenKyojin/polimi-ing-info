---
aliases: 
creation date: 2023-03-30 18:47
modification date: 2023-03-30 18:47
---

# Progetto del controllore in retroazione
(SD LTI a TC [[SISO]] nelle ipotesi di Bode)

Schema:
```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\node (t) at (.5,0){$\bullet$};
\draw[-latex] (0,0) node[left]{$w$} -- (t.center);
\draw[-latex] (t.center) -- (1,0);
\draw (1,-.25) rectangle (1.5,.25) node[midway]{R};
\draw (1.5,0) -- (2,0) node[midway, above]{$u$};
\draw (2,-.25) rectangle (2.5,.25) node[midway]{P};
\node (da) at (3,0){$\bullet$};
\draw[-latex] (2.5,0) -- (da.center);
\draw[latex-] (da.center) -- ++ (0,0.5)node[midway,left]{$d_a$};
\draw[-latex] (da.center) -- ++ (1,0) node[above]{$y$};
\draw (3.5,0) -- ++ (0,-.5) node(dr){$\bullet$};
\draw[latex-] (dr.center) -- ++ (0.5,0) node[right]{$d_r$};
\draw[-latex] (dr.center) -| (t.center);
\node[below left =.1mm] at (t) {$t$};
\end{tikzpicture}
\end{document}
```

| Cosa c'è nei segnali di ingresso | componenti canoniche </br> TDL del tipo $k/s^n$ |  sinusoidi   | rumore |
|:--------------------------------:|:-----------------------------------------------:|:------------:| ------ |
|               $w$                |             $\checkmark$ no [[impulso]]             | $\checkmark$ | X^[1]      |
|             $d_{a}$              |                  $\checkmark$                   | $\checkmark$ |    X    |
|             $d_{r}$              |           X al piú sporadici impulsi            | $\checkmark$ |     $\checkmark$   |

Con sinusoidi e rumore componenti armoniche

---
[^1]: [[modulo]] che non venga da un altra misura




## Fasi del progetto

### 1. Progetto statico (PS)

- Assumo che il sistema in anello chiuso sia asintoticamente stabile (lo proveremo poi)
- Considero le sole componenti canoniche di $w$ e di $d_{a}$
- Esprimo $e_{\infty} := \lim_{ t \to \infty } e(t) = \lim_{ t \to \infty } (w(t)-y(t))$ col TVF
- Impongo i requisiti $|e_{\infty}|< tot$ o $e_{\infty} = 0$ e ottengo su gadagno e o tipo della [[funzione di trasferimento|FdT]] d'anello $L(s)$

Vediamo degli esempi:

> [!example]
> 
> Caso $w(t) = \sca(t) : e_{\infty}?$
> $$\begin{align}
> e_{\infty} &= \lim_{ t \to \infty } \underbrace{ = }_{ TVF } \lim_{ s \to 0 }sE(s) = \lim_{ s \to 0 } \underbrace{ \cancel{ s } }_{ \text{teorema} } \underbrace{ \frac{1}{\cancel{ s }} }_{ W(s) } \frac{E(s)}{W(s)} = \\
> &=\lim_{ s \to \infty }  \frac{W(s) - Y(s)}{W(s)} =  \\
> &= \lim_{ s \to 0 } \left( \frac{W(s)}{W(s)}- \frac{Y(s)}{W(s)}  \right) = \lim_{ s \to 0 } (1 - T(s)) =  \\
>  & = \lim_{ s \to 0 }  S(s) = \lim_{ s \to 0 } \frac{s^{g_{L}} / \mu_{L} }{1 + s^{g_{L}} / \mu_{L}} = \lim_{ s \to 0 } \frac{s^{g_{L}}}{s^{g_{L}} + \mu_{L}} = \\
> &= \begin{cases}
> 1&g_{L} < 0 \\
> \frac{1}{1 + \mu_{L}}  &g_{L} = 0\\
> 0 &g_{L} > 0
> \end{cases}
> \end{align}$$
> 

>[!example]
>$$\begin{align}
> &\text{FdT} = \frac{E(s)}{D_{r}(s)}  \\
> & \frac{E}{D_{r}} = \frac{W - Y}{D_{r}} = \underbrace{ \frac{W}{D_{r}} }_{\mathclap{= 0,\ w \text{ non dipende da }D_{r}} } - \frac{Y}{D_{r}}
>\end{align}$$
>

>[!remark]
>Se $e_{\infty}$ è prodotto da piú cuse le condizioni risultanti su $\mu_{L}$ e o $g_{L}$ vanno imposte individualmente perchè a priori non è noto quando le cause si presentano 

### 2. Progetto dinamico (PD)


$$
\begin{align}

&T = \frac{Y}{w} = - \frac{Y}{D_{r}}= \frac{L}{1 + L} \approx \begin{cases}
1 &|L| \gg 1 \\
L &|L| \ll 1
\end{cases} \\

&\mathcal{S} = \frac{Y}{D_{a}} = \frac{1}{1 + L} \approx \begin{cases}
\frac{1}{L}  & |L| \gg 1\\
1 &|L| \ll 1
\end{cases}
\end{align}
$$

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}[scale = 3]
\node[above] at (-2,0){$|T = |Y/W| = |Y/D_r|$};
\node at (-2, -.25){$w = \omega_1 \sin(t)$};
\draw[-{Stealth[scale = 2]}] (-3,0) -- (3,0) node[below]{$\omega$};

\draw[variable = \x, domain = -2.5:2.5,red,thick] plot ({\x}, {rad(-atan(\x))}) node[below]{$|L| \ll 1$};

\draw[blue, thick] (-3,0) -- (0,0);
\draw[variable = \x, domain = 0:2.5,blue,thick] plot ({\x}, {rad(-atan(\x) -2)});

\draw[variable = \x, domain = -2.5:0,green,thick] plot ({\x}, {rad(atan(\x))}) node[below left = 3cm]{$|S| = |Y/D_r|$};
\draw[green,thick] (0,0) -- (3,0);


\draw[fill = yellow, fill opacity = .5] (1.5,0) circle (.1);
\draw[fill = cyan, fill opacity = .5] (1.5,-1) circle (.1);

\node[yellow] (omec) at (0,0){$\bullet$};
\draw[yellow] (0,0) -- ++ (0,-2);
\node[above right] at (omec){F critica $\omega_c$};
\node[red] at (-2.8,1) {$ |L| \gg 1$};
\node[red] at (-2.3,1.3) {$|L(j\omega)|$};
\end{tikzpicture}
\end{document}
```






>[!multi-column]
>
>
>>[!NOTE]
> >Copmonenti di segnali di
> >$w$ = $|T|$ passano inalterate $|RF| \approx 1$
> >$d_{a} = |S|$  compaiono attenuatee $|RF| \ll 1$
> >$d_{r} = |T|$ passano inalterate
> 
>>[!Note]
>>E a destra
>>Compaiono attenuate (azzurro dx)
>>Passano inalterate (giallo dx)
>>Compaiono attenuate (azzurro dx)



### Vincolo sulla velocità di risposta
$\omega_{c_{1} min} < \omega _c (< \omega_{c_{1} max})$

```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex,thick] (-5,0) -- (5,0)node[right]{$\omega$};
\draw[red] (-4,1) -- (4,-1);
\draw[blue] (-4.5,0) -- (-.1,0) -- (3.9,-1);
\end{tikzpicture}
\end{document}
```

$$w \to \fcolorbox{}{}{ $ T(S)8 $} \to y$$
$$w \to \fcolorbox{}{}{ $ \frac{1}{1+s/\omega c}  $}\to y$$

$w = \sca(t)$
$(1 - e^{-\omega_{c}(t)} )\sca(t)$


### Traduzione sul DBM di $L$

### Vincolo sulla reiezione di un disturbo in andata

Un disturbo $d_{a}(t)$ sinusoidale
	$$ d_{a}(t) = A \sin(\omega_{a}(t)) $$
	Con $|A| < \bar{A}$ 
	e $0 \leq \omega_{a_{1}} < \omega_{a} < \omega_{a_{2}} < \omega_{c}$
	Deve produrre asintoticamente su $y(t)$ un effetto di ampiezza non superiore a $\Delta_{a}$
	Per rispettare il vincolo occorre che nella banda $[\omega_{a_{1}}, \omega_{a_{2}}]$ del disturbo il modulo dello RF della FdT da $d_{a}(t)$ a $y(t)$ sia piú piccolo di
	$$\frac{\text{max ampiezza accettata dall'effetto su }y}{\text{max ampiezza possibile di }d_{a}}$$
	ossia.
$$ \frac{Y(j\omega)}{D_{a}(j\omega)} = |\mathcal{S}(\omega)| < \frac{\Delta_{a}}{\bar{A}} \qquad \text{per }\omega_{a_{1}} < \omega < \omega_{a_{2}}$$
 Peró per $\omega \ll \omega_{c}$ abbiamo che $\mathcal{S} = \dfrac{1}{L}$  e quindi occorre $|L| > \dfrac{\bar{A}}{\Delta_{a}}$ 
 Sul DBM di L
 ```tikz
 \usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[-{Stealth[scale = 2]}] (-5,0) node[above]{0 dB} -- (5,0) node[right]{$\omega$};
\draw[blue, fill = blue, fill opacity = .2] (-3,-1.5) -- (-3,1.5) -- (-1,1.5) -- (-1,-1.5);
\node[above left] at (-3,0){$\omega_{a_2}$};
\node[above right] at (-1,0){$\omega_{a_1}$};
\end{tikzpicture}
\end{document}
```
Una L che passa sul rettangolo non ci piace
### Vincolo sulla relazione di un disturbo in retroazione

Un disturbo $d_{r}(t) = B\sin(\omega_{r}(t))$

con $|B| < \bar{B}$
e $\omega_{c} < \omega_{r_{1}} < \omega_{r} <\omega_{r_{2}} \leq \infty$
Deve produrre su $y$ un effetto asintotico di ampizza non superiore a $\Delta r$

Occore che $$| \frac{Y(j \omega)}{D_{r}(j\omega)} | < \frac{\Delta r}{\bar{B}}\qquad \text{per }\omega_{r_{1}} < \omega < \omega_{r_{2}}$$
Ma per $\omega > \omega_{c}\quad T \approx C \implies$ occorre $|L(j\omega)| < \frac{\Delta r}{\bar{B}}$ per $\omega_{r_{1}} < \omega < \omega_{r_{2}}$

Traduzione sul DBM di L

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[-{stealth[scale = 2]}] (-5,0) -- (5,0);
\draw[blue, fill = blue, fill opacity = .2] (2,1.5) -- (2,-1.5) -- (4, -1.5) -- (4,1.5);
\end{tikzpicture}
\end{document}
```


## Mettendo tutto assieme

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}

\draw[-{Stealth[scale = 2]}] (-5,0)node[above]{0 dB} -- (5,0) node[right]{$\omega$};


\draw[blue, fill = blue, fill opacity = .2] (-4,-1.5) -- (-4,1.5) -- (-2,1.5) -- (-2,-1.5);

\draw[blue, fill = blue, fill opacity = .2] (2,1.5) -- (2,-1.5) -- (4, -1.5) -- (4,1.5);

\draw[smooth,green, thick] (-4, 2) to[out= 0, in = 135] (0,0) to[out = 315, in = 180] (4,-2) node[right]{$|L|$};
\draw[blue, dashed] (2,1.5) -- ++ (0,1);
\draw[blue, dashed] (4,1.5) -- ++ (0,1);
\draw[blue, dashed] (-4,-1.5) -- ++ (0,-1);
\draw[blue, dashed] (-2,-1.5) -- ++ (0,-1);

\node[scale = 2] (op) at (-1.5,0){[};
\node[scale = 2] (cl) at ( 1.5,0){]};
\node[below = 5mm] at (op) {$\omega_{c,min}$};
\node[below = 5mm] at (cl) {$\omega_{c,max}$};

\node at (-3,.5){Relaz $d_a$};
\node at (3,.5){Relaz $d_r$};

\end{tikzpicture}
\end{document}
```


Occorre trovare per tentativi una FdT L(s) che
- Rispetti i vincoli del PS su $\mu_{L}$ e/o $g_{L}$
- Rispetti i vincoli del PD come indicati sul foglio semilog
- Cotnengua eventuali zeri di $P(s)$ nel semipiano destro in modo che $R(s)$ non li cancelli
- Producta $\varphi_{m}$ adeguato e abbia $\mu_{L} > 0$
- Abbia grado relativo almeno pari a quello di $P(s)$ altrimenti $R(s)$ viene con piú zeri che poli
- Abbia meno zeri e poli possibile


Fatto ció:
$$
\fbox{$R(s) = L(s) / P(s)$}
$$