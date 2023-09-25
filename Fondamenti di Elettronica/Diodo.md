---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

Il diodo è un elemento drogato metà P e metà N. Si generà uno squilibrio tra le due sezioni con gli elettroni in più. Gli atomi aggiunti si polarizzano (diventano ioni) ma rimangono bloccati nel cristallo. Quindi c'è un meccanismo di diffusione iniziale che automaticamente blocca il flusso.

Due conclusioni intuitive:
### Ho creato una pila!
No, i [[portatori minoritari]] dati dall'agitazione termica in N verranno attratti da P, e vengono quindi driftano nel verso opposto. Lo stesso derift si manifesta per P annullandosi.

### È inutile!

##### Polarizzazione inversa
Proviamo a collegare una batteria con il - su P ed il + su N. In questo modo aumenterà la dimensione dell'interfaccia con un campo elettrico interno che aumenterà della tensione applicata dalla batteria. Generiamo quindi una corrente di drift molto bassa (nanoAmpere) e una diffusione nulla.

#### Polarizzazione diretta
Giriamo la batteria. Facilitiamo il passaggio delle cariche attraverso l'area centrale. Avremo una bassa corrente di drift ma un'alta diffusione.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,-3) to [vsource] (0,3) to (3,3) to [diode,v =V, i = I] (3,-3) to (0,-3);
\end{tikzpicture}
\end{document}
```
P triangolo, n sbarretta

```tikz
\begin{document}
\begin{tikzpicture}
\draw(0,0) -- ++ (0,4);
\draw(-4,0) -- ++ (4,0);
\draw (-3,-0.2) -- (0,0);
\draw[smooth] (0,0) to[in = 235, out = 0] (1,1) to[out = 65, in = 270] (2,6);
\node[] at (-2,2) {INV};
\node[] at (2,2) {DIR};
\end{tikzpicture}
\end{document}
```
$V_{TH} = \frac{kt}{q}$

È praticamente un'interruttore in base alla polarizzazione. A che [[safe operating area]] può lavorare?

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,-3) to[vsource = E] (0,3) to (3,3) to[R = R] (3,-3) to (0,-3);
\end{tikzpicture}
\end{document}
```
Può succedere che un elettrone libero colpisca un atomo che libera elettroni di legame che colpisce altri atomi e si genera una reazione a catena. Processo esponenziale della corrente di drift.
Ci sarà quindi un campo critico in inversa che genera un'altra esponenzial, detto breakdown della giunzione. (non si rompe necessariamente il diodo, ma in realtà si)

```tikz
\begin{document}
\begin{tikzpicture}
\draw(0,0) -- ++ (0,4);
\draw(-4,0) -- ++ (4,0);
\draw[red] (-6,-6) to[out = 90, in = 235] (-4,-1) node[below]{BD} to[in = 190, out = 235] (-3, -0.2);
\draw (-3,-0.2) -- (0,0);
\draw[smooth] (0,0) to[in = 235, out = 0] (1,1) to[out = 65, in = 270] (2,6);
\draw[dashed] (-3,3) -- (-3,-3) node[right]{100 V};
\node[] at (-2,2) {INV};
\node[] at (2,2) {DIR};
\end{tikzpicture}
\end{document}
```

# Diodo di Schottky
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,0) to[Schottky diode] (2,0) ;
\end{tikzpicture}
\end{document}
```
Aumenta l'area di utilizzo
# Diodo di Zener
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,0) to[ZZener diode] (2,0);
\end{tikzpicture}
\end{document}
```
Regione di Zener quando la tensione è minore della tensione di Zener, che è modulabile dai 3 ai 20 volt.
```tikz
\begin{document}
\begin{tikzpicture}
\draw(0,0) -- ++ (0,4);
\draw(-4,0) -- ++ (4,0);
\draw[red] (-6,-6) to[out = 90, in = 235] (-4,-1) node[below]{BD} to[in = 190, out = 235] (-3, -0.2);
\draw (-3,-0.2) -- (0,0);
\draw[smooth] (0,0) to[in = 235, out = 0] (1,1) to[out = 65, in = 270] (2,6);
\draw[dashed] (-3,3) -- (-3,-3) node[right]{100 V};
\node[] at (-2,2) {INV};
\node[] at (2,2) {DIR};
\end{tikzpicture}
\end{document}
```

#todo 


```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,-3) to [R=$R_{in}$, i^<=$i_i$] (0,3) to (-2,3) to[ZZener diode,invert,v_<=$V_{out}$] (-2,-3) to (0,-3);
\draw (-2,-3) to (-4,-3) to[V] (-4,3) to[R=$R_{in}$] (-2,3);
\end{tikzpicture}
\end{document}
```
Questo circuito ha tra i due capi del diodo una tensione minima e una tensione massima
voltage dir = EF.


In queste situazioni si calcola quando la corrente del diodo cambia corrente, ... 
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw(0,0) to [V=$V_M(t)$] (0,4) to [R=$R_1$] (2,4) to [diode, l=$D_1$,v=$V_{D_1}$] (2,2) to [V=$V_{DD}$] (2,0);
\draw (2,4) to (4,4) to [diode, invert,l_=$D_2$,v^=$\ V_{D_2}$] (4,2) to [V=$V_{SS}$] (4,0);
\draw(0,0) to (6,0) to (8,0) to [generic] (8,4) to (6,4);
\draw(4,4) to (6,4);

\node (A) at (6,4){$\bullet$};
\node (B) at (6,0){$\bullet$};
\node[above] at (A){A};
\node[below] at (B){B};
\end{tikzpicture}
\end{document}
```
$V_{out}$  tensione ad $AB$
$V_{DD} = 5V$
$V_{SS} =-5V$

Se $V_M$ molto alta ($10V$) in $D1$ potrà scorrere in $D2$ no.

Il diodo è un componente 