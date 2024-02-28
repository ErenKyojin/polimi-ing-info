---
alias: flusso concatenato 
---
# flusso
Si consideri una regione dello spazio come quella in figura:
![[Pasted image 20220830181605.png|500]]

In cui è presente una densità di flusso $\bar{B}$. Una superficie $\Sigma$ con contorno $\gamma$ ha allora un flusso concatenato dato da:
$$\Psi=\int_{\sum}\!\bar{B}\cdot \hat{u}_{n}\, \d\sigma$$
Ipotizsziamo adesso di disporre un avvolgimento di $N$ spire su $\gamma$: se l'avvolgimento giace approssivamente sullo stesso piano della superficie $\Sigma$ allora il flusso concatenato all'avvolgimento $\Phi$ è quello relativa a $\Sigma_{1}+\Sigma_{2} \approx 2\Upsigma$. Ossia il flusso concatenato $\Phi$ è dato da:
$$\Phi = 2\Psi = 2\int_{\Upsigma}\! \bar{B}\cdot \hat{u}_{N}\, \d \sigma$$
O, più in generale, il flusso concatenato con un avvolgimento di $N$ spire è dato da $N$ volte il flusso concatenato con un solo avvolgimento
$$\Phi = N \Sigma = N \int_{\Sigma}\! \bar{B} \cdot\hat{n}\,\d \sigma$$
>[!esempio]
>![[Pasted image 20220830182705.png]]

>[!esempio] calcolo della matrice di induttanza
>![[Pasted image 20220830184532.png]]
>Per calcolare la matrice d'induttanza della struttura sopra dobbiamo prima definire le riluttanze $\mathcal{R}$ e $\mathcal{R_1}$ come
>$$\begin{align}
>\mathcal{R} &= \frac{L}{\mu_r\mu_{0}S} \\
>\mathcal{R}_{1}&= \frac{L}{\mu_{r}\mu_{0}2S} = \frac{\mathcal{R}}{2}
>\end{align}$$
>Si ha quindi il circuito equivalente qui sotto, che si può risolvere applicando il [[teorema di Millman]] hai nodi $A,B$
>![[Pasted image 20220830190156.png]]
>Nel circuito equivalente, la tensione $v_{AB}$ può essere calcolata come
>$$\begin{align}
>v_{AB}&= \frac{\frac{N_1i_1}{3\mathcal{R}} + \frac{-N_2i_2}{3\mathcal{R}} + \frac{2N_3I_3}{\mathcal{R}}}{\frac{1}{3\mathcal{R}}+ \frac{1}{3\mathcal{R}} + \frac{2}{\mathcal{R}}} = \\
>&=\frac{1}{8}(N_1i_{1}- N_2i_{2}+6N_3i_3)
>\end{align}$$
>
>
>Si ha inoltre che
>$$
>\begin{align}
>v_{AB}\quad &= \quad N_1i_{1}- 3\mathcal{R}\Psi_1\\
>&=\quad N_3i_{3}- \frac{\mathcal{R}}{2}\Psi_3\\
>&=\quad -N_2i_{2}+ 3\mathcal{R}\Psi_2
>\end{align}
>$$
Da cui possiamo ricavare le espressioni dei flussi:
>$$\begin{align}
>&\Psi_{1}\quad&&=\quad \frac{1}{3\mathcal{R}}(N_1i_{1}-v_{AB}) = \\
>& &&=\quad\frac{1}{3\mathcal{R}}\left[N_1i_{1}\left(1- \frac{1}{8}\right)+ \frac{1}{8}N_2i_{2} - \frac{6}{8}N_3i_{3}\right] =\\
>& &&=\quad \frac{1}{24\mathcal{R}}[7N_{1}i_{1}+N_{2}i_{2} - 6N_{3}i_{3}] \\
>& \Psi_{2\quad}&&=\quad\frac{1}{3\mathcal{R}}(N_2i_{2} + v_{AB}) =\\
>& &&=\quad\frac{1}{3\mathcal{R}}\left[ \frac{1}{8}N_1i_{1} -  \left( \frac{1}{8} - 1\right)\right] = \\
>& &&=\quad \frac{1}{24\mathcal{R}}[N_1i_{1}+ 7N_2i_{2}+6N_3i_{3}] \\
>&\Psi_{3} &&=\quad\frac{2}{\mathcal{R}}(N_3i_{3} - v_{AB}) = \\
>& &&=\quad\frac{2}{\mathcal{R}} \left[ N_3i_{3}- \frac{1}{8}N_1i_{1} + \frac{1}{8}N_2+i_{2} - \frac{6}{8}N_{3}i_{3} \right] = \\
>& &&=\quad [-N_1i_{1} + N_2i_{2} + 2N_3i_3]
>\end{align}
>$$
>
>Passando ai flussi concatenati e ricordando che $\Phi=N \Psi$, si ottiene che:
>$$
>\begin{align}
>&\Phi_{1}\quad = \quad \frac{7}{24\mathcal{R}}N_{1}^{2}i_{1} + \frac{1}{24\mathcal{R}}N_{1}N_{2}i_{2} - \frac{6}{24\mathcal{R}}N_{1}N_{3}i_{3} \\
>&\Phi_{2}\quad = \quad \frac{1}{24\mathcal{R}}N_{1}N_{2}i_{1}+ \frac{7}{24\mathcal{R}}N_{2}^{2}i_{2}+ \frac{6}{24\mathcal{R}}N_{2}N_{3}i_{3} \\
>&\Phi_{3}\quad = \quad \frac{-1}{4\mathcal{R}}N_1N_3i_{1}+ \frac{1}{4\mathcal{R}}N_{2}N_{3}i_{2}+ \frac{2}{4\mathcal{R}}N_{3}^{2}i_3  
>\end{align}
>$$
>Ossia
>$$L = \frac{1}{24\mathcal{R}} \begin{bmatrix}
>7N_{1}^{2} & N_{1}N_{2} & -6N_{1}N_{3} \\ 
>N_{1}N_{2} & 7N_{2}^{2} & 6N_{2}N_{3}  \\ 
>-6N_{1}N_{3} & N_{2}N_{3} & 12N_{3}^{2} 
>\end{bmatrix}$$
>Essendo il $\det(L)=0$, ci troviamo in una situazione di accoppiamento perfetto, ossia tutto il flusso concatenato con ciascuno degli avvolgimenti è concatenato con gli altri due