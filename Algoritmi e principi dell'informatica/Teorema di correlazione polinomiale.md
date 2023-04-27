---
aliases: 
creation date: 2023-04-27 09:37
modification date: 2023-04-27 09:37
---

Sotto ragionevoli ipotesi di criteri di [[Costo di un calcolo|costo]] vale il seguente:

>[!teorema]
>Se un [[problema]] è risolvibile medinte un modello di calcolo $M_{1}$ con complessità spazio temporale $C_{1}(n)$ allora è risolvibile da qualsiasi altro modello di calcolo $M_{2}$ con complessità $C_{2}(n) \leq P_{2}(C_{1}(n))$ essendo $P_{2}$ un opportuno polinomio

Grazie a questo teorema possiamo parlare di **classe dei problemi risolvibili in tempo/spazio polinomiale**


Grazie a questo risultato si è adottata l'analogia:
- classe dei problemi trattabili in partica = classe dei problemi risolvibili in tempo polinomiale con modelli deterministici **P**
- In **P** sono inclusi i problemi di complessità $n^{1000}$, ma l'esperienza ci conferma che i problemi di interesse applicativo hanno un grado accettabile

# Correlazione temporale tra MT e RAM
## Da RAM a MT
La memoria della RAM simula la memoria della MT:
1 cella RAM per ogni cella di nastro di MT, però, invece di usare i blocchi di [[memoria]] per simulare ogni nastro, associamo un blocco di $k$-celle ad ogni $k$-pla di celle prese per ogni posizione di nastro piú un blocco di base

![[RAM to MT.canvas]]
### Una mossa della macchina di Turing simulata dalla RAM
#### Lettura
- Si esamina il contenuto del blocco 0 (k + 1 accessi, c(k + 1) mosse)
- Si fanno k accessi indiretti in k blocchi per esaminare il contenuto delle celle in corrispondenza delle testine

#### Scrittura
- Si modifica lo [[stato]]
- Si aggiornano mediante STORE indiretti i contenuti delle celle che corrispondono alla posizione della testina
- Si aggiornano nel [[blocco]] 0 i valori delle posizioni delle $k$ testine

Una mossa di [[Macchine di Turing|MT]] richiede $h \cdot k$ mosse di RAM:
- A criterio di costo costante $T_{R}$ è $\Theta(T_{M})$
- A criterio di costo logaritmico $T_{R}$ è $\Theta(T_{M}\log(T_{M}))$, un accesso indiretto a $i$ costa $\log(i)$

## Da RAM a MT

![[MT to RAM.canvas]]

>[!oss]
>Le varie celle RAM sono tenute in ordine, inizialmente il nastro (in ogni istante ci sono solo celle che hanno ricevuto una store) è vuoto e $i_{j}$ e M[$i_j$] sono rappresentati in codifica binaria

Inoltre vi è un nastro contenente M[0] ed un nastro di servizio

### Una mossa della RAM sim
