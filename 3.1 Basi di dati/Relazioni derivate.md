---
aliases: 
creation date: 2024-03-16
---

> [!def]
> In una base di dati possiamo avere due tipi differenti di relazioni
> - relazioni di base, ossia relazione autonome i cui valori non dipendono da altre relazioni
> - relazioni derivate, i cui valori dipendono da un'altra relazione
> 
> Una relazione derivata può dipendere da un'altra relazione derivata, ma ci deve essere un ordinamento definito per impedire che ci sia ragionamento circolare sulla loro definizione

Possono esistere due tipi di relazioni derivate:
- [[viste materializzate]]
	- ✅ sono immediatamente disponibili
	- ❗ devono essere aggiornate ogni volta che vengono aggiornati i dati di riferimento
- [[relazioni virtuali]] 
	- ✅ no