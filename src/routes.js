//* APP ROUTES *\\

// AUTH GUARDS //
import AuthGuard from "./auth/guards/auth.guard";
import GuestGuard from "./auth/guards/guest.guard";

// PAGES //

import LandingPage from "./pages/landing";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notfound";

// APP LAYOUT //
import Layout from "./layout";

export const routes = [
  {
    path: "/",
    element: (
      <GuestGuard>
        <LandingPage />
      </GuestGuard>
    ),
  },
  {
    path: "/app",
    element: (
      <AuthGuard>
        <Layout />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
