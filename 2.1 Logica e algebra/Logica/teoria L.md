---
aliases: 
creation date: 2023-07-07 09:14
modification date: 2023-07-07 09:14
---


## [[teoria formale]] $L$
Vogliamo a questo punto definire una teoria sostanzialmente basata sul [[Linguaggio]] che abbiamo introdotto all'inizio, che chiamiamo teoria $L$, che permette di ottenere come teoremi tutte e sole le tautologie e permetta da dedurre da un insieme $\Gamma$ di formule tutte e sole le conseguenze semantiche di $\Gamma$.

### Simboli di L
- Lettere enunciative: $A, B, \dots,$
- [[connettivi]]: $\sim,\implies$
- Parentesi: (, )

### Formule ben formate di L
- Lettere enunciative
- Se $\mathcal{A}$ è una f.b.f. anche $(\sim \mathcal{A})$ è f.b.f.
- Se $\mathcal{A}$ e $\mathcal{B}$ sono f.b.f. anche $(\mathcal{A} \implies \mathcal{B})$ è una f.b.f.
- Nient'altro è una f.b.f.
In realtà si accettano tra le f.b.f. formule del tipo $(\mathcal{A} \land \mathcal{B}), (\mathcal{A} \lor \mathcal{B}), (\mathcal{A} \iff \mathcal{B})$, ma tali formule vengono pensate come abbreviazioni di una formula ad esse equivalente che usi solo i connettivi $\sim$, $\implies$

>[!remark]
>Al solito, se non diversamente indicato dalle parentesi, $\sim$ precede $\implies$


### Assiomi di L
A1. $\mathcal{A} \implies (\mathcal{B} \implies \mathcal{A})$
A2. $(\mathcal{A} \implies (\mathcal{B} \implies \mathcal{C})) \implies ((\mathcal{A} \implies \mathcal{B}) \implies (\mathcal{A} \implies \mathcal{C}))$
A3. $(\sim \mathcal{A} \implies \sim \mathcal{B}) \implies ((\sim A \implies \mathcal{B}) \implies \mathcal{A})$


>[!remark] 
>A1, A2, A3 non sono tre formule ma tre schemi di formule perchè al loro interno le sottoformule $\mathcal{A},\mathcal{B},\mathcal{C}$ sono qualsiasi.

### Regola di inferenza di L
[[Modus Ponens]]. Dalle due formule $\mathcal{A}$ e $\mathcal{A} \implies \mathcal{B}$ si riscrive $\mathcal{B}$

>[!example]
>$\vdash_{L} \mathcal{A} \implies \mathcal{A}$
>Per dimostrarlo dobbiamot rovare una dimostrazione in $L$ che finisca con la formula $\mathcal{A} \implies \mathcal{A}$ e tale che le formule della sequenza o siano assiomi o siano ricavate da formule precedenti per Modus Ponens.
>1. $\mathcal{A} \implies (\mathcal{A} \implies \mathcal{A})$ A1; è lo schema di assiomi A1 dove $\mathcal{B}$ è sostituito con $\mathcal{A}$
>2. $\mathcal{A} \implies ((\mathcal{A} \implies \mathcal{A}) \implies \mathcal{A})$ A1; è lo schema di assiomi A1 dove $\mathcal{B}$ è stato sotituito con $\mathcal{A} \implies \mathcal{A}$
>3. $(\mathcal{A} \implies (( \mathcal{A} \implies \mathcal{A}) \implies \mathcal{A})) \implies ((\mathcal{A} \implies (\mathcal{A} \implies \mathcal{A}))\implies (\mathcal{A} \implies \mathcal{A}))$ A2; è lo schema di assiomi A2 dove $\mathcal{B}$ è stato sotituito con $\mathcal{A} \implies \mathcal{A}$ e $\mathcal{C}$ con $\mathcal{A}$
>4. $(\mathcal{A} \implies (\mathcal{A} \implies \mathcal{A})) \implies (\mathcal{A} \implies \mathcal{A})$ 2,3MP; applicando Modus Ponens tra le formule 2 e 3
>5. $\mathcal{A} \implies \mathcal{A}$ 1,4MP; applicando Modus Ponens tra le formule 1 e la 4
> (la parte tra la formula e la descrizione del processo si chiama giustificazione)

>[!example]
>$\{ a, (\sim b \implies \sim a) \} \vdash_{L} B$
>1. $a$ ip
>2. $(\sim b \implies \sim a)$ ip
>3. $(\sim b \implies \sim a) \implies ((\sim b \implies a) \implies b)$ A3
>4. $(\sim b \implies a) \implies b$ 2,3MP
>5. $a \implies (\sim b \implies a)$ A1
>6. $(\sim b \implies a)$ MP1,5
>7. $b$ 4,6MP



La teoria formale $L$ che abbiamo così presentato ha tre importanti caratteristiche:
- È **corretta**, cioè tutti i suoi teoremi sono tautologie
- È **completa**, cioè tutte le tautologie sono teoremi di $L$
- È **decidibile**, cioè esiste un algoritmo (la tavole di verità) che con un numero finito di passi (con noto il limite superiore) permette di decidere se una data formula è o non è un teorema della teoria
Le prime due affermazioni vengono solitamente chiamate (meta)teoremi di corretteza e completezza, il prefisso meta indica che sono teoremi sulla teoria che sono enunciati e non sono dimostrati utilizzando il linguaggio della teoria stessa.

>[!theorem] teorema di correttezza
>Se $\vdash_{L}a$ allora $\vDash a$

>[!theorem] teorema di completezza
>Se $\vDash a$ allora $\vdash_{L} a$

> [!dim]
> Accenniamo solo alla dimostrazione del teorema di correttezza:
> È immediato verificare che gli schemi di assiomi della teoria sono tutti tautologie, inoltre il modus ponens ffa passare da tautologie a tautologie, pertanto possiamo dimostrare che ogni teorema di $L$ è una tautologia procedendo per induzione sul numero $n$ di formule della dimostrazione. Se $n = 1$, la dimostrazione consiste di una sola formula (il teorema) che può essere solo un assioma e quindi è una tautologia.
> Per ipotesi di induzione supponiamo che ogni formula dimostrata con un numero di passi $m < n$ sia una tautologia. Sia $\mathcal{A}$ un teorema dimiostrato con $n$ passi. Se $\mathcal{A}$ è scritta, come $n$-esimo passo della dimostrazione, in quanto assioma è ovviamente una tautologia;  se invece è scritta perchè si è utilizzato il modus ponens su due formule precedenti, ognuna di queste, essendo stata dimostrata con un numero di passi inferiore ad $n$, è una tautologia per ipotesi di induzione ed $\mathcal{A}$ è una tautologia perchè il modus ponens fa passar e da tautologie a tautologie.

I teoremi di correttezza e completezza ammettono anche una formulazione più forte che è quella del [[teorema di correttezza e completezza forte]].

Potremmo adesso chiederci se gli assiomi di L siano necessari o se è possibile ricavarne uno dai due restanti. La risposta è no, e per dimostrarlo si utilizzano tavole di verità per i connettivi $\sim$ e $\implies$. Tali tavole sono fatte in modo che il modus ponens faccia passare da formule il cui valore è 0 a formula in cui valore è 0 e che gli schemi A2 e A3 (A1 e A3) valgono 0, mentre l'assioma A1 (A2) può assumere valori diversi. Dunque A1 (A2) non può essere ricavato come teorema dai restanti assiomi, altrimenti dovrebbe valere sempre 0.
L'indipendenza di A3 da A1 ed A2 si dimostra con una tecnica diversa, si utilizza un operatore $h$ che cancella da ogni formula il connettivo $\sim$ e lascia fissi tutti gli altri simboli del linguaggio, $h$ porta da f.b.f. a f.b.f. ed in particolare porta gli schemi A1 ed A2 in formule che sono ancora istanza di A1 ed A2, mentre porta A3 in una formula del tipo $(h(\mathcal{A}) \implies h(\mathcal{B})) \implies ((h(\mathcal{A})\implies h(\mathcal{B}))\implies h(\mathcal{A})$, che non è un'istanza di A3 ed inoltre non è una tautologia. Se A3 si potesse dedurre come teorema da A1 e da A2 operando con $h$ su tutte le formule della sequenza dimostrativa, si troverebbero ancora istanze di A1 e A2 e formule ottenute da formule precedenti per modus ponens, allora si avrebbe una dimostrazione di $h$(A3) in L e quindi $h$(A3) dovrebbe essere una tautologia mentre, come abbiamo notato non lo è.

Da ultimo vogliamo osservare che la teoria L è solo uno dei tanti sistemi formali che possiamo introdurre per la logica proposizionale. Si hanno numerosi altri sistemi con scelte diverse come insiemi di connettivi, come assiomi (alcuni ne hanno un numero inferiore al prezzo di una piú complessa).

La teoria L è un sistema che non si presta bene alla dimostrazione automatica, richiede fantasia nella scelta delle istanze di assiomi da usare, il sistema piú utilizzato è la [[modello di risoluzione]]



```anki
id: 1700559636600
deck: LeA
---
Alfabeto di L
===
$A,B,C$ lettere enunciative
$\sim, \implies$ connettivi logici
$(,)$ simboli ausiliari
```


```anki
id: 1700559641453
deck: LeA
---
Fbf di L
===
1. ogni lettera enunciativa è una fbf
2. Se $a$ è na fbf allora $\sim a$ è una fbf
3. se $a$ e $b$ sono fbf, allora $a \implies b$ è una fbf
4. le uniche fbf sono quelle definite nei punti precedenti
```


```anki
id: 1700559645251
deck: LeA
---
Assiomi di L
===
- _A1_ $a \implies (b \implies a)$
- _A2_ $a \implies (b \implies c)) \implies ((a \implies b) \implies (b \implies c))$ (assomiglia ad una distributiva)
- _A3_ $(\sim a \implies \sim b) \implies ((\sim a \implies b) \implies a)$
```


```anki
id: 1700559646950
deck: LeA
---
Regole di inferenza di L
===
MP modus ponens, quindi
se $a$ (è nelle righe precedenti) e $a \implies b$
$b$ (riscrivo $b$ in una nuova riga singola)
```


```anki
id: 1700559648027
deck: LeA
---
teorema di correttezza
===
Se $\vdash_L a$ allora $\vDash a$

>[!dim]
>ip: $\vdash_L a$
>teo: $\vDash a$
>Per ipotesi quindi esiste in L una dimostrazione di $a$, ossia avrò una sequenza finita di righe di cui $a$ è la formula finale.
>Si dimostra con induzione sul numero di righe
>Se $n=1$ allora $a$ è un assioma ma gli assiomi sono tautologia da cui $\vDash a$.
>Ipotesi di induzione: ogni formula ottenuta con $m < n$ passi è una tautologia
>1...
>...
>i... $c$
>j... $c => a$
>k... $a$ o assioma o ottenuta per MP da i e j
>Per ipotesi di induzione sia $c$ che $c \implies a$ sono tautologie quindi $a$ è tautologia
>
>
>>[!remark]
>>Se $c$ tautologia e $c \implies a$ è tautologia allora $a$ è tautologia
>>per assurdo
>> $v ; v(a) = 0 \implies v(c) = 0$
```
```anki
id: 1700559648779
deck: LeA
---
teorema di completezza
===
Se $\vDash a$ allora $\vdash_L a$
```


