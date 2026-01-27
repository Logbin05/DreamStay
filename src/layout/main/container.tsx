import { Outlet } from "react-router";

export function Container() {
  return (
    <section className="w-screen h-screen">
      <Outlet />
    </section>
  );
}