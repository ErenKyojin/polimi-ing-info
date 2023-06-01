---
aliases: 
creation date: 2023-05-31 17:23
modification date: 2023-05-31 17:23
---

I conduttori sono materiali in cui ci sono dei portatori di [[carica]] (elettroni o ioni) in grado di muoversi liberamente attraverso il mezzo. In presenza di un [[campo elettrico]] esterno ad essi, i conduttori manifestano un comportamento detto induzione elettrostatica. Le cariche elettriche mobili si accumulano in superficie, disponendosi in modo tale da indurre all'interno del conduttore un campo elettrico che annulla gli effetti di quello esterno.
```tikz
\begin{document}
\begin{tikzpicture}[auto]

\draw (0,0) circle (2cm);
\draw (0,0)[fill=gray] circle (1.9cm);

\draw[blue,-latex, ultra thick] (-5,0) -- (-2,0)node[scale = 2, red, right]{-};
\draw[blue,-latex, ultra thick] (-5,1) to[in = 135, out = 0] (-1.7,1)node[scale = 2, red, right]{-};
\draw[blue,-latex, ultra thick] (-5,1.75) to[in = 100, out = 0] (-.75,1.75)node[scale = 2, red, right]{-} ;
\draw[blue,-latex, ultra thick] (-5,-1) to[in = 225, out = 0] (-1.7,-1)node[scale = 2, red, right]{-};
\draw[blue,-latex, ultra thick] (-5,-1.75) to[in = 265,out = 0] (-.75,-1.75)node[scale = 2, red, right]{-};

\draw[blue,-latex, ultra thick] (2,0)node[scale = 1.5, blue, left]{+} -- (5,0);
\draw[blue,-latex, ultra thick] (1.7,1)node[scale = 1.5, blue, left]{+} to[out=45,in=180] (5,1);
\draw[blue,-latex, ultra thick] (.75,1.75)node[scale = 1.5, blue, left]{+} to[out=80, in=180] (5,1.75);
\draw[blue,-latex, ultra thick] (1.7,-1)node[scale = 1.5, blue, left]{+} to[out=320,in = 180] (5,-1);
\draw[blue,-latex, ultra thick] (.75,-1.75)node[scale = 1.5, blue, left]{+} to[out=285, in=180] (5,-1.75);

\end{tikzpicture}
\end{document}
```
Le linee di [[forza]] di $\vec{E}$ all'esterno del conduttore sono perpendicolari alla sua superficie, altrimenti metterebbero in [[moto]] la carica superficiale rompendo l'equilibrio dovuto all'induzione elettrostatica. Se $\bar{E}$ all'interno di un conduttore è nullo, $\int _{\gamma} \!\bar{E} \, \mathrm{d}\bar{l}$ su qualunque percorso $\gamma$ aperto all'interno del conduttore è nullo. Se ne deduce quindi che un conduttore è equipotenziale.
Preso inoltre un volume $V$ qualunque all'interno del conduttore delimitato da una superficie $S$, applicando il teorema di Gauss possiamo scrivere
$$ \Phi_{S}(\bar{E}) = \oint_{S} \!\bar{E} \cdot \hat{u}_{N}\, \d s =0 = \frac{Q}{\varepsilon_{r} \varepsilon_{0}} $$
Dove $Q$ è la carica netta all'interno del volume $V$. Se ne deduce quindi che $Q = 0$ ma cioè non significa che in $V$ non ci sia carica elettrica, ma che è nullo il bilancio tra cariche positive e cariche negative. Il ragionamento può essere esteso a superfici chiuse che giacciono all'interno del conduttore e che si estendano fino allo spessore di alcuni strati atomici dalla sua superficie. Nell'intorno della superficie del conduttore, infatti, le cariche sono sbilanciate per generare il campo elettrico necessario a rendere nullo all'interno del volume il campo elettrico complessivo.

Come si può generare e quali caratteristiche ha la [[corrente]] elettrica in un conduttore?

In un materiale conduttore che abbia come portatori gli elettroni, esiste una struttura reticolare periodica nello spazio, costituita dagli atomi del conduttore privati degli elettroni mobili che sono in grado di spostarsi a causa del legame metallico che li lega debolmente al nucleo. Esso genera un campo elettrico interno, a livello microscopico, che mette in moto disordinato gli elettroni. Questo movimento non genera però un flusso netto di corrente. Presa infatti una superficie di controllo $S$, in media nel tempo tanti elettroni la passano in un verso e altrettanti nel verso opposto e quindi si rileva, mediamente, un flusso netto nullo di carica attraverso $S$. Per avere corrente elettrica $I$ mediamente non nulla, bisogna applicare un campo elettrico al conduttore che generi un moto medio di deriva detto drift lungo la direzione del campo stesso. Gli elettroni dovrebbero subire un moto uniformemente accelerato visto che sono soggetti alla forza $\bar{F} = q\bar{E}$.
Muovendosi però gli elettroni urtano contro il reticolo e cedono energia, quindi l'effetto del campo $\bar{E}$ non sarà quello di produrre un moto uniformemente accelerato, come accadrebbe nel vuoto, ma di fare loro assumere una velocità di deriva costante che si sperimenta essere uguale a $\bar{v}_{drif} = -\mu \bar{E}$ con $\mu > 0$ **mobilità** delle cariche libere ($[\mu] = mCs^{-1}N^{-1}$). Questa relazione è valida per valori di $\bar{E}$ relativamente bassi, tipici dei componenti elettrici ed elettronici. Per valori elevati di $\bar{E}$ tipici dei componenti elettrici ed elettronici.
Per valori elevati di $\bar{E}$ intervengono altri effetti che rendono non più valido quanto detto

[[]]