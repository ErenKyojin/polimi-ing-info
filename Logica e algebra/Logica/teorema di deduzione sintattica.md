---
aliases: 
creation date: 2023-05-07 13:05
modification date: 2023-05-07 13:05
---

> [!teorema]
> Sia $\Gamma = \Delta \cup \{ \mathcal{B} \}$ un [[insieme]] [[formule ben formate|f.b.f.]] $\Gamma |_{-L}  \mathcal{A}$ se e solo se $\Delta |_{-L} \mathcal{B} \implies \mathcal{A}$
> 

Il teorema di deduzione sintattica è uno strumento molto utile nel cercare di stabilire se una formula è conseguenza sintattica di altre.

>[!esempio]
>Provare che $\mathcal{A} \implies \mathcal{B} |_{-L} (\mathcal{B} \implies \mathcal{C}) \implies (\mathcal{A} \implies \mathcal{C})$
>Per il teorema di deduzione sintattica $\mathcal{A} \implies \mathcal{B} |_{-L} (\mathcal{B} \implies \mathcal{C}) \implies (\mathcal{A} \implies \mathcal{C})$ se e solo se $\mathcal{A} \implies \mathcal{B}$, $\mathcal{B} \implies \mathcal{C} |_{-L} \mathcal{A} \implies \mathcal{C}$; ma ancora per il teorema di deduzione sintattica $\mathcal{A} \implies \mathcal{B}$, $\mathcal{B} \implies \mathcal{C}$,$\mathcal{B} \implies \mathcal{C}$, $\mathcal{A} \vdash_{L} \mathcal{C}$.
>Quest'ultima deduzione risulta molto semplice, infatti possiamo scrivere
>1. $\mathcal{A}$ perchè è una premessa
>2. $\mathcal{A} \implies \mathcal{B}$ perchè è una premessa
>3. $\mathcal{B}$ perchè è ottenuta per [[modus ponens]] da 1 e 2
>4. $\mathcal{B} \implies \mathcal{C}$ perchè è una premessa
>5. $\mathcal{C}$ perchè è ottenuta per modus ponens da 3 e 4

Possiamo quindi dimostrare il teorema:

>[!dim]
> Hp: $\Delta \cup \{ \mathcal{B} \} \vdash_{L} \mathcal{A}$; Th: $\Delta \vdash_{L} \mathcal{B} \implies \mathcal{A}$
> La dimostrazione procede per induzione sul numero $n$ di formule che costituiscono la sequenza di deduzione di $\mathcal{A}$ da $\Delta \cup \{ \mathcal{B} \}$.
> Caso base $n = 1$. In tal caso $\mathcal{A}$ è o un assioma o una formula di $\Delta \cup \{ \mathcal{B} \}$.
> Se $\mathcal{A}$ è un assioma o una formula di $\Delta$ allora possiamo costruire la sequenza di formule:
> 1. $\mathcal{A}$ (assioma o formula di $\Delta$)
> 2. $\mathcal{A} \implies (\mathcal{B} \implies \mathcal{A})$ (assioma A1)
> 3. $\mathcal{B} \implies \mathcal{A}$ (Modus ponens da 1 e 2)
> 
>Che è una deduzione di $\mathcal{B} \implies \mathcal{A}$ da $\Delta$.
>Se invece $\mathcal{A}$ è la formula $\mathcal{B}$ sappiamo già che $\mathcal{A} \implies \mathcal{A}$ è un teorema e, come tale, a maggior ragione è deducibile da $\Delta$.
>Ipotesi di induzione: il teorema vale per ogni formula deducibile da $\Delta \cup \{ \mathcal{B} \}$ con una sequenza di formule di lunghezza inferiore ad $n$.
>Supponiamo ora che la deduzione di $\mathcal{A}$ da $\Delta \cup \{ \mathcal{B} \}$ richieda $n$ formule.
>$\mathcal{A}$ sarà la $n$-esima formula della deduzione e sarà scritta nella sequenza perchè è un assioma o una formula di $\Delta \cup \{ \mathcal{B} \}$ o è ottenuta per modus ponens da due formule precedenti.
>Nei primi due casi si procede come nel caso base (notate inoltre come sarebbe stato del tutto inutile scrivere $\mathcal{A}$ come $n$-esima formula, si poteva scrivere subito come prima formula), supponiamo allora di avere nella nostra sequenza una formula $\mathcal{C}$ al posto $h$-esimo della sequenza con $h < n$ e una formula $\mathcal{C} \implies \mathcal{A}$ al posto $k$-esimo della sequenza con $k < n$.
>Per ipotesi di induzione possiamo dedurre da $\Delta$ sia $\mathcal{B} \implies \mathcal{C}$ sia $\mathcal{B} \implies (\mathcal{C} \implies \mathcal{A})$, a questo punto consideriamo le sequenze di deduzione delle due formule da $\Delta$.
> $$ \begin{align}
>&\dots \\
>&\dots \\
>&\mathcal{B} \implies \mathcal{C} \\
>& \dots \\
>&\dots \\
> & \mathcal{B} \implies (\mathcal{C} \implies \mathcal{A})
>\end{align} $$
>E ad esse aggiungiamo
>- $(\mathcal{B} \implies (\mathcal{C} \implies \mathcal{A})) \implies ((\mathcal{B} \implies \mathcal{C}) \implies (\mathcal{B} \implies \mathcal{A}))$ assioma A2
>- $(\mathcal{B} \implies \mathcal{C}) \implies (\mathcal{B} \implies \mathcal{A})$ modus ponens fra le ultime due
>- $\mathcal{B} \implies \mathcal{A}$ modus ponens tra l'ultime e 