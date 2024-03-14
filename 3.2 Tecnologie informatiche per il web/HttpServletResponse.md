---
aliases: 
creation date: 2024-03-14
---

Interfaccia java per mandare informazioni ai client usando i metodi di [[HttpServletRequest]]


- Output stream
	- `PrintWriter getWriter()`
	- `void setContentLength(int cl)
	- `void setContentType(String ct)`
- HTTP header
	- `void setHeader(String name, String value)`
- Errors
	- `void setStatus(int sc)`
	- `void sendError(int sc)`
- Redirect
	- `void sendRedirect(String location)`