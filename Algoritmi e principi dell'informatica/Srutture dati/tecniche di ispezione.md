---
aliases: 
creation date: 2023-05-22 12:09
modification date: 2023-05-22 12:09
---

Costruire funzioni hash che soddisfino l'ipotesi di hashing uniforme è molto difficile, si accettano delle approssimazioni che, nella pratica, si rivelano soddisfacenti. Tre tecniche:
- Ispezione lineare
- Ispezione quadratica
- Doppio hashing

Nessuna di queste tecniche produce le $m!$ permutazioni che sarebbero necessarie per soddisfare l'ipotesi di hashing uniforme, tuttavia nella pratica si rivelano abbastanza buone

Tutte e 3 le tecniche fanno uso di una funzione hash 