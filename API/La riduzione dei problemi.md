---
aliases: 
creation date: 2023-04-06 09:51
modification date: 2023-04-06 09:51
---

Se ho un algoritmo per risolvere il [[problema]] $P$ posso sfruttarlo per risolvere il problema $P'$.


>[!esempio]
>Se so risolvere il problema della ricerca di un elemento in un insieme posso risolvere il problema dell'intersezione



Abbiamo già usato questo meccanismo varie volte, dall'indecibilità del problema dell'halt della MT abbiamo concluso in generale l'indecidibilità del problema della terminazione del calcolo:
- Ho una MT $M_{Y}$, un intero $x$, un programma $C$, $P$ e un file di ingresso $f$
- Costruisco un programma $C, P$ che simula $M_{y}$ e memorizzo $x$ in un file di ingresso $f$
- $P$ termina il suo calcolo su $f$ se e solo se $g(y,x) \neq \perp$
- Se sapessi decidere se $P$ termina il suo calcolo su $f$ saprei risolvere nanche il problema dell'halt della MT


>[!oss]
>Avremmo potuto ridimostrare in modo diretto l'indecidibilità della terminazione dei programmi $C$ enumerando i programmi e applicando la stessa tecnica diagonale (con parecchi dettagli notazionali in piú)


#### Formalmente
Voglio risolvere $x \in S'$?
So risolvere $y \in S$?

Se trovo una funzione $t$ calcolabile e totale tale che
$$ x \in S' \leftrightarrow t(x) \in S $$
allora sono in grado di rispondere algoritmicamente alla domanda $x \in S'$?

---
Questa procdura può essere anche utilizzata al contrario:
Posso risolvere $x \in S'$?
So di non saper risolvere $y \in S$ ($S$ non è decidibile)
Se trovo una funzione $t$ calcolabile e totale tale che
$$ y \in S \leftrightarrow  t(y) \in S' $$
ne concludo che $x \in S'$ non è decidibile, altrimenti ne ricaverei la conseguenza (assurda) che anche $S$ è decidibile

dimostrare decidibilità -> riduciamo a problema conosciuto risolvibile
dimostrare indecidibilità -> mostriamo che è il ridotto di un problema indecidibile

>[!esempio]
Generico programma $P$