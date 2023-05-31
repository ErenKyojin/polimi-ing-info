---
aliases: corrente elettrica
---


La corrente elettrica $I$, misurata in Ampere ($A = Cs^{-1}$), è definita, in termini operativi, come la carica elettrica che fluisce, nell'unità di tempo, attraverso una superficie di controllo posta in una ragione dello spazio. La possiamo introdurre facendo riferimento alla situazione semplice e semplificata riportata in figura.
```tikz
\usetikzlibrary{shapes.geometric}
\begin{document}
\begin{tikzpicture}

\node[cylinder,draw,minimum height = 4cm, minimum width = 2cm] (c) at (0,0){};
\draw[dashed] (-1.75,-1) arc (170:190:-5.6);

\draw[->] (0,0) node{$\bullet$} -- ++ (.5,0);
\draw[->] (1,.5) node{$\bullet$} node[left]{$q$} -- ++ (.5,0);
\draw[->] (-1.2,-.25) node{$\bullet$} -- ++ (.5,0);
\draw[->] (1.2,-.75) node{$\bullet$} -- ++ (.5,0);
\node at (0,-1.5){$V \cdot \Delta t$};
\node at (2.25,-1){$dS$};

\end{tikzpicture}
\end{document}
```
Immaginiamo un piccolo cilindretto di lunghezza $v\Delta t$ che contiene $n$ cariche $q$ che si muovono a velocità costante $\bar{v}$ parallelamente all'asse del cilindretto stesso. Nell'intervallo di tempo $\Delta t$, tutte le $n$ cariche attraversano la superficie di base $\d S$ del cilindretto.

Si rileva dunque una intensità media di corrente $I$ attraverso a $\d S$ pari a $\frac{nq}{\Delta t}$. Se si assume $\Delta t = t - t_{0}$ e $\Delta Q = Q(t) - Q(t_{0})$, cioè la carica che attraversa $\d S$ in $\Delta t$ viene espressa come l'incremento della carica che aveva attraversato la superficie fino a $t_{0}$, passando al limite per $\Theta$