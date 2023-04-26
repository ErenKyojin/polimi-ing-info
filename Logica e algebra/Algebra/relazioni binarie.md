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

Osserviamo che, date le matrici di incidenza $M_{R}$ e $M_{T}$ di due relazioni binarie $R,T \subseteq A_{1} \times A_{2}$ si possono immediatamente ottenere la matrice di incidenza di $R \cap T$ (facendo il prodotto elemento per elemento di $M_{R}$ con $M_{T}$) e quella di $R \cup T$ (facendo la somma di $M_{R}$ con $M_{T}$ e ponendo uguale ad $1$ tutti gli elementi della somma maggiore di $0$).

Siano ora date le relazioni $R \subseteq A_{1} \times A_{2}$ e $T \subseteq A_{2} \times A_{3}$. Si chiama prodotto delle due relazioni la relazione $R \cdot T \subseteq A_{1} \times A_{3}$ così definita:
$$ R \cdot T = \{ (a_{1},a_{3}) | \exists a_{2} : (a_{1},a_{2}) \in R \text{ e } (a_{2},a_{3}) \in T \} $$
(per come sono definite le relazioni $R$ e $T$, $(a_{1},a_{2}) \in R$ e $(a_{2},a_{3}) \in T$ implicano $a_{1} \in A_{1}, a_{2} \in A_{2}, a_{3} \in A_{3}$) 

Siano $A_{1} = \{ a,b,c \}, A_{2} = \{ x,y,z,w \}, A_{3} = \{ h,k \}, R = \{ (a,x),(a,w),(b,x),(b,y),(b,z) \}$
$T = \{ (x,h),(z,h),(w,k) \}$
Calcoliamo $R \cdot T$, si ha:
- $(a,h) \in R \cdot T$ in quanto esiste $x$ tale che $(a,x) \in R$ e $(x,h) \in T$
- $(a,k) \in R \cdot T$ in quanto esiste $w$ tale che $(a,w) \in R$ e $(w,k) \in T$
- $(b,h) \in R \cdot T$ in quanto esiste $x$ tale che $(b,x) \in R$ e $(x,h) \in T$
Usando i grafici delle due relazioni (sovrapponendo i vertici du gual nome) abbiamo il seguente diagramma
 ```tikz
 \begin{document}
 \begin{tikzpicture}
 \usetikzlibrary{arrows.meta}
 
 %nodes
 \node (a) at (0,0){$\bullet$};
 \node[left] at (a){$a$};
 \node (b) at (0,-1){$\bullet$};
 \node[left] at (b){$b$};
 \node (c) at (0,-2){$\bullet$};
 \node[left] at (c){$c$};
 \node (x) at (3,0){$\bullet$};
 \node[right] at (x){$x$};
 \node (y) at (3,-1){$\bullet$};
 \node[right] at (y){$y$};
 \node (z) at (3,-2){$\bullet$};
 \node[right] at (z){$z$};
 \node (w) at (3,-3){$\bullet$};
 \node[right] at (w){$w$};
 \node (h) at (6,-.5){$\bullet$};
 \node[right] at (h){$h$};
 \node (k) at (6,-2.5){$\bullet$};
 \node[right] at (k){$k$};
 %arrows
 \draw[-{Stealth}] (a.center) -- (x.center);
 \draw[-{Stealth}] (a.center) -- (w.center);
 \draw[-{Stealth}] (b.center) -- (x.center);
 \draw[-{Stealth}] (b.center) -- (y.center);
 \draw[-{Stealth}] (b.center) -- (z.center);
 \draw[-{Stealth}] ()
 \end{tikzpicture}
 \end{document}
 ```
 