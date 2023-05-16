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
Estremamente simile all'inserimento di prima ma con un algoritmo per mantenere il bilanciamento

```
RB-INSERT(T, z)
	y := T.nil
	x := T.root
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
	else y.r
```