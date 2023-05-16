---
aliases: Binary search trees, BST
creation date: 2023-05-16 10:46
modification date: 2023-05-16 10:46
---

Un albero binario di ricerca è un albero binario che soddisfa le seguenti proprietà:
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

Entrambi gli algoritmi hanno complessità $O(h)$ con caso pessimo minimo (massimo) su foglia.

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
	sale fino a quando non sale da de