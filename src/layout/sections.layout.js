//* NAVIGATION ITEMS ARRAY EXAMPLE *\\

import { User, Map } from "../assets/icons";
export const sections = [
  {
    title: "Obecné",
    items: [
      {
        title: "Přehled",
        path: "/app",
        icon: <User />,
      },
      {
        title: "Mapa",
        path: "/app/map",
        icon: <Map />,
      },
    ],
  },
  {
    title: "Docházka",
    items: [
      {
        title: "Směny",
        path: "/app/shifts",
        icon: <User />,
      },
    ],
  },
  {
    title: "Správa",
    items: [
      {
        title: "Pracoviště",
        path: "/app/workplaces",
        icon: <User />,
      },
      {
        title: "Zaměstnanci",
        path: "/app/workers",
        icon: <User />,
      },
    ],
  },
];
