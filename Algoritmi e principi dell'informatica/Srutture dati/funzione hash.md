---
aliases: 
creation date: 2023-05-11 10:05
modification date: 2023-05-11 10:05
---


> [!def] Title
> 
>[[Funzioni|Funzione]] utilizzata nelle [[hash table|tabelle hash]] come funzione intermedia tra chiave e dato
>$h : U \to \{ 0, \dots, m \}$

Per scegliere la funzione hash ce ne conviene scegliere una che soddisfi l'ipotesi di [[collisioni#Ipotiziamo hashing uniforme semplice|hashing uniforme semplice]], ma per farlo dovremmo sapere quale è la distribuzione di probabilità delle chiavi che devo inserire. Se le chiavi sono tutte vicine la funzione hash dovrebbe essere tale da riuscire a separarle, se invece so che le chiavi sono distribuite in modo uniforme in $[0,\dots,k-1]$ mi basta prendere $$
## In indirizzamento aperto
$h : U \times \{ 0,1,\dots,m-1 \} \to \{ 0,1,\dots,m-1 \}$
- La sequenza di ispezione $\left< h(k,0),h(k,1),\dots,h(k,m-1) \right>$

