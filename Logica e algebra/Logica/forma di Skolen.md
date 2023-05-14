---
aliases: 
creation date: 2023-05-11 19:49
modification date: 2023-05-11 19:49
---

>[!def]
>Una formula si dice in **forma di Skolem** se è in forma normale prenessa e non contiene [[quantificatori]] esistenziali.
>

In genere non è possibile, data una formula $\mathcal{A}$, trasformarla in una formula equivalente che sia in forma di Skolem, ma è possibile trovare una formula $\mathcal{B}$ in forma normale di Skolem su un alfabeto più ampio di quello di partenza che risulta soddisfacibile in qualche interpretazione se e solo se $\mathcal{A}$ è soddisfacibile in qualche interpretazione.

Il procedimento da seguire è questo:
- Portare $\mathcal{A}$ in forma prenessa
- Se in testa c'è un quantificatore esistenziale eliminarlo sostituendo ogni occorrenza libera della variabile che era quantificata da quel quantificatore con una nuova costante e ripetere il procedimento fino a che o tutti i quantificatori esistenziali sono eliminati o il primo quantificatore di prefisso rimasto è un quantificatore universale
- Se non sono rimasti quantificatori esistenziali, la formula è in forma di Skolen, altrimenti considerare il primo quantificatore esistenziale che si incontra percorrendo la formula da sinistra a destra, questo è preceduto da $n (n > 1)$ quantificatori universali, eliminare il quantificatore esistenziale sostituendo ogni occorrenza libera della variabile che era quantificata da quel quantificatore con un termine formato da una nuova lettera funzionale di apice $n$ applicata alle $n$ variabili quantificate dai quantificatori universali che precedevano il quantificatore esistenziale eliminato, ripetere il procedimento fino a che o tutti i quantificatori esistenziali sono eliminati