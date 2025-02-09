import { Icon } from "@iconify/react";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: Layout,
});

function Layout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <header className="w-full p-4 text-xl text-center bg-black text-gray-100">
        <h1>BomSLap - React</h1>
      </header>

      <main className="p-2">
        <Outlet />
      </main>

      <footer className="w-full p-2 bg-black text-gray-100">
        <a
          className="flex gap-2"
          href="https://github.com/sompakorn-lap/basic-setup-react"
        >
          <Icon icon="mdi:github" width={24} height={24} />
          <span>GITHUB</span>
        </a>
      </footer>
    </div>
  );
}

export default Layout;
