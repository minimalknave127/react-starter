//* APP ROUTES *\\

// AUTH GUARDS //
import AuthGuard from "./auth/guards/auth.guard";
import GuestGuard from "./auth/guards/guest.guard";
import RoleGuard from "./auth/guards/role.guard";

// PAGES //

import LandingPage from "./pages/landing";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notfound";
import LayoutTablesPage from "./pages/tables/layout.tables";

// APP LAYOUT //
import Layout from "./layout";
import { Outlet } from "react-router";
import LoginPage from "./pages/auth/login";

export const routes = [
  {
    path: "/",
    element: (
      <GuestGuard>
        <Outlet />
      </GuestGuard>
    ),
    children: [
      {
        path: "ss",
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
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
      {
        path: "roletest",
        element: (
          <RoleGuard roles={["test2"]}>
            <HomePage />
          </RoleGuard>
        ),
      },
      {
        path: "tables",
        element: <LayoutTablesPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
