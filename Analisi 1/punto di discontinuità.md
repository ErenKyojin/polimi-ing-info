# punto di discontinuità
Una funzione [[continuità|non continua]] in un punto $c$

### punto di discontinuità a salto
Prendiamo ad esempio il [[Limite]]:
$$\lim_{x\to 0^\pm}\frac{x}{|x|}=\pm1$$
In questo caso $f(0)$ non esiste, inoltre il limite destro e sinistro non coincidono, pur essendo finiti, possiamo racchiudere questo tipo di punti in una definizione
```desmos-graph

Y = \frac{x}{|x|}
```

>[!def]
>Si dice che c'è un punto di discontinuità a salto per $f(x)$ quando i limiti destro e sinistro in $c$ esistono finiti, ma diversi tra loro. Il salto è costituito dalla differenza dei limiti e precisamente
>$$\text{salto in } c = \lim_{x\to c^+}f(x)-\lim_{x\to c^-}f(x)$$
>Se uno dei due limiti coincide effettivamente con $f(c)$ si dice che $f$ è continua da destra o da sinistra.


