---
aliases: 
creation date: 2023-05-31 16:49
modification date: 2023-05-31 16:49
---

```tikz
\begin{document}
\begin{tikzpicture}
\shade[ball color = gray] (0,0,0) circle  (3cm);
\draw[thick, white] (0,0,0) circle (3cm);
\draw[draw=white,fill = lightgray,rotate = 30] (2,0,0) circle (.4cm and .6cm);
\node[] (C) at (1.8,1,0){};
\draw[thick,red,-latex] (C.center) -- ++ (1.5,0) node[below]{j};
\draw[thick,red,-latex] (C.center) -- ++ (1.5,.5) node[above]{$u_N$};
\node[below left=.3cm] at (C){dS};
\node{q};
\node at (0,3.2,0){S};
\end{tikzpicture}
\end{document}
```

Consideriamo il volume qui sopra, delimitato dalla superficie $S$ e sia $q$ la [[carica]] netta che è presente all'interno di esso in un dato istante di tempo $t$. Possiamo immaginare che ci sia un [[flusso]] di cariche, attraverso $S$, che entrano nel volume e/o che ne fuoriescono. Queste cariche in moto definiscono un [[Elettrotecnica/campo|campo]] di densità di [[corrente]] $\bar{\jmath}$ e la corrente $I$ attraverso $S$ sarà pari a 
$$ I = \oint_{S} \! \bar{\jmath} \cdot \hat{u}_{N}\, \d S $$
La corrente $I$, in base alla definizione, esprime la variazione della carica $q$ rispetto al tempo ovvero $\displaystyle \oint_{S} \!\bar{\jmath} \cdot \hat{u}_{N}\, \d S = I = -\frac{dq}{dt}$. Per giustificare la presenza del segno negativo possiamo ragionare nel modo seguente. Ipotizziamo che la carica netta $q$ nel volume $V$ sia positiva. Qualora si rilevi una corrente $I > 0$ (presa con il verso uscente dal volume $V$) allora o della carica positiva sta uscendo attraverso $S$ oppure della carica negativa sta entrando. In entrambi i casi, la carica netta interna al volume $V$ sta diminuendo, cioè $\frac{dq}{dt}<0$. Si procederebbe con un ragionamento analogo qualora la corrente $I$ fosse negativa.

Utilizzando la [[legge di Gauss]] per il campo elettri  $q = \varepsilon_{0} \oint_{S} \!\bar{E} \cdot \hat{u}_{N} \,\d S$ e quindi il principio di conservazione della carica può essere formalizzato come:

$$ \oint_{S} \! \bar{\jmath} \cdot \hat{u}_{N}\, \d S + \varepsilon_{0} \frac{d}{dt}\oint_{S} \!\bar{E} \cdot \hat{u}_{N} \,\d S = 0  $$
Dove il campo elettrico $\bar{E}$ è quello sulla superficie $S$.