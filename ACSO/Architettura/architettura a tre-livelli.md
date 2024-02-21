---
aliases: 
creation date: 2024-02-21
---

Nuovo elemento ad un livello intermedio rispetto all'[[architettura client-server]]
Aggiungere un tier centrale separa meglio il client ed il server, infatti il tier centrale
- centralizza le connessioni al server di dati
- maschera i modelli di dati ai clienti
- può essere replicato per uno scale up
Quest'archittettura ha piùvarianti, dipendentemente dall'organizzazione software del tier centrale, vediamone alcun

## Three-tier architecture based on remote procedure call (RPC)
- Hardware: nuovo elemento -> tier centrale
- Topologia: lan/wan tra client e livello centrale, il server dati è connesso alla stessa LAN del server centrale
- Struttura software:
	- Il client gestisce solo le presentazioni, invece dell'SQL utilizza procedure remote usando protocolli distribuiti, spesso proprietari
	- Server centrale: Centralizza lal ogica applicativa e i modelli di dati. REnde le procedure remote disponibili, gestisce trascoding

## Object-oriented three-tier architecture
Invece che remotizzare le funzioni, remotizziamo gli oggetti

- Il tier centrali pubblica gli oggetti
- Lo sviluppo delle funzioni client richiede la conoscenza solo ed unicamente dell'interfaccia oggetto, non dell'implementazione
- Interface Definition Language (IDL) per la definizione astratta delle funzioni del server centrale
- Il server centrale è detto ORB (object request broker)

## Message oriented Middleware (MOM), architettura a messaggi
- sistemi centrali RPC e OO, gestisce doppiette *request-response*  **sincrone**
- 