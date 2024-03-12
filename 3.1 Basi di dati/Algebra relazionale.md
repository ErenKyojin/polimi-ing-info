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
>> [!multi-column]
>>  
>> | oggetto      | prezzo |
>> | ------------ | ------ |
>> | penna        | 1      |
>> | foglio       | 0.50   |
>> | calcolatrice | 10       |
>> 
>> | servizio      | prezzo |
>> | ------------- | ------ |
>> | stampa bn     | 0.50   |
>> | stampa colori | 1      |
>> | delivery      | 2       |
>
>Se volessimo unire queste due tabelle in un unica non ci sarebbe concesso. Tuttavia sarebbe molto utile avere una tabella dei prezzi completa


Per risolvere questo problema è stato introdotto l'operatore [[ridenominazione]], che, come il nome suggerisce, permette di rinominare gli attributi.

## Operazione di selezione
La [[selezione]] produce un sottoinsieme di tuple su tutti gli attributi


## Operazione di proiezione
[[proiezione]]


## Join
Permette di correlare dati di relazioni diverse, ne esistono due versioni principali:

- [[join naturale]]
- [[theta join]]