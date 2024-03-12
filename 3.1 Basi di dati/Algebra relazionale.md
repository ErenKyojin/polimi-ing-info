---
aliases: 
creation date: 2024-03-12
---

L'algebra relazionale è un linguaggio procedurale definito su concetti algebrici. È un insieme di operazioni che sono [[endomorfismo|endomorfismi]].


 ## Operazioni insiemistiche
 Essendo le relazioni insiemi, possiamo considerare le operazioni insiemistiche $\cup, \cap, \setminus$. Tuttavia sono necessarie alcune precisazioni, specialmente a proposito dell'unione, infatti una relazione è un insieme di tuple **omogenee**, quindi un unione di due relazioni su schemi diversi produrrebbe una relazione che non appartiene a nessuno dei due insiemi di partenza.
Definiamo quindi
- L'**unione** $\cup$ di due relazioni $r_{1}$ ed $r_{2}$, definite sullo stesso insieme di attributi $X$ è una relazione definita su $X$ che contiene sia le tuple di $r_{1}$ che quelle di $r_{2}$
- L'**intersezione** $\cap$ di due relazioni $r_{1}$ ed $r_{2}$ è definita come l'insieme di tuple appartenenti sia ad $r_{1}$ che ad $r_{2}$
- La **differenza** $\setminus$ di due relazioni $r_{1}$ ed $r_{2}$, scritta come $r_{1} \setminus r_{2}$ è l'insieme di tuple di $r_{1}$ tranne quelle contenute anche in $r_{2}$


## Operazione di ridenominazione
Vi sono tuttavia alcuni casi in cui l'unione avrebbe senso logico, consideriamo l'esempio seguente:

>[!esempio]
 
| oggetto | prezzo | 