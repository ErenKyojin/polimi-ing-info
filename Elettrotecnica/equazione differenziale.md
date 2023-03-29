---
aliases: equazioni differenziali
---

# Accenni alle equazioni differenziali
Considerando solo le equazioni differenziali di nostro interesse, come nel [[circuito RC]]
$$\frac{d}{dt}x(t)= \lambda\\x(t) + u(t)$$
$$\frac{d}{dt}x(t) = \lambda\\x(t) + \sum_{n = 1}^ku_k(t)$$
i risultati di questa equazione differenziale è la somma di una qualsiasi dell'insieme delle funzioni $x_{OA}(t;k,t_o)$ che risolvono l'equazione omogenea associata
$$\frac{d}{dt}x_{OA}(t;k,t_0) = \lambda\\x_{OA}(t;k,t_0)$$
con una funzione $x_{IP}(t)$ chiamata <u>integrale particolare</u> che risolve la prima

La soluzione finale sarà del tipo
$$x(t;k,t_0) = ke^{\lambda(t-t_0)} + x_{IP}(t)$$

### determinazione di $x_{IP}$
$x_{IP}$ è la più complessa da identificare, a noi ci basta sapere che
$$
\begin{cases}
u(t) && \rightarrow &&x_{IP} \\
\text{cost} && \rightarrow && H\text{ cost}\\
\alpha e^{\lambda(t-t_0)} &&\rightarrow &&\gamma e^{\beta(t-\overline{t})} \\
\sum_{k=0}^N\alpha_k(t-\overline{t})^k && \rightarrow && \sum_{k=0}^N\gamma_k(t-\overline{t})^k \\
\alpha\cos(\omega t + \varphi) && \rightarrow && \beta\cos(\omega t) + \gamma\sin(\omega t)
\end{cases}
$$

### asintotica stabilità
$$x(t) = Ke^{\lambda(t-t_0)}+x_{ip}(t) \text{ con } x_{ip}(t) = \sum_{n=1}^k x_{ip_{n}}$$

se $\lambda < 0$ => $x(t)\longrightarrow_{t\rightarrow\infty}x_{ip}(t)$

$u(t) = 0$
1. $x_0 = x(t_0)\ \ \ \ \ \ \ \ \ \ \ \ \ x_{DA}^1 = X_0 e^{\lambda (t-t_0)}$
2. $x_0+d = x(t_0)\ \ \ \ \ \ \ \ \ \ \ \ \ x_{OA}^2 = (x+d)e^{\lambda(t-t_0)}$



La classe di equazioni differenziali di nostro interesse è quindi
$$\frac{d}{dt} x(t) = \lambda(t)x(t) + \sum_{h=1}^nu_h(t)$$
con
$$
\begin{cases}
\lambda(t) \text{ costante a tratti} \\
u_h(t) \text{ limitata e continua a tratti}
\end{cases}
$$

quindi dobbiamo trovare le condizioni iniziali di ogni intervalo temporale definito e risolvere il circuito per quello specifico intervallo temporale

se $y(t)$ non è variabile di stato
$$y(t) = \alpha x(t) + \sum_h^n\beta_hu_h(t) \Rightarrow y(t) \text{ al più discontinua come gli ingressi}$$