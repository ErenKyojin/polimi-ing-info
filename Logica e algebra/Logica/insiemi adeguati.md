---
aliases: 
creation date: 2023-05-07 11:27
modification date: 2023-05-07 11:27
---

>[!def]
>Usando la tavola delle equivalenza si può vedere che ogni [[formule ben formate|f.b.f.]] ammette una f.b.f. equivalente che usa solo uno qualunque degli [[insieme|insiemi]] di [[connettivi]] $\{ \sim, \land \}, \{ \sim,\lor \}, \{ \sim, \implies \}$, detti **insiemi adeguati** (**o funzionalmente completi**) **di connettivi**

La formula $(\sim A \land B \land \sim C) \lor (\sim A \land B \land C) \lor (A \land B \land \sim C)$ del precedente esempio è equivalente a $((\sim A \land B) \land (\sim C \lor C)) \lor (A \land B \land \sim C)$ e quindi a $(\sim A \land B) \lor (A \land B \land \sim C)$ che a sua volta è equivalente a $B \land (\sim A \lor (A \land \sim C))$ e quindi a $B \land ((\sim A \lor A) \land (\sim A \lor \sim C))$ cioè a $B \land (\sim A \lor \sim C)$. Se volessivo eliminare il connettivo  $\land$ potremmo riscriverla come $\sim(\sim B l)$