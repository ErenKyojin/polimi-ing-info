---
aliases: grammatica
creation date: 2023-03-10 14:19
modification date: 2023-03-10 14:19
---
La grammatica è un [[Modelli generativi|modello generativo]], produce (o genera) stringhe. Generalmente parlando si puó definire come un insieme di regole per costruire frasi di un [[linguaggio]], si applica in qualsiasi nozione di [[linguaggio]] nel senso piú lato.
In modo sostanzialmente simile ai normali meccanismi linguistici, una grammatica formale genera stringhe di un linguaggio attraverso un processo di riscrittura.



>[!multi-column]
>
>>[!quote]
>> "Una frase è costituita da un soggeto seguito da un predicato, il soggetto puó essere un pronome, un sostantivo, o ..."
>
>>[!quote]
>>"Un programma è costituito da una parte dichiarativa e da una eseutiva,
>>La parte dichiarativa...
>>La parte esecutiva è costituita da una sequenza di istruzioni, un'istruzione può essere semplice o composta"
>
>

>[!multi-column]
>
>>[!quote]
>>"Una mail è costituito da una testata e da un corpo, la testata contiene l'indirizzo..."

Questo tipo di regole linguistiche descrive un oggetto principale come una sequenza di oggetti componenti. Ognuno di questi viene poi raffinato, rimpiazzandolo con altri oggetti piú dettagliati fino a quando non si raggiunge una sequenza di elementi base.
Le varie riscritture possono presentare alternativo, un soggetto puó essere un nome, un pronome o altro, un'istruzione può essere di assegnamento, di lettura, di output...

>[!def] Definizione formale di grammatica
> $$
> G = (V_{N},V_{T}, P,S)
>$$
>con:
>- $V_{N}$ **alfabeto** o **vocabolario nonterminale**, serve per impostare il linguaggio ma verranno eliminati successivamente
>- $V_{T}$ **alfabeto** o **vocabolario terminale**, comporrà le frasi
>- $V = V_{N} \cup V_{T}$
>- $S \in V_{N}$ elemento particolare di $V_{N}$ detto **assioma** o **simbolo iniziale**
>- $P \subseteq V_{N}^+ \times V^*$ [[Analisi 1/Insiemi numerici/Insieme|insieme]] delle regole di **riscrittura** o **produzioni**
>Scriveremo per comodità $\alpha \to \beta$ al posto di $(\alpha,\beta)$

>[!oss]
>$$P \subseteq V_{N}^+ \times V^*$$
>$(\alpha,\beta)$ con $\alpha \in V_{N}^+$ e $\beta \in V^*$
>Ossia le parti sinistre $\alpha$ sono stringhe di caratteri non terminali senza l'elemento vuoto, mentre $\beta$ è una stringa qualunque.

>[!esempio]
>$V_{N} = \left\{ S,A,B,C \right\}$
>$V_{T} = \left\{ a,b,c,d \right\}$
>$S$
>$P = \left\{ S \to AB, BA \to cCd, CBS \to ab, A\to \varepsilon \right\}$


## [[Relazione]] di derivazione immediata
$$\alpha \implies \beta, \alpha \in V^+, \beta \in V^*$$
(alpha deriva beta)
Se e solo se
$\alpha = \alpha_{1}\alpha_{2}\alpha_{3}, \beta = \alpha_{1}\beta_{2}\alpha_{3},\quad a_{2} \to \beta_{2} \in P$
$\alpha_{2}$ si riscrive come $\beta_{2}$ nel contesto $(\alpha_{1}, \alpha_{3})$

Rispetto alla grammatica precedente abbiamo per la stringa aaBAS tre possibili deriazioni

 aaBAS => aacCdS
oppure
 aaBAS => aaBAAB
oppure
 aaBAS => aaBS
>[!oss]
>La freccia singola $\to$ indica una produzione
>La freccia doppia $\implies$ indica la relazione di derivazione 

Definiamo poi come al solito la [[Chiusura]] riflessiva e transitiva di $\implies : \Longrightarrow^*$

$\eta \Longrightarrow^* \theta$
Partendo da eta, attraverso un qualsiasi numero di produzioni arrivo a theta

![[Linguaggio#Linguaggio generato da una Grammatiche grammatica]]

Sorgono spontanee alcune domande:
- oltre ai divertimenti con $\left\{ a^nb^n \right\}$, ci sono vere utilità?
- Quali linguaggi è possible ottenere con le grammatiche?
- Che relazioni ci sono tra grammatiche e automi (o tra linguaggi generati e riconosciuti)?

Sono sicuramente utili per la definizione (e la compilazione!!) della sintassi dei linguaggi di programmazioni, applicazioni duali rispetto a quelle degli automi

# Classi di grammatiche


### Grammatiche non contestuali
Ogni produzione ha la forma $\alpha \to \beta$ con $|\alpha| = 1$, con $\alpha$  elemento di $V_{N}$.
Non contestuale perchè la riscrittura di $\alpha$ non dipende dal contesto in cui si trova, sono di fatto la stessa cosa della BNF usata per definire la sitassi dei linguaggi di programmazione.
Le $G_{1}$ e $G_{2}$ precedenti sono non contestuali, non è così invece la $G_{3}$

>[!oss] Una grammatica non contestuale ha sempre un solo elemento a sinistra delle produzioni

### Grammatiche regolari
Ogni produzione ha la forma $\alpha \to \beta$ dove
$$
|\alpha| = 1, \beta \in V_{T}.V_{N} \cup V_{T}
$$
Le grammatiche regolari sono anche non contestuali, ma non viceversa.
	la $G_{1}$ è regolare, $G_{2}$

Per la stringa vuota si deve ammettere anche $S \to \varepsilon$

### Grammatiche monotone
Ogni produzione hal a forma $\alpha \to \beta$, dove $|\alpha| \leq |\beta|$. 
Le regolari sono monotone.

Le non contestuali non lo sono generalmente a causa delle produzioni: $A\to \varepsilon$, si deve ammettere $S \to \varepsilon$, però $S$ non deve apparire in parti destre di produzioni

---

Le grammatiche regolari sono monotone, quelle non contestuali non lo generalmente sono perchè si possono avere produzioni del tipo $A \to \varepsilon$, ma si possono eliminare senza troppe difficoltà.

![[gerarchia di Chomsky]]

# Relazioni tra grammatiche e automi
$G$ regolari ($GR$) equivalenti agli automi a stati finiti:
- Dato un [[Automa a stati finiti|FSA]] $A$, poniamo $V_{N} = Q, V_{T} = I, S = q_{0}$ e per ogni $\delta(q,i) = q'$ poniamo $q \to iq'$
  Inoltre se $q' \in F$ aggiungiamo $q \to i$
- È intuitivo (attraverso l'induzione) che
$$ \delta^*(q,x) = q' \iff q \implies^* xq' $$
Viceversa data una GR poniamo $Q = V_{N} \cup \left\{ q_{F} \right\}, I = V_{T}, q_{0} = S, F = \left\{ q_{F} \right\}$ e:
- per ogni $\text{ A } \to \text{ Bc }$ poniamo $\delta(A,b) = C$
- per ogni $A \to b$ poniamo $\delta(A,b) = q_{F}$

Il FSA ottenuto è non deterministico


## Grammatiche non contestuali equivalenti ad automi a pila non deterministici

Giustificazione intuitiva, consideriamo la grammatica:
