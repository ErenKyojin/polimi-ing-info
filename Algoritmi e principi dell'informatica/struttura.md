---
aliases: interpretazione
creation date: 2023-05-11 16:13
modification date: 2023-05-11 16:13
---

>[!def]
>Una **struttura** (o interpretazione) è una coppia $\left< D,I \right>$ dove 
>- $D$ è un insieme detto dominio
>- $I$ è formato da tre funzioni $I_{1},I_{2},I_{3}$ che associano rispettivamente ad ogni costante un elemento di $D$, ad ogni lettera funzionale con apice $n$ una operazione di arità $n$ su $D$, ad ogni lettera predicativa con apice $n$ una relazione di arità $n$ su $D$.

>[!esempio]
>Sia $L$ un linguaggio del primo ordine, contenente le costanti $a,b,c$, le variabili $x,y$ le lettere funzionali $f_{1}^1,f_{1}^2,f_{2}^2$ e le lettere predicative $\mathcal{A}_{1}^2,\mathcal{A}_{2}^2$, una interpretazione per le formule di tale linguaggio si ottiene ad esempio fissando come dominio l'insieme dei numeri naturali $N$, come costante $a$ il numero $1$, come costante $b$ il numero $2$, come costance $c$ il numero $3$, come lettera funzionale $f_{1}^1$ l'operazione di arità $1$ che associa ad ogni numero il suo successivo, come lettera funzionali $f_{1}^2$ e $f_{2}^2$ rispettivamente le operazioni di prodotto e somma, come lettere predicative $\mathcal{A}_{1}^2$, $\mathcal{A_{2}^2}$ rispettivamente le relazioni di uguaglianza e di minore. In tale interpretazione la formula $\mathcal{A}_{1}^2(f_{1}^2(x,y),f_{2}^2(a,x))$ si legge come $x \cdot y = 1 + x$,
>$$ \mathcal{A}_{2}^2(a,b) \lor \exists y \mathcal{A}_{1}^2(f_{1}^2(x,y),f_{2}^2(a,x))\implies \forall x(\sim \mathcal{A_{1}^2}(f_{1}^2(x,f_{2}^2(a,x)),b)\land \mathcal{A_{2}^2(x,x)}) $$
>si legge come "Se $1$ è minore di $2$ o esiste un numero naturale $y$ tale che $x \cdot y = 1 + x$, allora per ogni numero naturale $x$ è $x \cdot (1 + x) \neq 2$ e $x < x$.
>Ovviamente la formula $x \cdot y = 1 + x$ non è ne vera ne falsa, dipende da particolari assegnamenti di valori alle variabili $x$ ed $y$, la formula se $1$ è minore di $2$ o esiste un numero naturale $y$ tale che $x \cdot y = 1 + x$ allora per ogni numero naturale $x$ è $x \cdot (1 + x) \neq 2$ e $x < x''$ è falsa poichè l'antecedente è vero, essendo l'or di due formule atomiche di cui la primo è vera, mentre il conseguente è falso non potendo essere $x <x$.

Data una struttura, le costanti risultano elementi di $D$, i termini sono funzioni di funzioni su $D$, le formule atomiche sono delle relazioni fra termini; per valutare una formula atomica in una interpretazione $\left< D,I \right>$ dobbiamo quindi introdurre l'assegnamento ovvero una funzione $s$ dall'insieme delle variabli del linguaggio all'insieme $D$.
L'assegnamento $s$ permette di assegnare un valore in $D$ a tutti i termini del linguaggio mediante la seguente definizione:
$s* : \text{Ter} \to D$
- $s*(a) = I_{1}(a)$ per ogni costante 

