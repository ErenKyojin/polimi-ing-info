---
aliases: 
creation date: 2023-05-23 10:48
modification date: 2023-05-23 10:48
---

Dato un [[Grafi orientati pesati|grafo orientato pesato]] $G$ e dato un suo nodo $s$, trovare i percorsi più corti da $s$ agli altri nodi.

Se i pesi sono tuti 1 l'[[algoritmo]] di [[visita in ampiezza|BFS]] ci fornisce già il cammino minimo, per i casi piú generali si usa l'[[algoritmo di Dijkstra]], l'algoritmo di Dijkstra ha tuttavia un problema, la funzione di peso deve essere un valore positivio (o nullo), non converge se ci sono archi a costo negativo.

