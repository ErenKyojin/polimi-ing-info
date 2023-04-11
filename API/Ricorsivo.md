---
aliases: Decidibile, decidibilità
creation date: 2023-04-11 11:29
modification date: 2023-04-11 11:29
---

Concentriamoci su [[problema|problemi]] in modo tale che la risposta sia binaria:
Problema = [[GAL/insieme|Insieme]] $S \subseteq \mathbb{N} : x \in S$?
(o calccolo di $f : \mathbb{N} \to \{ 0,1 \}$)

Ricordando la [[Funzione caratteristica]] di un insieme

> [!def]
> Un insieme $S$ è ricorsivo o decidibile se e solo se la sua [[Funzioni|funzione]] caratteristica è calcolabile

Dato l'insieme dei [[numeri naturali]], è un insieme ricorsivo?
Si! È calcolabile attraverso un programma / una [[Macchine di Turing|macchina di turing]] che scrive sempre 1 a prescindere dall'input. 

Piú complicato è il concetto di [[Ricorsivamente enumerabile]]

>[!teorema]
>1. Se $S$ è ricorsivo è anche [[Ricorsivamente enumerabile]]
>2. $S$ è ricorsivo se e solo se $S$ stesso ed il suo complemento $\neg S = N - S$ sono ricorsivamente enumerabili.
>
>Quindi due semidecidibilità fanno una decidibilità, quando rispondere No equivale a rispondere si.
>
>>[!corollario]
>>Gli insiemi decidibili sono chiusi rispetto al [[complemento]]
>
>>[!dim]
>>1. Se $S$ è vuoto è RE per definizione!
>>   Possiamo quindi assumere $S \neq \varnothing$ e indichiamo con $c_{s}$ la sua [[funzione caratteristica]]:
>>   $$ \exists k \in S  \text{ cioè } c_{s}(k) = 1$$
>>   definiamo la funzione
>>   $$ g_{s}(x) = x \text{ se } c_{s}(x) = 1, \text{ altrimenti }g_{s}(x)=k $$
>>   $g_{s}$ è totale per definizione, calcolabile e $I_{g_{S}} = S$
>>   quindi $S$ è ricorsivamente enumerabile
>>   *(Dimostrazione non costruttiva, non sappiamo se $S \neq \varnothing$, ne sappiamo calcolare $g_{s}$, tuttavia ci basta sapere che esiste $g_{s}$ se $S \neq \varnothing$)*
>>
>>2. $S$ ricorsive $\iff S$ e $\neg S$ sono ricorsivamente enumerabili
>>   - $S$ ricorsivo implica $S$ ricorsivamente enumerabile *(dimostrato nel punto 1)*
>>   - $S$ ricorsivo $\to$
>>     - $c_{s}(x) (=1 \text{ se 1 }x \in S, c_{s}(x) =0 \text{ se } x \notin S)$ calcolabile ->
>>     - $c_{\neg S}(x) (= 0 \text{ se }x \in S, c_{S}(x) = 1 \text{ se } x \notin S)$ calcolabile ->
>>     - $\neg S$ ricorsivo $\to \neg S$ ricorsivamente enumerabile
>>   Viceversa:


