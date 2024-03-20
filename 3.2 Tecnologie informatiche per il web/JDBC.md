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

Se una connessione è aperta con init, viene chiusa con destroy