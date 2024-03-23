import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function Layout() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
