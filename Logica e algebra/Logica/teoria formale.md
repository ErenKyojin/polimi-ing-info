---
aliases: sistema deduttivo,
creation date: 2023-05-07 12:26
modification date: 2023-05-07 12:26
---

Una teoria formale è definita quando sono fissati:
- un [[insieme]] di simbolo (**alfabeto**)
- un insieme di stringhe privilegiate di simboli ([[formule ben formate|f.b.f.]])
- un insieme priviegiato di f.b.f. (assiomi o base della conoscenza) e
- un insieme di regole di riscritture (o di **inferenza**) che in presenza di un certo insieme di f.b.f. permetta di scriverne in modo algoritmico altre (inferite o dedotte della precedenti)



Data una teoria formale $H$ (cioè sono specificati tutti gli insiemi precedentemente elencati), chiamiamo **dimostrazione nella teoria formale** $H$ una sequenza finita di f.b.f. che siano o assiomi o formule dedotte dalle precedenti tramite regole di inferenaz, diciamo **teorema della teoria** una f.b.f. $\mathcal{A}$ (e scriviamo $\vdash_{H} \mathcal{A}$) che sia l'ultima formula di una dimostrazione.

Dato un insieme $\Gamma$ di f.b.f. diciamo che una formula $\mathcal{A}$ è (sintatticamente) **deducibile** in $H$ da $\Gamma$ (e scriviamo $\Gamma \vdash{H}\mathcal{A}$) se esiste una sequenza finita di f.b.f. che siano o assiomi o formule di $\Gamma$ o formule dedotte dalle precedenti tramite le regole di inferenza, la cui ultima formula sia $\mathcal{A}$.
Un teorema di $H$ è dunque una formula deducibile da un insieme vuoto di f.b.f.

Osserviamo che se $\Gamma \vdash_{H}\mathcal{A}$ allora:
- esiste un insieme finito $\Gamma' \subseteq \Gamma$ tale che $\Gamma' \vdash_{H}\mathcal{A}$
- per ogni insieme di f.b.f. $\Delta$ tale che $\Delta \supseteq \Gamma$ si ha $\Delta \vdash_{H} \mathcal{A}$

possiamo quindi definire la [[teoria L]]

# ANKI

```anki
deck: LeA
---
Teoria formale
===
Una teoria formale è definita quando si ha:
- un insieme di simboli detto alfabeto
- un insieme di stringhe privilegiate di simboli, formule ben formate
- un insieme di f.b.f. priviliegiato detto assiomi, eventualmente vuoto
- delle regole di inferenza o di riscrittura che permetta di scriverne in modo algoritmico altre
```


```anki
deck: LeA
---
Dimostrazione nella teoria formale H
===
È una sequenza finita di formule ben formate di $H$ che siano:
O assiomi
O formule ottenute dalle precedenti formule mediante regole di inferenza
```


```anki
deck: LeA
---
Teorema
===
Un teorema è l'ultima riga di una dimostrazione in H
$$ \vdash_H a $$
```

```anki
deck: LeA
---
Formula
===
Una formula $a$ si deduce sintatticamente da un insieme di fbf $\Gamma$ sulla teoria $H$ ($\Gamma \vdash_H a$) se esiste una dimostrazione di $a$ da $\Gamma$ cioè esiste una sequenza finita di cui $a$ è l'ultima riga nella uqale sequenza le fbf sono:
- o asisomi di H
- o formule ben formate dedotte mediante regole di inferenza di $H$
- o fbf di $\Gamma$ (dell'insieme ipotesi)

Un teorema è una formula con insieme delle ipotesi vuoto!!
```
