---
aliases: 
creation date: 2024-03-14
---

È un interfaccia java che consente ad una servlet di richiedere informazioni sul sistema e sull'ambiente del client.

- `string getMethod()`
- Input stream
	- `BufferedReader getReader()`
	- `String getContentType()`
	- `int getContentLength()`
- HTTP header
	- `String getHeader(String name)`
	- `Enumeration getHeaders(String name)`
- Parameters
	- `String getParameter(String name)`
	- `String[] getParameterValues(String name)`
	- `Enumeration getParameterNames()`
	- `String getQueryString()`
- Client info
	- `String getRemoteAddr()`
	- `String getRemoteHost()`
