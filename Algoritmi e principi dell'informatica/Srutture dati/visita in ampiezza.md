---
aliases: breadth-first search
creation date: 2023-05-22 14:15
modification date: 2023-05-22 14:15
---

>[!question] problema
>Input: Abbiamo in input un grafo $G$ ed un nodo $s$ sorgente di $G$.
>Output: vogliamo visitare tutti i nodi di $G$ che sono raggiungibili da $s$ (un nodo $u$ è raggiungibile da $s$ se c'è un cammino nel grafo che va da $s$ a $u$)


Sfruttiamo l'algoritmo di BFS (Breadth-First search), che ha come idea quella di visitare tutti i nodi a ditanza 1 da s, poi a distanza 2, poi a distanza 3 e cosi via.

Quando visitiamo un nodo $u$, teniamo traccia della