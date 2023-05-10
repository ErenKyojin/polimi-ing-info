---
aliases: 
creation date: 2023-05-03 09:56
modification date: 2023-05-03 09:56
---

>[!esempio]
>La formula $\sim (A \land B) \iff A \implies B \lor A$ ha come albero di struttura:
>
>```tikz
>\begin{document}
>\begin{tikzpicture}[scale = 3]
> \node (A) at (0,0){$\iff$};
> \node (B) at (-0.5,-0.5){$\sim$};
> \node (C) at (0.5,-.5){$\Rightarrow$};
> \node (B1) at (-0.5,-1){$\land$};
> \node (C1) at (0.25,-1){$A$};
> \node (C2) at (0.75,-1){$\lor$};
> \node (B11) at (-0.75,-1.5){$A$};
> \node (B12) at (-0.25,-1.5){$B$};
> \node (C21) at (0.5,-1.5){$A$};
> \node (C22) at (1,-1.5){$B$};
>
>\path (A) edge (B) edge (C)
> (B) edge (B1)
> (C) edge (C1) edge (C2)
> (B1) edge (B11) edge (B12)
> (C2) edge (C21) edge (C22)
> ;
>\end{tikzpicture}
>\end{document}
>```

ogni albero di strutturo ha come radico l'ultimo connettivo utilizzato (connettivo principale), le foglia sono le lettere enunciative, i nodi interni i [[connettivi]].
Ogni nodo inoltre può essere visto come la radice di un sottoalbero massimale che è l'albero di struttura di una [[sottoformule|sottoformula]], ed allo stesso modo ogni sottoformula ha come albero di struttura un sottoalbero massimale che ha come radice un nodo etichettato dal connettivo principale della sottoformula considerata.


## In [[linguaggio del primo ordine|logica del primo ordine]]

L'albero di struttura della formula
$$ (\mathcal{A}_{2}^2(a,b)\lor \exists y \mathcal{A}_{1}^2(f_{1}^2(x,y,),f_{2}^2(a,x))) \implies \forall x(\sim \mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b)\land \mathcal{A}_{2}^2(x,x)) $$
È
```tikz
\usepackage{amsfonts}
\begin{document}
\begin{tikzpicture}[
level 1/.style={sibling distance = 5cm},
level 2/.style={sibling distance = 2.5cm}
]
\node {$\Rightarrow$}
	child {node {$\lor$}
	 child {node {$\mathcal{A}_2^2(a,b)$}}
	 child {node {$\exists y$}
	  child {node {$\mathcal{A}_1^2(f_1^2(x,y),f_2^2(a,x)$}} } }
	child {node {$\forall x$}
	 child {node {$\land$}
	  child {node {$\sim$}
	   child {node {$\mathcal{A}_1^2(f_1^2(x,f_2^2(a,x)),b)$}}} 
	 child  {node {$\mathcal{A}_2^2(x,x)$}} } } ;
\end{tikzpicture}
\end{document}
```
