# divisione tra polinomi
Dati due polinomi $P(x),D(x)$, possiamo sempre deterimnare due polinomi $Q(x),R(x)$ tali che:
$$
P(x)=Q(x)D(x)+R(x)
$$
Con $Q(x)$ quoziente e $R(x)$ resto della divisione. Essendo $R(x)$ il resto inoltre avrà grado minore di $D(x)$


# Calcolare la divisione tra polinomi
Dividere un polinomio $P(x)$ di grado $n$ per un polinomio $D(x)$ di grado $m>n$ ci darà sempre risultato $0$ e resto uguale a $P(x)$
$$
\frac{P(x)}{D(x)}=\frac{x^{2}+9x+1}{5x^{3}+3x^{2}+2} = 0,\qquad R(x)=x^2+9x+1
$$

In generale, per due polinomi $P(x),D(x)$, tali che $P(x)$ abbia grado superiore a $D(x)$ come
$$
\begin{align}
&P(x) = x^{4}+2x^{2}+x-1  \\
&D(x) = x + x^{2} + 1
\end{align}
$$
Cerchiamo due polinomi $Q(x), R(x)$ tali che:
$$
P(x) = Q(x)D(x) + R(x)
$$
1. Ordiniamo i polinomi secondo le potenze decrescenti, nel nostro caso dobbiamo riordinare solo $D(x) = x^{2}+x+1$ 
2. costruiamo una tabella
$$
\begin{array}{ccccc|ccc}
+x^4 & 0x^3 & +2x^2 & +x & -1 & +x^2 & +x & +1  \\ \hline
& & & & & &  \\
& & & & & +x^2 
\end{array}
$$
>[!oss]
>Se $P(x)$ è un polinomio non completo, scriviamo uno $0$ nella tabella al posto dei termini mancanti, ad esempio
>$$
>P(x) = x^{20}+1
>$$
>avremmo dovuto scrivere
>$$
>P(x)=x^{20}+ \underbrace{ 0x^{19} + 0x^{18} + \dots + 0x^{2}+0x }_{ 19 \text{ termini} } + 1
>$$

3. Dividiamo il termine di grado massimo  di $P(x)$ per il termine di grado massimo di $D(x)$ con una semplice divisione tra monomi:
$$
\frac{x^{4}}{x^{2}}=x^{2}
$$
e trascriviamo il risultato:
$$
\begin{array}{cccccc|ccc}
&+x^{4}  &0x^{3} &+2x^{2} &+x &-1&+x^{2}  &+x &+1 \\
\hline \\
&&&&&&x^{2}

\end{array}
$$
4. prodotto parziale con cambio di segno:
   Moltiplichiamo il risultato del punto preedente per $D(x)$ , invertiamo i segni e trascriviamoli al di sotto del rispettivo grado  del polinomio
$$
\begin{array}{cccccc|ccc}
&+x^{4} &0x^{3} &2x^{2} &x &-1 &+x^{2} &+x &+1 \\
\hline \\
&-x^{4}&-x^{3}&-x^{2}&&&x^{2} \\
\hline \\

\end{array}
$$

5. eseguiamo le operazioni in colonna:
$$
\begin{array}{cccccc|ccc}
&+x^{4} &0x^{3} &2x^{2} &x &-1 &+x^{2} &+x &+1 \\
 \hline \\
&-x^{4} &-x^{3} &-x^{2} &\downarrow &\downarrow &x^{2} \\
\hline \\
&0 & -x^{3} &+x^{2} &+x &-1
\end{array}
$$
A questo punto si tratta di ripetere i passaggi in modo iterativo:
Prima di tutto $-\frac{x^{3}}{x^{2}} = -x$

$$
\begin{array}{cccccc|ccc}
&+x^{4} &0x^{3} &2x^{2} &x &-1 &+x^{2} &+x &+1 \\
 \hline \\
&-x^{4} &-x^{3} &-x^{2} &&&x^{2} &-x \\
\hline \\
&0 & -x^{3} &+x^{2} &+x &-1 \\
&&+x^{3} &+x^{2} &+x &\downarrow\\
\hline \\
& &0 &+2x^{2} &+2x &-1
\end{array}
$$
Andiamo avanti a ripetere i passaggi in quanto il grado di $+2x^{2}$ è $\geq$ del grado di  $x^{2}$

$$
\begin{array}{cccccc|ccc}
&+x^{4} &0x^{3} &2x^{2} &x &-1 &+x^{2} &+x &+1 \\
 \hline \\
&-x^{4} &-x^{3} &-x^{2} &&&x^{2} &-x &+2 \\
\hline \\
&0 & -x^{3} &+x^{2} &+x &-1 \\
&&+x^{3} &+x^{2} &+x &\downarrow\\
\hline \\
& &0 &+2x^{2} &+2x &-1 \\
& & &-2x^{2} &-2x &-2 \\
\hline \\
& & &0 &0 &-3
\end{array}
$$
E qui ci fermiamo in quanto il grado di $-3$ è minore di $x^{2}$

I nostri due polinomi $Q(x)$ e $R(x)$ sono quindi
$$
\begin{align}
&Q(x) = x^{2}-x+2 \\
 & R(x) = -3
\end{align}
$$
6. controlliamo il risultato:
$$\begin{align} \\
&P(x) &= &Q(x)\quad&\cdot\quad &&D(x) &R(x)\\
&x^{4}+2x^{2}+x-1 &= &(x^{2}-x+2)\quad&\cdot\quad&&(x^{2}+x+1)\quad+\quad&(-3)
\end{align}
$$