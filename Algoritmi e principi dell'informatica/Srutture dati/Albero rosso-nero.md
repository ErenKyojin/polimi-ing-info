---
aliases: red-black tree, alberi rosso-neri, alberi RB, RBT
creation date: 2023-05-16 12:03
modification date: 2023-05-16 12:03
---

Gli alberi rosso-neri (RB) sono BST abbastanza bilanciati, cioè l'altezza dell'albero $h = O(\log(n))$ ed è possibile realizzare tute le operazioni più importanti in tempo $O(\log(n))$.
Negli alberi RB non is ha mai che un ramo dell'albero sia lungo più del doppio di un altro ramo. L'idea alla baste degli alberi RB: ogni nodo ha un colore, o rosso o nero, ed i colori sono distruibuiti affinchè l'albero non sia lungo più del doppio di un altro.