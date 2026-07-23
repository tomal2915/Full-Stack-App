import { createRootRoute, Outlet, Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gray-900 text-gray-50">
      <header className="flex justify-between items-center p-4 bg-slate-800 border-b border-gray-700">
        <h1 className="text-4xl font-extrabold tracking-tight">tom@l_ | App</h1>
        <nav className="text-2xl space-x-6">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition-colors [&.active]:font-bold [&.active]:text-white"
          >
            Home
          </Link>
          <Link
            to="/components-playground"
            className="text-gray-300 hover:text-white transition-colors [&.active]:font-bold [&.active]:text-white"
          >
            Playground
          </Link>

          <Link
            to="/state-playground"
            className="text-gray-300 hover:text-white transition-colors [&.active]:font-bold [&.active]:text-white"
          >
            State
          </Link>

          <Link
            to="/about"
            className="text-gray-300 hover:text-white transition-colors [&.active]:font-bold [&.active]:text-white"
          >
            About
          </Link>
        </nav>
      </header>
      <main className="p-6 max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  ),
});
