---
aliases: 
creation date: 2023-03-30 18:47
modification date: 2023-03-30 18:47
---

# Progetto del controllore in retroazione
(SD LTI a TC [[SISO]] nelle ipotesi di Bode)

Schema:
```tikz
\begin{document}
\begin{tikzpicture}[scale = 2]
\node (t) at (.5,0){$\bullet$};
\draw[-latex] (0,0) -- (t.center);
\draw[-latex] (t.center) -- (1,0);
\draw (1,-.25) rectangle (1.5,.25) node[midway]{R};
\draw (1.5,0) -- (2,0) node[midway, above]{$u$};
\draw (2,-.25) rectangle (2.5,.25) node[midway]{P};
\node (da) at (3,0){$\bullet$};
\draw[-latex] (2.5,0) -- (da.center);
\draw[latex-] (da.center) -- ++ (0,0.5)node[midway,left]{$da$};
\draw[-latex] (da.center) -- ++ (1,0) node[above]{$y$};
\end{tikzpicture}
\end{document}
```

#todo %%schema del controllore in retroazione%%

| Cosa c'è nei segnali di ingresso | componenti canoniche </br> [[Trasformata di Laplace|TDL]] del tipo $k/s^n$ |  sinusoidi   | rumore |
|:--------------------------------:|:-----------------------------------------------:|:------------:| ------ |
|               $w$                |             $\checkmark$ no [[impulso]]             | $\checkmark$ | X^[1]      |
|             $d_{a}$              |                  $\checkmark$                   | $\checkmark$ |    X    |
|             $d_{r}$              |           X al piú sporadici impulsi            | $\checkmark$ |     $\checkmark$   |

Con sinusoidi e rumore componenti armoniche

---
[^1]: [[modulo]] che non venga da un altra misura




## Fasi del progetto

### 1. Progetto statico (PS)

Assumo che il sistema in anello chiuso sia asintoticamente stabile (lo proveremo poi)

### 2. Progetto dinamico (PD)