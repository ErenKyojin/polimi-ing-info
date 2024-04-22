Data una serie di potenze reali $\sum \frac{a_{n}}(x-x_{0})^n$ si verifica sempre:
1. raggio di convergenza nullo: la serie di convergenza converge solo in $x=x_{0}$
2. raggio di convergenza $\infty$: la serie converge assolutamente su tutto $\mathbb{R}$
3. raggio di convergenza $0 < R < \infty$: esiste $R > 0$ tale che:
	1. La serie converge assolutamente $\forall x:$
	   $$ |x-x_{0}| < R $$
	2. La serie non converge per $|x-x_{0}| > R$

>[!remark]
>Questo teorema non dice nulla su $|x-x_0|=R$
>
>
>
>```tikz
\begin{document}
\tikz{
\draw (-5,0) -- (5,0);
\draw[red] (-2,0)node[above,gray]{$x_{0}-r$} -- node[above,gray]{$x_{0}$}(2,0)node[above, gray]{$x_{0}+r$};
}
\end{document}
>```


## Calcolo del raggio di convergenza:
1. Se il seguente limite esiste (anche $0$ o $+\infty$)
   $$ R = \lim_{ n \to \infty } \left|\frac{a_{n}}{a_{n+1}}\right| = \lim_{ n \to \infty } \frac{|a_{n}|}{|a_{n+1}|} = \frac{1}{l}$$
   
   o
2. Se il seguente limite esiste (anche $0$ o $+\infty$)
   $$ R = \lim_{ n \to \infty } \frac{1}{\sqrt[n]{ |a_{n}| }} = \frac{1}{l} $$
Allora la serie di partenza ha raggio di convergenza $R$

>[!dim]
>La serie di potenze converge assolutamente in $\overline{x} \in \mathbb{R} \iff$ la serie numerica 
> $$ \sum_{n=0}^\infty |a_{n}| |\overline{x}-x_{0}|^n$$
> converge.
> È una serie numerica a termini positivi, quindi posso utilizzare il [[polimi-ing-info/2.1 Analisi 2/criterio del rapporto]] ed il [[polimi-ing-info/2.1 Analisi 2/criterio della radice]]



>[!remark]
>Raggio di convergenza $R=2$ sicuramente la serie converge in $(-2,2)$
>$x=2,x=-2$ studiati a parte
