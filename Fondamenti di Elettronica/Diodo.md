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
Ci sarà quindi un campo critico in inversa che genera un'altra esponenzial, detto breakdown della giunzione. (non si rompe necessariamente il diodo)

```tikz
\begin{document}
\begin{tikzpicture}
\draw(0,0) -- ++ (0,4);
\draw(-4,0) -- ++ (4,0);
\draw[red] (-6,-6) to[out = 90, in = 235] (-4,-1) node[below]{BD} to[in = 45, out = 45] (-3, -0.2);
\draw (-3,-0.2) -- (0,0);
\draw[smooth] (0,0) to[in = 235, out = 0] (1,1) to[out = 65, in = 270] (2,6);
\node[] at (-2,2) {INV};
\node[] at (2,2) {DIR};
\end{tikzpicture}
\end{document}
```
