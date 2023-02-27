Ss# Limiti notevoli
### Limiti notevoli di seno e coseno
Nel calcolare $\lim_{x\to0^+}\frac{\sin x}{x}$ si presenta la forma di indecisione $\frac{0}{0}$ vogliamo dimostrare che
$$\begin{equation}
\framebox{$\lim_{x\to0}\frac{\sin x}{x} =1$} \tag{Lim1}
\end{equation}$$
Osserviamo subito che, essendo $\sin x$ e $x$ funzioni dispari, $\frac{\sin x}{x}$ è pari, quindi è sufficiente calcolare il $\lim_{x\to0^+}\frac{\sin x}{x}$ , per dimostrare questo limite dobbiamo ricorrere alla [[circonferenza unitaria]]

![[6BA62732-5C43-45B8-8269-87BF87E49E51.jpeg|300]]

Si osservi come l'area del triangolo OPA è minore di quella del settore circolare OPA che è a sua volta minore di OTA, otteniamo quindi che: 
$$\frac{1}{2}\cdot1\cdot\sin x \leq \frac{1}{2}\cdot1\cdot x\leq\frac{1}{2}\cdot1\cdot\tan x$$
Quindi 
$$\sin x < x <\tan x$$
Dividendo per $\sin x$ che è positivo essendo $x \in \left(0,\frac{\pi}{2}\right)$ Si ha
$$1 < \frac{x}{\sin x} < \frac{1}{\cos(x)} \quad\forall x \in \left(0,\frac{\pi}{2}\right)$$
e infine, passando ai reciproci otteniamo:
$$\cos x < \frac{\sin x}{x} < 1$$
Dal teorema del confronto essendo $\lim_{x\to0}\cos x = 1$ otteniamo la $\text{(Eq1)}$

Proviamo ora che
	$$\fbox{$\lim_{x\to0}\frac{1-\cos x}{x^2} = \frac{1}{2}$} \tag{Lim2}$$
$$\frac{1-\cos x}{x^2}=\frac{1-\cos^2 x}{x^2(1+\cos x)} = \left(\frac{\sin x}{x}\right)^2\frac{1}{1+\cos x}\to\frac{1}{2}$$
Perchè $\frac{\sin x}{x} \to 1$ e $1 + \cos x \to 2$

### limiti notevoli di $e$
Sappiamo già che per ogni [[successione]] $\{a_n\}$ divergente a $\pm\infty$ si ha che
$$\lim\left(1+\frac{1}{a_n}\right)^{a_n} = e$$
Che, per la definizione successionale di limite implica che
$$\fbox{$\left(1+\frac{1}{x}\right)^x\to e$ per $x\to\pm\infty$}\tag{Lim3}$$
Da questo limite possiamo ottenerne alcuni altri
Passiamo ad esempio ai logaritmi nel $\text{Lim3}$
$$\log \left(1+\frac{1}{x}\right)^x =x\log\left(1+\frac{1}{x}\right)\to \log e = 1\text{  per  } x\to+\infty$$
Se poniamo $y = \frac{1}{x}, x\to\pm\infty$ equivale a $y \to 0^\pm$ e possiamo riscrivere l'ultimo limite come

$$\fbox{$\frac{\log(1+y)}{y}\to1\quad$se$\quad y\to 0$} \tag{Lim4}$$

Se nel $\text{Lim4}$ invece poniamo $y = e^x-1$, allora $y\to0$ equivale a $x \to 0$ e sostituendo si ricava
$$\frac{\log(e^x)}{e^x-1} = \frac{x}{e^x-1}\to1\text{  se  } x \to 0$$
Riscrivendo:
$$\fbox{$\frac{e^x-1}{x}\to1\quad$ se $\quad x\to 0$}\tag{Lim5}$$
Infine se nel $\text{Lim4}$ poniamo $y = (1+x)^\alpha-1$, con $\alpha \in R$, allora $x \to 0$ equivale ad $y \to 0$ e si ha:
$$\begin{flalign}
\frac{\log(1+y)}{y} &= \frac{\log[1+(1+x)^\alpha-1]}{(1+x)^\alpha-1} =\frac{\alpha\log(1+x)}{(1+x)^\alpha-1} = \\
&=\frac{\alpha x}{(1+x)^\alpha-1}\cdot\frac{\log(1+x)}{x}\to1
\end{flalign}
$$
E poichè anche $\frac{\log(1+x)}{x} \to 1$ deduciamo che:
$$\tag{Lim6} \fbox{$\lim_{x\to0}\frac{(1+x)^\alpha-1}{x}=\alpha$} $$

I limiti notevoli si possono esprimere anche usando il simbolo di equivalenza [[asintotico]]


## [[O piccolo]]
Dalla conoscenza di O piccolo possiamo portare i limiti notevoli ad un nuovo livello, infatti poter passare da tendenze e stime asintotiche al simbolo $=$ è di vitale importanza, questo simbolo infatti ci permette di fare molte più operazioni e deduzioni rispetto ai precedenti.

>[!esempio]
>Per $x \to 0$
>$$\begin{align}
>&\sin x \sim x \Longrightarrow \sin x = x + o(x)\\
>&1 - \cos x \sim \frac{1}{2}x^2 \Longrightarrow 1 - \cos x = \frac{1}{2}x^2+ o(x^2)
>\end{align}$$
Su quest'ultimo caso possiamo riflettere più approfonditamente adesso, e dire quindi che
$$\cos x = 1 - \frac{1}{2}x^2 + o(x^2)$$
Dire invece $\cos x \sim 1 - \frac{1}{2}x^2$ è equivalente a dire che $\cos x \to 1$ visto che $x \to 0$


Questo ci porta alle [[formule di Taylor-MacLaurin]]
