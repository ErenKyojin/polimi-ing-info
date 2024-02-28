# BUS
Un BUS è una linea di uscite e ingresso, o "di trasporto", del segnale.

Un bus a 4 segnali è un collegamento a 4 bit


## Linee di uscita condivise
Ipotizziamo di avere due o più componenti, entrambi connesso allo stesso BUS, come si può garantire la non interferenza del segnale? Ci sono degli opportuni elementi funzionali che, se il BUS è impegnato, generano uno stato di alta [[Impedenza]] $\mathcal{Z}$ che essenzialmente genera un [[circuito aperto]] tra i componenti ed il BUS (eccetto il componente in uso, questi componenti si dicono [[buffer tri-state]]


# Controllo del BUS
È importante che il bus sia controllato da una sola $V_out$ alla volta, altrimenti si avrà un cortyocircuito sul BUS che lo danneggerà insieme alle porte