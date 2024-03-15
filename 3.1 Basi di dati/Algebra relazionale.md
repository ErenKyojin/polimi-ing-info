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
	- [[Join completo]]
	- [[join esterno]]
- [[theta join]]

### Proprietà
La definizione di join completo ci permette di analizzare alcune proprietà, in particolare, siano $r_{1}, r_{2}$ relazioni.
- $0 \leq |r_{1} \bowtie r_{2}| \leq |r_{1}|  |r_{2}|$
- se il join è completo, $|r_{1} \bowtie r_{2}| = \max(r_{1},r_{2})$
- se l'intersezione degli attributi $X_{1} \cap X_{2}$ coincide con una chiave per $r_{2}$, allora $r_{1}(X_{1}) \bowtie r_{2}(X_{2})$ cotniene al più $|r_{1}|$ tuple
- Se l'intersezione degli attributi $X_{1} \cap X_{2}$ è una chiave per $r_{2}$ ed ha un vincolo di riferimento, allora $|r_{1}(X_{1}) \bowtie r_{2}(X_{2})| = |r_{1}|$
- commutativo: $r_{1} \bowtie r_{2} = r_{2} \bowtie r_{1}$
- associativo: $r_{1} \bowtie (r_{2} \bowtie r_{3}) = (r_{1} \bowtie r_{2}) \bowtie r_{3}$
- se $X_{1} = X_{2} \implies r_{1}(X_{1}) \bowtie r_{2}(X_{2}) \implies r_{1}(X_{1}) \cup r_{2}(X_{2})$
- se $X_{1} \cap X_{2} = \varnothing \implies r_{1}(X_{1}) \bowtie r_{2}(X_{2}) = r_{1}(X_{1}) \times r_{2}(X_{2})$, insieme di tutte le possibili tuple concatenando le tuple della prima relazione con quelle della seconda 

