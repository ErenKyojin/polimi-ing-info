# Serie
$$S_k = \sum_{n = 0}^ka_n\longleftarrow\text{somma di numero finito di addendi}$$ $$\sum_{n = 0}^\infty a_n$$
Che si legge "serie per $N$ da $0$ a $\infty$ di $a_n$". Per dare senso a questa somma costruiamo un'altra [[successione]] $\{s_n\}$ con i termini definiti:
$$\begin{align}
&s_0 = a_0 \\
&s_1 = a_0 + a_1 \\
&s_2 = a_0 + a_1 + a_2 \\
&........................ \\
&s_n = a_0 + a_1 + \ldots + a_n\\
&........................

\end{align}$$
Il numero $s_n$ viene detto somma parziale (o ridotta) $n$-esima della serie e la successione delle somme parziali della serie.
Possiamo riscrivere questi termini in un unica scrittura sintetica:
$$s_n = \sum_{k=0}^na_k\qquad\text{per }n = 0,1,2,...$$

>[!def] 
>diremo che la serie è convergente, divergente, irregolare se la successione $\{s_n\}$ delle sue somme parziali è convergente, divergente, irregolare rispettivamente. In particolare se $\{s_n\}$ è convergente $s_n \to s$ diremo che $s$ è somma della serie e scriveremo
>$$\sum_{n = 0}^\infty a_n = s$$ 
> In questo caso dunque vale la relazione
> $$\sum_{n = 0}^\infty a_n = \lim_{n\to+\infty}\sum_{k = 0}^n a_k = \lim_{n\to+\infty}s_n$$
L'ultima formula scritta spiega in che modo il concetto di serie traduce l'idea di somma di infiniti addendi, si calcola il [[limite]] per $n \to+\infty$ Della somma finita dei primi $n$ addendi.
>"studiare il carattere della serie" significa stabilire se la serie è convergente, divergente o irregolare.

>[!oss]
>Parlare di una serie numerica coinvolge sempre due diverse successioni, la successione $\{a_n\}$ dei termini della serie, e la successione $\{s_n\}$ delle sue sue somme parziali, ad esempio $\sum a_n$ è convergente se la successione $\{s_n\}$ è convergente, NON se lo è $\{a_n\}$

Esempi di serie in [[serie notevoli]]


>[!teorema]
>Condizione necessaria affinchè una serie $\sum_{n = 0}^\infty a_n$ sia convergente è che il termine generale $a_n$ tenda a $0$

Notiamo che la condizione non è sufficiente, basta pensare alla [[serie notevoli|serie armonica]], tuttavia se il termine generale non tende a zero sicuramente la serie non converge

>[!teorema]
>Supponiamo che
>$$\sum_{k=0}^\infty a_k$$ sia convergente, allora per ogni $n$ risulta convergente anche la serie per ogni $n$ (Che si dice resto della serie di partenza)
>$$R_n = \sum_{k=n}^\infty a_k; \text{inoltre }R_n\to0\text{ per } n \to\infty$$
>Ossia il resto di una serie convergente è infinitesimo

È importante studiare i vari [[criteri di convergenza]] che ci permettono di affermare attraverso condizioni sufficienti che una serie converga, vedremo solo poi come calcolarne la somma.

>[!oss]
>È utile ricordare la differenza tra stabilire il carattere della serie (ossia convergente, divergente, irregolare) e lo stabilire la somma della serie (se convergente).
>Ad esempio quando usiamo il [[criteri di convergenza|criterio di convergenza asintotico]] per affermare che $\sum a_n$ converge perchè $\sum b_n$ converge, non significa che le due serie abbiano la stessa somma.
>Intuitivamente sembrerebbe aver senso in quanto dire che $a_n \sim b_n$ afferma che gli addendi sono simili quando $n$ è grande, ma il valore di una serie dipende anche dai primi addendi, che possono essere diversi
>
>>[!esempio]
>>Consideriamo
>>$$\sum\frac{1}{n(n+1)}=1\text{ e sappiamo che }\frac{1}{n(n+1)}\sim\frac{1}{n^2}$$
>>Tuttavia si può dimostrare che
>>$$\sum \frac{1}{n^2}=\frac{\pi}{6}$$
>
>Tra l'altro questo ultimo esempio può anche farci osservare come, sommando "infiniti" numeri razionali, possiamo comunque ottenere un numero irrazionale come risultato, questo significa che se lavorassimo in $\mathbb Q$ questa serie non avrebbe risultato.
>
>>I criteri di convergenza per le serie a termini positivi si basano tutti sulla proprietà dell''estremo superiore, di cui gode $\mathbb R$
>
>Osserviamo infine che tutte le [[asintotico|stime asintotiche]] viste precedentemente per le funzioni e gli strumenti per svilupparle possono essere usate anche per le serie

Proviamo a studiare qualche serie attraverso tecniche sviluppate per le [[Funzioni]]
>[!esempio]
>$$\text{a)} \sum_{n=1}^\infty\left(\frac{e^{1/n}-1}{n}\right);\quad \text{b)} \sum_{n=1}^\infty(\frac{1}{n}-\sin \frac{1}{n}); \quad\text{c)}\sum_{n=1}^\infty\log\left(\frac{n+1}{n+2}\right)$$
>a) $\frac{e^{1/n}-1}{n}\sim \frac{1}{n^2}$ per il [[limiti notevoli|limite notevole]] $e^{\varepsilon(x)} - 1 \sim \varepsilon(x)$ , quindi la serie converge per il [[criterio del confronto|criterio del confronto asintotico]] rispetto a $1/n^2$ converge.
>
>b) Dallo [[formule di Taylor-MacLaurin|sviluppo di MacLaurin]] di $\sin x$ abbiamo ponendo $x = \frac{1}{n}$:
>$$\frac{1}{n}-\sin\frac{1}{n} = \frac{1}{n}-\left(\frac{1}{n}-\frac{1}{6n^3}+o\left(\frac{1}{n^3}\right)\right)\sim\frac{1}{6n^3}$$
>Quindi abbiamo una serie a termini positivi e tramite il confronto asintotico con $1/n^3$, converge.
>
>
>c) $\log(\frac{n+1}{n+1})\sim\frac{n+1}{n+2}-1 = \frac{-1}{n+2}$