---
aliases: 
creation date: 2023-05-02 11:40
modification date: 2023-05-02 11:40
---

>[!esempio]
>Cerchiamo un limite superiore per la seguente $T(n):$
>$$ T(n) = 2T(\lfloor n / 2\lfloor) + n $$
>- Supponiamo $T(n) = O(n \log_{2}(n))$
>- Dobbiamo mostrare che $T(n) \leq cn \log_{2}(n)$ per un opportuna costante $c > 0$ (def O)
>- Ipotesi intuitiva: supponiamo che valga per $T(\lfloor n / 2 \rfloor)$, cioè $T(\lfloor n / 2 \rfloor) \leq c \lfloor n / 2 \rfloor\log_{2}(\lfloor n / 2 \rfloor)$
>- Sostituendo in $T(n)$ abbiamo $T(n) \leq 2c \lfloor n / 2 \rfloor \log_{2}(\lfloor n / 2 \rfloor) + n \leq cn \lfloor 2n \rfloor\log_{2}(n / 2) + n =$
>  $= cn \log_{2}(n)-cn \log_{2}(n) + n = cn \log_{2}(n) + n \leq cn \log_{2}(n)$
> 	 - basta che $c \geq 1$
> - Dobbiamo inoltre mostrare che la disuguaglianza vale per $n = 1$, supponiamo che sia $T(1) =1$, allora $T(1)=1 \leq c1 \log_{2}(1) = 0??$ NO
> - Però $T(n) \leq cn \log_{2}(n)$ deve valere solo da un certo $n_{0}$ in poi, che possiamo scegliere arbitrariamente; scegliamo $n_{0} = 2$, in questo caso se $T(1) = 1$ allora, dalla ricorrenza 

Supponiamo $T(n) = 2T(\lfloor \rfloor)$