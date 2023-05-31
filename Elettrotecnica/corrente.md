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

Si rileva dunque una intensità media di corrente $I$ attraverso a $\d S$ pari a $\frac{nq}{\Delta t}$. Se si assume $\Delta t = t - t_{0}$ e $\Delta Q = Q(t) - Q(t_{0})$, cioè la carica che attraversa $\d S$ in $\Delta t$ viene espressa come l'incremento della carica che aveva attraversato la superficie fino a $t_{0}$, passando al limite per $\Delta t \to 0$ si ottiene
$$ I = \frac{dQ}{dt}  $$
È evidente che, in base alla sua definizione, la corrente $I$ è una grandezza scalare. Tuttavia, nei circuiti elettrici che studieremo, indicheremo abitualmente la corrente con una freccia dotata di verso. In questa rappresentazione assumeremo, per convenzione, che una corrente $I$ abbia il verso e la direzione delle cariche positive. In altre parola, quando indicheremo con una freccia il verso in cui fluisce una corrente $I$, indicheremo che in quel verso si stanno muovendo cariche positive o che cariche negative si stanno muovendo nel verso opposto.

Fino ad ora abbiamo considerato una situazione specifica, in cui le cariche si muovono con velocità costante $\bar{v}$, nella medesima direzione e con lo stesso verso. Più in generale, consideriamo una superficie infinitesima $\d S$ con versore normale $\hat{u}_{N}$, attraverso la quale sono in moto con velocità $\bar{v}$ particelle cariche la cui densità per unità di volume sia $\rho_{V}$. La carica netta passante attraverso l'unità di area nell'unità di tempo è dunque
$$ \rho_{V}\bar{v} \cdot \hat{u}_{N} \d S = \bar{\jmath} \cdot \hat{u}_{N} \d S $$
Essendo $\bar{\jmath} = \rho_{V}v$