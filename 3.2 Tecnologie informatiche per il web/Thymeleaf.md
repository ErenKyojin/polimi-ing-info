---
aliases: 
creation date: 2024-03-21
---


Sfrutta gli attributi applicativi di HTML
```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head> <title>List of people</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
<p>Number of persons that match the query:
   <span th:text="${number}">10</p>
<table border="1">
 <tr><td>Firstname</td>  <td>Lastname</td> <td>City</td> </tr>  
 <tr th:each="person : ${persons}">
	<td th:text="${person.firstname}">Mario</td>
	<td th:text="${person.lastname}">Bianchi</td>
	<td th:text="${person.city} ">Como</td>
 </tr>
</table>
</body>
</html>

```