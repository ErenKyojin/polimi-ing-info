
$$ [A | \mathbf{b}] \xrightarrow{MEG} [U|\mathbf{b}] = \begin{bmatrix}
p_{1} & * &*  &\dots &*  & b_{1}' \\
0 &p_{2} &*  &\dots  & * &b_{2}' \\
\vdots & 0 & \ddots & * &\dots  & \vdots \\
0 & 0 & \dots & \dots & p_{n} & b_{n}'
\end{bmatrix}$$
A questo punto, partendo dal basso verso l'alto posso eliminare gli elementi sopra ogni pivot, ottenendo una matrice del tipo:
$$ \begin{bmatrix}
p_{1} & 0 & 0 & \dots & 0 & b_{1}'' \\
0 & p_{2} & 0 & \dots & 0 & b_{2}'' \\
\vdots & 0 & \ddots & 0 & \dots & \vdots \\
0 & 0 & \dots & \dots & p_{n} & b_{n}'' 
\end{bmatrix} $$
Infine dividiamo la riga $i$-esima per il rispettivo $p_{i}$:
$$ \begin{bmatrix}
1 & 0 & 0 & \dots & 0 & b_{1}''' \\
0 & 1 & 0 & \dots & 0 & b_{2}''' \\
\vdots  & 0 & \ddots & 0 & \dots & \vdots \\
0 & 0 & \dots & \dots & 1 & b_{3}'''
\end{bmatrix} = [U' | \mathbf{b}''']$$

con $\mathbf{b}''' = \begin{bmatrix}b_{1}''' \\b_{2}'''\\\vdots \\b_{n}''' \end{bmatrix}$ è soluzione del sistema $A\mathbf{x}=\mathbf{b}$ (quindi $A\mathbf{b}'''=\mathbf{b}$)
e $U' = \mathbb{1}_{n}$


Quindi, se $[A|\mathbf{b}] \xrightarrow{AGJ} [\mathbb{1}_{n}|\mathbf{b}'''] \implies \mathbf{x}=\mathbf{b}'''$ soluzione del sistema lineare $A \cdot \mathbf{x} = \mathbf{b}$. 
