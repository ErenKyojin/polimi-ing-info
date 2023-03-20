---
aliases: 
creation date: 2023-03-20 10:34
modification date: 2023-03-20 10:34
---
# 1
$$
G(s) = \frac{100(1-s)\left( 1 + \frac{s}{5} \right)}{s^2\left( 1 - \frac{s}{10} \right)\left( 1 + \frac{s}{100} \right)^2}
$$
$\mu = 100$
$g = 2$
$$\implies \left| \frac{\mu}{(j\omega)^g} \right| \text{ ha pendenza }-2, \text{ taglia l'asse $0\dB$ per $\frac{100}{\omega^2} = 1 \implies \omega=10$}$$

Frequenze d'angolo di poli e zeri non nell'origine:
$$\begin{align}
&\omega = 1 \quad 1 \text{z a DX } (\Re> 0)\\
&\omega=5\quad 1 \text{z a SX} \\
&\omega= 10 \quad 1\text{p a DX}\\
&\omega = 100 \quad2\text{p a SX}
\end{align}$$

![[Drawing 2023-03-20 10.42.16.excalidraw]]


# 2
DBTI e DBF asintotici di
$$
G(s) = -\frac{(1+\dfrac{ s}{0,3})(1 - s)}{s\left( 1+\frac{s}{3} \right)^3}
$$

$\mu = -1$
$g = 1$
$\implies \left| \frac{\mu}{j\omega^g} \right| = \left| -\frac{1}{i\omega} \right|$ 
frequenze d'angolo
$0,3,1 \implies 1z \sx, 1z \dx, 3p \sx$


>[!oss]
>La retta ha pendenza iniziale $-g$

![[Drawing 2023-03-20 11.09.20.excalidraw]]

# 3
Data la funzione di tasferimento $G(s)$ :
$$G(s) = \frac{100s^2}{(1+s)^2 \left( 1 + \frac{s}{20} \right)^2}$$
1. Diagrammi di bode asintotici
2. Calcolare $\angle^o  G(j2)$ usando il regolo delle fasi


- $\mu = 100$
- $g = -2$
- $\omega = 1$
- $\omega = 20$

![[Drawing 2023-03-20 11.22.11.excalidraw]]


![[Drawing 2023-03-20 11.34.11.excalidraw]]




Voglio calcolare $\angle (1 + j\omega_{1}T)$ con $\omega_{1} < \frac{1}{T}$
e $\angle^o(1 + j\omega_{2}T)$ con $\omega_{2}> \frac{1}{T}$

Metto i $45^o$ alla F dove voglio la fase e leggo il contributo di fase in corrispondenza della $F$ d'angolo


# 4
Data la FdT
$$
G(s) = \frac{25\left( 1 + \frac{s}{2} \right)^2\left( 1-\frac{s}{20} \right)}{s^2\left( 1-\frac{s}{10} \right)\left( 1 + \frac{s}{50} \right)^2}
$$
$\mu = 25$
$g = 2$
$\omega =2\quad2Z \sx$
$\omega = 10\quad 1P \dx$
$\omega = 20\quad 1Z \dx$
$\omega = 50\quad 2P \sx$


1. DBM e DBF asintotici
2. Qual è/ quali sono la/le $\omega$ tali che $|G(j\omega)| = 1$?
3. Se e ne sono, quanto vale $\angle^o G(j\omega)$ in corrispondenza?
4. $\angle^o G(j10)$?