---
aliases: EA, architettura aziendale
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---


Significa architettura aziendale

> [!def]
> I [[sistemi informativi]] si sono evoluti come: sistemi distribuiti, collaborativi inter ed intra aziendali, inoltre il sistema informativo deve adattarsi al cambiamento senza dover rifare tutto da capo (requirements pull e technology push).
> Per gestire relazioni Business/TEcnologia progettiamo **strutture astratte** sfruttando il concetto di architettura (definizione ISO/IEC 42010)



```mermaid
graph LR
	subgraph Business
		a(funzionalità) <--> b(qualità)
 	end
 	subgraph IT
	 	c(tecnologia)<--> d(strutture)
 	end
 	Business -->|requirement pull| IT
 	IT -->|technology push| Business
```

### Architettura come base di progettazione

L'architettura fornisce tre diverse viste del sistema informativo
1. Statica - descrizione dei componenti hardware e software
2. dinamica - descirizione dei delle relazioni tra componenti
3. vista delle regole di progettazione e evoluzione del SI nel tempo

L'architettura è il punto di connessione tra BO e T nel [[BOAT]]


### Visione d'insieme della progettazione del sistema informativo
fig 2.11