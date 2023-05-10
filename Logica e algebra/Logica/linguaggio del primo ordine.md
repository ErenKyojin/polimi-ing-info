---
aliases: logica del primo ordine
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
>$\mathcal{A}_{2}^2(a,b),\mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b)$ sono formule atomiche e quindi f.b.f. essendo costituite da lettera predicativa di apice 2 applicta a due termini.
>Anche $((\mathcal{A}_{2}^2(a,b)) \implies (\forall x (\sim \mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b))))$ è una f.b.f, infatti $(\mathcal{A}_{2}^2(a,b))$ è una f.b.f. ed anche $(\forall x (\sim \mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b)))$ è una f.b.f. perchè ottenuta applicando alla f.b.f. $\mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b)$ prima il connettivo $\sim$ poi il quantificatore $\forall x$.
>La sequenza di simboli $\mathcal{A}_{1}^2(\mathcal{A_{2}}^2(x,f_{2}^2(a,x)),b)$ non è invece una f.b.f., infatti la lettera predicativa $\mathcal{A}_{1}^2$ non è applicata a due termini ma ad una f.b.f. ed a un termine, anche la sequenza di simboli $(f_{2}^2(a,b))\implies(\forall x (\sim \mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b)))$ non è una f.b.f. poichè $(f_{2}^2(a,b))$ non è una f.b.f. ma un termine.


Per evitare un eccessivo numero di parentesi è opportuno fissare una **priorietà nella introduzione di connettivi e quantificatori**:
Se non diversamente indicato dalle parentesi varranno le seguenti regole:
- $\sim$ ed i quantificatori applicati nell'ordine in cui si trovano precedono $\land$ che precede $\lor$ che precede $\Rightarrow$ che precede $\Leftrightarrow$
- Connettivi uguali si intendono associati a sinistra e quantificatori contigui si intendono applicati nell'ordine in cui si trovano

>[!esempio]
>Consideriamo la formula
>$$ ((\mathcal{A}_{2}^2(a,b) \lor (\exists y (\mathcal{A}_{1}^2 (f_{1}^2(x,y),f_{2}^2(a,x)))))\! \Rightarrow\! (\forall x ((\sim\! \mathcal{A}1^2(f_{1}^2(x,f_{2}^2(a,x)),b)) \land \mathcal{A}_{2}^2 (x,x)))) $$
>Può essere riscritta come
>$$ \mathcal{A_{2}}^2(a,b) \lor \exists y \mathcal{A}_{1}^2(f_{1}^2(x,y),f_{2}^2(a,x)) \implies \forall x (\sim \mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b)\land \mathcal{A}_{2}^2(x,x))  $$

Osserviamo tuttavia che a volte viene usato un diverso ordine di priorità (vedi mendelson) secondo il quale
- $\sim$ precede $\land$ che precede $\lor$ che precede un qualsiasi quantificatore che precede $\Rightarrow$ che precede $\Leftrightarrow$
- Connettivi uguali si intendono associati a sinsitra ed i quantificatori contigui si intendono applicati nell'ordine in cui si trovano

In genereale comunque si utilizzano piú parentesi di quelle necessarie per evitare ambiguità, e la prima convenzione è la piú utilizzata.

Data una formula $\mathcal{A}$ definiamo le [[sottoformule|sottoformule]] di $\mathcal{A}$, inoltre come per la logica proposizionale anche per le f.b.f. della logica del Primo ordine si può introurre l'[[albero di struttura#In linguaggio del primo ordine logica del primo ordine|albero di struttura]], che evidenzia le sottoformule come le formule il cui albero di struttura è il sottoalbero completo che ha radice in un nodo dell'albero della formula.

Data la formula che contenga un quantificatore, la sottoformula a cui quel quantificatore si riferisce è detta **campo di azione** del quantificatore (ovvero il campo di azione di un quantificatore è la sottoformula che corrisponde al sottoalbero di struttura che ha come radice il figlio del quantificatore).

>[!esempio]
>Nella formula
>$$ \mathcal{A}_{2}^2(a,b) \lor \exists y \mathcal{A}_{1}^2(f_{1}^2(x,y),f_{2}^2(a,x)) \implies \forall x (\sim \mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b) \land \mathcal{A}_{2}^2(x,x)) $$
>Il campo di azione di $\exists y$ è $\mathcal{A}_{1}^2(f_{1}^2(x,y),f_{2}^2(a,x))$, quello di $\forall x$ è $\sim \mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b) \land \mathcal{A}_{2}^2(x,x)$

Quante volte una variabile compare in una formula si definisce come [[occorrenza]]
