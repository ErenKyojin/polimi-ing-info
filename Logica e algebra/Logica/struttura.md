---
aliases: interpretazione
creation date: 2023-05-11 16:13
modification date: 2023-05-11 16:13
---

>[!def]
>Una **struttura** (o interpretazione) è una coppia $\left< D,I \right>$ dove 
>- $D$ è un [[insieme]] detto dominio
>- $I$ è formato da tre [[funzioni]] $I_{1},I_{2},I_{3}$ che associano rispettivamente ad ogni costante un elemento di $D$, ad ogni lettera funzionale con apice $n$ una operazione di arità $n$ su $D$, ad ogni lettera predicativa con apice $n$ una [[Relazioni|relazione]] di arità $n$ su $D$.

>[!esempio]
>Sia $L$ un [[linguaggio del primo ordine]], contenente le costanti $a,b,c$, le variabili $x,y$ le lettere funzionali $f_{1}^1,f_{1}^2,f_{2}^2$ e le lettere predicative $\mathcal{A}_{1}^2,\mathcal{A}_{2}^2$, una interpretazione per le formule di tale linguaggio si ottiene ad esempio fissando come [[Analisi 2/dominio|dominio]] l'insieme dei [[numeri naturali]] $N$, come costante $a$ il numero $1$, come costante $b$ il numero $2$, come costance $c$ il numero $3$, come lettera funzionale $f_{1}^1$ l'operazione di arità $1$ che associa ad ogni numero il suo successivo, come lettera funzionali $f_{1}^2$ e $f_{2}^2$ rispettivamente le operazioni di prodotto e somma, come lettere predicative $\mathcal{A}_{1}^2$, $\mathcal{A_{2}^2}$ rispettivamente le relazioni di [[uguaglianza]] e di minore. In tale interpretazione la formula $\mathcal{A}_{1}^2(f_{1}^2(x,y),f_{2}^2(a,x))$ si legge come $x \cdot y = 1 + x$,
>$$ \mathcal{A}_{2}^2(a,b) \lor \exists y \mathcal{A}_{1}^2(f_{1}^2(x,y),f_{2}^2(a,x))\implies \forall x(\sim \mathcal{A_{1}^2}(f_{1}^2(x,f_{2}^2(a,x)),b)\land \mathcal{A_{2}^2(x,x)}) $$
>si legge come "Se $1$ è minore di $2$ o esiste un numero naturale $y$ tale che $x \cdot y = 1 + x$, allora per ogni numero naturale $x$ è $x \cdot (1 + x) \neq 2$ e $x < x$.
>Ovviamente la formula $x \cdot y = 1 + x$ non è ne vera ne falsa, dipende da particolari assegnamenti di valori alle variabili $x$ ed $y$, la formula se $1$ è minore di $2$ o esiste un numero naturale $y$ tale che $x \cdot y = 1 + x$ allora per ogni numero naturale $x$ è $x \cdot (1 + x) \neq 2$ e $x < x''$ è falsa poichè l'antecedente è vero, essendo l'or di due [[formule atomiche]] di cui la primo è vera, mentre il conseguente è falso non potendo essere $x <x$.

Data una struttura, le costanti risultano elementi di $D$, i [[termini]] sono funzioni di funzioni su $D$, le formule atomiche sono delle relazioni fra termini; per valutare una formula atomica in una interpretazione $\left< D,I \right>$ dobbiamo quindi introdurre l'assegnamento ovvero una funzione $s$ dall'insieme delle variabli del linguaggio all'insieme $D$.
L'assegnamento $s$ permette di assegnare un valore in $D$ a tutti i termini del linguaggio mediante la seguente definizione:
$s* : \text{Ter} \to D$
- $s^*(a) = I_{1}(a)$ per ogni costante $a$.
- $s^*(x) = s(x)$ per ogni variabile $x$.
- $s^*(f(t_{1},t_{2},\dots,t_{n}))=I_{2}(f)(s^* (t_{1}),s^* (t_{2}),\dots,s^*(t_{n}))$ per ogni termine che inizi con una lettera funzionale
Fissato un assegnamento di valori in $D$ alle variabili, possiamo dire se per i valori assegnati alle variabili una formula atomica è soddisfatta o no. Più precisamente:
- Data una formula atomica $\mathcal{A}_{i}^n(t_{1},t_{2},\dots,t_{n})$ ed una interpretazione $\left< D,I \right>$ un assegnamento $s$ di valori alle variabili che occorrono nella formula sodddisfa la formula $\mathcal{A}_{i}^n (t_{1},t_{2},\dots,t_{n})$ se la $n$-upla $(s^*(t_{1}),s^*(t_{2}),\dots,s^*(t_{n}))$ di elementi di $D$ appartiene alla relazione $I_{3}(\mathcal{A}_{i}^n)$ che interpreta la lettera $\mathcal{A}_{i}^n$

>[!esempio]
>$\mathcal{A}_{1}^2(f_{1}^2(x,y),f_{2}^2(a,x))$ nella interpretazione sopra descritta è soddisfatta se si assegnano ad $x$ e ad $y$ per decidere se un assegnamento $s$ di valori alle variabili di $\mathcal{A}$ soddisfa la formula dobbiamo considerarne la struttura:
>- Se la formula $\mathcal{A}$ è del tipo $\sim \mathcal{B}$, l'assegnamento $s$ soddisfa $\mathcal{A}$ se e solo se $s$ non soddisfa $\mathcal{B}$
>- Se la formula $\mathcal{A}$ è del tipo $\mathcal{B} \land \mathcal{C}$, l'assegnamento $s$ soddisfa $\mathcal{A}$ se e solo se $s$ soddisfa sia $\mathcal{B}$ sia $\mathcal{C}$
>- Se la formula $\mathcal{A}$ è del tipo $\mathcal{B} \lor \mathcal{C}$, l'assegnamento $s$ soddisfa $\mathcal{A}$ se e solo se $s$ soddisfa una almeno delle formule $\mathcal{B}$ e $\mathcal{C}$
>- Se la formula $\mathcal{A}$ è del tipo $\mathcal{B} \implies \mathcal{C}$, l'assegnamento $s$ soddisfa $\mathcal{A}$ se e solo se $s$ o non soddisfa $\mathcal{B}$ o soddisfa $\mathcal{C}$
>- Se la formula $\mathcal{A}$ è del tipo $\mathcal{B} \iff \mathcal{C}$ l'assegnamento $s$ soddisfa $\mathcal{A}$ se e solo se $s$ soddisfa sia $\mathcal{B}$ sia $\mathcal{C}$, o $s$ non soddisfa sia $\mathcal{B}$ sia $\mathcal{C}$
>- Se la formula $\mathcal{A}$ è del tipo $\forall x \mathcal{B}$, l'assegnamento $s$ soddisfa $\mathcal{A}$ se e solo se ogni assegnamento $s'$ che differenzia da $s$ al più per il valore assegnato ad $x$ soddisfa $\mathcal{B}$
>- Se la formula $\mathcal{A}$ è del tipo $\exists x \mathcal{B}$, l'assegnamento $s$ soddisfa $\mathcal{A}$ se e solo se esiste un assegnamento $s'$ che differenzia da quello dato al più per il valore assegnato ad $x$ che soddisfa $\mathcal{B}$.

In questo modo la valutazione di una formula è sempre riportata alla valutazione di formule più semplici ed il procedimento si può iterare fino ad arrivare alla valutazione di formule atomiche.

>[!def]
>Dati un [[linguaggio]] del primo ordine, una sua interpretazione ed una [[formule ben formate|f.b.f.]] $\mathcal{A}$
>- $\mathcal{A}$ si dice **soddisfacibile in quella interpretazione** se esiste una assegnamento di valori di variabili che soddisfa la f.b.f.
>- $\mathcal{A}$ si dice **vera in quell'interpretazione** se ogni assegnamento di valori alle variabili soddisfa la f.b.f. $\mathcal{A}$.
>- $\mathcal{A}$ si dice **falsa** (o **insoddisfacibile**) **in quell'interpretazione** se nessun assegnamento di valori alle variabili soddisfa la f.b.f.
>
>La f.b.f. $\mathcal{A}$ si dice **logicamente valida** $\vDash \mathcal{A}$ se è vera in ogni interpretazione
>La f.b.f. $\mathcal{A}$ si dice **insoddisfacibile** se è falsa in ogni interpretazione



>[!oss]
>$\mathcal{A}$ è logicamente valida se e solo se $\sim\mathcal{A}$ è insoddisfacibile

Una [[formula chiusa]] in una data interpretazione non può essere soddisfacibile ma non vera, inoltre è facile verificare che data una f.b.f. $\mathcal{A}$ ed una interpretazione $\left< D,I \right>$
- la [[chiusura]] universale di $\mathcal{A}$ è vera in $\left< D,I \right>$ se e solo se $\mathcal{A}$ è vera in $\left< D,I \right>$
- La chiusura esistenziale di $\mathcal{A}$ è vera in $\left< D,I \right>$ se e solo se $\mathcal{A}$ è soddisfacibile in $\left< D,I \right>$

Una formula si dice esempio di tautologia se è ottenuta da una tautologia sostituendo formule del primo ordine alle lettere enunciative della tautologia, in modo che a lettere uguali vengano sostituite formule uguali. Un esempio di tautologia è sempre una formula logicamente valida.

La terna $\left< D,I,s \right>$ dive $\left< D,I \right>$ è un'interpretazione ed $s$ un assegnamento, si dice **modello** per $\mathcal{A}$ se l'assegnamento $s$ soddisfa $\mathcal{A}$ in $\left< D,I \right>$.

Sia $\Gamma$ un insieme di f.b.f.
- la terna $\left< D,I,s \right>$ è **un modello** per $\Gamma$ se e solo se è un modello per ogni formula in $\Gamma$
- Una f.b.f. $\mathcal{A}$ è **conseguenza [[semantica]]** di $\Gamma$ ($\Gamma \vDash \mathcal{A}$) se ogni modello di $\Gamma$ è modello di $\mathcal{A}$
- Sia $\Gamma = \Delta \cup \{ \mathcal{B} \}$. $\Gamma \vDash \mathcal{A}$ se e solo se $\Delta \vDash \mathcal{B} \implies \mathcal{A}$.
- Le f.b.f. $\mathcal{A}$ e $\mathcal{B}$ sono semanticamente equivalenti ($\mathcal{A} \equiv \mathcal{B}$) se $\mathcal{A}\vDash \mathcal{B}$ e $\mathcal{B} \vDash \mathcal{A}$
	- Osserviamo che le f.b.f. $\mathcal{A}$ e $\mathcal{B}$ sono semanticamente equivalenti se e solo se la f.b.f. $\mathcal{A} \iff \mathcal{B}$ è una f.b.f. logicamente valida.

>[!esempio]
>Dire se la formula $\exists x (\mathcal{A}_{1}^2(x,y) \land \mathcal{A}_{1}^2(x,z)) \implies \forall t\ \forall v \ \mathcal{A}_{1}^2(x,f_{1}^2(f_{2}^2(y,t),f_{2}^2(z,v)))$ è vera, falsa o soddisfacibile nella interpretazione che ha come dominio l'insieme $Z$ degli interi relativi, in cui $f_{1}^2,f_{2}^2$, sono le operazione di somma e prodotto, e $\mathcal{A}_{1}^2$ è la relazione di minore.
>In tale interpretazione l'antecedente dice che esiste un intero minore di $y$ e minore di $z$ ed è soddisfatto da ogni assegnamento, infatti qualsiasi valore diamo ad $y$ e a $z$ troviamo un intero relativo minore di entrambi quei valori, dunque l'antecedente è vero. Il conseguente dice che, qualsiasi valore diamo a $t$ e $v$, si ha $x < yt + zv$. Dunque il conseguente è falso e la formula è falsa in questa interpretazione. Le sue chiusure universali ed esistenziali sono quindi entrambe false in questa interpretazione.
>La formula non è logicamente valida visto che abbiamo una interpretazione in cui non è vera.
>Potremmo chiederci se è insoddisfacibile (o logicamente contraddittoria). A tal scopo consideriamo una interpretazione così fatta: dominio qualsiasi, $f_{1}^2,f_{2}^2$ operazioni qualsiasi sul dominio, $\mathcal{A}_{1}^2$ relazione universale sul dominio. In tale interpretazione il conseguente è sempre vero e dunque la formula è vera. La formula dunque non è insoddisfacibile

>[!esempio]
>Mostrare che la f.b.f. $\exists x (\mathcal{A}(x) \land \mathcal{B}(x)) \iff \exists x \mathcal{A}(x) \land \exists x \mathcal{B(x)}$ non è logicamente valida.
>Basta considerare un'interpretazione con dominio $N$ dove $\mathcal{A}(x)$ sia la formula atomica "$x$ è pari" e $\mathcal{B}(x)$ sia la formula atomica $x$ è dispari. In tale interpretazione $\exists x(\mathcal{A}(x) \land \mathcal{B}(x))$ è falsa, mentre $\exists x \mathcal{A}(x) \land \exists x \mathcal{B}(x)$ è vera. Ne consegue anche che le due formule $\exists x (\mathcal{A}(x)\land \mathcal{B}(x))$, $\exists x \mathcal{A}(x) \land \exists x \mathcal{B}(x)$ non sono semanticamente equivalente

>[!esempio]
>Mostrare che la f.b.f. $\exists x(\mathcal{A}(x) \land \mathcal{B}(x)) \implies \exists x \mathcal{A}(x) \land \exists x \mathcal{B}(x)$ è logicamente valida.
>Si considerino una interpretazione ed un assegnamento $s$ che soddisfi $\exists x(\mathcal{A}(x) \land \mathcal{B}(x))$ nell'interpretazione data, allora esiste un assegnamento $s'$ che differisce da $s$ al più