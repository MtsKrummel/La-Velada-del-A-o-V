import type { Sponsors } from "../types/sponsors";

import Alsa from "../assets/sponsors/Alsa.svg"
import Cocacola from "../assets/sponsors/Cocacola.svg"
import Grefusa from "../assets/sponsors/Grefusa.svg"
import Revolut from "../assets/sponsors/Revolut.svg"
import Spotify from "../assets/sponsors/Spotify.svg"
import Vicio from "../assets/sponsors/Vicio.svg"
import Cerave from "../assets/sponsors/Cerave.svg"
import Infojobs from "../assets/sponsors/Infojobs.svg"
import Maxibon from "../assets/sponsors/Maxibon.svg"
import Mahou from "../assets/sponsors/Mahou.svg"
import Nothing from "../assets/sponsors/Nothing.svg"

export const SPONSORS: Sponsors[] = [
  {
    id: "alsa",
    name: "Alsa",
    label: "",
    url: "https://www.alsa.es/",
    image: {
      logo: Alsa,
      width: 56,
      height: 56,
    },
  },
  {
    id: "spotify",
    name: "Spotify",
    label: "",
    url: "https://www.spotify.com/es/",
    image: {
      logo: Spotify,
      width: 56,
      height: 56,
    },
  },
  {
    id: "vicio",
    name: "Vicio",
    label: "",
    url: "https://vicio.es/",
    image: {
      logo: Vicio,
      width: 56,
      height: 56,
    },
  },
  {
    id: "coca-cola",
    name: "Cocacola",
    label: "",
    url: "https://www.cocacola.es/",
    image: {
      logo: Cocacola,
      width: 56,
      height: 56,
    },
  },
  {
    id: "infojobs",
    name: "Infojobs",
    label: "",
    url: "https://www.infojobs.net/",
    image: {
      logo: Infojobs,
      width: 56,
      height: 56,
    },
  },
  {
    id: "grefusa",
    name: "Grefusa",
    label: "",
    url: "https://grefusa.com/",
    image: {
      logo: Grefusa,
      width: 56,
      height: 56,
    },
  },
  {
    id: "nothing",
    name: "Nothing",
    label: "",
    url: "https://nothing.tech/",
    image: {
      logo: Nothing,
      width: 56,
      height: 56,
    },
  },
  {
    id:"cerave",
    name:"Cerave",
    label: "",
    url:"https://www.cerave.es/",
    image:{
        logo:Cerave,
        width :56,
        height :56
    }
  },
  {
    id:"maxibon",
    name:"Maxibon",
    label: "",
    url:"https://www.maxibon.es/",
    image:{
        logo:Maxibon,
        width :56,
        height :56
    }
  },
  {
    id:"mahou",
    name:"Mahou",
    label: "",
    url:"https://www.mahou.es/",
    image:{
        logo:Mahou,
        width :56,
        height :56
    }
  },
] 