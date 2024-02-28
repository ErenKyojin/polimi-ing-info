---
aliases: tabelle hash, hash map
creation date: 2023-05-11 10:03
modification date: 2023-05-11 10:03
---



Una tabella hash usa una [[memoria]] proporzionale al numero di chiavi effettivamente memorizzate nel dizionario. Un oggetto di chiave $k$ è memorizzato in una tabella (array) di indice $h(k)$ con una [[funzione hash]], ho $|U|$ possibili chiavi ed una funzione che le deve mappare su un numero $m (< |U|$ ma solitamente $\ll |U|$) di slot di tabella, c'è possibilità di avere [[collisioni]] in quanto abbiamo diverse chiavi tali che $h(k_{1}) = h(k_{2})$



