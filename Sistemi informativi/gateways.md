---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

- Gateway parallel (AND)
	- Tutti i flussi dopo l'AND verranno eseguiti
	- Tutti i flussi precedenti devono essere stati eseguiti
	- invio fattura e spedizione prodotto (esempio)
- Gateway exclusive (XOR)
	- Solo uno tra i flussi che lo seguono sarà eseguito
	- Solo uno tra i flussi che lo precedono deve essere stato eseguito
	- È necessario aggiungere una condizione che caratterizzi il percorso da prendere, e quale risultato ogni uscita rappresenti
- Gateway Inclusive (OR)
	- Almeno uno tra i flussi che lo seguono sarà eseguito
	- Tutti i flussi eseguiti (almeno uno) tra i flussi

```bpmn
url: [[gateways.bpmn]]
enablepanzoom: false
height: 
```


