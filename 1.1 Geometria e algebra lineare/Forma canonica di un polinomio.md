Abbiamo visto che dato un polinomio di secondo grado
 $$ q(\mathbf{x}) = \mathbf{x}^TA\mathbf{x} + 2\mathbf{b} \mathbf{x} + c $$
 Dove $A \in M_{\mathbb{R}(n,n)}$ è simmetrica, $\mathbf{b} \in \mathbb{R}^n$ e $c \in \mathbb{R}$ data una rototraslazione: $F(\mathbf{y}) = Q\mathbf{y} + \mathbf{v}$ ove $Q \in M_{\mathbb{R}(n,n)}$ è invertibile e $\mathbf{v} \in \mathbb{R}^n$ allora
  $$ \hat{q}(\mathbf{y}) = q(F(\mathbf{y})) =\mathbf{y}^TQ^TAQ\mathbf{y} + 2(A\mathbf{v}+\mathbf{b})^TQ\mathbf{y} + \mathbf{v}^TA\mathbf{v} + 2\mathbf{b}^T\mathbf{v} + c$$ 
  >[!teorema]
  >Dato un polinomio di secondo grado
  > $$ q(\mathbf{x}) = \mathbf{x}^TA\mathbf{x} + 2\mathbf{b}^T \mathbf{x} + c $$
  > ove $A \in M_{\mathbb{R}(n,n)}$ è simmetrica, $\mathbf{b} \in \mathbb{R}^n$ e $c \in \mathbb{R}$, data una rototraslazione: $F(\mathbf{y})=Q\mathbf{y}+\mathbf{v}$ dove $Q \in M_{\mathbb{R}(n,n)}$ è ortogonale con $\det(Q) = 1$ e $\mathbf{v} \in \mathbb{R}^n$ posto
  > $$ \hat{q}(\mathbf{y}) = q(F(\mathbf{y})) = \mathbf{y}^T\hat{A}\mathbf{y} + 2\hat{\mathbf{b}}^T\mathbf{y} + c$$
  > Si ha che:
  > 1. Gli autovalori ed il rango di $A$ e $\hat{A}$ sono uguali
  > 2. Il rango ed il determinante di $B$ e $\hat{B}$ sono uguali
  > Inoltre sia $r$ il rango di $A$ e siano $\lambda_{1},\dots,\lambda_{r}$ gli autovalori non nulli di $A$ si ha che:
  > 
  > 1. se $r(B) = r$ allora esiste una rototraslazione $F(\mathbf{y}) =Q\mathbf{y} +\mathbf{v}$ tale che:
  >    $$ \hat{q}(\mathbf{y})= q(F(\mathbf{y})) = \lambda_{1}y_{1}^2 + \dots + \lambda_{r}y^2_{r}+ \hat{c} $$
  > con $\hat{c} \neq 0$
  > 
  >>[!dim]

>[!oss]
>Data una quadrica $\mathcal{2} = \left\{ \mathbf{x} \in \mathbb{R}^n: q(\mathbf{x}) = 0 \right\}$ diremo che è a centro se $r(A) = r([A|-\mathbf{b}])$
>Infatti in questo caso la sua forma canonica è del tipo: 
> $$ \lambda_{1}y_{1}^2 + \dots + \lambda_{r}y_{r}^2 + \hat{c} = 0\qquad \hat{c} \neq 0 $$
> In queste coordinate l'origine è un centro di simmatria perchè se $\mathbf{y}_{0} \in \mathbb{R}^n$ è tale per cui $q(\mathbf{y}_{0})=0$ allora anche $q(-\mathbf{y}_{0}) = 0$. La traslazione $\mathbf{x} = \mathbf{y} + \mathbf{w}$ dove $\mathbf{w}$ è soluzione del sistema $A\mathbf{x} = -\mathbf{b}$ sposta l'origine del sistema di riferimento in un centro di simmetria della quadrica (il centro di simmetria non è unico se $r(A)<n$)
> La successiva rotazione $\mathbf{x} = Q\mathbf{y}$ fa si che i nuovi assi coordinati siano paralleli agli autovettori, Nelle nuove cordinate se $P = \begin{bmatrix}y_{1} & \dots & y_{n}\end{bmatrix}$ è soluzione di: $\lambda_{1}y_{1}^2 + \dots + \lambda_{r}y_{r}^2 + \hat{c} = 0$, allora anche le sue riflessione di $P$ rispetto all'asse $y_{1}$ è : $P = \begin{bmatrix}y_{1} & -y_{2} & \dots & -y_{n}\end{bmatrix}$ che sivede essere ancora soluzione di $\lambda_{1}y_{1}^2 + \dots + \lambda_{r}y_{r}^2 + \hat{c} = 0$
> Dunque le rette che passano per un centro e hanno come direzione un autovettore di $A$ sono assi di simmetria per la quadrica

>[!oss]
>Data $\mathcal{2} = \left\{ \mathbf{x} \in \mathbb{R}^n : q(\mathbf{x}) = 0 \right\}$ una quadrica diremo che non è a centro se $r(A) < r([A|-\mathbf{b}])$. In questo caso la rototraslazione che trasforma $q(\mathbf{x}) = 0$ nella sua forma canonica:
> $$ \lambda_{1}y_{1}^2 + \dots + \lambda_{r}y_{r}^2 + 2py_{r+1} = 0$$
> Trasforma il sottospazio affine $A\mathbf{x} = - \mathbf{b}_{\ker(A)^\perp}$ nel sottospazio: $y_{1} = \dots = y_{r} = 0$
> La riflessione rispetto a questo sottospazio lascia invariata la quadrica. Nel caso delle coniche non a centro (parabole) la retta: $A\mathbf{x} = -\mathbf{b}_{\ker(A)^\perp}$ èø un asse di simmetria. Nel caso delle quadriche in $\mathbb{R}^3$ non a centro: $A\mathbf{x} = -\mathbf{b}_{\ker(A)^\perp}$ è una retta se $\dim(\ker(A)) = 1$, è un piano se $\dim(\ker(A)) = 2$.
> Inoltre la rototraslazione che trasforma $q(\mathbf{x}) =0$ nella sua forma canonica manda l'origine in uno dei punti di intersezione tra la quadrica ed il sottospazio affine: $A\mathbf{x} = -\mathbf{b}_{\ker(A)^\perp}$.
> Nel caso della parabola tale punto è unico ed è detto vertice della parabola. Anche nei casi del paraboloide ellittico ed iperbolico l'intersezione della quadrica con $A\mathbf{x} = -\mathbf{b}_{\ker(A)^\perp}$ è un unico punto chiamato vertice della quadrica
