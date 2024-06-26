---
aliases: 
creation date: 2024-06-26
---

Vogliamo confrontare due misure $x_{1}$ ed $x_{2}$ sullo stesso misurando (magari in metodi o condizioni differenti)

$$ d = |x_{1} - x_{2}| \leq k \sqrt{ u^2 (x_{1}) + u^2(x_{2}) - 2r_{12} u(x_{1})u(x_{2}) } $$

possiamo quindi calcolare $k \in \mathbb{N}$ come
$$ k = \frac{x_{1} - x_{2}}{\sqrt{ u^2 (x_{1}) + u^2 (x_{2}) }} $$
due misure si dicono compatibili quando $k \leq 3$

### Media composta di misure compatibili
Se due misure compatibli posso trovare una misura compostra tra esse attraverso la media pesata rispetto all'incertezza della singola misura

$$ x = \bar{x}_{MP} = \frac{\left( \sum_{i}^N \frac{x_{i}}{u^2(x_{i})} \right)}{\left( \sum_{i}^n \frac{1}{u^2(x_{i})} \right)} = \frac{\left( \sum_{i=1}^N w_{i} \lambda_{i} \right)}{\sum_{i=1}^n w_{i}}$$

$w_{i} =\dfrac{1}{u^2(x_{i})}$

#### Incertezza della media pesata
$$ u^2 (\bar{x}_{MP}) = \frac{1}{\sum_{i=1}^N \frac{1}{u^2 (x_{i})}} = \frac{1}{\sum_{i}^n w_{i}}  $$