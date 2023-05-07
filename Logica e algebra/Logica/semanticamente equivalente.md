---
aliases: 
creation date: 2023-05-07 10:49
modification date: 2023-05-07 10:49
---

Una formula $\mathcal{A}$ è semanticamente equivalente a $\mathcal{B}$ (scriveremo $\mathcal{A} \equiv \mathcal{B}$) se tutti e soli i [[modelli]] di $\mathcal{A}$ sono modelli di $\mathcal{B}$, in altre parole se $\mathcal{A}$ è conseguenza [[semantica]] di $\mathcal{B}$ e $\mathcal{B}$ è conseguenza semantica di $\mathcal{A}$.
$\mathcal{A}$ è semanticamente equivalente a $\mathcal{B}$ se e solo se $\mathcal{A} \iff \mathcal{B}$ è una tautologia.

Le formule non semanticamente euqivalenti costruite utilizzando $n$ lettere enunciative sono al piú $2^{2^n}$, tante sono infatti le possibili tavole di verità distinte in quanto ci sono $2^n$ possibili assegnamenti di valori alle lettere enunciative e per ogni assegnamento di valori alle lettere enunciative ci sono due possibili valori di verità per una [[formule ben formate|f.b.f.]] 

Ad ogni tavola di verità corrisponde sempre una f.b.f. che la ammette come tavola di verità? La risposta è sí, ed il metodo per costrui la formula è il seguente:
Ad ogni riga della tavolesi associa un termine costruito facendo l'and di ogni lettera enunciativa o della sua negazione, a seconda che le lettere assumano il valore 1 o 0


