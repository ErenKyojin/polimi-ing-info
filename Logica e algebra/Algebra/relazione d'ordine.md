---
aliases: Relazioni d'ordine
creation date: 2023-04-28 14:27
modification date: 2023-04-28 14:27
---

> [!def]
> 
> Una [[relazioni binarie|relazione binaria]] $R$ su $A$ che goda delle proprietà riflessiva, antisimmetrica e transitiva si chiama **relazione d'ordine** su $A$. Inoltre, se per ogni coppia di elementi $a,b$ di $A$ si ha o $(a,b) \in R$ o $(b,a) \in R$, $R$ si dice relazione d'ordine **totale**. Se invece esistono due elementi in $A$ tali che né $(a,b) \in R$ né $(b,a) \in R$ tali elementi si dicono non confrontabili rispetto ad $R$.

tramite la relazione d'ordine si definiscono gli [[insiemi parzialmente ordinati]]

>[!esempio]
>- la [[Relazioni|relazione]] $\leq$ è una relazione d'ordine totale su tutti gli insiemi numerici $\mathbb{N},\mathbb{Z},\mathbb{Q}, \mathbb{R}$

La proprietà riflessiva può sembrare una richiesta un po' forte in quanto richiedendo questa proprietà non sono chiamate relazioni d'ordine la relazione $<$ in $\mathbb{N},\mathbb{Z},\mathbb{Q},\mathbb{R}$ e l'[[inclusione]] forte $\subset$ di insiemi in $\mathcal{P}(A)$.
Alcuni testi non la richiedono, ma in tal caso risulta essere una relazione d'ordine la relazione vuota $\varnothing$ rispetto alla quale però tutte le coppie di elementi sarebbero formate da elementi non confrontabili, ed è quindi di piú complessa gestione matematica.

Se $R$ è una relazione d'ordine su $A$ si usa per convenzione scrivere $a \leq b$ o $b \geq a$ per dire che $(a,b) \in R$

>[!oss]
>Data una relazione $R$ non esiste in genere una relazione d'ordine che contenga $R$ perchè se $R$ non è antisimmetrica tutte le relazioni che contengono $R$ non sono antisimmetriche. Ci si potrebbe allora chiedere se una relazione antisimmetrica $R$ possa sempre essere contenuta in una relazione d'ordine. Poichè una relazione d'ordine è riflessiva e transitiva, se esistesse una relazione d'ordine contenente $R$, questa conterrebbe la [[chiusura]] riflessiva e transitiva di $R$. Se tale chiusura non risulta antisimmetria è anche una relazione d'ordine e quindi abbiamo trovato una relazione d'ordine che contiene $R$ (che è tra l'altro la minima relazione d'ordine che contiene $R$)

Quando si lavora con relazioni d'ordine $\leq$ su un insieme finito $A$, si utilizza spesso una versione semplificata del [[grafo di incidenza]] di $\leq$, detto [[diagramma di Hasse]]

Si consideri ora un insieme parzialmente ordinato $A$ (e indichiamo con $\leq$ la sua relazione d'ordine).
- Diciamo **minimo** di $A$ (se esiste) un $m \in A$ tale che per ogni $a \in A$ sia $m \leq a$
- Diciamo **massimo** di $A$ (se esiste) un $m \in A$ tale che per ogni $a \in A$ sia $a \leq m$
- Diciamo **elemento minimale** di $A$ (se esiste) un $m \in A$ tale che $a \in A$ e $a \leq m$ implichino $a = m$ in altre parole per ogni $a \in A$ si ha o $a$ non confrontabile con $m$ o $m \leq a$)
- Diciamo **elemento massimale** di $A$ (se esiste) un $m \in A$ tale che $a \in A$ ed $m \leq a$ implichino $a = m$ (in altre parole per ogni $a \in A$ si ha o $a$ non confrontabile con $m$ o $a \leq m$)

L'[[insiemi parzialmente ordinati|insieme parzialmente ordinato]] del primo esempio di diagramma di Hasse ha 12 come massimo e 2, 3 come elementi minimali.

Osserviamo che:
- Il minimo (massimo) se esiste è unico
- Se un insieme parzialmente ordinato è finito ed ha un unico elemento minimale (massimale) questo è un minimo (massimo)

Sia ora $B$ un sottoinsieme dell'insieme parzialmente ordinato $A$.
Diciamo **minorante** di $B$ (se esiste) un elemento $m \in A$ tale che per ogni $b \in B$ sia $m \leq b$
Diciamo **maggiorante** di $B$ (se esiste) un elemento $m \in A$ tale che per ogni $b \in B$ sia $b \leq m$
Chiamiamo **estremo inferiore** di $B$ e lo indichiamo con $\inf(B)$ il massimo, se esiste, dei minoranti di $B$
Chiamiamo **estremo superiore** di $B$ e lo indichiamo con $\sup(B)$ il minimo, se esiste, dei maggioranti di $B$.

Se consideriamo il sottoinsieme $B = \{ 2,3 \}$ dell'insieme $A$ dell'esempio del [[diagramma di Hasse]] non esistono minoranti di $B$ e quindi neppure $\inf(B)$; invece $6,12$ sono maggioranti di $B$ e $\sup(B) = 6$

Osserviamo che:
- Se $B$ ha un minimo questo è un minorante di $B$ ed è $\inf(B)$
- Se $B$ ha un massimo questo è un maggiorante di $B$ ed è $\sup(B)$
- Se un minorante di $B$ appartien