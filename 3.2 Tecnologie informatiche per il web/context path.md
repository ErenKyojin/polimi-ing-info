---
aliases: 
creation date: 2024-03-07
---

Il context path corrisponde solitamente ad un percorso sul web server, ma un'applicazione può anche entrare in servizio attraverso file di tipo **Web archive** (WAR), caso che rende il context path il web archive stesso (spacchettato)

La cartella root contiene file HTML, JSP, JavaScript, Css, risorse (eventualmente anche in sottocartelle). Se abbiamo dei file che non devono essere resi disponibili all'utente sono posti nella cartella `/WEB-INF` che contiene
- `/WEB-INF/web.xml`
- `/WEB-INF/classes/`
- `/WEB-INF/lib/`