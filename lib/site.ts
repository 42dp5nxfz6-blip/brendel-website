export const site = {
  name: "Brendel Transport",
  description:
    "Hochleistungssaugtechnik für Tiefbau & Industrie: präzise, sauber, schnell – mit Saugbaggern und professioneller Absaugtechnik.",
  location: "Ettenheim",
  emergencyPhone: "+49 0000 000000", // TODO: echte Nummer
  nav: [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Technik", href: "#technik" },
    { label: "Einsatzgebiete", href: "#einsatzgebiete" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  seoKeywords: [
    "Saugbagger",
    "Tiefbau",
    "Ettenheim",
    "professionelle Absaugtechnik",
    "Hochleistungssaugtechnik",
    "Industrieabsaugung",
  ],
} as const

export type NavItem = (typeof site.nav)[number]
