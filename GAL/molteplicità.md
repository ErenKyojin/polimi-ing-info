

>[!def]
>Se $\lambda$ è autovalore di $A \in M)\mathbb{K}(n,n)$ allora indicheremo la sua molteplicità algebrica con $m_{a}(\lambda)$ e la sua molteplicità geometrica con $m_{g}(\lambda)$. Diremo che $\lambda$ è **semplice** se $m_{a}(\lambda)=1$, diremo che $\lambda$ è **regolare** se $m_{g}(\lambda) = m_{a}(\lambda)$. Se $\lambda$ è semplice allora è regolare infatti:
> $$ 1 \leq m_{g}(\lambda) \leq m_{a}(\lambda) = 1 \implies mg(\lambda) = m_{a}(\lambda)=1 $$

# Molteplicità algebrica di un autovalore
Se $\lambda_{0}$ è radice di $p(\lambda)$ esiste un intero $m$ e un polinomio $q(\lambda)$ di grado $n-m$ tale che:
 	   $$ p(\lambda) = (\lambda-\lambda_{0})^mq(\lambda) \text{ e } q(\lambda_{0}) \neq0 $$
 $m$ è la **[[molteplicità]] algebrica** di $\lambda_{0}$. Se $m = 1, \lambda_{0}$ si dice radice semplice di $p(\lambda)$. Diremo che un autovalore ha molteplicità algebrica $m$ se $m$ è la molteplicità algebrica dell'autovalore in quanto radice del polinomio caratteristico.

# Molteplicità geometrica di un autovalore
Abbiamo visto che data $A \in M_{\mathbb{K}(n,n)}$ e $\widetilde{\lambda}$ autovalore di $$ A\quad (p_{A}(\widetilde \lambda) = \det(A - \widetilde{\lambda} \mathbb{1}_{n}) =0) $$
Diremo che l'intero positivo $m$ è la molteplicità algebrica di $\widetilde{\lambda}$ se
 $$ p_{A}(\lambda) = (\lambda-\widetilde{\lambda})q(\lambda)\quad\text{e}\quad q(\widetilde{\lambda}) \neq 0$$
 ($m$ è la massima potenza con cui $(\lambda - \widetilde{\lambda})$ compare in $p_{A}(\lambda)$)

>[!esempio]
>1. $p_{A}(\lambda) = \lambda^4 - 1$ allora $p_{A}(\lambda) = (\lambda^2 - 1)(\lambda^2 + 1) = (\lambda+1)(\lambda-1)(\lambda+i)(\lambda-i)$
>gli autovalori in $\mathbb{C}$ sono $1,-1,i,-i$ e ognuno a molteplicità algebrica $1$
>
>2. $p_{B}(\lambda) = (\lambda-1)^2(\lambda^4 - 1) = (\lambda-1)^3(\lambda+1)(\lambda-i)(\lambda+i)$. Gli autovalori di $B$ in $\mathbb{C}$ sono: $1$ con molteplicità algebrica $3$ e $-1,i,-i$ con molteplicità algebrica 1

>[!def]
>Data $A \in M_{\mathbb{K}(n,n)}$ e $\lambda$ autovalore di $A$ l'[[Autovalori e Autovettori|autospazio]] di $A$ relativo a $\lambda$ ed il [[sottospazi vettoriali|sottospazio]]:
> $$ V_{\lambda} = \ker(A - \lambda \mathbb{1}_{n}) = \left\{ \mathbf{v} \in \mathbb{K}^n | A\mathbf{v} = \lambda \mathbf{v} \right\}   $$
> Inoltre la molteplicità geometrica $g_{\lambda}$ di $\lambda$ è la dimensione dell'autospazio $V_\lambda$ ovvero
>  $$ g_{\lambda} := \dim(V_{\lambda}) $$

>[!oss]
>Per il teorema di nullità piú rango
> $$ g_{\lambda} = \dim(\ker(A - \lambda \mathbb{1}_{n})) = n - r(A - \lambda \mathbb{1}_{n}) $$


>[!proposizione]
>Siano $\mathbf{v}_{1},\dots,\mathbf{v}_{r}$ autovettori di $A \in M_{\mathbb{K}}(n,n)$ relativi ad $r$ autovalori distinti:
> $$ \lambda_{1},\dots,\lambda_{r} \implies \mathbf{v}_{1},\dots,\mathbf{v}_{r}$$ 
> sono linearmente indipendenti
>
>>[!dim]
>>Caso $r = 1$. Essendo $\mathbf{v}_{1}$ un autovettore allora $\mathbf{v}_{1} \neq \mathbf{0}$ e quindi $\mathbf{v}_{1}$ è linearmente indipendente. Caso $r = 2$, siano $\mathbf{v}_{1}$ e $\mathbf{v}_{2}$
>> autovettori relativi a $\lambda_{1}$ e $\lambda_{2}$. Supponiamo per assurdo che esista una loro combinazione lineare uguale al vettore $\mathbf{0} : r_{1}\mathbf{v}_{1} + r_{2}\mathbf{v}_{2} = \mathbf{0}$ over $r_{1} \neq 0$ e $r_{2}\neq0$ allora $\mathbf{v}_{1} = -\frac{r_{2}}{r_{1}}\mathbf{v}_{2}$
>> Applichiamo $A$ ad ambo i membri dell'equazione:
>>  $$ \begin{align}
>>A\mathbf{v}_{1} &= \lambda_{1}\mathbf{v}_{1} = -\lambda_{1}\left( \frac{r_{2}}{r_{1}} \right)\mathbf{v}_{1} \\
>>A\mathbf{v}_{1} &= A\left( -\frac{r_{2}}{r_{1}}\mathbf{v}_{2} \right) = -\lambda_{2}\left( \frac{r_{2}}{r_{1}} \right)\mathbf{v}_{2}
>>\end{align} $$
>>Sottraendo membro a membro otteniamo:
>> $$ \mathbf{0} = (\lambda_{1} - \lambda_{2}) \frac{r_{2}}{r_{1}} - \mathbf{v}_{2} \implies \frac{r_{2}}{r_{1}} = 0 $$
>> Che è un assurdo.
>> Supponiamo quindi di aver dimostrato la proposizione per $r \geq 2$, vogliamo dimostrarla per $r+1$ vettori. Siano $\mathbf{v}_{1},\dots,\mathbf{v}_{r},\mathbf{v}_{r+1}$ autovettori relativi a $\lambda_{1},\dots, \lambda_{r}, \lambda_{r} + 1$ autovalori distinti. Supponiamo per assurdo che siano linearmente dipendenti. A meno di riordinare i vettori, esistono $r_{1},\dots,r_{r} \in \mathbb{K}$ non tutti nulli tali che:
>> $$ \mathbf{v}_{r+1} = r_{1}\mathbf{v}_{1} + \dots + r_{r}\mathbf{v}_{r}  $$
>> Applichiamo $A$ ad ambo i membri:
>>  $$ \begin{align}
>>&A(\mathbf{v}_{r+1}) = \lambda_{r+1}\mathbf{v}_{r+1} = \lambda_{r+1}r_{1}\mathbf{v}_{1} + \dots + \lambda_{r+1}r_{r}\mathbf{v}_{r}  \\
>>&A(\mathbf{v}_{r+1}) = A(r_{1}\mathbf{v}_{1} + \dots + r_{r}\mathbf{v}_{r}) = \lambda_{1}r_{1}\mathbf{v}_{1} + \dots + \lambda_{r}r_{r}\mathbf{v}_{r}
>>\end{align}$$
>>Sottraendo membro a membro le due equazioni precedenti otteniamo:
>> $$\mathbf{0} = (\lambda_{r+1}-\lambda_{1})r_{1}\mathbf{v}_{1} + \dots + (\lambda_{r+1}-\lambda_{r})r_{r}\mathbf{v}_{r}$$
>> Poichè per ipotesi induttiva $\mathbf{v}_{1},\dots,\mathbf{v}_{r}$ sono linearmente indipendenti si ha che:
>> $$ \begin{align}
>>&0 = (\lambda_{r+1}-\lambda_{1})r_{1}= (\lambda_{r+1}-\lambda_{2})r_{2} = \dots = (\lambda_{r+1}-\lambda_{2})r_{2} \\
>>&\implies r_{1} = r_{2} = \dots = r_{r} = 0
>>\end{align} $$
>>Ma allora $\mathbf{v}_{r+1} = \mathbf{0}$ assurdo. Quindi $\mathbf{v}_{1},\dots,\mathbf{v}_{r},\mathbf{v}_{r+1}$ non possono essere linearmente dipendenti e dunque sono linearmente indipendenti
>> $\CVD$

>[!teorema]
>Sia $A \in M_{\mathbb{K}(n,n)}$. Supponiamo che $A$ ammetta $n$ autovalori distinti in $\mathbb{K}$ allora $A$ è diagonalizzabile in $\mathbb{K}$
>
>>[!dim]
>>Siano $\lambda_{1},\dots,\lambda_{n}$ autovalori distinti di $A$ e siano $\mathbf{v}_{1},\dots,\mathbf{v}_{n}$ autovettori associati a $\lambda_{1},\dots,\lambda_{n}$. Per la proposizione precedente $\mathbf{v}_{1},\dots,\mathbf{v}_{n}$ sono linearmente indipendenti e quindi compongono una base di $\mathbb{K}^n$ formata da autovettori di $A$. Quindi $A$ è diagonalizzabile su $\mathbb{K}$
>>$\CVD$

>[!oss]
>Se ho $r < n$ autovalori distinti associati ad una matrice $A \in M_{\mathbb{K}(n,n)}$ non so se riesco a costruire una base di autovettori di $A$ (e stabilire quindi se $A$) è diagonalizzabile. Con la prossima proposizione stabiliamo qual'è il numero di autovettori linearmente indipendenti che si puó associare ad una matrice $A \in M_{\mathbb{K}(n,n)}$


>[!proposizione] Proposizione 1
>Siano $\lambda_{1},\dots,\lambda_{r} \in \mathbb{K}$ autovalori distinti di $A \in M_{\mathbb{K}(n,n)}$. Siano $g_{1},\dots,g_{r}$ le corrispettiva molteplicità geometrice. Allora il massimo numero $N$ di autovettori linearmente indipendente è la somma delle molteplicità geometriche:
> $$ N = g_{1} + \dots + g_{r} $$
>
>>[!dim] idea di dimostrazione
>>Siano $V_{1},\dots,V_{r}$ autospazi associati a $\lambda_{1},\dots,\lambda_{r}$. Siano inoltre $\mathcal{B}_{1},\dots,\mathcal{B}_{r}$ basi di $V_{1},\dots,V_{R}$. Allora $\mathcal{B} = \mathcal{B}_{1} \cup \mathcal{B}_{2} \cup\ldots \cup \mathcal{B}_{r}$ è un insieme linearmente indipendente
>>$\CVD$

>[!oss]
>$A \in M_{\mathbb{K}(n,n)}$ è diagonalizzabile se e solo se le somme delle molteplicità geomeriche degli autovalori di $A$ è $n$

>[!proposizione] Proposizione 2
>Se $\lambda$ è autovalore di $A \in M_{\mathbb{K}(n,n)}$ di molteplicità geometrica $g$ e molteplicità algebrica $m$ allora
> $$ 1 \leq g \leq m $$


