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
\node at (0,.2){$\bullet$};
\node at (.3,.6){$\bullet$};
\node at (-.1,-.5){$\bullet$};
\draw (0,0) circle (1);
\draw (0,0) circle (1.5);
\draw (2,1.6) rectangle (3,2);
\draw (2,1) rectangle (3,1.4);
\draw (2,.4) rectangle (3,.8);
\draw (2,-.2) rectan
\end{tikzpicture}
\end{document}
```
