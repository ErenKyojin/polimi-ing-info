---
aliases: red-black tree, alberi rosso-neri, alberi RB, RBT
creation date: 2023-05-16 12:03
modification date: 2023-05-16 12:03
---

Gli alberi rosso-neri (RB) sono BST abbastanza bilanciati, cioè l'altezza dell'albero $h = O(\log(n))$ ed è possibile realizzare tute le operazioni più importanti in tempo $O(\log(n))$.
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
\node {5}
	child {node {3}}
	child {node {7}};
\end{tikzpicture}
\end{document}
```
