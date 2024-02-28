---
aliases: 
creation date: 2024-02-27
---

Minimizzare il traffico e l'utilizzo della banda attraverso la duplicazione di risorse in luoghi più vicini ai client e mandare quelle in risposta a richieste. 

Deve valere la trasparenza semantica, la cache deve essere conforme alla versione richiesta dal client.

- Scadenza: il server può indicare la risorsa attraverso gli headers `cache-control` ed `expires`. Una copia scaduta può essere validata dopo la scadenza (attraveso headers come `date` `last-modified` o tags entità come numeri di controllo versione). Può produrre l'heading `warning`