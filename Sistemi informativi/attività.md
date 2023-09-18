---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

# Attività
Rappresenta un unità di lavoro che richiede risorse per essere eseguita

```bpmn
url: [[attività.bpmn]]
```

## Tiplogia di attività
Si inserisce tramite logo in alto a sinistra (non richiesto)
- Invia/ricevi: trasmissione di messaggi
- Utente: attività mediata da software
- Manuale: attività non mediata da SW
- Regole: Richiede l'interpretazione di una regola del business 
- Script: implementata tramite linguaggio di scripting

## Comportamento dell'attività
Si inserisce tramite logo in basso
- Ciclo, indicata freccia circolare
	- Singola istanza ripetuta
	- Condizione di terminazione sottointesa
- Istanza multipla parallela, indicata con tre barre verticali
	- parallelismo
	- Numerosità sottointesa
- Istanza multipla sequenziale, indicata con tre barre orizzontali
	- in successione
	- Numerosità sottintesa
- Sottoprocessi: Attività non automatiche sono scomponibili anche in altre attività
	- Specificato: Processo interno ben definito, può essere **collassato** (scatola nera) o **espanso** (scatola bianca)
	- Ad hoc: Noti solo i task interni, senza un flusso stabilito


>[!oss]
>Ciclo -> si esce in base ad una condizione
>Multi-istanza -> si esce in base al numero di ripetizioni
