---
aliases: 
creation date: 2024-03-16
---

>[!def]
>Il datalog è un adattamento per basi di dati del linguaggio per la logica "prolog", è composto da due tipo di predicati
>- estensionali, equivalgono alla relazione nelle basi di dati
>- intensionali, specificati attraverso regole logiche dette [[regole Datalog]], sono simili alle [[relazioni virtuali]]

- I predicati estensionali possono comparire unicamente nel corpo delle regole
- Se una variabile è nella testa di una regola, deve essere anche nel suo corpo
- Se una variabile compare in un atomo di un confronto, deve comparire anche in un atomo della stessa regola

Quindi il corpo del datalog è una serie di congiunzioni tra atomi.


Il datalog consente la ricorsività, un predicato intensionale può essere definito attraverso se stesso. 

Le interrogazioni Datalog sono semplicemente tutte le tuple della relazione R che possono essere ottenute sostituendo variabili e costanti, spesso si indicano con un ? che precede l'interrogazione.


## Potenza
Affinchè il datalog non ricorsivo acquisisca lo stesso potere espressivo del [[calcolo relazionale sui domini]] è necessario aggiungere la possibiltà di negazioni di condizioni atomiche nel corpo, che indichiamo con l'operatore `NOT`.

Se invece consideriamo la versione di Datalog in cui la ricorsività è definita la potenza è maggiore.