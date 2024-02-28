---
aliases: 
creation date: 2024-02-27
---

I dati sono trasferiti attraverso blocchi detti "chunks". Sfrutta l'header Transfer-Encoding con il valore chunked al posto di Content-Length. Non è necessario per chi invia sapere la lunghezza del contenuto prima di iniziare a trasmettere (è utile per [[risorse calcolate dinamicamente]]).
La dimensione è inviata prima di ogni chunk affinchè il ricevitore possa sapere quando il chunk è ricevuto in interezza