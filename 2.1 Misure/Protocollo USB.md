---
aliases: 
creation date: 2024-06-28
---

Standard più comune e in continuo sviluppo.
Comunicazione seriale fino a 127 periferiche
1. VBUS: alimentazione a 5V, grande novità (prima andavano alimentati esternamente)
2. $D^-$: ricezione dati
3. $D^+$: trasimssione dati
4. GND: massa

fino a 3.0 [[half duplex]], poi [[full duplex]]. Fino a 900 mA (picco).

La periferica si sincronizza col clock del controllore, inoltre la periferica seleziona una modalità di collegamento
- control: operazioni di comando e stato
- Interrupt: latenza garantita e pochi dati di trasferimento (esempio mouse, poca latenza e $\Delta x$ e $\Delta y$ come dati)
- bulk: latenze variabili molti dati di trasferimento
- isosincrono: trasferimento dati continuo, ossia streaming.

Arrivano fino a 5m di distranza. Inoltre 3.0 smista il traffico, permettendo di non svegliare periferiche in idle.


#### USB-C
24 canali