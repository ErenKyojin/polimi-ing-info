---
aliases: CGI
creation date: 2024-02-29
---

Un'interfaccia che permette al web server di lanciare applicazioni esterne che creano pagine dinamicamente

![[CGI.canvas]]

CGI non è un protocollo telecomunicativo ne un linguaggio di programmazione. È un'interfaccia tra il web server e l'applicazione che definisce alcune variabili comunicative standard. Ed è implementata tramite variabili di sistema, accessibili da qualsiasi linguaggio di programmazione.

### Funzionamento

Il client specifica nell'URI il nome del programma da invocare, che deve essere in una specifica directory del web server (solitamente nella cartella `/cgi-bin/`)

Il server riconosce (tramite configurazione!!) che l'URI richiesto è un eseguibile. 

Il server inizializza l'interfaccia (tramite [[fork]]). Il server comunicherà col nuovo processo (sulla stessa macchina ovviamente) attraverso le variabili d'ambiente che vengono anch'esse inizializzate subito prima di eseguire il programma

Il programma stampa su STDOUT, il webserver legge e manda indietro terminando il processo.

### Svantaggi
È una tecnologia estremamente dispendiosa in termine di risorse (ad ogni interazione possibilmente corrisponde una fork, reinizializzare il database...)

---

Come comunica il browser con CGI?
Attraverso
- HTTP GET
	- parametri nell'URL
	- https://example.com?par=val
- HTTP POST
	- Parametri inseriti come un entità HTTP nel body della richiesta, richiede l'utilizzo di HTML

Per allegare nel body una request si utilizza 
```html
<form action="" method=POST>
	...
</form> 
```
(funziona sia tramite GET che tramite POST)

1. leggi variabili d'ambiente 
2. esegui il programma 
3. stampa heading (`content-type: text/html`) 
4. stampa HTML

Per la lettura di variabili in particolare:
![[CGI-2.canvas]]

per superare le limitazioni di CGI nasce [[servlet]]