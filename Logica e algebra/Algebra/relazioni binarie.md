---
aliases: Relazione binaria
creation date: 2023-04-26 09:03
modification date: 2023-04-26 09:03
---

Consideriamo il caso di [[Relazione]] con $n = 2$ (con arità $2$), dette **relazioni binarie**.
Se $R$ è una relazione binaria la notazione $a_{1}\ R\ a_{2}$ ha lo stesso significato della scrittura $(a_{1},a_{2}) \in R$
Nel caso in cui gli insiemi $A_{1}$ e $A_{2}$ con cui lavoriamo contengano un numero finito di elementi (che indicheremo rispettivamente con $|A_{1}|$ e $|A_{2}|$ tali quantità), una relazione $R \subseteq A_{1} \times A_{2}$ potrà essere utilmente rappresentata attraverso:

## Grafo di incidenza
Un grafo orientato è una coppia di insiemi $(V,E)$, $V$ è l'insieme dei vertici, $E$ è l'insieme degli archi, ogni arco può essere pensato come una coppia di vertici, il primo elemento della coppia si dice vertice iniziale dell'arco, il secondo vertice finale.
Un grafo si può disegnare rappresentando i suoi vertici come punti ed i suoi archi come frecce dal vertice iniziale al vertice finale.
In particolare se partiamo da una relazione $R \subseteq A_{1} \times A_{2}$ si dice il grafo di incidenza di $R$ il frafo il cui insieme di vertici è $A_{1} \cup A_{2}$ e il cui insieme di archi è $R$

Siano $A_{1} = \{ a,b,c \}, A_{2} = \{ x,y,z,w \}, R = \{ (a,x),(a,w),(b,x),(b,y),(b,z) \}$ il grafo di incidenza di $R$ è
```tikz
\begin{document}
\begin{tikzpicture}
\node (a) at (0,0){$\bullet$};
\node (b) at (0,-1){$\bullet$};
\node (c) at (0,-2){$\bullet$};
\node (x) at (3,0){$\bullet$};
\node (y) at (3,-1){$\bullet$};
\node (z) at (3,-2){$\bullet$};
\node (w) at (3,-3){$\bullet$};
\end{tikzpicture}
\end{document}
```
