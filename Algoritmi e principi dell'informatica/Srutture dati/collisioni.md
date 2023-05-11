---
aliases: 
creation date: 2023-05-11 10:08
modification date: 2023-05-11 10:08
---

Quando una [[funzione hash]] ha delle chiavi che producono lo stesso risultato si ha una collisione, ossia
$$ k_{1} \neq k_{2}\quad\text{ma}\quad h(k_{1}) = h(k_{2})$$
## Risoluzione tramite concatenazione
Al posto di inserire i dati direttamente nella tabella si inserisce una lista dinamica di dati che sono puntati da chiavi diverse ma in collisione.

```
CHAINED-HASH-INSERT(T, x)
	inserisci x in testa alla lista T[h(x.key)]

CHAINED-HASH-SEARCH(T, k)
	cerca un elemento con una chiave k nella lista T[h(k)]

CHAINED-HASH-DELETE(T, k)
	cancella x dalla lista T[h(x.key)]
```

INSERT si fa in tempo O(1) assumendo che l'elemento da inserire non sia già in tabella
SEARCH si fa in tempo proporzionale alla lunghezza di T\[h(x)\]
DELETE si fa in tempo O(1) se la lista è una [[Lista doppiamente concatenata]]

Generalmente si formano liste abbastanza brevi, caso speciale è una funzione hash costante che rende la hash table una lista di fatto.

```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\node (k1) at (0,.2){$\bullet$};
\node (k2) at (.3,.6){$\bullet$};
\node (k3) at (-.1,-.5){$\bullet$};
\draw (0,0) circle (1);
\draw (0,0) circle (1.5);
\draw (2,1.6) rectangle (3,2) node (n0)[left = 2cm]{0} node[midway]{NIL};
\draw (2,1) rectangle (3,1.4) node (n1)[left = 2cm]{1} node[below = .25cm](arr1){};
\draw (2,.4) rectangle (3,.8) node (n2)[left = 2cm]{2} node[midway]{NIL};
\draw (2,-.2) rectangle (3,.2) node (n3)[left = 2cm]{3} node[below = .25cm](arr3){};
\draw (2, -.8) rectangle (3, -.4)node (n4)[left = 2cm]{4} node[midway]{NIL};
\draw[-latex] (k1.center) node[above]{k1} -- (n1);
\draw[-latex] (k2.center) node[above]{k2} -- (n3);
\draw[-latex] (k3.center) node[above]{k5} -- (n1);

\draw[-latex] (arr1.center) -- ++ (1,0);
\draw[-latex] (arr3.center) -- ++ (1,0);

\draw (4,1) rectangle (5,1.4)node[midway]{k1} rectangle (5.25,1);
\draw[-latex] (5.125,1.2) -- ++ (.5, 0);
\draw (5.625,1) rectangle (6.625,1.4)node[midway]{k5} rectangle (6.875, 1);
\draw (4,-.2) rectangle (5,.2)node[midway]{k2} rectangle (5.25,-.2);

\node[scale = 1.5] at (-1.1,.8){$U$};
\node[scale = 1.5] at (-.6,.6){$K$};
\end{tikzpicture}
\end{document}
```


## Risoluzione indirizzamento aperto
In sistemi in cui non è possibile usare memoria extra in maniera dinamica, la tabella contiene tutte le chiavi ed il fattore di carico $\alpha$ non potrà essere più di 1.
L'idea è quella di calcolare l'indice dello slot in cui va memorizzato l'oggetto, se lo slot è già occupato, si cerca nella tabella uno slot libero. La sequenza di ricerca però (detta **sequenza di ispezione**) si calcola attraverso la [[funzione hash#In indirizzamento aperto]]

```
HASH-INSERT(T, k)
	i := 0
	repeat
		j := h(k, 1)
		if T[j] = NIL
			T[j] := k
			return j
		else i := i + 1
	 until i = m
	 error "hash table overflow"	
```

```
HASH-SEARCH(T, k)
	i := 0
	repeat
		j := h(k, i)
		if T[j] = k
			return j
		else i := i + 1
	until T[j] = NIL or i = m
	return NIL
```

La cancellazione è piú coplessa, imporre uno slot a NIL rende impossibile accedere agli elementi successive a quella cancellata, possiamo provare a mettere un valore diverso da NIL che indica un elemento cancellato, ad esempio DELETED; inoltre dobbiamo aggiungere 
`if T[j] = NIL or DELETED'
nell'insert