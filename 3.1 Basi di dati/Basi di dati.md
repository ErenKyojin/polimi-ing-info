---
aliases: Base di dati
creation date: 2024-02-27
---

>[!definition]
>una **base di dati** è una collezione di dati

La gestione dei dati originariamente era affidata ai file, ma fin da subito sono parsi evidenti alcuni problemi, prima di tutto i file hanno delle procedure di controllo molto basilari, ma ancora peggio è stata la gestione di dati per differenti applicazioni. Ogni applicazione infatti gestisce il proprio file privato, con informazioni leggermente diverse. Ma per dati condivisi questo può significare aggiornamenti e dati non coerenti tra più applicazioni.

Per questo genere di iconventienti sono state sviluppate le basi di dati, e i [[sistemi di gestione di basi di dati]].

Possiamo ridefinire le basi di dati come

>[!definition]
>Una base di dati è una collezione di dati gestita da un DBMS


Per organizzare una struttura utilizziamo [[modelli dei dati]]


Attraverso il concetto di [[istanza di relazione|relazione]] del [[modello relazionale]], possiamo definire un'istanza di base di dati (o direttamente base di dati).

>[!definition]
>Sia $\mathbf{B} = \{ R_{1}(X_{1}), R_{2}(X_{2}),\dots,R_{m}(X_{m}) \}$ uno schema di una base di dati, una **istanza di base di dati** è un insieme $\mathbf{r} = \{ r_{1},r_{2},\dots,r_{n} \}$ di relazioni, con $r_{i}$ relazione sullo schema $R_{i}(X)$