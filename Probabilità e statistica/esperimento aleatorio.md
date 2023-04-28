>[!def]
>Un esperimento aleatorio è un esperimento non deterministico, ossia non possiamo essere certi a priori dei risultati. Ma è comunque possibile determinare tutti i possibili risultati, che sono detti [[caso elementare|casi elementari]]


>[!esempio] Esempio 1, tempo di esecuzione di un programma
> Vogliamo studiare il tempo di esecuzione di un programma, l'esperimento aleatorio in questo caso è l'avvio del programma e l'attesa che esso finisca, quali sono i possibili risultati?
> $\omega = t$ tempo di esecuzione del programma
> $\Omega = (0, +\infty)$ l'[[insieme]] dei tempi possibili di esecuzione
> 
> Se avessimo il caso `while(true)`?
> $\Omega = (0, +\infty) \cup \left\{ +\infty \right\}$ aggiungiamo il punto di aggregazione.
> $\Omega$ ha dimensione infinita con la potenza del continuo

>[!esempio] Esempio 2, schedina totocalcio
>Giochiamo la schedina totocalcio Sisal, con la formula  f13, dove per 13 partite in blocchi da 8 devi selezionare questi risultati: (1,x,2) dove:
>- 1 vince la squadra in casa
>- x in caso di pareggio
>- 2 vince la squadra in trasferta
>  
>Inoltre tra altre 10 partite in piú se ne possono scegliere 5 
>
>$\omega$ ha una struttura ordinata e piú complsessa:
> $\omega = o_{1},o_{2},\dots,o_{8},e_{1}^j,e_{2}^\mathbf{j},\dots,e_{5}^j$
> Dove $j$ indica il sottoinsieme delle 5 partite scelte rispetto alle 10
> $O_{i}=1,x,2 = 1 \cdot8$
> $e_{i}^j=1,x,2=1 \cdot 5$ 
> Quindi cos'è lo [[spazio campionario]]?
> 
>>[!oss]
>>$|\Omega| =$ finita, per calcolarlo iniziamo prima a farlo con un sottoinsieme $j$ fisso.
>>abbiamo tre risultati per tredici possibilità, quindi $3^{13}$, aggiungendo la possiblità di scegliere sottoinsieme abbiamo
>> $$ 3^{13} \begin{pmatrix}
>>10 \\
>>5
>>\end{pmatrix} $$


>[!esempio] Esempio 3, schedine
>È casuale il numero di schedine giocate per fare $13$ la prima volta
>$\omega = (V_{1}) \to 1$ caso in cui vinciamo subito
>$\omega = (P_{1},V_{1}) \to {2}$ 
>$\vdots$
>$\omega = (P_{1},P_{2},\dots,P_{n-1},V_{n}) \to n$
>$\vdots$ prosegue all'infinito, potrei non vincere mai
>
>$\Omega = (1,2,\dots,N,\dots) = \mathbb{N} \cup \left\{ +\infty \right\}$ Coincide con i numeri naturali e il punto di accumulazione


>[!esempio] Esempio 4, tempo di esecuzione di un programma e risultato (successo o fallimento)
>È un esperimento che è caratterizzato da due variabili, una discreta e una continua.
> Consideriamo le etichette:
>  - Successo: 1
>  - Fallimento: 0
>
>$\omega = (i,t), i = 0 \cup 1, t > 0$
>$\Omega = \left\{ (i,t), i = 0,1; t > 0 \right\}$
>
>
>```tikz
>\begin{document}
>\begin{tikzpicture}[scale = 2]
>\draw[->] (0,0) -- (0,2)node[left]{t};
>\draw[->] (0,0) -- (2,0)node[right]{i};
>\draw[red,thick](0,0) -- (0,1.5) node[right]{0};
>\draw[red,thick] (1,0) -- (1,1.5) node[right]{1};
>\draw[red,dashed] (1,0) -- (1,2);
>\draw[red,dashed] (0,0) -- (0,2);
>\end{tikzpicture}
>\end{document}
>```
>
>Obiettivo, calcolare la [[probabilità]] di un [[evento]]. 
>

