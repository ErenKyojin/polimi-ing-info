---
aliases: reversibile, trasformazione reversibile
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

>[!def]
>Perchè si possa realizzare una trasformazione reversibile
>- non devono agire forze dissipative
>- deve essere una trasformazione quasi-statica
>

Una trasformazione reversibile, essendo quasi-statica, è una trasformazione in cui il sistema passa da uno stato iniziale ad uno stato finale attraversando un'infinità di stati di equilibrio infinitamente vicini tra di loro. Durante tutta la trasformazione il sistema sarà in equilibrio con l'ambiente.
Le [[coordinate termodinamice]] sono definite lungo tutta la trasformazione reversibile.

>[!esempio]
>Considerando il [[piano di Clapeyron]] $(p,V)$, una trasformazione reversibile può essere rappresentata da una linea continua visto che sono note le coordinate termodinamiche durante tutta la trasfromazione, mentre una trasformazione irreversibile non può essere rappresentata con una funzione nel piano $(p,V)$ non essendo note le coordinate termodinamiche durante la trasformazione stessa
>```tikz
>\begin{document}
>\begin{tikzpicture}
>\draw[-latex] (0,0) -- (5,0) node[right]{V};
>\draw[-latex] (0,0) -- (0,3) node[left]{p};
>\draw[] (.5,2.5) node[above]{A} to[out=270,in=180] (4,.75) node[right]{B};
>\end{tikzpicture}
>\end{document}
>```


# ANKI

```anki
id: 1705831177378
deck: Fisica
---
Trasformazioni termodinamiche reversibili
===
Affinchè una trasformazione sia reversibile:
- non devono agire forze dissipative
- deve essere una trasformazione quasi-statica, ossia la trasformazione avviene attraverso infiniti stati di equilibrio infinitamente vicini tra loro
```
