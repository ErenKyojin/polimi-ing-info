---
aliases: 
creation date: 2024-03-07
---

Vediamo il significato di diversi pattern 
- stringa che inizia con `/` e termina con `/*`
	- indica il percorso dell'URI richiesto
- stringa che iniza con `/*.` 
	- indica il **tipo** del file richiesto, tramite la sua estensione
- stringa vuota "` `" indica il [[context root]]
- stringa `/` indica il servlet principale dell'applicazione
- ogni altra stringa deve corrispondere così com'è