Data una [[matrice]] $A \in M_{\mathbb{K}(n,n)}$ è detta inversa della matrice $A$ una matrice $A'$ tale che
$$ A A' = \mathbb{1}_{n}$$



### Condizioni necessarie e sufficienti per l'invertibilità di una matrice
Vogliamo determinare le condizioni necessarie e sufficienti su $A$ afinchè esiste $B \in M_{\mathbb{K}(n,n)}$  t.c.
$$ A \cdot B = B \cdot A = \mathbb{1}_{n} $$
con $\mathbb{1}_{n}$ [[matrice identità]] di ordine $n$


Per farlo abbiamo determinare alcune cose:

>[!def]
>Data $A \in M_{\mathbb{K}(n,n)}$ è invertibile a destra se esiste $B \in M_{\mathbb{K}(n,n)}$ t.c. $A \cdot B = \mathbb{1}_{n}$
>
>Diciamo invece che è invertibile a sinistra se esiste $C \in M_{\mathbb{K}(n,n)}$ t.c. $CA = \mathbb{1}_{n}$.
>
> Se $A \in M_{\mathbb{K}(n,n)}$ diciamo che è invertibile se $\exists B \in M_{\mathbb{K}(n,n)}$ t.c.: $B \cdot A = A \cdot B = \mathbb{1}_{n}$
>
>A è invertibile se ammette una matrice inversa


>[!proposizione]
 >1. $B$ e $C$ sono rispettivamente inversa destra e sinistra di $A$ allora $B = C$
>
> 2. Se $A$ è invertibile allora $A$ ammette un'unica matrice inversa che si denota con $A^{-1}$
>
>>[!dim]
>> 1. $B = B \cdot \mathbb{1}_{n} = B \cdot (A \cdot C) = (B \cdot A) \cdot C = \mathbb{1}_{n} \cdot C = C$ 
>> 2. Se $A'$ e $A''$ sono inverse di $A$ allora in particolare è vero che $A'$ è inversa sinistra e $A''$ è inversa destra quindi per il punto $(1) A' = A''$



>[!teorema]
>Sia $A \in M_{\mathbb{K}(n,n)}$ allora è equivalente affermare che
>1. $Ker(A) = {\mathbf{0}}$
>2. $r(A) = n$
>3. $A$ invertibile
>4. $A$ ha inversa sinistra
>5. $A$ ha inversa destra
>
>>[!dim]
>>Mostriamo che 4 $\implies$ 1 $\implies$ 2 $\implies$ 3 $\implies$ 4 $\iff$ 5
>>
>> ### 4 $\implies$ 1
>> $A$ ha un inversa sinistra allora $\exists A' : A' \cdot A = \mathbb{1}_{n}$. Se consideriamo il sistema lineare $A \cdot \mathbf{x} = \mathbf{0}$ allora si ha:
>> $$  A' (A \cdot \mathbf{x}) = A' \cdot \mathbf{0} = \mathbf{0} \implies \underbrace{ (A'\cdot A) }_{ \mathbb{1}_{n} }\mathbf{x} = \mathbf{0} \implies Ker(A) = {\mathbf{0}}$$
>>
>>### 1 $\implies$ 2
>> Se $Ker(A) = {\mathbf{0}} \implies$ il sistema lineare $A \cdot \mathbf{x} = \mathbf{0}$ amette un unica soluzione. Quindi per il [[teorema di Rouchè Capelli]] $r(A) = n$
>>
>> ### 2 $\implies$ 3
>> Siano $\mathbf{e}_{i} = \begin{bmatrix} 0 \\ \vdots \\ 0 \\ 1 \\0\\ \vdots \\ 0\end{bmatrix}$ con $1$ nella $i$-esima riga per $i = 1,\dots,n$ per il [[teorema di Rouchè Capelli]] se $r(A) = n$ allora il sistema lineare $A \cdot \mathbf{x} = \mathbf{e}_{i}$ ammette un unica soluzione $\mathbf{c}_{i} \in \mathbb{K}^n : A \cdot \mathbf{c}_{i}=\mathbf{e}_{i} \forall i = 1,\dots,n$.
>> 
>> Posto $C = [\mathbf{c_{1}}|\dots| \mathbf{c}_{n}]$ 
>> allora $A \cdot C = [A \cdot \mathbf{c}_{1}| \dots | A \cdot \mathbf{c}_{n}] = [\mathbf{e}_{1}|\dots|\mathbf{e}_{n}] = \mathbb{1}_{n}$ 
>> 
>> $\implies C$ è inversa destra di $A$. Essendo C invertibile a sinistra allora, per quanto già visto, esiste un'inversa destra di $C$ che chiamiamo $A'$. Allora $C \cdot A' = \mathbb{1}_{n} \implies A' = A \implies A$ è invertibile
>> ### 3 $\implies$ 4
>> Ovvia per definizione
>>
>>### 4 $\implies$ 5
>>visto precedentemente
>>### 5 $\implies$ 4
>>Sia $A'$ l'inversa destra di $A$ allora per definizione $A \cdot A' = \mathbb{1}_{n} \implies A'$ ammette un'inversa sinistra $\implies A'$  ammette un'inversa destra $A'': A' \cdot A'' = \mathbb{1}_{n} \implies A = A''$ quindi $A \cdot A' = A' \cdot A = \mathbb{1}_{n}$ quindi $A$ è invertibile


>[!proposizione]
>Date $A,B \in M_{\mathbb{K}(n,n)}$ allora $A \cdot B$ è invertibile se e solo se $A$ è invertibile e $B$ è invertibile. In tal caso $(A \cdot B)^{-1} = B^{-1}\cdot A^{-1}$
>
>>[!dim]
>>Se $A$ e $B$ sono invertibili
>>$$(B^{-1} \cdot A^{-1}) \cdot A \cdot B = B^{-1}(\underbrace{ A\cdot A^{-1} }_{ \mathbb{1}_{n} })\cdot B = B^{-1}\cdot B = \mathbb{1}_{n}$$
>Quindi $AB$ è invertibile a sinistra, per il teorema precedente $AB$ è invertibile con inversa $B^{-1}A^{-1}$
>Essendo $AB$ invertibile allora $(AB)^{-1}A$ è l'inversa sinistra di $B$:
>Infatti" $((AB)^{-1}A)B = (AB)^{-1}AB = \mathbb{1}_{n}$, per il teorema precedente $B$ è invertibile e $B(AB)^{-1}$ è inversa destra di $A$ ($A(B(AB)^{-1})=AB(AB)^{-1} = \mathbb{1}_{n}$) 
>Quindi per il teorema precedente $A$ è invertibile


>[!oss] oss (inversa della [[Trasposizione|trasposta]])
> $$ (A^{-1})^{T} = (A^T){-1} \text{  infatti  } (A^{-1})^{T} \cdot A^{T} = (A \cdot A^{-1})^{T} = \mathbb{1}_{n} $$

## determinare l'inversa
Vogliamo trovare un algoritmo per determinare l'inversa di una matrice quadrata $A \in M_{\mathbb{K}(n,n)}$ di rango $n$ .
Nella dimostrazione del primio teorema della [[Matrice inversa]] abbiamo visto che è sufficiente risolvere $n$ sistemi lineari del tipo $A \mathbf{x} = \mathbf{e}_{i}$ con $\mathbf{e_{i}}=[0\quad \dots\quad 0\quad \underbrace{ 1 }_{ i\text{-esima} } \quad 0\quad\dots \quad 0 ]^T$.
Per farlo sfruttiamo l'[[Algoritmo di Gauss-Jordan]]
Per risolvere gli $n$-sistemi lineari: $A\mathbf{x} = \mathbf{e}_{i}\quad \forall i = 1, \dots, n$, contemporaneamente è sufficiente scrivere la matrice $[A| \mathbf{e}_{1}\ \mathbf{e}_{2}\ \dots\ \mathbf{e}_{n}] = [A|\mathbb{1}_{n}]$
Attraverso l'algoritmo di Gauss-Jordan otteniamo la matrice $[\mathbb{1}_{n}|C]$, le cui colonne di $C = [\mathbf{c_{1}}\quad\dots\quad \mathbf{c}_{n}]$ sono soluzioni di $A \cdot \mathbf{x} = \mathbf{e}_{i} : A \mathbf{c}_{i} = \mathbf{e}_{i}$, quindi $C$ è l'inversa di $A$ infatti: $AC = [A \mathbf{c_{1}}| A \mathbf{c_{2}}|\dots|A\mathbf{c_{n}}]=[\mathbf{e}_{1}|\mathbf{e}_{2}|\dots|\mathbf{e}_{n}] = \mathbb{1}_{n}$

