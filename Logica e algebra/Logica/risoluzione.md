---
aliases: 
creation date: 2023-05-08 16:25
modification date: 2023-05-08 16:25
---

La risoluzione è alla base del PROLOG, verifica se una formula $\mathcal{A}$ sia una tautologia (e quindi un teorema di L) o se sia deducibile da un [[insieme]] di formule $\Gamma$, provando tramite tecniche di riscrittura, rispettivamente l'insoddisfacibilità di $\sim \mathcal{A}$ o di $\Gamma \cup \{  \sim \mathcal{A} \}$.

Iniziamo ad introdurre un po' di terminologia:
- Si dice **letterale** una lettera enunciativa o la negazione di una lettera anunciativa
- Si dice **clausola** la disgiungzione (finita) di letterali
- Una clasuola viene rappresentata come insieme di letterali; una clausola che non contenga letterali si dice **clausola vuota** e si indica con $\square$
- Una [[formule ben formate|f.b.f.]] si dice in **forma a clasuole** se è scritta come congiunzione di clausole ed in tal caso sarà denotata come insieme di insiemi

Ogni formula ammette una formula equivalente in forma a clausole

>[!esempio]
>Si scriva in forma a clausole la f.b.f. $((A \implies B) \land (A \iff C)) \lor \sim B$
>Si ha $((A \implies B) \land (A \iff C)) \lor \sim B \equiv ((\sim A \lor B) \land (\sim A \lor C) \land(\sim C \lor A)) \lor \sim B \equiv$
>$\equiv ((\sim A \lor B \lor \sim B) \land (\sim A \lor C \lor \sim B) \land (\sim C \lor A \lor \sim B)$.
>La formula a clausole della formula iniziale viene scritta come insieme di clausole, dove ogni clausola è indicata a sua volta come insieme di letterali:
> $$ \{ \{ \sim A,B,\sim B \}, \{ \sim A,C,\sim B \}, \{ \sim C,A,\sim B \} \} $$
>
>Date le clausole $C_{1},C_{2}$ ed $R$ si dice che $R$ è una risolvente di $C_{1}$ e $C_{2}$ se esiste un letterale $L \in C_{1}$ tale che $\sim L \in C_{2}$ e $R = (C_{1} \setminus \{ L \}) \cup (C_{2}\setminus \{ \sim L \})$ dove se $L$ è una lettera enunciativa A il simbolo $\sim L$ sta per $\sim A$, se invece $L$ è la negazione di A il simbolo $\sim L$ sta per A.
>È immediato verificare che se $R$ è una risolvente di $C_{1}$ e $C_{2}$ si ha $c_{$ 