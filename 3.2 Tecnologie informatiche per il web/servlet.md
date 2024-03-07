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


I servlet sono gestiti da thread differenti di processi persistenti.
C'è solo un processo (la JVM che hosta il servlet)
- quando il servlet è caricato è caricata solo un'istanza
- richiesta HTTP concorrenti sono tratta attraverso chiamate ad un metodo di servlet
- Un thread per richiesta è allocato

È sicuramente un miglioramento di performance. 


> [!warning]
>
>I dati dei membri delle classi servlet sono condivise tra tutti i client HTTP, non vanno usate per thread safety


>[!esempio] Esempio di una classe Servlet che stampa hello world
>```java
>import java.io.*;
>import javax.servlet.*;
>import javax.servlet.http.*;
>
>public class HelloWorldServlet extends HttpServlet {
>	public void doGet(HttpServletRequest request,
 >                        HttpServletResponse response)
>			throws ServletException, IOException {
>		response.setContentType("text/html");
>		PrintWriter out = response.getWriter();
>		
>		out.println("<HTML>");
>		out.println("<HEAD><TITLE>Hello World Servlet </TITLE></HEAD>");
>		out.println("<BODY>");
>		out.println("Hello, World!");
>		out.println("</BODY>");
>		out.println("</HTML>");
>		out.close();
>	}
>}
>```


Per informare java di uqando deve chiamare una servlet devo usare l'annotazione `@WebServlet("/HelloWorld")`

Come fa un servlet sapere l'applicazione web a cui appartiene? 
Ogni applicazione web è collegata ad un oggetto `ServletContext` che definisce la vision che il servlet ha dell'applicazione. Questo oggetto permetto di ottenere risorse tramite URL e impostare attributi a cui altri servlet nello stesso contesto possono accedere.

Un servlet ha un root, ossia un percorso nel web server

>[!esempio]
>localhost:8080/examples nostra webapp. La dicitura /examples è detta **context path**, e coincide con un percorso sul web server