---
aliases: 
creation date: 2023-05-25 12:22
modification date: 2023-05-25 12:22
---

Si basa su un analisi microscopica delle operazioni hardware:
- Quando costa copiare il numeri $i$ da una cella all'altra? 
	- Tante operazioni quanti sono i bit che codificano $i$, quindi $\log(i)$
- Quanto costa accedere alla cella di posizione $i$-esima?
	- L'apertura di $\log(i)$ cancelli di accesso ad altrettanti banchi di [[memoria]]
- Quanto costa `LOAD i`
	- ...

Otteniamo attraverso un analisi di questo genere la seguente tabella:


| istruzione | parametro | costo                                            |
| ---------- |:---------:| ------------------------------------------------ |
| `LOAD=`    |     X     | $l(x)$                                           |
| `LOAD`     |     X     | $l(x) + l(M[x])$                                 |
| `LOAD*`    |     X     | $l(x) + l(M[x]) + l(M[M[x]])$                    |
| `STORE`    |     X     | $l(x) + l(M[0])$                                 |
| `STORE*`   |     x     | $l(x) + l(M[x]) + l(M[0])$                       |
| `ADD=`     |     x     | $l(M[0]) + l(x)$                                 |
| `ADD`      |     x     | $l(M[0]) + l(x) + l(M[x])$                       |
| `ADD*`     |     x     | $l(M[0])+l(x) + l(M[x]) + l(M[M[x]])$            |
| ...        |           |                                                  |
| `READ`     |     x     | $l($valore corrente di input$) + l(x)$           |
| `READ*`    |     x     | $l($valore corrente di input$) + l(x) + l(M[x])$ |
| `WRITE=`   |     x     | $l(x)$                                           |
| `WRITE`    |     x     | $l(x) + l(M[x])$                                 |
| `WRITE*`   |     x     | $l(x) + l(M[x]) + l(M[M[x]])$                    |
| `JUMP`     |   label   | 1                                                |
| `JGZ`      |   label   | $l(M[0])$                                        |
| `JZ`       |   label   | $l(M[0])$                                        |
| `HALT`       |           | 1                                                | 

con $l$ definita come:

```
l(i)
	if i = 0
		return 1
	else return floor(log_2 |i|) + 1
```

Studiamo di nuovo la [[Funzioni|funzione]] `is-prime` vista nel file sulla [[macchina RAM]] (solo per i punti chiave):
```
LOOP    LOAD  1      1 + l(n)
		SUB   2      l(n) + 2 + l(M[2])
		JZ    YES    l(M[0])
		LOAD  1      1 + l(n)
		DIV   2      l(n) + 
		MULT  2
		SUB   1
		JZ    NO
		LOAD  2
		ADD=  1
		STORE 2
		JUMP  LOOP
```