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

Vogliamo a questo punto definire una teoria sostanzialmente basata sul [[linguaggio]] che abbiamo introdotto all'inizio, che chiamiamo teoria $L$, che permette di ottenere come teoremi tutte e sole le tautologie e permetta da dedurre da un insieme $\Gamma$ di formule tutte e sole le conseguenze semantiche di $\Gamma$