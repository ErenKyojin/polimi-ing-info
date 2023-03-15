---
aliases: <% tp.file.cursor(0) %>
creation date: 2023-03-15 09:32
modification date: 2023-03-15 09:32
---
<% tp.file.cursor(1) %>



$$
X \sim N(\mu,\sigma^2): f_{X}(X) = \frac{1}{\sqrt{ 2\pi \sigma^2 }}e^{-(x-\mu)^2/(2\sigma^2)}
$$

```tikz
\usepackage{pgfplots}
\begin{document}
\begin{tikzpicture}
\begin{axis}
\addplot{gauss(0,0.5)};
\end{axis}
\end{tikzpicture}
\end{document}
```

