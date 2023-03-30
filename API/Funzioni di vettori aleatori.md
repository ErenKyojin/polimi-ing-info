---
aliases: 
creation date: 2023-03-30 11:31
modification date: 2023-03-30 11:31
---

## Caso assolutamente continuo
$$Y = \mathbf{g}(\mathbf{x}) = \begin{bmatrix}g_{1}(\mathbf{x})\\\vdots\\g_{m}(\mathbf{x})\end{bmatrix} = \begin{bmatrix}y_{1}\\\vdots \\y_{m}\end{bmatrix}$$

$\mathbf{x} \sim f_{\mathbf{x}}$
$$F_{\mathbf{y}}(\mathbf{t}) = P(\mathbf{g}(\mathbf{x}) \leq \mathbf{t})= P (\mathbf{x} \in \{ \mathbf{s} : g_{1}(\mathbf{s}) \leq t_{1}, \dots, g_{m}(\mathbf{s}) \leq t_{m}\}) = \int  \dots \int_{{\mathbf{s} \in \mathbb{R}^n : g_{1}(\mathbf{s}) \leq t_{1} \dots, g_{m(s)} \leq t_{m}}}  \! f_{\mathbf{x}}(\mathbf{s})\, \mathrm{d}\mathbf{s} $$
è una funzione con con argomento $\mathbf{t}$.
Se questo integrale è derivabile in p tutti r $\mathbf{t}$ di $\mathbb{R}^m$