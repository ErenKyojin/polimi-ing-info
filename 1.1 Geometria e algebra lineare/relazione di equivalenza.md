---
aliases: relazioni di equivalenza
---
>[!definition]
>Una [[Relazioni|relazione]] $\mathfrak{R}$ è di equivalenza se gode delle seguenti proprietà:
>- Riflessiva: $\forall a \in A\qquad a \sim a$
>- Simmetrica: $\forall a,b \in A$ se $a \sim b \Rightarrow b \sim a$
>- Transitiva: $\forall a,b,c \in A$ se $a \sim b$ e $b \sim c \Rightarrow a \sim c$

Una relazione di equivalenza divide un insieme in [[classi di equivalenza]]

>[!example] [[Numeri razionali]]
>$A = \mathbb{Z} \times (\mathbb{Z} \setminus \lbrace 0 \rbrace)$ con $\mathbb{Z} = \lbrace ... -1, 0, 1, ... \rbrace$
>$$\begin{align}
>
>
>&\Rightarrow \mathfrak{R} = \lbrace\left((a,b),(c,d)\right) \in A \times A : ad = bc \rbrace \\
>&(c,d) = \left[\frac{c}{d}\right] = \frac{c}{d} = \lbrace(c',d') \in A : cd' = c'd\rbrace \\
>\\
>&\text{se } c = 0\qquad 0 = [(0,d)] = \lbrace(0,d') \in A : d' \in \mathbb{Z}\rbrace \\
>&\text{se } c \neq 0\qquad [(c,d)] = \lbrace(c',d') \in A | \exists m \in \mathbb{Z} : \begin{cases}
>c = mc' \\
>d = md'
>\end{cases}
>\text{  oppure}
>\begin{cases}
>c' = mc  \\
>d' = md
>\end{cases}
>\rbrace
>\end{align}
>$$
>
>$$\Rightarrow [(3,2)] = \left[\frac{3}{2}\right] = \frac{3}{2} = \left\lbrace\frac{6}{4}, \frac{-6}{-4}, \frac{9}{6},...\right\rbrace$$

Osserviamo che la [[Chiusura]] riflessiva, simmetrica e transitiva di una relazione $R$ è una relazione d'equivalenza ed è la minima relazione di equivalenza che contiene $R$, tale relazione viene anche chiamata chiusura di equivalenza di $R$ o piú comunemente relazione di equivalenza generata da $R$.

Nel seguito denoteremo le relazioni di equivalenza con le lettere minuscole dell'alfabeto greco.
# Logica e Algebra
>[!definition]
>$R$ è una relazione di equivalenza se gode delle proprietà riflessiva, simmetrica e transitiva

>[!definition]
>Data una relazione $R$ su $A$ la sua chiusura riflessiva, simmetrica e transitiva è detta relazione di equivalenza generata da $R$.

>[!example] esempi
>1. $A = \mathbb{N}$, la relazione di uguaglianza 
>2. $A =$ rette di un piano
>	- $a R b \iff a \parallel b$
>3. $A \in M_{(n,n)}(\mathbb{R})$
> $C \sim D \iff \exists P \in M(n, \mathbb{R})\quad |P| \neq 0 : D = P^{-1}CP$

Data una relazione di equivalenza possiamo definire le [[classi di equivalenza]]
# ANKI

```anki
id: 1695223921794
deck: GAL
---
# Relazione di equivalenza
===
Una relazione $\mathfrak{R}$ è di equivalenza se gode delle seguenti proprietà:
- riflessiva: $\forall a \in A, a \sim a$
- simmetrica: $\forall a,b \in A, a \sim b \implies b \sim a$
- transitiva: $\forall a,b,c \in A, a \sim b, b \sim c \implies a \sim c$
```
