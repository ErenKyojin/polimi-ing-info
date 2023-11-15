---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

È essenzialmente un singolo stadio di un [[ADC Pipeline]] con l'output collegato al proprio input

> [!NOTE] singolo stadio
> tensione a sample and hold
> Sample and hold to + e to ADC
> l'ADC manda a logica di ricombinazione e ad un DAC
> Il DAC a + dove mandiamo la tensione nell'amplificatore esponenziale

collegando l'output del singolo stadio al proprio input abbiamo un ADC ricorsivo (dove diminuiamo la frequenza di conversione in modo lineare in base al numero di passaggi)

それ