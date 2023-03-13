---
aliases: 
creation date: 2023-03-13 12:46
modification date: 2023-03-13 12:46
---

Sono sistemi ottenuti componendoni altri e li rappresentiamo con schemi a blocchi SB GHU da

Blocchi
```tikz
\begin{document}
\begin{tikzpicture}
\draw (0,0) -- (1,0) -- (1,1) -- (0,1) -- (0,0); 
\draw[->] (-.95,0.5) -- (0,0.5);
\draw[->] (2.05, 0.5) -- (1.05,0.5);
\end{tikzpicture}
\end{document}
```

$\large D


Problema

```tikz
\begin{document}
\begin{tikzpicture}
\draw (0,0) circle(2);
\draw (0,0) -- (0,1) -- (1,1) -- (1,0) -- (0,0);
\draw[->]  (-3,1)node[left]{$u1,u2,...,u_n$} -- (-2,0);
\draw[->] (2,0) -- (3.2,-1.5) node[below]{$y1,y2,...,y_n$};
\node at (.5,.5){$G(s)$};
\end{tikzpicture}
\end{document}
```

Ipotesi,  tutti i blocchi sono Raggiungibili e osservabili, ossia privi di parti nascoste, ovvero tutte le loro Funziolni di trasferimento hanno num e denominatore coprimi

domande:
come ottengo generica FdT
Che relazione c'è tra stabilità delle singole fdt dei blocchi
posto che i singoli blocchi non hanno p nascosto, il sistema complessio puó averne



#todo
Ora scriviamo $G_{1} = \frac{N_{1}}{D_{1}}, G_{2} = \frac{N_{2}}{D_{2}}$ con $N,D$ polinomi
$$
G = G_{2}G_{1} = \frac{N_{2}N_{1}}{D_{2}D_{1}}\qquad \begin{align}
N_{i}\text{ e }D_{i} \text{ sono per ip.?} \\
N_{j} \text{ e } D_{j} \text{ non è detto}
\end{align} 
$$

Quindi gli autovalori del sistema complesivo sono i poli di G1 uniti ai poli di G2
Ma possono esserci tra $N_{1}$ e $D_{2}$
 e o tra $N_{2}$ e $D_{1}$
 - $G_{1}$ e $G_{2}$