---
aliases: 
creation date: 2023-03-22 14:36
modification date: 2023-03-22 14:36
---

## 1
Costruire una macchina di turing a k nastri che riconosca $\mathcal{L} = \left\{ w \in \left\{ a,b,c \right\}^* | \#_{a}(w)=\#_{b}(w) = \#_{c}(w)\right\}$
k = 3

```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\newcommand{\bc}{\cancel{b}}
\begin{tikzpicture}[every node/.style={scale=1.2},scale = 4,node distance = 6cm,on grid, auto]
\node(q0)[state,initial]{$q_0$};
\node(q1)[state, right = of q0]{$q_1$};
\node(q2)[state, below right = of q1,accepting]{$q_2$};
\path[->](q0) edge node[above] {$bc,bc,bc,bc|bc,bc,bc(s,l,l,l)$} (q1) 
		(q1) edge node {$bc,z0,z0,z0|z0,z0,z0(s,s,s,s)$} (q2)
		(q0) edge[bend right] node[below=1cm]{$bc,z0,z0,z0|z0,z0,z0,z0(s,s,s,s)$} (q2)
		(q0) edge[loop above] node[above=2cm]{$a,bc,bc,bc|x,bc,bc,(r,r,s,s)$} 
		node[above=1cm] {$b,bc,bc,bc|bc,x,bc,(r,s,r,s)$}
		node[above]{$c,bc,bc,bc|bc,bc,x,(r,s,s,r)$}
		(q0)
		(q0) edge[loop below] node[below left]{$a,z0,z0,z0|z0,z0,z0(s,r,r,r)$}
		node[below = 1cm, left]{$b,z0,z0,z0|z0,z0,z0(s,r,r,r)$}
		node[below = 1.6cm,left]{$c,z0,z0,z0|z0,z0,z0(s,r,r,r)$}(q0)
		(q1) edge[loop above] node[above]{$bc,x,x,x|x,x,x,(s,l,l,l)$} (q1);
\end{tikzpicture}
\end{document}
```






## 3
Disegno una macchina di turing a 1 nastro che ha in inuput due naturali e stampa in output il loro prodott, tutto in base 1, i naturali sono separati da un *.

```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[every node/.style={scale=1.5}, node distance = 3cm,scale = 2]
\node(q0)[state,initial]{$q_0$};
\node(q1)[state, right = of q0]{$q_1$};
\node(q2)[state,right=of q1]{$q_2$};
\node(q3)[state,right=of q2]{$q_3$};
\node(q4)[state,below = of q1,accepting]{$q_f$};
\path[->] (q0) edge node[above]{$*\_|\_(r,s)$} (q1)
	(q1) edge node[below] {$1,\_|\_,(s,l)$}(q2)
	(q2) edge node[below] {$1,z_0|z_0,(s,r)$}(q3)
	(q3) edge[bend right] node[above] {$1,\_|\_,(s,s)$}(q1)
	(q1) edge node[right] {$\_,\_|\_,(s,s)$}(q4)
	(q0) edge[bend right] node[left] {$*,z_0|z_0,(s,s)$}(q4)
	(q0) edge[loop above] node[above]{$1,z_0|z_0,(s,r)$} node[above = 1cm]{$1,\_|1,(r,r)$}(q0)
	(q2) edge[loop below] node{$1,1|1,(s,;)$} (q2)
	(q3) edge[loop below] node{$1,1|1,(s,r)$} (q3);
\end{tikzpicture}
\end{document}
```

>[!note]
>Provare a modificarla per stampare errore in caso di stringa non valida

## 4
Disegnare una macchina di turing a nastro singolo che riconosca
$$
\mathcal{L} = \left\{ a^{2^n} | n \geq 0 \right\} 
$$

>[!danger] 
>A nastro singolo diverso da a 1 nastro

```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[every node/.style={scale=1.5},node distance=3cm,auto]
\node(q0)[state,initial, initial text = {}]{$q_0$};
\node(q1)[state, right = of q0]{$q_1$};
\node(q2)[state, right = of q1]{$q_2$};
\node(q3)[state, below = of q2]{$q_3$};
\node(q4)[state, right = of q2]{$q_4$};
\node(qf)[state,below = of q1, accepting]{$q_f$};
\path[->] (q0) edge node{$a|a,(r)$} (q1)
		(q1) edge node{$a|*,(r)$} (q2)
		(q2) edge[bend left] node{$a|a,(r)$} (q3)
		(q2) edge node{$\_|\_,(l)$} (q4)
		(q1) edge node{$\_,|\_.(s)$} (qf)
		(q3) edge[bend left] node{$a|*,(r)$} (q2)
		(q4) edge[bend right=100] node{$\_|\_,(r)$}(q0)
		(q2) edge[loop above] node{$*|*,(r)$}(q2)
		(q1) edge[loop above] node{$*|*,(r)$}(q1)
		(q4) edge[loop right] node{$a|a,(l)$} node[below right]{$*|*,(l)$}(q4)
		(q3) edge[loop below] node{$*|*,(r)$}(q3);
\end{tikzpicture}
\end{document}
```

[Simulatore di macchine di turing](https://www.turingmachinesimulator.com)

## 5

Disegnare una macchina di turing a 1 nastro che implementa:
$f : \left\{ a,b \right\}^* \to \left\{ a,b \right\}^*, w \mapsto w,w^R$
(anche 0 nastri)

---
Vediamo un po' di non determinismo
## 6
$\mathcal{L} = \left( ab + aba \right)^*$

Esempi di stringhe in $\mathcal{L}$ sono $\varepsilon, ab, aba, abab, ababa.abaab,\dots$

```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[every node/.style={scale=1.2}, node distance = 4cm,auto]
\node(1)[state,initial,accepting]{$1$};
\node(2)[state, right = of 1]{$2$};
\node(3)[state, below right = of 1]{$3$};
\node(4)[state, left = of 3]{$4$};
\node(f)[state, below right = of 3]{$P$};
\path[->] (1) edge[bend left] node{a} (2)
		(1) edge[bend left] node{a} (3)
		(1) edge[bend left=50,thick] node{a} (f)
		(2) edge[bend left] node{b} (1)
		(2) edge[bend left] node{a} (f)
		(3) edge[bend left] node{b} (4)
		(3) edge[bend right] node{a} (f)
		(4) edge[bend left] node{a}(1)
		(4) edge[bend right] node{b} (f)
		(f) edge[loop below]node{a,b}(f);
\end{tikzpicture}
\end{document}
```
è non deterministico, la stessa stringa puó portarmi in piú posti, consideriamo come accettata una stringa che abbia almeno un percorso che finisce su uno stato di accettazione. P è il pozzo

```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[auto]
\node(1)[state,initial]{$\{1\}$};
\node(23)[state,right = of 1]{$\{2,3\}$};
\node(14)[state,right = of 23]{$\{1,4\}$};
\node(123)[state, right = of 14]{$\{1,2,3\}$};
\node(23P)[state,right = of 123]{$\{2,3,P\}$};
\node(14p)[state, below = of 123]{$\{1,4,P\}$};
\node(123p)[state,below = of 14p]{$\{1,2,3,P\}$};
\node(P)[state,below = of 1]{$\{P\}$};
\path[->] (1) edge node{a} (23)
		(23) edge node{b} (14)
		(14) edge node {a} (123)
		(123) edge node{a} (23P)
		(23P) edge node{a} (P)
		(1) edge node{b} (P)
		(23) edge node{a} (P)
		(14) edge node{b} (P)
		(123) edge node{b}(14p)
		(14p) edge node{b}(P)
		(14p) edge node{a}(123p)
		(123p) edge[bend left] node{b} (14p)
		(123p) edge node {a}(23P)
		;
\end{tikzpicture}
\end{document}
```
## 7
$\mathcal{L}1 = \left\{ a^nb^n | n \geq 1 \right\} \cup \left\{ a^n b^{2n} | n \geq 1\right\}$ -> APND
$\mathcal{L}2 = \left\{ *a^nb^n | n \geq 1\right\} \cup \left\{ \$ a^nb^{2n}| n \geq 1 \right\}$ -> APD
$\mathcal{L}_{3} = \left\{ a^n*b^n | n \geq 1 \right\} \cup \left\{ a^n\$b^2n |n \geq 1 \right\}$ -> APD
$\mathcal{L}_{4} = \left\{ a^nb^n* | n \geq 1 \right\} \cup \left\{ a^nb^{2n}\$ | n \geq 1 \right\}$ -> APND

Questi linguaggi NON sono riconoscibili dagli automi a pila, il primo essendo la memoria distruttiva non puó riconoscere entrambi i tipi di linguaggi, col non determinismo si può ovviare al problema


```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}
\node(q0)[state,initial]{$q_0$};
\node(q1)[state, above right = of q0]{$a^nb^n$};
\node(q2)[state, below right= of q0]{$a^{n}b^{2n}$};
\end{tikzpicture}
\end{document}
```

....

## 8
$\mathcal{L}_{1} = \left\{ a^ib^ic^* i \geq 0 \right\} \cap \left\{ a^*b^j c^j |j \geq 0 \right\} = \left\{ a^nb^nc^n | n \geq 0 \right\}$
non è riconoscibile da un automa a pila non determinitico, serve la macchina di turing

Se $\mathcal{L}$ è regolare e $\mathcal{M}$ riconosciuto da un Automa a pila (non deterministico) come è fatto $\mathcal{L} \cap \mathcal{M}$?
Basta un automa a pila (eventualmente non deterministico)


Consideriamo $\mathcal{L} = a^+(bb)^+$ e $M = \left\{ a^nb^{3n} | n \geq 0 \right\}$

L'intersezione $\mathcal{L} \cap M$è 
$$
\{a^{2n}b^{6n} | n > 0
\}$$
simulando in parallelo entrambe le transizioni dei due rispettivi automi otteniamo un automa non deterministico a pila che accetta questo linguaggio

-----


## 9
$\mathcal{L} = \{ w.w | w \in \{ a,b \}^* \}$ non si puó con un APND, peró $\mathcal{L}^C$ è riconosciuto da un APND

abbaba | abaaba

| ab       | b   | abaab      | a   | aba |
| -------- | --- | -------------- | --- | --- |
| $\alpha$ | $b$ | $\beta$   | a   | $\gamma$    | 

con $|\alpha| + |\gamma| = |\beta|$


```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[node distance = 2cm,auto]

%States
\node[state, initial] (q0) at (0,0){$q0$};
\node[state, right = of q0] (q3){$q3$};
\node[state, below = of q0] (q1){$q1$};
\node[state, right = of q1, accepting] (q2){$q2$};
\node[state, above right= of q3] (q4){$q4$};
\node[state, right = of q4] (q5){$q5$};
\node[state, below right = of q5] (q6){$q6$};
\node[state, right = of q6,accepting] (q7){$q7$};
\node[state, below right = of q3] (q8){$q8$};
\node[state, right = of q8] (q9){$q9$};

%Path
\path[->] (q0) edge node[]{$\varepsilon,Z0|Z0$} (q1) 
			   edge node[]{$\varepsilon,Z0|Z0$}(q3)
		  (q1) edge[bend left] node[]{$a,Z0|Z0$} node[below]{$b,Z0|Z0$} (q2)
		  (q2) edge[bend left] node[]{$a,Z0|Z0$} node[below = .5cm]{$b,Z0|Z0$} (q1)
		  (q3) edge node[below right]{$a,Z0|Z0$} node[below=5mm]{$a,X|X$}(q4)
			   edge node[]{$b,Z0|Z0$} node[below]{$b,X|X$}(q8)
			   edge[loop above] node[]{$b,X|XX$} node[above = 5mm]{$a,X|XX$} node[above = 10mm]{$b,Z0|Z0X$} node[above = 15mm]{$a,Z0|Z0X$} (q3)
		  (q4) edge node[]{$\varepsilon,Z0|Z0$}(q5)
			   edge[loop above]node[]{$b,X|\varepsilon$} node[above = 5mm]{$a,X|\varepsilon$} (q4)
		  (q5) edge node[below left]{$a,Z0|Z0$}node[below = 5mm]{$b,X|X$}  (q6)
			   edge[loop above]node[]{$a,Z0|Z0X$} node[above=5mm]{$b,Z0|Z0X$} node[above=10mm]{$a,X|XX$} node[above=15mm]{$b,X|XX$}(q5)
		  (q6) edge node[]{$\varepsilon,Z0|Z0$}(q7)
		       edge[loop above] node[]{$b,X|\varepsilon$} node[above=5mm]{$a,X|\varepsilon$}(q6)
		  (q8) edge node[]{$\varepsilon,Z0|Z0$} (q9)
		  (q8) edge[loop below] node[]{$a,X|\varepsilon$} node[below = 5mm]{$b,X|\varepsilon$} (q8)
		  (q9) edge node[]{$a,Z0|Z0$} node[above=5mm]{$a,X|X$} (q6)
		       edge[loop below] node[]{$a,Z0|Z0X$} node[below=5mm]{$b,Z0|Z0X$} node[below=10mm]{$a,X|XX$} node[below=15mm]{$b,X|XX$}(q9)
		  ;
\end{tikzpicture}
\end{document}
```

# GRAMMATICHE
## 10 
Sia $A$
```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[node distance = 2cm,auto]
\node[state,initial] (q0) at (0,0){$q0$};
\node[state, right = of q0, accepting] (q1){$q1$};
\node[state, right = of q1] (q2){$q2$};
\node[state, right = of q2,accepting] (q3){$q3$};

\path[-{Stealth}] (q0) edge[bend left] node[]{$a$} (q1)
      (q1) edge[bend left] node[]{$b$} (q0)
           edge node[]{$a$} (q2)
      (q2) edge[bend left] node[]{$b$} (q3)
      (q3) edge[bend left] node[]{$a$} (q2);
\end{tikzpicture}
\end{document}
```
Il linguaggio interpretato dall'automa è
$$
\mathcal{L}(A) = (\text{ab})^*\text{a}(\text{ab})^*
$$
Scriviamo una grammatica regolare

$V_{N} = \left\{ S,Q_{1},Q_{2},Q_{3} \right\}\quad V_{t} = \left\{ a,b \right\}$

P:
$S \to aQ_{1}$
$Q_{1} \to aQ_{2} | bS$
$Q_{2} \to bQ_{3}$
$Q_{3} \to aQ_{2}$

Cosi è incompleto, vengono aggiunti caratteri non terminali ad ogni passaggio, quindi non genera niente, queso perchè non abbiamo messo i casi terminali:

$S \to aQ_{1} | a$
$Q_{1} \to aQ_{2} | bS$
$Q_{2} \to bQ_{3} |b$
$Q_{3} \to aQ_{2}$


## 11
Sia $G = (V_{n} = \left\{ S,A,B,C \right\}, V_{T} = \left\{ a,b \right\}, P, S)$

Produzioni P:
$S \to a | aS | aC$
$A \to bC | bB$
$B \to aC | aB | bS | bA$
$C \to a | aB$

Se i non terminali diventavano stati gli stati saranno i non terminali, lo stato iniziale è l'assioma

```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[node distance = 2cm,auto]
\node[state, initial](S) at (0,0){$S$};
\node[state, right = of S] (B){$B$};
\node[state, below = of S] (C){$C$};
\node[state, below = of B] (A){$A$};
\node[state, below left = of S, accepting](F){$F$};

\path[-{Stealth}] (S) edge[loop above] node{$a$} (S)
				      edge[bend right] node{$a$} (C)
				      edge[bend right] node{$a$} (F)
				  (B) edge[bend right] node{$a$} (C)
				      edge[bend right] node{$a$} (A)
				      edge[loop above] node{$a$} (A)
				      edge[] node{$b$} (S)
				  (A) edge[] node{$c$} (C)
				      edge[bend right] node{$b$}(B)
				  (C) edge[bend right] node{$a$}(B)
				      edge[bend left] node{$a$}(F);
\end{tikzpicture}
\end{document}
```

>[!oss]
>Per accettare dobbiamo aggiungere uno stato dove mandare S e C quando hanno terminato, lo manteniamo quindi non deterministico.


## 12
Sia $\mathcal{L} = \{ a^nb^nc^n, n > 0 \}$

C,F,
$S \to aS_{1}a$
$S_{1} \to aS_{1}a | B$
$B \to bB | b$

Esiste una grammatica per $\mathcal{L}$ di tipo lineare, cioè con produzioni del tipo $A \to cB | Dc | f$?

$A \to bCd$
è uguale a
$A \to bC$
$\hat{C} \to Cd$

ma la seconda è lineare, quindi piú potente.

Questo tipo di grammatiche sono gli automi a pila one turn, ossia che la pila cresce quanto vuole, ma fatta la prima pop non si possono fare piú push


## 13
Sia $G$ la grammatica
$V_{N} = \{ S,X \}$ e $V_{T} = \{ a,b \}$

Produzioni:
$S \to Sa | aS | bX | b$
$SX \to XXSS | S$ <- questa produzione indica tipo 0
$XS \to abba$

- Che tipo di grammatica è? non ristretta
- Qual è un automa a potenza minimo che riconosce $\mathcal{L}(G)$?
	- Non è la macchina di Turing, guardiamo il punto 3
- Chi è $\mathcal{L}(G)$
  -  Iniziamo osservando che le ultime due produzioni, e anche la terza di $S$ sono irraggiungibili. Quindi il linguaggio generato è $a^*ba^*$, riconoscibile per il pumping lemma anche da un FSA, rispondendo alla domanda sopra.

Una grammatica regolare che generi lo stesso linguaggio?
Per trovarla costruiamo l'automa a stati finiti

```tikz
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[auto, node distance = 4cm,scale = 2, every node/.style={scale = 1.5}]
\node[state,initial](S) at (0,0){$S$};
\node[state, right = of S,accepting] (A){$A$};
\path[->] (S) edge[loop above] node{a} (S)
			  edge[]node{b} (A)
		  (A) edge[loop above]node{a} (A);
\end{tikzpicture}
\end{document}
```

## 14
Scrivere una grammatica $G$ a potenza minima che generi le espressioni algebriche ben parentesizzate contenenti $+, *, -$. Le costanti $0$ e $1$ e variabili $x$ e $y$

$$
(x)\qquad (x + 1) \qquad (((x + 1) * 1) + 0)\quad (((x * y) + (y + 1))*(1 + 0))
$$
Osservando che se moltiplico o sommo due coppie di parentesi già ben parentesizzate e le chiudo in un ulteriore parentesi ottengo un espressione ben parentesizzata, scriviamo le produzioni:

$S \to 0 | 1 | x | y | (S + S) | (S * S)$

Si tratta di ormule ben formate 

### EXTRA
Adattiamolo ai linguaggi ben parentesizztte vuote (o linguaggi di Dyck)
$S \to SS | (S)| ()$

## 15
[[Grammatiche|Grammatica]] a potenza minima per
$$\mathcal{L} = \left\{ ab^{n_{1}}ab^{n_{2}}\dots ab^k| k \geq 2, \forall 1 \leq i \leq k : n_{1} > 0, \exists i,j \ tc\ 1 \leq i < j \leq k \quad e\ n_{i} = n_{j}\right\} $$

ab abb abbb -> non appartiene al linguaggio
ab abb abbb abb -> (diviso per leggibilià) appartiene al linguaggio
ab abb abbb abb ab  -> appartiene al linguaggio
abab -> appartiene al linguaggio

noi vogliamo ottenere
$S \to X ab^n Y ab^n Z$
Con $X,Y,Z$ roba che attraverso produzioni diventerà $(ab^+)+$

$S \longrightarrow \underbrace{ X }_{ A } \underbrace{ ab^n Y ab^n }_{ B } \underbrace{ Z }_{ A }$


Proviamo a scrivere le produzioni:
$S \to B | AB | BA | ABA$
$B \to aY$
$Y \to bYb | bCb$
$C \to a|ADa$
$D \to bD | b$

grammatica monotona di tipo due, autoa a pila deterministico

## 16
Grammatica a potenza minima per
$\mathcal{L}_{1} = \{ a^n w | w \in \{ b,c \}^*, \#_{b}(w) = \#_{c}(w) = n, n \geq 1 \}$ ?
$\mathcal{L}_{2} = \{ "\qquad ", \#_{b}(w) + \#_{c}(w) = n, n \geq 1 \}$ anche per questo basta un APD, ma un segno in pila
$\mathcal{L}_{3} = \{ "\qquad", \#_{b}(w) + \#_{c}(w) = 2n, n \geq 1 \}$ per questo basta un APD (due segni in pila ogni A, rimosso letta ogni B e C)

$\mathcal{L}_{2} : S \to aSb | aSc | ab | ac$

$\mathcal{L}_{3} : S \to aSXX | aXX$
$X \to b|c$

Per il linguaggio 1 è simile a $a^nb^nc^n$, solo che $b$ e $c$ possono essere in qualsiasi posizione dopo le n a.

1. Controlla che la struttura sia corretta, tutte $a$ seguite da $b$ e $c$
2. Leggiamo la prima $a$, facciamoci un segno cerchiamo una $b$ o una $c$, se la troviamo facciamo un segno, cerchiamo l'altra, se la troviamo facciamo un segno. Se non soddisfiamo uno di questi requisiti non accettiamo
3. Se avanzano b o c non segnate non accettiamo

Produzioni:
$S \to aSBC | aBC$ 
$BC \to CB$
$CB \to BC$
$B \to b$
$C \to c$

Commutativa

## 17
$\mathcal{L} = \{ a^{2^n} | n \geq 0 \}$

basterebbe una grammatica di tipo 1, infatti basta una MT a nastro singolo

...
# Complessità

## 18
Descrivere una MT a nastro singolo che dice se un numero è primo o no. Analizzarne la complessità.

```clike
n = input();
per ogni 1 < i = floor(sqrt(n))
{
	if n % i = 0
		stampo no;
	if n % i != 0
		i++;
}
```

L'input lo codifico in base 1
- carico due simboli in memoria
- leggo l'input e ogni volta mi sposto in memoria su uno dei due simboli
- Se termino l'input sul secondo aggiungo un singolo in memoria e ripeto

Stampo si solo se ho piú simboli del numero in input.

Quante operazioni?
$n(n - 2) + \cost$
complessità quadratica, non sembra tanto grande, ma perchè stiamo lavorando in base uno. In base due si ha, al posto di $n$, $2^n$.

$f : \mathbb{N} \to \mathbb{R} \circ (\mathbb{N})$
$f(n)$ è il tempo/spazio richiesto nel caso pessimo da un input di Lunghezza (binaria) n

esempio
$f(n) = n(n-1)+3$
Non siamo interessati a valori specifici di $n$, ma a valori "limite": introduciamo quindi [[O grande]], [[Theta grande]], [[Omega grande]].Nell'esempio precedente

$$ f(n) = n(n-1)+3 = \Theta(n^2) $$

$3n = O(n)$
$n^4 \neq O(n^3)$
$\forall \varepsilon > 0: n \log(n) = O(n^{1 + \varepsilon})$
$$\lim_{ n \to \infty } \frac{n\log(n)}{n^{1 + \varepsilon}} = \lim_{  n \to \infty } \log \frac{n}{n} = 0$$
## 19
Confrontare
#### 1. $f(n) = \log_{2}(n)\quad g(n) = \log_{3}(n)$
   $$ \log_{3}(n) = O(\log_{2}(n)) $$
Theta? $\log_{3}(n) = \dfrac{\log_{2}(n)}{\log_{2}(3)} \implies \frac{\lim_{ n \to \infty }f(n)}{g(n)} = \log_{2}(3) \implies \log_{3}(n) = \Theta(\log_{2}(n))$
La base non cambia l'efficenza del logaritmo!!

#### 2. $f(n) = 2^n \quad g(n) = e^n$
$f(n) = O(g(n))$

È vero che $g(n) = O(f(n))?$
$\lim_{ n \to \infty } \dfrac{g(n)}{f(n)} = \lim_{ n \to \infty }\left( \frac{e}{2} \right)^n = +\infty$
Non vale la stessa cosa che nei logaritmi, la base importa per gli esponenziali

#### 3. $f(n) = n^n\qquad g(n) = e^n$
$g$ maggiore per tutti gli $n$ maggiori di $2$, quindi:
$g(n) = O(n^n)$
$\lim_{ n \to \infty } \frac{n^n}{e^n} = +\infty$

Ma $g(n) \neq \theta (f(n))$

#### 4. $f(n) = n!\qquad g(n) = e^n$
$$n! > \left(\frac{n}{2}\right)^{n/2}$$
#### 5. $f(n) = n\log(n)\quad g(n) = \log(n!)$
$$g(n) = \log(n!) < \log(n^n) = n \log(n)$$
quindi
$$ n! > \left( \frac{n}{2} \right)^{n/2}\quad \log(n!) > \frac{1}{2}n\log\left( \frac{n}{2} \right) =\frac{1}{2}n\log(n) -\frac{1}{2}n\log(2) $$
quindi
$\log(n!) = \Theta(n \log(n))$

#### 6. $f(n)=n^{10}2^n\qquad g(n)= \left( \dfrac{5}{2} \right)^n$
$$ \lim_{ n \to \infty } \frac{n^{10}2^n}{(5/ 2)^n}= \lim_{ _n  \to \infty } \frac{n^{10}}{\left( \frac{5}{4} \right)^n}=0  $$

## Complessità in una macchina di Turing

- Se in una mossa sposto mille nastri il tempo è uguale a spostarne uno in una mossa
- In una macchina a nastro singolo, qualsiasi porzione di input venga letta, si considera la memoria occupata totale da esso
- In una macchina a k-nastri invece è possibile considerarla o meno

consideriamo $\{ a^{(2^n)} | n \geq 0 \}$
Se l'input $w$ è tc $|w| = m$.

La macchina di Turing l'abbiamo già vista in passato, è composta da una fase di conversione in base due e da una fase di controllo. 

In memoria avremo la codifica binaria, ossia $S(m) = \Theta(\log_{2}(n))$
Consideriamo invece il tempo, piú complesso, dividendo le due fasi. Il peggior caso del controllo è dover leggerlo tutto, ossia $\Theta(\log(n))$. Per la prima fase invece facciamo sicuramente tre tansizioni fisse, piú un numero di autoanelli per i riporti.

All'inizio un riporto, poi tra due e 8 due riporti, poi 3 riporti... quindi:
$$ T(m) \leq \log(m) + \sum_{i = 1}^m (3 + 2\log(i)) = \log(m) + 3m +2\log\left( \prod_{i=1}^m i \right)=\log(m) + 3m + 2\log(m!) $$
$$ = O(m\log(m)) $$
con $\log(i)$ numero memorizzato in memoria.
$|n| = 16 \to 85 \approx c\cdot16 \cdot \log_{2}(16)=64 \implies c \approx 0.80$
$64 \to 327 \approx c \cdot 64 \cdot 8 \implies c \approx 0.64$
$256 \to 1289  \approx c \cdot 256 \cdot 16 \implies c \approx 0.31$
$1024 \to 5131 \approx c \cdot 1024 \cdot 64 \implies c \approx$ 

Quindi ricapitolando
$S(m) = \Theta(\log(m))$
$T(m) = O(m\log(m))$

Per $T(m)$ ho $\leq$, quindi non posso sapere se è anche Theta grande, abbiamo approssimato di fare sempre il massimo numero di riporti (uguali al numeri di cifre). 
In realtà metà delle volte modifico solo un bit e non tutto il numero (quando il contatore termina con ..0).
Metà della metà delle volte modifico solo due bit (...01).
Metà della metà della metà delle volte modifico solo due bit (...011).
Modifico tutti gli $m$ bit solo $\dfrac{1}{\log_{2}(m)}$ volte
Il costo di tutti i riporti è:
$$\begin{align}
 &\frac{m}{2} \cdot 1 + \frac{m}{2^2} \cdot 2 + \frac{m}{2^3}*3 + \dots + \frac{m}{2^{\log_{2}m}}\cdot \log_{2}(m) = \\ \\
&\sum_{i = 1}^{\log_{2}(m)} \frac{m}{2^i}\cdot i = m \sum_{i =1}^{\log_{2}(m)} \frac{i}{2^i} \leq m \cdot \int _{1}^\infty \frac{\!x}{2^x} \, \mathrm{d}x \leq 2 \cdot m = \Theta(m)

\end{align} $$
## 20
Progettare una MT a nastro singolo che riconosca $\{ a^nb^nc^n | n > 0 \}$ nel tempo (asintotico) piú piccolo che si riesca.

aaabbbccc -> a'aab'bbc'cc -> a'a'a'b'b'b'c'c'c' -> accettato

Prima di tutto scansiono da sinistra a destra e viceversa per un analisi "strutturale". 
$$\underbrace{ 2m + \dfrac{2}{3}2m + 1 + \left( \frac{2}{3}m + 2 + 1 \right) +  }_{ \displaystyle\frac{1}{2}m }$$
$\displaystyle= 2m + \frac{m}{3}\left( \frac{4}{3}m + 1 \right) = \Theta(m^2)$
Possiamo fare di meglio
Segnamo un carattere e saltiamo quello successivo, se finiamo sempre su un simbolo segnato allora ripetiamo coi caratteri non segnati fino a quando non li abbiamo segnati tutti
aaaaabbbbbccccc -> a'aa'aa\*b'bb'bb\*c'cc'cc\* -> a'a'a'aa\*b'b'b'bb\*c'c'c'cc\* -> a'a'a'a'a\*b'b'b'b'b\*c'c'c'c'c\*

Un FSA ha complessità sempre lineare, ci metterà sempre $n + 1$ mosse ad accettare una stringa di lunghezza $n$.
Anche la memoria è costante

Un automa a pila ha complessità spaziale costante per il numero di transizioni effettuate (complessità temporale).
Se non ci sono epsilon mosse numero di transizioni, se ci sono epsilon mosse devono essere finite (cambiano o gli stati o la cima della pila, altrmenti non avremmo un automa a pila deterministico). Quindi entrambe le complessità sono lineari per costante

## 21
Complessità di
```cpp
int fatt(int n){
	if (n <= 0) return 1;
	return n * fatt(n - 1);
}
```
Non ha cicli evidenti, il ciclo è nella ricorsione, si potrebbe trasformare ma il problema è sempre farlo mantenendo la complessità uguale, discordiamoci quindi dal numero di istruzioni per la copmlessità.

Se $n > 0$, $T(n) = 2 + T(n - 1)$
Se $n \leq 0, T(n) = 2$

$$T(n) = 2 + T(n-1) = 2 + 2 + T(n - 2) = \underbrace{ 2 + \dots + 2 }_{ n } + T(0) = 2n+2$$
Tuttavia per risolvere una ricorrenza non siamo interessati alla soluzione esatta, siamo interessati a risolvere l'ordine di grandezza della ricorsione.

## Ricerca binaria
$$\begin{cases}
t(n) = t\left( \frac{n}{2} \right) + c \\
t(1) = d
\end{cases}$$
con $c,d$ costanti positive derivate dalla divisione del problema
$T(n) = \Theta(\log n)$

>[!oss]
>Ovviamente non conviene ordinare un array ($n\log(n)$) per poi applicare una ricerca binaria (complessità $\log(n)$), a meno che non sia un array che riceve molte ricerce, conviene direttamente cercare l'elemento (complessità $n$).

---
## prodotto da due naturali in base 2
$$ \begin{array}{|}
1 & . & . & . & 0 & \cdot \\
1 & . & . & . & 1 \\
\hline . & . & . & . & .
\end{array} $$
$n$ bit
$\Theta(n^2)$, si può fare meglio di così? Forse!

| bit | n / 2 | n / 2 |
| --- | ----- | ----- |
| **x**   | a     | b     |
| **y**   | c     | d      |
È un algoritmo dividi et impera!
$$ \begin{align} 
x\cdot y = (2^{n/2}a + b) \cdot (2^{n / 2} + d)= 2^n a \cdot c + 2^{n / 2} (a \cdot d + b \cdot c) + bd
\end{align} $$
Compito: scrivere la procedura ricorsiva (quando a,b,c,d singoli bit)
$$T(n)=4 \cdot T(n / 2) + \Theta(n)$$
con $\Theta(n)$ costo della divisione del problema:
 Se $n = 2^n$
$$ \begin{align}
 T(n) &= 4T\left( \frac{n}{2}  \right) + \Theta(n) = 4\left( T\left( \frac{n}{4} \right)+ \Theta\left( \frac{n}{2} \right) \right) + \Theta(n) = \\
&= 4 \left(  4 \left( T \left( \frac{n}{8} \right) \right)  + \Theta\left( \frac{n}{4} \right) \right) + \Theta\left( \frac{n}{2}  \right) + \Theta(n) \\
&= 4 \cdot 4 \cdot \dots \cdot 4 = 2^{\log_{2}(n)} \cdot 2^{\log_{2}(n)} = n \cdot n = n^2
\end{align} $$


>[!teorema]
>Data $T(n) = aT\left( \frac{n}{b} \right) + \Theta(n^k \log^h(n))$ si ha
>1. Se $\log_{b}(a) > k : T(n) = \Theta(n^{\log_{b}(a)})$
>2. Se $\log_{b}(a) = k : T(n) = \Theta(n^k\log^{h+1}(n))$
>3. Se $\log_{b}(a) <k : T(n) = \Theta(n^k \log^h(n))$

In questo caso $a=4, b = 2, k = 1, h = 0$

$\log_{b}(a) = \log_{2}(4) = 2 > 1 \implies \Theta(n^{\log_{b} a}) \implies \Theta(n^2)$ uguale al metodo in colonna (o peggio, infatti nel $\Theta(n)$ della suddivisione contiene tante operazioni), per migliorare la situazione possiamo provare o ad aumentare $b$ (aumentare la divisione) o a diminuire $a$ (eliminare ricorsione), la prima sembrerebbe intuitivamente non funzionare (diventa piú complessa l'operazione di divisione), proviamo quindi con la seconda strada, facciamo tre prodotti.

$A_{1} = ac$
$A_{2} = b \cdot d$
$m = (a + b)\cdot(c + d)$
$A_{3} = m - (A_{1} + A_{2}) = ac + ad + bc + bd + -ac - bd$
$x \cdot y = 2^n a \cdot c + 2^{n/2} (a d + b c) + bd$

Abbiamo quindi $a = 3$, $b = 2$, $k = 1$, $h = 0 \implies \log_{2}3$ quindi per il teorema precedente siamo acora nel caso 1 e abbiamo
$$ T(n) = \Theta(n^{\log_{2}(3)})\approx O(n^{1,59}) $$
Quindi si può scendere sotto $n^2$ !
Questo è l'[[algoritmo di Karatsuba]]
Ma non finisce qui, si può applicare anche l'altra possiblità, aumentare il numero di divisioni.
L'algoritmo migliore trovato fino ad ore è un algoritmo galattico ($n \geq 10^{40'000}$ cifre) che arriva a $\Theta(n\log n)$.

## Prodotto tra matrici $n\times n$
Abbiamo $n^2$ coefficienti, ognuno che si calcola con $n$ prodotti (e $n$ somme). Quindi $n^3$, ma è un problema ancora aperto se esistano algoritmi migliori:
[[algoritmo di Strassen]]

## Statistiche d'ordine da array

A : \[5 3 4 1 9 15\]
min': 5 3 3 1 1  1 
min'': inf 5 4 3 3 3

La complessità è $\Theta(2n) = \Theta(n)$, se cercassi solo il minimo sarebbe $\Theta(n)$, se cercassi i primi 3 sarebbe $\Theta(3n)$

E per il $k$-esimo? 
Selezione (A, n, k): *cerco il $k$-esimo piú piccolo*
- Se $n < 50$ 
	- ordina A e stampa A\[k\] (50 arbitrario)
- Altrimenti
	- dividi A in $\lceil \frac{n}{5} \rceil$ cinquine
	- ordina ogni cinquina
	- sia $M$ l'insieme delle mediane delle cinquine
	- Costruisci 
		- $A_{1} = \{ x \in A | x < m \}$
		- $A_{2} = \{ x \in A | x = m \}$
		- $A_{3} = \{ x \in A | x > m \}$
	- Se $|A_{1}| \geq k$
		- return selezione($A_{1},|A_{1}|,k$)
	- Altrimenti se $|A_{1}| + |A_{2}| \geq k$
		- return $m$
	- Altrimenti return selezione($A_3, |A_{3}|, k - |A_{1}|-|A_{2}|$)

A = \[3 7 12 1 2 | 5 4 7 3 1 \]
   = \[1 2 **3** 7 12 | 1 3 **4** 5 7\]
$$ A = \begin{bmatrix}
3 & 7 & 73 & 1 & 2 \\
5 & 15 & 74 & 2 & 3 \\
\rowcolor{red}9 & 18 & 75 & 3 & 4 \\
21 & 42 & 76 & 4 & 5 \\
37 & 93 & 77 & 8 & 5
\end{bmatrix} $$
In rosso le mediane, la cui mediana è a sua volta 9
$$ A = \begin{bmatrix}
\orc1 &\orc 2 &\orc 3 & 7 & 73 \\
\orc2 & 3\orc & \orc5 & 15 & 74 \\
\orc3 &\orc 4 & \grc9 & \vrc18 &\vrc 75 \\
4 & 5 & \vrc21 &\vrc 42\vrc & \vrc76 \\
8 & 5 &\vrc  37\vrc & \vrc43 &\vrc 77
\end{bmatrix} $$
In arancione A1 < 9 per ogni elemento
in viola A3 > 9 per ogni elemento
i restani boh.

Il primo e terzo if $\leq T\left( \frac{3}{4} n \right)$, l'altro è un $\Theta(1)$.

$$ \begin{cases}
T(n) \leq T\left( \frac{n}{5} \right) + T\left( \frac{3}{4}n \right) + \Theta(n), &n \geq 50 \\
T(n) = \cost, &n < 50
\end{cases} $$
Sicuramente $T(n) = \Omega(n)$ tempo per le suddivisioni del problema.
Dimostriamo adesso che $T(n) = O(n)$ per induzione su $n$, 
 per $n < 50$ ok
 per $n \geq 50$ supponiamo che $T(n) \leq 20cn$ con $c$ costante. (20 scelto per comodità) e sia $\Theta(n)$ nella riccorenza $\leq cn$

$$\begin{align}
T(n + 1) &\leq T\left( \frac{n}{5} \right)+T\left( \frac{3}{4} (n + 1) \right) + cn \leq \frac{1}{5}20 cn + \frac{3}{4}cn + cn \\
&=4cn + 15cn + cn = 20cn
\end{align}$$

Si potrebbe risolvere col Teorema di Akra-bazzi

## Somma costante
Descrivere un algoritmo efficente che dato A array di $n$ elementi, stampi si se si può partizionare A in coppie a somma costante, no altrimenti

```tikz
\begin{document}
\begin{tikzpicture}[every node/.style={scale = 1.5}]
\node (A0) at (0,0) {1};
\node[right of = A0] (A1) {3};
\node[right of = A1] (A2) {-2};
\node[right of = A2] (A3) {5};
\node[right of = A3] (A4) {7};
\node[right of = A4] (A5) {3};
\node[right of = A5] (A6) {8};
\node[right of = A6] (A7) {-1};

\draw[bend left] (A0) edge (A3);
\draw[bend right] (A1) edge (A5);
\draw[bend right] (A2) edge (A6);
\draw[bend left] (A4) edge (A7);
\end{tikzpicture}
\end{document}
```

- Se n dispari stampo no
- Se no ordina A <- $O(n\log n)$
- Se si può fare la partizione è (A\[1\],A\[n\]), (A\[2\], A\[n-1\]),...,(A\[n/2\],A\[n/2\]) <- $\Theta(n)$

##
Descrivere un algoritmo efficiente che dato A array di $n$ interi e $d$ intero stampi si se esistono $1 \leq i < j \leq n$ tale che $A[i] + A[j] = d$ a somma costante, no alt.