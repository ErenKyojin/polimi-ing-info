---
aliases: 
creation date: 2024-03-21
---

Evoluzione di [[JSP]], codice viene scritto attraverso marks HTML

```html
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"  %>
<!DOCTYPE html>
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>List of people</title></head>
<body>
  <p>Number of persons: matching the query  <c:out value = "${request.number}"/> </p>
    <table border="1">
	<tr><td>Firstname</td>  <td>Lastname</td> <td>City</td> </tr> 		
          <c:forEach var="person" items="${persons}">
	   <tr><td><c:out value="${person.firstname}" /> </td>
	       <td><c:out value="${person.lastname}" /> </td>
	       <td><c:out value="${person.city}" /> </td></tr>
	</c:forEach>
    </table>
</body>
</html>
```