---
aliases: red-black tree, alberi rosso-neri, alberi RB, RBT
creation date: 2023-05-16 12:03
modification date: 2023-05-16 12:03
---

Gli [[alberi]] rosso-neri (RB) sono BST abbastanza bilanciati, cioè l'altezza dell'albero $h = O(\log(n))$ ed è possibile realizzare tute le operazioni più importanti in tempo $O(\log(n))$.
Negli alberi RB non is ha mai che un ramo dell'albero sia lungo più del doppio di un altro ramo. L'idea alla baste degli alberi RB: ogni nodo ha un colore, o rosso o nero, ed i colori sono distruibuiti affinchè l'albero non sia lungo più del doppio di un altro.


Ogni nodo di un albero RB ha 5 attributi:
- key
- left
- right
- p
- color

> [!danger]
> In questo caso le foglio sono tutti i nodi NIL alla base! Fino ad ora consideravamo foglie i nodi con solo elementi NIL. Questo significa che i NIL sono inclusi nell'albero.


- Ogni nodo è o rosso o nero
- La radice è nera
- Le foglie NIL sono tutte nere
- I figli di un nodo rosso sono entrambi neri
- Per ogni nodo $x$ tutti i cammini da $x$ alle foglie sue discendenti contengono lo stesso numero $bh(x)$ di nodi neri
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
	RB-INSERT-FIXUP(T, z)
```

Solito $O(h)$.

```
RB-INSERT-FIXUP(T, z)
	if z = T.root
		T.root.color = BLACK
	else x := z.p                          //Quindi x è il padre di z
		if x.color = RED 
			if x = x.p.left                //x è figlio sinistro 
				y := x.p.right             //(1) y è fratello di x 
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
	 child{node (Z)[fill = red, fill opacity = 0.5, draw]{3}}}
	child{node (Y)[fill = red, fill opacity = 0.5, draw]{9}};
\node[left = 2.5mm] at (X) {x};
\node[left = 2.5mm] at (Z) {z};
\node[right = 2.5mm] at (Y){y};
\node[left = 2.5mm] at (R){x.p};
\draw[-latex,ultra thick] (1,-1) -- ++ (2,0);
\end{tikzpicture}
\end{document}
```

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
