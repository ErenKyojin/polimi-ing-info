---
aliases: 
creation date: 2024-02-27
---

```
full-request: :- request-line
					*(general-header |
					  request-header |
					  entity-header)
				CRLF [entity-body]
```

*Significa opzionale
| significa a capo

- `request-line` è `\method \SP URL \SP version CRLF`
	- `\SP` è blankspace
	- `\method` è uno tra `GET | POST | HEAD | PUT | DELETE | CONNECT | PATCH | OPTIONS | TRACE`
	- ad esempio: `GET /home/fridge/groceries.html HTTP/1.0` 