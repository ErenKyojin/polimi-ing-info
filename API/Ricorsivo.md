---
aliases: Decidibile, decidibilità
creation date: 2023-04-11 11:29
modification date: 2023-04-11 11:29
---

Concentriamoci su problemi in modo tale che la risposta sia binaria:
Problema = Insieme $S \subseteq \mathbb{N} : x \in S$?
(o calccolo di $f : \mathbb{N} \to \{ 0,1 \}$)

Ricordando la [[Funzione caratteristica]] di un insieme

> [!def]
> Un insieme $S$ è ricorsivo o decidibile se e solo se la sua funzione caratteristica è calcolabile

Dato l'insieme dei numeri naturali, è un insieme ricorsivo?
Si! È calcolabile attraverso un programma / una macchina di turing che scrive sempre 1 a prescindere dall'input. 

Piú complicato è il concetto di [[Ricorsivamente enumerabile]]

>[!teorema]
>Se $S$ è ricorsivo è anche [[Ricorsivamente enumerabile]]
>$S$ è ricorsivo se e solo se $S$ stesso ed il suo complemento $\neg S = N - S$ sono ricorsivamente enumerabili.
>
>Quindi due semidecidibilità fanno una decidibilità, qua