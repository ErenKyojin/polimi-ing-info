È una condizione necessaria e sufficiente per la stabilità asintotica di un sistema dinamico lineare tempo invariante a TC (Per TD: criterio di jury).

Si basa sulla [[tabella di Routh]] che si costruiisce a partire dal polinomio caratteristico $\Pi(s)$, dalla matrice dinamica $A$ del sistema



>[!def]
>Il sistema dinamico con polinomio caratteristico $\Pi(s)$ è asintoticamente stabile $\iff$ tutti gli elementi della prima colonna della tabella sono concordi e non nulli.
>
>>[!corollario]
>>Se nonci sono elementi nulli in prima colonna il numero di inversioni di segno su quella colonna è pari al numero di radici di $\Pi(s)$ con $Re> 0$

>[!esempio] Esempio 1
> $$
> \Pi (s) = s^4 + 2s^3 + 4s^2 + s + 5
>$$
>
>Tabella di Routh, $n = 4 \implies 5$ righe:
> $$
> \begin{array}{}
>1 & 4 & 5  & \dots\\
>2 & 1 & 0  & \dots\\
>\alpha & \beta & 0 & \dots \\
>\gamma & 0 & 0 & \dots \\
>\delta 
>\end{array} \qquad\qquad \begin{align}
> &\alpha = -\frac{1}{2}\det\left(\begin{bmatrix}
>1 & 4 \\
2 & 1
>\end{bmatrix}\right) = \frac{7}{2} \\
>&\beta= -\frac{1}{2} \det \left( \begin{bmatrix}
>1 & 5 \\
2 & 0
>\end{bmatrix} \right) = 5  \\
&\gamma = -\frac{1}{\alpha} \det \left( \begin{bmatrix}
>2 & 1 \\
>\alpha & \beta
>\end{bmatrix}\right) = -\frac{13}{7}\quad\text{non AS} \\
> &\delta = -\frac{1}{\gamma} \det \left( \begin{bmatrix}
>\alpha & \beta \\
>\gamma & 0
>\end{bmatrix} \right) = \beta = 5 \\
>\end{align}
>$$
>Due radici di segno


>[!esempio] Esempio 2
>Dato il SD LTI a TC con PC $\Pi(s) = s^3 + 2s^2 + hs + k$ dire per quali coppie $(h,k)$ è asintoticamente stabile
> $$
> \begin{array}{}
>1 & h \\
>2 & k \\
>\alpha & 0 \\
>\beta
>\end{array}\qquad \begin{align}
> \alpha = -\frac{1}{2} \det \left( \begin{bmatrix}
>1 & h \\
>2  &k
>\end{bmatrix} \right) = \frac{1}{2}(2h - k)  \\
>\beta = -\frac{2}{2h-k} \det \left( \begin{bmatrix}
>2 & k \\
>\alpha & 0
>\end{bmatrix} \right) = k
>\end{align}
>$$
>Disequazioni per imporre i termini della prima colonna concordi, ossia > 0.
>
>$$\begin{cases}
>2h - k > 0 \\
>k > 0
>\end{cases} \implies \begin{cases}
>h < 2h
>\end{cases}$$
>
> ```tikz
\begin{document}
\begin{tikzpicture}[scale = 1.5]
> \draw[->](-1,0) -- (2,0) node[below]{h};
> \draw[->](0,-1) --(0,2) node[right]{k};
> \draw[] (-.5,-1.25) -- (1,2.5);
> \filldraw[color = red, fill = yellow!20, thick] (0,0) -- (1,2.5) -- (2,2.5) -- (2,0) -- (0,0);
>\end{tikzpicture}
>\end{document}
>```
