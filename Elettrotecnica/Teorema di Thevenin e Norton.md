---
aliases: 
creation date: 2023-06-07 18:48
modification date: 2023-06-07 18:48
---

Dato un bipolo composito $\mathcal{N}$ costituito da elementi lineare adinamici, eventualmente tempo-varianti, e da sorgenti impressive di corrente e/o di tensione. Il suo comportamento ai morsetti $A$ e $B$ è equivalente a quello di un bipolo equivalente $\mathcal{N}_{eq}$ del tipo Thevenin se ammette una ed una sola soluzione, per ogni $i$, il circuito che si ottiene collegando ai morsetti $A$ e $B$ un generatore di corrente $i$ come in figura. Il bipolo $\mathcal{N}$ deve essere quindi controllabile in corrente.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,0) rectangle (3,5)node[scale = 3, midway]{$N$};
\draw (3,1.5) to[short] (5,1.5) to[american current source,l_=$i$] (5,3.5) -- (3,3.5);
\node (A) at (4,3.5){$\bullet$};
\node (B) at (4,1.5){$\bullet$};
\node[below] at (B) {B};
\node[above] at (A) {A};
\draw[-latex] (B) edge[bend right] node[left]{$v$}(A);
\end{tikzpicture}
\end{document}
```

Il comportamento ai morsetti $A$ e $B$ è equivalente a quello di un bipolo equivalente $\mathcal{N}_{eq}$ del tipo Norton se ammette una ed una sola soluzione, per ogni $v$, il circuito che si ottiene collegando ai morsetti $A$ e $B$ un generatore di tensione $v$ come in figura. Il bipolo $\mathcal{N}$ deve essere **controllabile in tensione**

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{tikzpicture}
\draw (0,0) rectangle (3,5)node[scale = 3, midway]{$N$};
\draw (3,1.5) to[short] (5,1.5) to[american voltage source,invert] (5,3.5) -- (3,3.5);
\node (A) at (4,3.5){$\bullet$};
\node (B) at (4,1.5){$\bullet$};
\node[below] at (B) {B};
\node[above] at (A) {A};
\end{tikzpicture}
\end{document}
```

Se $\mathcal{N}$ ammette entrambe le basi sono definiti entrambi i bipoli equivalenti.

>[!dim]
>Vediamo la dimostrazione nel caso del circuito equivalente di Thévenin. Consideriamo il primo circuito riportato sopra, se per ogni $i$ ammette una ed una sola soluzione allora possiamo applicare il principio di sovrapposizione degli effetti e scrivere la tensione di lato $v$ tra i morsetti $A$ e $B$ come
>$$ v = ri(t) + \sum_{j = 1}^A h_{j}I_{s,j} + \sum_{i = 1}^B k_{j}E_{S,i} $$
>dove $I_{S,j}$ e $E_{S,i}$ sono i generatori indipendenti di corrente e tensione eventualmente presenti in $\mathcal{N}$.
>La tensione $v$, quando si passivino tutte le sorgenti indipendenti interne è pari a
>$$ v \bigg\vert_{I_{S,j} = 0 \forall j, E_{S,i} = 0 \forall i}   = ri(t)$$
>E si definisce
>$$ \frac{v}{i} \bigg \vert_{I_{S,j} = 0 \forall j, E_{S,i} = 0 \forall i} = R_{th} $$
>Analogamente se $i \equiv 0$, se quindi si lavora in condizioni di circuito aperto
>$$ v \bigg\vert_{c.a.} = \sum_{j = 1}^A h_{j}I_{S,j} + \sum_{i = 1}^B k_{i}E_{S,i} = E_{th} $$
>
>Nel caso di northon abbiamo $\frac{i}{v}$ e la corrente è considerata col circuito chiuso


