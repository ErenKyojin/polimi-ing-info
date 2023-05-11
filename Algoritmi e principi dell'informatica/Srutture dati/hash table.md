---
aliases: tabelle hash
creation date: 2023-05-11 10:03
modification date: 2023-05-11 10:03
---



Una tabella hash usa una memoraia proporzionale al numero di chiavi effettivamente memorizzate nel dizionario. Un oggetto di chiave $k$ è memorizzato in una tabella di indice $h(k)$ con una [[funzione hash]], ho $|U|$ possibili chiavi ed una funzione che le deve mappare su un numero $m (< |U|$ ma solitamente $\ll |U|$) di slot di tabella, c'è possibilità di avere [[collisioni]]
$$ k_{1} \neq k_{2}\quad\text{ma}\quad h(k_{1}) = h(k_{2})$$


