---
aliases: 
creation date: 2024-02-27
---

```
full-response :- status-line 
			     *(general-header | 
			       request-header |
			        entity-header)
			     CRLF [entity-body]
```

`status-line:- version \SP status \SP message CRLF`
- `\SP` spazi
- status codes
	- 1xx informativi
	- 2xx successo
	- 3xx redirect
	- 4xx client error
	- 5xx server error
- esempio `HTTP 404 - File not found`