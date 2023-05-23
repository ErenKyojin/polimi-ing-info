---
aliases: Dijkstra
creation date: 2023-05-23 10:51
modification date: 2023-05-23 10:51
---
Per l'algori
Idea: Eseguiamo una [[visita in ampiezza]] ma quando estraggo un nodo da $Q$ non prendo quella che da più tempo è in $Q$ ma quello che ha distanza minima da $s$.
All'inizio metto tutti i nodi in $Q$ e per ogni nodo $v$ diverso da $s$ metto `v.dist` a $\infty$.

**rilassamento**
