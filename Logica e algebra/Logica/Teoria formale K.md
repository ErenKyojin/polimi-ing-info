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
