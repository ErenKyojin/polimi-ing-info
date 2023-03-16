---
aliases: 
creation date: 2023-03-16 11:22
modification date: 2023-03-16 11:22
---

# 1
$x = \#$ refusi in un documento di $25$ righe, $\text{Poiss}(\lambda)$ con $\lambda = 2,25$. $P(x = k)=  e^{-\lambda} \frac{\lambda^k}{k!} \forall k = 0,1,\dots$  
$P(x \geq 2) = 1 P(x < 2) = 1 - P(x = 0) - P(x=1) = 1 - e^\lambda - e^\lambda \lambda = 1 e^{-2.25} - 2.25e^{2.25}=0.658$
...
# 2
180 concorsi indipendenti
0.008 probabilità di vincere  

$x = \begin{cases}1\quad\text{vinco il concorso}\\0\quad\text{altrimenti}\end{cases}$
$x = \sum_{i = 1}^{180} X_{i} \approx \Bi(u_{i}p)$ con $u = 180, p = 0.008, \lambda = up\quad up(1 -p)< 10$

$\approx Z \sim \text{Poiss}(\lambda) = \text{Poiss(1.44)}$

Prob di vincere un solo concorso
$P(x = 1) \approx P(Z = 1) = e^{-\lambda}\lambda = e^{-\lambda}\lambda = e^{ -\lambda }\lambda=e^{ -1.44 }1.44$   


1. 