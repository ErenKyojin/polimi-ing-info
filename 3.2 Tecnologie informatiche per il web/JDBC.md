---
aliases: 
creation date: 2024-03-20
---

Implementazione java della conessione al database della struttura multi tier.


i componenti della API sono:
- DriverManager
- Driver
- Connection
- Statement
- ResultSet
- SQLException


libreria java.ql 

- java.sql.Connection
- java.sql.Statement
- java.sq,


## Workflow
- Connessione alla base di dati
	- Solitamente più di un servlet richiede l'accesso, quindi la connessione alla bae di dati è una risorsa condivisa 
- Preparazione ed esecuzione della query
- Processo del risultato
- Disconnessione dal database (Importante!)