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
- sistemi centrali RPC e OO, gestisce doppiette *request-response*  **asincrone**
	- Il client attende per la risposta del server
- I sistemi MOM rendono disponibili scambi di messaggi attraverso client e server
	- Un SENDER manda un messaggio di richiesta in una coda e prosegue
	- Un RECEIVER prende il messaggio dalla coda, lo processa e inserisce una risposta nella coda
	- Il SENDER riceve la risposta dalla coda e chiama una funzione per gestirla

Permette di porre un wrapper su sistemi diversi, magari legacy e in linguaggi diversi, in modo da fornire una comunicazione basilare


## Web based three-tier architectures
dal 1990 arriva il web, che **rivoluziona il middle-tier**, è simile a RPC ma
- Il client è un web browser standard e gestisce unicamente la presentazione
- Il livello centrale include il web server che comunica attraverso un protocollo standard HTTP
- Il client emette richieste HTTP per risorse
- Il tier centrale
	- risorse statiche del server (immagini, file...)
	- Interfacce generate dinamicamente 
	- Processa aggiornamenti di dati 

> [!important] Quindi
> Vince eliminando il problema di installazione di client, il browser va bene per qualsiasi documento, e lo fa attraverso un protocollo semplice (due funzioni)

Limiti dell'architettura HTTP/HTML originale. #todo 

### Rich internet applications
Fusione di  web e applicazioni desktop

Applicazioni in cui si può riprogrammare il browser (attravers)