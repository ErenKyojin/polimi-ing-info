---
aliases: logica del primo ordine
creation date: 2023-05-09 19:19
modification date: 2023-05-09 19:19
---

>[!definition]  [[Linguaggio]] del primo ordine
>Per ovviare alle carenze espressive della [[Logica proposizionale]] introduciamo il linguaggio del primo ordine, con alfabeto composto da:
> - Costanti: $a,b, \dots$ (al più un infinità numerabile e quindi spesso indicate con $a_{i}$)
> - Variabili: $x,y, \dots$ (al più un infinità numerabile e quindi spesso indicate con $x_{i}$)
> - Lettere funzionali: $f_{i}^n$ ($i,n$ interi naturali, l'apice indica l'arità, il pedice distingue lettere diverse con stessa arità)
> - Lettere predicative: $\mathcal{A}_{i}^n$ ($i,n$ interi naturali, l'apice indica l'arità, il pedice distingue lettere diverse con la stessa arità)
> - [[connettivi]]: $\sim, \land, \lor, \Rightarrow, \Leftrightarrow$
> - [[Quantificatori]]: con $x$ variabile qualsiasi
> 	- $\forall x$ detto quantificatore universale
> 	- $\exists x$ detto quantificatore esistaziale
> - Simboli ausiliari: $($,$)$

Attraverso questi simboli possiamo definire i [[termini]], e attraverso lettere predicative e termini possiamo costruire delle frasi che giocano il ruolo di lettere enunciative, ossia mattoni costruittivi di frasi più complesse, dette le [[formule atomiche]],  infine definiamo ricorsivamente le [[formule ben formate#Nel linguaggio del primo ordine|formule ben formate nel linguaggio del primo ordine]]

>[!example]
>Sia $L$ un linguaggio del primo ordine, contenente le costanti $a,b,c$; le variabili $x,y$; le lettere funzionali $f_{1}^1,f_{1}^2,f_{2}^1$ e le lettere predicative $\mathcal{A}_{1}^2,\mathcal{A}_{2}^2$, le sequenze $a, x, f_{2}^2 (a,x), f_{1}^2(x,f_{2}^2(a,x)),f_{1}^1(f_{1}^2(x,f_{2}^2(a,x)))$ sono tutti [[termini]], infatti $a$ è una costante, $x$ è una variabile, $f_{2}^2(a,x)$ ed $f_{1}^2(x,f_{2}^2(a,x))$ sono formati da una lettera funzionale di apice 2 applicata a due termini, $f_{1}^1(f_{1}^2(x,f_{2}^2(a,x)))$ è una lettera funzionale di apice 1 applicata ad un termine. Invece $f_{1}^1(f_{1}^2(x,f_{2}^2(a,x)),b)$ non è un termine in quanto la lettera funzionale $f_{1}^1$ che ha come apice $1$ è applicata a due argomenti: $f_{1}^2(x,f_{2}^2(a,x))$ e $b$.
>$\mathcal{A}_{2}^2(a,b),\mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b)$ sono formule atomiche e quindi f.b.f. essendo costituite da lettera predicativa di apice 2 applicta a due termini.
>Anche $((\mathcal{A}_{2}^2(a,b)) \implies (\forall x (\sim \mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b))))$ è una f.b.f, infatti $(\mathcal{A}_{2}^2(a,b))$ è una f.b.f. ed anche $(\forall x (\sim \mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b)))$ è una f.b.f. perchè ottenuta applicando alla f.b.f. $\mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b)$ prima il connettivo $\sim$ poi il quantificatore $\forall x$.
>La sequenza di simboli $\mathcal{A}_{1}^2(\mathcal{A_{2}}^2(x,f_{2}^2(a,x)),b)$ non è invece una f.b.f., infatti la lettera predicativa $\mathcal{A}_{1}^2$ non è applicata a due termini ma ad una f.b.f. ed a un termine, anche la sequenza di simboli $(f_{2}^2(a,b))\implies(\forall x (\sim \mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b)))$ non è una f.b.f. poichè $(f_{2}^2(a,b))$ non è una f.b.f. ma un termine.


Per evitare un eccessivo numero di parentesi è opportuno fissare una **priorietà nella introduzione di connettivi e quantificatori**:
Se non diversamente indicato dalle parentesi varranno le seguenti regole:
- $\sim$ ed i quantificatori applicati nell'ordine in cui si trovano precedono $\land$ che precede $\lor$ che precede $\Rightarrow$ che precede $\Leftrightarrow$
- Connettivi uguali si intendono associati a sinistra e quantificatori contigui si intendono applicati nell'ordine in cui si trovano

>[!example]
>Consideriamo la formula
>$$ ((\mathcal{A}_{2}^2(a,b) \lor (\exists y (\mathcal{A}_{1}^2 (f_{1}^2(x,y),f_{2}^2(a,x)))))\! \Rightarrow\! (\forall x ((\sim\! \mathcal{A}1^2(f_{1}^2(x,f_{2}^2(a,x)),b)) \land \mathcal{A}_{2}^2 (x,x)))) $$
>Può essere riscritta come
>$$ \mathcal{A_{2}}^2(a,b) \lor \exists y \mathcal{A}_{1}^2(f_{1}^2(x,y),f_{2}^2(a,x)) \implies \forall x (\sim \mathcal{A}_{1}^2(f_{1}^2(x,f_{2}^2(a,x)),b)\land \mathcal{A}_{2}^2(x,x))  $$

Osserviamo tuttavia che a volte viene usato un diverso ordine di priorità (vedi mendelson) secondo il quale
- $\sim$ precede $\land$ che precede $\lor$ che precede un qualsiasi quantificatore che precede $\Rightarrow$ che precede $\Leftrightarrow$
- Connettivi uguali si intendono associati a sinsitra ed i quantificatori contigui si intendono applicati nell'ordine in cui si trovano

In genereale comunque si utilizzano piú parentesi di quelle necessarie per evitare ambiguità, e la prima convenzione è la piú utilizzata.

Data una formula $\mathcal{A}$ definiamo le [[sottoformule|sottoformule]] di $\mathcal{A}$, inoltre come per la logica proposizionale anche per le f.b.f. della logica del Primo ordine si può introurre l'[[albero di struttura#In linguaggio del primo ordine logica del primo ordine|albero di struttura]], che evidenzia le sottoformule come le formule il cui albero di struttura è il sottoalbero completo che ha radice in un nodo dell'albero della formula.

Se una formula contiene un quantificatore si può definire il [[campo di azione]] del suddetto quantificatore

Quante volte una variabile compare in una formula si definisce come [[occorrenza]], ed una formula in cui non ci sono occorrenze libere di variabili si dice [[formula chiusa]].

Data una formula $\mathcal{A}$ sarebbe interessante poterla trasformare in una formula equivalente che abbia tutti i quantificatori in testa, ovvero in una formula del tipo $(Q_{1}x_{1})(Q_{2}x_{2})\dots(Q_{n}x_{n})$, dove ogni $Q_{i}$ è un quantificatore (universale o esistenziale) e $\mathcal{B}$ è una f.b.f. che non contiene quantificatori.
Una formula di questo tipo si dice in **forma normale prenessa**. La stringa iniziale di quantificatoi si dice **prefisso** della formula, mentre la f.b.f. $\mathcal{B}$ si chiama **matrice** della formula.
Sussiste il seguente

>[!theorem]
>Una qualsiasi f.b.f. può essere sempre trasformata in modo algoritmico in una f.b.f. semanticamente quivalente in forma normale prenessa

Per effettuare la trasformazione, usiamo equivalenze che permettano di invertire l'ordine di applicazione di quantificatori e connettivi:
- $\sim \forall x \mathcal{A} \equiv \exists x \sim \mathcal{A}$
- $\sim \exists x \mathcal{A} \equiv \forall x \sim \mathcal{A}$
Inoltre, se $\mathcal{A}(x)$ è una formula con occorrenze libere di $x$ ed $y$ è una variabile tale che il termine $y$ sia libero per $x$ in $\mathcal{A}(x)$, indichiamo con $A[y / x]$ la formula ottenuta sostituiendo in $\mathcal{A}(x)$ ogni occorrenza libera di $x$ con $y$. Allora detta $\mathcal{B}$ una qualunque f.b.f., detta $y$ una variabile che non abbia occorrenze libere in $\mathcal{B}$ e tale che il termine $y$ sia libero per $x$ in $\mathcal{A}(x)$ abbiamo:
- $\forall x \mathcal{A}(x) \land \mathcal{B} \equiv \forall y(\mathcal{A}[y / x] \land \mathcal{B})$
- $\exists x \mathcal{A}(x) \land \mathcal{B} \equiv \exists y (\mathcal{A}[y/x] \land \mathcal{B})$
- $\forall x \mathcal{A}(x) \lor \mathcal{B} \equiv \forall y (\mathcal{A}[y / x] \land \mathcal{B})$
- $\exists x \mathcal{A}(x) \lor \mathcal{B} \equiv \exists y (\mathcal{A}[y / x] \lor \mathcal{B})$
- $\forall x \mathcal{A}(x) \implies \mathcal{B} \equiv \exists y(A[y / x] \implies \mathcal{B})$
- $\exists x \mathcal{A}(x) \implies \mathcal{B} \equiv \forall y(\mathcal{A}[y / x] \implies \mathcal{B})$
- $\mathcal{B} \implies \forall x \mathcal{A}(x) \equiv \forall y (\mathcal{B} \implies \mathcal{A}[y/x])$
- $\mathcal{B} \implies \exists x \mathcal{A}(x) \equiv \exists y (\mathcal{B} \implies \mathcal{A}[y / x])$
Osservate che se $\mathcal{B}$ non contiene occorrenze libere di $x$ non serve fare il cambio di nome della variabile, notate inoltre che non abbiamo dato nessuna equivalenza per formule che contengono come connettivo principale $\iff$, questo non è un limite perchè ogni formula con tale connettivo può essere riportata semplicemente ad una formula semanticamente equivalente che non ne faccia uso.

Osservate anche che data una f.b.f. non è unica la f.b.f. in forma normale prenessa ad essa equivalente, in quanto la forma ottenuta dipende dall'ordine con cui si applicano le trasformazioni precedenti

Definiamo le formule in [[forma di Skolem]]


# ANKI

```anki
id: 1700559636900
deck: LeA
---
Linguaggio del primo ordine
===
- Costanti: a, b ,c (al più infinità numerabile)
- variabili: x, y, z (al più infinita numerabile)
- Lettere funzionali: $f_i ^n$
	- l'apice indica la quantità di termini sulla quale lavora la lettera funzionale
	- il pedice distingue diverse lettere funzionali
- Lettere predicative: $\mathcal{A}_i^n$
	- l'apice indica la quantità di termini
	- il pedice distingue diverse lettere predicative
- Connettivi: $\sim, \land, \lor, \Rightarrow, \Leftrightarrow$
- quantificatori
	- $\forall$ quantificatore universale
	- $\exists$ quantificatore esistenziale
- Simboli ausiliari: ( , )
```


```anki
id: 1700559641653
deck: LeA
---
Precedenza dei connettivi in logica del primo ordine
===
$\sim \forall\ \exists\land \lor \implies \iff$
```


```anki
id: 1700559645302
deck: LeA
---
Formula normale prenessa
===
Formula con i quantificatori in testa ad una fbf senza alcun quantificatore all'interno.

Per passare da una formula qualsiasi alla forma normale prenessa:
- $(\forall x) \mathcal{A}(x) \implies \mathcal{B} \equiv (\exists t)(\mathcal{A}(t) \implies \mathcal{B)}$
- $(\exists x)\mathcal{A}(x) \implies \mathcal{B} \equiv (\forall t) (\mathcal{A}(t) \implies \mathcal{B)}$
- $\mathcal{A} \implies (\forall x)\mathcal{B}(x) \equiv \forall(t)(\mathcal{A} \implies \mathcal{B}(t))$
- $\mathcal{A} \implies (\exists x)\mathcal{B}(x) \equiv \exists(t)(\mathcal{A} \implies \mathcal{B(t)})$
```
