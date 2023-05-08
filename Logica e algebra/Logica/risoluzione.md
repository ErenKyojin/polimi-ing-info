---
aliases: 
creation date: 2023-05-08 16:25
modification date: 2023-05-08 16:25
---

La risoluzione è alla base del PROLOG, verifica se una formula $\mathcal{A}$ sia una tautologia (e quindi un teorema di L) o se sia deducibile da un [[insieme]] di formule $\Gamma$, provando tramite tecniche di riscrittura, rispettivamente l'insoddisfacibilità di $\sim \mathcal{A}$ o di $\Gamma \cup \{  \sim \mathcal{A} \}$.

Iniziamo ad introdurre un po' di terminologia:
- Si dice **letterale** una lettera enunciativa o la negazione di una lettera anunciativa
- Si dice **[[clausola]]** la disgiungzione (finita) di letterali
- Una clasuola viene rappresentata come insieme di letterali; una [[clausola]] che non contenga letterali si dice **clausola vuota** e si indica con $\square$
- Una [[formule ben formate|f.b.f.]] si dice in **forma a clasuole** se è scritta come congiunzione di clausole ed in tal caso sarà denotata come insieme di insiemi

Ogni formula ammette una formula equivalente in forma a clausole

>[!esempio]
>Si scriva in forma a clausole la f.b.f. $((A \implies B) \land (A \iff C)) \lor \sim B$
>Si ha $((A \implies B) \land (A \iff C)) \lor \sim B \equiv ((\sim A \lor B) \land (\sim A \lor C) \land(\sim C \lor A)) \lor \sim B \equiv$
>$\equiv ((\sim A \lor B \lor \sim B) \land (\sim A \lor C \lor \sim B) \land (\sim C \lor A \lor \sim B)$.
>La formula a clausole della formula iniziale viene scritta come insieme di clausole, dove ogni clausola è indicata a sua volta come insieme di letterali:
> $$ \{ \{ \sim A,B,\sim B \}, \{ \sim A,C,\sim B \}, \{ \sim C,A,\sim B \} \} $$


![[risolvente#DEFINIZIONE]]


![[derivazione per risoluzione#definizione]]

Diamo ora una condizione necessaria e sufficiente affinchè un insieme di clausole e quindi ogni f.b.f. associata a quell'insieme di clausole sia insoddisfacibile.

>[!teorema]
>Un insieme di clausole $\Gamma$ è insoddisfacibile se è solo $\Gamma \vdash_{R} \square$
>
>>[!dim]
>>Hp. $\Gamma \vdash_{R} \square$ ; Th: $\Gamma$ è insoddisfacibile
>>Se $\Gamma$ ammettesse un modello $v$, $v$ sarebbe modello per tutte le clausole derivate da $\Gamma$ e quindi anche per la clausola vuota che invece è sempre insoddisfacibile. Quindi $\Gamma$ non ammette alcun modello e pertanto è insoddisfacibile
>>
>>Th. $\Gamma$ è insoddisfacibile ; Hp. $\Gamma \vdash_{R} \square$
>>Se $\Gamma$ è insoddisfacibile per il teorema di completezza esiste un suo sottoinsieme finito $\Delta$ insoddisfacibile e quindi basta dimostrare che $\Delta \vdash_{R} \square$, che ovviamente implica $\Gamma \vdash_{R} \square$
>>
>>Procediamo per induzione sul numero $n$ di lettere enunciative occorrenti (eventualmente negate) nelle clausole di $\Gamma$.
>>
>>Caso base $n = 0, \Gamma$ conteine solo la clausola vuota, che quindi è una clausola di $\Gamma$ dunque $\Gamma \vdash_{R} \square$.
>>
>>Ipotesi di induzione: da ogni insieme di clausole insoddisfacibile che contenga meno di $n$ lettere enunciative si deriva per risoluzione la clausola vuota.
>>
>>Passo induttivo. Supponiamo che in $\Delta$ occorrano $n$ lettere enunciative. Sia A una di queste $n$ lettere. Dividiamo $\Delta$ in 3 sottoinsiemi, l'insieme $\Delta_{0}$ (eventualmente vuoto) delle clausole in cui occorrono sia A sia $\sim A$, l'insieme $\Delta_{1}$ delle clausole in cui non compare $\sim A$, l'insieme $\Delta_{2}$ delle clausole in cui non compare A. Cancelliamo il letterale A da tutte le clausole di $\Delta_{1}$ in cui compare ed il letterale $\sim A$ da tutte le clausole di $\Delta_{2}$ in cui compare $A$. Cancelliamo il letterale A da tutte le clausole di $\Delta_{1}$ in cui non compare ed il letterale $\sim A$ da tutte le clausole di $\Delta_{2}$ in cui compare, ottenendo così risipettivamente i due insiemi di clausole $\Delta'$ e $\Delta''$. Tali insiemi sono insoddisfacibili, infatti, se $v$ fosse un modello per $\Delta''$, ponendo $w(A)=1,w$ sarebbe un modello per $\Delta$; inoltre $\Delta'$ e $\Delta''$ contengono un numero di lettere enunciative inferiore ad $n$ dunque per ipotesi di induzione $\Delta' \vdash_{R} \{ A \}$. Analogamente se ripristiniamo $\sim A$ in tutte le clausole di $\Delta''$ da cui era stato cancellato e ripercorriamo la derivazione otteniamo o ancora $\Delta_{1} \vdash_{R } \square$ (perchè nelle clausole usate non occorreva $\sim A$) o $\Delta_{2} \vdash_{R}\{ \sim A \}$. Se $\Delta_{1} \vdash_{R} \square$ o $\Delta_{2} \vdash_{R} \square$ allora ovviamente $\Delta \vdash_{R} \square$. Se invece $\Delta_{1} \vdash_{R} \{ A \}$ e $\Delta_{2} \vdash_{R} \{ \sim A \}$, abbiamo, con una ulteriore risoluzione fra le clausole $\{ A \}$ e $\{ \sim A \}, \Delta \vdash_{R} \square$.
>>
>>Da questo ricaviamo che una formula $\mathcal{A}$ è semanticamente deducibile da un insieme di f.b.f. $\Gamma$ se e solo se $\Gamma^C \cup \{ \sim A \}^{C} \vdash_{R} \square$ (dove $\Gamma^C$ e $\{ \sim A \}^C$ sono rispettivamente l'insieme delle clausole ottenute dalle formule di $\Gamma$ e la forma a clausole di $\sim A$) 

In conclusione:
- la risoluzione agisce per refutazione e opera su f.b.f. in forma a clausole
- è un sistema corretto ed è completo per refutazione
Ma se $\Gamma \vDash \mathcal{A}$ non è detto che $\Gamma^C \vdash_{R} \mathcal{A}^C$, dove $\Gamma^C$ l'insieme delle clausole ottenute dalle formule di $\Gamma$ ed $A^C$ è la formula a clausole di $\mathcal{A}$, basta pensare $\Gamma = \{ \{ A \} \}$ ed $\mathcal{A}$ come $A \lor B$.


Per verificare se una clausola (in particolare la clausola vuota) si può ottenere per risoluzione da $\Gamma$ è utile introdurre la seguente definizione:
$\Ris(\Gamma) = \Gamma \cup \{ C_{ij} | C_{ij} \text{ è risolvente di }C_{i},C_{j} \in \Gamma \}, \Ris n(\Gamma)=\Ris(\Ris n - 1(\Gamma))$
$\Ris^*(\Gamma) = \cup_{n > 0} \Ris n (\Gamma)$.
Osserviamo allora che $\Gamma \vdash_{R} C$ se e solo se $C \in \Ris^*(\Gamma)$. In conclusione abbiamo il seguente algoritmo per stabilire se $\Gamma \vDash \mathcal{A}$:
1. Trasformare le formule di $\Gamma$ in forma a clausole ottenendo un insieme $\Delta$ di clausole
2. Trasformare $\sim A$ in forma a clausole $(\sim A)^C$
3. $S := \Delta \cup \{ (\sim \mathcal{A})c \}$
   Ripetere
   1. $F := S$
   2. $S := \Ris(S)$
    Finchè $$