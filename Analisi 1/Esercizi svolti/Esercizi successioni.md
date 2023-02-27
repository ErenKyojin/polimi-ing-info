# limiti di successioni

Per questo genere di esercizi consideriamo 3 esempi 


>[!Esempio]
>$$\lim_{ n \to \infty } \frac{n^{3}\log^{5} n-n^{2}-1}{2n^{3}+\log n +\frac{1}{n^{7}}+2}$$
Per risolvere questo tipo di limiti è sufficiente raccogliere gli infiniti di gerarchia maggiore al numeratore e al denominatore, in questo caso $n^{3}$
>
>$$\lim_{ n \to \infty } \frac{n^{3}\log^{5}n\left( 1 -\frac{n^{2}}{n^{3}\log^{5}n}-\frac{1}{n^{3}\log^{5}n} \right) }{2n^{3} \left( 1+\frac{\log n}{2n^{3}}+\frac{1}{2n^{10}}+\frac{2}{n^{3}}  \right) }\sim \lim_{ n \to \infty } \frac{\cancel{ n^{3} }\log^{5}n}{2\cancel{ n^{3} }} = \fbox{$\lim_{ n \to \infty }\frac{\log^{5}n}{2}=+\infty$}$$ 


>[!esempio]
>$$\lim_{ n \to \infty } \left( \frac{n^{4}+5n^{2}}{n^{4}+3n+2} \right)^{3n} $$
>Abbiamo una forma di indecisione di tipo $1^{\infty}$, spesso queste forme di indecisioni si risolvono con qualcosa di relativo ad $e$, che è definito come $\lim_{ a_{n} \to \infty }\left( 1+\frac{1}{a_{n}} \right)^{a_{n}}$ con $a_{n}$ qualsiasi successione che tende a $+\infty$, vogliamo ricondurci quindi a qualcosa di simile.
>In questo caso:
>$$\begin{align}
>
>    &\lim_{ n \to \infty } \left( 1+\frac{n^{4}+5n^{2}}{n^{4}+3n+2} -1 \right)^{3n} = \lim_{ n \to \infty } \left( 1 + \frac{n^{4}+5n^{2}-n^{4}-3n-2}{n^{4}+3n+2} \right)^{3n} = \\
>&\lim_{ n \to \infty } \left[\left( 1 + \frac{5n^{2}-3n-2}{n^{4}+3n+2} \right)^{\frac{n^{4}+3n+2}{5n^{2}-3n+2}}\right]^{3n \cdot \frac{5n^{2}-3n-2}{n^{4}+3n+2}} \sim \lim_{ n \to \infty } e^{1/n^{}} =0
>\end{align}
>$$