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

| $A$   | $B$   | $A$ \| $B$ |
| :---: | :---: | :-----: |
| 0   | 0   | 1     |
| 0   | 1   | 0     |
| 1   | 0   | 0     |
| 1   | 1   | 0     | 

| $A$ | $B$ | $A \downarrow B$ |
| --- | --- | ---------------- |
| 0   | 0   | 1                |
| 0   | 1   | 1                |
	| 1    |     |                  |
