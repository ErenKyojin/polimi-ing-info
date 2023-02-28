Ultimo automa che vedremo, introdotto alla fine della prima metà del '900 da Alan Turing.
È una macchina di bassissimo livello, è progettata per essere estremamente semplice, questo rende tuttavia molto piú complesso lavorarci sopra ("Programmare"), partiermo quindi con una variante leggermente piú complicata (che quindi renderà piú semplice lavorarci)

# Macchina di Turing a $k$-nastri

![[MT a k-nastri.canvas]]

È una generalizzazione dell'automa a pila, su ogni nastro (infinito) c'è una testina, quindi puó lavorare su **elementi che non sono in cima alla pila**, puó leggere e scrivere in qualsiasi punto del nastro. 
- Sui caratteri non ancora inizializzati ci sono caratteri blank: $\cancel{ {b} }$
- Movimenti della testina
	- S - STOP
	- L - LEFT
	- R - RIGHT


## Mossa della macchina di Turing
$$
\delta,[\eta]: Q\times I \times \Gamma^k \to Q \times \Gamma^k \times \left\{ R,L,S \right\}^{k-1}[\times ] 
$$
con $\Gamma$ alfabeto di pila
