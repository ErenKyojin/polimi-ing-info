---
aliases: metodi
creation date: 2024-05-19
---

>[!def]
>le procedure definite nella classe sono dette metodi della classe, sono procedure che appartengono agli oggetti (a meno dell'utilizzo della chiave di definizione `static`) ed hanno come parametro implicito l'oggetto a cui appartengono (parametro accedibile attraverso la parola chiave `this`)

```java
class Data {
...
	public int leggi_giorno(){...}
	public int leggi_mese(){...}
	public int leggi_anno(){...}
}
```
