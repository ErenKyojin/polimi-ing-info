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
>$$ \mathcal{A}_{2}^2(a,b) \lor \exists y \mathcal{A}_{1}^2(f_{1}^2(x,y),f_{2}^2(a,x))\implies \forall x(\sim \mathcal{A_{1}^2}(f_{1}^2(x,f_{2}^2(a,x)),b)) $$


