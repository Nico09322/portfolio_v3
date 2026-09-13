---
title: "ShouldWeGo"
description: "ShouldWeGo ist eine Webseite für Bergsteiger:innen, die alle entscheidungsrelevanten Infos zu einem Berg an einem Ort Bündelt. Sie stellt z.B. Wetter auf Gipfelhöhe, Lawinenlage, Route und Schwierigkeit dar."
image: "/_content/projekte/ShouldWeGo/cover.webp"
order: 1
gallery:
    - "/_content/projekte/ShouldWeGo/Bilder/Home.png"  
    - "/_content/projekte/ShouldWeGo/Bilder/Search.png"      
    - "/_content/projekte/ShouldWeGo/Bilder/Mountain.png"      
    - "/_content/projekte/ShouldWeGo/Bilder/Styleguide.png"      
skills:

    - name: "Figma"
      bild: "/_content/projekte/ShouldWeGo/skills/devicon--figma.svg"
    - name: "Nuxt"
      bild: "/_content/projekte/ShouldWeGo/skills/devicon--nuxt.svg"      
    - name: "TailwindCSS"
      bild: "/_content/projekte/ShouldWeGo/skills/devicon--tailwindcss.svg"      

---

ShouldWeGo ist eine Web-App, die Bergsteiger:innen alle entscheidungsrelevanten Infos zu einem Gipfel an einem Ort bündelt – von höhenkorrigiertem Wetter über mehrere Atmosphärenschichten (via Open-Meteo) über Lawinenlageberichte (EAWS) bis zu Routendaten und Schwierigkeitsgrad (OpenStreetMap/OpenRouteService). Bewusst verzichtet die App auf automatisierte Handlungsempfehlungen – sie zeigt Fakten statt Ampel-Urteile, damit Nutzer:innen die Einschätzung selbst treffen. Umgesetzt mit Nuxt, komplett ohne eigene Datenbank: alle Daten werden client-seitig über öffentliche APIs geladen und im localStorage zwischengespeichert. Konzept, Styleguide und UI habe ich vollständig selbst entwickelt.