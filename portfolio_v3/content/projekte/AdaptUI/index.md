---
title: "AdaptUI"
description: "AdaptUI ist eine Web-Demo, die im Rahmen meiner Projektarbeit im Studium entstanden ist. Sie passt ihre Oberfläche mithilfe eines LLMs an den einzelnen Nutzer an. Nach einem kurzen Onboarding erzeugt die KI aus dem beschriebenen Kontext ein strukturiertes UI-Profil, nach dem sich die gesamte Webseite zur Laufzeit anpasst."
image: "/_content/projekte/AdaptUI/cover.webp"
order: 0
gallery:
    - "/_content/projekte/AdaptUI/Bilder/Blender.png"
    - "/_content/projekte/AdaptUI/Bilder/Erklaerung.png"
    - "/_content/projekte/AdaptUI/Bilder/Onboarding.png"
    - "/_content/projekte/AdaptUI/Bilder/Projekt_architektur.png"        
skills:
    - name: "Nuxt"
      bild: "/_content/projekte/AdaptUI/skills/devicon--nuxt.svg"
    - name: "Tailwind"
      bild: "/_content/projekte/AdaptUI/skills/devicon--tailwindcss.svg"
    - name: "Figma"
      bild: "/_content/projekte/AdaptUI/skills/devicon--figma.svg"
    - name: "Llama 70b versatile"
      bild: "/_content/projekte/AdaptUI/skills/logos--meta-icon.svg"                  
---

Im Rahmen meiner Projektarbeit im 7. Semester habe ich mit AdaptUI einen lauffähigen Prototyp entwickelt, der eine grundlegende Frage untersucht: Klassische Benutzeroberflächen sind statisch – ein festes Design für alle, unabhängig von Erfahrung, Sprache oder Nutzungskontext. AdaptUI erkundet, wie sich das mit generativer KI aufbrechen lässt, jenseits klassischer, regelbasierter Adaptionsansätze.

Der Nutzer durchläuft ein kurzes Onboarding und beschreibt seinen Kontext (z.B. Alter, Technik-Erfahrung, bevorzugte Sprache, Lichtverhältnisse). Auf dieser Basis generiert ein LLM ein strukturiertes „UI-Profil" als JSON, das zentrale Gestaltungsparameter der Anwendung steuert. Die App rendert sich dynamisch nach diesem Profil. Anschließend kann der Nutzer per Freitext weitere Anpassungen anfragen – die KI interpretiert diese, setzt sie um oder lehnt sie mit Begründung ab, wenn sie dem Profil widersprechen, und bietet Alternativen an.

Da es sich um eine akademische Projektarbeit handelt, lag der Schwerpunkt nicht nur auf der Implementierung, sondern ebenso auf der konzeptuellen Analyse: welche Nutzerkontext-Parameter überhaupt relevant sind, wie sich zuverlässige, deterministische KI-Ausgaben über Structured Outputs und JSON-Schema erzwingen lassen, wie das „CSS-Dynamikproblem" (das tatsächliche Umschalten des Erscheinungsbilds) gelöst wird und wo die Grenzen generativer UI-Ansätze zwischen freier Generierung und stabiler, konsistenter Gestaltung liegen.