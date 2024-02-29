---
aliases: 
creation date: 2024-02-29
---

Il gateway è l'anello di congiunzione tra una richiesta HTTP ed una sorgente di informazione che non è in grado di accettarla.

Architetture per la publicazione di contenuto dinamico:
- [[Common Gateaway Interface|CGI]]
- Java Servlet
- Server-Side-Scripting
- ...

>[!warning] HTML è un linguaggio di strutturazione dei documenti, come posso produrre risposte a richieste HTTP personalizzate per utente? (ad esempio una pagina web del proprio profilo)
>Produzione dei contenuti lato server, il gateway deve interpretare la richiesta, **generare** la risposta, e restiture il documento personalizzato.
