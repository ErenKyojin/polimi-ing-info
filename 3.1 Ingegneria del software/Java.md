---
aliases: 
creation date: 2024-05-18
---

Java è un linguaggio di proggrammazione [[linguaggi orientati agli oggetti|Object Oriented]],  sviluppato dalla Sun Microsystems nel 1995. Ne esistono varie versioni, standard edition, micro edition, enterprise edition. 


### Caratteristiche principale
- Orientato agli oggetti
- Distribuito 
	- Comunicazione attraverso processi eventualmente intranet attraverso java RMI
- Multipiattaforma
	- Il codice è compilato in bytecode java, che viene a sua volta eseguito su una macchina virtuale detta java virtual machine (JVM). Quindi per ogni piattaforma è sufficiente implementare la JVM per eseguire codice java, che non va necessariamente scritto e compilato con un sistema in mente
- Sicuro
	- Essendo eseguito in una macchina virtuale, è eseguito in sandbox e non può danneggiare l'host

Inoltre mantiene comunque tutte le possibilità dei linguaggi funzionali:
- Tipi primitivi
- Variabili
- Dichiarazioni di controllo (if, while, for, else,...)
- Array*
Ma aggiungendo un livello di astrazione e di controllo superiore per i grandi progetti
- Classi
- Interfacce
- Pacchetti
- Nascondere informazioni
- Ereditarietà
- Polimorfismo e binding dinamico


Un programma in Java è un insieme di [[classe|classi]], il programma principale è definito dal metodo di una classe chiamato `main`

>[!java] HelloWorld.java
>```java
>public class HelloWorld {
>	public static void main(String args[]){
>			System.out.printLn("Hello World!");
>	}
>}
>```