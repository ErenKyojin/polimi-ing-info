---
aliases: relazione
creation date: 2024-03-05
---

Le relazioni con cui lavoriamo in un [[DBMS]] tendono ad avere qualche specificità che è utile conoscere rispetto alle relazioni matematiche, in particolare:

- Lavoriamo con relazioni su insiemi finiti:
- Una relazione tra due dati ne stabilisce un legame
- L'ordine fra gli elementi di una relazione non è importante
	- due tabelle con gli stessi elementi in ordine diverso indicano la stessa relazione
- Una relazione non può avere $n$-uple uguali, essendo una relazione un insieme


Inoltre una relazione matematica $n$-aria distingue gli $n$ domini unicamente attraverso la loro posizione, questo è scomodo in informatica, dove preferiremmo poter distinguere gli $n$ domini attraverso nomi identificativi, ad esempio:

> [!esempio]
> Data la seguente tabella, che descrive uno studente, l'ultimo voto ricevuto e la media, questa di fatto descrive una relazione matematica, ma è di difficile leggibilità.
> 
> | Alice        | 28  | 25   |
> | ------------ | --- | ---- |
> | Beatrice | 30  | 29.5 |
> | Carlo    | 30  | 19     |
>
>Sarebbe preferibile la seguente:
>
>| studente | ultimo voto | media
>| ------------ | --- | ---- |
> | Alice        | 28  | 25   |
> | Beatrice | 30  | 29.5 |
> | Carlo    | 30  | 19     |

Ed in effetti, le tabelle per il modello relazionale sfruttano la definizione di attributi per indicare i vari domini.

>[!def]
>Sia $\mathcal{D}$ l'insieme dei domini, sia $\text{dom} : X \to \mathcal{D}$ funzione che associa ad ogni attributo $x \in X$ un dominio. Una relazione su $X$ è l'insieme di  [[tupla|tuple]] su $X$

Una base di dati è molto raramente costituita da una sola relazione, e quando la relazione è più di una, i riferimenti fra le diverse relazioni vengono rappresentati per mezzo di valori dei domini

>[!esempio]
>Si consideri la seguente base di dati, che descrive una rete LAN.
>
> | ID  | utente  | password |
> | --- | ------- | -------- |
> | 01  | antonio | 1234     |
> | 02  | bart    | paswd    |
> | 03  | carlo   | 0000     | 
> 
> | utente | MAC   | last_login |
> | ------ | ----- | ---------- |
> | 01     | A:F:C | 1970-01-01 |
> | 02     | 0:H:B | 2023-04-30 |
> | 03     | A:8:C | 2023-04-30 |
> | 03     | 1:L:B | 2021-02-17 |
> 
> | MAC   | IP            |
> | ----- | ------------- |
> | A:F:C | 192.168.1.2   |
> | 0:H:B | 192.168.1.100 |
> | A:8:C | 192.168.1.156 |
> | 1:L:B | 192.168.1.253 | 
