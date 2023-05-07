---
aliases: 
creation date: 2023-05-03 11:31
modification date: 2023-05-03 11:31
---

>[!teorema]
>$\mathcal{A}$ è conseguenza semantica di $\mathcal{B}$ se e solo se $\mathcal{B \implies A}$ è una tautologia

Scritto in forma piú generale:

>[!teorema]
>$\mathcal{A}$ è conseguenza semantica di $\Gamma \cup \{ \mathcal{B} \}$ se e solo se $\mathcal{B \implies A}$ è conseguenza semantica di $\Gamma$
>
>>[!dim]
>>hp: $\Gamma \cup \{ \mathcal{B} \} \vDash \mathcal{A}$, th: $\Gamma \vDash \mathcal{B \implies A}$
>>
Sia $v$ un modello per $\Gamma$. Distinguiamo due casi.
>>1. Se $v$ è un modello per $\mathcal{B}$, $v$ è anche un modello per $\Gamma \cup \{ \mathcal{B} \}$ e dall'ipotesi si ha $v(\mathcal{A})=1$, quindi $v(\mathcal{B \implies A}) =1$.
>>2. Se $v$ non è un modello per $\mathcal{B}$, cioè se $v(\mathcal{B})=0$, si ha $v(\mathcal{B \implies A})=\max(1 - v(\mathcal{B}),v(\mathcal{A}))=1$ 
>>
>>In entrambi i casi quindi $v$ è un modello per $\mathcal{B \implies A}$
>>
>>hp: $\Gamma \vDash \mathcal{B \implies A}$, th: $\Gamma \cup \{ \mathcal{B} \} \vDash \mathcal{A}$
>>Sia $v$ un modello per $\Gamma \cup \{ \mathcal{B } \}$ allora $v$ è un modello per $\Gamma$ e per $\mathcal{B}$. Essendo un modello per $\Gamma$ dall'ipotesi si ha $v(\mathcal{B} \implies \mathcal{A})=1$ che assieme a $v(\mathcal{B})=1$ implica $v(\mathcal{A})=1$

È interessante il legame fra deduzione semantica ed insoddisfacibilità, dato dal seguente teorema:

>[!teorema]
>$\mathcal{A}$ è conseguenza semantica di $\Gamma$ se e solo se $\Gamma \cup \{  \sim A \}$ è insoddisfacibile
>
>>[!dim]
>>Hp: $\Gamma \vDash \mathcal{A}$, Th: $\Gamma \cup \{ \sim \mathcal{A} \}$ è insoddisfacibile
>>
>>Sia $v$ una qualunque interpretazione. Distinguiamo i due casi seguenti:
>> 1. Se $v$ è un modello per $\Gamma$ dall'ipotesi si ha $v(\mathcal{A})=1$ e quindi $v(\sim A)=0$, quindi $v$ non è un modello per $\Gamma \cup \{  \sim \mathcal{A} \}$
>> 2. Se $v$ non è un modello per $\Gamma$, non può essere sicuramente un modello per un insieme di formule che lo contiene.
>>
>>
>>Hp: $\Gamma \cup \{ \sim \mathcal{A} \}$, Ts: $\Gamma \vDash \mathcal{A}$
>>Sia $v$ un modello per $\Gamma$, allora non dovendo essere un modello per $\Gamma \cup \{ \sim \mathcal{A} \}$ si ha $v(\sim \mathcal{A})=0$ e quindi $v(\mathcal{A})=1$, dunque ogni modello di $\Gamma$ è modello per $\mathcal{A}$.

Notiamo che non abbiamo mai imposto limiti sulla cardinalità di $\Gamma$, ma se $\Gamma$ è un insieme infinito è importante il [[teorema di compattezza]]
