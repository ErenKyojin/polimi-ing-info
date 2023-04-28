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
>Data una relazione $R$ non esiste in genere una relazione d'ordine che contenga $R$ perchè se $R$ non è antisimmetrica tutte le relazioni che contengono $R$ non sono antisimmetriche. Ci si potrebbe allora chiedere se una relazione antisimmetrica $R$ possa sempre essere contenuta in una relazione d'ordine. Poichè una relazione d'ordine è riflessiva e transitiva, se esistesse una relazione d'or