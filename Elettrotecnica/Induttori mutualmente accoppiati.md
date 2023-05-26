# [[induttore|induttori]] mutualmente accoppiati
Si tratta di un [[doppio bipolo]] proprio, dinamico, lineare e tempo variante.
 ![[Pasted image 20220617145554.png]]
 Questo componente rappresenta due induttori di induttanza $L_1$ (*induttanza primaria*) ed $L_2$(*induttanza secondaria*) che interagiscono tra loro ad opera dei flussi mutui dei campi magnetici generati dalle correnti elettriche che vi ci scorrono.
 
 Se questa interazione non è desiderata si parla di fenomeno parassita, il parametro $M$, che può assumere qualsiasi valore $\in \mathbb{R}$ è detta [[induttanza mutua]]. I tre parametri succitati sono espressi in henry ed il componente è tempo-variante se essi dipendono dal tempo.
 
 L'[[equazione costitutiva]] è:
 
$$\begin{cases}
	v_1(t) = L_1\frac{d}{dt}i_1+M\frac{d}{dt}i_2 \\
	v_2(t) = M\frac{d}{dt}i_1+L_2\frac{d}{dt}i_2
\end{cases}$$

Gli induttori mutualmente accoppiati sono un componente #passivo dal punto di vista energetico, e quindi $M^2\leq L_1L_2$ deve essere sempre essere soddisfatto.
L'energia assorbita dal doppio [[bipolo]], infatti, partendo dalla [[potenza]] istantane assorbita $p_a(t) = v_1i_1+v_2i_2$ può essere scritta come:

$$w_a(t) =w_a(t_0) + \int_{t_0}^t\left(\left(L_1\frac{d}{d\tau}i_1+M\frac{d}{d\tau}i_2\right)i_1 + \left(M\frac{d}{d\tau}i_1+L_2\frac{d}{d\tau}i_2\right)\right)d\tau$$

E quindi
$$w_a(t) = w_a(t_0)+\frac12L_1i_1^2(t)+\frac12L_2i_2^2(t)+Mi_1(t)i_2(t)$$
Se si assume $w_a(t_0) = 0$, è necessario garantire che $w_a(t) \geq 0$ per ogni $t\geq t_0$. riorganizziamo $w_a(t)$ come una quadratica:

$$w_a(t) = \frac12
	\begin{bmatrix}
	i_1 & i_2
	\end{bmatrix}
	\begin{bmatrix}
	L_1 & M \\
	M & L_2
	\end{bmatrix}
	\begin{bmatrix}
	i_1 \\
	i_2
	\end{bmatrix}
$$

e utilizando il criterio di Sylvester, si ricava facilmente che imporre $w_a(t)>0$ per ogni condizione di funzionamento equivale a richidere che $L_1 > 0$ e $M^2 < L_1L_2$, ovvero la forma quadratica è definita positiva. Oppure se la forma quadratica è semi definita positiva e quindi $w_a(t) \geq 0$ si include anche il caso limite $M^2 = L_1L_2$.
Oltre ad M si può definire il coefficiente di accoppiamento.
$$k=\frac{|M|}{\sqrt{L_1L_2}}$$ che varia nell'intervallo $[0, 1]$ in ragione della condizione $M^2\leq L_1L_2$

>[!oss]
>Prendiamo in considerazione dell'induttanza equivalente che si ottiene collegando in serie equiversa o controvers ed in parallelo equiverso o controverso gli induttori primario e secondario
![[Pasted image 20220617170529.png]]![[Pasted image 20220617170540.png]]
>
>Nel caso della serie equiversa e controversa si ottiene un induttore di induttanza equivalente pari a 
>$L_+^S =L_1+L_2+2M$ ed $L_-^S=L_1+L_2-2M$, rispettivamente.
>Nel caso del collegamento parallelo invece $L_+^p=\frac{L_1L_2-M^2}{L_1+L_2-2M}$ ed $L_-^p=\frac{L_1L_2-M^2}{L_1+L_2+2M}$.
>Notiamo che intutti questi casi otteniamo un valore di induttanza non negativo


Inoltre in [[regime sinusoidale]] permanente è possibile associare agli induttori mutuamente accoppiati una matrice di impedenza (e, se esiste, di [[ammettenza]]) pari a

$$\mathcal{Z}(j\omega)=j\omega\begin{bmatrix}L_1&M\\M&L_2\end{bmatrix}$$

