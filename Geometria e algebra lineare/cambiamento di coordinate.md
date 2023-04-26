>[!proposizione] 
>Sia $\mathcal{L} : V \to W$ applicazione lineare e $\mathcal{B}_{1},\mathcal{B}_{2}$ basi finite per $V$ e $\mathcal{C}_{1},\mathcal{C}_{2}$ basi finite per $W$. Allora posto $S = M_{\mathcal{B}_{1}}^{\mathcal{B}_{2}}(id_{V})$ e $T = M_{\mathcal{C}_{1}}^{\mathcal{C}_{2}}(id_{W})$ si ha che
>$$ M_{\mathcal{C}_{2}}^{\mathcal{B}_{2}}(\mathcal{L}) = T^{-1} \circ M_{\mathcal{C}_{1}}^{\mathcal{B}_{1}} \circ S $$
>
>>[!dim]
>>è sufficiente osservare che:
>> $$ \begin{align}
>> M_{\mathcal{C}_{2}}^{\mathcal{B}_{2}} (\mathcal{L}) &= M_{\mathcal{C}_{2}}^{\mathcal{B}_{2}}(id_{W} \circ \mathcal{L} \circ id_{V}) = \\
>>&= M_{\mathcal{C}_{2}}^{\mathcal{B}_{1}}(id_{W} \circ \mathcal{L}) \circ M_{\mathcal{B}_{1}}^{\mathcal{B}_{2}} (id_{V}) \\
>>&= M_{\mathcal{C}_{2}}^{\mathcal{C}_{1}}(id_{w} \circ \mathcal{L}) \circ M_{\mathcal{C}_{1}}^{\mathcal{B}_{1}}(\mathcal{L}) \circ M_{\mathcal{B}_{1}}^{\mathcal{B}_{2}}(id_{V}) \\
>>&= (M_{\mathcal{C}_{1}}^{\mathcal{C}_{2}}(id_{W}))^{-1} \circ M_{\mathcal{C}_{1}}^{\mathcal{B}_{1}}(\mathcal{L}) \circ M_{\mathcal{B}_{1}}^{\mathcal{B}_{2}}(id_{V}) \\
>>&= T^{-1} \circ M_{\mathcal{C}_{1}}^{\mathcal{B}_{1}}(\mathcal{L}) \circ S
>>\end{align} $$
>>I precedenti passaggisi possono riassumere col seguente diagramma, posto $A = M_{\mathcal{C}_{1}}^{\mathcal{B}_{1}}(\mathcal{L})$ e $A' = M_{\mathcal{C}_{2}}^{\mathcal{B}_{2}}(\mathcal{L})$ si ha
>> ```tikz
>> \usepackage{tikz-cd}
>> \usepackage{amsfonts}
>> \usepackage{amsmath}
>> \tikzcdset{scale cd/.style={every label/.append style={scale=#1}, cells={nodes={scale=#1}}}}
>> \begin{document}
>> \begin{tikzcd}[scale cd= 1.5, sep = huge]
>> &\mathbf{x}\quad\underset{\mathcal{B}_1}{\mathbb{K}^n} \arrow[r, "A"] \arrow[r, dashrightarrow,red, shift right=5ex]&\underset{\mathcal{C}_1}{\mathbb{K}^m}\quad\mathbf{y} \arrow[d, dashrightarrow,red, shift right=5ex]\\
>> &\mathbf{x}'\quad\underset{\mathcal{B}_2}{\mathbb{K}^n} \arrow[u,"S"] \arrow[r, "A' "] \arrow[u, dashrightarrow,red, shift right=5ex]&\underset{\mathcal{C}_2}{\mathbb{K}^m}\quad\mathbf{y}' \arrow[u, "T"]
>> \end{tikzcd}
>> $\to A\mathbf{x} = \mathbf{y}$
>> \end{document}
>> ```
>> $$ \underset{ \mathbf{y} = T \mathbf{y}' }{ \xrightarrow{\mathbf{x} = S \mathbf{x}'}} AS \cdot \mathbf{x} = T\mathbf{y}' \to \underbrace{ T^{-1}AS }_{ A }\cdot \mathbf{x}' = \mathbf{y}' \to A'\mathbf{x}' = \mathbf{y}'$$  
>> $$ \CVD $$



>[!oss]
>Sia $\mathcal{L} : V \to V$ applicazione lineare, supponiamo di scegliere la stessa base $\mathcal{B}$ su $V$ in dominio e codominio e di scegliere un altra base $\mathcal{B}'$ per $V$ su dominio e codominio. Allora
> $$\begin{align}
> M_{\mathcal{B}'}^{\mathcal{B}'} &= M_{\mathcal{B}'}^\mathcal{B} (id_{V})M_{\mathcal{B}}^\mathcal{B} (\mathcal{L}) M_{\mathcal{B}}^{\mathcal{B}'} \\ \\
> &S^{-1}M_{\mathcal{B}}^{\mathcal{B}}(\mathcal{L})S
\end{align}$$
>Quando viene scelta la stessa base $\mathcal{B}$ per dominio e codominio diciamo che $M_{\mathcal{B}}^\mathcal{B}(\mathcal{L})$ è la [[matrice rappresentativa]] di $\mathcal{L}$ rispetto a $\mathcal{B}$

>[!esempio]
>Sia $\mathcal{L} : \mathbb{R}^2 \to \mathbb{R}^2, \mathcal{B} = \left\{ \mathbf{b}_{1}, \mathbf{b}_{2} \right\} = \mathcal{C}$. Scrivere la matrice di rappresentazione di $\mathcal{L}$ tale che
> $$ \begin{align}
> &\mathcal{L}(\mathbf{b}_{1}) = 2 \mathbf{b}_{1} \\
>&\mathcal{L}(\mathbf{b}_{2}) = \mathbf{b}_{1} - \mathbf{b}_{2}
>\end{align} $$
>Rispetto a $\mathcal{B}$. Posto $\mathbf{b}_{1} = [1\quad2]^T = \mathbf{e}_{1} + 2\mathbf{e}_{2}$ e $\mathbf{b}_{2} = [2\quad 0]^T = 2\mathbf{e}_{1} + 0\mathbf{e}_{2}$ scrivere la matrice rappresentativa di $\mathcal{L}$ rispetto alla base canonica $\xi_{2}=\left\{ \mathbf{e}_{1}, \mathbf{e}_{2} \right\}$
>
>1. 
>   $$ \begin{cases}
>\mathcal{L}(\mathbf{b}_{1})=2\mathbf{b}_{1} + 0\mathbf{b}_{2} \\
>\mathcal{L}(\mathbf{b}_{2}) = 1\mathbf{b}_{1} \cdot \mathbf{b}_{2}
>\end{cases} \to A' = M_{\mathcal{B}}^{\mathcal{B}} (\mathcal{L}_{1}) = \begin{bmatrix}
>2 & 1 \\
0 & -1
>\end{bmatrix}$$
>
>2. Essendo 
> $$ \begin{align}
>\mathbf{b}_{1} = 1\mathbf{e}_{1} + 2\mathbf{e}_{2} \\
>\mathbf{b}_{2} = 2\mathbf{e}_{1} + 0\mathbf{e}_{2}
>\end{align} \to S = M_{\xi_{2}}^{\mathcal{B}_{2}}(id_{\mathbb{R}^2}) = \begin{bmatrix}
>1 & 2 \\
>2 & 0
>\end{bmatrix}$$
>calcoliamo $S^{-1}$ con l'[[Algoritmo di Gauss-Jordan]]
> $$ \begin{align}
>&\begin{bmatrix}
>1 & 2 & 1 & 0 \\
2 & 0 & 0 & 1
>\end{bmatrix} \xrightarrow{MEG} \begin{bmatrix}
>1 & 2 & 1 & 0 \\
0 & -4 & -2 & 1
>\end{bmatrix} \xrightarrow{MEG} \begin{bmatrix}
>2 & 0 & 0 & 1 \\
> 0 & -4 & -2 & 1
>\end{bmatrix} \\
> \to
>&\begin{bmatrix}
>1 & 0 & 0 & 1 / 2 \\
>0 & 1 & 1 / 2 & -1 /4
>\end{bmatrix} \implies S^{-1} = \begin{bmatrix}
>0 & 1/2 \\
>1/2 & -1/4
>\end{bmatrix}
>\end{align}$$
>Quindi $A = M_{\xi_{2}}^{\xi_{2}}(id_{\mathbb{R}^2}) = SA'S^{-1} =$
> $$= \begin{bmatrix}
> 1 & 2 \\
>2 & 0
>\end{bmatrix} 
>\begin{bmatrix}
>2 & 1 \\
>0 & -1
>\end{bmatrix}
>\begin{bmatrix}
0 & 1 / 2 \\
1/2 &1 / 4
\end{bmatrix} = \begin{bmatrix}
>-1/2 & 5/4 \\
>1 & 3/2
>\end{bmatrix}$$
>
> ```tikz
>\usepackage{tikz-cd}
>\usepackage{amsfonts}
>\usepackage{amsmath}
>\tikzcdset{scale cd/.style={every label/.append style={scale=#1}, cells={nodes={scale=#1}}}}
>\begin{document}
>\begin{tikzcd}[scale cd= 1.5 ,sep=huge]
>&(\mathbb{R}^2,\xi_2) \arrow[r, "A"] &(\mathbb{R}^2, \xi_2) \\
>&(\mathbb{R}^2, \mathcal{B}) \arrow[r, "A' "] \arrow[u, "S"] &(\mathbb{R},\mathcal{B}) \arrow[u, "S"]
>\end{tikzcd}
>\end{document}
>```
