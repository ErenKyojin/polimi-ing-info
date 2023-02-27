# Teorema di weierstrass
Importante proprietà delle funzioni [[continuità|continue]] su un intervallo

>[!teorema] Teorema di weierstrass
>Sia $f : [a,b] \to \mathbb R$ una funzione continua. Allora $f$ assume massimo e minimo in $[a,b]$, ossia esistono $x_m, x_M \in [a,b]$ tali che $f(x_m) \leq f(x) \leq f(x_M)$ per ogni $x\in[a,b]$
>Si dice che $x_m$ è punto di minimo per $f$ e $m= f(x_m)$ è il minimo di $f$; analogamente si dice che $x_M$ è punto di massimo per $f$ e $m = f(x_M)$ è il massimo di $f$
>
>>[!dim]
>>Proviamo solo che il massimo è in $[a,b]$, la dimostrazione per il minimo è analoga.
>>Iniziamo quindi con un osservazione sul concetto di estremo superiore:
>>$E_1, E_2$ due sottoinsiemi non vuoti di $\mathbb R$
>>$$\sup(E_1 \cup E_2) = \max(\sup E_1, \sup E_2)$$
>>Questa proprietà è vera per insiemi sia limitati che illimitati, in queso caso si pone $\sup E_n = +\infty$.
>>Consideriamo ora
>>$$f : I \to \mathbb R \text{ con } I = I_1 \cup I_2$$
>>Con $I, I_1, I_2$ intervalli. Utilizzando l'osservazione fatta in precedenza agli insiemi $E_i = \left\lbrace f(x) : x \in I_i \right\rbrace$
>>$$\underset{I}{\sup} f = \max\left(\underset{I_1}{\sup} f, \underset{I_2}{\sup} f\right)$$
>>Quindi almeno una delle due relazione seguenti è vera.
>>$$\underset{I}{\sup} f = \underset{I_1}{\sup} f;\quad \underset{I}{\sup} f = \underset{I_2}{\sup} $$
>>
>>Dopo tutte queste premesse, possiamo finalmente dimostrare il teorema, con un approccio iterativo simile a quello del [[Teorema degli zeri]]
>>Consideriamo la funzione $f:[a,b]\to\mathbb R$ e poniamo
>>$$\Lambda = \underset{[a,b]}{\sup}f$$
>>Con $\Lambda$ eventualmente uguale a $+\infty$
>>Dividiamo in due intervalli uguali $[a,b]$, per uno di essi, che noi scegliamo essere $[a_1,b_1]$, sarà vero che
>>$$\Lambda = \underset{[a_1,b_1]}{\sup} f$$
>>Suddividiamo $[a_1,b_1]$ in due intervalli uguali, per uno di essi, che noi scegliamo essere $[a_2,b_2]$, sarà vero che
>>$$\Lambda = \underset{[a_2,b_2]}{\sup}f$$
>>Così facendo possiamo costruire una successione di intervalli $[a_n,b_n]$, ciascuno contenuto nei precedenti con le seguenti proprietà:
>>1. $a_n$ monotona crescente e limitata; $b_n$ monotona decrescente e lmitata
>>2. $b_n - a_n = \frac{b-a}{2^n} \to 0$
>>3. $\Lambda = \underset{[a_n,b_n]}{\sup}f$
>>
>> Dai punti 1, 2 e per il teorema di monotonia segue che le successione $a_n$ e $b_n$ convergono ad uno stesso limite $x_0 \in [a,b]$
>> Consideriamo ora due casi differenti, se $\Lambda < +\infty$, per ogni $n$ esiste un punto $t_n\in [a_n, b_n]$ tale che
>> $$\Lambda - \frac{1}{n} < f(t_n) \leq \Lambda \tag{TW1}$$
>> Infatti, poiché $\Lambda - \frac{1}{n}$ è minore di $\Lambda$ che è il minimo dei maggioranti dei valore di $f(x)$ in $[a_n,b_n]$,$\Lambda - \frac{1}{n}$ non è un maggiorantem quindi esiste $t_n\in[a_n,b_n]$ con la prorietà $(\text{TW1})$.
>> Poichè $t_n \in [a_n,b_n], a_n \to x_0$ e $b_n \to x_0$, per il teorema del confronto anche $t_n \to x_0$, quindi dalla $(\text{TW1})$:
>> $$\lim_{n\to+\infty}f(t_n) = \Lambda$$
>> Inoltre essendo $f$ continua e $t_n \to x_0$, si ha che il $\lim_{n\to+\infty}f(t_n) = f(x_0)$, quindi $f(x_0) = \Lambda$. Allora poichè $\Lambda$ è il $\sup$ dei valori di $f$ in $[a,b],\Lambda$ è il massimo di $f$ in $[a,b]$ ed è assunto nel punto $x_0$, CVD.
>> 
>> Supponiamo adesso che $\Lambda = +\infty$, allora per ogni $n$ esiste un punto $t_n \in [a_n,b_n]$ tale che
>> $$f(t_n) \geq n\tag{TW2}$$
>> Ragionando come in precedenza si prova che $t_n \to x_0$ per un certo $x_0 \in [a,b]$. Poichè $f$ è continua in $x_0$
>> $$\lim_{n\to+\infty}f(t_n) = f(x_0)$$
>> Ma per la $(\text{TW2}) \lim_{n\to+\infty}f(t_n) = +\infty$, assurdo perchè in $x_0$ la funzione deve avere un valore finito

>[!esempio]
>$f(x) = x$ in $(0,1)$
>La funzione è continua su un intervallo limitato, ma non chiuso. La funzione non ha ne massimo ne minimo, non essendo il uso estremo superiore ed il suo estremo inferiore assunti

>[!esempio]
>$f(x) = x$ in $\mathbb R$, la funzione è continua su un intervallo non lmitato, la funzione non ha ne massimo ne minimo




