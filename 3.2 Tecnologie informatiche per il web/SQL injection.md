---
aliases: 
creation date: 2024-03-20
---

L'utente può sfruttare il proprio input per far eseguire comandi indesiderati al DBMS



`SELECT * FROM person WHERE person = get.parameter("ID")`

Se ID = "1"
- restituisce l'utente con ID 1

Se ID  = "1 OR 1 = 1"
- restituisce tutta la tabella!!


È sufficiente sfruttare il prepare statement.