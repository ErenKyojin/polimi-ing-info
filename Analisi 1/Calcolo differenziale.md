# Calcolo differenziale
Vediamo e riflettiamo sui problemi che hanno portato al calcolo differenziale

>[!esempio] Cos'è la retta tangente in un punto ad una curva?
>Geometricamente il concetto sembra intuitivo, non è ovvia invece la definizione. Data la più semplice curva, ossia una circonferenza, di cui conosciamo la definizione di tangente in un punto $P$:
>1. La retta passante per $P$ e perpendicolare al raggio passante $P$.
>2. La retta passante per $P$ e che non interseca la circonferenza in altri punti
>
Nessuna di queste due definizioni però sembra adattarsi bene ad altre curve, non possiamo parlare sicuramente di raggio di una curva generica e quindi la prima viene esclusa a priori. La seconda invece sembra più adatta, ma fallisce considerando casi in cui rette tangenti alla curva, la tagliano in altri punti. Ci sono poi casi come $y=|x|$
>```desmos-graph
>y = \abs(x)
>```
che ha in $0$ infinite rette che soddisfano questa definizione, pur intuitivamente non essendocene nessuna realmente tangente.
>
>Per definire una retta tangente ad una curva, in realtà, dobbiamo definire una retta che passa per due punti molto vicini, di cui una fissata, ed uno mobile che si avvicina all'altro.
>Una retta infatti è definita passante per due punti,  e più questi due punti si avvicinano sulla curva più la retta si avvicina alla tangente. Se però scegliessimo subito due punti coincidenti avremmo infinite rette lì passanti.

Da queste osservazioni arriviamo al concetto di [[derivata]]

Obiettivo del calcolo differenziale è lo [[studio del grafico di una funzione|studio del grafico]] Di una [[Funzioni|funzione]].


## approsimazione

Un operazione molto comune nel calcolo differenziale è l'[[linearizzazione]]
