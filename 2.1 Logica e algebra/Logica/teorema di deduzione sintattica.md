---
aliases: 
creation date: 2023-05-07 13:05
modification date: 2023-05-07 13:05
---

> [!teorema]
> Sia $\Gamma = \Delta \cup \{ \mathcal{B} \}$ un [[insieme]] [[formule ben formate|f.b.f.]] $\Gamma \vdash_{L}  \mathcal{A}$ se e solo se $\Delta \vdash_{L} \mathcal{B} \implies \mathcal{A}$
> 

Il teorema di deduzione sintattica è uno strumento molto utile nel cercare di stabilire se una formula è conseguenza sintattica di altre.

>[!esempio]
>Provare che $\mathcal{A} \implies \mathcal{B} \vdash_{L} (\mathcal{B} \implies \mathcal{C}) \implies (\mathcal{A} \implies \mathcal{C})$
>Per il teorema di deduzione sintattica $\mathcal{A} \implies \mathcal{B} \vdash_{L} (\mathcal{B} \implies \mathcal{C}) \implies (\mathcal{A} \implies \mathcal{C})$ se e solo se $\mathcal{A} \implies \mathcal{B}$, $\mathcal{B} \implies \mathcal{C} \vdash_{L} \mathcal{A} \implies \mathcal{C}$; ma ancora per il teorema di deduzione sintattica $\mathcal{A} \implies \mathcal{B}$, $\mathcal{B} \implies \mathcal{C}$,$\mathcal{B} \implies \mathcal{C}$, $\mathcal{A} \vdash_{L} \mathcal{C}$.
>Quest'ultima deduzione risulta molto semplice, infatti possiamo scrivere
>1. $\mathcal{A}$ perchè è una premessa
>2. $\mathcal{A} \implies \mathcal{B}$ perchè è una premessa
>3. $\mathcal{B}$ perchè è ottenuta per [[Modus Ponens]] da 1 e 2
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
>- $\mathcal{B} \implies \mathcal{A}$ modus ponens tra l'ultime e $\mathcal{B} \implies \mathcal{C}$
>
>La sequenza ottenuta così è fatta tutta di assiomi o di formule di $\Delta$ o di formule ottenute per modus ponens da due formule che le precedono e dunque è una deduzione di $\mathcal{B} \implies \mathcal{A}$ da $\Delta$.
>
>Hp: $\Delta \vdash_{L} \mathcal{B} \implies \mathcal{A}$ ; Th: $\Delta \cup \{ \mathcal{B} \} \vdash_{L}\mathcal{A}$
>Basta banalmente scrivere $\mathcal{B}$, poi la deduzione di $\mathcal{B} \implies \mathcal{A}$ da $\Delta$ ed infine usare il modus ponens

# ANKI

```anki
id: 1700559636500
deck: LeA
---
Teorema di deduzione sintattica
===
$\Gamma \cup \{B\} \vdash_L a$ se e solo se $\Gamma \vdash_L B \implies a$

>[!dim]
>Ipotesi: $\Gamma \vdash_L B \implies a$
>Tesi: $\Gamma \cup \{B\} \vdash A$
>
>1
>...
>...
>n $B \implies A$
>n+1 $B$
>n+2 $a$ n,n+1 MP
>
>
>Ipotesi: $\Gamma \cup \{B\} \vdash_L A$
>Tesi: $\Gamma \vdash_L B \implies A$
>Si dimostra per induzione sul numero di righe
>$n = 1: A$ o assioma o $A \in \Gamma$ o $A = B$
>- assiumiamo che $\vdash_L a = a$ perció $\Gamma \vdash_L B \implies A$
>1. a
>2. $A \implies (B \implies A)$ a1
>3. $B\implies A$ 1,2 MP
>
>Ipotesi di induzione: se una fbf $c$ è dedotta da $\Gamma \cup B$ con $m < n$ passi allora $\Gamma \vdash_L B \implies C$.
>Mostro la tesi per $n$
>
>1.
>...
>i. $C$
>j. $C \implies A$
>n. $A$ o assioma, o A = B, o A $\in \Gamma$ o dedotta per MP
>Per ipotesi di induzione
>$$\Gamma \vdash_L B \implies C$$
>Per ipotesi d'induzione
>$$ \Gamma \vdash_L B \implies (C \implies A) $$
>
>....
>r. $B \implies C$
>...
>s. $B \implies (C\implies A)$
>s + 1. $(B \implies (B \implies A)) \implies ((B \implies C) \implies (B \implies A))$
>s + 2. $(B \implies C) \implies (B \implies A)$
>2 + 3. $B \implies A$


```
