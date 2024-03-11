---
aliases: 
creation date: 2024-03-11
---

Inizialmente proposta per i fenomeni di affaticamento, è stata espansa per modellare aspettative di vita, in particolare per sistemi che seguono il modello weaklink, ossia che smette di funzionare quando una sua componente più debole smette di funzionare

Ha funzione di distribuzione
$$ F(x) = \begin{cases}
0 & x \leq \nu \\
1 - e^{-[(x- \nu)/\alpha]^\beta}&x > \nu
\end{cases} $$

E, derivandola, troviamo la funzione di distribuzione
$$ f(x) = \begin{cases}
0 & x \leq \nu \\
\frac{\beta}{\alpha} \left( \frac{x-\nu}{\alpha} \right)^{\beta - 1} e^{[(x - \nu)/\alpha]^\beta} & x > \nu
\end{cases} $$