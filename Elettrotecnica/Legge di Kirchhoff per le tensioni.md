---
aliases: KVL 
creation date: 2023-05-31 15:09
modification date: 2023-05-31 15:09
---
La legge di Kirchhoff per le tensioni (KVL) afferma, in regime quasi stazionario, che:

>[!legge]
>Lungo una qualunque linea chiusa, la somma algebrica delle tensioni, prese con il segno opportuno in base al verso di percorrenza della linea, è nulla.

```tikz
\begin{document}
\begin{tikzpicture}

\node (A) at (0,2){A};
\node (B) at (-2,0){B};
\node (C) at (0,-2){C};
\node (D) at (2,0){D};

\draw (A) .. controls (-.5,.6) .. (B);
\end{tikzpicture}
\end{document}
```

A titolo di esempio, nella figura sopra riportata è rappresentata una linea chiusa $\gamma$ che immaginiamo di percorrere dal punto $A$ in senso antiorario, in una regione dello spazio in cui è presente un [[campo elettrico]] $\bar{E}$.
Dato che ipotizziamo di essere in regime quasi-stazionari, il campo $\bar{E}$ ammette un potenziale ed è conservativo. Spostandomi dal punto $A$ con l'idea di tornarci, posso immaginare di spezzare il percorso in tappe: da $A$ a $B$, da $B$ a $C$, da $C$ a $D$ e da $D$ in $A$, caratterizzate dalle tensioni $V_{BA} =, V_{CB}, V_{DC}$ e $V_{AD}$, rispettivamente. Posso dunque scrivere
$$ - \oint_{\gamma} \!\bar{E} \cdot \,\d \bar{l}=V_{BA} + V_{CB} + V_{DC} + V_{AD} = 0  $$
Dove le tensioni hanno tutte segno positivo in quanto orientate come il percorso