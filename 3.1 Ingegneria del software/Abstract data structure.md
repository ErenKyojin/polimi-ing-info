---
aliases: ADT
creation date: 2024-05-18
---

> [!definition]
> Astrazione sui dati, non si classifica più in base alla rappresentazione ma in base al comportamento atteso.

Le uniche cose che l'ADT espone sono il nome del tipo e le operazioni per modificare ed ottenere i dati (o oggetti) del tipo. Tutto il resto è nascosto a chi utilizza l'interfaccia, questo è utile per la programmazione modulare e/o progetti con più programmatori.

Non tutti i lignuaggi permettono la definizione di ADT, ad esempio C, ed anche se spesso è possibile sfruttare funzioni del linguaggio più avanzate (headers, preprocessore, ...) per separare interfaccia e rappresentazione, l'assenza di costrutti adatti alla gestione di ADT li rende non adatti ai lavori. Si utilizzano quindi [[linguaggi orientati agli oggetti]]