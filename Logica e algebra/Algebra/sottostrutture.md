---
aliases: 
creation date: 2023-11-29
---

>[!def]
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

##### Criterio 1
$\left< A, \cdot \right>$ gruppo
$H \subseteq A$ è sottogrupop se
- $\forall a , b \in H \implies a \cdot b \in H$
- $\forall a \in H \implies a^{-1} \in H$

##### Criterio 2
$\left< A, \cdot \right>$ gruppo
$H \subseteq A$ sottogruppo se
- $\forall A,b \in H \implies a \cdot b^{-1} \in H$