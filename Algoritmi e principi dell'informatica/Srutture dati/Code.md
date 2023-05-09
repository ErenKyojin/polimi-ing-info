---
aliases: coda, queue
creation date: 2023-05-09 12:52
modification date: 2023-05-09 12:52
---

Le code sono simili alle [[pila|pile]], salvo che una coda è gestita con una politica FIFO (First in first out), è una [[Strutture dati|struttura dati]] sulla quale si possono fare le seguenti operazioni:
- Controllare se è vuota
- Inserire un elemento nella collezione (ENDQUEUE)
- Cancellare un elemento della collezione (DEQUEUE)
	- Si noti che l'operazione di DEQUEUE restituisce l'elemento cancellato

Una coda è gestita con una politica FIFO, l'elemento che viene cancellato è quello che era stato inserito per primo. 

### Implementazione tramite liste semplici
Provare a farlo con un unico puntatore di partenza

\[ | \] -> \[ | \] -> \[ | \]



