---
aliases: JSP
creation date: 2024-03-21
---

Al posto che programmare e infilarci dentro HTML, scriviamo HTML inserendoci all'interno il codice

```html
<%@ page import="java.io.*,java.util.*, java.util.Iterator, it.polimi.tiw.beans.*"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" %>
<!DOCTYPE html>
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>List of people</title></head>
<body>
 <p>Number of persons that match the query: <%= request.getAttribute("number") %></p>
  <table border="1">
    <tr><td>Firstname</td><td>Lastname</td><td>City</td></tr>
    <%  List<PersonBean> persons = (List<PersonBean>) request.getAttribute("persons");
	Iterator<PersonBean> iterator = persons.iterator();
	while (iterator.hasNext()) {
	  PersonBean person = (PersonBean) iterator.next();
	  String firstname = (String) person.getFirstname();
	  String lastname = (String) person.getLastname();
	  String city = (String) person.getCity();
	  out.print("<tr><td>" + firstname + "</td>");
	  out.println("<td>" + lastname + "</td>");
	  out.println("<td>" + city + "</td></tr>");} %>
	</table>
</body>
</html>
```

Genera una [[servlet]]. 
- Valuta un espressione
- Esegui uno scriplet

direttiva @page

JSP ha degli oggetti predefiniti:
- request
- response
- out
- session
- application
- config
- pageContext
- page
- exception

Le azioni sono funzioni predefinite rappresentatecome elementi [[XML]], non vanno confuse con le direttive di tipo `<\%@...\%>`
`<jsp:useBean>` inizializza un javabean o trovalo
`<jsp:setProperty>`
`<jsp:getProperty>`
`<jsp:forward>`

Di queste direttive, gli attributi `ID` e [[scope attribute|scope]] regolano
- come un oggeto è ottenuto (dal proprio ID)
- la visibilità o scopo dell'oggetto stesso

