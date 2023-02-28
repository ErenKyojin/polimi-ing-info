Ultimo automa che vedremo, introdotto alla fine della prima metà del '900 da Alan Turing.
È una macchina di bassissimo livello, è progettata per essere estremamente semplice, questo rende tuttavia molto piú complesso lavorarci sopra ("Programmare"), partiermo quindi con una variante leggermente piú complicata (che quindi renderà piú semplice lavorarci)

# Macchina di Turing a $k$-nastri

![[MT a k-nastri.canvas]]

È una generalizzazione dell'automa a pila, su ogni nastro (infinito) c'è una testina, quindi puó lavorare su **elementi che non sono in cima alla pila**, puó leggere e scrivere in qualsiasi punto del nastro. 

- Movimenti della testina
	- S - STOP
	- L - LEFT
	- R - RIGHT


## Mossa della macchina di Turing
$$
\delta,[\eta]: Q\times I \times \Gamma^k \to Q \times \Gamma^k \times \left\{ R,L,S \right\}^{k+1}[\times O \times \left\{ R,S \right\} ] 
$$
con $\Gamma$ alfabeto di pila, notare che sono tanti quanti i nastri di memoria, prima indichiamo i k caratteri letti dai k nastri, e poi i k caratteri scritti dai k nastri.
$k+1$ Movimenti in quanto c'è anche il nastro in ingresso.

>[!oss]
>$S$ sul nastro di ingresso è una epsilon mossa, inoltre posso leggere piú volte il contenuto del nastro di ingresso.

Quindi:
- L'[[Automa a stati finiti]] può solo avanzare sull'ingresso
- L'[[Automa a pila]] può avanzare o stare fermo
- La macchina di turing può avanzare, stare ferma o tornare indietro

### Configurazione iniziale
- Sui caratteri non ancora inizializzati ci sono caratteri blank: $\cancel{ {b} }$
- $Z_{0}$ nella prima posizione nei nastri di memoria
- Nastro di uscita blank
- Testine nella posizione 0 di ogni nastro
- Stato iniziale $q_{0}$
- Stringa di ingresso $x$ dalla $0$ esima cella del nastro, seguita da blank

----
>[!Esempio]
>Automa che riconosce $\left\{ a^nb^nc^n | n > 0 \right\}$
>Slide 88 #todo 

Negli automi a pila possiamo scrivere piú di un elemento in pila ad ogni mossa, per replicare questo comportamento sfruttiamo epsilon mosse