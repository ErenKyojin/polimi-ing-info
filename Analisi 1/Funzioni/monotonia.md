# Monotonia
Una funzione $f\ |\ D \rightarrow \mathbb R$ si dice:
- monotona crescente se $\forall\ x_1,x_2 \in D\quad x_1 < x_2 \Rightarrow f(x_1) \leq f(x_2)$
- monotona strettamente crescente se $\forall\ x_1,x_2 \in D\quad x_1<x_2 \Rightarrow f(x_1)<f(x_2)$
- monotona decrescente se $\forall\ x_1,x_2 \in D\quad x_1 < x_2 \Rightarrow f(x_1)\geq f(x_2)$
- monotona strettamente decescente se $\forall\ x_1,x_2 \in D\quad x_1< x_2 \Rightarrow f(x_1) > f(x_2)$



>[!dim] #teorema
>
>- Th: se $f:D \rightarrow R$ è strettamente monotona $\Rightarrow f \text{ invertibile, } f^{-1} \text{monotona}$
>
>
> - Dim:
> ipotizziamo $f$ strettamente crescente 
> $$
> x_1, x_2 \in D\qquad\qquad \begin{rcases}x_1 < x_2\quad \Rightarrow f(x_1) < f(x_2)\\x_1 > x_2\quad \Rightarrow f(x_1) > f(x_2)\end{rcases}\text{condizione di invertibilità} \\
>$$
>$y_1 = f(x_1),\quad y_2=f(x_2)\quad y_1 < y_2$
>Se per assurdo $x_1 \geq x_2 \Longrightarrow f(x_1) \geq f(x_2)$
>Allora $x_1 = f^{-1}(y_1) < f^{-1}(y_2) = x_2$
>
> Impossibile


# Monotonia nelle successioni
$\{a_n\}$

$$\begin{rcases}
\bullet\text{ crescente  } &a_{n+1}  \geq a_n \\
\bullet\text{ strettamente crescente  } &a_{n+1} > a_n \\
\bullet\text{ decrescente } &a_{n+1} \leq a_n \\
\bullet\text{ decrescente } &a_{n+1} < a_n
\end{rcases}\text{se }\forall n \geq \bar n \text{ definitivamente}$$
>[!esempio]
>$a_n = (n-8)^2 = 64, 49, 36,25, 16,9,4,1,0,1,4,9,16,25,36,49...$
>Funzione <u>non</u> crescente ma <u>definitivamente</u> crescente (inizia a crescere all'infinito dopo un certo punto)

### #Teorema di monotonia
>[!teorema]
>Ogni serie $\{a_n\}$ monotonia e limitata ammette limite $L$.
>	$\{a_n\}$ crescente $\Rightarrow L = \sup\{a_n\}$
>	$\{a_n\}$ decrescente $\Rightarrow L = \inf\{a_n\}$ 

>[!dim]
>$\{a_n\}$ cresce
>$D\{a_n\}$ è superiormente limitata $\Rightarrow \exists S = \sup\{a_n\}$
>S è $$\sup \{a_n\}\Rightarrow\begin{cases}
>\forall n\quad &a_n \leq S \\
>\forall\varepsilon > 0 \qquad\exists\ n^* &\underbrace{S - \varepsilon <a_n<S + \varepsilon}_{|a_n - S| < \varepsilon\  }
>\end{cases}$$
>$$|a_n-S| < \varepsilon \Rightarrow a_n \rightarrow S
>$$

>[!Teorema] Corollario - Teorema di monotonia
>Se $\{a_n\}$ monotono
>$\rightarrow$ se crescente $\Rightarrow \lim a_n = \sup\{a_n\}$
>$\rightarrow$ se decrescente $\Rightarrow \lim a_n = \inf\{a_n\}$

>[!Dim] Dim - Corollario
>Se $\{a_n\}$ è limitata è limitata la dimostrazione è il teorema stesso
>Se $\{a_n\}$ non è superiormente limitata, $\sup\{a_n\} = +\infty$
>$\forall k>0 \exists\ n^*:a_{n^*} > k$
>$\forall n\geq n^*\qquad a_n\geq a_n^*$
>$\forall k > 0 \exists n^* : \forall n \geq n^*\qquad a_n > k\}\mspace{-8mu}\rightarrow a_n \rightarrow +\infty$
> Qindi una qualsiasi successione monotona non può non essere irregolare