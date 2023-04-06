---
aliases: problemi
---

Due tipi di problemi affrontati:
$x \in L$? stringa appartiene a linguaggio (automi)
$y = \tau(x)$, quest'ultimo detto traduzione

## Traduzione
$y = \tau(x)$
con $\tau$ traduzione, ossia una funzione da $L_{1}$ a $L_{2}$ [[Linguaggio|linguaggi]]
- $\tau_{1}$ raddopia gli 1,
	- $\tau_{1}(00010110) = (=00011011110$
- $\tau_{2}$ scambia a con b
	- $\tau_{2}$(abbbaa) = baaabb

Protocolli di compressione, protocolli autocorrettori, [[compilazione]] da [[Linguaggio|linguaggi]] a oggetti, traduzione italiano -> inglese

# Definizione formale
Cosa intendiamo con problema?
I due problemi visti fino ad ora possiamo riassumerli in un unico problema
$$z \in L_{\tau}=\left\{ x \$ y | y = \tau(x) \right\} $$

Se ho u tipo di macchina che sa risolvere $y = \tau(x)$ evoglio usarla per risorvere $x \in \mathcal{L}$ mi basta definire $\tau(x)=1$ se $x \in \mathcal{L}$ e $\tau(x) = 0$ se $x \notin \mathcal{L}$.

Viceversa se ho un tipo di macchina che sa risolvere il problema $x \in \mathcal{L}$ possiamo definire il liguaggio $\mathcal{L}_{\tau}=\left\{ x\$y | y = \tau(x) \right\}$
- Fissato un certo $x$ enumero tutte le possibili stringe $y$ sull'alfabeto di uscita e per ognuna domando alla macchina se $x\$y \in L$,
- Prima o poi se $\tau(x)$ è definito troverò quella per cui la macchina risponde positivamente. Procedimento lungo in quanto bruteforce; ma, almeno al momento, non ci interessa l'efficienza.


Teorema di rice -> ... -> dimostrazioni diagonali