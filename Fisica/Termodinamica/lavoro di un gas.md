---
aliases: 
creation date: 2023-12-21
---

Un gas può compiere lavoro sull'ambiente o ricevere lavoro dall'ambiente. Ad esempio un gas che subisce un cambiamento delle proprie condizioni può muovere un pistone.

![[FisicaLavoroGas.excalidraw]]

Supponiamo che il pistone sia fermo all'inizio e alla fine della trasformazione, applicando il teorema dell'energia cinetica possiamo dire
$$\begin{align}
 dE_{c} &= 0 \\
dE_{c} &= \delta L_{gas} + \vec{F}^{ext} \cdot d\vec{r} = 0 \\
&=\delta L_{gas} + \vec{F}^{ext} \cdot d\vec{z} = 0 \\
&d\mathcal{L}_{gas} = - \vec{F}^{ext} \cdot d\vec{z}
\end{align} $$

Possiamo descrivere la forza esterna agente sul pistone in funzione della pressione esterna:
$$ \vec{F}^{ext} = p_{e}S(-\hat{u}_{z}) $$
avremo quindi
$$ \begin{align}
\delta L_{gas} &= - [p_{e} S (- \hat{u}_{z} ) \cdot d\vec{z}] \\
\delta L_{gas} &= p_{e}Sdz = p_{e}dV
\end{align} $$

Quindi:
- Se la trasformazione è isocora $dV=0 \implies \delta \mathcal{L}_{gas} =0$
- Se la trasformazione è reversibile allora il sistema è sempre in equilibrio con l'ambiente, quindi la pressione del gas e quella esterna sono sempre uguali, quindi l'espressione del lavoro diventa:
$$ p = p_{e} \implies \delta L_{gas} = pdV  $$

### Ciclo reversibile
Il signficiato geometrico del lavoro di un gas durante una trasformazione reversibile è visualizzabile attraverso un piano di clapeyron

![[lavoro di un gas.excalidraw]]
$\mathcal{L}_{AB}$ lungo la trasformazione da A a B il $\mathcal{L} > 0$
$\mathcal{L}_{BA}$ lungo la trasformazione da $B$ ad $A$ => $\mathcal{L} < 0$
$\mathcal{L}$ del ciclo è $$\mathcal{L} = \mathcal{L}_{AB} - |\mathcal{L}_{BA}| > 0$$


$\mathcal{L}_{AB}$ Lungo la trasformazione da A a B => $\mathcal{L} > 0$
$\mathcal{L}_{BA}$ lungo la trasformazione da A a B => $\mathcal{L} < 0$
$\mathcal{L}$ del ciclo è $$\mathcal{L} = \mathcal{L}_{AB} - |\mathcal{L}_{BA}| < 0$$


quindi in un ciclo termodinamico reversibile:
$$\mathcal{L}_{\text{ ciclo }} = \begin{cases}
>0 &\text{ciclo percorso in senso orario} \\
<0 &\text{ciclo percorso in senso antiorario}
\end{cases}$$

# ANKI


```anki
id: null
deck: Fisica
---
Lavoro di un gas
===
Il lavoro compiuto o subito da un GAS durante una trasformazione è 
$$ \delta \mathcal{L} = p_e dV $$
```


```anki
id: null
deck: Fisica
---
Lavoro di un gas in una trasformazione isocora
===
Il lavoro di un gas in una trasformazione isocora è nullo:
$$ \delta V = 0 \implies \delta \mathcal{L} = 0 $$
```


```anki
id: null
deck: Fisica
---
Lavoro di un gas in una trasformazione ciclica
===
In una trasformazione ciclica il gas è sempre in equilibrio con l'ambiente, quindi $p_{gas} = p_e$ allora il lavoro sarà
$$ \delta \mathcal{L} = pdV $$

Il lavoro è 
- positivo se il ciclo nel piano di clapeiron è percorso in senso orario
- negativo se il ciclo nel piano di clapeiron è percorso in senso antiorario

Inoltre equivale in modulo all'area compresa tra i due percorsi delle trasformazioni
```
