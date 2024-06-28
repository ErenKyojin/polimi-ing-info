---
aliases: 
creation date: 2024-06-28
---

# Serial RS-232
Protocollo di trasmissione dati su almeno 3 pin, definisce una trasmissione single-ended in comunicazione [[half duplex]]
- RX ricezione
- TX trasmissione
- GND

È necessaria una porta per ogni strumento

logica digitale:
- livello alto: [+3V, +12V]
- livello basso: [-3V, -12V]

Il PC inverte, quindi sul cavo le tensioni saranno invertite (livello alto -3V,-12V e viceversa)


##### Parametri
- baud rate: 9.7 kbit/s
- data bits = 7
- 