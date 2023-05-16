---
aliases: Binary search trees, BST
creation date: 2023-05-16 10:46
modification date: 2023-05-16 10:46
---

Un [[albero binario]] di ricerca è un albero binario che soddisfa le seguenti proprietà:
Per tutti i nodi $x$ del BST se $l$ è un nodo nel sottoalbero sinistro allora `l.key` $\leq$ `x.key`

> [!esempio]
> ```tikz
> \begin{document}
> \begin{tikzpicture}
> \node {5}
> 	child {node {3}
> 	 child{node {2}}
> 	 child{node {5}}}
> 	child {node {7}
> 	child {node {8}}};
> \end{tikzpicture}
> \end{document}
> ```

Per visitare un'albero si sfrutta un [[algoritmo di attraversamento]], vediamo invece la ricerca

## Ricerca
```
TREE-SEARCH(x, k)
	if x = NIL or k = x.key
		return x //ritorniamo il nodo, piú flessibile, ad esempio per cancellaz
	if x < x.key
		return TREE-SEARCH(x.left, k)
	else return TREE-SEARCH(x.right, k)
```
 Caso pessimo (se non consideriamo la forma dell'albero) è chiave non presente o chiave su una foglia, il tempo di esecuzione sarà $\Theta(h)$ ma anche $O(h)$ con $h$ altezza dell'albero. Se consideriamo la struttura dell'albero il caso pessimo diventa quello in cui ogni nodo ha un solo figlio in cui abbiamo $h = n$. In cui abbiamo virtualmente una lista.

 Per trovare il minimo si va sempre a sinistra, ma non è necessariamente una foglia (può avere un elemento maggiore, ossia un figlio destro), lo stesso vale per il massimo.

```
TREE-MINIMUM
	while x.left != NIL
		x := x.left
	return x
```

```
TREE-MAXIMUM
	while x.right != NIL
		x := x.right
	return x
```

Entrambi gli [[Algoritmo|algoritmi]] hanno complessità $O(h)$ con caso pessimo minimo (massimo) su foglia.

Come troviamo il successore (rispettivamente predecessore) ? Il successore  (predecessore) di un oggetto `x` in un BST è l'elemento `y` del BST tale che `y.key` è la più piccola (rispettivamente piú grande) tra le chiavi che sono più grandi (rispettivamente piú piccole) di `x.key`.
Quindi se il sottoalbero destro di un oggetto `x` dell'albero dell'albero non è vuoto, il successore di `x` è l'elemento più piccolo (cioè il minimo) del sottoalbero destro di `x`.


```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\draw[fill = green, thick] (0,0)node[]{$\bullet$} node[left]{succ($x$)} -- (1,1.4) node[above]{x} -- (2,0) -- (0,0);
\end{tikzpicture}
\end{document}
```
>[!oss] x predecessore di $\text{ succ}(x)$.

Per trovare un successore:
se esiste il sottoalbero destro
	prende il minimo del sottoalb
Altrimenti
	salgo da right fino a quando non salgo da left

```
TREE-SUCCESSOR(x)
	if x.right != NIL
		return TREE-MINIMUM(x.right)
	y := x.p
	while y != NIL and x = y.right
		x := y
		y := y.p
	return y
```

Il tempo di esecuzione è $O(h)$

Per esericizio scrivere TREE-PREDECESSOR con complessità

## Insert

```c
TREE-INSERT(T, z) //z nodo già preparato
	y := NIL
	x := T.root
	while x != NIL
		y := x
		if z.key < x.key
			x : = x.left
		else x := x.right
	z.p := y
	if y = NIL
		T.root := z //l'albero T è vuoto
	elseif z.key < y.key
		y.left := z
	else y.right := z

```

Tempo di esecuzione $O(h)$, il while richiede al massimo tante ripetizioni quanta è l'altezza dell'abero, ed il resto è in tempo costante. Notiamo che se fosse ben bilanciato l'altezza sarebbe $\log_{2}$ quindi ottimo.


## Cancellazione
Quando cancelliamo un oggetto $z$ da un albero abbiamo tre possibili casi:
1. Foglia: semplice, cancelliamo e basta
2. Nodo con un figlio, cancelliamo e riaggianciamo il figlio
3. Trovare il successore del nodo da cancellare $z$, copiare la chiave del successore in $z$, quindi cancelare il successore
	- Cancellare il successore potrebbe richiedere di spostare un sottoalbero del successore un livello su
	- Si noti che in questo caso l'ggetto originario $z$ non è cancellato, ma il suo attributo key viene modificato

```tikz
\begin{document}
\begin{tikzpicture}[level 1/.style={sibling distance = 2cm},
level 2/.style={sibling distance = 1cm},
every node/.style={draw}
]
\node (p) {5} 
	child {node{3}
	 child {node{1}}
	 child {node{4}}}
	child {node{7}
	 child {node {6}}
	 child {node {12}
	  child {node{8}
	   child {node{9}}}
	  child {node {14}}}};
\draw[-latex] (2,-2.5) --  ++ (2,0);
\end{tikzpicture}
\begin{tikzpicture}[level 1/.style={sibling distance = 2cm},
level 2/.style={sibling distance = 1cm},
every node/.style={draw}
]
\node (p) {5} 
	child {node{3}
	 child {node{1}}
	 child {node{4}}}
	child {node{7}
	 child {node {6}}
	 child {node {12}
	  child {node{9}}
	  child {node {14}}}};
\end{tikzpicture}
\end{document}
```

```
TREE-DELETE(T, z)
	if z.left = NIL or z.right = NIL //ha figli?
		y := z
	else y := TREE-SUCCESSOR(z)
	if y.left != NIL //Qui siamo sicura che ha al più un figlio
		x := y.left 
	else x := y.right
	if x != NIL
		x.p := y.p
	if y.p = NIL
		T.root := x
	elsif y = y.p.left
		y.p.left := x
	else y.p.right := x
	if y != z
		z.key := y.key
	return y
```

y nodo da eliminare e x quello con cui sostituiamo