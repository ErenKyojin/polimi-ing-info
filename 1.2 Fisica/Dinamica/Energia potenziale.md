---
id: "Energia potenziale"
aliases:
  - "Energia potenziale della forza peso"
tags: []
---

## Energia potenziale della [[forza peso]]
Possiamo definire per la forza peso un indice di stato fisico detto energia potenziale, funzione della posizione $Q$ del punto materiale cui la forza risulta applicata:
$$
E_{p}(Q) = mgy_{Q} + k
$$
con $y_{Q}$ quota della posizione $Q$ rispetto ad una quota di riferimento arbitrariamente scelta e $k$ è una costante additiva arbitraria che convenzionalmente poniamo a zero, attribuendo cosí valore nullo di energia potenziale della forza peso allo stato di riferimento corrispondente alla quota nel SdR inerziale considerato

# Definizione
>[!definition]
>Se una forza è tale che il lavoro da essa compiuto per portare un punto materiale da $A$ a $B$ non dipende dal cammino percorso o da altre circostanze, ma solo dalle coordinate di $A$ e di $B$, allora per ogni punto $Q$ dello spazio possiamo sempre definire una quantità scalare pari al lavoro fatto dalla forza per portare il punto materiale in questione da $Q$ ad un punto di riferimento $O$ nel quale tale quantità scalare abbia un valore costante arbitrario (eventualmente nullo) assunto come riferimento

## Energia potenziale [[forza gravitazionale|gravitazionale]]
La forza gravitazionale generata da una massa puntiforme $M$ è una forza centrale e quindi conservativa; per introdurre la sua energia potenziale basta calcolare il lavoro compiuto dalla forza gravitazionale per spostare una massa $m$ da una distanza $r$ dalla massa che genera il campo ad un punto a distanza infinita, che prendiamo come stato di riferimento (ad energia potenziale nulla).
$$ E_{p}(r) = E_{p}(r) - E_{p}(\infty) = \mathcal{L}_{r\to \infty} = \int _{r}^{\infty} \!-G \frac{Mm}{r^2}\hat{u}_{r} \cdot \, \mathrm{d}\vec{r} =\int _{r}^\infty \!-G \frac{Mm}{r^2} \, \mathrm{d}r = -G \frac{Mm}{r}  $$
In base alla scelta fatta per il riferimento, l'energia optenziale gravitazionale risulta sempre negativa: infatti la forza è attrattiva, quindi compie lavoro positivo per avvicinare le due masse e lavoro negativo per allontanarle.

Questo concetto è utile per il [[Moto dei pianeti]]

# ANKI

```anki
id: 1700212221021
deck: Fisica
---
Energia potenziale
===
Se il lavoro per portare un punto materiale tra $A$ e $B$ non dipende dal percorso, ossia se si tratta di una forza conservativa, allora la forza ammette energia potenziale.
```
