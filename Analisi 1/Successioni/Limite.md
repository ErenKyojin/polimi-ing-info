# Limiti di successioni


## Limite destro e sinistro
>[!DEF]
>- Limite destro
>$a_n \rightarrow L^+$ se $a_n \rightarrow L \Longrightarrow a_n \geq L$ definitivamente
> - Limite sinistro
> $a_n \rightarrow L^-$ se $a_n \rightarrow L \Longrightarrow a_n \leq L$ definitivamente

>[!Esempio]
>$\{a_n\} = \frac{1}{n} \rightarrow 0^+$, tende a $0$ da sopra
>
>Anche la serie: $1, 0, \frac{1}{2},0,\frac{1}{3},0... \longrightarrow 0^+$



## Teoremi
>[!Teorema] #Teorema di unicità del limite
 >{$a_n$} successione convergente $\Rightarrow$ il limite è unico
>
>>[!dim] Dimostrazione
> Ipotizziamo che la successione $a_n$ abbia due limiti
>> $$\begin{flalign}
> a_n \to L_1 \\
> a_n\to L_2
> \end{flalign}
> \qquad\forall \varepsilon > 0 \text{ definitivo } |a_n - L_1| < \varepsilon\ \land |a_n - L_2| < \varepsilon $$
> $$0 \leq |L_1 - L_2| = |L_1 - a_n + a_n  -L_2| \leq \underset{< \varepsilon}{|L_1 - a_n|} + \underset{<\varepsilon}{|a_n - l_2|}<2\varepsilon$$
> Essendo $2\varepsilon$ una qualsiasi quantità positiva, ed essendo la somma di due moduli $\geq 0$, l'unico numero minore di qualsiasi quantità positiva e $\geq 0$ è 0.
> $\Rightarrow L_1 = L_2$


>[!teorema] #Teorema di algebra dei limiti
>$a_n\rightarrow A, b_n\rightarrow B \qquad (A \land B \in \mathbb R)$
>- $(a_n+b_n) \rightarrow A + B \longrightarrow$ Il limite della somma (differenza) è la somma (differenza) dei limiti
>- $(a_n\cdot b_n) \longrightarrow A\cdot B$
>- $\frac{a_n}{b_n}\rightarrow \frac{A}{B} (B \neq 0)\qquad B\neq 0$
>- $a_n^{b_n}\rightarrow A^B \left(a_n>0, A \geq 0, A \leq 0 \Rightarrow B > 0\right)$
>
>>[!Dim] 
>$\forall \varepsilon > 0\qquad |a_n - A| < \varepsilon, |b_n - B| < \varepsilon$
>>$$\begin{flalign}
>&|(a_n+b_n) - (A + B)| = |(a_n - A) + (b_n - B)| \leq|a_n-A| + |b_n-B| < 2\varepsilon \\ \\
>&|a_nb_n-AB| = |a_nb_n - a_nB+a_nB - AB| = |a_n(b_n-B) + B(a_n-A)| \leq\\
>&\leq|a_n(b_n-B)+B(a_n-A)| = |a_n|\underbrace{|b_n-B|}_{<\varepsilon} + |B|\underbrace{|a_n-A|}_{<\varepsilon} < \varepsilon
>\end{flalign}$$
>$\Rightarrow |a_n - A| < \varepsilon\qquad A-\varepsilon < a_n < A < A\varepsilon$
>$|a_n|<|A|$ 

>[!oss]
>Non necessariamente una successione limitata appartenente a $\mathbb Q$ ha limite $\in \mathbb Q$, un esempio è la successione $\lbrace a_n \rbrace$
>$$
>\begin{flalign}
> a_0 &= 0\\ 
> a_1 &= 0.1\\
> a_2 &= 0.1011\\
> a_3 &= 0.10110111\\
> a_4 &= 0.1011011101111
>&...\\
>\lbrace a_n \rbrace &= 0.10110111011110111110111111...
>\end{flalign}$$
>Che chiaramente appartiene a $\mathbb R$ e non a $\mathbb Q$

# Limiti di funzioni

>consideriamo un intervallo $I$, un punto $c\in I$ ed una funzione $f$ definitiva in $I$ tranne al più in $c$.{}
>L'intervallo $I$ può essere:
> - limitato o illimitato
> - chiuso o aperto
> Il punto $c$ può essere:
> - interno all'intervallo $I$
> - uno dei suoi estremi (inclusi eventualmente $\pm\infty$)
>
>Prendiamo una qualsiasi successione di punti $x_n$, nell'intervallo $I$ e diversi da $c$, che tenda a $c$ per $n\to+\infty$
>Consideriamo poi la successione delle uscite $f\{x_n\}$
>Se, qualunque successione adatta si sia scelta si ha che $f\{x_n\}$ tende al limite $l$ si dice che il limite di $f(x)$ per $x$ che tende a $c$ è $l$ e si scrive
>$$\lim_{x\to c}f(x)= l\quad\text{ oppure }\quad f(x) \to l\text{ per } x \to c $$


Possiamo definirlo più sinteticamente:
>[!def] Definizione successionale di limite
>$$\lim_{x\to c}f(x) = l$$
>Con $c$ ed $l\in \mathbb R^*$
>Se per ogni successione $\{x_n\}$ di punti $\in I$ diversi da $c$, tale che $x_n\to c$ si ha che $f(x_n)\to c$ per $n\to\infty$

Una funzione che per $x\to c$ Tende a $0$ si dice [[infinito|infinitesimo]], analogamente una funzione che tende a $\pm\infty$ si dice [[infinito]]

>[!teorema] Teorema di unicità del limite
>se esiste $\lim_{x\to c}f(x) = l$, tale limite $l$ è unico
>D
>>[!dim]
>>Ipotizziamo di avere due limiti $l_1,l_2$ diversi tra loro, presa una qualsiasi successione $x_n\to c$ si avrebbe
>>$$f(x_n)\to l_1\quad\text{ e }\quad f(x_n)\to l_2$$, dunque la [[successione]] $f(x_n)$ avrebbe due limiti che è assurdo.

Osserviamo come la casistica dei limiti di funzioni sia più ricca, nelle successioni possiamo lavorare solo con limiti che tendono a $+\infty$, nelle funzioni invece un qualsiasi valore $c$ appartenente a $\mathbb R^*$

Quando scriviamo:
$$\lim_{x\to c}f(x) = l$$
Si parla di
$$\text{limite}\begin{cases}\text{finito}\\\text{infinito}\end{cases}\quad\text{ se}
\begin{cases}
l \in \mathbb R\\
l = +\infty,-\infty
\end{cases}$$
e parleremo di
$$\text{limite }\begin{cases}\text{al finito}\\\text{all'infinito}\end{cases}\quad\text{ se}\begin{cases}c \in\mathbb R\\c = +\infty,c=-\infty\end{cases}$$


### limite per eccesso o per difetto
Quando una funzione ha limite finito $l$, talvolta è possibile precisare se questo limite viene raggiunto per eccesso, indicato con $l^+$ o per difetto, indicato con $l^-$.
Il significato grafico di quest'espressione è uguale all'avvicinarsi dal grafico rispettivamente dall'alto o dal basso alla quota $l$.
La definizione rigorosa è:

>[!def]
>Se $l\in\mathbb R$ e $c\in\mathbb R^*$ si dice che
>	$$\lim_{x\to c}f(x) = l^+ \quad(\text{rispettivamente } l^-)$$
>	E in questo caso si dice che $f(x)$ end e a $l$ per eccesso (per difetto) per $x$ tendente a $c$, se per ogni successione $\{x_n\}$ di punti di $I$ diversi da $c$, tale che $x_n\to c$, si ha che $f(x_n)\to l^+$ (rispettivamente $l^-$) per $n\to\infty$.
>	Inoltre osserviamo come affermare che $f(x_n)\to l^+$ significa che $f(x_n)\to l$ e inoltre $f(x_n) \geq l$ definitivamente
>
>>[!esempio]
>>$$\lim_{x\to -\infty}e^x = 0$$

Notiamo che $0^+$ e $0^-$ NON indicano due numeri differenti, a loro volta diversi da zero, il limite è sempre zero, ma aggiunge informazioni sulla parte da cui stiamo approcciando il punto

Inoltre non tutti i limiti possono essere necessariamente descritti per eccesso o per difetto:
>[!esempio]
>$$\lim_{x\to\infty}\frac{\sin x}{x}$$
>Semplicemente $0$ 
>```desmos-graph
>
Y=\frac{\sin x}{x}
>```

### Limite destro e sinistro nelle funzioni
Una funzione si comporta diversamente a seconda che $x$ si avvicina a $c$ da destra o da sinistra, ad esempio consideriamo la funzione $\frac{1}{x}$ per $x\to 0$ tende a $+\infty$ o $-\infty$ a seconda che $x$ sia $>$ o $<$ di 0.
Per queste situazioni si definiscono il limite destro e sinistro.

>[!def]
>Se $c\in\mathbb R$ e $l \in \mathbb R^*$ si dice che
>$$\lim_{x\to c^+}f(x) = l\qquad (\text{rispettivamente, }\lim_{x\to c^-}f(x)=l)$$
>
>In tal caso si dice che il limite destro (sinistro) di $f(x)$ per $x$ tendente a $c$ è $l$, se per ogni successione $\{x_n\}$ di punti $I$ tali che $x_n\to c^+ (x_n \to c^-)$ per $n\to+\infty$ e $x_n\neq c\forall n$, si ha che $f(x_n)\to c$ per $n \to \infty$

Inoltre notiamo come in generale il $\lim_{x\to c} = l$ esiste se e solo se esistono e Sono uguali il limite destro e sinistro

# limite finito al finito
Il limite meno intuitivo, ad esempio infatti ragioniamo su
$$\lim_{x\to 0}\sin x$$ la risposta è la più intuitiva, ossia $0$, la ragione non è però che $\sin x = 0$, non dobbiamo calcolare il valore di $f$ nel punto del limite, ma, secondo la definizione di limite, ci è richiesto soddisfare che
$$\forall\ \text{successione } \{x_n\} \text{ tale che } x_n \neq 0 e x_n \to 0 \text{ per n } \to \infty, \text{ si abbia } \sin x \to 0 \text{ per } n \to \infty $$
Allora non dobbiamo calcolare $\sin 0$, possiamo ad esempio procedere partendo dalla disuguaglianza
$$|\sin x|\leq |x|, \text{ valida }\forall x\in \mathbb R$$
Per il teorema del confronto, se $x_n\to 0$, anche $\sin x_n\to 0$, e allora
$$\lim_{x\to0}\sin x =0$$
 Ora invece ragioniamo su:
 $$\begin{flalign}
 f(x) =
 \begin{cases}
 1 \text{ se } x\neq0\\
 0 \text{ se } x = 0
 \end{cases}
 \end{flalign}
 $$
A cosa è uguale in questo caso $\lim_{x\to0}f(x)$ ?
Si potrebbe pensare che la risposta sia $0$, essendo $f(0)=0$
Ma applicando la definizione di limite è immediato vedere che il limite vale $1$, se $x_n\to0$ per $n\to\infty$ ma $x_n \neq 0\forall n$, risulta che $f(x_n) = 1\forall n$, e risulta quindi $f(x_n)\to 1$, per $n\to\infty$, quindi, in questo caso:
$$\lim_{x\to 0}f(x) \neq f(0)$$
Questo ci porta sul discorso della [[continuità]]

### non esistenza del limite
Il limite di una funzione può anche non esistere

>[!esempio]
>$$\lim_{x\to+\infty}\sin x\qquad\text{non esiste}$$
>Per dimostrarlo, ci basta, sempre rifacendosi alla definizione successionale del limite, trovare due successioni divergenti  a $+\infty\{x_n\},\{y_n\}$ tali che $\sin x_n \neq \sin y_n$ 
>Ad esempio
>
>$$x_n = n\pi\qquad y_n = \frac{\pi}{2} + 2n\pi$$
>E abbiamo quindi $\sin x_n = 0$ e $\sin y_n = 1$

Possiamo quindi introdurre una nuova definizione di limite, ma prima dobbiamo approfondire il concetto di [[intorno]] e di [[definitivamente]]

>[!def] Definizione topologica di limite
>Sia $c\in \mathbb R^*$ e sia $f$ una funzione definita almeno definitivamente per $x\to c$ si dice che
>$$\lim_{x\to c}f(x) = l\qquad(\text{ con l }\in \mathbb R^*)$$
>se per ogni intorno $U_l$ di $l$ esiste un intorno $V_c$ take che:
>$$\forall x\in V_c, x\neq c\quad \text{si ha}\quad f(x)\in U_l$$

Questa definizione di limite di funzione non utilizza il concetto di limite di successione, il concetto base di questa definizione è il concetto di [[intorno]], che è un concetto base della topologia.

Possiamo riesplicitarla nelle seguenti 4 definizioni:
Si dice che
$$\lim_{x\to c}f(x) = l$$
se:
1. (Limite finito al finito: $c,l\in\mathbb R)$ $$\forall\varepsilon > 0 \exists\ \delta > 0 : \forall x \neq c, |x-c|<\delta \Longrightarrow|f(x)-l|<\varepsilon$$
2. (Limite infinito al finito: $c\in \mathbb R, l = +\infty$) $$\forall K > 0\ \exists \delta> 0 : \forall x \neq c,|x-c|<\delta\Longrightarrow f(x) > K$$
3. (Limite finito all'infinito: $c \in\mathbb R, l = +\infty$) $$\forall\varepsilon>0\ \exists K > 0 : \forall x > K \Longrightarrow |f(x) - l| < \varepsilon$$
4. (Limite infinito all'infinito: $c=+\infty, l=+\infty$)$$\forall K > 0\ \exists H > 0: \forall x > H \Longrightarrow f(x) > K$$

# [[calcolo dei limiti]]
# [[limiti notevoli]]

