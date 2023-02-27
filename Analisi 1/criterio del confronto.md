# criterio del confronto
Siano $\sum a_n$ e $\sum b_n$ due serie a termini non negativi tali che
$$a_n \leq b_n\qquad\text{definitivamente}$$
Allora valgono le seguenti implicazioni:
$i)\ \sum b_n \text{ convergente }\Longrightarrow \sum a_n  \text{ convergente}$
$ii)\sum a_n \text{ divergente } \Longrightarrow \sum b_n \text{ divergente }$

Inoltre la serie $b_n$ viene detta maggiorante, la serie $a_n$ viene detta minorante

>[!dim]
>Sia $$s_n = \sum_{k=1}^na_k;\qquad s_n^*=\sum_{k=1}^n b_k$$
>Essendo $0\leq a_k \leq b_k$ per ogni $k$, sommando a membro a membro le disuguaglianze 
>per $k$ da $1$ a $n$, si ottiene $0\leq s_n \leq s_n^*$.
>Essendo una serie a termini positivi o convergente o divergente (non può oscillare) le affermazioni $i)$ e $ii)$ sono equivalenti, quindi ci basta dimostrare la $ii)$  che è immediata, dire infatti che $\sum_{n=1}^\infty a_n$ diverge significa, per definizione di serie divergente, che $s_n \to+\infty$.
>Ma essendo $s_n\leq s_n^*$ per il teorema del confronto per le successioni anche $s_n^*\to+\infty$,  quindi $\sum_{n = 1}^\infty b_n$ diverge


# criterio del confronto [[asintotico]]
Se le due successioni a termini positivi $\{a_n\},\{b_n\}$ sono asintotiche
$$a_n \sim b_n$$
Allora le corrispondenti serie $\sum a_n,\sum b_n$ hanno lo stesso carattere, ossia sono entrambe convergenti o divergenti
>[!esempio]
> - La serie $\sum_{n = 1}^\infty\frac{1}{n^2}$ converge in quanto $\frac{1}{n^2}\sim\frac{1}{n(n+1)}$ e la [[serie notevoli|serie di mengoli]] $\sum \frac{1}{n(n+1)}$ converge.
> - La serie $\sum \frac{1}{n^\alpha}$ con $\alpha \geq 2$ converge per il criterio del confronto, infatti $\frac{1}{n^\alpha} \leq \frac{1}{n^2}$ e $\sum \frac{1}{n^2}$ converge, sappiamo quind il carattere della serie armonica per $\alpha \leq 1$ (divergente) e per $\alpha \geq 2$ (convergente), si può infine dimostrare che per $1<\alpha<2$ converge, quindi
> $$\sum \frac{1}{n^\alpha}\text{ converge se $\alpha > 1$, diverge se $\alpha \leq 1 $}$$

>[!dim]
>Dire che $a_n \sim b_n$ per $n\to\infty$ significa che $\frac{a_n}{b_n} \to 1$ per $n\to\infty$, quindi per ogni $\varepsilon > 0$ sia definitivamente $1 - \varepsilon < \frac{a_n}{b_n} < 1+\varepsilon$, ad esempio (scegliendo ad esempio $\varepsilon = \frac{1}{2}$) che sia
>$$\frac{1}{2} < \frac{a_n}{b_n} < \frac{3}{2}$$
>Essendo per ipotesi $b_n>0$ possiamo:
>$$\frac{1}{2}b_n < a_n < \frac{3}{2}b_n$$
>La prima disuguaglianza implica che se $\sum a_n$ converge anche $\sum b_n$ converge, la seconda che se $\sum a_n$ diverge anche $\sum b_n$ diverge.

# criterio del confronto [[integrale]] al finito
Se $0 \leq f(x) \leq g(x)$ in $[a,b)$ allora
$$
\begin{align}
g\quad \text{integrabile}\quad &\Longrightarrow\quad f\quad \text{integrabile} \\ \\
f\quad\text{non integrabile}\quad&\Longrightarrow\quad g\quad \text{non integrabile}
\end{align}
$$

infatti per la proprietà di monotonia dell'integrale si ha:
$$
0 \leq \int_{a}^{b-\varepsilon} \! f(x) \, \d x \leq \int_{a}^{b-\varepsilon} \! g(x) \, \d x 
$$
si prova la tesi passando al limite per $\varepsilon \to 0^{+}$

## criterio del confronto asintotico integrale al finito
Se $f > 0, g>0$ ed $f \sim g$ per $x \to b^-$ allora
$$
\fbox{$ f\quad\text{integrabile}\qquad \Longleftrightarrow\qquad g\quad \text{integrabile} $}
$$
Analoghi criteri valgono se $f,g \to +\infty$ per $x \to a^{+}$, o se $f,g \to -\infty$. In questo ultimo caso le disuguaglienza del criterio del confronto devono valere tra i moduli di $f,g$


# criterio del confronto [[integrale]] all'infinito
Siano $f,g : [a,+\infty)\to \mathbb{R}$ continue.
se $0 \leq f(x) \leq g(x)$ in $[a,+\infty)$ allora

$$
\fbox{$ \begin{align}
g\quad\text{integrabile}\qquad&\Longrightarrow\qquad f\quad\text{integrabile} \\ \\
f\quad\text{non integrabile}\quad&\Longrightarrow\qquad g\quad\text{non integrabile}
\end{align} $}
$$
### confronto asintotico
se $f>0,g>0$ ed $f \sim g$ per $x \to +\infty$ allora
$$
\fbox{$ f\quad\text{integrabile}\quad \Longleftrightarrow\quad g\quad \text{integrabile}$}
$$
