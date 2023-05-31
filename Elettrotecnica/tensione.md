# Tensione
Se una [[carica]] viene lasciata libera di muoversi in una regione in cui vi è presente un [[campo elettrico]], essa subisce una [[forza]] e quindi si mette in [[moto]]. La forza prodotta dal campo elettrico tende a farla muovere lungo le [[linee di forza]] del campo stesso. Nel muovere la carica nella regione di spazio in cui è presente il campo elettrico, esso stesso compie [[Fisica/Dinamica/Lavoro|lavoro]] e quindi modifica l'energia della carica. Cosa accade se voglio muovere una carica da un punto $A$ ad un punto $B$, lungo ad esempio il percorso $\gamma_{1}$? In questo caso non sarà il campo a compiere lavoro ma dovrò essere io a dovermi opporre alla forza generata dal campo elettrico.

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}

\begin{scope}
\draw(0,0) .. controls (0.2,2) and (2.8,4) .. (3,6);
\node (A) at (1,2.25){$\bullet$};
\draw[-latex,thick] (A.center) -- ++ (.5,1)node[above left]{$\bar{E}_A$};
\node[left] at (A){A};
\draw[-{>[scale = 2]}] (A.center) -- ++ (.6,.9);
\node[below] at (A) {q};
\end{scope}

\begin{scope}[shift={(2,0)}]
\draw[->](0,0) .. controls (0.2,2) and (2.8,4) .. (3,6);
\node (p1) at (1.15,2.5){$\bullet$};
\draw[-latex,thick] (p1.center) -- ++ (.5,1)node[above left]{$\bar{E}$};
\node[below right] at (p1){$P_1$};
\end{scope}

\begin{scope}[shift={(4,0)}]
\draw[->](0,0) .. controls (0.2,2) and (2.8,4) .. (3,6);
\node (p2) at (1.1,2.42){$\bullet$};
\draw[-latex,thick] (p2.center) -- ++ (.5,1)node[above left]{$\bar{E}_2$};
\node[below right] at (p2){$P_2$};
\end{scope}

\begin{scope}[shift={(6,0)}]
\draw[->](0,0) .. controls (0.2,2) and (2.8,4) .. (3,6);
\node (p3) at (1.2,2.6){$\bullet$};
\draw[-latex,thick] (p3.center) -- ++ (.5,1)node[above left]{$\bar{E}_3$};
\node[below right] at (p3){$P_3$};
\end{scope}

\draw[thick](1,2.265) .. controls (2.5,3) and (4.5,2) .. (8,2.75) node[below]{B} node[left = 1.5cm]{$\gamma_1$};

\end{tikzpicture}
\end{document}
```

Se dividiamo il percorso $\gamma_{1}$ in tanti piccoli tratti $d\bar{l}_{k}$ rettilinei, ossia approssimiamo la curva $\gamma_{1}$ con una spezzata. Il lavoro che devo compiere lungo il tratto $\d\bar{l}_{1}$ è pari a $\d\mathcal{L}_{1} = -q\bar{E}_{1} \cdot \d\bar{l}_{1} = -qE_{1}\d l_{1} \cos \alpha_{1}$ e quindi, sommando i contributi lungo tutto il percorso, ricavo l'approssimazione
$$ \mathcal{L}_{AB}^{\gamma_{1}} \approx -q \sum_{k = 1}^N E_{k}\d l_{k} \cos \alpha k$$
Al [[limite]] in cui consideriamo infinitesimi i singoli tratti $\d \bar{l}_{k}$, possiamo riscrivere quella sopra in forma [[integrale]]:
$$ \mathcal{L}_{AB}^{\gamma_{1}} = -q \int _{\gamma_{1}} \!\bar{E} \cdot \, \mathrm{d}\bar{l}  $$
>[!def]
>La **tensione** è il lavoro, normalizzato rispetto alla carica, necessario per spostare una carica lungo un determinato percorso in una regione in cui vi sia un campo elettrico. La tensione è quindi una grandezza di linea e si misura in Volt $[V] = JC^{-1}$

Una tensione ha senso solo dopo aver definito la linea lungo cui la si misura. Non dobbiamo essere stupiti da questa cosa, ci sono diverse grandezze di linea, come ad esempio la distanza.

Se prendo un altro percorso per andare da $A$ a $B$ e lo chiamo $\gamma_{2}$ in generale si avrà $\mathcal{L}_{AB}^{\gamma_{2}} \neq \mathcal{L}_{AB}^{\gamma_{1}}$. Siamo interessati a quelle situazioni in cui il lavoro per portare una carica elettrica da $A$ a $B$ non dipende dal percorso. In quel caso il campo elettrico si dice [[campi di forze conservative|campo conservativo]] e, come ad esempio accade per il campo gravitazionale, possiamo definire un'**[[energia potenziale]]** $W(P) [J]$ che dipende dal generico punto $P$ della regione di spazio in cui viene definita ed in cui è presente il campo. Tale funzione consente di esprimere il lavoro che si deve compiere per muovere una carica da $A$ a $B$ lungo un qualunque percorso come $\mathcal{L}_{AB}^{\gamma_{1}} = \mathcal{L}_{AB}^{\gamma_{2}} = W(B) - W(A)$.
Normalizzando la funzione $W$ rispetto alla carica $q$ si definisce il potenziale elettrico:

>[!def]
>Normalizzando la funzione $W$ rispetto alla carica $q$ si definisce la funzione $V(P) = W(P) / q$ che è detta **potenziale elettrico**, definiamo inoltre $V_{BA}$ la differenza di potenziale  $V_{B} - V_{A}$, che è il lavoro normalizzato rispetto alla carica ed indipendente dalla linea che dobbiamo compiere per muovere una carica da $A$ a $B$.

Verifichiamo adesso che il campo elettrico generato da una carica puntiforme $Q$ ammette un potenziale ovvero è conservativo. Suddividendo il percorso $\gamma$ in figura in tratti rettilinei $\d \bar{l}$ può essere scritto come
$$ d\mathcal{L} = -q\bar{E} \cdot \d \bar{l} = -q \frac{1}{4\pi\varepsilon_{0}} \frac{Q}{r^2} \hat{r} \cdot \d\bar{l} $$

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}[scale = 1.5]

\draw[thick] (-2.5,0) -- (2.5,0);
\draw[thick](0,-2.5) -- (0,2.5);
\draw[-{Latex[scale = 1.25]}] (-2.5,-2.5) -- (2.5,2.5) node[above]{$\bar{E}$};
\draw[green,-{Latex[scale = 1.25]}] (0,0) -- (1,1) node[above]{$\hat{x}$};
\node[below right] at (0,0){Q};
\draw[thick,-latex] (2,2.7) node[above]{A} .. controls (1.7,1.4) and (2.7,1) .. (2.4,.3) node[right]{B};
\draw[red,-{Latex[scale = 1.5]}] (2.1,1.5) -- ++ (.1,-.2) node[right]{$d\bar{l}$}; 

\end{tikzpicture}
\hspace{2cm}
\begin{tikzpicture}
\begin{scope}[rotate=-30]
\draw[-latex] (0,0) -- ++ (1.5,0)node[midway,below]{$d\bar{e}\perp$};
\draw[-latex] (0,0) -- ++ (0,2)node[midway,left]{$d\bar{e}\parallel$};
\draw[-latex] (0,0) -- ++ (1.5,2)node[right]{$d\bar{e}$};
\draw[dashed] (1.5,0) -- ++ (0,2);
\draw[dashed] (0,2) -- ++ (1.5,0);
\draw[-latex] (0,2) -- ++ (0,1)node[midway,right]{$\hat{x}$};
\end{scope}
\end{tikzpicture}

\end{document}
```

Facendo riferimento alla figura a destro notiamo come sia possibile scomporre $\d \bar{l}$ nella somma di due contributi, uno $(\d \bar{l}_{\parallel})$ diretto come il versore $\hat{r}$ e uno $(\d \bar{l}_{\perp})$ normale ad esso. Possiamo allora riscrivere la formula sopra come
$$ \begin{align}
\d \mathcal{L} &= -q \frac{1}{4\pi\varepsilon_{0}} \frac{Q}{r^2}\hat{r} \cdot (\d\bar{l}_{\perp} + \d \bar{l}_{\parallel} ) = -q \frac{1}{4 \pi\varepsilon_{0}} \frac{Q}{r^2}\hat{r} \cdot d\bar{l}_{\parallel}= \\
&=-q \frac{1}{4\pi\varepsilon_{0}} \frac{Q}{r^2}\hat{r} \cdot \underbrace{ \hat{r} \d r }_{ d\bar{l}_{\parallel} }=-q \frac{1}{4\pi\varepsilon_{0}} \frac{Q}{r^2} \d r
\end{align} $$
E quindi ottenere
$$ \begin{align}
\mathcal{L}_{AB}^\gamma &= - \int _{A}^B \frac{qQ}{4\pi\varepsilon} \! \, \frac{\mathrm{d}r}{r^2} =- \frac{Q}{4 \pi\varepsilon_{0}}q \left( - \frac{1}{r} \right) \bigg \vert_{r_{A}}^{r_{B}} = -q\left( -\frac{Q}{4\pi \varepsilon_{0}r_{B} } + \frac{Q}{4\pi\varepsilon_{0}r_{A}} \right) \\
&= q\left( \frac{Q}{4\pi\varepsilon_{0}rB} - \frac{Q}{4\pi\varepsilon_{0}r_{A}} \right) = q(V_{B} - V_{A}) = qV_{BA}
\end{align} $$
Che non dipende dal percorso ma solo dagli estremi $A$ e $B$. Il campo elettrico generato da una carica puntiforme ammette quindi un potenziale radiale $V(r) = \frac{Q}{4\pi \varepsilon_{0} r}$

>[!oss]
>Qualsiasi energia potenziale, quindi anche il potenziale elettrico, è una grandezza definita a meno di una costante additiva, ossia se partendo da una funzione $V(p)$ scrivessimo la funzione potenziale $\tilde{V} (P) = V(P) + V_{0}$ con $V_{0}$ costante, il lavoro necessario per spostare una carica $q$ da $A$ a $B$ (normalizzato rispetto alla carica) resterebbe invariato essendo $\frac{\mathcal{\tilde{L}}_{AB}}{q} = \tilde{V}(B) - \tilde{V}(A) = V(B) + V_{0} - (V(A) + V_{0}) = \frac{\mathcal{L}_{AB}}{q}$. Per convenzione $V(\infty) = 0$, quindi:
>$$ \frac{\mathcal{L}_{\infty,A}}{q} = \int _{\infty}^A \! \bar{E} \cdot  \, \mathrm{d}\bar{l} = V_{A} - V(\infty) = V_{A}  $$
>e quindi $qV_{A}$ è il lavoro necessario per portare una carica $q$ dall'infinito al punto $A$ nell'ipotesi che in tutto lo spazio ci sia il medesimo campo elettrico conservativo.

Se il campo elettrico è conservativo il lavoro fatto per spostare una carica lungo un percorso chiuso è identicamente nullo

```tikz
\begin{document}
\begin{tikzpicture}
\node (A) at (-1,0){A};
\node (B) at (1,0) {B};
\path[-latex] (A) edge[bend right] node[below]{$r_1$} (B)
              (B) edge[bend right] node[above]{$r_2$} (A);
\end{tikzpicture}
\end{document}
```
$$\begin{align}
 - \int _{\gamma_{1}} \!\bar{E} \cdot \, \mathrm{d}\bar{l} = \frac{\mathcal{L}_{AB}^{\gamma_{1}}}{q} = V_{BA} \\
- \int _{\gamma_{2}} \!E \, \mathrm{d}x 
\end{align}$$


# Tensioni #trifase bilanciate
Per definizione tre tensioni sinusoidali, alla stessa pulsazione $\omega$, con lo stesso [[valore efficace]], sfasate tra di loro di 120° o di $\frac{2}{3}\pi \text{ rad}$

$$\begin{flalign}
v_a(t)\quad &=\quad V_0\cos(\omega t + \phi_0) \\
v_b(t) \quad &= \quad V_0\cos\left(\omega t + \phi_0 - \frac{2}{3}\pi\right) \\
v_c(t) \quad &= \quad V_0\cos\left(\omega t + \phi_0 - \frac{4}{3}\pi\right)
\end{flalign}$$
Questa terna trifase, la cui fase $\phi_0$ può essere scelta arbitrariamente $0$ è detta *sequenza abc* o *sequenza positiva* in quanto $v_a(t)$ anticipa $v_b(t)$ di $\frac{2}{3}\pi$ e a sua volta $v_b(t)$ anticipa $v_c(t)$ di $\frac{2}{3}\pi$

**analogamente**

Possiamo definire la *sequenza acb* o *sequenza negativa* come:
$$
\begin{flalign}
	v_a(t) \quad &= \quad V_0\cos(\omega t + \phi_0) \\
	v_c(t) \quad &= \quad V_0\cos\left(\omega t + \phi_0 - \frac{2}{3}\pi\right) \\
	v_b(t) \quad &= \quad V_0\cos\left(\omega t + \phi_0 - \frac{4}{3}\pi\right) \\
\end{flalign}
$$

Queste due sequenze vengono prodotte da un generatore trifase detto [[alternatore]]