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

>[!definition]
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


>[!example] Esempio di una classe Servlet che stampa hello world
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

>[!example]
>localhost:8080/examples nostra webapp. La dicitura /examples è detta [[context path]]


Il servlet java può servire una richiesta HTTP determinando l'[[uniform resource identifiers|URI]] di richiesta e un URI pattern, specificato tramite un'[[annotazione]] sul servlet
```java
@WebServlet("/examples")
public class Servlet1 extends HttpServlet {
	...
}
```
Alternativamente si può assegnare attraverso XML


L'URI richiesto sarà quindi
`rURI = contextPath + servletPath + pathInfo`
- `contextPath`
- `servletPath`
- `pathInfo`

[[sintassi di mapping]]

Il server trova una corrispondenza dall'URI richiesto al servlet attraverso le seguenti regole:
1. Se è trovata una corrispondenza esatta del percorso richiesto il servlet corrispondente viene scelto
2. Se non si riesce a soddisfare il primo requisito, si procede attraversando le directory una ad una, sfruttando `/` come separatore, il servlet che mantiene la corrispondenza più a lungo vince
3. Se non si riescono a siddisfare i requisiti `1.` e `2.`, e la richiesta termina con un `.*` ed esiste un servlet che si occupa dell'estensione corrispondente, viene scelto quest'ultimo
4. Se non si riesce a soddisfare nessun altro requisito il servlet base è scelto


## Limitazioni
- Complesso e i programmi sono difficilmente leggibili. 
- Il codice produce codice statico e contenuto dinamico.
- La produzione del mark-up richiede l'uso massiccio del metodo printLn
- HTML mischiato con codice applicativo, che previene gli editor HTML per mostrare correttamente.
- Facile fare errori e difficile da mantenere.
- Pessima [[moduli|modulazione]], contro i principi dell'ingegneria del software

La soluzione è il [[templating]]