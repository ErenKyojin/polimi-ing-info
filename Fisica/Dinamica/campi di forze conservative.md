---
aliases: campo di forza conservativa, campo conservativo, campi conservativi
creation date: 2023-03-26 16:56
modification date: 2023-03-26 16:56
---
>[!def]
>Un [[Analisi 1/Insiemi numerici/Campo|campo]] di forze che ammette [[energia potenziale]] si dice **campo conservativo** e si dice che la [[forza]] corrispondente è una [[forze conservative|forza conservativa]]

>[!oss]
>Condizione necessaria ma non sufficiente perchè un campo di [[forza|forze]] sia conservativo è che l'espressione della forza dipenda solo dalla posizione del [[punto materiale]] cui è applicata:
>$$ \vec{F} = \vec{F}(\vec{r}) $$

>[!oss]
>Condizione sufficiente ma non necessaria perchè un campo di forze sia non conservativo è che l'espressione della forza dipende anche dalla velocità del punto materiale cui è applicata
>
>>[!esempio]
>>Le [[forze di attrito]] ad esempio sono certamente non [[forze conservative|conservative]]


>[!oss]
>Per una forza conservativa il lavoro corrispondente ad uno spostamento da $A$ a $B$ è sempre uguale alla variazione di [[energia potenziale]], cambiata di segno, ed il lavoro elementare è il [[differenziale]] dell'energia potenziale, cambiato di segno (si dice che il [[lavoro]] elementare è un differenziale esatto)
>$$ \mathcal{L}_{A\to B} = E_{p}(A)- E_{p}(B) = -\Delta E_{p}\quad; \quad d\mathcal{L} = \vec{F} \cdot d\vec{r} = -dE_{p} $$
>Infatti essendo in tal modo il lavoro elementare una differenziale esatto, integrando fra $A$ e $B$ si ottiene
>$$ \mathcal{L}_{A\to B} = \int _{A}^B \! \, \mathrm{d}\mathcal{L} = - \int _{A}^B \! \, \mathrm{d}E_{p}   = -E_{p}\bigg |_{A}^B = -E_{p}(B) + E_{p}(A) = -\Delta E_{p}$$

>[!oss]
>In un campo di forze [[forze conservative|conservative]] il [[lavoro]] non dipende dalla [[traiettoria]] ma solo dagli estremi!

>[!oss]
>In un campo di forze conservative il lavoro compiuto su un cammino chiuso è nullo:
>$$ \mathcal{L}_{A\to A} = \oint \mathrm{d}\mathcal{L} = 0 $$

### Condizione affinchè un campo sia conservativo
Abbiamo già osservato che un campo è conservativo (quindi ammette energia potenziale(se e solo se il lavoro elementare può essere scritto come il differenziale di una funzione scalare, che è poi proprio l'[[energia potenziale]] cambiata di segno, cioè:
$$
d\mathcal{L} = F_{x}dx + F_{y}dy + F_{z}dz = -dE_{p}
$$

#### Condizione necessaria e sufficiente
affinchè tale [[Funzioni|funzione]] [[scalare]] esiste è che tra le componenti della forza del campo valgano identicamente le seguenti relazioni
$$
\frac{ \partial F_{x} }{ \partial y }  = \frac{ \partial F_{y} }{ \partial x } ;\quad \frac{ \partial F_{x} }{ \partial z } = \frac{ \partial F_{z} }{ \partial x } ;\quad \frac{ \partial F_{y} }{ \partial x } = \frac{ \partial F_{z} }{ \partial y } 
$$
Queste tre identità scalari possono essere sintetizzate in un'unica identità vettoriale per mezzo dell'operatore vettoriale "rotore" $[\text{ rot}(\dots) = \vec{\nabla} \times \dots]$ applicato ad $\vec{F}$ e cioè dall'equazione:
$$
\text{rot}(\vec{F}) = \vec{\nabla} \times \vec{F} = 0
$$
Tale identità stabilisce che il rotore del [[Analisi 1/Insiemi numerici/Campo|campo]] $\vec{F}$ è identicamente nullo, o, equivalentemente, che il campo $\vec{F}$ è irrotazionale.
Infatti, per definizione, l'operatore rotore applicato ad un campo vettoriale $\vec{F}$ genera un nuovo campo vettoriale derivato, definito formalmente come segue:
$$
\vec{\nabla} \times \vec{F} = \begin{vmatrix}
\hat{u}_{x} & \hat{u}_{y} & \hat{u}_{z} \\
\frac{ \partial  }{ \partial x }  & \frac{ \partial  }{ \partial x }  & \frac{ \partial  }{ \partial x }  \\
F_{x}  & F_{y} & F_{z}  
\end{vmatrix} = \hat{u}_{x} \begin{bmatrix}
\dfrac{ \partial F_{z} }{ \partial y } - \dfrac{ \partial F_{y} }{ \partial z } 
\end{bmatrix} + \hat{u}_{y} \begin{bmatrix}
\frac{ \partial F_{x} }{ \partial y }  - \frac{ \partial F_{z} }{ \partial x } 
\end{bmatrix} + \hat{u}_{z}\left[ \frac{ \partial F_{y} }{ \partial x }  - \frac{ \partial F_{x} }{ \partial y }  \right]
$$
È chiaro quindi che avere la condizione soddisfatta equivale ad avere $\vec{\nabla} \times \vec{F} = 0$
Quindi un [[campi vettoriali|campo vettoriale]] è conservativo se e solo se è irrotazionale

### [[equilibrio]] di un corpo in un campo conservativo
Sappiamo già che la condizione necessaria e sufficiente affinchè un [[punto materiale]] stia in equilibrio in una certa posizione è, in generale, che la sua velocità sia nulla ad un certo istante e che la risultante delle forze ad esso applicate sia nulla.
Consideriamo un punto materiale in un campo di forze conservative, limitandoci per semplicità ad un caso monodimensionale, sia $E_{p}(x)$ l'andamento dell'energia potenziale lungo l'asse $x$. Poichè in questo caso la forza è pari alla derivata dell'energia potenziale rispetto a $x$, cambiata di segno, essa sarà nulla in un punto di ascissa $x_{0}$ se e solo se $\left( \dfrac{dE_{p}}{dx} \right)_{x = x_{0}} =0$ ossia se il punto considerato è un punto stazionario per la funzione $E_{p}(x)$. Precisamente:
- se si tratta di un punto di **massimo** l'equilibrio si dice **instabile**
- se si tratta di un punto di **minimo** l'equilibrio si dice **stabile**
- se la derivata è **nulla** $\forall x$ di un intorno a $x_{0}$ l'equilibrio si dice **indifferente**

Un punto di equilibrio si dice stabile, instabile o indifferente a seconda che, a seguito di uno spostamento infinitesimo del punto dalla posizione di euqilibrio, la risultante tenda a riportare il punto nella posizione di equilibrio, oppure ad allontanarlo, oppure resti ancora nulla.