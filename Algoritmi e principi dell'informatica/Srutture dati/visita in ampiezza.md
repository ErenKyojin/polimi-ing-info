---
aliases: breadth-first search
creation date: 2023-05-22 14:15
modification date: 2023-05-22 14:15
---

>[!question] problema
>Input: Abbiamo in input un grafo $G$ ed un nodo $s$ sorgente di $G$.
>Output: vogliamo visitare tutti i nodi di $G$ che sono raggiungibili da $s$ (un nodo $u$ è raggiungibile da $s$ se c'è un cammino nel grafo che va da $s$ a $u$)


Sfruttiamo l'algoritmo di BFS (Breadth-First search), che ha come idea quella di visitare tutti i nodi a ditanza 1 da s, poi a distanza 2, poi a distanza 3 e cosi via.

Quando visitiamo un nodo $u$, teniamo traccia della sua distanza da s in un attributo $u$.*dist*. Mentre visitiamo i nodi li coloriamo (in modo da poter tracciare la progressione dell'algoritmo):
- **Nodo bianco** significa ancora da visitare
- **Nodo grigio** signifca già visitato ma non abbiamo visitato tutti i suoi adiacenti
- **Nodo nero** significa che abbiamo visitato tutti i suoi adiacenti.

Descriviamo quindi l'algoritmo:
- Tutti i nodi sono inizialmente bianchi tranne $s$ sorgente che è grigia.
- I nodi di cui dobbiamo ancora visitare gli adiacenti vengono messi in una [[Code|coda]] (quindi gestita FIFO e inizialmente contenente solo $s$)
- Ad ogni iterazione del ciclo eliminiamo dalla coda un elemento $u$ e ne visitiamo i nodi adiacentiche sono ancora bianchi (cioè che devono essere ancora visitati)
	- Se $u.$dist è la distanza del nodo $u$ da $s$, la distanza dei nodi bianchi adiacenti ad $u$ è $u.dist+1$

$G = [[1,2],[7,4],[7],[1],[3,5,6],[6],[4],[8,6],[2]]$
`BFS(G, 0)` distanze dal nodo 0

```tikz
\begin{document}
\begin{tikzpicture}[every node/.style={draw, circle},scale = 2]
\node (0) at (0,0){0};
\node (1) at (1,-.2){1};
\node (2) at (-.1,-1){2};
\node (3) at (2,0){3};
\node (4) at (2.2,-.8){4};
\node (5) at (3,-1.4){5};
\node (6) at (2.3,-1.6){6};
\node (7) at (1.2,-1.2){7};
\node (8) at (-.3,-2){8};

\path[-latex] 
	(0) edge (1)
	(0) edge (2)
	(1) edge (4)
	(1) edge (7)
	(2) edge (7)
	(3) edge (1)
	(4) edge (3)
	(4) edge (5)
	(4) edge (6)
	(5) edge (6)
	(6) edge (4)
	(7) edge (8)
	(7) edge (6)
	(8) edge (2)
;

\draw[red, smooth] (-.5,-.5) node[left]{d=0} to (.5,-.5) to (.5,.75);
\draw[purple] (-.5,-1.5) node[left]{d=1}to (.5,-1) to (1.5,-.6) to (1.7,1);
\draw[blue] (-1,-1.9) node[left]{d=2}to (1.25,-1.76) to (2.8, -0.95) to (3,0);
\node[pink] at (-.9,-2.3) {d= 3};
\end{tikzpicture}
\end{document}
```

## Pseudocodice
```
BFS(G,s)
	for each u inn G.v - {s}
		u.color := WHITE
		u.dist = infty
	s.color := GREY
	s.dist := 0
	Q := empty
	ENQUEUE(Q, s)
	while(Q != empty)
		u := DEQUEUE(Q)
		for each v inn u.Adj
			if v.color = WHITE
				v.color := GRAY
				v.dist := u.dist + 1
				ENQUEUE(Q, v)
	u.color := BLACK
```

Le linee 1-7 sono di inizializzazione e hanno complessità $O(|V|)$
Le linee 8-15 visitano i nodi, ogni nodo $G$ viene accodato e tolto dalla coda al massimo una volta, quindi ogni lato è visitabile al massimo una volta, quindi la complessità è $O(|E|)$

La complessità totale di BFS è 