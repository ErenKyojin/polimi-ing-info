---
aliases: 
creation date: 2023-03-26 18:16
modification date: 2023-03-26 18:16
---

>[!teorema]
>In presenza di sole [[forze conservative]] l'[[energia meccanica]] (totale del sistema si conserva)
>
>>[!dim]
>>Il [[lavoro]] di tutte le forze agenti su un [[punto materiale]] per uno spostamento da $A$ a $B$ è pari alla variazione dell'energia cinetica, per il teorema della [[forza|forze]] vive:
>>$$ \mathcal{L}_{A \to B} = \int _{A}^B \!\left( \sum_{i}\vec{F}_{i} \right) \cdot \, \mathrm{d}\vec{r} = \sum_{i} \int _{A}^B \!\vec{F}_{i} \, \mathrm{d}\vec{r} = \sum_{i} \mathcal{L}_{i,A \to B} = E_{c}(B) - E_{c}(A) = \Delta E_{c}   $$
>>Se tutte le forze agenti $\vec{F}_{i}$ sono conservative è possibile definire un'[[energia potenziale]] $E_{p,i}$ per ciascuna di esse, e dunque risulta:
>>$$ \mathcal{L}_{A \to B} = \sum_{i} \mathcal{L}_{i,A \to B} = \sum_{i} - \Delta E_{p,i} = -\Delta E_{p}$$
>>dove con $E_{p}$ abbiamo indicato l'energia potenziale totale, somma di tutte le energie potenziali e con $\Delta E_{p}$ la sua variazione nello spostamento da $A$ a $B$.
>>Dunque se tutte le forze agenti sono sono conservative, la somma dell'energia cinetica e dell'energia potenziale totale del [[punto materiale]] $P$ si conserva:
>>$$ \Delta E_{c} = \mathcal{L}_{A \to B} = -\Delta E_{p} \implies \Delta E_{c} + \Delta E_{p} = 0 $$
>>quindi
>>$$ \fbox{$\Delta E = \Delta E_{c} + \Delta E_{p} =0$} $$
>>Quindi $E(A) = E_{c}(A) + E_{p}(A) = E_{c}(B) + E_{p}(B) = E(B)$
>>$\CVD$

>[!oss]
>in presenza di tutte e sole forze conservative, una variazione dell'energia cinetica puó avvenire solo a scapito dell'energia potenziale e viceversa
>$$\Delta E_{c} > 0 (< 0) \iff \Delta E_{p} < 0 (>0)$$

Questo teorema è parte del piú generale [[teorema di conservazione dell'energia]]

# ANKI

```anki
deck: Fisica
---
Teorema di conservazione dell'energia meccanica
===
In presenza di sole forza conservative l'energia mecanica totale del sistema si conserva

>[!dim]
>il lavoro di tutte le forze agenti su un punto materiale per uno spostamento da $A$ a $B$ è pari alla variazione dell'erngia cinetica, per il teorema delle forze vive abbiamo
>$$\begin{align}
>\mathcal{L}_{A \to B} &= \int_A^B \left(\sum_i \vec{F}_i\right) \cdot \mathrm{d}\vec{r} = \sum_i \int_A^B \vec{F}_i \mathrm{d}\vec{r} = \\
>&=\sum_i \mathcal{L}_{i,A\to B} = E_C(B) - E_C(A) = \Delta E_C
>\end{align} $$
>
>Inoltre tutte le forze agenti $\vec{F}_i$ sono conservative, possiamo quindi definire un energia potenziale $E_{p,i}$ per ognuna di esse, risulta quindi:
>$$ \mathcal{L}_{A \to B} = \sum_i \mathcal{L}_{i,A \to B} = \sum_i - \Delta E_{p,i} = -\Delta E_p $$
>
>Con $E_p$ indichiamo l'energia totale potenziale del sistema, somma di tutte le energie potenziali, mentre con $\Delta E_p$ indichiamo la sua variazione nello spostamento da $A$ a $B$.
>Se tutte le forze agenti sono conservative la somma dell'energia cinetica e dell'energia potenziale totale del punto materiale $P$ si conserva:
>$$ \Delta E_c = \mathcal{L}_{A \to B} = -\Delta E_p \implies \Delta E_C + \Delta E_p = 0 $$
>abbiamo quindi
>$$ \Delta E = \Delta E_c + \Delta E_p = 0 $$
>ed $E(A) = E_c(A) + E_p(A) = E_c(B) + E_p(B) = E(B)$
```


