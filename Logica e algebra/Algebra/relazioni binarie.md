---
aliases: Relazione binaria
creation date: 2023-04-26 09:03
modification date: 2023-04-26 09:03
---

Consideriamo il caso di [[Relazione]] con $n = 2$ (con arità $2$), dette **relazioni binarie**.
Se $R$ è una relazione binaria la notazione $a_{1}\ R\ a_{2}$ ha lo stesso significato della scrittura $(a_{1},a_{2}) \in R$
Nel caso in cui gli insiemi $A_{1}$ e $A_{2}$ con cui lavoriamo contengano un numero finito di elementi (che indicheremo rispettivamente con $|A_{1}|$ e $|A_{2}|$ tali quantità), una relazione $R \subseteq A_{1} \times A_{2}$ potrà essere utilmente rappresentata attraverso:

![[grafo di incidenza]]

![[matrice di incidenza]]

Osserviamo che, date le [[matrici]] di incidenza $M_{R}$ e $M_{T}$ di due relazioni binarie $R,T \subseteq A_{1} \times A_{2}$ si possono immediatamente ottenere la [[matrice di incidenza]] di $R \cap T$ (facendo il prodotto elemento per elemento di $M_{R}$ con $M_{T}$) e quella di $R \cup T$ (facendo la somma di $M_{R}$ con $M_{T}$ e ponendo uguale ad $1$ tutti gli elementi della somma maggiore di $0$).

Siano ora date le relazioni $R \subseteq A_{1} \times A_{2}$ e $T \subseteq A_{2} \times A_{3}$. Si chiama prodotto delle due relazioni la relazione $R \cdot T \subseteq A_{1} \times A_{3}$ così definita:
$$ R \cdot T = \{ (a_{1},a_{3}) | \exists a_{2} : (a_{1},a_{2}) \in R \text{ e } (a_{2},a_{3}) \in T \} $$
(per come sono definite le relazioni $R$ e $T$, $(a_{1},a_{2}) \in R$ e $(a_{2},a_{3}) \in T$ implicano $a_{1} \in A_{1}, a_{2} \in A_{2}, a_{3} \in A_{3}$) 

> [!esempio]
> Siano $A_{1} = \{ a,b,c \}, A_{2} = \{ x,y,z,w \}, A_{3} = \{ h,k \}, R = \{ (a,x),(a,w),(b,x),(b,y),(b,z) \}$
> $T = \{ (x,h),(z,h),(w,k) \}$
> Calcoliamo $R \cdot T$, si ha:
> - $(a,h) \in R \cdot T$ in quanto esiste $x$ tale che $(a,x) \in R$ e $(x,h) \in T$
> - $(a,k) \in R \cdot T$ in quanto esiste $w$ tale che $(a,w) \in R$ e $(w,k) \in T$
> - $(b,h) \in R \cdot T$ in quanto esiste $x$ tale che $(b,x) \in R$ e $(x,h) \in T$
> Usando i grafici delle due relazioni (sovrapponendo i vertici du gual nome) abbiamo il seguente diagramma
>  ```tikz
>  \begin{document}
>  \begin{tikzpicture}
>  \usetikzlibrary{arrows.meta}
>  
>  %nodes
>  \node (a) at (0,0){$\bullet$};
>  \node[left] at (a){$a$};
>  \node (b) at (0,-1){$\bullet$};
>  \node[left] at (b){$b$};
>  \node (c) at (0,-2){$\bullet$};
>  \node[left] at (c){$c$};
>  \node (x) at (3,0){$\bullet$};
>  \node[right] at (x){$x$};
>  \node (y) at (3,-1){$\bullet$};
>  \node[right] at (y){$y$};
>  \node (z) at (3,-2){$\bullet$};
>  \node[right] at (z){$z$};
>  \node (w) at (3,-3){$\bullet$};
>  \node[right] at (w){$w$};
>  \node (h) at (6,-.5){$\bullet$};
>  \node[right] at (h){$h$};
>  \node (k) at (6,-2.5){$\bullet$};
>  \node[right] at (k){$k$};
>  %arrows
>  \draw[-{Stealth}] (a.center) -- (x.center);
>  \draw[-{Stealth}] (a.center) -- (w.center);
>  \draw[-{Stealth}] (b.center) -- (x.center);
>  \draw[-{Stealth}] (b.center) -- (y.center);
>  \draw[-{Stealth}] (b.center) -- (z.center);
>  \draw[-{Stealth},dashed] (z.center) -- (h.center);
>  \draw[-{Stealth},dashed] (x.center) -- (h.center);
>  \draw[-{Stealth},dashed] (w.center) -- (k.center);
>  \end{tikzpicture}
>  \end{document}
>  ```
>
>Con le frecce continue rappresentanti la relazione $R$ e quelle tratteggiate la relazione $T$..


Risulta che un coppia di vertici appartiene alla relazione $R \cdot T$ se e solo se si può andare dal primo elemento della coppia al secondo percorrendo prima un arco a tratto continuo e poi un arco tratteggiato (relazione T).
Se consideriamo invece le matrici di incidenza abbiamo
$$
M_{R} = \begin{bmatrix}
1 & 0 & 0 & 1 \\
1 & 1 & 1 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix},\qquad M_{T} = \begin{bmatrix}
1 & 0 \\
0 & 0 \\
1 & 0 \\
0 & 1
\end{bmatrix}
$$
Si può effettuare il prodotto di matrici e si ottiene la matrice $\begin{bmatrix}1 & 1\\2 & 0\\0 & 0\end{bmatrix}$ che, con la solita convenzione di porre uguale ad $1$ tutti gli elementi maggiori di $0$, è proprio la [[matrice di incidenza]] di $R \cdot T$, infatti l'elemento di posto $(i,k)$ di questa matrice è diverso da $0$ se e solo se esiste un $j$ tale che l'elemento di posto $(i,j)$ di $M_{R}$ e l'elemento di posto $(j,k)$ di $M_{T}$ siano entrambi non nulli.
Notiamo anche che la presenza di un $t > 1$ nel osto $(i,k)$ della matrice implica che ci sono $t$ diversi elementi dell'insieme $A_{2}$ che possono servire da collegamento nel prodotto.
In questo esempio abbiamo $2$ nel posto $(2,1)$ perchè possiamo arrivare ad $h$ da $b$ attraverso due percorsi diversi $x,z$:
$$ b\ R\ x \quad\text{ e }\quad x\ T\ h\qquad,\qquad b\ R\ z\quad \text{e}\quad z\ T\ h $$

Il prodotto di rileazioni gode delle seguenti proprietà:
- associativo:
  Per ogni $R,T,S$ tali che $R \subseteq A_{1} \times A_{2}, T \subseteq A_{2} \times A_{3}, S \subseteq A_{3} \times A_{4}$ si ha
  $$ (R \cdot T) \cdot S = R \cdot (T\cdot S) $$
  Ossia che $(a_{1},a_{4}) \in (R\cdot T)\cdot S$ implica $(a_{1},a_{4} )\in R \cdot (T\cdot S)$.
  Per definizione $(a_{1},a_{4}) \in (R\cdot T)\cdot S$ implica che esiste un $a_{3}$ tale che $(a_{1},a_{3} \in R\cdot T)$ e $(a_{3},a_{4} \in S)$.
  Ancora per definizione $(a_{1},a_{3}) \in R \cdot T$ implica che esiste un $a_{2}$ tale che $(a_{1},a_{2} \in R)$ e $(a_{2},a_{3} )\in T$
  Ora $(a_{2},a_{3}) \in T$ e $(a_{3},a_{4}) \in S$ implicano $(a_{2},a_{4}) \in T \cdot S$ e questa con $(a_{1},a_{2}) \in R$ implica $(a_{1},a_{4}) \in R \cdot (T\cdot S)$
  Analogamente si dimostra che $R\cdot(T\cdot S) \subseteq (R\cdot T)\cdot S$ cioè che $(a_{1},a_{4}) \in R\cdot(T\cdot S)$ implica $(a_{1},a_{4}) \in (R\cdot T)\cdot S$
- Compatibile con l'[[inclusione]]:
  se $R \subseteq T \subseteq A_{1} \times A_{2}, S \subseteq A_{2} \times A_{3}, V \subseteq A_{4}\times A_{1}$ si ha
   $R \cdot S \subseteq T \cdot S$ e $V \cdot R \subseteq V \cdot T$.
  Da questo si deduce anche che se $R \subseteq T \subseteq A_{1} \times A_{2}, S \subseteq U \subseteq A_{2} \times A_{3}$ si ha
   $R \cdot S \subseteq T \cdot U$.
  Si osservi che se $R \subset T \subseteq A_{1} \times A_{2}, S \subseteq A_{2} \times A_{3}$ possiamo solo concludere che $R \cdot S \subseteq T \cdot S$ e non che $R \cdot S \subset T$; allo stesso modo se $R \subset T \subseteq A_{1} \times A_{2}, V \subseteq A_{4} \times A_{1}$ possiamo solo concludere che $V \cdot R \subseteq V \cdot T$ e se $R \subset T \subseteq A_{1} \times A_{2}$, $S \subset U \subseteq A_{2} \times A_{3}$ possiamo slo conludere che $R \cdot S \subseteq T \cdot U$

Il prodotto di relazioni non è commutativo, date $R \subseteq A_{1} \times A_{2}$ e $T \subseteq A_{2} \times A_{3}$, $R \cdot T$ è sempre definito mentre $T \cdot R$ è definito solo se gli insiemi $A_{1}$ e $A_{3}$ coincidono ed in tal caso $R \cdot T \subseteq A_{1} \times A_{1}$ e gli insiemi $A_{1}$ e $A_{2}$ coincidono, ma anche in questo caso generalmente $R \cdot T \neq T \cdot R$. Basta considerare $A_{1} = \{ a,b \}, R = \{ (a,b) \}, T = \{ (b,b) \}$: si ha $R \cdot T = \{ (a,b) \}$ e $T \cdot R = \varnothing$.

Possiamo quindi definire [[Relazioni permutabili]], [[relazione inversa]] e [[relazione identica]]





# Relazioni binarie su un insieme $A$

Considerando di seguito il caso particolare in cui gli insiemi $A_{1}$ e $A_{2}$ coincidono, ci occupiamo quindi delle relazioni $R \subseteq A_{I} \times A_{I}$, che chiamiamo relazioni binarie su $A_{I}$ (in seguito elimineremo l'indice $I$).
Tra le relazioni binarie su $A$ ci sono la relazione vuota, indicata con $\varnothing$, la relazione identica su $A$, indicata con $I_{A}$ e la relazione $A \times A$, detta relazione universale su $A$ ed indicata con $\omega_{A}$.
Data una relazione binaria $R$ su $A$, in virtù della definizione di prodotto e delle proprietà associative del prodotto, possiamo definire le potenze ad esponente positivo di $R$ ponendo
$$ R^m = R \cdot R \cdot \dots \cdot R\quad (m \text{ volte}) $$
Per convenzione poniamo anche $R^0 = I_{A}$
Per la proprietà associativa del prodotto e per il fatto che $I_{A} \cdot R = R \cdot I_{A} = R$ per ogni $R \subseteq A \times A$ continuano a sussistere, per esponenti interi non negativi, le proprietà formali delle potenze:
- $R^m \cdot R^n = R^{m + n} = R^n \cdot R^m$
- $(R^m)^n = R^{m\cdot n}$

Poichè abbiamo parlato di relazione inversa potrebbe venir spontaneo definire $R^m\ (m < 0)$ come $R^m = R^{-1} \cdot R^{-1} \cdot \ldots \cdot R^{-1}$ ($m$ volte), va però notato che essendo in generale $R \cdot R^{-1} \neq I_{A}$ e $R^{-1}\cdot R \neq I_{A}$, la proprietà $R^m \cdot R^n = R^n \cdot R^m = R^{m + n}$ non vale in generale per esponenti interi (cioè per esponenti anche negativi)

Le relazioni binarie su un insieme $A$ finite, possono essere facilmente rappresentate col grafo e con la matrice di incidenza (che sarà una matrice quadrata). Nel grafo di incidenza l'insieme dei vertici è $A (= A \cup A)$ e quindi tra gli archi ci possono essere degli autoaenlli basati su un vertice $a$, per indicare che $(a,a) \in R$, e delle frecce bidirezionali fra due vertici $a_{1}$ e $a_{2}$ per indicare che entrambe le coppie $(a_{1},a_{2})$ e $(a_{2},a_{1})$ stanno in $R$.
Le relazioni binarie su un insieme $A$ possono godere di interessanti proprietà, per le applicazioni successive, consideriamo le seguenti:

- **proprietà seriale**: si dice che una relazione $R$ gode della proprietà seriale (o semplicemenete è seriale) se per ogni $a \in A$ esiste (almeno) un $a_{I} \in A$ tale che $(a,a_{I}) \in R$.
  - In termini di [[grafo di incidenza]] una relazione è seriale se e solo se per ogni vertice parte almeno un arco.
  - In termini di [[matrice di incidenza]] una relazione è seriale se e solo se in ogni riga della matrice c'è almeno un $1$.
  - $I_{A}$ e $\omega_{A}$ sono relazioni seriali
- **Proprietà riflessiva**: si dice che una relazione $R$ gode della proprietà riflessiva (o semplicemente è riflessiva) se per ogni $a \in A$ si ha $(a,a) \in R$.
  Si può provare facilmente che una relazione è riflessiva se e solo se $I_{A} \subseteq R$
  - In termini di grafo di incidenza una relazione è riflessiva se e solo se da ogni vertice parte un autoanello
  - In termini di matrice di incidenza una relazione è riflessiva se e solo se la diagonale principale è tutta fatta di $1$.
  - $I_{A}$ e $\omega_{A}$ sono relazioni riflessive
- **Proprietà simmetrica**: si dice che una relazione $R$ gode della proprietà simmetrice (o che è semplicemente simmetrica) se per ogni $a_{1},a_{2} \in A, (a_{1},a_{2}) \in R$. Si può provare facilmente che una relazione è simmetrica se e solo se $R^{-1} \subseteq R$.
	- In termini di grafo di incidenza una relazione è simmetrica se e solo se ogni arco ha la doppia freccia (notare che gli autoanelli si possono sempre considerare come archi con doppia freccia)
	- In termini di matrice di incidenza una relazione è simmetrica se e solo se la matrice d'incidenza coincide con la propria trasposta (quindi è una matrice simmetrica)
	- $\varnothing,I_{A}$ e $\omega_{A}$ sono relazioni simmetriche
- **Proprietà antisimmetrica**: si dice che una relazione $R$ gode della proprietà antisimmetrica (o semplicemente è antisimmetrica) se per ogni $a_{1},a_{2} \in A$, $(a_{1},a_{2}) \in R$ implicano $a_{1} = a_{2}$. Si può facilmente provare che una relazione è antisimmetrica se e solo se $R \cap R^{-1} \subseteq I_{A}$.
	- In termini di grafo di incidenza una relazione è antisimmetrica se e solo se i soli archi con doppia freccia sono gli autoanelli
	- In termini di matrice di incidenza una relazione è antisimmetrica se e solo se la somma della matrice d'incidenza con la sua trasposta non ha alcun 2 fuori dalla diagonale principale, ion altri termini se e solo se ogni volta che nel posto $(i,k)$ con $i \neq k$ c'è $1$, l'elemento di posto $(k,i)$ è $0$.
	- $\varnothing$ e $I_{A}$ sono relazioni antisimmetriche
- **Proprietà transitiva**: Si dice che una relazione $R$ gode della proprietà transitiva (o semplicementre è transitiva) se per ogni $a_{1},a_{2},a_{3} \in A$, $(a_{1},a_{2}) \in R$ e $(a_{2},a_{3})\in R$ implicano $(a_{1},a_{3}) \in R$. Si può facilmente provare che una relazione è transitiva se e solo se ogni $R^2 \subseteq R$.
	- In termini di grafo di incidenza una relazione è transitiva se e solo se, ongi volta che si può andare da un vertice $a_{1}$ ad un vertice $a_{2}$ seguendo due frecce consecutive, c'è un arco che collega $a_{1}$ ad $a_{2}$. I
	- n termini di matrice di incidenza una relazione è transitiva se e solo se tutte le volte che sia l'elemento di posto $(i,k)$ sia l'elemnto di posto $(k,j)$ sono 1 anche l'elemento di posto $(i,j)$ è $1$.
	- $\varnothing,I_{A}$ e $\omega_{A}$ sono relazioni transitive

Conseguenze di queste proprietà:

> [!conseguenze]-
> Siano $R,T$ relazioni binarie su $A$, osserviamo che:
> - se $R$ è seriale anche ogni relazione che contiene $R$ (quindi $R \cup T$) è seriale
> - Se $R$ e $T$ sono seriali anche $R \cdot T$ è seriale
> - Anche se $R$ e $T$ sono seriali, $R \cap T$ in generale non è seriale: basta prendere $A = \{ a,b \}, R = \{ (a,b), (b,b) \}, T = \{ (a,a), (b,a) \}$
> - Anche se $R$ è seriale, $R^{-1}$ in generale non è seriale, basta prendere $A = \{ a,b \}, R = \{ (a,b),(b,b) \}$
> - Se $R$ è riflessiva anche ogni relazione che contiene $R$ (e quindi anche $R \cup T$) è riflessiva
> - Se $R$ è riflessiva anche $R^{-1}$ è riflessiva
> - Se $R$ e $T$ sono riflessive anche $R \cdot T$ è riflessiva
> - Se $R$ e $T$ sono riflessive anche $R \cap T$ è riflessiva
> - Se $R$ è simmetrica, anche $R^{-1}$ è simmetrica
> - Se $R$ e $T$ sono simmetriche anche $R \cap T$ è simmetrica
> - Se $R$ e $T$ sono simmetriche anche $R \cup T$ è simmetrica
> - Anche se $R$ e $T$ sono simmetriche $R \cdot T$ in generale non è simmetrica: basta prendere $A = \{ a,b,c \}, R = \{ (a,b),(b,a) \}, T = \{ (b,c),(c,b) \}$, $R$ e $T$ sono simmetriche, ma $R \cdot T = \{ a,c \}$ non è simmetrica
> - Se $R$ e $T$ sono simmetriche, $R \cdot T$ è simmetrica se e solo se $R$ e $T$ sono permutabili
> - Se $R$ è antisimmetrica anche ogni relazione contenuta in $R$ (e quindi anche $R \cap T$) è antisimmetrica
> - Se $R$ è antisimmetriche anche $R^{-1}$ è antisimmetrica
> - Anche se $R$ e $T$ sono antisimmetriche, $R \cup T$ in generale non è antisimmetrica, basta prendere $A = \{ a,b \}, R = \{ (a,b) \}, T = \{ (b,a) \}$
> - Anche se $R$ e $T$ sono antisimmetriche, $R \cdot T$ in generale non è antisimmetrica, basta prendere $A = \{ a,b,c \}, R = \{ (a,b),(c,b) \}, T = \{ (b,a),(b,c) \}, R$ e $T$ sono antisimmetriche ma $R \cdot T = \{ (a,a),(a,c),(c,a),(c,c) \}$ non è antisimmetrica 
> - Se $R$ è transitiva anche $R^{-1}$ è transitiva
> - Se $R$ e $T$ sono transitive anche $R \cap T$ è transitiva
> - Se $R$ e $T$ sono transitiva $R \cap T$ in generale non è transitiva, basta prendere $A = \{ a,b,c \}, R = \{ (a,b),(c,b) \}, T = \{ (b,a),(b,c) \}$, $R$ e $T$ sono antisimmetriche ma $R \cdot T = \{ (a,a),(a,c),(c,a),(c,c) \}$ non è antisimmetrica
> - Se $R$ è transitiva anche $R^{-1}$ è transitiva
> - Se $R$ e $T$ sono transitive anche $R \cap T$ è transitiva
> - Se $R$ e $T$ sono transitive $R \cup T$ in generale non è transitiva, basta prendere $A = \{ a,b,c \}, R = \{ (a,b) \}, T = \{ (b,c) \}$ 
> - Se $R$ e $T$ sono transitive $R \cdot T$ in generale non è transitiva: basta prendere $A = \{ a,b,c,d \}, R = \{ (a,b),(c,d) \}, T = \{ (b,c),(d,d) \} R$ e $T$ sono transitive ma $R \cdot T = \{ (a,c),(c,d) \}$ non è transitiva 
> - Se $R$ e $T$ sono transitive e permutabili anche $R \cdot T$ è transitiva


Riassumendo, per quanto riguarda le inclusioni le proprietà si conservano in accordo alla seguente tabella, se $T \subset R \subset S$

| $T$ |      $R$       | $S$ |
|:---:|:--------------:|:---:|
| no  |    Seriale     | Sì  |
| No  |   Riflessiva   | Sì  |
| No  |   Simmetrica   | No  |
| Sì  | Antisimmetrica | No  |
| No  |   Transitiva   | No  |
|     |                |     |

Per quanto riguarda le operazioni di intersezione, unione, prodotto, passaggio alla relazione inversa le proprietà si conservano in accordo alla seguente tabella
