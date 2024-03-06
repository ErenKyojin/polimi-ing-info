---
aliases: waterfall model
creation date: 2024-03-06
---

Il modello a cascata, proposto alla fine degli anni '60, è un modello che ha come l'obiettivo quello di istituire una "catena di montaggio" nello sviluppo del software.
Inizialmente si costituiscono dei livelli, composti da fasi e attività, si sceglie l'output di ciascuna fase e si decide un termine di ciascuna fase, che porta alla fase successiva della catena di montaggio; è impedito tornare all'indietro.

<span>
```mermaid
graph TB
	A(studio di fattibilità) --> B(analisi dei requisiti) --> C(progettazione) --> D(implementazione e test) --> E() --> F
```
</div>
