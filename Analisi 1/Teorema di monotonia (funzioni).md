# Teorema di [[monotonia]] per funzioni
>[!teorema] #teorema di monotonia per funzioni
>Sia $f : (a,b) \to\mathbb R$ una funzione monotona. Allora per ogni $c \in (a,b)$ esistono finiti i limiti destro e sinistro, per $x \to c$; ai due estremi $a ,b$ esistono i limiti destro (in $a$) e sinistro (in $b$) eventualmente infiniti
>
>>[!dim]
>>Questo teorema non sarà dimostrato utilizzando il teorema di monotonia per le successioni ma una dimostrazione analga a quest'ultimo.
>>Supponiamo $f$ crescente in $(a,b)$. Sia $c \in (a,b)$
>>$$\Lambda = \sup\{f(x) : x \in (a,c)\}$$
>>Notiamo che $\Lambda$ esiste finito per la proprietà dell'estremo superiore, in quanto $f(c)$ è un maggiorante dell' insieme $\{f(x) : x \in (a,c)\}$. Proviamo che
>>$$\lim_{x\to c^-}f(x) = \Lambda$$
>>Consideriamo $x_n$ una qualsiasi successione in $(a,c)$ tale che $x_n\to c$ e proviamo che $f(x_n)\to\Lambda$ ossia che per ogni $\varepsilon > 0$ risulta definitivamente
>>$$\Lambda - \varepsilon < f(x_n) < \Lambda + \varepsilon$$
>>La seconda disuguaglianza è ovvia essendo $f(x_n) < \Lambda$; per la prima, invece, dobbiamo osservare che essendo $\Lalbda - \varepsilon$ minore di $\Lambda$, cioè del minimo maggiorante di $\{f(x) : x \in (a,c)\}$, non è un maggiorante ti tale insieme, quindi esiste $\hat x\in(a,c)$ tale che $f(\hat x) \geq \Lambda - \varepsilon$. Poichè $f$ è crescente, ne segue che
>>$$f(x) \geq \Lambda - \varepsilon \forall x \in (\hat x, c)$$
>>D'altro canto per ipotesi $x_n < c \forall n$ e $x_n \to c$ per $n \to \infty$, perciò $x_n \in (\hat x, c)$ definitivamente.
>>Ma allora
>>$$f(x_n) \geq \Lambda - \varepsilon \text{ definitivamente}$$ CVD
>>Analogamente possiamo dimostrare che esiste
>>$$\lim_{x\to c^+}f(x) = \inf\{f(x):x\in(c,b)\}$$
>>Per quanto riguarda i limiti ai due estremi dell'intervallo, se si vuole provare ad esempio che esiste
>>$$\lim_{x\to b^-}f(x)$$
>>Si definirà ancora
>>$$\Lambda = \sup\{f(x) : x \in (a,b)\}$$
>>In questo caso $\Lambda$ potrebbe essere $+\infty$ (non possiamo affermare che $f(b)$ sia maggiorante dell'insieme in quanto in b la funzione non è definita). Nel caso in cui $\Lambda < \infty$ si può ripetere la dimostrazione precedente, se invece $\Lambda = \infty$ il ragionamento si modifica come segue.
>>$$\sup{f(x) : x \in (a,b)} = +\infty$$
>>Segue che per ogni $K > 0$ esiste $\hat x \in (a,b)$ tale che $f(\hat x) > K$ per la monotonia di $f$ allora
>>$$f(x) > K \forall x \in (\hat x, b)$$
>>Allora presa una successione $x_n \to b$ si ha che $x_n \in (\hat x, b)$ definitivamente e quindi
>>$$f(x_n) > K \text{ Definitivamente}$$
>>Perciò
>>$$\lim_{x\to b^-}f(x_n) = +\infty$$
>>Una conseguenza del teorema di monotonia è che su una funzione è monotona in un intervallo $(a,b)$ i suoi eventuali [[punto di discontinuità|punti di discontinuità]] sono necessariamente a salto, esclusi gli estremi, dove ci possono essere [[Asintoti]] verticali
>
>




