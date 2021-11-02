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
        title: "Stoly",
        path: "/app/tables",
        icon: <Map />,
      },
      {
        title: "Menu",
        path: "/app/menu",
        icon: <User />,
      },
    ],
  },
];
