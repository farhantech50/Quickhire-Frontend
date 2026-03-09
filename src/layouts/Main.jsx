import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background dark:bg-background-dark">
      <Navbar />
      <main className=" flex flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
