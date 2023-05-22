---
aliases: 
creation date: 2023-05-11 10:05
modification date: 2023-05-11 10:05
---


> [!def] Title
> 
>[[Funzioni|Funzione]] utilizzata nelle [[hash table|tabelle hash]] come funzione intermedia tra chiave e dato
>$h : U \to \{ 0, \dots, m \}$

Per scegliere la funzione hash ce ne conviene scegliere una che soddisfi l'ipotesi di [[collisioni#Ipotiziamo hashing uniforme semplice|hashing uniforme semplice]], ma per farlo dovremmo sapere quale è la distribuzione di probabilità delle chiavi che devo inserire. Se le chiavi sono tutte vicine la funzione hash dovrebbe essere tale da riuscire a separarle, se invece so che le chiavi sono distribuite in modo uniforme in $[0,\dots,k-1]$ mi basta prendere $h(k) = \lfloor (k / K) m \rfloor$. Si utilizzano delle euristiche basate sul dominio delle chiavi. 

>[!warning]
>Le funzioni hash sono solitamente implementate con il presupposto che la chiave $k$ sia un intero non negativo ($k \in \mathbb{N}$)

## Metodo della divisione
$$ h(k) = k \mod m $$
facile da realizzare e veloce (essendo una sola operazione) è necessario però evitare certi valori di $m$, come le potenze di 2 ($m$ non deve essere della forma $2^p$) altrimenti $k \mod m$ sarebbero i $p$ bit meno significativi di $k$, conviene prendere un numero primo non troppo vicino ad una potenza esatta di 2.

> [!esempio]
> $m = 5$
> $key : \{ 38,12,18 \}$
> $h(38) = 3, h(12) = 2, h(18) = 3$ quindi
> $$ T = \begin{bmatrix}
> NIL & NIL & lista(12)  &  lista(38, 18) & NIL
> \end{bmatrix} $$
> 

## Metodo della moltipliazione
Moltiplichiamo $k$ per una costante $A$ reale tale che $0 < A < 1$, quindi prendiamo la parte frazionare di $kA$ ed il risultato lo moltiplichiamo per $m$ e ne prendiamo una parte intera, in simboli:
$$ h(k) = \lfloor m(kA \mod 1) \rfloor $$
dove $x \mod 1 = x - \lfloor  x \rfloor$ è la parte frazionaria di $x$, in questo caso il valroe di $m$ non è critico e funziona bene con qualsiasi valore di $A$. Spesso come $m$ si prende una potenza di $2$ in questo caso (quindi $m = 2^p$), questo rende piú semplice i conti per un calcolatore, inoltre in questo caso si prende come valore di $A$ uno nella forma $s / 2^w$ con $w$ dimensione della parola di memoria del calcolatore.

$A = 0.168, m = 5, keys = \{ 38,12,18 \}$
$h(38)=2, h(12) = 2, h(18)=0$
$$ T = \begin{bmatrix}
lista(18) & NIL & lista(38,12) & NIL  & NIL
\end{bmatrix} $$
## In indirizzamento aperto
In questo caso la tabella contiene tutte le chiavi senza memoria aggiuntiva, quindi necessariamente $\alpha \leq 1$. Per implmentarlo cerchiamo l'indice dello slot in cui va memorizzato l'ogg

$h : U \times \{ 0,1,\dots,m-1 \} \to \{ 0,1,\dots,m-1 \}$
- La sequenza di ispezione $\left< h(k,0),h(k,1),\dots,h(k,m-1) \right>$

