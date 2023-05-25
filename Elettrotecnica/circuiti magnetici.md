---
alias: circuito magnetico
---
# Circuiti magnetici
È spesso possibile calcolare, o almeno approssimare, la [[matrice]] di induttanza di un sistema di avvolgimenti avvolti su un materiale ad alta permeabilità magnetica, teniamo presenti le seguenti ipotesi:
![[Pasted image 20220830110705.png|500]]
1. il flusso $\Phi_{b} \equiv \Psi$ ed il campo $\bar{B}$ sono trascurabili fuori dal nucleo ad alta permeabilità, applicando la [[legge di ampere]] alle due curve $\gamma_1,\gamma_2$ di lunghezza paragonabile abbiamo $H_{1}L = G_{2}L = Ni$ con $H_1,H_2$ valori medi dei campi magnetici dentro e fuori il nuclei, quindi $H_{1}\approx H_{2}$ ma $B_{1} \gg B_{2}$ essendo $\mu_{r_{1}} \gg \mu_{r_{2}}$
2. Il campo di induzione magnetica $\bar B$ ed il [[campo magnetico]] $\bar{H}$ sono circa costanti in tratti uniformi del nucleo (tratti composti dallo stesso materiale e con area della sezione uguale)
3. Il materiale del nucleo è lineare


>[!esempio]
>![[Pasted image 20220830112758.png]]
>Consideriamo questo nucleo toroidale con due avvolgimenti di spire $N_1,N_2$. 
>Indichiamo la lunghezza [[Valore atteso|media]] e l'area del nucleo con $L = 2\pi r$ ed $S$ rispettivamente.
>Indichiamo con $\Psi_{1}$ e $\Psi_{2}$ le direzioni dei flussi originati dagli avvolgimenti 1 e 2 quando l'altro è disattivato.
>Per [[direzione]] del flusso si intende direzione e verso del [[versore]] normale alla superficie attraverso la quale il flusso stesso viene calcolato; solitamente si assegna a $\Psi_1,\Psi_2$ le direzioni di $\bar{B}_{1}= \mu_{r}\mu_{0}\bar{H}_1$ e $\bar{B}_{2}= \mu_{r}\mu_0\bar{H}_2$ indotti dalla [[corrente]] $i_1$ ed $i_2$. Si assumono i normali versori $\hat{u}_{N_{1}}$ ed $\hat{u}_{N_1}$ orientati come $\bar{B}_1$ e $\bar{B}_2$.
>Indichiamo invece con $\Uppsi$ il flusso presente nel nucleo e dovuto al campo complessivo $\bar{B}$ presente in esso. Per la scelta della direzione del flusso $\psi$, cioè della superficie $S$ non è data alcuna regola.
>Poichè $\bar{B}$ è costante nel nucleo e diretto secondo la direzione della circonferenza, ed $S$ sezione del nucleo è costante, otteniamo che $\Psi$ è costante e pari a
>$$\Psi = BS = \mu_r\mu_0HS$$
>Poi, dal teorema di Ampere, tenendo conto che $\bar{H}$ è costante nel nucleo:
>$$\oint_{\gamma}\!\bar{H} \cdot d\bar{l} = N_1i_{1}+ N_2i_{2}= HL$$
>dove $i_1$ e $i_2$ si concatenano positivamento alla linea $\gamma$ per il loro allineamento reciproco ![[Pasted image 20220830115759.png|500]]
>La lunghezza $L$ della linea $\gamma$ corisponde alla lunghezza media del nucleo.
>Quindi
>$$\Psi = \frac{\mu_{r}\mu_{0}S}{L}(N_{1}i_{1}+N_{2}i_{2}) \tag{1}$$
>Nella struttura toroidale che stiamo considerando, affinchè la $(1)$ sia valida a prescindere dalla scelta di $\gamma$ e quindi di $L$ è necessario che $r \gg \sqrt{S}$.
>Introducendo la riluttanza del nucleo $\mathcal{R} = \frac{L}{\mu_{r}\mu_{0}S}$ la relazione 
>$$\Psi = \frac{N_1i_1}{\mathcal{R}}+\frac{N_2i_2}{\mathcal{R}}$$
>è la soluzione del circuito elettrico seguente, equivalente al nucleo toroidale:
>![[Pasted image 20220830121641.png]]

# Analogie
Osserviamo quindi le seguenti analogie tra circuito elettrico e circuito magnetico:

Circuito elettrico | circuito magnetico
---|---
$R$ resistenza|$\mathcal{R}$ riluttanza
$i$ corrente | $\Psi$ flusso
$e$ [[forza]] elettromotrice | $Ni$ forza **magnetomotrice**
$v$ [[tensione]] elettrica| $v_{H}= \mathcal{R}\Psi$ "tensione magnetica"

Si noti inoltre che vale la seguente convenzione
![[Pasted image 20220830123747.png]]
Una volta determinato il flusso $\Psi$ nel nuclo, i flussi concatenati con i due avvolgimenti sono:
$$
\begin{align}
&\Phi_{1}\qquad= N_{1}\Psi = \frac{N_1^2}{\mathcal{R}}i_1+\frac{N_1N_2}{\mathcal{R}}i_{2}\\
&\Phi_{2}\qquad =N_{2}\Psi = \frac{N_1N_2}{\mathcal{R}}i_{1}+ \frac{N_2^2}{\mathcal{R}}i_2
\end{align}
$$
La cui matrice di induttanza è definita come:
$$
\begin{align}
L_{11}\quad &=\quad \frac{N_1}{\mathcal{R}} \\
L_{12} = L_{21}= M\quad &=\quad \frac{N_1N_2}{\mathcal{R}} \\
L_{22}\quad &=\quad \frac{N_2^2}{\mathcal{R}}
\end{align}
$$
In questo caso si ha un accoppiamento perfetto in quanto
$$L_{11}L_{22} - M^{2}= \frac{N_1^2N_1^2}{\mathcal{R^2}}-\frac{N_1^{2}N_2^{2}}{\mathcal{R}}= 0$$
Quindi tutto il flusso concatenato con l'avvolgimento 1 è contatenato con l'avvolgiemnto 2

# Teoria dei circuiti magnetici

>[!def]
>Con circuito magnetico intendiamo una connessione o rete composta da lati formati da:
>1. Elementi magneticamente passivi, copmosti da tratti di lunghezza $L_i$, sezione $S_i$ e permeabilià relativa $\mu_r,i$ Questi hanno un circuito equivalente elettrico formato da una riluttanza $R_{i}= \frac{L_i}{\mu_{r,i}\mu_{0,}S_i}$
>2. Elementi magneticamente attivi, formati da tratti di lunghezza $L_k$, sezione $S_k$ e permeabilità relativa $\mu_{r,k}$ su cui è presente un avvolgimento di $N_k$ spire percorse dalla corrente $i_k$. Il circuito equivalente elettrico è composto da una riluttanza $\mathcal{R_{k}}= \frac{L_k}{\mu_{r,k}\mu_0,S_k}$ in [[Elettrotecnica/Serie|serie]] ad un generatore di forza magnetomotrice $e_{k}= \pm N_{k}i_k$ 

>[!modelli circuitali]-
>Ricaviamo i seguenti modelli circuitali
>![[Pasted image 20220830162052.png]]

I punti di connessione dei lati del circuito magnetico sono #nodi del circuito magnetico, quindi per la legge di Gauss magnetica vale la seguente equazione:
$$\oint_{\Sigma} \!\bar{B}\cdot \hat{u}_{N}\,\d v = 0$$
Quindi, per densità di flusso costanti e nulle fuori dalle sezioni del circuito magnetico abbiamo:
$$\oint_{\Sigma}\!\bar{B} \cdot \hat{u}_{N}\,\d v \approx \sum_kB_kS_{k}= \sum_{k}\Psi_{k}= 0$$

Possiamo quindi enunciare la [[leggi di Kirchoff#KCL magnetica|Legge di Kirchoff per le correnti]] magnetica e la [[leggi di Kirchoff#KVL magnetica|Legge di Kirchoff per le tensioni]] magnetica.
Quindi un circuito magnetico soddisfa tutte le leggi logiche e topologiche di un circuito elettrico, è quindi completamente sostituito dal equivalente circuito elettrico.

## [[flusso]]

Un induttore realizzato con un nucleo ferromagnetico non è lineare, per questo si usa il [[traferro]]
