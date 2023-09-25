---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

accadimenti che influenzano il processo

```bpmn
url: [[eventi.bpmn]]
height: 200
enablepanzoom: false
```

- Evento iniziale: produce un token
- Evento intermedio: occorrenza durante un processo
- Evento finale: chiude un token

## Eventi principali
- Generico
- Messaggio
	- Passaggio di comunicazione o oggetti fisici
- Segnale
	- Comunicazione generica
- Tempo
	- Intervallo etmporale o momento specifico
- Condizione
	- Occorrenza di una condizione
- Terminazione
	- Consuma tutti i token per il (sotto)processo
- Errore
	- Situazione d'errore da gestire all'infuori del processo

```bpmn
url: [[eventi2.bpmn]]
enablepanzoom: false
```

#### Catching vs Throwing events
Catching events -> attivano il processo o la sua prosecuzione
Throwing event -> eventi che indicano il raggiungimento di una condizione o di un risultato