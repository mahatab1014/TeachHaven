import { Outlet } from "react-router-dom";
import PrimaryNav from "../Components/Navbar/PrimaryNav";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <header className="backdrop-blur-lg shadow-lg z-[999] sticky top-0">
        <PrimaryNav />
      </header>

      <main className="relative">
        <Outlet />
      </main>

      <footer className="bg-slate-100 dark:bg-gray-900">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
