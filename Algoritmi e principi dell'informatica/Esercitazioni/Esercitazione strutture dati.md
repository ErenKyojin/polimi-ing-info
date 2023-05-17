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

Rimozione del max: 
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
- Accedo quindi al nodo piú in basso a sinistra
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