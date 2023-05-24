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
\begin{tikzpicture}[every node/.style={scale = 1.25}, node distance = 5mm]

\node[draw](a) at (0,0)  {10};
\node[right of = a,draw] (b)  {5};
\node[right of = b,draw] (c) {2};
\node[right of = c,draw] (d) {3};
\node[right of = d,draw] (e) {4};
\node[above = 3mm] at (a) {1};
\node[above = 3mm] at (b) {2};
\node[above = 3mm] at (c) {3};
\node[above = 3mm] at (d) {4};
\node[above = 3mm] at (e) {5};

\path[-latex, ultra thick] 
	  (a) edge[bend right = 90] (b.south)
	  (a) edge[bend right = 90] (c.south)
	  (b) edge[bend left = 90] (d.north)
	  (b) edge[bend left = 90] (e.north)
	  ;

\end{tikzpicture}
\end{document}
```

## 1
Date le chiavi 3, 5, 2, 7, 9, 1, 4, 6, 8, 10
```tikz
\begin{document}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style = {sibling distance = 1.5cm},
level 2/.style = {sibling distance = .75cm},
level 3/.style = {sibling distance = .5cm}

]

\node (3) {3}
	child{node (5) {5}}
	child[missing]
	;
\draw[-latex,] (5) to[bend left] (3);
\draw[-latex,ultra thick] (1,-1.5) -- ++ (1,0);
\end{tikzpicture}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style = {sibling distance = 1.5cm},
level 2/.style = {sibling distance = .75cm},
level 3/.style = {sibling distance = .5cm}

]

\node {5}
	child{node{3}}
	child[missing]
	;
\draw[-latex,ultra thick] (1,-1.5) -- ++ (1,0);
\end{tikzpicture}

\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style = {sibling distance = 1.5cm},
level 2/.style = {sibling distance = .75cm},
level 3/.style = {sibling distance = .5cm}

]

\node {5}
	child{node{3}}
	child{node{2}}
	;
\draw[-latex,ultra thick] (1,-1.5) -- ++ (1,0);
\end{tikzpicture}

\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style = {sibling distance = 1.5cm},
level 2/.style = {sibling distance = .75cm},
level 3/.style = {sibling distance = .5cm}

]

\node (5) {5}
	child{node(3){3}
	 child{node (7){7}}
	 child[missing]
	 }
	child{node{2}}
	;
\draw[-latex] (7) to[bend left] (3);
\draw[-latex] (3) to[bend left] (5);
\draw[-latex,ultra thick] (1,-1.5) -- ++ (1,0);
\end{tikzpicture}

\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style = {sibling distance = 1.5cm},
level 2/.style = {sibling distance = .75cm},
level 3/.style = {sibling distance = .5cm}

]

\node (7) {7}
	child{node(5){5}
	 child{node (3){3}}
	 child[missing]
	 }
	child{node{2}}
	;
\draw[-latex,ultra thick] (1,-1.5) -- ++ (1,0);
\end{tikzpicture}

\end{document}
```

```tikz
\begin{document}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style = {sibling distance = 1.5cm},
level 2/.style = {sibling distance = .75cm},
level 3/.style = {sibling distance = .5cm}

]

\node (7) {7}
	child{node(5){5}
	 child{node (3){3}}
	 child{node (9){9}}
	 }
	child{node{2}}
	;

\path[-latex,thick]
	(9) edge[bend right] (5)
	(5) edge[bend right] (7);
\draw[-latex,ultra thick] (1,-1.5) -- ++ (1,0);

\end{tikzpicture}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style = {sibling distance = 1.5cm},
level 2/.style = {sibling distance = .75cm},
level 3/.style = {sibling distance = .5cm}

]

\node (9) {9}
	child{node(7){7}
	 child{node (3){3}}
	 child{node (5){5}}
	 }
	child{node{2}}
	;

\draw[-latex,dashed, thick] (1,-1.5) -- ++ (1,0);

\end{tikzpicture}

\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style = {sibling distance = 1.5cm},
level 2/.style = {sibling distance = .75cm},
level 3/.style = {sibling distance = .5cm}

]

\node (9) {9}
	child{node(7){7}
	 child{node (3){3}}
	 child{node (5){5}}
	 }
	child{node(2){2}
	 child{node (1){1}}
	 child{node (4){4}}
	}
	;

\path[-latex,thick]
	(4) edge[bend right] (2);
\draw[-latex,ultra thick] (1,-1.5) -- ++ (1,0);

\end{tikzpicture}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style = {sibling distance = 1.5cm},
level 2/.style = {sibling distance = .75cm},
level 3/.style = {sibling distance = .5cm}

]

\node (9) {9}
	child{node(7){7}
	 child{node (3){3}}
	 child{node (5){5}}
	 }
	child{node(4){4}
	 child{node (1){1}}
	 child{node (2){2}}
	}
	;


\draw[-latex,ultra thick] (1,-1.5) -- ++ (1,0);

\end{tikzpicture}
\end{document}
```

```tikz
\begin{document}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style = {sibling distance = 1.5cm},
level 2/.style = {sibling distance = .75cm},
level 3/.style = {sibling distance = .5cm}

]

\node (9) {9}
	child{node(7){7}
	 child{node (3){3}
	  child{node(6){6}}
	  child[missing]
	  }
	 child{node (5){5}}
	 }
	child{node(4){4}
	 child{node (1){1}}
	 child{node (2){2}}
	}
	;


\draw[-latex,ultra thick] (1,-1.5) -- ++ (1,0);
\path[-latex,thick] (6) edge[bend left] (3);

\end{tikzpicture}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style = {sibling distance = 1.5cm},
level 2/.style = {sibling distance = .75cm},
level 3/.style = {sibling distance = .5cm}

]

\node (9) {9}
	child{node(7){7}
	 child{node (6){6}
	  child{node(3){3}}
	  child[missing]
	  }
	 child{node (5){5}}
	 }
	child{node(4){4}
	 child{node (1){1}}
	 child{node (2){2}}
	}
	;


\draw[-latex,ultra thick] (1,-1.5) -- ++ (1,0);

\end{tikzpicture}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style = {sibling distance = 1.5cm},
level 2/.style = {sibling distance = .75cm},
level 3/.style = {sibling distance = .5cm}

]

\node (9) {9}
	child{node(7){7}
	 child{node (6){6}
	  child{node(3){3}}
	  child[missing]
	  }
	 child{node (5){5}}
	 }
	child{node(4){4}
	 child{node (1){1}}
	 child{node (2){2}}
	}
	;


\draw[-latex,ultra thick] (1,-1.5) -- ++ (1,0);

\end{tikzpicture}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style = {sibling distance = 1.5cm},
level 2/.style = {sibling distance = .75cm},
level 3/.style = {sibling distance = .5cm}

]

\node (9) {9}
	child{node(7){7}
	 child{node (6){6}
	  child{node(3){3}}
	  child{node(8){8}}
	  }
	 child{node (5){5}}
	 }
	child{node(4){4}
	 child{node (1){1}}
	 child{node (2){2}}
	}
	;


\draw[-latex,ultra thick] (1,-1.5) -- ++ (1,0);
\path[-latex,thick] (8) edge[bend right] (6)
 (6) edge[bend left] (7);

\end{tikzpicture}
\end{document}
```

```tikz
\begin{document}
\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style = {sibling distance = 2.5cm},
level 2/.style = {sibling distance = 1.5cm},
level 3/.style = {sibling distance = .75cm}

]

\node (9) {9}
	child{node(8){8}
	 child{node (7){7}
	  child{node(3){3}}
	  child{node(6){6}}
	  }
	 child{node (5){5}
	  child{node (10){10}}
	  child[missing]
	  }
	 }
	child{node(4){4}
	 child{node (1){1}}
	 child{node (2){2}}
	}
	;


\draw[-latex,ultra thick] (2,-1.5) -- ++ (1,0);
\path[-latex,thick] 
	(10) edge[bend right] (5)
	(5) edge[bend right] (8)
	(8) edge[bend left] (9)
	;
\end{tikzpicture}

\begin{tikzpicture}
[
every node/.style={draw},
level 1/.style = {sibling distance = 2.5cm},
level 2/.style = {sibling distance = 1.5cm},
level 3/.style = {sibling distance = .75cm}

]

\node (10) {10}
	child{node(9){9}
	 child{node (7){7}
	  child{node(3){3}}
	  child{node(6){6}}
	  }
	 child{node (8){8}
	  child{node (5){5}}
	  child[missing]
	  }
	 }
	child{node(4){4}
	 child{node (1){1}}
	 child{node (2){2}}
	}
	;



\end{tikzpicture}
\end{document}
```

in estrazione 10, 9, 8, 7, 6, 5, 4, 3, 2 , 1
Questo è un [[Heapsort]] "step by step"

# Tabelle hash
To hash signfica sminuzzare/tritare, vogliamo sminuzzare i dati per trarne qualche tipo di "essenza".

>[!esempio]
>Ho un database di foto di 1Mb, devo essere pronto ad avere $2^{1'000'000}$ foto diverse? No, la stragrande maggioranza saranno foto "inutili", rumore bianco o foto senza senso. 

Costruiamo un array con elementi teste di liste che indicano elementi puntati dalla stessa hash.
Fattore di carico = percentuale di tabella occupata in ogni momenti, se ci metto le chiavi è 1. Se ci metto delle liste il fattore di carico aumenta.

## 1.
Tabella con $m=11$ slot (celle) e chiavi $\{ 35, 83, 57, 26, 15, 63, 97, 46 \}$
e $h(x) = x \mod 11$

```tikz
\usetikzlibrary{chains}
\begin{document}
\begin{tikzpicture}
[
start chain = 1 going right,
start chain = 2 going right,
node distance = 5mm,
]

\node[on chain = 1,draw] (0) at(0,-0.5) {};
\node[on chain = 1,draw] (1) {};
\node[on chain = 1,draw] (2) {35};
\node[on chain = 1,draw] (3) {57};
\node[on chain = 1,draw] (4) {26};
\node[on chain = 1,draw] (5) {15};
\node[on chain = 1,draw] (6) {83};
\node[on chain = 1,draw] (7) {46};
\node[on chain = 1,draw] (8) {63};
\node[on chain = 1,draw] (9) {97};
\node[on chain = 1,draw] (10) {};

\foreach \x in {0,...,10}
	\node[above = 5mm] at (\x) {\x};
\end{tikzpicture}
\end{document}
```
proviamo a metterlo nel risultato corrispondente, altrimenti nel primo libero a destra, ma la ricerca poi diventa tediosa.
$h(35) = h(57) = h(46) =2$
$h(15) = h(26) = 4$
$h(63)= 8$
$h(83)=6$
$h(97)=9$

#### Strategia ispezione lineare
Rimozione: cerco 90, h(90) = 2, cancello 35, cerco 57.

L'ispezione lineare è a rischio di cluster, ma basta ingrandire la tabella. Anche perchè la memoria è un blocco unico, quindi può guadagnare molto in termini di accessi alla memoria (se il blocco è caricato in cache è piú rapido)

#### Ispezione quadratica

```tikz
\usetikzlibrary{chains}
\begin{document}
\begin{tikzpicture}[start chain = 1 going right, node distance = 5mm]

\node[on chain = 1,draw] (0) at(0,-0.5) {46};
\node[on chain = 1,draw] (1) {};
\node[on chain = 1,draw] (2) {35};
\node[on chain = 1,draw] (3) {57};
\node[on chain = 1,draw] (4) {26};
\node[on chain = 1,draw] (5) {15};
\node[on chain = 1,draw] (6) {83};
\node[on chain = 1,draw] (7) {};
\node[on chain = 1,draw] (8) {63};
\node[on chain = 1,draw] (9) {97};
\node[on chain = 1,draw] (10) {};

\foreach \x in {0,...,10}
	\node[above = 5mm] at (\x) {\x};
\end{tikzpicture}
\end{document}
```
#### Doppio Hash
L'ispezione lineare è sempre a passo costante, +1 cella ad ogni ispezione
L'ispezione quadratica ha passi diversi, +1, +3, +5, +7...
L'ispezione con doppio hash ha passo costante per ogni chiave

$$h_{1}(x)=(x \mod 10) + 1$$

35 va al suo posto
83 va al suo posto
57 occupato, va indietro di 3
26 diretto
15 occupato, poi occupato, poi trova il posto
63, 57 diretti.
46 non va direttamente dove è andato il 57, va avanti di 7 (o indietro di 4)

$h_{1}(57)=8$
$h_{1}(15)=6$
$h_{1}(46)=7$

Sono distribuiti nel modo piú bilanciato possibile.

```tikz
\usetikzlibrary{chains}
\begin{document}
\begin{tikzpicture}[start chain = 1 going right, node distance = 5mm]

\node[on chain = 1,draw] (0) at(0,-0.5) {};
\node[on chain = 1,draw] (1) {46};
\node[on chain = 1,draw] (2) {35};
\node[on chain = 1,draw] (3) {};
\node[on chain = 1,draw] (4) {26};
\node[on chain = 1,draw] (5) {15};
\node[on chain = 1,draw] (6) {83};
\node[on chain = 1,draw] (7) {};
\node[on chain = 1,draw] (8) {63};
\node[on chain = 1,draw] (9) {97};
\node[on chain = 1,draw] (10) {57};

\foreach \x in {0,...,10}
	\node[above = 5mm] at (\x) {\x};
\end{tikzpicture}
\end{document}
```

## hash con lista
Ogni hash contiene la lista dei valori con lo stesso $\mod 11$, la lista è inserita a partire dalla testa, ogni lista è circa il fattore di carico, si può anche far puntare ogni puntatore alla radice di un albero rosso e nero.

## heap come array
```tikz
\begin{document}
\begin{tikzpicture}

[
level 1/.style={sibling distance = 2cm},
level 2/.style={sibling distance = 1cm},
level 3/.style={sibling distance = .75cm}


]

\begin{scope}[every node/.style={draw}]
\node (1){1}
	child{node(2){2}
	 child{node(4){12}
	  child{node(8){1}}
	  child{node(9){11}}
	  }
	 child{node(5){10}}
	 }
	child{node(3){19}
	 child{node(6){5}}
	 child{node(7){9}}
	}
;

\end{scope}
\begin{scope}[every node/.style={above right=2mm}, scale = .5]
\node at (1){1};
\node at (2){2};
\node at (3){3};
\node at (4){4};
\node at (5){5};
\node at (6){6};
\node at (7){7};
\node at (8){8};
\node at (9){9};

\end{scope}
\end{tikzpicture}
\end{document}
```
## 2 
Input: A array di $n$ elementi interi
Output: "si" se A è un heap, "no" altrimenti

```
isHeap(A, r, i)
	se 2i > n
		return TRUE
	altrimenti se A[i] >= A[2i] && (2i + 1 => A[i] >= A[2i + 1]) && isHeap(A,n,2i) && isHeap(A,n,2i+1)
		return TRUE
	return FALSE
```

La complessità è $n$, passiamo una volta per ogni nodo

Se vogliamo fare la versione iterativa piuttosto che la ricorsiva:

```
for(i = 1, 2i <= n, i++)
	se A[2i] > A[i] return false
	altrimenti ((se 2i + 1 >= n) e (A[2i + 1] > A[i])) return false
	
```

>[!oss]
>mergesort mantiene l'ordinamento degli elementi ripetuti, heap e quicksort invece no.

## 3
Dato un albero binario T con $n$ nodi e profondità $p$ e due nodi $u$ e $v$ che assumo presenti in $p$ trovare il minimo antenato comune, cioè il nodo più lontano dalla radice di cui $u$ e $v$ sono discendenti.
trovare $u$ e $v$:
	faccio una visita completa e mi segno livello in cui trovo u e v
Risalgo dal più basso


Alternativamente posso salvare il percorso: v = lll (left left left)
Il percorso di u è rl (right left)
controllo quando divergono, in questo caso inizialmente, stringa vuota quindi il nodo in cui divergono è la radice

il confronto è $O(p)$, mentre la visita è $O(n)$, siamo sicuri che $P \leq n \implies O(n)$

## 4
Dato un array $A$ di $n$ elementi costruire un albero binario quasi completo con gli stessi elementi
```
crea-albero(A, n)
	crea un albero T vuoto
	T.root = crea-sottoalberO(A, n, 1, T.root)
	return T
```

```
crea-sottoalbero(A, n, i, p)
	se i <= n
		crea un nuovo nodo x
		x.key = A[i]
		x.p = p
		x.left = crea-sottoalbero(A, n, 2i)
		x.right = crea-sottoalbero(A,n 2i+1)
		return x
```

## BST
```tikz
\begin{document}
\begin{tikzpicture}
[
level 1/.style={sibling distance = 2cm},
level 2/.style={sibling distance = 1cm},
level 3/.style={sibling distance = .75cm},
every node/.style={draw}
]
\node{8}
	child{node{4}
	 child{node{2}
	  child{node{1}}
	  child[missing]
	 }
	 child{node{6}}
	}
	child{node{13}
	 child{node{10}
	  child{node{9}}
	  child{node{12}
	    child{node{11}}
	    child[missing]
	   }
	 }
	 child{node{15}
	  child[missing]
	  child{node{16}}
	 }
	}
;
\end{tikzpicture}
\end{document}
```

cerco 8, parto dalla radice trovato
cerco 16, parto da 8, 16 è > quindi è a destra
 trovo 13, 16 > quindi è a destra
 trovo 15, 16 > quindi è a destra
 trovo 16

Complessità? $O(n)$, come è possibile? Perché dipende dal bilanciamento dell'albero:

```tikz
\begin{document}
\begin{tikzpicture}[level distance = 2mm, every node/.style={draw}]
\node{1}
 child[missing]
 child{node{2}
  child[missing]
  child{node{3}
   child[missing]
   child{node{4}
    child[missing]
    child{node{5}
     child[missing]
     child{node{6}
      child[missing]
      child{node{7}
       child[missing]
       child{node{8}
        child[missing]
        child{node{9}
         child[missing]
         child{node{10}}
        }
       }
      }
     }
    }
   }
  }
 }
;
\end{tikzpicture}
\end{document}
```
trovare 10 in questo albero richiede 10 passaggi.

Inoltre ricordiamo che il BST si conserva con aggiunte, cioè che non si conserva ne con aggiunte ne con aggiunte e rimozioni consecutive è il bilanciamento del BST.

## 5
Dato un array di $n$ elementi interi costruire un BST il più bilanciato possibile con le chiavi in $A$.

$A = [1,2,3,4,5]$

Proviamo semplicemente inserendo gli elementi di A in ordine.
```tikz
\begin{document}
\begin{tikzpicture}
\node {1}
	child[missing]
	child{node{2}
	 child[missing]
	 child{node{3}
	  child[missing]
	  child{node{4}
	   child[missing]
	   child{node{5}}
	  }
	 }
	}
;
\end{tikzpicture}
\end{document}
```
No, chiaramente avere A ordinato non sembra essere conveniente, tuttavia insistiamo. proviamo a utilizzare l'elemento al centro di $A$ ordinato

```
CREATE-BALANCED-BST(A, n)
	crea BST vuoto T
	ordina A
	T.root = CREATE-SUB-BALANCED-BST(A, n, 1)
	return T
```

```
CREATE-SUB-BALANCED-BST(A, i, j)
	se i = j
	n = (1 + j)/2
	crea un nuovo nodo x
	x.key = A[n]
	x.left = CREATE-SUB-BALANCED-BST(A, i, n-1)
	x.right = CREATE-SUB-BALANCED-BST(A, n+1, j)
	return x
```

## 6

## 7
Dati due BST $T_{1}$ e $T_{2}$ bilanciati costruire $T$ BST bilanciato che contiene tutte le chiavi (anche ripetute) di $T_{1}$ e $T_{2}$ ($|T_{1}| =n, |T_{2}| = m$).

Approccio naive, leggo $T_{1}$ e metto in un array, aggiungo $T_{2}$ nell'array, ordino l'array e faccio un albero bilanciato:
Otteniamo una complessità = $O(n + m + (n+m)\log(n + m) + n + m) = O(n + m) \log(n + m)$
Posso sfruttare il fatto di aver già ordinato le chiavi in anticipo di $T_{1}$ e $T_{2}$, quindi posso eliminare il fattore logaritmico?

```tikz
\begin{document}
\begin{tikzpicture}
[
level 1/.style={sibling distance = 2.5 cm},
level 2/.style={sibling distance = 1.25 cm},
level 3/.style={sibling distance = .75cm}
]
\node {20}
	child{node{12}
	 child{node{7}
	  child{node{5}}
	  child{node{8}}
	 }
	 child{node{9}}
	 }
	child{node{27}
	 child{node{22}
	  child{node{21}}
	  child{node{23}}
	 }
	 child{node{31}
	  child{node{29}}
	  child{node{40}}
	 }
	}
;
\end{tikzpicture}
\end{document}
```
Visito $T_{1}$ costruendo un array $A_{1}$ ordinato in ordine crescente visitando risalendo da in basso a sinistra.
Visito $T_{2}$ costruendo un array $A_{2}$ ordinato in ordine crescente.
Fondo $A_{1}$ e $A_{2}$ confrontando i primi elementi tra di loro (non "mischiandoli" e poi ordinandoli). 

$O(n + m + (n + m)\log(n + m)+n + m) = O(n + m)$
Funziona anche per aggiungere un solo elemento? Per funzionare funziona, ma impieghi ugualmente ricostruire l'albero da capo. Motivo per cui i BST sono buoni per archivi quasi statici o statici, avere tanti inserimenti o rimozioni non conviene.

## Albero rosso-nero
È un BST con un ulteriore attributo: colore:

```tikz
\begin{document}
\begin{tikzpicture}
[
level 1/.style={sibling distance = 4cm},
level 2/.style={sibling distance = 2cm},
level 3/.style={sibling distance = 1cm},
level 4/.style={sibling distance = 5mm},
every node/.style={draw}
]
\node{26}
	child{node{17}
	 child{node[fill=red]{14}
	  child{node{10}
	   child{node{}}
	   child{node{}}
	   }
	  child{node{16}
	   child{node{}}
	   child{node{}}
	  }
	 }
	 child{node{21}
	  child{node[fill = red]{18}
	   child{node{}}
	   child{node{}}
	  }
	  child{node{}}
	 }
	}
	child{node{41}
	 child{node[fill=red]{30}
	  child{node{28}
	   child{node{}}
	   child{node{}}
	  }
	  child{node{33}
	   child{node{}}
	   child{node{}}
	  }
	 }
	 child{node{47}
	  child{node{}}
	  child{node{}}
	 }
	}
;
\end{tikzpicture}
\end{document}
```

Si può arrivare a questo albero rosso-nero dal BST senza colori seguendo le regole di definizione, questo non vale per ogni BST.
```tikz
\begin{document}
\begin{tikzpicture}
[
every node/.style={draw}
]
\node{1}
	child{node{}}
	child{node[fill = red]{2}
	 child{node{}}
	 child{node[fill = red]{3}
	  child{node{}}
	  child{node[fill = red]{4}
	   child{node{}}
	   child{node{}}
	  }
	 }
	}
;
\end{tikzpicture}
\end{document}
```
Questo è l'unico modo per mantenere valide le regole sui nodi neri, ma abbiamo dei nodi rossi figli di altri nodi rossi, quindi non è un R

Il percorso da un lato non può essere lungo più del doppio del percorso dall'altro, quindi è meno bilanciato di un BST bilanciato perfettamente come visti in precedenza, ma è sufficiente per avere un altezza $O(\log n)$
