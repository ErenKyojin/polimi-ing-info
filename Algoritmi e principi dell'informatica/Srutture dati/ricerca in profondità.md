---
aliases: depth-first search, DFS
creation date: 2023-05-22 14:47
modification date: 2023-05-22 14:47
---

[[visita in ampiezza|BFS]] si basa sull'idea di visitare i nodi con una politica FIFO realizzata mediante una [[Code|coda]], come alternativa si può usare anche una politica LIFO che ci fornisce un [[algoritmo]] di visita in profondità (detto depth-first search o DFS).
In questo caso l'idea è che ogni volta che impiliamo un nodo in cima allo stack iniziamo a visitare i nodi adiacenti a quest'ultimo, mentre nel BFS visitavamo quello da più tempo in coda.
Per ottenere un algoritmo di DFS è sufficente cambiare ENQUEUE con PUSH e DEQUEUE con POP nell'algoritmo di BFS.

In realtà il DFS che vediamo risolve un problema leggermente diverso da BFS:

>[!question] Problema risolto da DFS
>input: grafo G
>output: visitare tutti i nodi di G
>(osserviamo che in BFS visitavamo solo i nodi raggiungibili da $s$)
>

DFS solitamente è usato come parte di un algoritmo più complesso, prima di vederlo però facciamo alcune considerazioni:

- Anche in DFS coloriamo i nodi
- Usiamo una politica LIFO, quindi una pila
- L'algoritmo DFS tiene traccia di quanto i nodi sono stati messi sullo stack e di quando sono tolti, attraverso una variabile globale time messa a 0 ad inizio algoritmo ed incrementata di 1 ogni aggiunta o rimozione di nodi dalla pila, inoltre sfruttiamo la variabile time anche per tenere traccia di:
	- Il tempo di inizio scoperta di un nodo ed il tempo di quando la scoperta termina