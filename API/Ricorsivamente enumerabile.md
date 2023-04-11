---
aliases: semidecidibile, insiemi RE
creation date: 2023-04-06 09:44
modification date: 2023-04-06 09:44
---

>[!def]
>un insieme $S$ è **ricorsivamente enumerabile** se e solo se:
>- $S$ è l'insieme vuoto
>- $S$ è l'insieme immagine di una funzione totale e calcolabile:
>	- $S = I_{g_{S}(y)}=\{I_{g_{S}(y)} | y \in N\}$ cioè $S = \{ g_{S}(0), g_{S}(1),\dots, \}$ da qui il termine ricorsivamente enumerabile


Spiegando in termini piú intuitivi anche l'attributo semidecidibile: se $x \in S$, enumerando gli elementi di $S$ prima o poi trovo $x$ e sono in grado di ottenere una risposta positiva alla domanda, ma se $x \not\in S$?

linguaggi riconosciuti dalle MT

## Enunciati importanti
Dato un insieme $S$ con le seguenti caratteristiche:
- Se $i \in S$ allora $f_{i}$ è totale
- Se $f$ totale e calcolabile allora $\exists i$