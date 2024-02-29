---
aliases: java servlet
creation date: 2024-02-29
---

Voglaimo costruire un meccanismo di identificazione che duri per più di una richiesta.

Perchè usare Java?
- Multipiattaforma
- orientato a oggetti, utile fare due oggetti:
	- get
	- post
	- (session?)
	- Possiamo quindi oggettificare HTTP
- architetture network e enterprise

>[!def]
>Un servlet è un estensione ad un server che ne migliora le funzionalità, gira su un processo persistente in un a JVM sul server
>Vantaggi:
>- supporto per java richiesto solo sul server
>- portatili su diversi sistemi operativi
>- il resto dei benefici di java

È un vero e proprio [[framework]].

![[architettura-servlet.canvas]]