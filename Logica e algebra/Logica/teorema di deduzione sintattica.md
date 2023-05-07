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
> Caso base $n = 1$. In tal caso $\mathcal{A}$ è o un assiome o una formula