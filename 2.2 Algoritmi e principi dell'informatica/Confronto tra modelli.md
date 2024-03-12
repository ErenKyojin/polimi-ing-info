---
aliases: 
creation date: 2024-03-01
---

Come riassunto delle differenze di potenza tra diversi modelli è utile la seguente tabella, dove più un elemento è in basso più è potente, ed elementi sulla stessa riga hanno la stessa potenz


| logica MFO                | linguaggi star free              |                               |     |
| ------------------------- | -------------------------------- | ----------------------------- | --- |
| **Automa SF**             | **Automa SF non deterministico** | **grammatiche regolari**      | **MSO**    |
| **automa a pila**         |                                  |                               |     |
| **Automa a pila non det** | **grammatiche non contestuali**  |                               |     |
| **Grammatiche monotone**  |                                  |                               |     |
| **Macchine di turing**    | **Macchine di Turing ND**        | **grammatiche non ristrette** |     |


Inoltre vale che

| linguaggio          | $\cup$ | $\cap$ | $\neg$ | $*$ | .   |
| ------------------- | ------ | ------ | ------ | --- | --- |
| MFO, starfree       | ✔      | ✔      | ✔      | ✗   | ✔   |
| FAS, FASND, GR, MSO | ✔      | ✔      | ✔      | ✔   | ✔   |
| automa a pila       |        |        | ✔      | ✔    |  ✔   |
| APND, GNC           | ✔      |        |        | ✔   | ✔   |
| Grammatiche                     |        |        |        |     |     |


