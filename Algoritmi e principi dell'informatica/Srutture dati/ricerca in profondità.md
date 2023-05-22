---
aliases: depth-first search, DFS
creation date: 2023-05-22 14:47
modification date: 2023-05-22 14:47
---

[[visita in ampiezza|BFS]] si basa sull'idea di visitare i nodi con una politica FIFO realizzata mediante una [[Code|coda]], come alternativa si può usare anche una politica LIFO che ci fornisce un [[algoritmo]] di visita in profondità (detto depth-first search o DFS).
In questo caso l'idea è che ogni volta che impiliamo un nodo in cima allo stack iniziamo a visitare i nodi adiacenti a quest'ultimo, mentre nel BFS visitavamo quello da più tempo in coda.
Per ottenere un algoritmo di DFS è sufficente cambiare ENQUEUE con PUSH e DEQUEUE con POP nell'algoritmo di BFS.

In realtà il DFS che vediamo risolve un problema leggermente diverso da BFS:

>[!question] Problema risolto da DFS
>input: grafo G
>output: visitare tutti i nodi di G
>(osserviamo che in BFS visitavamo solo i nodi raggiungibili da $s$)
>

DFS solitamente è usato come parte di un algoritmo più complesso, prima di vederlo però facciamo alcune considerazioni:

- Anche in DFS coloriamo i nodi
- Usiamo una politica LIFO, quindi una pila
- L'algoritmo DFS tiene traccia di quanto i nodi sono stati messi sullo stack e di quando sono tolti, attraverso una variabile globale time messa a 0 ad inizio algoritmo ed incrementata di 1 ogni aggiunta o rimozione di nodi dalla pila, inoltre sfruttiamo la variabile time anche per tenere traccia di:
	- Il tempo di inizio scoperta di un nodo, memorizzato in u.d
	- Il tempo di quando la scoperta termina, memorizzata in u.f


```
DFS(G)
	for each u inn G.V
		u.color := WHITE
	time := 0
	for each u inn G.V
		if u.color = WHITE
			DFS-VISIT(u)
```

```
DFS-VISIT(u)
	u.color := GRAY
	time := time + 1
	u.d := time
	for each v inn U.adj
		if v.color = WHITE
			DFS-VISIT(v)
	u.color := BLACK
	u.f := time := time + 1
```

Le prime tree righe di DFS colorano tutti i nodi di bianco e imposta il tempo a 0, con un esecuzione di $\Theta(|V|)$.
L'algoritmo DFS-VISIT è ripetuto fino a quando non ci sono più nodi da visitare
	- Come in BFS ogni nodo è messo sullo stack solo una volta
	- Quindi ogni lato è visitato esattament euna volta durante l'esecuzione del ciclo for delle linee 4-6 di DFS, quindi queste prendono tempo $\Theta(|E|)$
Anche la complessità di DFS, quindi, come quella di BFS è $\Theta(|V| + |E|)$

```tikz
\usepackage{xcolor}
\usetikzlibrary{animations}
\begin{document}
\begin{tikzpicture}[node distance = 2.5cm]
\tikz[animate = 
{

	0s = {
		1: ={
			:fill = "white",
			:text = "white"
		},		
		2: = {
			:fill = "white"
		},
		3: = {
			:fill = "white"	
		},
		4: = {
			:fill = "white"
		},
		5: = {
			:fill = "white",
			:text = "white"
		},
		6: = {
			:fill = "white"
		},
		7: = {
			:fill = "white"
		}
	},
	2s ={
		1: = 
		{
			:fill = "gray",
			:text = "red"
		},
		5: =
		{
			:fill = "white",
			:text = "white"
		}
	},
	4s = {
		5: =
		{
			:fill = "black",
			:text = "red"
		}
	},
	6s

}
];


\node[draw,text=red!90,text opacity = 1,fill = gray]  (0) at (0,0){1};
\node[below left of = 0,draw,fill = gray, text = red] (1) {2};
\node[right of = 0,draw,fill = white, text = red] (3) {};
\node[right of = 3,draw,fill = white, text = red] (2) {};
\node[below right of = 3,draw, fill = white, text = red] (4){};
\node[below right of = 1,draw,fill = white,text = red] (5) {3,4};
\node[right of = 5,draw, fill = white, text = red] (6){5,6};
\node[right of = 6,draw, fill = white, text = red] (7){};

\path[-latex]
	(0) edge (1)
	(0) edge (3)
	(0) edge (6)
	(1) edge (6)
	(1) edge (5)
	(3) edge (6)
	(3) edge (4)
	(2) edge (3)
	(2) edge (4)
	(2) edge (7)
	(4) edge (6)
	(5) edge (0)
	(6) edge (5)
	(7) edge (6)
	;
	
\end{tikzpicture}
\end{document}
```

\node[fill = green!50!black, text = white]   :rotate = { 1s = "0", 5s = "90", [begin](https://tikz.dev/base-animations#pgf.begin) = 2s, [end](https://tikz.dev/base-animations#pgf.end) = 4s }   {Click me};`

