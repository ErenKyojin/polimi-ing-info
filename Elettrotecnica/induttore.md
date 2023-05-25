# Induttore
Considerando una spira attraverso cui fluisce una corrente $I$ che produce un [[campo magnetico]] $\overline{B}$ proporzionale in ogni punto ad $I$, il flusso $\Phi_B$, chiamato <u>flusso auto-concatenato</u> è
$$\Phi_B = LI$$
Con L [[autoinduttanza]] del circuito, \[L\] = $\frac{Wb}{A}$ o $H$ per henry.

Se la corrente $I$ è una funzione del tempo $I(t)$ non costante, il flusso del campo magnetico $\overline{B}$  varia anch'esso e abbiamo una forza elettro motrice $f.e.m.$  indotta secondo la [[legge dell'induzione elettromagnetica]]

$$V_{fem} = -\frac{d\Phi_B}{dt} = -L\frac{dI}{dt}$$

Anche l'induttore come il condensatore è un componente #conservativo, cioè immagazzina energia per poi rilasciarla

### induttore in regime stazionario
L'induttore è formato quindi da un materiale cilindrico di lunghezza $l$ con sopra avvolta un filo conduttore di rame con un numero $N \geq 1000$ di spire in modo molto compatto, otteniamo un campo campo chiuso orientato lungo l'asse del cilindro il cui modulo è $B = \frac{\mu\\N}{l}I$ con $\mu$ permeabilità magnetica del cilindro.

Come per il [[condensatore]] da $\overline{E}$ è possibile passare a $Q$ calcolandone il flusso, così per l'induttore è possibile ottenere il flusso del campo $\overline{B}$ attraverso la superficie orientata $\sigma$ delimitata dalla singola spira.
$$\Psi_B = \int_\sigma \overline{B}\ \cdot \hat{u}_Nd\sigma \approx BS$$
con $S$ area della spira, ossia la sezione del cilindro.
Possiamo quindi trovare il flusso totale moltiplicando per il numero di spire.
$$\Phi_B = N\Psi = \frac{\mu\\N^2S}{l}I = LI$$ 
==> se è costante I lo è anche $\Phi_B$ e allora secondo la legge di faraday-henry non c'è alcuna fem indotta e allora ai capi dell'induttore abbiamo $V = -V_{fem}=0$, ossia un cortocircuito.

### induttore in regime tempo variante
Un induttore legato ad una corrente $I(t)$ non costante nel tempo, il flusso magnetico diventa $\Phi_B(t) = LI(t)$, e per la [[legge di faraday]] si induce una fem $V_{fem}= - \frac{d\Phi_B(t)}{dt}$ lungo fili, che ai morsetti viene misurata come
$$V(t) = \frac{d\Phi_B}{dt} = L\frac{dI(t)}{dt}$$

inoltre $$I(t) = I(t_0)+\frac{1}{L}\int_{t_0}^tV(\tau)d\tau$$

### Potenza istantanea assorbita dall'induttore
La [[potenza]] istantanea assorbita da un induttore è
$$p_a(t) = V(t)I(t) = LI(t)\frac{dI(t)}{dt}=\frac{d}{dt}\left(\frac{LI^2(t)}{2}\right) = \frac{dw_a^M}{dt}$$
e la corrente descrittiva I permette di ricavare $w_a^M(t) =\frac{1}{2}LI^2$ energia magnetica immagazzinata nell'induttore. 

## nel dominio dei [[fasori]]
Nel dominio dei fasori diventa $$\overline{v} = j\omega L\overline{i}$$
da cui $|\overline{v}|e^{j\varphi_{\overline{v}}} = \omega Le^{j\pi/_2}|\overline{i}|e^{j\varphi_{\overline{i}}} =\omega L|\overline{i}|e^{j(\varphi_{\overline{i}}+\pi/_2)}$ e quindi il modulo del fasore $\overline{v}$ è in anticipo di $\frac{\pi}{2}$ rispetto al fasore $\overline{i}$ della corrente.
Inoltre notiamo come quando $\omega \to 0$  l'induttore si comporta come un cortocircuito ($|\overline{v}| \to 0$) e quando $\omega \to \infty$ l'induttore si comporta come un circuito aperto ($\overline{|i|}=\frac{\overline{v}}{\omega} \to 0$)

### Potenza in [[regime sinusoidale]]
Per l'induttore abbiamo che $\bar v = Z(j\omega)\bar\imath = j\omega L \bar\imath$ e $\varphi_Z = \frac{\pi}{2}$, da cui ricaviamo che
$$P = \frac{|\bar v||\bar\imath|}{2}\cos(\pi/_2)$$
E
$$Q = \frac{|\bar v||\bar\imath|}{2}\sin(\pi/_2) = \frac{\omega L |\bar\imath|^2}{2} = \frac{|\bar v|^2}{2\omega L}$$