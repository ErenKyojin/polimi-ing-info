---
aliases: 
creation date: 2023-03-20 15:45
modification date: 2023-03-20 15:45
---

Sia $X$ una variabile aleatoria assolutamente continua e positiva che intepretiamo come la durata di qualche apparecchiutarea con densità $f_{X}$ e una funzione di ripartizione $F_{X}$ la funzione definita da
$$
\lambda_{X}(t) = \frac{f_{X}(t)}{1-F_{X}(t)}\quad t > 0
$$
è deta intensità di guasto o funzione di rischio (hazard rate o failure rate in inglese)



Per rappresentare $\lambda(t)$ cerchiamo la probabilità che un apparecchiatura di età $t$ soggetta a guasto si rompa nell'imediato futuro $\mathrm{d}t$, cioè
$$
P(t < X < t + \mathrm{d}t | X > t) = \frac{P(t < X < t + \mathrm{d}t)}{P(X > t)} \approx \frac{f_{X}(t)}{1 - F_{X}(t)}\mathrm{d}t = \lambda(t) \mathrm{d}t
$$
$X$ avrà una funzione di rischio $\lambda_{X}(t)$
	- **crescente** nel tempo se l'apparecchiuatura studiata subisce un continuo deterioramento, quindi situazioni di usura, $X$ si idce IFR (increasing ailure rate)
	- **decrescente** se l'apparecchiatura studiata ha difetti di fabbricazione che la portano a guastarsi presto, per modellizzare rodaggio, $X$ si dice $DFR$
	- **costante** se l'apparecchiatura studiata non è soggetta nè ad usura nè a rodaggio e quindi la distribuzione della vita residua dell'apparecchiatura di età $t$ è identica a quella dell'apparecchitura nuova