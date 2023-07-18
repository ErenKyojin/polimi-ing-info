---
aliases: red-black tree, alberi rosso-neri, alberi RB, RBT
creation date: 2023-05-16 12:03
modification date: 2023-05-16 12:03
---

Gli [[alberi]] rosso-neri (RB) sono BST abbastanza bilanciati, cioè l'altezza dell'albero $h = O(\log(n))$ ed è possibile realizzare tute le operazioni più importanti in tempo $O(\log(n))$.
Negli alberi RB non si ha mai che un ramo dell'albero sia lungo più del doppio di un altro ramo. L'idea alla baste degli alberi RB: ogni nodo ha un colore, o rosso o nero, ed i colori sono distribuiti affinché l'albero non sia lungo più del doppio di un altro.


Ogni nodo di un albero RB ha 5 attributi:
- key
- left
- right
- p
- color

> [!danger] attenzione
> In questo caso le foglie sono tutti i nodi NIL alla base! Fino ad ora consideravamo foglie i nodi con solo elementi NIL. Questo significa che i NIL sono inclusi nell'albero.


1. Ogni nodo è o rosso o nero
2. La radice è nera
3. Le foglie NIL sono tutte nere
4. I figli di un nodo rosso sono entrambi neri
5. Per ogni nodo $x$ tutti i cammini da $x$ alle foglie sue discendenti contengono lo stesso numero $bh(x)$ di nodi neri
	- $bh(x)$ è l'**altezza nera** del nodo x
	- Il nodo x non è contato in $bh(x)$ anche se nero.


```tikz
\begin{document}
\begin{tikzpicture}
[
level 1/.style={sibling distance = 4cm},
level 2/.style={sibling distance = 2cm},
level 3/.style={sibling distance = 1cm}
]
\node {5}
	child {node {3}
	 child{node {2}
	  child{node{NIL}}
	  child{node{NIL}}}
	 child{node {5}
	 child{node{NIL}}
	 child{node{NIL}}}}
	child {node {7}
	 child {node{7}
	  child{node{NIL}}
	  child{node{NIL}}}
	 child {node{8}
	 child {node{NIL}}
	 child {node{NIL}}}};
\end{tikzpicture}
\end{document}
```

Proviamo sempre a inserire un nodo rosso.

## Proprietà
- Un albero rosso-nero con $n$ nodi interni (n nodi con chiavi, per laconvenzione usata) ha altezza $h \leq 2\log_{2}(n+1)$ 
	- Il numero di nodi interni di un sottoalbero con radice $x$ è  $\geq 2^{bh(x)}-1$, si dimostra per induzione sull'altezza di $x$
	- Almeno metà dei nodi della radice $x$ ad una foglia sono neri, quindi $bh(x) \geq h / 2$ e da cui discende che $h \leq 2 \log_{2}(n+1)$
Come conseguenza di questa proprietà tutte le [[funzioni]] (eccetto insert e delete) dei [[alberi binari di ricerca|BST]] sono valide ma hanno un efficienza migliore rispetto ad un BST.

Per implementare invece insert e delete introduciame le [[rotazioni]].

## Inserimento
Estremamente simile all'inserimento di prima ma con un [[algoritmo]] per mantenere il bilanciamento detto algoritmo di fixup

```
RB-INSERT(T, z)
	y := T.nil  // y padre del nodo considerato
	x := T.root // nodo considerato
	while x != T.nil
		y := x
		if z.key < x.key
			x := x.left
		else x := x.right
	z.p := y
	if y = T.nil
		T.root := z //L'albero T è vuoto
	elseif z.key < y.key
		y.left := z
	else y.right := z
	z.left := T.nil
	z.right := T.nil
	z.color := RED //proviamo ad inserirlo rosso, nero sicuramente sbilancia
	RB-INSERT-FIXUP(T, z) //fixiamo l'albero se non doveva essere rosso
```

Solito $O(h)$.

```
RB-INSERT-FIXUP(T, z)
	if z = T.root
		T.root.color = BLACK
	else padre := z.p                          //Quindi x è il padre di z
		if padre.color = RED 
			if padre = padre.p.left         //x è figlio sinistro 
				y := x.p.right             //(1) y è zio (destro)
				if y.color = RED
					x.color := BLACK       //CASO 1
					y.color := BLACK       //CASO 1
					x.p.color := RED       //CASO 1
					RB-INSERT-FIXUP(T,x.p) //CASO 1
				else if z = x.right
					z := x                 //CASO 2
					LEFT-ROTATE(T, z)      //CASO 2
					x := z.p               //CASO 2
				x.color := BLACK           //CASO 3
				x.p.color := RED           //CASO 3
				RIGHT-ROTATE(T, x.p)       //CASO 3
			else (Come a partire da (1) invertendo 'right' e 'left')
				...
```
È invocato sempre su un nodo z tale che `z.color = RED`, ed ha 3 casi piú 3 speculari.
### Caso 1, y rosso
```tikz
\begin{document}
\begin{tikzpicture}[]
\node[draw] (R) {7}
	child{node (X) [fill = red, fill opacity = 0.5, draw]{5} 
	 child{node (Z)[fill = red, fill opacity = 0.5, draw]{3}}
	 child[missing]}
	child{node (Y)[fill = red, fill opacity = 0.5, draw]{9}};
\node[left = 2.5mm] at (X) {x};
\node[left = 2.5mm] at (Z) {z};
\node[right = 2.5mm] at (Y){y};
\node[left = 2.5mm] at (R){x.p};
\draw[-latex,ultra thick] (1,-1) -- ++ (2,0);
\end{tikzpicture}
\begin{tikzpicture}[]
\node[draw, fill = red, fill opacity = 0.5] (R) {7}
	child{node (X) [draw]{5} 
	 child{node (Z)[fill = red, fill opacity = 0.5, draw]{3}}
	 child[missing]}
	child{node (Y)[draw]{9}};
\node[left = 2.5mm] at (X) {x};
\node[left = 2.5mm] at (Z) {z};
\node[right = 2.5mm] at (Y){y};
\node[left = 2.5mm] at (R){x.p};
\end{tikzpicture}
\end{document}
```

```tikz
\begin{document}
\begin{tikzpicture}[]
\node[draw] (R) {7}
	child{node (X) [fill = red, fill opacity = 0.5, draw]{5} 
	 child[missing]
	 child{node (Z)[fill = red, fill opacity = 0.5, draw]{3}}
	 }
	child{node (Y)[fill = red, fill opacity = 0.5, draw]{9}};
\node[left = 2.5mm] at (X) {x};
\node[left = 2.5mm] at (Z) {z};
\node[right = 2.5mm] at (Y){y};
\node[left = 2.5mm] at (R){x.p};
\draw[-latex,ultra thick] (1,-1) -- ++ (2,0);
\end{tikzpicture}
\begin{tikzpicture}[]
\node[draw, fill = red, fill opacity = 0.5] (R) {7}
	child{node (X) [draw]{5} 
	 child[missing]
	 child{node (Z)[fill = red, fill opacity = 0.5, draw]{3}}
	 }
	child{node (Y)[draw]{9}};
\node[left = 2.5mm] at (X) {x};
\node[left = 2.5mm] at (Z) {z};
\node[right = 2.5mm] at (Y){y};
\node[left = 2.5mm] at (R){x.p};
\end{tikzpicture}
\end{document}
```
Ripeto quindi la procedura su x.p in quanto il padre di x.p potrebbe essere di colore rosso, nel qual caso la quarta proprietà degli alberi RB non sarebbe verificata.

### Caso 2, y nero e z figlio destro di x
```tikz
\begin{document}
\begin{tikzpicture}
[
level 1/.style={sibling distance = 2.5cm},
level 2/.style={sibling distance = 1.5cm}
]
\node[draw] (R) {7}
	child{node (X) [fill = red, fill opacity = 0.5, draw]{3} 
	 child{node {$\alpha$}}
	 child{node (Z)[fill = red, fill opacity = 0.5, draw]{5}
	  child{node{$\beta$}}
	  child{node{$\gamma$}}}
	 }
	child{node (Y)[draw]{9}
	 child{node{$\delta$}}
	 child{node{$\varepsilon$}}};
	 
\node[left = 2.5mm] at (X) {x};
\node[left = 2.5mm] at (Z) {z};
\node[right = 2.5mm] at (Y){y};
\node[left = 2.5mm] at (R){x.p};
\draw[-latex,ultra thick] (2,-2) -- ++ (2,0);
\end{tikzpicture}
\begin{tikzpicture}
[
level 1/.style={sibling distance = 2.5cm},
level 2/.style={sibling distance = 1.5cm}
]
\node[draw] (R) {7}
	child{node (X) [fill = red, fill opacity = 0.5, draw]{5} 
	 child{node (Z)[fill = red, fill opacity = 0.5, draw]{3}
	  child{node{$\alpha$}}
	  child{node{$\beta$}}}
	 child{node {$\gamma$}}
	 }
	child{node (Y)[draw]{9}
	 child{node{$\delta$}}
	 child{node{$\varepsilon$}}};
	 
\node[left = 2.5mm] at (X) {x'= z};
\node[left = 2.5mm] at (Z) {z' = x};
\node[right = 2.5mm] at (Y){y};
\node[left = 2.5mm] at (R){x.p};
\end{tikzpicture}
\end{document}
```
Siamo a questo punto nel caso 3

### Caso 3, y nero e z figlio sinistro di x
```tikz
\begin{document}
\begin{tikzpicture}
[
level 1/.style={sibling distance = 1.75cm},
level 2/.style={sibling distance = 1cm},
level 3/.style={sibling distance = .75cm}
]
\node[draw] (R) {7}
	child{node (X) [fill = red, fill opacity = 0.5, draw]{5} 
	 child{node (Z)[fill = red, fill opacity = 0.5, draw]{3}
	  child{node{$\alpha$}}
	  child{node{$\beta$}}}
	 child{node {$\gamma$}}
	 }
	child{node (Y)[draw]{9}
	 child{node{$\delta$}}
	 child{node{$\varepsilon$}}};
	 
\node[left = 2.5mm] at (X) {x};
\node[left = 2.5mm] at (Z) {z};
\node[right = 2.5mm] at (Y){y};
\node[left = 2.5mm] at (R){x.p};
\draw[-latex, ultra thick] (2,-2) -- ++ (1,0);
\end{tikzpicture}

\begin{tikzpicture}
[
level 1/.style={sibling distance = 1.75cm},
level 2/.style={sibling distance = 1cm},
level 3/.style={sibling distance = .75cm}
]
\node[draw, fill = red, fill opacity = .5] (R) {7}
	child{node (X) [draw]{5} 
	 child{node (Z)[fill = red, fill opacity = 0.5, draw]{3}
	  child{node{$\alpha$}}
	  child{node{$\beta$}}}
	 child{node {$\gamma$}}
	 }
	child{node (Y)[draw]{9}
	 child{node{$\delta$}}
	 child{node{$\varepsilon$}}};
	 
\node[left = 2.5mm] at (X) {x};
\node[left = 2.5mm] at (Z) {z};
\node[right = 2.5mm] at (Y){y};
\node[left = 2.5mm] at (R){x.p};
\draw[-latex, ultra thick] (2,-2) -- ++ (1,0);
\end{tikzpicture}

\begin{tikzpicture}
[
level 1/.style={sibling distance = 1.75cm},
level 2/.style={sibling distance = 1cm},
level 3/.style={sibling distance = .75cm}
]
\node[draw]{5}
	child{node[fill = red, fill opacity = .5, draw]{3}
	 child{node{$\alpha$}}
	 child{node{$\beta$}}
	}
	child{node[fill = red, fill opacity = .5, draw]{7}
	 child{node{$\gamma$}}
	 child{node[draw]{9}
	  child{node{$\delta$}}
	  child{node{$\varepsilon$}}
	  }
	 };

\end{tikzpicture}

\end{document}
```
Ogni volte che si invoca RB-INSERT-FIXUP può o terminare come nel caso 2 e 3, o venire applicato ricorsivamente risalendo due livelli dell'albero come nel caso 1. Può quindi essere invocato al massimo $O(h)$ volte, quindi $O(\log(n))$, inoltre una catena di invocazioni di RB-INSERT-FIXUP esegue al più 2 rotazioni.

## Cancellazione

```
RB-DELETE(T,z)
	if z.left = T.nil or z.right = T.nil
		y := z
	else y := TREE-SUCCESSOR(z)
	if y.left != T.nil
		x := y.left
	else x := y.right
	x.p := y.p
	if y.p = T.nil
		T.root := x
	elseif y = y.p.left
		y.p.left := x
	else y.p.right L= x
	if y != x
		z.key := y.key
	if y.color = BLACK
		RB-DELETE-FIXUP(T, x)
	return y
```

È molto simile a TREE-DELETE, ma usa T.nil al posto di NIL.
Se viene cancellato un nodo rosso non c'è sicuramente bisogno di modificare colori dei nodi, inoltre RB-DELETE cancella un nodo $y$ che ha al massimo un figlio diverso da T.nil, e se `y.color = RED` il nodo $x$ che prende il posto di $y$ è per forza nero.

```
RB-DELETE-FIXUP(T, x)
	if x.color = RED or x.p = T.nil
		x.color := BLACK                    //Caso 0
	elseif x = x.p.left                     //x è figlio sinistro
		w := x.p.right                      //(1) w è fratello di x
		if w.color = RED
			w.color := BLACK                 //Caso 1
			x.p.color := BLACK               //Caso 1
			LEFT-ROTATE(T, x.p)              //Caso 1
			w := x.p.right                   //Caso 1
		if w.left.color = BLACK and w.right.color = BLACK
			w.color := RED                   //Caso 2
			RB-DELETE-FIXUP(T, x.p)          //Caso 2
		elseif w.right.color = BLACK
			w.left.color := BLACK            //Caso 3
			w.color := RED                   //Caso 3
			ROTATE-RIGHT(T, w)               //Caso 3
			w := x.p.right                   //Caso 3
		w.color := x.p.color                 //Caso 4
		x.p.color := BLACK                   //Caso 4
		w.right.color := BLACK               //Caso 4
		ROTATE-LEFT(T, x.p)                  //Caso 4
	else (come a partire da (1) scambiando 'right' e 'left')
```

### Caso 0, x nodo rosso o radice
```tikz
\begin{document}
\begin{tikzpicture}
\node[draw, fill = red, fill opacity = 0.5, scale = 1.25] (x) at (0,0){5};
\node[left=5mm] at (x){x};
\draw (x) -- ++ (.25,1);
\draw (x) -- ++ (.25,-1);
\draw[-latex, ultra thick] (.5,0) -- ++ (1.5,0);
\end{tikzpicture}

\begin{tikzpicture}
\node[draw, scale = 1.25] (x) at (0,0){5};
\node[left=5mm] at (x){x};
\draw (x) -- ++ (.25,1);
\draw (x) -- ++ (.25,-1);
\node at (4,0){};
\end{tikzpicture}

\begin{tikzpicture}
\node[draw, scale = 1.25] {5} 
	child {node{}}
	child {node{}};
\draw[-latex, ultra thick] (.5,0) -- ++ (1.5,0);
\end{tikzpicture}

\begin{tikzpicture}
\node[draw, scale = 1.25] {5} 
	child {node{}}
	child {node{}};
\end{tikzpicture}

\end{document}
```

### Caso 1, x nodo nero, suo fratello destro w rosso, padre x.p nero

```tikz
\begin{document}
\begin{tikzpicture}
[
level 1/.style = {sibling distance = 1.5 cm},
level 2/.style = {sibling distance = 1cm},
level 3/.style = {sibling distance = .75cm},

]
\node[draw] {3}
	child{node (X) [draw]{1}
	 child{node{$\alpha$}}
	 child{node{$\beta$}}
	 }
	child{node (W) [draw, fill = red, fill opacity = .5]{7}
	 child{node[draw]{5}
	  child{node{$\gamma$}}
	  child{node{$\delta$}}
	  }
	 child{node[draw]{9}
	  child{node{$\varepsilon$}}
	  child{node{$\xi$}}
	  }
	 };
\node[left=5mm] at (X){x};
\node[right=5mm] at (W){w};
\draw[-latex,ultra thick] (2,-1) -- ++ (1,0);
\end{tikzpicture}

\begin{tikzpicture}
[
level 1/.style = {sibling distance = 1.5 cm},
level 2/.style = {sibling distance = 1cm},
level 3/.style = {sibling distance = .75cm},

]
\node[draw,fill = red, fill opacity = .5] {3}
	child{node (X) [draw]{1}
	 child{node{$\alpha$}}
	 child{node{$\beta$}}
	 }
	child{node (W) [draw]{7}
	 child{node[draw]{5}
	  child{node{$\gamma$}}
	  child{node{$\delta$}}
	  }
	 child{node[draw]{9}
	  child{node{$\varepsilon$}}
	  child{node{$\xi$}}
	  }
	 };
\node[left=5mm] at (X){x};
\node[right=5mm] at (W){w};
\draw[-latex,ultra thick] (2,-1) -- ++ (1,0);
\end{tikzpicture}

\begin{tikzpicture}
[
level 1/.style = {sibling distance = 1.5 cm},
level 2/.style = {sibling distance = 1cm},
level 3/.style = {sibling distance = .75cm},

]
\node[draw] {7}
	child{node [draw, fill = red, fill opacity = .5]{3}
	 child{node(X)[draw]{1}
	  child{node{$\alpha$}}
	  child{node{$\beta$}}
	  }
	 child{node(W)[draw]{5}
	  child{node{$\gamma$}}
	  child{node{$\delta$}}
	  }
	 }
	child{node{9}
	 child{node{$\varepsilon$}}
	 child{node{$\xi$}}
	 };
\node[left=5mm] at (X){x};
\node[left=2mm] at (W){w};
\end{tikzpicture}

\end{document}
```

Diventa o il caso 2, o il caso 3, o il caso 4

### Caso 2, x nero, suo fratello destro w nero con solo figli neri

```tikz
\begin{document}

\begin{tikzpicture}
[
level 1/.style = {sibling distance = 1.5 cm},
level 2/.style = {sibling distance = 1cm},
level 3/.style = {sibling distance = .75cm},

]
\node[draw,fill = red, fill opacity = .5] {3}
	child{node (X) [draw]{1}
	 child{node{$\alpha$}}
	 child{node{$\beta$}}
	 }
	child{node (W) [draw]{7}
	 child{node[draw]{5}
	  child{node{$\gamma$}}
	  child{node{$\delta$}}
	  }
	 child{node[draw]{9}
	  child{node{$\varepsilon$}}
	  child{node{$\xi$}}
	  }
	 };
\node[left=5mm] at (X){x};
\node[right=5mm] at (W){w};
\draw[-latex,ultra thick] (2,-1) -- ++ (1,0);
\end{tikzpicture}

\begin{tikzpicture}
[
level 1/.style = {sibling distance = 1.5 cm},
level 2/.style = {sibling distance = 1cm},
level 3/.style = {sibling distance = .75cm},

]
\node[draw,fill = red, fill opacity = .5] {3}
	child{node (X) [draw]{1}
	 child{node{$\alpha$}}
	 child{node{$\beta$}}
	 }
	child{node (W) [draw, fill = red, fill opacity = .5]{7}
	 child{node[draw]{5}
	  child{node{$\gamma$}}
	  child{node{$\delta$}}
	  }
	 child{node[draw]{9}
	  child{node{$\varepsilon$}}
	  child{node{$\xi$}}
	  }
	 };
\node[right=5mm] at (W){w};
\end{tikzpicture}

\end{document}
```

Se arriviamo al caso 2 dal caso 1, allora x.p è rosso e quando RB-DELETE-FIUP viene invocato su di esso termina subito

### Caso 3, x è nero, suo fratello destro w è nero con figlio sinistro rosso e figlio destro nero

```tikz
\begin{document}

\begin{tikzpicture}
[
level 1/.style = {sibling distance = 1.5 cm},
level 2/.style = {sibling distance = 1cm},
level 3/.style = {sibling distance = .75cm},

]
\node[draw,fill = red, fill opacity = .5] {3}
	child{node (X) [draw]{1}
	 child{node{$\alpha$}}
	 child{node{$\beta$}}
	 }
	child{node (W) [draw]{7}
	 child{node[draw, fill = red, fill opacity = .5]{5}
	  child{node{$\gamma$}}
	  child{node{$\delta$}}
	  }
	 child{node[draw]{9}
	  child{node{$\varepsilon$}}
	  child{node{$\xi$}}
	  }
	 };
\node[left=5mm] at (X){x};
\node[right=5mm] at (W){w};
\draw[-latex,ultra thick] (2,-1) -- ++ (1,0);
\end{tikzpicture}

\begin{tikzpicture}
[
level 1/.style = {sibling distance = 1.5 cm},
level 2/.style = {sibling distance = 1cm},
level 3/.style = {sibling distance = .75cm},

]
\node[draw,fill = red, fill opacity = .5] {3}
	child{node (X) [draw]{1}
	 child{node{$\alpha$}}
	 child{node{$\beta$}}
	 }
	child{node (W) [draw, fill = red, fill opacity = .5]{7}
	 child{node[draw]{5}
	  child{node{$\gamma$}}
	  child{node{$\delta$}}
	  }
	 child{node[draw]{9}
	  child{node{$\varepsilon$}}
	  child{node{$\xi$}}
	  }
	 };
\node[left=5mm] at (X){x};
\node[right=5mm] at (W){w};
\draw[-latex,ultra thick] (2,-1) -- ++ (1,0);
\end{tikzpicture}

\begin{tikzpicture}
[
level 1/.style = {sibling distance = 1.5 cm},
level 2/.style = {sibling distance = 1cm},
level 3/.style = {sibling distance = .75cm},

]
\node[draw, fill opacity = .5, fill = red] {3}
	child{node[draw] (X) {1}
	 child{node{$\alpha$}}
	 child{node{$\beta$}}
	}
	child{node[draw] (W) {5}
	 child{node {$\gamma$}}
	 child{node[draw, fill = red, fill opacity = .5] {7}
	  child{node{$\gamma$}}
	  child{node[draw]{9}
	   child{node{$\varepsilon$}}
	   child{node{$\xi$}}
	  }
	 }
	};
\node[left=2mm]at (X){x};
\node[right = 2mm]at (W){w};
\end{tikzpicture}

\end{document}
```

### Caso 4, x è nero, suo fratello destro w è nero con figlio destro rosso

```tikz
\begin{document}

\begin{tikzpicture}
[
level 1/.style = {sibling distance = 1.5 cm},
level 2/.style = {sibling distance = 1cm},
level 3/.style = {sibling distance = .75cm},

]
\node[draw,fill = red, fill opacity = .5] {3}
	child{node (X) [draw]{1}
	 child{node{$\alpha$}}
	 child{node{$\beta$}}
	 }
	child{node (W) [draw]{7}
	 child{node[draw, fill = purple, fill opacity = .5]{5}
	  child{node{$\gamma$}}
	  child{node{$\delta$}}
	  }
	 child{node[draw, fill = red, fill opacity = .5]{9}
	  child{node{$\varepsilon$}}
	  child{node{$\xi$}}
	  }
	 };
\node[left=5mm] at (X){x};
\node[right=5mm] at (W){w};
\draw[-latex,ultra thick] (2,-1) -- ++ (1,0);
\end{tikzpicture}

\begin{tikzpicture}
[
level 1/.style = {sibling distance = 1.5 cm},
level 2/.style = {sibling distance = 1cm},
level 3/.style = {sibling distance = .75cm},

]
\node[draw] {3}
	child{node (X) [draw]{1}
	 child{node{$\alpha$}}
	 child{node{$\beta$}}
	 }
	child{node (W) [draw, fill = red, fill opacity = .5]{7}
	 child{node[draw, fill = purple, fill opacity = .5]{5}
	  child{node{$\gamma$}}
	  child{node{$\delta$}}
	  }
	 child{node[draw]{9}
	  child{node{$\varepsilon$}}
	  child{node{$\xi$}}
	  }
	 };
\node[left=5mm] at (X){x};
\node[right=5mm] at (W){w};
\draw[-latex,ultra thick] (2,-1) -- ++ (1,0);
\end{tikzpicture}

\begin{tikzpicture}
[
level 1/.style = {sibling distance = 1.5 cm},
level 2/.style = {sibling distance = 1cm},
level 3/.style = {sibling distance = .75cm},

]
\node[draw,fill = red, fill opacity = .5] {7}
	child{node[draw]{3}
	 child{node[draw]{1}
	  child{node{$\alpha$}}
	  child{node{$\beta$}}
	  }
	 child{node[fill = purple, draw, fill opacity = .5]{5}
	  child{node{$\gamma$}}
	  child{node{$\delta$}}
	  }
	 }
	child{node[draw]{9}
	 child{node{$\varepsilon$}}
	 child{node{$\xi$}}
	};
\end{tikzpicture}

\end{document}
```
Viola significa di qualsiasi colore.

Ogni volta che RB-DELETE-FIXUP viene invocato esso può terminare (casi 0, 1, 3 e 4) o venire applicato ricorsivamente risalendo un livell nell'albero (caso 2 non proveniente da 1).
Può quindi essere invocato al massimo $O(h)$ volte quindi $O(\log(n))$, inoltre una catena di invocazioni di RB-DELETE-FIXUP esegue al massimo 3 rotazioni (caso 1 -> caso 3 -> caso 4).
