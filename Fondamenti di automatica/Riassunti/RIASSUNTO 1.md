>[!esempio]
>Consideriamo un corpo solido riscaldato e che scambia calore con un ambiente a temperatura imposto
>
> Potenza termica --> [$T$] -->  Temperatura esterna $T_e$. (Potenza scambiata $G(T-T_e)$)
> $C = 10 \frac{J}{C}$
> 
>  ## Bilancio dinamico di energia
>  $\frac{d}{dt}$ energia $= \sum$ potenze
>   Da cui il sistema dinamico
>   $$
> C \frac{d}{dt}T  = P - G(T-T_{e})
>$$
>Riodino
> $$
> \dot{T} = -\frac{G}{C}T + \frac{1}{C}P + \frac{G}{C}T_{e} \implies \dot{x}= -\frac{G}{C}x + \frac{1}{C}U + \underbrace{ \frac{G}{C}T_{e} }_{ \text{disturbo} }
>$$
>
>Trasformo secondo Laplace e guardo solo i **moti forzati**:
> $$
> \begin{align}
>
> sT(s) &\cancel{ - T(u) } = -\frac{G}{C}T(s) + \frac{1}{C}P(s) + \frac{G}{C}T_{e}(s) \\
>T(s) &= \frac{1}{s + \frac{G}{C}} \left( \frac{1}{C} P(s) + \frac{G}{C} T_{e}(s)\right) \\
>&=\underbrace{ \frac{\frac{1}{C}}{S + \frac{G}{C}} P(s) }_{ \text{FdT da $P$ a $T$} } + \underbrace{ \frac{\frac{G}{C}}{S + \frac{G}{C}}T_{e}(s) }_{ \text{FdT da $T_{1}$ a $T$} }\end{align}
>$$
>Spesso si usa scrivere la [[Funzione di trasferimento]] da $U(s)$ a $Y(s)$ nella sua forma $\frac{Y(s)}{U(s)}$ ovverno nel nostro caso
> $$
> T(s) = \fcolorbox{}{yellow}{$\frac{T(s)}{P(s)}$} \fcolorbox{red}{}{$P(s)$} + \fcolorbox{}{yellow}{$\frac{T(s)}{T_{e}(s)}$}\fcolorbox{red}{}{$T_{e}(s)$}
>$$
>- In rosso [[Trasformata di Laplace|TdL]] cioè segnali
> - in giallo [[Funzione di Trasferimento|FdT]] cioè [[sistemi]], operatori sui segnali (Sono inscindibili)
>
>
>Riscriviamo le [[funzione di trasferimento|FdT]] in modo leggermente diverso:
> $$
> \begin{align}
>G_{TP}(s) = \frac{T(s)}{P(s)} = \frac{\frac{1}{C}}{s+\frac{G}{C}} = \frac{\frac{1}{G}}{1 + S \frac{C}{G}}
>T_{TT_{e}}(s) = \frac{T(s)}{T_{e}(s)} = \frac{\frac{G}{C}}{s + \frac{G}{C} = \frac{1}{1+s \frac{C}{G}}} 
>\end{align}
>$$
>Applichiamo $P(t)$ ...
>



