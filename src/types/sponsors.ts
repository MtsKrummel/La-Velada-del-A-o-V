type SponsorId = 
| "alsa"
| "spotify"
| "revolut"
| "vicio"
| "coca-cola"
| "infojobs"
| "grefusa"
| "nothing"
| "cerave"
| "mahou"
| "maxibon"

type SponsorName = 
| "Alsa"
| "Spotify"
| "Revolut"
| "Vicio"
| "Cocacola"
| "Infojobs"
| "Grefusa"
| "Nothing"
| "Cerave"
| "Mahou"
| "Maxibon"

export interface Sponsors {
  id: SponsorId
  name: SponsorName
  label: string
  url: string
  image: {
    logo: any
    width: number
    height: number
  }
}