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

> [!esempio] Grafo non orientato
> 
> ```tikz
> \begin{document}
> \begin{tikzpicture}[every node/.style={circle, thick, draw=black,scale = 1.25},scale = 2]
> \node[circle] (a) at (0,1) {a};
> \node (b) at (0,-1) {b};
> \node (c) at (1.2,-.3) {c};
> \node (d) at (1.8,1) {d};
> \node (e) at (2,-.9) {e};
> \path   (a) edge (b)
> 		(a) edge (d)
> 		(a) edge (c)
> 		(b) edge (c)
> 		(d) edge (c)
> 		(e) edge (d)
> 		(e) edge (b);
> 
> \node[draw=none] at (4,.5){V = \{a,b,c,d,e\}};
> \node[draw=none] at (4,0){E=\{(b,a), (a,c), (b,c), (d,c), (e,d), (b,e)\}};
> \end{tikzpicture}
> \end{document}
> ```


>[!esempio] grafo orientato
> ```tikz
> \begin{document}
> \begin{tikzpicture}[every node/.style={circle, thick, draw=black,scale = 1.25},scale = 2]
> \node[circle] (a) at (0,1) {a};
> \node (b) at (0,-1) {b};
> \node (c) at (1.2,-.3) {c};
> \node (d) at (1.8,1) {d};
> \node (e) at (2,-.9) {e};
> \path[-latex]   (a) edge (b)
> 		(a) edge[bend right] (d)
> 		(d) edge[bend right] (a)
> 		(b) edge (e)
> 		(c) edge (e)
> 		(e) edge[loop below] (e)
> 		(e) edge (d);
> 
> \node[draw=none] at (4,.5){V = \{a,b,c,d,e\}};
> \node[draw=none] at (5,0){E=\{(a,b), (a,d), (d,a), (b,e), (c,e), (e,d),(e,e)\}};
> \end{tikzpicture}
> \end{document}
> ```

## Grafi in memoria
I grafi in memoria si possono descrivere in due modi:
### liste di adiacenza
 ```tikz
 \begin{document}
 \begin{tikzpicture}[every node/.style={circle, thick, draw=black,scale = 1.25},scale = 1.25]
 \node[circle] (a) at (0,1) {a};
 \node (b) at (0,-1) {b};
 \node (c) at (1.2,-.3) {c};
 \node (d) at (1.8,1) {d};
 \node (e) at (2,-.9) {e};
 \path[-latex]   (a) edge (b)
 		(a) edge[bend right] (d)
 		(d) edge[bend right] (a)
 		(b) edge (e)
 		(c) edge (e)
 		(e) edge[loop below] (e)
 		(e) edge (d);

 \end{tikzpicture}
 \qquad\qquad\qquad
 \begin{tikzpicture}
 [
 every node/.style={minimum size = 5mm},
 
 ]
 \node (a) at (0,0){a};
 \node (b) at (0,-.5){b};
 \node (c) at (0,-1){c};
 \node (d) at (0,-1.5){d};
 \node (e) at (0,-2){e};
 \node[draw, right of = a,] (l1) {};
 \node[draw, right of = b,] (l2) {};
 \node[draw, right of = c,] (l3) {};
 \node[draw, right of = d,] (l4) {};
 \node[draw, right of = e,] (l5) {};
 \draw[-latex] (l1.center) -- ++ (1,0) node[right,draw] (l12){b};
 \draw[-latex] (l2.center) -- ++ (1,0) node[right,draw] (l22){e};
 \draw[-latex] (l3.center) -- ++ (1,0) node[right,draw] (l32){e};
 \draw[-latex] (l4.center) -- ++ (1,0) node[right,draw] (l42){a};
 \draw[-latex] (l5.center) -- ++ (1,0) node[right,draw] (l52){e};
 \node[] {aa};
 \end{tikzpicture}
 \end{document}
 ```

### matrice di adiancenza