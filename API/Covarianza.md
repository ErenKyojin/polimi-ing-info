---
aliases: 
creation date: 2023-03-30 13:12
modification date: 2023-03-30 13:12
---

Coefficiente di correlazione lineare

>[!def]
>Se $x,y$ che hanno varianza $\var(x), \var(y)$
 >la $\cov(x,y)$ è il numero
>$$ E[(x,\mu x)(y-\mu y)] - \begin{cases}
>\text{ dsg } \sum_{x}\sum_{y}(x-\mu_{x})(y - \mu_{y})f_{x,y}(,y) \\
>\text{os cont } \iint_{\mathbb{R}^2}(x - \mu x)(y - mu) f_{x,y}(x,y) \mathrm{d}x\mathrm{d}y
>\end{cases} $$


## Proprietà
1. $\cov(x,y) = \cov(y,x)\quad ;\quad \cov \text{ è simmetrica}$
2. $\cov(x,x) = \var(x)$
3. $\cov(x,c) = E[(x-\mu x)(c - c)] = 0$ con $c$ costante
4. $\cov(ax,by)= E[(ax - a\mu x)(by-b\mu y)]=E[(x - \mu x)(y - \mu y)]ab = ab\ \cov(x,y)$
5. $\cov(ax, by + W) = E[a(x-\mu x)(by + W - bE(y) - E(W))] = aE[(x-\mu x)(b(y-\mu Y) + (W - \mu W))]$
   $= ab\ \cov(x,y) + a\cov(x,w)$
   Quindi $\cov(x,y)$ è un operatore bilineare
   
6. $E[(x-\mu x)(y - \mu y)] = E[xy - x\mu_{y} - \mu_{x}y + \mu_{x}\mu_{y}] = E(xy) - \mu_{y}E(x) - \cancel{ \mu_{x}E(y) } + \cancel{ \mu_{x}\mu_{y} }$
   quindi $\cov(x,y) = E(x,y) - E(x)E(y)$

## Difetti della covarianza come misura di interazione

$x =$ altezza in $m$ $\implies$ $\hat{x} =$altezza in $cm$
$y =$ peso in $kg \implies \hat{y} =$ peso in $hg$

$\cov(\hat{x},\hat{y}) = cov(100x,10y) = 1000\cov(x,y)$
covarianza non è ridotta rispetto a $c$ cambiamenti di scala $\implies$ riscalo
$$ \cov\left( \frac{x-\mu_{x}}{\sigma_{x}} , \frac{y-\mu y}{\sigma_{y}}\right)= \frac{1}{\sigma_{x}\sigma_{y}}\left[ \cov(x_{\gamma}y - \mu_{y} )+ \cov(-\mu_{x}, y-\mu_{y}) \right]  = \frac{\cov(x+y)}{\sigma_{x}\sigma_{y}}$$

$\rho(x,y)$ è detto [[coefficiente di correlazione lineare]]

```tikz
\documentclass[border=5mm]{standalone}
\usepackage{pgfplotstable} % loads pgfplots as well
\usepgfplotslibrary{groupplots}
\pgfplotsset{compat=1.11}

\pgfplotstableread{
x1  y1  x2  y2  x3  y3  x4  y4
10.0    8.04    10.0    9.14    10.0    7.46    8.0 6.58
8.0 6.95    8.0 8.14    8.0 6.77    8.0 5.76
13.0    7.58    13.0    8.74    13.0    12.74   8.0 7.71
9.0 8.81    9.0 8.77    9.0 7.11    8.0 8.84
11.0    8.33    11.0    9.26    11.0    7.81    8.0 8.47
14.0    9.96    14.0    8.10    14.0    8.84    8.0 7.04
6.0 7.24    6.0 6.13    6.0 6.08    8.0 5.25
4.0 4.26    4.0 3.10    4.0 5.39    19.0    12.50
12.0    10.84   12.0    9.13    12.0    8.15    8.0 5.56
7.0 4.82    7.0 7.26    7.0 6.42    8.0 7.91
5.0 5.68    5.0 4.74    5.0 5.73    8.0 6.89
}\tableLabel


\newcommand\MakeRegression[7][\tableLabel]{%
    % #1: original datatable
    % #2: x-column
    % #3: y-column
    % #4: name of new regression column
    % #5: macro to store slope in
    % #6: macro to store intercept in
    % #7: macro to store R squared

    % create the regression column:
    \pgfplotstablecreatecol[linear regression={x=#2,y=#3}]{#4}{\tableLabel}
    % store slope and intercept
    \edef#5{\pgfplotstableregressiona}
    \edef#6{\pgfplotstableregressionb}

    % calculate sum of y
    \pgfplotstablecreatecol[create col/expr={\pgfmathaccuma+\thisrow{#3}}]{tmp}{\tableLabel}

    % find number of rows in table
    \pgfplotstablegetrowsof{\tableLabel}
    \pgfmathtruncatemacro{\lastrow}{\pgfplotsretval-1}

    % get total sum of y
    \pgfplotstablegetelem{\lastrow}{tmp}\of\tableLabel

    % calculate mean
    \pgfmathsetmacro{\yMean}{\pgfplotsretval/(\lastrow+1)}

    % calculate residuals and diff from mean
    \pgfplotstablecreatecol[
      create col/assign/.code={
           \pgfmathparse{(\thisrow{#3}-\thisrow{#4})^2}
           \edef\entry{\pgfmathresult}
           \pgfkeyslet{/pgfplots/table/create col/next content}\entry
        }
    ]{residuals}{\tableLabel}
    \pgfplotstablecreatecol[
      create col/assign/.code={
           \pgfmathparse{(\thisrow{#3}-\yMean)^2}
           \edef\entry{\pgfmathresult}
           \pgfkeyslet{/pgfplots/table/create col/next content}\entry
        }
    ]{diffmean}{\tableLabel}

    % calculate sum of residuals and diff from mean
    \pgfplotstablecreatecol[create col/expr={\pgfmathaccuma+\thisrow{residuals}}]{sumres}{\tableLabel}
    \pgfplotstablecreatecol[create col/expr={\pgfmathaccuma+\thisrow{diffmean}}]{sumdiff}{\tableLabel}

    % extract SS_res and SS_tot
    \pgfplotstablegetelem{\lastrow}{sumres}\of\tableLabel
    \pgfmathsetmacro{\SSres}{\pgfplotsretval}
    \pgfplotstablegetelem{\lastrow}{sumdiff}\of\tableLabel
    \pgfmathsetmacro{\SStot}{\pgfplotsretval}

    % calculate R^2
    \pgfmathsetmacro{#7}{1-\SSres/\SStot}
}

% use macro
\MakeRegression{x1}{y1}{reg1}{\SlA}{\IntA}{\RsqA}
\MakeRegression{x2}{y2}{reg2}{\SlB}{\IntB}{\RsqB}
\MakeRegression{x3}{y3}{reg3}{\SlC}{\IntC}{\RsqC}
\MakeRegression{x4}{y4}{reg4}{\SlD}{\IntD}{\RsqD}

% for easier formatting of legends
\newcommand\LegendEntry[3]{%
$\pgfmathprintnumber{#1}
  \cdot x 
 \pgfmathprintnumber[print sign]{#2}$,
   $R^2 = \pgfmathprintnumber{#3}$%
}

\begin{document}
\begin{tikzpicture}
\begin{groupplot}[
  group style={
    group size=2 by 2,
  }
]

\nextgroupplot[legend pos=north west]
\addplot +[mark=none] table [x=x1, y=reg1] {\tableLabel};
\addplot +[only marks] table [x=x1, y=y1]  {\tableLabel};   

\addlegendentry{\LegendEntry{\SlA}{\IntA}{\RsqA}}
\addlegendentry{y1}

\nextgroupplot[legend pos=south east]
\addplot +[mark=none] table [x=x2, y=reg2] {\tableLabel};
\addplot +[only marks] table [x=x2, y=y2]  {\tableLabel};   

\addlegendentry{\LegendEntry{\SlC}{\IntB}{\RsqB}}
\addlegendentry{y2}

\nextgroupplot[legend pos=north west]
\addplot +[mark=none] table [x=x3, y=reg3] {\tableLabel};
\addplot +[only marks] table [x=x3, y=y3]  {\tableLabel};   

\addlegendentry{\LegendEntry{\SlC}{\IntC}{\RsqC}}
\addlegendentry{y3}

\nextgroupplot[legend pos=south east]
\addplot +[mark=none] table [x=x4, y=reg4] {\tableLabel};
\addplot +[only marks] table [x=x4, y=y4]  {\tableLabel};   

\addlegendentry{\LegendEntry{\SlD}{\IntD}{\RsqD}}
\addlegendentry{y4}


\end{groupplot}
\end{tikzpicture}
\end{document}
```