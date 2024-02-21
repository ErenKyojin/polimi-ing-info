---
aliases: 
creation date: 2024-02-21
---

- Hardware specializzato
	- server per la gestione dei dati
	- client per il layout di presentazione
- Topologia: LAN con 1 o più serviser e N clients
- Struttura software: partitioning funzionale
	- L'hardware client manda richieste al server attraverso queries SQL, il client software contiene logica business e di presentazione (pre-fetch, cache, client-side processing)
	- Server software

>[!tldr] assessment
> - Vantaggi
>	- utilizzo di SQL
>	- Server side optimization by DBMS
>	- Ottimizzazione sofisticata lato client
>- Svantaggi
>	- "fat client", presentazione, logica business e modelli di dati mischiati nello stesso software lato client
>	- I modelli di dati lato client dipendono su quelli del server (difficoltà a propagare aggiornamenti)
>	- Distribuzione difficolotsa degli aggiornamenti lato client
>	- Una connessione al database per ogni client: costoso e non scalabile
>	- Inefficente uso delle risorse network, vengono trasferiti dati "raw" dal server al client
>