---
aliases: 
creation date: 2023-05-09 19:19
modification date: 2023-05-09 19:19
---

>[!def]  [[linguaggio]] del primo ordine
>Per ovviare alle carenze espressive della [[logica proposizionale]] introduciamo il linguaggio del primo ordine, con alfabeto composto da:
> - Costanti: $a,b, \dots$ (al più un infinità numerabile e quindi spesso indicate con $a_{i}$)
> - Variabili: $x,y, \dots$ (al più un infinità numerabile e quindi spesso indicate con $x_{i}$)
> - Lettere funzionali: $f_{i}^n$ ($i,n$ interi naturali, l'apice indica l'arità, il pedice distingue lettere diverse con stessa arità)
> - Lettere predicative: $\mathcal{A}_{i}^n$ ($i,n$ interi naturali, l'apice indica l'arità, il pedice distingue lettere diverse con la stessa arità)
> - [[Connettivi]]: $\sim, \land, \lor, \Rightarrow, \Leftrightarrow$
> - [[Quantificatori]]: con $x$ variabile qualsiasi
> 	- $\forall x$ detto quantificatore universale
> 	- $\exists x$ detto quantificatore esistaziale
> - Simboli ausiliari: $($,$)$

Attraverso questi simboli possiamo definire i [[termini]], e attraverso lettere predicative e termini possiamo costruire delle frasi che giocano il ruolo di lettere enunciative, ossia mattoni costruittivi di frasi più complesse, dette le [[formule atomiche]],  infine definiamo ricorsivamente le [[formule ben formate]]

>[!esempio]
>Sia $L$ un linguaggio del primo ordine, contenente le costanti $a,b,c$; le variabili $x,y$; le lettere funzionali $f_{1}^1,f_{1}^2,f_{2}^1$ e le lettere predicative $\mathcal{A}_{1}^2,\mathcal{A}_{2}^2$, le sequenze $a, x, f_{2}^2 (a,x), f_{1}^2(x,f_{2}^2(a,x)),f_{1}^1(f_{1}^2(x,f_{2}^2(a,x)))$ sono tutti [[termini]], infatti $a$ è una costante, $x$ è una variabile, $f_{2}^2(a,x)$ ed $f_{1}^2(x,f_{2}^2(a,x))$ sono formati da una lettera funzionale di apice 2 applicata a due termini, $f_{1}^1(f_{1}^2(x,f_{2}^2(a,x)))$ è una lettera funzionale di apice 1 applicata ad un termine. Invece $f_{1}^1(f_{1}^2(x,f_{2}^2(a,x)),b)$ non è un termine in quanto la lettera funzionale $f_{1}^1$ che ha come apice $1$ è applicata a due argomenti: $f_{1}^2(x,f_{2}^2(a,x))$ e $b$.
>$A$