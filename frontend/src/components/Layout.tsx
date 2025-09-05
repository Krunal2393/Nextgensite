import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* Page content goes here */}
      </main>
      <Footer />
    </div>
  );
}
