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
- stop bit = 1
- parity bit =1

>[!esempio]
>porte COM, con 9 pin

# Seriale RS-422 / RS-489
Più dispositivi implementabili su un unica linea, inoltre funziona in modalità differenziale, si hanno quindi pin
 - TXD-
 - TXD+
 - RXD-
 - RXD+