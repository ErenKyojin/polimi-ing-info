---
aliases: 
creation date: 2023-05-10 10:45
modification date: 2023-05-10 10:45
---

- Acqusisci $e(k)$ e $Tr(k)$
- Poni $u(k) = Tr(k)$
- Calcola $x(k)$ in modo che con $e = e(k)$ si abbia $u=Tr$

>[!esempio] Esempio semplice (primo ordine)
>[[Funzionamento automatico]]:
> $$\begin{cases}
>x(k) = ax(k - 1) + be(k - 1) \\
>u(k) = cx(k) + de(k)
\end{cases}$$
>
>Esecuzione istante k
>$$ \begin{cases}
>x(k+1) = ax(k) + be(k)\\
>u(k+1) cx(k+1) + de(k+1)
\end{cases} $$
>
>Esecuzione istante k + 1:
>$$ \begin{cases}
>x(k+2) = ax(k+1) + be(k+1) \\
>u(k+2)= \dots
\end{cases} $$
>
>Funzionamento tracking:
> $$\begin{cases}
>u(k) = Tr(k) \\
>\displaystyle x(k+1) = \frac{u(k) - de(k)}{c}
\end{cases}$$
> 

Alcune tecniche per realizzare tracking:

- Uso forma incrementale
#todo
- Uso realizzazione non minima
#todo