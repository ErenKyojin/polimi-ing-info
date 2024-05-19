---
aliases: class, classi
creation date: 2024-05-18
---

> [!def]
> Nei [[linguaggi orientati agli oggetti]], una classe è un costrutto modello per creare un oggetto.

In java ogni classe deve essere o una dichiarazione di tipo o una collezione di funzioni, inoltre all'interno di una classe vi possono essere dichiarazioni di variabili, detti [[attributo|attributi]], e di funzioni, detti [[metodo|metodi]]



>[!example] esempio in pseudocodice
>```
>class {
>	private int giorno
>	private int mese
>	private int anno
>	...
>	public int leggi_giorno() { ... }
>	public int leggi_mese() { ... }
>	public int leggi_anno() { ... }
>}
>```

La classe è come uno struct del C, ma
- contiene anche funzioni
- dati e funzioni sono incapsulati (private invisibili, public no)