>[!def]
>$A \in M_{\mathbb{K}}(n,n)$ è diagonalizzabile su $\mathbb{K}$ se esiste $S \in M_{\mathbb{K}(n,n)}$ [[Matrice inversa|invertibile]] tale che $S^{-1}AS = \diag(\lambda_{1},\dots,\lambda_{n})$ dove $\lambda_{1},\dots,\lambda_{n} \in \mathbb{K}$


>[!proposizione] Proposizione 1
>$A \in M_{\mathbb{K}(n,n)}$ è diagonalizzabile su $\mathbb{K}$ se e solo se esiste una [[base]] $\mathcal{B} = \left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{n} \right\}$ di $\mathbb{K}^n$ formata da [[Autovalori e Autovettori|autovettori]] di $A$
>
>>[!dim]
>>Se $A$ è diagonalizzabile allora esiste $S \in M_{\mathbb{K}(n,n)}$ invertibile tale che $D = S^{-1}AS \implies SD = AS$. I vettori colonna di $S = [\mathbf{b}_{1}|\dots|\mathbf{b}_{n}]$ formano una base di $\mathbb{K}^n$ ed inoltre 
>> $SD = [\lambda_{1}\mathbf{b}_{1} | \dots | \lambda_{n}\mathbf{b}_{n}]$ mentre $AS = [A\mathbf{b}_{1} | \dots | A\mathbf{b}_{n}]$. Quindi $A\mathbf{b}_{i} = \lambda_{i}\mathbf{b}_{i}\quad \forall i = 1,\dots,n$. In conclusione $\mathcal{B} = \left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{n} \right\}$ è base di $\mathbb{K}^n$ formata da autovettori di $A$. Viceversa, se $\mathcal{B} = \left\{ \mathbf{b}_{1},\dots,\mathbf{b}_{n} \right\}$ è una base di $\mathbb{K}^n$ formata da autovettori di $A$ allora posto:
>>  $$ S = \left[ \mathbf{b}_{1},\dots,\mathbf{b}_{n} \right]  $$
>>  Si ha che $S$ è invertibile inoltre $A\mathbf{b}_{i} = \lambda_{i}\mathbf{b}_{i}$ quindi $AS = [\lambda_{1}\mathbf{b}_{1}|\dots|\lambda_{n}\mathbf{b}_{n}] = SD$ dove $D = \diag(\lambda_{1},\dots,\lambda_{n})$. In conlusione si ha $S^{-1}AS=D$ e $A$ è diagonalizzabile
>>  $\CVD$

>[!oss]
>1. 0 è autovalore di $A \in M_{\mathbb{K}(n,n)}$ se e solo se $\ker(A) = \ker(A - 0\mathbb{1}_{n}) \neq \left\{ \mathbf{0} \right\}$
>2. Se $A \in M_{\mathbb{R}(n,n)}$ è diagonalizzabile su $\mathbb{R}$ allora $A$ è diagonalizzabile su $\mathbb{C}$. Il viceversa non è vero. Se $A$ è diagonalizzabile in $\mathbb{C}$ allora $\exists S \in M_{\mathbb{C}(n,n)}$ e $\lambda_{1},\dots,\lambda_{n} \in \mathbb{C}$ tale che $S^{-1}AS = \diag(\lambda_{1},\dots,\lambda_{n})$. In questo caso $A$ non è detto che sia diagonalizzabile in $\mathbb{R}$. Ad esempio: $$A = \begin{bmatrix}
>	0 & 1 \\
>	-1 & 0
>\end{bmatrix}, p_{A} (\lambda) = \lambda^2 + 1$$
>e gli autovalori di $A$ sono dati: $\lambda^2 + 1 = 0 \iff \lambda = \pm\sqrt{ -1 }= \pm i$. Vedremo che $A$ è diagonalizzabile in $\mathbb{C}$ ma, non essendoci autovalri reali, non è diagonalizzabile in $\mathbb{R}$
>
>3. Se $D = \diag(d_{1},\dots,d_{n})$ è diagonale allora $D$ è diagonalizzabile. Consideriamo $S = \mathbb{1}_{n}$ allora $D = S^{-1}DS$
>4. Nell'esempio in cui $A = \begin{bmatrix}2 & 1 \\1 & 2\end{bmatrix}$, $A$ è diagonalizzabile, infatti $$ \mathcal{B} = \left\{ \begin{bmatrix}
>1 \\ 1
>\end{bmatrix}, \begin{bmatrix}1 \\ -1\end{bmatrix} \right\}  $$
>è una base di autovettori.
>Osserviamo che posto:
> $$ S = \begin{bmatrix}
>1 & 1 \\
>1 & -1
>\end{bmatrix} \text{ e } S^{-1} = \begin{bmatrix}
>1 / 2 & 1 / 2 \\
>1 / 2 & -1 / 2
>\end{bmatrix}$$
> si ha he
>  $$ S^{-1}AS = \begin{bmatrix}
>1 / {2} & 1 / 2 \\
>1 / 2 & -1 / 2
>\end{bmatrix} \begin{bmatrix}
>2 & 1 \\
>1 & 2
>\end{bmatrix} \begin{bmatrix}
>1 & 1 \\
>1  & -1
>\end{bmatrix} = \begin{bmatrix}
> 1/2 & 1 / 2 \\
> 1 / 2 & -1 / 2
>\end{bmatrix} \begin{bmatrix}
>3 & 1 \\
>3 & -1
>\end{bmatrix} = \begin{bmatrix}
>3 & 0 \\
>0 & 1
>\end{bmatrix}$$
>
>5. Se $T$ è triangolare superiore o ingeriore, gli autovalori di $T$ si trovano nella diagonale principale
>   $$ T = \begin{bmatrix}
>t_{11} & * & * & * \\
>0 & \underset{ 0 }{ t_{22} } & * & * \\
>\vdots & \vdots & \ddots & \vdots \\
>0 & 0 & \dots0 & t_{nn}
>\end{bmatrix} \implies \det(T - \lambda \mathbb{1}_{n}) = \begin{vmatrix}
>t_{11} - \lambda & * & \dots  & * \\
>0 & t_{22} - \lambda & \dots & * \\
>\vdots & \vdots & \ddots & \vdots \\
>0 & 0 & \dots &t_{nn}-\lambda
>\end{vmatrix}$$
> $$ = (t_{11} - \lambda)(t_{22}-\lambda) \dots (t_{nn}-\lambda) \implies \lambda_{1} =t_{11},\dots,\lambda_{n}=t_{nn}$$
>
>6. Data $A \in M_{\mathbb{K}(n,n)}$ allora il polinomio caratteristico di $A$ ha la seguente forma:
>$$ p_{A}(\lambda) = (-1)^n\lambda^n + c_{1} \lambda^{n-1} + \dots + c_{n-1}\lambda + c_{n} $$
>Ove $c_{1} = (-1)^{n-1}Tr(A) = (-1)^{n-1}(a_{11} + a_{22} + \dots + a_{nn})$ e $c_{n} = p_{A}(0)=\det (A - 0\mathbb{1}_{n}) = \det(A)$. In particolare se $A \in M_{\mathbb{K}}(2,2)$ allora $p_{A}(\lambda) = \lambda^2 - tr(A)\lambda + \det(A)$. 
>Invece se $A \in M_{\mathbb{K}(3,3)}$ allora $p_{A}(\lambda) = -\lambda^3 + tr(A)\lambda^2 + c_{2}\lambda+\det(A)$
>
>7. Proprietà delle radici di un polinomio qualsiasi dato $p(\lambda) = c_{n}\lambda^n + \dots + c_{1}\lambda + c_{0} \in \mathbb{K}[\lambda]_{\leq n}$ con $c_{n} \neq 0$ allora:
> 	
> 	1. $\lambda_{0} \in \mathbb{K}$ è radice di $p(\lambda)$ se $p(\lambda_{0}) = 0$
> 	2. Se $\lambda_{0}$ è radice di $p(\lambda)$ per il teorema di ruffini esiste $q(\lambda)$ di grado $n-1$ tale che $p(\lambda) = (\lambda - \lambda_{0})q(\lambda)$
> 	3. Se $\lambda_{0}$ è radice di $p(\lambda)$ esiste un intero $m$ e un polinomio $q(\lambda)$ di grado $n-m$ tale che:
> 	   $$ p(\lambda) = (\lambda-\lambda_{0})^mq(\lambda) \text{ e } q(\lambda_{0}) \neq0 $$
> 	   $m$ è la **[[molteplicità]] algebrica** di $\lambda_{0}$. Se $m = 1, \lambda_{0}$ si dice radice semplice di $p(\lambda)$. Diremo che un autovalore ha molteplicità algebrica $m$ se $m$ è la molteplicità algebrica dell'autovalore in quanto radice del polinomio caratteristico
> 	 4. **Teorema fondamentale dell'algebra**: un polinomio a coefficienti complessi di grado $n$ ammette $n$ radicicomplesse contate con la loro molteplicità


>[!teorema] Condizione necessaria e sufficiente per la diagonalizzabilità
>Sia $A \in M_{\mathbb{K}(n,n)}$ allora $A$ è diagonalizzabile su $\mathbb{K}$ se e solo se
>1. Il polinomio caratteristico di $A$ ha $n$ radici su $\mathbb{K}$ (contate con le loro [[molteplicità]] algebriche)
>2. Ogni autovalore di $A$ è regolare
>
>>[!dim]
>> Siano $\lambda_{1},\dots,\lambda_{r}$ autovalori distinti di $A$. Allora $A$ è diagonalizzabile $\iff A$ ammette una base di autovettori $\iff N = m_{g}(\lambda_{1}) + \ldots + m_{g}(\lambda_{r}) = n$ allora:
>>  $$ \begin{align}
>> &n = m_{g}(\lambda_{1}) + \dots + m_{g}(\lambda_{r}) \leq m_{a} (\lambda_{1}) + \dots + m_{a}(\lambda_{r}) \leq n  \\
>> \implies &\begin{cases}
>> m_{a}(\lambda_{1}) + \dots + m_{a}(\lambda_{r}) = n \\
>> m_{a}(\lambda_{i}) = m_{g}(\lambda_{i}) \forall i = 1,\dots,n
>>\end{cases}
>>\end{align}$$
>>Viceversa se $m_{a}(\lambda_{1}) + \dots + m_{a}(\lambda_{r}) = n$ e $m_{a}(\lambda_{i})=m_{g}(\lambda_{i}) \forall i = 1,\dots,r$ allota $N=m_{g}(\lambda_{1}) + \dots + m_{g}(\lambda_{r}) = n$
>>$\CVD$

>[!esempio]
>1. Verificare se $A = \begin{bmatrix}3 & 1\\0 & 3\end{bmatrix}$ è diagonalizzabile, calcoliamo il polinomio caratteristico $p_{\lambda}=\det(A - \lambda \mathbb{1}_{2})=(3-\lambda)^2$, quindi $\lambda=3$ è autovalore con molteplicità geometrica $2$. Quindi la prima proprietà del precedente teorema è soddisfatta. Tuttavia $3$ non è autovalore regolare, infatti:
>  $m_{g}(3) = \dim(V_{3}) = \dim(\ker(A - 3\mathbb{1})) = \dim \left( \ker \left( \begin{bmatrix}0 &1\\0&0\end{bmatrix} \right) \right) = 2 - 1 = 1 \neq m_{a}(3) = 2$ quindi non esiste una base di $\mathbb{R}^2$ di autovettori di $A$. Possiamo calcolare esplicitamente l'autospazio di $3$.
>  $$ V_{3} = \ker(A - 3\mathbb{1}_{n}) = \ker \left( \begin{bmatrix}0 &1 \\1&0\end{bmatrix} \right) = \Span \left( \begin{bmatrix}1\\0\end{bmatrix} \right)  $$


>[!oss]
>Calcolare la potenza $n$-esima di una matrice $A \in M_{\mathbb{K}}(n,n)$ puó essere un processo tedioso e complesso. Se $A$ è diagonalizzabile peró i conti si possono rendere molto piú semplici. Se $A$ è diagonalizzabile esiste $S \in M_{\mathbb{K}(n,n)}$ invertibile tale che:
> $$ D = S^{-1}AS \implies A = SDS^{-1} \implies A^n = (SD\cancel{ S }^{-1})(\cancel{ S }D\cancel{ S }^{-1})\dots(\cancel{ S }DS^{-1}) = SD^nS^{-1} $$

>[!esempio]
>Posto $A = \begin{bmatrix}2 & 1 \\1 & 2\end{bmatrix}$ una base di autovettori di $A$ è $\mathcal{B}=\left\{ \begin{bmatrix}1\\-1\end{bmatrix}, \begin{bmatrix}1 \\1\end{bmatrix} \right\}$. Posto $S = \begin{bmatrix}1 & 1\\-1 & 1\end{bmatrix}$ si ha che $D = \begin{bmatrix}1 & 0 \\0 & 3\end{bmatrix} = S^{-1}AS$ con $S^{-1} = \begin{bmatrix}1/ 2 & -1/ 2 \\1/ 2 & 1 / 2\end{bmatrix}$. Dunque
> $$ \begin{align}
>A^n = SD^nS^{-1} &= \begin{bmatrix}
>1 & 1 \\
>-1 & 1
>\end{bmatrix} \begin{bmatrix}
>1^n  & 0 \\
>0 & 3^n
>\end{bmatrix} \begin{bmatrix}
>1 / 2  & -1 /2 \\
>1 / 2  & 1 / 2
>\end{bmatrix}  \\
> &=\begin{bmatrix}
>1 & 1 \\
>-1 & 1
>\end{bmatrix} \begin{bmatrix}
>1 / 2 & -1 / 2 \\
>3^n /2 & 3^n /2
>\end{bmatrix} = \begin{bmatrix}
>(1 + 3^n) / 2 & (3^n - 1) / 2 \\
>(3^n - 1) / 2 & (1 + 3^n) / 2
>\end{bmatrix}
>\end{align} $$


