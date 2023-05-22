---
aliases: grafi
creation date: 2023-05-22 12:55
modification date: 2023-05-22 12:55
---

> [!def]
> Un grafo è una coppia $G = (V, E)$ in cui:
> - $V$ è un insieme di nodi detti anche vertici
> - $E$ è un insieme di archi deti anche lati o edges
> 

Un arco è una connessione tra due vertici, e due vertici connessi da un arco sono detti adiacenti, se un arco $e$ connette 2 vertici $u$ e $v$ può essere rappresentato dalla coppia $(u,v)$ di vertici che connette, quindi $E \subseteq V^2$

$|V|$ è il numero di vertici nel grafo, mentre $|E|$ è il numero di archi, $0 \leq |E| \leq |V|^2$

Esistono 2 tipi di grafi:

## Grafi orientati e non orientati
- In un grafo non orientato, un arco $(u,v)$ è lo stesso di $(v,u)$, non c'è alcuna nozione di direzione da un nodo all'altro
- In un grafo orientato $(u,v)$ va dal nodo $u$ al nodo $v$ ed è diverso da $(v,u)$

```tikz
\begin{document}
\begin{tikzpicture}[every node/.style={circle, thick, draw=black,scale = 1.25}]
\node[circle] (a) at (0,1) {a};
\node (b) at (0,-1) {b};
\node (c) at (1.2,-.3) {c};
\node (d) at (1.8,1) {d};
\node (e) at (2,-.9) {e};
\path   (a) edge (b)
		(a) edge (c)
		(b) edge (c)
		(d) edge (c)
		(e) edge (d)
		(e) edge (b);
\end{tikzpicture}
\end{document}
```
