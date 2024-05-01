---
aliases: 
creation date: 2024-03-16
---

> [!definition]
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
	- ✅ non occupano memoria fisica
	- ❗devono essere calcolate ogni volta

Le viste sono definite tramite una espressione del linguaggio di interrogazione. Verrano quindi sostituite nelle varie operazioni dalla formula che descrivono.

>[!example]
>$R = \sigma_{\text{età-curr > età-pensione }}(R_{1} \bowtie R_{2})$
>Avremo che
>$$ \sigma_{stipendio > 40k} (R) = \sigma_{stipendio>40k}(\sigma_{\text{età-curr > età-pens}}(R_{1} \bowtie R_{2})) $$
