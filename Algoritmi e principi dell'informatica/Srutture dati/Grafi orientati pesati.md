---
aliases: grafo orientato pesato
creation date: 2023-05-23 10:42
modification date: 2023-05-23 10:42
---

Un grafo orientato pesato è un grafo che associa ad ogni arco con un peso dato dalla funzione $w : V \times V \to \mathbb{N}$.
Abbiamo anche qui matrici e liste di adiacenza, le prime al posto dei valori 1 conterranno il peso, nelle liste semplicemente lo specifichiamo

## Peso deicammini
$$p = \left< v_{0}, v_{1}, \dots, v_{k} \right>$$
$$W(p) = \sum_{i=1}^k w(v_{i - 1},v_{i})$$
