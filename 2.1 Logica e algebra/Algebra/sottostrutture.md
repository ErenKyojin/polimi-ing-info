---
aliases: 
creation date: 2023-11-29
---

>[!definition]
>Sia $\left< A, \Omega \right>$ una struttura algebrica e $H \subseteq A, H \neq \varnothing$
>H è detto sottostruttura di $\left< A, \Omega \right>$ se è una struttura algebrica dello stesso tipo di $\left< A, \Omega \right>$ rispetto alle stesse operazioni di $\Omega$


#### Semigruppi
Ad esempio, $\left< A, \cdot \right>$ sia un semigruppo $H \subseteq A, H \neq \varnothing$ è sottosemigruppo se $\forall a,b \in H, a \cdot b \in H$

$\left< \mathbb{Z}, + \right>$ è un semigruppo
$\left< \mathbb{P}, + \right>$ numeri pari è sottosemigruppo
$\left< \mathbb{D}, + \right>$ numeri dispari non è sottosemigruppo

#### Monoide
$\left< A, \cdot \right>$ sia monoide
$H \subseteq A, H \neq \varnothing$ è sottomonoide se $\forall a,b \in H \implies a \cdot b \in H, 1 \in H$

$\left< \mathbb{Z}, + \right>$ monoide
$\left< \mathbf{P},+ \right>$ è sottomonoide
$\left< Z, \cdot \right>$ monoide
$\left< P, \cdot \right>$ non è sottomonoide (infatti 1 non è pari)

#### Gruppo
$\left< A, \cdot \right>$ gruppo
$H \subseteq A, H \neq \varnothing$ è sottogruppo se
- $\forall a,b \in H\quad a\cdot b \in H$
- $1 \in H$
- $\forall a \in H \implies a^{-1} \in H$

vediamo dei criteri (sottointendiamo che $H \neq \varnothing$)
##### Criterio 1
$\left< A, \cdot \right>$ gruppo
$H \subseteq A$ è sottogrupop se
- $\forall a , b \in H \implies a \cdot b \in H$
- $\forall a \in H \implies a^{-1} \in H$

##### Criterio 2
$\left< A, \cdot \right>$ gruppo
$H \subseteq A$ sottogruppo se
- $\forall A,b \in H \implies a \cdot b^{-1} \in H$

##### Criterio 3
$\left< A, \cdot \right>$ gruppo **finito**
$H \subseteq A$ è sottogruppo se
- $\forall a,b \in H \implies a \cdot b \in H$

#### Anello
$\left< A, +, \cdot \right>$ anello
$H \subseteq A, H \neq \varnothing$ è sottoanello se
- $\forall a,b \in H \implies a + b \in H$
- $\underline{0} \in H$
- $\forall a \in H \implies -a \in H$
- $\forall a, b \in H \implies ab \in H$

##### Criterio per i sottoanelli
$\left< A, +, \dot{c} \right>$ sia anello
$H \subseteq A$ è sottoanello se
1. $\forall a,b \in H \implies a - b \in H$
2. $\forall a,b \in H \implies a \cdot b \in H$

#### Corpo
$\left< A, +, \cdot \right>$ sia corpo
$H \subseteq A$, $H \neq \varnothing$ è sottocorpo
- $\forall a,b \in H\quad a + b \in H$
- $\underline{0} \in H$
- $\forall a \in H_{0} \quad - a \in H$
- $\forall a,b \in H\quad a\cdot b\in H$
- $1 \in H$
- $\forall a \in H_{0}\quad a^{-1} \in H$

##### Criterio per i sottocorpi
$\left< A,+, \cdot \right>$ corpo
$H \subseteq A$ è sottocorpo se
1. $\forall a, b \in H\quad a - b \in H$
2. $\forall a,b \in H_{0} \quad ab^{-1} \in H$

#### Reticolo
$\left< A, \cup , \cap\right>$ sia reticolo
$H \subseteq A, H \neq \varnothing$ è sottoreticolo se
- $\forall a,b \in H, a \cap b \in H$
- $\forall a,b \in H, a \cup b \in H$