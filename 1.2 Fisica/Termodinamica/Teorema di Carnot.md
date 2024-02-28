---
aliases: 
creation date: 2024-01-24
---

>[!teorema]
>Tutte le macchine che operano tra due sorgenti hanno efficienza minore o uguale ad una macchina reversibile che opera tra le medesime sorgenti, inoltre tutte le macchine reversibili hanno la stessa efficienza per le medesime sorgenti.
>
>>[!dim]
>>#### 1
>>Consideriamo una macchina R reversibile e una macchina X non reversibile
>>![[Teorema di carnot.canvas|Teorema di carnot]]
>>avranno come rendimento
>>- $\eta_{R} = \dfrac{\mathcal{L}'}{Q_{2}'}$
>>- $\eta_{N} = \dfrac{\mathcal{L}}{Q_{2}}$
>>
>>Se poniamo $\mathcal{L} = \mathcal{L}'$
>>$$\eta_{R} = \frac{\mathcal{L}}{Q_{2}'}\quad;\quad \eta_{X} = \frac{\mathcal{L}}{Q_{2}}$$
>>
>>ipotizziamo per assurdo $\eta_{X} > \eta_{R}$ abbiamo quindi
>>$$ \eta_{X} > \eta_{R}  \implies \frac{\mathcal{L}}{Q_{2}} > \frac{\mathcal{L}}{Q_{2}'} \implies Q_{2}' > Q_{2} \implies Q_{1}' > Q_{1}$$
>>
>>Essendo $R$ reversibile, possiamo considerare la sua inversa $\bar{R}$, e farle sfruttare il lavoro $\mathcal{L}$  
>>![[Teorema di Carnot 2.canvas|Teorema di Carnot 2]]
>
>Considerando la macchina X+R abbiamo
>$\mathcal{L}'' = 0$
>$Q_{2}''=Q_{2} - Q_{2}' < 0$
>$Q_{1}''=Q_{1} - Q_{1}' < 0 \implies Q_{1}' - Q_{1} > 0$
>
>La macchina X+R trasferisce calore da una sorgente fredda ad una sorgente calda senza compiere lavoro, in violazione del [[Secondo principio della termodinamica]]
>Quindi $\eta_{X} \leq \eta_{R}$
>
>#todo

# ANKI

```anki
id: 1706271937146
deck: Fisica
---
Teorema di Carnot
===
Tutte le macchine che operano tra due sorgenti hanno efficienzam inore o uguale rispetto ad una macchina reversibile che opera tra le medesime sorgenti, inoltre le macchine reversibili operanti tra le medesime sorgenti hanno tutte la stessa efficienza
```
