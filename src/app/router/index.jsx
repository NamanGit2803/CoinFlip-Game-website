import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import PlayerLayout from "@/components/layout/player-layout";
import AdminLayout from "@/components/layout/admin-layout";
import {
  // GamePage,
  LoginPage,
  RegisterPage,
  HistoryPage,
  WalletPage,
  AdminDashboardPage,
  AdminUsersPage,
  AdminMatchesPage,
  AdminTransactionsPage,
  AdminSettingsPage,
} from "@/app/pages";
import GamePage from "@/features/game/pages/game-page";

const router = createBrowserRouter([
  {
    element: <PlayerLayout />,
    children: [
      {
        path: "/",
        element: <GamePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },
      {
        path: "/wallet",
        element: <WalletPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboardPage />,
      },
      {
        path: "users",
        element: <AdminUsersPage />,
      },
      {
        path: "matches",
        element: <AdminMatchesPage />,
      },
      {
        path: "transactions",
        element: <AdminTransactionsPage />,
      },
      {
        path: "settings",
        element: <AdminSettingsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
