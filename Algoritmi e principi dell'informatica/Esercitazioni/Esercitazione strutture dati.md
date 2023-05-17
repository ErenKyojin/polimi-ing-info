---
aliases: 
creation date: 2023-05-17 15:19
modification date: 2023-05-17 15:19
---

## heap
Strutture ad albero quasi pieno
```tikz
\begin{document}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style={sibling distance = 1.5cm},
level 2/.style={sibling distance = 1cm}

]
\node {}
	child {node{}
	 child{node{}}
	 child{node{}}
	 }
	child {node{}
	 child{node{}}
	 child[missing]
	};
\end{tikzpicture}
\end{document}
```
due tipi di heap:
- min-heap  ""
- max-heap: la chiave contenuta nella radice di qualsiasi sottoalbero è maggiore di tutti i propri rami



```tikz
\begin{document}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style={sibling distance = 1.5cm},
level 2/.style={sibling distance = 1cm}

]
\node {9}
	child {node{5}
	 child{node{3}}
	 child{node{4}}
	 }
	child {node{2}
	 child{node{1}}
	 child[missing]
	};
\end{tikzpicture}
\end{document}
```
Non c'è ordinamento tra i figli

Proprietà:
- chiave massima sempre in cima
- altezza $\approx$ $\log_{2}(n)$

### Rimozione del max: 
- accediamo alla radice (già max) `H.root`
- cancella il contenuto
  ```tikz
\begin{document}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style={sibling distance = 1.5cm},
level 2/.style={sibling distance = 1cm}

]
\node {}
	child {node{5}
	 child{node{3}}
	 child{node{4}}
	 }
	child {node{2}
	 child{node{1}}
	 child[missing]
	};
\end{tikzpicture}
\end{document}
```
- $h$ non è piú una heap (ogni nodo deve contenere una chiave)
- Accedo quindi al nodo piú in basso a destra (costo $\log_{2}(n)$)
    ```tikz
\begin{document}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style={sibling distance = 1.5cm},
level 2/.style={sibling distance = 1cm}

]
\node {}
	child {node{5}
	 child{node{3}}
	 child{node{4}}
	 }
	child {node{2}
	 child{node[fill = red]{1}}
	 child[missing]
	};
\end{tikzpicture}
\end{document}
```
- Copio il contenuto di questo nodo in cima
    ```tikz
\begin{document}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style={sibling distance = 1.5cm},
level 2/.style={sibling distance = 1cm}

]
\node {1}
	child {node{5}
	 child{node{3}}
	 child{node{4}}
	 }
	child {node{2}};
\end{tikzpicture}
\end{document}
```
	Non abbiamo piú una heap ma la struttura è corretta.
- Ripristino la heap
	- Parti dalla radice, guarda i due figli, scambia se un figlio è minore
	- ripeti ricrosivamente
```tikz
\begin{document}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style={sibling distance = 1.5cm},
level 2/.style={sibling distance = 1cm}

]
\node[fill = green, fill opacity = .4] {5}
	child {node[fill=green, fill opacity = .4]{1}
	 child{node{3}}
	 child{node{4}}
	 }
	child {node{2}
	};
\end{tikzpicture}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style={sibling distance = 1.5cm},
level 2/.style={sibling distance = 1cm}

]
\node {5}
	child {node[fill=green, fill opacity = .4]{4}
	 child{node{3}}
	 child{node[fill=green, fill opacity = .4]{1}}
	 }
	child {node{2}
	};
\end{tikzpicture}
\end{document}
```

### Aggiunta di un valore
Partendo da in basso a sinistra e salendo verso destra mettiamo il valore nel nuovo posto disponibile
```tikz
\begin{document}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style={sibling distance = 1.5cm},
level 2/.style={sibling distance = 1cm}

]
\node {5}
	child {node{4}
	 child{node{3}}
	 child[missing]
	 }
	child {node{2}
	};
\end{tikzpicture}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style={sibling distance = 1.5cm},
level 2/.style={sibling distance = 1cm}

]
\node {5}
	child {node{4}
	 child{node{3}}
	 child{node{10}}
	 }
	child {node{2}
	};
\end{tikzpicture}
\end{document}
```

```tikz
\begin{document}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style={sibling distance = 1.5cm},
level 2/.style={sibling distance = 1cm}

]
\node {5}
	child {node{10}
	 child{node{3}}
	 child{node{4}}
	 }
	child {node{2}
	};
\end{tikzpicture}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style={sibling distance = 1.5cm},
level 2/.style={sibling distance = 1cm}

]
\node {10}
	child {node{5}
	 child{node{3}}
	 child{node{4}}
	 }
	child {node{2}
	};
\end{tikzpicture}
\end{document}
```

### raprpesentazione ad array

```tikz
\begin{document}
\begin{tikzpicture}[every node/.style={scale}]
\node (1){10};
\node[left] at (1){5};

\end{tikzpicture}
\end{document}
```
