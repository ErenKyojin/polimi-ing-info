---
aliases: 
creation date: 2023-05-03 09:17
modification date: 2023-05-03 09:17
---

>[!def]
>In [[logica proposizionale]] i connettivi sono gli elementi che connettono proposizioni atomiche per renderle complesse, consideriamo:
> - Not $\sim$
> - And $\land$
> - Or $\lor$
> - Implica $\implies$
> - Se e solo se $\iff$
> 
> Per indicare l'ordine di applicazione dei connettivi si utilizzano parentesi


#### Precedenza
- $\sim$ precede $\land$ che precede $\lor$ che precede $\implies$ che precede $\iff$
- Connettivi uguali si associano a sinistra

>[!esempio] 
>Possiamo riscrivere la formula $((\sim(A \land B)) \iff (A \implies (B \lor A)))$ come
>$$  \sim(A \lor B) \iff A \implies B \lor A $$, notare che abbiamo costituito questa formula mettendo insieme [[sottoformule]]. 

## Tavole di verità


>[!multi-column]
> > | $A$ | $\sim A$ |
> > | --- | -------- |
> > | 0   | 1        |
> > | 1   | 0        | 
> 
> 
> > | $A$ | $B$ | $A \land B$ |
> > | --- | --- | ----------- |
> > | 0   | 0   | 0           |
> > | 0   | 1   | 0           |
> > | 1   | 0   | 0           |
> > | 1   | 1   | 1           | 
> 
> 
> > | $A$ | $B$ | $A \lor B$ |
> > | --- | --- | ---------- |
> > | 0   | 0   | 0          |
> > | 0   | 1   | 1          |
> > | 1   | 0   | 1          |
> > | 1   | 1   | 1          | 
> 
> 
> > | $A$ | $B$ | $A \implies B$ |
> > | --- | --- | -------------- |
> > | 0   | 0   | 1              |
> > | 0   | 1   | 1              |
> > | 1   | 0   | 0              |
> > | 1   | 1   | 1              | 
> 
> 
> > | $A$ | $B$ | $A \iff B$ |
> > | --- | --- | ---------- |
> > | 0   | 0   | 1          |
> > | 0   | 1   | 0          |
> > | 1   | 0   | 0          |
> > | 1   | 1   | 1           |


## Nor e Nand
Gli [[insiemi adeguati]] di connettivi non possono essere ulteriormente ridotti se non introduciamo i connettivi $|$ (nor) e $\downarrow$ (nand) che hanno le seguenti tavole di verità

> [!multi-column]
> > [!NOTE]
> > | $A$   | $B$   | $A$ \| $B$ |
> > | :---: | :---: | :-----: |
> > | 0   | 0   | 1     |
> > | 0   | 1   | 0     |
> > | 1   | 0   | 0     |
> > | 1   | 1   | 0     | 
> > 
> 
> > [!note]
> > | $A$ | $B$ | $A \downarrow B$ |
> > | --- | --- | ---------------- |
> > | 0   | 0   | 1                |
> > | 0   | 1   | 1                |
> > | 1   | 0   | 1                |
> > | 1   | 1   | 0                | 
> > 


 Tenendo conto che si hanno le seguenti equivalenze
- $\sim A$ equivale a $A | A$ ed a $A \downarrow A$
- $A \land B$ equivalente a $(A \downarrow B) \downarrow (A \downarrow B)$
- $A \lor B$ equivalente a $(A | B)|(A|B)$

Ogni [[formule ben formate|f.b.f.]] ammette una formula equivalente che usa solo i connettivi nor o nand

A questo punto potrebbe risultare utile (ad esempio in ambito di intelligenza artificiale) un sistema puramente sintattico di manipolazione di f.b.f. che permetta di ricavare tutte e sole le tautologie (sia cioè completo e corretto) e, partendo da un insieme arbitrario di formule, tutte e sole le formule che ne sono conseguenza semantica, per far questo introduciamo la nozione di [[teoria formale]].