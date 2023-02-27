# Infiniti ed infinitesimi
>[!def]
>si dice infinito ogni successione $a_n \to \pm \infty$
>si dice infinitesimo ogni successione $a_n\to 0$

## Confronto di infiniti
$\{a_n\},\{b_n\} \to \infty$

$$\lim\frac{a_n}{b_n} = \begin{cases}
+\infty&\Leftrightarrow &a_n \text{ infinito di ordine maggiore rispetto a }b_n \\
L \neq0 &\Leftrightarrow &a_n, b_n \text{ infiniti dello stesso ordine}\\
0 &\Leftrightarrow &a_n \text{ infinito di ordine minore rispetto a } b_n \\
\nexists &\Leftrightarrow &a_nb_n\text{ infiniti non confrontabili }

\end{cases} $$
>[!Esempio] infiniti non confrontabili
>$a_n = n^2(2+\sin n)$
>$b_n = n^2+2$
>$$\lim\frac{a_n}{b_n} = \lim\frac{n^2\mspace{-13mu}/(\overbrace{2+\sin n}^\text{oscillante})}{n^2\mspace{-15mu}/\left(\underbrace{1+\frac{2}{n^2}}_1\right)} = \nexists$$

## Confronto di infinitesimi
$\{a_n\},\{b_n\}\to0$
$$\begin{flalign}
\lim\frac{a_n}{b_n}
\begin{cases}
\pm\infty &\Leftrightarrow \quad &a_n \text{ infinitesimo di ordine inferiore a }b_n\\
L \neq 0 &\Leftrightarrow \quad &a_n,b_n \text{ infinitesimi dello stesso ordine} \\
0 &\Leftrightarrow \quad &a_n \text{ infinitesimo di ordine maggiore a } b_n \\
\nexists &\Leftrightarrow &a_n,b_n \text{ infinitesimi non confrontabili}
\end{cases}
\end{flalign}
$$

# Misurare infiniti ed infinitesimi
> [!def] infinito campione
> $C_n = \{n\}$

>[!def] infinitesimo campione
>$c_n =\{n\}$

$$\lim \frac{a_n}{C_n^\alpha} = L \neq 0 \text{ e finito}$$
Allora $\alpha$ è l'ordine della successione $a_n$
>[!esempio]
>$a_n = \{\sqrt{n^7+n-\sin n}\}$
>$\lim a_n= +\infty$
>$$\lim \frac{a_n}{n^\alpha} = \lim\frac{n^\frac{7}{2}\sqrt{1 +\frac{1}{n^\alpha}-\frac{\sin n}{n^7}}}{n^\alpha} =
>\begin{cases}
>+\infty\quad &\alpha > \frac{7}{2}\\
>1&\alpha = \frac{7}{2}\\
>0&\alpha < \frac{7}{2}
>\end{cases}$$ 


- Per dire che due infiniti sono dello stesso ordine si usa l'[[asintotico]]
- Per confrontare due infiniti si utilizza la nomenclatura [[o piccolo]]

# Teoria degli infiniti

$\forall a > 1$
$\forall \alpha > 0$
$$\begin{flalign}
&\lim \frac{\log_2n}{n^\alpha} = 0\longrightarrow\text{infinito di log di ordine sempre minore di una potenza di n}\\
&\lim\frac{n^\alpha}{a^n} = 0\longrightarrow\text{infinito di esponenziale di ordine sempre maggiore di qualsiasi potenza}

\end{flalign}$$

>[!dim]
>$\log_ax < x\log_a2\quad x=n^\frac{\alpha}{2}$
>$\log_a n^\frac{\alpha}{2} < n^\frac{\alpha}{2}\log_a2$
>$$\frac{\alpha}{2}\log_an < n^\frac{\alpha}{2}\log_a2\to\frac{\log_an}{n^\frac{\alpha}{2}}<\frac{2}{\alpha}\log_a 2 \quad\xrightarrow{\frac{1}{n^{\alpha}/2}}\quad 0 < \frac{\log_an}{n^\alpha}<\frac{\frac{2}{\alpha}\log_a2}{n^\frac{\alpha}{2}}\to0$$
>Allora $\frac{\log_an}{n^\alpha}$ è maggiore di $0$ ma minore di qualcosa che tende a $0\Rightarrow\frac{\log_an}{n^\alpha} \to 0$

```desmos-graph
bottom = -5
left = -5
top = 100
right = 100
---
y = e^x
y = \ln(x)
y = x^2
```

>[!oss]
>$\forall a > 1\quad \lim\frac{a^n}{n!} = 0 \Rightarrow \lim n! > \lim a^n \quad\forall n$
>$\forall a > 1 \quad\lim\frac{n!}{n^n} = 0 \Rightarrow \lim n^n > \lim n! \quad\forall n$
>
>>[!Dim]


