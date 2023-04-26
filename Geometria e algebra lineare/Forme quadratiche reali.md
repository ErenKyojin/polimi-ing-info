>[!def]
>Una forma quadratica reale è un polinomio omogeneo di secondo grado nelle variabili $x_{1},x_{2},\dots,x_{n} (n \geq 1)$ a coefficienti in $\mathbb{R} : \mathbf{x} = [x_{1} |\dots|x_{n}]^T \in \mathbb{R}^n$
>$$\quad q(\mathbf{x})=a_{11}x_{1}^2 + a_{22}x_{2}^2 + \dots + a_{nn}x_{n}^2 + \sum_{1 \leq i \leq j \leq n}2a_{ij}x_{i}x_{j}\quad,a_{ij} \in \mathbb{R}$$
>Definiamo $A \in M_{\mathbb{R}(n,n)}$ simmetria nel seguente modo: se $i \leq j$ allora $[A]_{ij} := a_{ij}$ e $[A]_{ji} = [A]_{ij}$. Possiamo riscrivere $q(\mathbf{x})$ in forma matriciale: $q(\mathbf{x}) = \mathbf{x}^TA\mathbf{x}$
>Si dice che $A$ rappresenta la forma quadratica $q(\mathbf{x})$ e che $q(\mathbf{x}) = \mathbf{x}^TA\mathbf{x}$ è la forma quadratica associata alla matrice $A$.


>[!oss]
>1. Per ogni forma quadratica $q(\mathbf{x}) = \mathbf{x}^TA\mathbf{x}$ allora
>	1. $q(\mathbf{0}) = 0$
>	2. $q(t\mathbf{x})=t^2q(\mathbf{x})$
>	   
>In particolare se $x_{0} \in \mathbb{R}^n \setminus \left\{ \mathbf{0} \right\}$e $q(\mathbf{x}_{0})>0$ (rispettivamente $=0$ o $<0$) allora $q(tx_{0})=t^2q(\mathbf{x}_{0})>0$ (rispettivamente $=0$ o $< 0$) $\forall t \in \mathbb{R} \setminus \left\{ \mathbf{0} \right\}$

>[!def]
>Una forma quadratica $q(\mathbf{x})$ in $n$-variabili è:
>1. **Definita positiva** se $q(\mathbf{x}) > 0 \forall \mathbf{x} \in \mathbb{R}^n \setminus \left\{ \mathbf{0} \right\}$
>2. **Semidefinita positiva** se $q(\mathbf{x}) \geq 0 \forall \mathbf{x} \in \mathbb{R}^n$ ed $\exists \mathbf{x}_{0} \in \mathbb{R}^n \setminus \left\{ \mathbf{0} \right\}$
>3. **definita negativa** se $q(\mathbf{x}) < 0 \forall \mathbf{x} \in \mathbb{R}^n \setminus \left\{ \mathbf{0} \right\}$
>4. **Semidefinita negativa** se $q(\mathbf{x}) \leq 0 \forall \mathbf{x} \in \mathbb{R}^n$ ed $\exists \mathbf{x}_{0} \in \mathbb{R}^n \setminus \left\{ \mathbf{0} \right\}$
>5. **indefinita** se esistono $\mathbf{x}_{1},\mathbf{x}_{2} \in \mathbb{R}^n \setminus \left\{ \mathbf{0} \right\}$ tali che
>   $$ q(\mathbf{x}_{1})<0\quad e \quad q(\mathbf{x}_{2})>0 $$

# [[matrici congruenti]]

[[quadriche]]
