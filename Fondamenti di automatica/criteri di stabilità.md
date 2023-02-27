Criteri di stabilità asintotica per SD LTI a TC.

>[!question] Domanda
>data la matrice $A$, posso dire se tutti i suoi autovalori hanno parte reale minore di $0$ senza calcolarli?
>Ci sonocriteri per dirlo, basati:
>- Sull'ispezione di $A$
>- Sull'ispezione del suo polinomio caratteristico $(PC)$ $\Pi(s) = \det(s\mathbb{1} - A)$

1.
$$\det(A) = \prod_{i}^n S_{i} \implies \text{Se }\det(A)=0 \exists s_{i} = 0 \implies \text{sistema non AS}$$

2. $$Tr(A) = \sum_{i=1}^n S_{i} = \sum_{i = 1}^n Re(S) \implies \text{se } Tr(A) > 0 \exists i : Re(S_{i})> 0\implies \text{Sistema I}$$
3. Se $Re(S) < 0 \forall i$ lalora i coefficienti di $\Pi(s)$ sono tutti concordi (e non nulli), cioè il sistema AS = coefficienti concordi


>[!esempio]
>1. $\Pi(S) = 5s^2 + s \implies$ non asintoticamente stabile, c'è un autovalore nullo
>2. $\Pi(S) = s^3 -s^2 + s+4 \implies$  Non asinticamente stabile, coefficiente discorde
>3. $\Pi(S) = s^5 + 4s^3 + 3s^2 + s + 5 \implies$ Non asintoticamente stabile, manca il termine $s^4$ (un coeff nullo)
>4. $\Pi(S) = s^4 + 2s^3 + 4s^2 + s + 5 \implies$ Non lo so, le coondizioni sono necessarie non sufficienti


[[criterio di Routh]]
