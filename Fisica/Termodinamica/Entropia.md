---
aliases: 
creation date: 2024-01-25
---


Sia $\gamma_{1}$ che $\gamma_{2}$ reversibili.
```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex] (0,0) -- (0,4);
\draw[-latex] (0,0) -- (4,0);
\node (A) at (1,1){$\bullet$};
\node (B) at (3,2){$\bullet$};
\node[left] at (A){A};
\node[right] at (B){B};
\draw (A.center) to[out=80] node[midway, above]{$\gamma_2$} (B.center);
\draw (A.center) to[out=320,in=270] node[midway, below]{$\gamma_1$}(B.center);
\end{tikzpicture}
\end{document}
```

Dal calcolo dell'[[integrale di Clausius]] otteniamo:
$$ \int _{A,\gamma_{1}}^B \! \frac{\partial Q}{T}  = \int _{A,\gamma_{2}}^{B} \!\frac{\partial Q}{T}  $$ infatti la trasformazione è reverisibile.
Quindi il generico integrale
$$ \int _{i}^p \! \frac{dQ_{\text{rev}}}{T} $$
dipende solo dagli stati iniziali e finali.

Si può definire quindi una funzione di stato $S$ detta enrtopia tale che
$$ \Delta S = S(B) - S(A) = \int _{A}^B \! \frac{\partial Q}{T} $$

- S è definita a meno di una costante
- $dS = \dfrac{\partial Q_{REV}}{T}$
- $[S] = \pu{ J/K }$

>[!important] Importante
>Per calcolare $\Delta S$ tra due stati di equilibrio si deve considerare una trasformazione reversibile qualsiasi che unisca questi due stati, e calcolare poi l'integrale:
>$$ \int _{A}^B \! \frac{\partial Q_{\text{REV}}}{T}  $$

# Aumento dell'entropia
Consideriamo le seguenti trasformazini 
- $\gamma_{1}$ non reversibile
- $\gamma_{2}$ reversibile
```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex] (0,0) -- (0,4);
\draw[-latex] (0,0) -- (4,0);
\node (A) at (1,1){$\bullet$};
\node (B) at (3,2){$\bullet$};
\node[left] at (A){A};
\node[right] at (B){B};
\draw (A.center) to[out=80] node[midway, above]{$\gamma_1$} (B.center);
\draw (A.center) to[out=320,in=270] node[midway, below]{$\gamma_2$}(B.center);
\end{tikzpicture}
\end{document}
```

possiamo calcolare l'integrale di Clausius:
$$ \begin{align}
\oint \! \frac{\partial Q}{T} &= \int _{A,\gamma_{1}}^B \! \frac{\partial Q_{IRR}}{T} + \int _{B,\gamma_{2}}^A \! \frac{\partial Q_{REV}}{T} =\int _{A,\gamma_{1}}^B \! \frac{\partial Q_{IRR}}{T} -\int _{A,\gamma_{2}}^B \! \frac{\partial Q_{REV}}{T} < 0 \\
&\implies \int _{A,\gamma_{1}}^B \! \frac{\partial Q_{IRR}}{T} < \int _{A,\gamma_{2}}^B \! \frac{\partial Q_{REV}}{T} \implies \Delta S > \int _{A,\gamma_{1}}^B \! \frac{\partial Q_{IRR}}{T}
\end{align}$$

abbiamo quindi che
$$ \Delta S = \int _{A,\gamma_{2}}^B \! \frac{\partial Q_{REV}}{T} $$
e che
$$ \Delta S >\int _{A,\gamma_{1}}^B \! \frac{\partial Q_{IRR}}{T} $$

Consideriamo quindi un sistema isolato termicamente, avremo quindi $\partial S = 0$
ossia
$$ \Delta S \geq 0  $$
- $> 0$ se trasformazione irreversibile
- $= 0$ se trasformazione reversibile

Questo significa che in un sistema isolato termicamente **l'entropia può solo aumentare**, questo include l'universo termodinamico (ossia sistema + ambiente)
$$ S_{U} = S_{\text{SIST}} + S_{\text{AMB}} $$

## Variazioni di entropia per diverse trasformazioni

[[trasformazione ciclica#Variazione dell' entropia]]
[[trasformazione adiabatica#Variazione dell' entropia]]
[[termostati#Variazione dell' entropia|termostato, variazione dell'entropia]]
[[cambiamenti di fase]]
#### Trasformazioni di un [[Gas perfetti|gas perfetto]]
[[trasformazione isocora#Entropia in una trasformazione isocora]]
[[trasformazione isobara#Entropia in una trasformazione isobara]]
[[trasformazione isoterma#Entropia in una trasformazione isoterma]]

# Diagramma Lavoro-Entropia

```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex] (0,0) -- (4,0) node[right]{S};
\draw[-latex] (0,0) -- (0,4) node[left]{T};
\node (A) at (1,3) {$\bullet$};
\node (B) at (3.5,3.5) {$\bullet$};
\draw[fill=red!70](1,0) -- (A.center) -- (B.center) -- (3.5,0) -- (1,0);
\draw[thick] (A.center) to[out=50, in=220] (B.center);
\draw[dashed] (A.center) -- ++ (0,-3);
\draw[dashed] (B.center) -- ++ (0,-3.5);
\end{tikzpicture}
\end{document}
```
In rosso il calore della reversibile

```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex] (0,0) -- (4,0)node[right]{S};
\draw[-latex] (0,0) -- (0,4)node[left]{T};
\node (A) at (1,2) {$\bullet$};
\draw[fill = red!70] (A.center) to[out=20] (3,2.7) to[out = 1] (3.5,2.2) to[in=20, out=270] (3,1) to[in = 270, out = 180] (A.center);
\node[above] at (A){A};
\end{tikzpicture}
\end{document}
```

In rosso $\mathcal{L} = Q$

##### Adiabatica reversibile
```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex] (0,0) -- (4,0)node[right]{S};
\draw[-latex] (0,0) -- (0,4)node[left]{T};
\node (A) at (1,1) {$\bullet$};
\node (B) at (1,3.5) {$\bullet$};
\node[left] at (A){A};
\node[left] at (B){B};
\draw (A.center) to (B.center);
\end{tikzpicture}
\end{document}
```
$$ (\partial Q)_{\text{REV}} = 0 \implies dS =0 \implies S= \cost $$
Quindi è un isotermica

#### Isoterma Reversibile

```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex] (0,0) -- (4,0)node[right]{S};
\draw[-latex] (0,0) -- (0,4)node[left]{T};
\node (A) at (1,1) {$\bullet$};
\node (B) at (3.5,1) {$\bullet$};
\node[left] at (A){A};
\node[right] at (B){B};
\draw (A.center) to (B.center);
\end{tikzpicture}
\end{document}
```

$$\begin{align}
(\partial Q)_{\text{rev}} &= \partial \mathcal{L} = \frac{nRTdV}{V} \\
\Delta S &= \frac{Q}{T}
\end{align}$$

#### Ciclo di Carnot
```tikz
\begin{document}
\begin{tikzpicture}
\draw[-latex] (0,0) -- (4,0)node[right]{S};
\draw[-latex] (0,0) -- (0,4)node[left]{T};
\node (A) at (1,1) {$\bullet$};
\node (B) at (3.5,1) {$\bullet$};
\node (D) at (1,3) {$\bullet$};
\node (C) at (3.5,3) {$\bullet$};
\node (T1) at (0,1){};
\node (T2) at (0,3){};
\node (S1) at (1,0){};
\node (S2) at (3.5,0){};
\draw (A.center) to (B.center) to (C.center) to (D.center) to (A.center);
\draw[dashed] (S2.center) to (B.center);
\draw[dashed] (S1.center) to (A.center);
\draw[dashed] (T1.center) to (A.center);
\draw[dashed] (T2.center) to (D.center);
\node[below] at (S1){$S_1$};
\node[below] at (S2){$S_2$};
\node[left] at (T1){$T_1$};
\node[left] at (T2){$T_2$};
\end{tikzpicture}
\end{document}
```
considerato il ciclo percorso in senso orario.

Si tratta di due isoterme e di due adiabatiche

avremo come lavoro
$$ \mathcal{L} = \Delta T\Delta S = (T_{2}-T_{1})(S_{2}-S_{1}) $$

# ANKI

```anki
deck: Fisica
---
Entropia definizione
===
Dal calcolo dell'integrale di Clausius tra due stati A e B attraverso diverse trasformazioni, si osserva che per una trasformazione reversibile l'integarle dipende solo da i due punti, possiamo quindi deifnire una funzione di stato $S$ tale che

$$ \Delta S = S(B) - S(A) = \int_A^B \frac{\partial Q_{REV}}{T} $$

S è detta entropia ed è:
- definita a meno di una costante
- La sua derivata è uguale alla funzione integrata
- Si misura in Joule su Kelvin
```


```anki
deck: Fisica
---
Calcolo dell'entropia
===
Per calcolare la differenza di entropia $\Delta S$ tra due stati devo trovare una trasformazione reversibile tra di essi e calcolarne l'integrale
$$ \int_A^B \frac{\partial Q_{REV}}{T} $$
```

