---
aliases: 
creation date: 2023-05-23 10:48
modification date: 2023-05-23 10:48
---

Dato un [[Grafi orientati pesati|grafo orientato pesato]] $G$ e dato un suo nodo $s$, trovare i percorsi più corti da $s$ agli altri nodi.

Se i pesi sono tuti 1 l'[[Algoritmo]] di [[visita in ampiezza|BFS]] ci fornisce già il cammino minimo, per i casi piú generali si usa l'[[algoritmo di Dijkstra]], l'algoritmo di Dijkstra ha tuttavia un problema, la funzione di peso deve essere un valore positivio (o nullo), non converge se ci sono archi a costo negativo. In questi casi si utilizza l'[[algoritmo di Bellman-Ford]]. 
È importante notare che se ci sono cicli di pesi negativi non può esistere nessun'algoritmo per determinare il cammino minimo in quanto non è definito (si può girare all'infinito abbassando il valore).