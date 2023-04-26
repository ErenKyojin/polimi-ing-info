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
Se $R \cdot T = T \cdot R$ le relazioni $T$ ed $R$ si dicono **PERMUTABILI**.

Si dice **Relazione inversa** di $R \subseteq A_{1} \times A_{2}$ la relazione $R^{-1} \subseteq A_{2} \times A_{1}$ definita da $R^{-1} = \{ (a_{2},a_{1}) | (a_{1},a_{2}) \in R \}$
Nel caso in cui $A_{1},A_{2}$ siano finiti, il [[grafo di incidenza]] di $R^{-1}$ si ottiene da quello di $R$ invertendo la direzione delle frecce, la matrice di incidenza di $R^{-1}$ è la [[trasposizione]] di quella di $R$

Si dice **Relazione identica** su $A_{1}$ la relazione $I_{A_{1}} = \{ (a_{1},a_{1}) | a_{1} \in A_{1} \}$, osserviamo che si ha
$$ I_{A_{1}} \cdot R = R\qquad \text{ per ogni } $$