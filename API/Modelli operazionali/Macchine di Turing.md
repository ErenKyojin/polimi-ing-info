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


### Configurazione finale
-Stato di accettazione $F \subseteq Q$
- Per comodità: $\delta,[\eta] (\mathbf{q},\dots)=\perp \forall q \in F$
- La macchina si ferma quando $\delta,[\eta],(q,\dots) = \perp$
- La stringa $x$ di ingresso viene accettata se e solo se:
	- Dopo un numero finito di mosse la macchina si ferma (Si trova in una configurazione $\delta,[\eta],(q,\dots)= \perp$)
	- Lo stato $q$ in cui si trova quando si ferma $\in F$
- La stringa $x$ di ingresso **non** è accettata se avviene uno dei seguenti:
	- La macchina si ferma in uno stato $\ni F$
	- La macchina non si forma

----
>[!Esempio]
>Automa che riconosce $\left\{ a^nb^nc^n | n > 0 \right\}$
>Slide 88 #todo 

Negli automi a pila possiamo scrivere piú di un elemento in pila ad ogni mossa, per replicare questo comportamento sfruttiamo epsilon mosse

>[!esempio]
>Calcolo del successore di un numero codificato in decimali. S91
>
>- $M$ copia tutte le cifre di $n$ su $T$ alla destra di $Z_{0}$, cosi facendo sposta la testina di $T_{2}$ dello stesso numero di posizioni
>- $M$ scandisce le cifre di $T_{1}$ da destra a sinistram scrive in $T_{2}$ da destra a sinistra modificando opportunamente le cifre (i 9 diventano 0, la prim cifre diversa da 9 diventa la cifra successiva, le altre copiate uguali)
>- $M$ ricopia $T_{2}$ sul nastro di uscita
>
> #### Notazione
> - $: qualsiasi cifra decimale
> - \_: blank
> - \#: qualsiasi cirfa $\neq 9$
> - \^: il successore della cirfa denotata da # 
>  - <Input,T1,T2,Scrittura>


## [[Chiusura]]
Le macchine di turing possono simulare altre macchine di turing in modo molto semplice, quindi sono chiuse per unione ed intersezione.

### Simulazione in serie
Simulo prima una macchina e poi l'altra, è adatta per l'intersezione, infatti la prima macchina puó, andare in loop, accettare, o rifiutare, e tutti questi casi son