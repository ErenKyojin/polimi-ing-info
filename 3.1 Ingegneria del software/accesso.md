---
aliases: 
creation date: 2024-05-19
---

In [[java]] l'accesso a [[metodo|metodi]] e ad [[Attributi]] è eseguito attraverso la notazione punto

>[!esempio]
>```java
>Data d;
>int x;
>x = d.leggi_giorno()
>```


### chiavi `public` e `private`
attraverso i metodi public di una classe è possibile vedere lo stato di un oggetto


```java
public class Data{
	private int giorno;
	private int mese;
	private int anno;
	
	public int leggi_data();
	public int leggi_mese();
	public int leggi_anno();
}
```

>[!multi-column]
>
>>[!success]
>>```java
>>Data d;
>>int x;
>>...
>>x = d.leggi_giorno
>>if(x == 20){
>>...
>>}
>>```
>
>>[!failure]
>>```java
>>Data d;
>>if(d.giorno == 20){ //compil. error
>>...
>>}
>>```

Nel secondo caso `d` non è accessibile