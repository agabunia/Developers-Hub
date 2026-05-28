import { Outlet } from "react-router-dom";
import Header from "../components/layout/header/Header";
import BottomNav from "../components/layout/bottom-nav/BottomNav";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <BottomNav />
    </>
  );
}