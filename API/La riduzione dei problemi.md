---
aliases: 
creation date: 2023-04-06 09:51
modification date: 2023-04-06 09:51
---

Se ho un algoritmo per risolvere il [[problema]] $P$ posso sfruttarlo per risolvere il [[problema]] $P'$.


>[!esempio]
>Se so risolvere il problema della ricerca di un elemento in un insieme posso risolvere il problema dell'[[intersezione]]



Abbiamo già usato questo meccanismo varie volte, dall'indecibilità del [[problema dell'halt]] della MT abbiamo concluso in generale l'indecidibilità del problema della terminazione del calcolo:
- Ho una MT $M_{Y}$, un intero $x$, un programma $C$, $P$ e un file di ingresso $f$
- Costruisco un programma $C, P$ che simula $M_{y}$ e memorizzo $x$ in un file di ingresso $f$
- $P$ termina il suo calcolo su $f$ se e solo se $g(y,x) \neq \perp$
- Se sapessi decidere se $P$ termina il suo calcolo su $f$ saprei risolvere nanche il problema dell'halt della MT


>[!oss]
>Avremmo potuto ridimostrare in modo diretto l'indecidibilità della terminazione dei programmi $C$ enumerando i programmi e applicando la stessa tecnica diagonale (con parecchi dettagli notazionali in piú)


#### Formalmente
Voglio risolvere $x \in S'$?
So risolvere $y \in S$?

Se trovo una [[Funzioni|funzione]] $t$ calcolabile e totale tale che
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
>Generico programma $P$, è decidibile se durante l'esecuzione di un generico programma $P$ si acceda ad una variabile non inizializzata.
>Supponiamo per assurdo che sia decidibile. Consideriamo il [[problema]] dell'halt e riduciamolo a questo problema come segue:
>Dato un generico $P^\land$ dove tutte le variabili sonoinizializzate costruisco $P$:
>```c
>{
>	int x,y;
>	P^;
>	y = x;
>}
>```
>avendo cura di usare identificatori $x$ e $y$ che non sono usati in $P^\land$.
>
>L'assegnamento $y := x$ prduce un accesso a $x$ che non è inizializzato
>...

La stessa tecnica puó essere applicata per dimostrare l'indecidiblità di molte altre tipiche proprietà dei programmi durante la loro esecuzione:
- Indici di array fuori dai limiti
- Divisione per 0
- Compatibilità dinamica tra tipi
- ...
- Tipici errori a run-time


>[!teorema]
>Il problema di stabilire se $\exists z | f_{x}(z) \neq \perp$ è [[Ricorsivamente enumerabile|semidecidibile]] $M_{x}$
>
>*Schema di dimostrazione:*
>- Se cerco di calcolare $f_{x}(0)$ e trovo che è $\neq \perp$ sono a posto
>- Se il calcolo di $f_{x}(0)$ non termina e $f_{x}(1)$ è $\neq \perp$ come posso scoprirlo?
>
>Uso il seguente trucco (di tipo diagonale)
>- Simulo 1 passo del calcolo di $f_{x}(0)$, se mi fermo ho chiuso positivamente
>- Altrimenti simulo u npasso di $f_{x}(1)$
>- Se ancora non mi sono fermato simulo 2 passi di $f_{x}(0)$, poi un passo di $f_{x}(2)$, 2 di $f_{x}(1)$, $3$ di $f_{x}(0)$ e cosi via.
>
>Cosí facendo se $\exists z | f_{x}(z) \neq \perp$, prima o poi lo trovo perchè prima o poi simulerò abbastanza passi del calcolo di $f_{x}(z)$ per farla arrestare (è un sistema simile a quello adottato da uno scheduler per i processi)  


```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[-{Stealth[scale = 2]}](0,0) -- (0,4);
\draw[-{Stealth[scale = 2]}](0,0) -- (4,0);
\draw (0,0) grid (3.8,3.8);
\end{tikzpicture}
\end{document}
```

