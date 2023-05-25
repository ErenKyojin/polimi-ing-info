# Circuito RC del primo ordine non degenere

>#### Circuito con [[bipolo]] $N_R$ collegato ad un [[condensatore]]densatore
>![[Pasted image 20220512164738.png]]

$N_r$ [[bipolo]] costituito da multi terminali lineari, adinamici, tempo invarianti e da generatori dipendenti di [[tensione]] e/o [[corrente]].
Allora supponiamo di poter descrivere $N_R$ con un circuito equivalente di Norton con $A_{eq}(t)$ ed $R_{eq}$ rispettivamente il generatore indipende di corrente e il [[resistore]] lineare.
>#### Circuito equivalente di northon
>![[Pasted image 20220512172138.png]]

==osservazione==: il [[condensatore]] ammette solo [[base corrente]], quindi siamo costretti ad usare il cirquito equivalente di norton piuttosto che quello di Thevenin.

Dalla KCL al nodo A abbiamo che
$$A_{eq}(t) + \frac{v_C(t)}{R_{eq}} + i_C(t) = A_{eq}(t) + \frac{v_C(t)}{R_{eq}} + C\frac{d}{dt}v_C(t) = 0 $$

==> la riscriviamo come
$$\frac{d}{dt}v_C(t)=-\frac{1}{R_{eq}C}v_C(t)-\frac{A_{eq}(t)}{C}=\lambda\\v_c(t)+u(t)$$
Questa equazione, che coinvolge la variabile di stato del condensatore $v_C(t)$, ed è quindi definita come <u>[[equazione di stato]]</u>, un'[[equazione differenziale]] ordinaria e lineare, la cui soluzione è quindi la famiglia di [[funzioni]]
$$v_C(t;k,t_0)=ke^\left(-\frac{t-t_0}{R_{eq}C}\right)+E_q$$
con $E_q$ l'integrale particolare.

### $\lambda$ - frequenza libera o pulsazione naturale della rete
$$\lambda = -\frac{1}{R_{eq}C}$$
$[\lambda] = \frac{1}{S}$ e allora definiamo ==> $\tau = |\frac{1}{\lambda}| = R_{eq}C$ come <u>costante di tempo</u>. Per calcolare $\lambda$ è sufficiente passivare i generatori indipendenti di $N_R$, e trasformandone il modello di norton alla sola resistenza equivalente.

==osservazione==: per $\lambda$ negativa la soluzione dell'equazione di stato tende all'integrale particolare con $t \rightarrow \infty$ ossia quando arriviamo al regime stazionario e quindi le derivate sono uguali a $0$.
$\Rightarrow v_C(t) = E_{eq}$

E quindi se abbiamo ingressi costanti ricavare la variabile di stato sostituendo il condensatore con il suo equivalente in [[regime stazionario]].

Se invece abbiamo una condizione iniziale $v_{C_0}$ del condensatore la famiglia di soluzioni dell'equazione di stato $v_C(t;k,t_0) = v_{C_0}$ si riduce ad una sola funziona specifica, infatti ci basta trovare $k\ |\ v_C(t_0;k,t_0) = v_{C_0}$ , si arriva facilmente ad avere $k = v_{C_0} - E_{eq}$. 
E allora la soluzione dell'<u>equazione di stato</u> è:
$$v_C(t) = \underbrace{(v_{C_0} -E_{eq})e^{-\frac{t-t_0}{R_{eq}C}}}_{transitorio}+\underbrace{E_{eq}}_{regime}$$

Se invece $A_{eq}(t)$ non è costante determiniamo $k = v_{C_0} - v_{C_{IP}}(t_0)$

$\Longrightarrow$ la soluzione con $A_{eq}(t)$ qualunque viene descritta dai contributi dovuti all'ingresso chiamati ==risposta forzata== e quelli della condizione iniziale ==risposta libera==
$$v_C(t) = \underbrace{v_{C_0}e^{-\frac{t-t_0}{R_{eq}C}}}_\text{risposta libera} +\underbrace{v_{C_{IP}(t)}-v_{C_{IP}}(t_0)e^{-\frac{t-t_0}{R_{eq}C}}}_\text{risposta forzata}$$

E quindi
$$
\begin{cases}
\text{ingresso nullo} \Rightarrow \text{condensatore si scarica se } \lambda < 0 \\
\text{condizione iniziale nulla } \Rightarrow \text{regime per }t \rightarrow \infty 
\end{cases}
$$
