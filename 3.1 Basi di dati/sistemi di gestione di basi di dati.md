---
aliases: sistema di gestione di basi di dati, DBMS, Data Base Managment System
creation date: 2024-02-27
---

>[!definition]
>Un **Data Base Managment System** è un sistema software che gestisce collezioni di dati, grandi, condivise e persistenti, assicurando la loro affidabilità e privatezza.


I DBMS devono essere
- **grandi**: devono poter contenere fino a migliaia di terabyte di dati, e miliardi di terabyte
- **condivise**: devono poter servire più applicazioni ed utenze, implementando anche controlli di concorrenza per evitare modifiche simultanee
	- ridurre la **ridondanza**
	- ridurre le **inconsistenze**
- **persistenti**: devono continuare ad esistere nel tempo a prescindere dallo stato esecutivo dei programmi che lo utilizzano
- in grado di garantire **affidabilità**: i dati sono conservati nel loro stato, evitando corruzione dei dati. Questo viene ottenuto anche attraverso molteplici copie dei dati, mantenute aggiornate, in posti lontano dall'altro (ogni singolo dato ha un valore enorme!!)
- in grado di garantire **Privatezza**: attraverso un sistema di autorizazzione, ogni utente può accedere e/o modificare una quantità di dati ridotta
- **efficienti**: devono utilizzare risorse accettabili per l'utente (in termini di tempo e spazio)
- **efficaci**: le attività degli utenti devono essere rese produttive al massimo.

i DBMS sono progettati quindi per essere un estensione del sistema originale del [[File System]]


Vi è una architettura proposta, detta a [[architettura a tre livelli]]