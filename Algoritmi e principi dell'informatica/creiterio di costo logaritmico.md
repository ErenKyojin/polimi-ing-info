---
aliases: 
creation date: 2023-05-25 12:22
modification date: 2023-05-25 12:22
---

Si basa su un analisi microscopica delle operazioni hardware:
- Quando costa copiare il numeri $i$ da una cella all'altra? 
	- Tante operazioni quanti sono i bit che codificano $i$, quindi $\log(i)$
- Quanto costa accedere alla cella di posizione $i$-esima?
	- L'apertura di $\log(i)$ cancelli di accesso ad altrettanti banchi di memoria
- Quanto costa `LOAD i`
	- ...

Otteniamo attraverso un analisi di questo genere la seguente tabella:


| istruzione | parametro | costo                                  |
| ---------- |:---------:| -------------------------------------- |
| `LOAD=`    |     X     | $l(x)$                                 |
| `LOAD`     |     X     | $l(x) + l(M[x])$                       |
| `LOAD*`    |     X     | $l(x) + l(M[x]) + l(M[M[x]])$          |
| `STORE`    |     X     | $l(x) + l(M[0])$                       |
| `STORE*`   |     x     | $l(x) + l(M[x]) + l(M[0])$             |
| `ADD=`     |     x     | $l(M[0]) + l(x)$                       |
| `ADD`      |     x     | $l(M[0]) + l(x) + l(M[x])$             |
| `ADD*`     |     x     | $l(M[0])+l(x) + l(M[x]) + l(M[M[x]])$  |
| ...        |           |                                        |
| `READ`     |     x     | $l($valore corrente di input$) + l(x)$ |
| `READ*`      | x          |                                        |
