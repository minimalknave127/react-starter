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
        title: "Novinky",
        path: "/app/tables",
        icon: <Map />,
      },
      {
        title: "Úkoly",
        path: "/app/menu",
        icon: <User />,
      },
      {
        title: "Dovolené",
        path: "/app/menu",
        icon: <User />,
      },
      {
        title: "Chat",
        path: "/app/menu",
        icon: <User />,
      },
    ],
  },
];
