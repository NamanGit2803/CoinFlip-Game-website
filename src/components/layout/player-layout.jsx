import { Outlet } from "react-router-dom";

function PlayerLayout() {
  return (
    <div className="min-h-screen bg-background text-white">
      <header className="border-b border-white/10 px-5 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-xl font-black tracking-wide">
            FLIP<span className="text-primary">X</span>
          </h1>

          <span className="rounded-full border border-primary/30 px-3 py-1 text-xs text-primary">
            DEMO MODE
          </span>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-white/10 py-5 text-center text-xs text-gray-500">
        FLIPX © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default PlayerLayout;
