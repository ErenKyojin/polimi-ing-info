---
aliases: oggetti
creation date: 2024-05-19
---

>[!def]
>Area di memoria che contiene un valore per ciascun attributo definito nella classe.
>
>Un oggetto è detto **istanza** della [[classe]] che lo definisce

Oggetti definiti dalla stessa classe hanno la stessa struttura.


## Stato di un oggetto
Ogni oggeto, in ogni istante dell'esecuzione del programma, possiede un certo stato, che è definito dal valore degli [[attributi]]

>[!example]
>```java
>public class Data{
>	int giorno;
>	int mese;
>	int anno;
>	...
>}
>...
>
>Data compleanno
>compleanno giorno = 1
>compleanno mese = 1
>compleanno anno = 1970
>
>```
>
>la data 01/01/1970, contenuta nell'oggetto compleanno che è definito dai propri attributi