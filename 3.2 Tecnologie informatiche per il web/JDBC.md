---
aliases: 
creation date: 2024-03-20
---

Implementazione java della conessione al database della struttura multi tier.


i componenti della API sono:
- DriverManager
- Driver
- Connection
- Statement
- ResultSet
- SQLException


libreria java.ql 

- java.sql.Connection
- java.sql.Statement
- java.sq,


## Workflow
- Connessione alla base di dati
	- Solitamente più di un servlet richiede l'accesso, quindi la connessione alla bae di dati è una risorsa condivisa 
- Preparazione ed esecuzione della query
- Processo del risultato
- Disconnessione dal database (Importante!)


## code

```java
import java.io.*;
import java.sql.*; // !!! 
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/ServletEsempioQuery")
public class ServletEsempioQuery extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Connection connection = null; //!!!

}

```

### Inizializzazione

### Esecuzione di una query
```java
public void doGet(httpServlet req, HttpServletResponse res) trows ServletException, IOException  //!!!
{ 
	String query = "SELECT firstname, lastname FROM utente";
	ReulstSet result = null;
	Statement statement = null;
	res.setContentType("text/plane");
}
```


### Chiudere la connessione
```java
public void destroy() {
	try {
		if(connection != null) {
			connection.close()
		}
	} catch ...
}
```

Se una connessione è aperta con `init`, è corretto chiuderla con `destroy`
Se una connessione è aperta in `doGet()` o `doPost()`, è corretto chiuderla quando il metodo termina


## Prepared statement
Separare la fase di compilazione dalla fase di esecuzione.
- Prepare statement, prepara un piano d'accesso per eseguire la base di dati (eventuali variabili non ancora conosciute indicate con `?` e dette *bind variables*)
- Il [[sistemi di gestione di basi di dati|DBMS]] compila il template e mantiene il risultato senza compilarlo
- Eseguire lo statement, solo ed escluisavemnte quando l'applicazione fornisce tutti i valori per  i parametri

```java
...
String city = req.getParameter("city");
String query = "SELECT * FROM person WHERE city = ?";
...
pstatement = connection.prepareStatement(query);
pstatement.setString(1, city);
result = pstatement.executeQuery();
...
```


>[!warning] [[SQL injection]]


## Gestione delle transazioni

ACID
- Atomicity
- Consistency
- Isolation
- Durability

Commita ogni scrittura, questo permette di evitare code troppo lunghe per l'accesso alle tabelle. Ogni statement è trattato come una transazione.


Disabilitazione autocommit per raggiungere la proprietà dell'atomicità. Commito solo dopo essermi assicurato di nessuna exception, altrimenti rollback