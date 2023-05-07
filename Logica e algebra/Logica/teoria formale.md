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



Data una teoria formale $H$ (cioè sono specificati tutti gli insiemi precedentemente elencati), chiamiamo **dimostrazione nella teoria formale** $H$ una sequenza finita di f.b.f. che siano o assiomi o formule dedotte dalle precedenti tramite regole di inferenaz, diciamo **teorema della teoria** una f.b.f. $\mathcal{A}$ (e scriviamo $|_{-H} \mathcal{A}$) che sia l'ultima formula di una dimostrazione.

Dato un insieme $\Gamma$ di f.b.f. diciamo che una formula $\mathcal{A}$ è (sintatticamente) **deducibile** in $H$ da $\Gamma$ (e scriviamo $\Gamma |_{-H}\mathcal{A}$) se esiste una sequenza finita di f.b.f. che siano o assiomi o formule di $\Gamma$ o formule dedotte dalle precedenti tramite le regole di inferenza, la cui ultima formula sia $\mathcal{A}$.
Un teorema di $H$ è dunque una formula deducibile da un insieme vuoto di f.b.f.

Osserviamo che se $\Gamma |_{-H}\mathcal{A}$ allora:
- esiste un insieme finito $\Gamma' \subseteq \Gamma$ tale che $\Gamma' |_{-H}\mathcal{A}$
- per ogni insieme di f.b.f. $\Delta$ tale che $\Delta \supseteq \Gamma$ si ha $\Delta |_{-H} \mathcal{A}$

Vogliamo a questo punto definire una teoria sostanzialmente basata sul [[linguaggio]] che abbiamo introdotto all'inizio, che chiamiamo teoria $L$, che permette di ottenere come teoremi tutte e sole le tautologie e permetta da dedurre da un insieme $\Gamma$ di formule tutte e sole le conseguenze semantiche di $\Gamma$.

### Simboli di L
- Lettere enunciative: $A, B, \dots,$
- [[Connettivi]]: $\sim,\implies$
- Parentesi: (, )

### Formule ben formate di L
- Lettere enunciative
- Se $\mathcal{A}$ è una f.b.f. anche $(\sim \mathcal{A})$ è f.b.f.
- Se $\mathcal{A}$ e $\mathcal{B}$ sono f.b.f. anche $(\mathcal{A} \implies \mathcal{B})$ è una f.b.f.
- Nient'altro è una f.b.f.
In realtà si accettano tra le f.b.f. formule del tipo $(\mathcal{A} \land \mathcal{B}), (\mathcal{A} \lor \mathcal{B}), (\mathcal{A} \iff \mathcal{B})$, ma tali formule vengono pensate come abbreviazioni di una formula ad esse equivalente che usi solo i connettivi $\sim$, $\implies$

>[!oss]
>Al solito, se non diversamente indicato dalle parentesi, $\sim$ precede $\implies$


### Assiomi di L
A1. $\mathcal{A} \implies (\mathcal{B} \implies \mathcal{A})$
A2. $(\mathcal{A} \implies (\mathcal{B} \implies \mathcal{C})) \implies ((\mathcal{A} \implies \mathcal{B}) \implies (\mathcal{A} \implies \mathcal{C}))$
A3. $(\sim \mathcal{A} \implies \sim \mathcal{B}) \implies ((\sim A \implies \mathcal{B}) \implies \mathcal{A})$


>[!oss] 
>A1, A2, A3 non sono tre formule ma tre schemi di formule perchè al loro interno le sottoformule $\mathcal{A},\mathcal{B},\mathcal{C}$ sono qualsiasi.

### Regola di inferenza di L
[[Modus Ponens]]. Dalle due formule $\mathcal{A}$ e $\mathcal{A} \implies \mathcal{B}$ si riscrive $\mathcal{B}$

>[!esempio]
>$|_{-L} \mathcal{A} \implies \mathcal{A}$
>Per dimostrarlo dobbiamot rovare una dimostrazione in $L$ che finisca con la formula $\mathcal{A} \implies \mathcal{A}$ e tale che le formule della sequenza o siano assiomi o siano ricavate da formule precedenti per Modus Ponens.
>1. $\mathcal{A} \implies (\mathcal{A} \implies \mathcal{A})$ è lo schema di assiomi A1 dove $\mathcal{B}$
>2. $\mathcal{A} \implies ((\mathcal{A} \implies \mathcal{A}) \implies \mathcal{A})$
>3. $(\mathcal{A} \implies (( \mathcal{A} \implies \mathcal{A}) \implies \mathcal{A})) \implies ((\mathcal{A} \implies (\mathcal{A} \implies \mathcal{A}))\implies (\mathcal{A} \implies \mathcal{A}))$