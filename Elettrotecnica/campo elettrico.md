Per definire il campo elettrico introduciamo il concetto di [[carica di prova]]. Se $q$ risente di una forza $\bar{F}$ proporzionale a se stessa, allora affermiamo che in quella regione dello spazio è presente un campo elettrico $\bar{E} = \displaystyle\frac{\vec{F}}{q}$. 
$\bar{E}$ è un campo vettoriale che ha direzione e verso dati da $\vec{F}$, $q$ è infatti positiva per definizione, e modulo proporzionale al modulo di $\bar{F}$ attraverso $q^{-1}$. Il campo elettrico si misura in $NC^{-1}$. Rifacendoci alla definizione 1 di campo, ogni regione in cui una carica è soggetta ad una forza proporzionale ad essa è detta anche campo elettrico.
Generalmente se $\bar{E}=\bar{E}(x,y,z,t)$ abbiamo a che fare con un campo elettrico tempo-variante. Si parla invece di:
- campo stazionare (condizione statica) se $\displaystyle\frac{ \partial \bar{E}(x,y,z,t) }{ \partial t } = 0$ e  
- campo quasi-stazionario se $\frac{ \partial \bar{E}(x,y,z,t) }{ \partial t } \approx 0$.
Come è possibile generare un campo elettrico? Come descritto dalla  [[forza elettrostatica|legge di Coulomb]]

```tikz
\begin{document}
\begin{tikzpicture}
\begin{scope}[rotate = 20]
\draw (0,0) -- ++ (7,0);
\node (Q) at (1,0){$\bullet$};
\node (q) at (5,0){$\bullet$};
\node[below] at (Q){Q};
\node[above] at (q){q};
\node[above] at (Q){$P_Q$};
\node[below=2.5mm] at (q){$P(x,y,z)$}; 
\draw[green,-latex] (Q) -- ++ (1,0) node[midway,above]{$\hat x$};
\draw[-latex,thick] (q) -- ++ (1,0)node[above=2.5mm]{$\bar{F}_{QA} = q\bar{E}(P)$};
\end{scope}
\end{tikzpicture}
\end{document}
```

La carica puntiforme che genera il campo sopra è $Q > 0$, ferma rispetto all'osservatore, in un sistema inerziale, nel vuoto. $q$ è invece una carica di prova. Se posizioniamo $q$ in $P$, in base a quanto detto a proposito della forza di Coulomb, rileviamo $\bar{F}_{Qq} = \frac{1}{4\pi\varepsilon_{0}} \frac{qQ}{r^2}\hat{r}$. Dalla definizione operativa di campo elettrico si ricava quindi
$$ \bar{E} = \frac{\bar{F}}{q} = \frac{1}{4\pi\varepsilon_{0}} \frac{Q}{r^2}\hat{r} $$
Notiamo che se $P \to \infty$ l'intensità del campo $E(P) \to 0$. Viceversa, se $P \to 0$, l'intensità del campo $E(P) \to \infty$. Il campo elettrico generato da una carica puntiforme è un **campo radiale**, cioè in ogni punto $P$ dello spazio è diretto come un raggio che congiunge $P$ alla carica puntiforme che genera il campo. Le linee di forza del campo sono radiali

```tikz
\begin{document}
\begin{tikzpicture}
\draw[latex-latex,thick] (1.5,1.5) -- (-1.5,-1.5);
\draw[latex-latex,thick] (-1.5,1.5) -- (1.5,-1.5);
\draw[latex-latex,thick] (2.1,0) -- (-2.1,0);
\draw[latex-latex,thick] (0,2.1) --(0,-2.1);
\node[red,scale=1.5] (O) at (0,0){$\bullet$};
\node[] at (1,.4) {$Q^+$};
\end{tikzpicture}
\hspace{3cm}
\begin{tikzpicture}
\draw[-latex,thick] (2.1,0) -- (O); 
\draw[-latex,thick] (1.5,1.5) -- (O);
\draw[-latex,thick] (0,2.1) -- (O);
\draw[-latex,thick] (-1.5,1.5) -- (O);
\draw[-latex,thick] (-2.1,0) -- (O);
\draw[-latex,thick] (-1.5,-1.5) -- (O);
\draw[-latex,thick] (0,-2.1) -- (O);
\draw[-latex,thick] (1.5,-1.5) -- (O);
\node[blue,scale=1.5] (O) at (0,0){$\bullet$};
\node at (1,.4) {$Q^-$};
\end{tikzpicture}

\end{document}
```

Se ci fossero $N$ cariche elettriche $Q_{k} (k = 1,2,\dots,N)$ posizionate in $P_{k}$, potremmo definire un campo elettrico risultante nel punto $P$ sovrapponendo gli effetti delle diverse cariche che distano $\bar{r}_{k}$ da $P$, cioè il campo elettrico è adattivo
```tikz
\begin{document}
\begin{tikzpicture}

\begin{scope}[rotate = 20]
\draw(0,0) -- ++ (7,0);
\node (Qk) at (2.5,0){$\bullet$};
\node[below] at (Qk){$Q_k > 0$};
\draw[thick,-latex] (Qk) -- ++ (1,0) node[midway,above]{$\hat{x}_k$};
\node (E) at (6.1,0){$\bullet$};
\draw[thick,-latex] (E) -- ++ (1,0) node[above right]{$\bar{E}_k$};
\end{scope}

\begin{scope}[shift ={(1,2.5)}, rotate = -5]
\draw(0,0) -- ++ (6,0);
\node (Q1) at (1,0){$\bullet$};
\node[above] at  (Q1) {$Q_1 > 0$};
\draw[thick,-latex] (Q1) -- ++ (1,0) node[midway,below]{$\hat{x}_1$};
\draw[thick,-latex] (E) -- ++ (1,0) node[above right]{$\bar{E}_1$};
\end{scope}

\begin{scope}[shift ={(.75,-2)}, rotate = 39.2]
\draw(0,0) -- ++ (6.5,0);
\node (Q2) at (1,0){$\bullet$};
\node[below=2.5mm] at  (Q2) {$Q_2 > 0$};
\draw[thick,-latex] (Q2) -- ++ (1,0) node[midway,above=2.5mm]{$\hat{x}_2$};
\draw[thick,-latex] (E) -- ++ (-1,0) node[below right]{$\bar{E}_2$};
\end{scope}


\end{tikzpicture}
\end{document}
```
$$ \bar{E} = \sum_{k=1}^N \bar{E}_{k} = \frac{1}{4\pi\varepsilon_{0}} \sum_{k = 1}^N \frac{Q_{k}}{r_{k}^2}\hat{r}_{k} $$



