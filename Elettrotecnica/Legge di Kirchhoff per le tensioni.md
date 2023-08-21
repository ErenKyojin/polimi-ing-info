---
aliases: KVL 
creation date: 2023-05-31 15:09
modification date: 2023-05-31 15:09
---

# Nel campo magnetico
La legge di Kirchhoff per le tensioni (KVL) afferma, in regime quasi stazionario, che:

>[!legge]
>Lungo una qualunque linea chiusa, la somma algebrica delle tensioni, prese con il segno opportuno in base al verso di percorrenza della linea, è nulla.

```tikz
\begin{document}
\begin{tikzpicture}[auto]

\node (A) at (0,2){A};
\node (B) at (-2,0){B};
\node (C) at (0,-2){C};
\node (D) at (2,0){D};

\draw (A) .. controls (-.5,.6) .. (B);
\draw (B) .. controls (-1,-1.2) .. (C);
\draw (C) .. controls (1,-1.4) .. (D);
\draw (D) .. controls (.7,.78) and (1.2,1.5) .. (A);
\path[-latex, thick, orange]
	(A) edge[bend right] node[midway,above=3mm]{$V_{BA}$} (B)
	(B) edge[bend right] node[midway,below=3mm]{$V_{CB}$} (C)
	(C) edge[bend right] node[midway,below=3mm]{$V_{DC}$} (D)
	(D) edge[bend right] node[midway,above=3mm]{$V_{AD}$} (A)
;
\end{tikzpicture}
\end{document}
```

A titolo di esempio, nella figura sopra riportata è rappresentata una linea chiusa $\gamma$ che immaginiamo di percorrere dal punto $A$ in senso antiorario, in una regione dello spazio in cui è presente un [[campo elettrico]] $\bar{E}$.
Dato che ipotizziamo di essere in regime quasi-stazionari, il [[Elettrotecnica/campo|campo]] $\bar{E}$ ammette un potenziale ed è conservativo. Spostandomi dal punto $A$ con l'idea di tornarci, posso immaginare di spezzare il percorso in tappe: da $A$ a $B$, da $B$ a $C$, da $C$ a $D$ e da $D$ in $A$, caratterizzate dalle [[tensione|tensioni]] $V_{BA} =, V_{CB}, V_{DC}$ e $V_{AD}$, rispettivamente. Posso dunque scrivere
$$ - \oint_{\gamma} \!\bar{E} \cdot \,\d \bar{l}=V_{BA} + V_{CB} + V_{DC} + V_{AD} = 0  $$
Dove le tensioni hanno tutte segno positivo in quanto orientate come il percorso, se invece di scegliere la tensione $V_{AB}$ avessimo scelto la tensione $V_{BA}$ avremmo dovuto scrivere $-V_{AB} + V_{CB} + V_{DC} + V_{AD} = 0$. Essendo $V_{AB}$ orientata nel senso opposto rispetto al percorso.

# Nella teoria dei circuiti

>[!legge] KVL-I
>dato un circuito che opera in regime stazionario con $n$ nodi e con grafo connesso. Assegnato un nodo come potenziale di riferimento $u_{0}$ e di conseguenza assegnamo ad ogni altro nodo i potenziali $u_{1},\dots,u_{n-1}$. Ad ogni istante di tempo la tensione tra il nodo $j$ ed il nodo $k$ è $u_{k} - u_{j}$.

>[!legge] KVL-II
>Dato un circuito che opera in regime, con $n$ nodi e con il grafo connesso, preso un percorso chiuso passante per $m$ nodi del grafo, la somma algebrica delle tensioni è nulla.
>
>Con somma algebrica delle tensioni intendiamo che 