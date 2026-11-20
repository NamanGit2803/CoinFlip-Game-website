import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Gamepad2,
  Receipt,
  Settings,
} from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Users",
    path: "/admin/users",
    icon: Users,
  },
  {
    label: "Matches",
    path: "/admin/matches",
    icon: Gamepad2,
  },
  {
    label: "Transactions",
    path: "/admin/transactions",
    icon: Receipt,
  },
  {
    label: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

function AdminLayout() {
  return (
    <div className="min-h-screen bg-[#090d12] text-white md:flex">
      <aside className="w-full border-b border-white/10 p-4 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
        <h1 className="mb-6 text-xl font-black">
          FLIP<span className="text-primary">X</span>
          <span className="ml-2 text-xs font-normal text-gray-500">
            ADMIN
          </span>
        </h1>

        <nav className="flex gap-2 overflow-x-auto md:flex-col">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin"}
                className={({ isActive }) =>
                  `flex shrink-0 items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <Icon size={18} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </aside>

      <section className="min-w-0 flex-1">
        <header className="border-b border-white/10 px-6 py-4">
          <span className="text-sm text-gray-400">
            Administration
          </span>
        </header>

        <main className="p-5 md:p-8">
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default AdminLayout;
