---
aliases: 
creation date: 2023-05-23 12:01
modification date: 2023-05-23 12:01
---
Avendo capito come realizzare se un problema sia risolibile o meno, vogliamo sapere il costo che comporta risolverlo. Ma costo può avere piú significati:
- Costo di tempo
- Costo di spazio
- Costo di sviluppo

Noi ci concentriamo principalmente su cositi oggettivi, quelli sulle risorse (come memoria e tempo di esecuzione).

Sarebbe interessante partire come per il problema della risolviblità, sfruttare la conseguenza della Tesi di Church che afferma che le domande poste e le risposte ottenute non dipendono dalla formulazione del problema, tuttavia non è così scontato che sia applicabile anche alla complessità questa affermazione.

Cominciamo da un analisi di complessità per le MT (deterministiche):
- ![[Complessità temporale]]
- ![[Complessità spaziale]]

> [!esempio] Riconoscimento di $\{ wcw^R \}$
> ```tikz
> \usetikzlibrary{chains,fit,shapes}
> \begin{document}
> \begin{tikzpicture}
> 
> \tikzstyle{tmtape}=[draw,minimum size = 0.7cm]
> 
> \begin{scope}[start chain = 1 going right,node distance = -0.15mm]
> \node[on chain = 1, tmtape] {a};
> \node[on chain = 1, tmtape] {b};
> \node[on chain = 1, tmtape] (b) {b};
> \node[on chain = 1, tmtape] {c};
> \node[on chain = 1, tmtape] {b};
> \node[on chain = 1, tmtape] {b};
> \node[on chain = 1, tmtape] {a};
> \node[on chain = 1, tmtape] {...};
> \end{scope}
> 
> \begin{scope}[start chain = 2 going right, node distance = -.15mm]
> \node[on chain = 2, tmtape] at (6,-1.5) {$Z_0$};
> \node[on chain = 2, tmtape] {A};
> \node[on chain = 2, tmtape] (B) {B};
> \node[on chain = 2, tmtape] {B};
> \end{scope}
> 
> \node[draw, minimum size = 1.5cm] (TM) at (0,-2){TM};
> \draw[thick,-latex] (TM.east) to[out =0,in = -90] (B.south);
> \draw[thick, -latex] (TM.north) to[out =90, in = -90] (b.south);
> 
> \end{tikzpicture}
> \end{document}
> ```
> $$ \begin{align}
> T_{m}(x) =\ &|x| + 1 \text{ se } x \in L \\
>  & |w| + 1 \text{ se }x = wz, w = vucu^R, v = \alpha a, z = b\alpha' \\
>  &|x| + 1 \text{ se }x \in \{ a,b \}^* \dots \\
> S_{M}(x) =\ &|x| + 1 \text{ se }x \in \{ a,b \}^*, \lfloor |x|/2 \rfloor + 1 \text{ se }x \in L,\dots
> \end{align} $$


Cerchiamo un modo di semplificare:
Definiamo la complessità in $f(x)$ come complessità in $f(n)$ con $n$ dimensione dei dati di ingresso

>[!esempio]
>- $n$ numero di lettere in una stringa
>- $n$ numero di righe / colonne in una matrica
>- $n$ numero di record di un file
>- $n$ numero di bit in ingresso


in generale $|x_{1}| = |x_{2}|$ non implica $T_{M}(x_{1}) = T_{M}(x_{2})$ ne tantomeno $S_{M}(x_{1}) = S_{M}(x_{2})$, dobbiamo quindi effettuare un scelta:
- Scelta del caso pessimo
  $T_{M}(n) = \max\{ T_{m}(x),|x| = n \}$ (analogo per $S_{m}(n)$)

- Scelta del caso ottimo
  $T_{M}(n) = \min\{ T_{M}(x), |x| =n \}$

- Scelta del caso medio:
  $T_{M}(n) = \left( \sum_{|x| = n} T_{M}(x)\right) / k^n$ con $k$ cardinalità dell'alfabeto

Tendenzialmente è il **caso pessimo** quello di interesse, è sia più rilevante (l'analisi del caso pessimo è l'unica che ci da una certezza su ogni caso, che è sicuramente migliore o uguale alla nostra analisi); sia più semplice, in particolar modo rispetto al caso, medio da calcolare.

## Tasso di crescita
Il valore di $T_{M}(n)$ esatto non ci interessa, vogliamo solo sapere il suo tasso di crescita rispetto ad $n$, ossia il comportamento asintotico per $n$ grandi.

>[!esempio]
>Non ci interessa se $T_{M}(n) = 3n^2 + 12n + 35$ o se $T_{M}(n) = 6n^2 + 26$ in quanto entrambi si comportano come $n^2$, ne distinguere $T_{M}(n)=(0.001)n^2$ da $T_{M}(n) = 500!n^2$.
>Vogliamo separare invece $T_{M}(n) = 3n^3 + 2$ da $T_{M}(n) = 12n^2 + 22n$.


Introduciamo delle notazioni che mettano in evidenza il comportamento asintotico delle funzioni:
- Notazione [[O grande]]
- Notazione [[Omega grande]]
- Notazione [[Theta grande]]

Queste relazioni condividono alcune proprietà:
- $f(n) = \Theta(g(n))$ se e solo se $f(n) = O(g(n))$ e $f(n) = \Omega(g(n))$
- Transitività:
	- se $f(n) = \Theta(g(n))$ e $g(n) = \Theta(h(n))$ allora $f(n) = \Theta(h(n))$
	- se $f(n) = O(g(n))$ e $g(n) = O(h(n))$ allora $f(n) = O(h(n))$
	- se $f(n) = \Omega(g(n))$ e $g(n) = \Omega(h(n))$ allora $f(n) = \Omega(h(n))$
- Riflessività:
	- $f(n) = \Theta(f(n))$
	- $f(n) = O(f(n))$
	- $f(n) = \Omega(f(n))$
- Simmetria:
	- $f(n) = \Theta(g(n))$ se e solo se $g(n) = \Theta(f(n))$
- Simmetria trasposta: 
	- $f(n) = O(g(n))$ se e solo se $g(n) = \Omega(f(n))$ 

$\Theta$ è una relazione di equivalenza.

Se $\lim_{ n \to \infty } \frac{f(n)}{g(n)} = c, c \neq 0, c\neq \infty$
allora $f(n) = \Theta(g(n))$ e quindi anche $f(n) = O(g(n))$

Se $\lim_{ _ \to \infty }$
## Complessità e non [[determinismo]]
Data una [[Funzioni|funzione]] $T(n)$ indichiamo come `DTIME(T)` l'[[insieme]] dei [[problema|problemi]] tali che esiste un [[algoritmo]] che risolve in tempo $T(n)$

Più precisamente
- Problema = riconoscimento di un linguaggio
- Algoritmo = [[Macchine di Turing|macchina di turing]]

`DTIME(T)` e (rispettivamente `DSPACE(T)`) è la classe dei [[Linguaggio|linguaggi]] (ricorsivi) riconoscibili in tempo T (rispettivamente spazio) mediante macchina di Turing deterministiche a k nastri di [[memoria]]


Data una funzione totale e computabile $T(n)$ esiste un linguaggio ricorisvo che non è `DTIME(T)`, c'è quindi una gerarchia di linguaggi definita sulla base della complessità temporale deterministica. Una cosa analoga vale per DSPACE e le [[Computazioni nondeterministiche]] (NTIME e NSPACE).

## Riduzione in tempo polinomiale e completezza
Un linguaggio (problema) $L_{1}$ è riducibile in tempo polinomiale ad un altro linguaggio $L_{2}$ se e solo se esiste una MT deterministica (Traduttrice) con complessità in $P$ che per ogni $x$ produce una stringa $\tau(x)$ tale che $\tau(x) \in L_{2}$ e e solo se $x \in L_{1}$

Se $\mathcal{L}$ è una classe di linguaggi diciamo che un linguaggio $L$ (che non è detto debba essere in $\mathcal{L}$) è $\mathcal{L}$ difficile rispetto alle riduzioni in tempo polinomiale se e solo se per ogni $L' \in \mathcal{L}$, $L$ è riducibile in tempo polinomiale a $L$.
- Cioè se risovlere $L$ è almeno tanto dificciile quanto risolvere un qualunque linguaggio in $\mathcal{L}$

Un linguaggio $L$ è $\mathcal{L}-$completo se è $\mathcal{L}$-difficile ed è in $\mathcal{L}$.

Se si trovasse un problema NP-completo che è risolvibile in tempo polinomiale da una macchina deterministica allora avremo $P=NP$, alternativamente se si trovasse un problema NP-compelsso che non è risolvibile in tempo polinomiale da macchina deterministica allora avremo $P \subset NP$


SAT è NP difficile, quindi NP-completo, quindi codificando le computazioni di una generica MT nondeterministica M (con complessità polinomiale) in SAT, in modo che M accetta una stringa $x$ se e solo se una opportuna formula $s$ è soddisfacibile

HC è anch'esso NP-difficile (e NP completo, che si dimostra riducendo SAT a HC), tanti altri problemi di interesse pratico sono NP-completi