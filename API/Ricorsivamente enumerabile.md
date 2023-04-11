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
- Se $i \in S$ allora $f_{i}$ è totale (funzione calcolata dalla i-esima macchina di turing)
- Se $f$ totale e calcolabile allora $\exists i \in S | f_{i} - f$

$S$ non è ricorsivamente enumerabile.

Questo significa che non esiste un formalismo in grado di definire tutte e sole le funzioni calcolabili totali.

---

Possiamo fare adesso un altro tentativo per rimuovere le scomode funzioni non totali (algoritmi in loop)

Estendiamo una funzione, ad esempio arricchendo $\mathbb{N}$ con il nuovo valore $\perp$, oppure attribuendo a $f$ un valore convenzionale quando $f$ è indefinita. Matematicamente l'operazione è sensata, ma il trucco non funziona. Non esiste una funzione totale e calcolabile che sia un'estensione della funzione calcolabile ma non totale $g(x) = \text{se }f_{x}(x)\neq \perp$ allora $f_{x}(x) + 1$ altrimento $\perp$.

Posso sempre prendere una funzione parziale e farla diventare totale, ma potrei perderne la calcolabilità

---

S è $RE$ se e solo se
- $S$ $D_{h}$ con $h$ calcolabile e parziale $S\quad \{ x | h(x) \neq \perp \}$
  *detto dominio di definizione o controimmagine di $h$* 
- $\iff S$ $I_{g}$ con $g$ calcolabile e parziale $S = \{ g(y) | y \in \mathbb{N} \}$
  *detto in altro modo: $S$ è RE se la sua funzione semi caratteristia è calcaolabile*


Da qui il legame con i linguaggi riconosciuti dalle macchine di turing

---
```tikz
\begin{document}
\begin{tikzpicture}
\draw (0,0) circle (2 and 1);
\draw (-1,0) circle (4 and 2);
\draw (-3,0) circle (6 and 3);
\node at (0,0){R};
\node at (-3,0){RE};
\end{tikzpicture}
\end{document}
```

Esistono insiemi semidecidibili che non sono decidibili:
- $K = \{  x | f_{x}(x) \neq \perp \}$ è semidecidibile perchè $K = D_{h}$ con $h(x) = f_{x}(x)$
- Sappiamo però anche che
  $c_{K}(x)$ ($1$ se $f_{x}(x) \neq \perp$, $0$ altrimenti)

Conclusione