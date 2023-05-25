# Partitore di corrente
È il duale del [[partitore di tensione]].

Ipotizziamo di voler calcolare la corrente che passa attraverso al j-esimo resistore, qual è questa corrente?
>[!Dim]
>$i = \left(\sum_{k=1}^M G_k\right)v$ è l'equazione costitutive del [[bipolo]] composito, la tensione $v$ ai capi del generico resistore j-esimo è pari a $v = \frac{i}{\sum_{k=1}^MG_k}$ e quindi
>$$i_j = \frac{iG_j}{\sum_{k=1}^MG_k}$$
>
>Nel caso di solo due resistenze
>$$\begin{align}
>i_1 = \frac{iR_2}{R_1 + R_2} \\
>i_2 = \frac{iR_1}{R_1 + R_2}
>\end{align}$$

# Partitore di corrente per ammettenze
$$\overline{i}_j = \frac{Y_j(j\omega)}{\sum_{k=1}^MY_k(j\omega)}\overline{i}$$

E quindi per due sole ammettenze $Y_1(j\omega) = \frac{1}{Z_1(j\omega)}$ e $Y_2(j\omega) = \frac{1}{Z_2(j\omega)}$ connesse in parallelo possiamo scrivere:
$$\begin{align}
\overline i_1 = \frac{Z_2(j\omega)}{Z_1(j\omega)+ Z_2(j\omega)}\overline i \\
\overline i_2 = \frac{Z_1(j\omega)}{Z_1(j\omega)+Z_2(j\omega)}\overline i
\end{align}
$$