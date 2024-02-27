---
aliases: HyperText Transfer Protocol
creation date: 2024-02-27
---

Livello di protocollo per lo scambio di documenti ipertestuali definito dallo standard w3


### HTTP come un sistema client server
Enumera i seguenti
- Client, un programma sulla macchina dove interagisce l'utente il cui scopo è il mandare richieste al server per l'acquisizione di risorse
- Server, formula le risposte alle richieste provenienti dal client
- User agent, il client che inizializza la richiesta, solitamente il [[browser]]
- Server di origine, il server dove risiede o viene creata la risorsa 
	- il server che detiene la copia originale della risorsa, potrebbe essere che la risposta non avviene direttamente a partire da quel server ma da uno che possiede una copia della risorsa
- Risorsa, un oggetto o servizio che può essere identificato da un [[uniform resource identifiers|URI]]

![[browser#browser http]]

![[Server HTTP]]


### Limitazioni HTTP
- HTTP non ha stati, ogni richiesta è indipendente da tutte le altre, inoltre significa che le sessioni sono anonime (inizialmente chiudeva anche immediatamente la connessione TCP dopo ogni scambio). Questo problema si risolve attraverso l'[[application server]]


### Proxy HTTP
Programma intermediario sia server sia client che ha il fine di fare richieste da parte dell'altro client. Utile per controllare l'accesso alle risorse (chi vi può accedere) e per fare caching di risorse (salvo sul proxy le risorse usate di recente)

### Gateway HTTP
Server che fa da intermediario per qualche altro server, a differenza del proxy riceve le richieste come se fosse l'origine, non si può sapere se si sta comunicando con un gateaway

>[!question] Come troviamo le risorse?
>[[uniform resource identifiers|URI]] e in modo più specifico [[Uniform Resource Locator|URL]]

![[Richiesta HTTP]]