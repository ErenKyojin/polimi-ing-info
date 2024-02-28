# Limiti


## Limite destro e sinistro
>[!DEF]
>- Limite destro
>$a_n \rightarrow L^+$ se $a_n \rightarrow L \Longrightarrow a_n \geq L$ definitivamente
> - Limite sinistro
> $a_n \rightarrow L^-$ se $a_n \rightarrow L \Longrightarrow a_n \leq L$ definitivamente

>[!Esempio]
>$\{a_n\} = \frac{1}{n} \rightarrow 0^+$, tende a $0$ da sopra
>
>Anche la serie: $1, 0, \frac{1}{2},0,\frac{1}{3},0... \longrightarrow 0^+$



## Teoremi
>[!Teorema] #Teorema di unicità del limite
 >{$a_n$} successione convergente $\Rightarrow$ il limite è unico
>
>>[!dim] Dimostrazione
> Ipotizziamo che la successione $a_n$ abbia due limiti
>> $$\begin{flalign}
> a_n \to L_1 \\
> a_n\to L_2
> \end{flalign}
> \qquad\forall \varepsilon > 0 \text{ definitivo } |a_n - L_1| < \varepsilon\ \land |a_n - L_2| < \varepsilon $$
> $$0 \leq |L_1 - L_2| = |L_1 - a_n + a_n  -L_2| \leq \underset{< \varepsilon}{|L_1 - a_n|} + \underset{<\varepsilon}{|a_n - l_2|}<2\varepsilon$$
> Essendo $2\varepsilon$ una qualsiasi quantità positiva, ed essendo la somma di due moduli $\geq 0$, l'unico numero minore di qualsiasi quantità positiva e $\geq 0$ è 0.
> $\Rightarrow L_1 = L_2$


>[!teorema] #Teorema di algebra dei limiti
>$a_n\rightarrow A, b_n\rightarrow B \qquad (A \land B \in \mathbb R)$
>- $(a_n+b_n) \rightarrow A + B \longrightarrow$ Il limite della somma (differenza) è la somma (differenza) dei limiti
>- $(a_n\cdot b_n) \longrightarrow A\cdot B$
>- $\frac{a_n}{b_n}\rightarrow \frac{A}{B} (B \neq 0)\qquad B\neq 0$
>- $a_n^{b_n}\rightarrow A^B \left(a_n>0, A \geq 0, A \leq 0 \Rightarrow B > 0\right)$
>
>>[!Dim] 
>$\forall \varepsilon > 0\qquad |a_n - A| < \varepsilon, |b_n - B| < \varepsilon$
>>$$\begin{flalign}
>&|(a_n+b_n) - (A + B)| = |(a_n - A) + (b_n - B)| \leq|a_n-A| + |b_n-B| < 2\varepsilon \\ \\
>&|a_nb_n-AB| = |a_nb_n - a_nB+a_nB - AB| = |a_n(b_n-B) + B(a_n-A)| \leq\\
>&\leq|a_n(b_n-B)+B(a_n-A)| = |a_n|\underbrace{|b_n-B|}_{<\varepsilon} + |B|\underbrace{|a_n-A|}_{<\varepsilon} < \varepsilon
>\end{flalign}$$
>$\Rightarrow |a_n - A| < \varepsilon\qquad A-\varepsilon < a_n < A < A\varepsilon$
>$|a_n|<|A|$ 

>[!Teorema] Teorema dell'aritmetizzazione parziali di [[infinito]]
>$$\begin{flalign} a_n \to A\qquad b_n\to\infty\qquad&\Rightarrow (a_n \pm b_n)\to\pm\infty \\
>a_n,b_n\to +\infty \qquad&\Rightarrow(a_n+b_n)\to+\infty \\
>a_n,b_n\to -\infty \qquad&\Rightarrow(a_n+b_n)\to-\infty \\
>a_n \to A \neq 0\quad b_n \to \pm\infty\qquad&\Rightarrow a_n\cdot b_n\rightarrow\pm\infty \text{ regola del segno}\\
>a_n \to A \neq 0\quad b_n\to0^+\qquad&\Rightarrow \frac{a_n}{b_n}\to\pm\infty \text{ regola del segno}\\
>a_n\to A\quad b_n\to \pm\infty\qquad&\Rightarrow\frac{a_n}{b_n} \to 0\\
>a_n \to A\quad b_n \to+\infty\qquad&\Rightarrow a_n^{b_n}\to
>\begin{cases}
>+\infty\qquad &A >1\\
>0\qquad 0 &\leq A < 1
>\end{cases}\\
>a_n\to+\infty\quad b_n\to B \neq 0 \qquad&\Rightarrow 
>a_n^{b_n}\to\begin{cases}
>+\infty \qquad &B > 0 \\
>0\qquad &B < 0
>\end{cases}
>\end{flalign}$$
>
> #### Casi speciali
> $$\begin{align}a_n,b_n \to+\infty \qquad &a_n - b_n \to ? &&\infty-\infty\\
> a_n \to 0\qquad b_n \to +\infty\quad&a_nb_n\to?\quad &&0\cdot\infty \\
> a_n,b_n\to\infty\qquad&\frac{a_n}{b_n} \to?\quad &&\frac\infty\infty\\
> a_n,b_n\to 0\qquad &\frac{a_n}{b_n}\to ?&&\frac{0}{0} \\
> a_n\to 1\quad b_n \to \infty\qquad &a_n^{b_n}\to ?&&1^\infty\\
> a_n\to0\quad b_n\to 0\qquad&a_n^{b_n}\to?&&0^0\\
> a_n\to\infty\quad b_n\to0\qquad&a_n^{b_n}\to?&&\infty^0 
> \end{align}$$

