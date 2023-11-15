---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---

Teoria basata sull'[[linguaggio del primo ordine]]
### alfabeto
$A_{0}^m$
$\sim \implies$
$(\forall x)$
$(,)$

### FBF
1. ogni formula ben formata è una fbf
2. se $\mathcal{A}$ è una fbf allora $\sim \mathcal{A}$ e $(\forall x) \mathcal{A}$ sono fbf
3. Se $\mathcal{A}$ è una fbf allora $\mathcal{A} \implies \mathcal{B}$ è una fbf
4. Le fbf sono tutte e sole quelle definite con le condizioni precedenti

### assiomi logici
1. $\mathcal{A} \implies (\mathcal{B} \implies \mathcal{A})$
2. $\mathcal{A} \implies (\mathcal{B} \implies \mathcal{C})) \implies ((\mathcal{A} \implies \mathcal{B}) \implies (\mathcal{A} \implies C))$
3. $\mathcal{\sim \mathcal{A} \implies \sim \mathcal{B}} \implies ((\sim\mathcal{A} \implies \mathcal{B})\implies \mathcal{A})$
4. $(\forall x) \mathcal{A}(x) \implies \mathcal{A}(t)$ dove $t$ è un termine libero per $x$ in $\mathcal{A}(x)$
5. $(\forall x) (\mathcal{ A} \implies \mathcal{B}) \implies (\mathcal{A} \implies (\forall x) \mathcal{B})$ dove 

### assiomi propri
(possono anche essere $\varnothing$)


### Regole di inferenza
- [[Modus Ponens]]
- Gen a $(\forall x) \mathcal{A}$




>[!def]
>Una teoria del primo ordine priva di assiomi propri è detta [[calcolo predicativo del primo ordine]]

>[!def]
>Una teoria formale è detta **consistente** se non esiste una fbf $\mathcal{A}$ tale che $\vdash \mathcal{A}$ e $\vdash \sim \mathcal{A}$

>[!teorema]
>ogni calcolo predicativo K del primo ordine è **consistente**
>>[!dim]
>>operiamo per assurdo, abbiamo essenzialmente affermato che possiamo arrivare alle seguenti:
>>1\.
>>$\vdots$
>>n. $\mathcal{A}$
>>
>>1\.
>>$\vdots$
>m. $\sim \mathcal{A}$
>>
>>1\.
>>$\vdots$
>>l. $\sim A$
>>
>>Si utilizza un operatore H che elimina i termini, i quantificatori e le parentesi non strutturali


>[!teorema]
>In ogni teoria del primo ordine non consistente ogni fbf è un teorema della teoria

>[!teorema] teorema di correttezza e completezza per un calcolo predicativo K del primo ordine
>I teoremi di K sono tutte e sole le fbf logicamente valide


Hp: $\vdash_{K}\mathcal{A}$
Th: $\mathcal{A}$ logicamente valida


>[!teorema] Teorema di correttezza e completezza per un teoria del primo ordine K
>I teoremi di K sono tutte e sole le fbf vere in ogni modello di K.

>[!def] Modello di K
>Un modello è una interpretazione nella quale tutti gli assiomi propri sono veri

stiamo essenzialmente non considerando le interpretazioni scomode o comunque formulate in modo sconveniente.


>[!lemma] Lemma 1
>Una teoria K è consistente se e solo se ha un modello

>[!Lemma] Lemma 2
>Sia K una teoria del primo ordine consistente, ed $\mathcal{A}$ una fbf chiusa di K che non sia un teorema di K ottenuta aggiungendo agli assiomi propri di K la fbf $\sim \mathcal{A}$ è ancora consistente

>[!teorema] Teorema di completezza
>IP: $\mathcal{A}$ fbff vera in ogni modello di K
>TH: $\vdash_{K} \mathcal{A}$
>
>>[!dim]
>>Se K è non consistente allora $\vdash_{K} \mathcal{A}$ sia K consistente e per assurdo $\vdash_{K}\mathcal{A}$ suppongo che $\mathcal{A}$ sia chiusa per lemma 2 la teoria K' ottenuta aggiungendo $\sim \mathcal{A}$ agli assiomi propri è consistente.
>>K' per lemma 1 ha un modello che è anche modello di K
>>$$

