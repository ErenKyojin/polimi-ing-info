---
aliases: 
creation date: 2024-02-28
---

È uno dei fattori chiave della rapida diffusione del web, grazie alla sua semplicità.
L'origine è il Markup, che modifica l'interfaccia in base a dei semplici comandi.

In particolare si origina da SGML (standard generalized markup language), utilizzato per formattare i libri. 

Da SGML derivano HTML, XHTML, XML.

### Versioni HTML
- HTML1
- HTML2
- HTML3
- HTML4
- HTML5

---

### TAG HTML
L'unico elemento vero e proprio di HTML è il TAG, che si può vedere come una parentesi
```HTML
<TAG> some-text </TAG>
```

in alcuni casi, dei tag specifici accettano modificatori
```html
<TAG attribute="value"> some-text </TAG> 
```


## Struttura di un documento HTML
```html
<html>
<head>
	<title> titolo della finestra </title>
	//informazioni sul documento
</head>

<body>
	//il contenuto del documento che costituitrà l'interfaccia itente
</body>
</html>
```


## Formattazione testuale in HTML 3
- <i\> corsivo <\/i> --> *corsivo* \*
- <b\> grassetto <\/b> --> **grassetto** \*
- <u\> sottolineature <\/u> --> <u> sottolineatura </u> \*
- font size \*
- font color \*
- headings 
- paragrafi 
- <a href="https://en.wikipedia.org/wiki/Hyperlink">hyperlinks! </a>
	- rivoluzione per la rete, concetto di rete più forte che mai
	- motore di ricerca, una pagina è più importante se è puntata da pagine importanti
- comunicazione bidirezionale <a href = "mailto:mail@example.com">mail </a>
- media
- media interattivi
- tabella

---

Da HTML 3 si sono evoluti due sistemi differenti
- **HTML**: HTML4, CSS, ...
- **XML**: XSL, XLL, RDF


## HTML4
divide gli elementi della pagina in livelli differenti:

- comportamento -> JS
- Stile -> CSS, JS + DOM
- Contenuto e struttura -> XHTML

Implementazione di \<div> + class

- class: conferisce attributi specifici ad qualsiasi elemento html attraverso classificazione
- div: delimita porzioni di contenuto, può essere classificato


```html
<div class="boxed"> esempio </div>
```

definisce l'equivalente di un nuovo tag boxed


HTML4 è quindi un misto tra HTML3 e XML, dove il primo ha tag completamente statici, mentre il secondo ha i tag dinamici e scelti da chi scrive. In HTML4 attraverso le classi e i div e span è possibile fare dei tag "customizzati", ma la struttura rimane uguale per tutti.