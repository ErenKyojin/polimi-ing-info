---
aliases: 
creation date: 2023-04-26 09:14
modification date: 2023-04-26 09:14
---

Un grafo orientato è una coppia di insiemi $(V,E)$, $V$ è l'[[insieme]] dei vertici, $E$ è l'[[insieme]] degli archi, ogni arco può essere pensato come una coppia di vertici, il primo elemento della coppia si dice vertice iniziale dell'arco, il secondo vertice finale.
Un grafo si può disegnare rappresentando i suoi vertici come punti ed i suoi archi come frecce dal vertice iniziale al vertice finale.
In particolare se partiamo da una relazione $R \subseteq A_{1} \times A_{2}$ si dice il grafo di incidenza di $R$ il frafo il cui insieme di vertici è $A_{1} \cup A_{2}$ e il cui insieme di archi è $R$

> [!esempio]
> Siano $A_{1} = \{ a,b,c \}, A_{2} = \{ x,y,z,w \}, R = \{ (a,x),(a,w),(b,x),(b,y),(b,z) \}$ il grafo di incidenza di $R$ è
> ```tikz
> \begin{document}
> \begin{tikzpicture}
> \usetikzlibrary{arrows.meta}
> 
> %nodes
> \node (a) at (0,0){$\bullet$};
> \node[left] at (a){$a$};
> \node (b) at (0,-1){$\bullet$};
> \node[left] at (b){$b$};
> \node (c) at (0,-2){$\bullet$};
> \node[left] at (c){$c$};
> \node (x) at (3,0){$\bullet$};
> \node[right] at (x){$x$};
> \node (y) at (3,-1){$\bullet$};
> \node[right] at (y){$y$};
> \node (z) at (3,-2){$\bullet$};
> \node[right] at (z){$z$};
> \node (w) at (3,-3){$\bullet$};
> \node[right] at (w){$w$};
> 
> %arrows
> \draw[-{Stealth}] (a.center) -- (x.center);
> \draw[-{Stealth}] (a.center) -- (w.center);
> \draw[-{Stealth}] (b.center) -- (x.center);
> \draw[-{Stealth}] (b.center) -- (y.center);
> \draw[-{Stealth}] (b.center) -- (z.center);
> \end{tikzpicture}
> \end{document}
> ```




