# Punti di non derivabilità
Possiamo avere molti casi differenti di una [[Funzioni|funzione]] $f$ non [[derivata|derivabile]] in un punto:

## punti angolosi
Consideriamo ad esempio la funzione $f(x) = |x|$. Essendo $f(x) = x$ per $x > 0$ e $f(x) = -x$ per $x < 0$.
Per verificare $f'$ in $0$ usiamo la definizione, per trovare il coefficiente angolare della retta.
$$\frac{f(h)-f(0)}{h} = \frac{|h|}{h}$$
È immediato notare che se $h \to 0^+ \Rightarrow f' = 1$ se $h \to 0^-\Rightarrow f' = -1$ , quindi la derivata in $0$ non è definita, non esistendo il limite del [[rapporto incrementale]].
In effetti guardando il grafico ci si rende conto che definire una tangente in $0$ è impossibile.
```desmos-graph
top = 3; bottom = -3; left = -4; right = 4
---
y = \abs(x)
```
Tuttavia esistono finiti sia limite destro che sinistro ed il grafico presenta un angolo in $(0,0)$

>[!def]
>Siano $f : (a,b)\to\mathbb R, x_0 \in (a,b)$. Se esiste finito $\lim_{h \to 0^+}\dfrac{f(x_0 + h) - f(x_0)}{h}$ (oppure $\lim_{h\to 0^-}\dfrac{f(x+h) - f(x)}{h}$) allora $f$ si dice derivata destra (oppure derivata sinistra) e si indica col simbolo $f_{+}'$ (oppure con $f_{-}'$).
>
>

Nel caso in cui $f$ sia continua e derivabile sia da destra che da sinista in $x_0$, ma non in $x_0$ stesso, si dice che ha un **punto angoloso** in $x = x_0$. Quindi ad esempio $|x|$ ha un punto angoloso in $x = 0.
Ricordiamo inoltre che la derivata della funzione valore assoluto (esclusa l'origine) è la funzione segno infatti:
$$|x|' = \text{sgn}(x) = \begin{cases}
1 \quad &\text{per } x > 0\\
-1 &\text{per } x < 0  \end{cases}$$

### punti "cuspidi" o a tangente verticale

Se $f$ è continua in un punto $x_0$ e 
$$\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}=\infty\quad(\text{o}\ -\infty)$$
$f$ non è derivabile in $x_0$ ma geometricamente il grafico di $f$ ha una tangente ben definita e parallela all'asse delle ordinate, ammettiamo comunque la scrittura $f'(x) = \pm\infty$ e parleremo di flesso a tangente verticale

>[!esempio] esempio - $\sqrt[3]{x}$
>```desmos-graph
>top = 3
>bottom = -3
>left = -4
>right = 4
>---
>y = \sqrt[3]{x}
>```

Consideriamo ora Invece la funzione $f(x) = \sqrt[3]{|x|}$ con grafico:
```desmos-graph
top = 2; bottom = -2; left = -3; right = 3;
---
y = \sqrt[3]{\abs(x)}
```
In questo caso abbiamo che $f_+'(0) = +\infty$, mentre $f_-'(0) = -\infty$ in queste caso si parla di cuspide per $x = 0$.

>[!def] cuspide
>Se $f$ è continua in $x_0$ e $f_+'(x_0)=\pm\infty$,$f_-'(x_0)=\mp\infty$ si dice che $f$ ha in $x_0$ una cuspide.

### casi misti
Quando una derivata è finita e l'altra infinita con $f$ continua si parla comunque di punto angoloso

Infine quando la funzione è definita solo per $x \geq x_0$ e la derivata destra è infinita si parla solo di tangente verticale (senza parlare di flesso o di cuspide)

