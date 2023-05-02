---
aliases: 
creation date: 2023-05-02 12:50
modification date: 2023-05-02 12:50
---

L'idea alla base di Heapsort è che un array si può interpretare come un albero binario
- $A[i]$ è la radice
- Per ogni elemento $A[i], A[2i]$ e A$[2i + 1]$ sono i suoi figli e $A[\lfloor i / 2 \rfloor]$ è il papdre

> [!multi-column]
>  
>
>> [!Esempio]
> >  | pos  | 1   | 2   | 3   | 4   |
> >  | ---- | --- | --- | --- | --- |
> >  | elem | 5   | 7   | 2   | 1    |
> > 
> > 
> > ```mermaid
> > graph TB
> > 	A(5) --> B(7)
> > 	A --> C(2)
> > 	B --> D(1)
> > ```
> 
>>[!quote]
>>Costruzione di un albero corrispondente ad un heap
>
>

>[!oss]
>L'albero sarà sempre completo ad eccezione del livello inferiore che potrebbe avere degli elementi mancanti verso destra:
>
> ```tikz
> \usetikzlibrary{arrows.meta}
>\begin{document}
>\begin{tikzpicture}[scale = 3]
>
>\node (A) at (0,0){$\bullet$};
>\node (B) at (-.5,-.5){$\bullet$};
>\node (C) at (.5,-.5){$\bullet$};
>\node (B1) at (-.75,-1){$\bullet$};
>\node (B2) at (-.25,-1){$\bullet$};
>\node (C1) at (.25,-1){$\bullet$};
>\node (C2) at (.75,-1){$\bullet$};
>\node (B11) at (-.875,-1.5){$\bullet$};
>\node (B12) at (-.625, -1.5){$\bullet$};
>\node (B21) at (-.375,-1.5){$\bullet$};
>
>\path[-{Stealth[scale = 1.5]}] (A.center) edge[bend right]  node[midway,above] {$1$}(B.center)
>	(B.center) edge[bend right] node[midway,above]{$2$} (A.center)
>;
>
>\end{tikzpicture}
>\end{document}
>```

