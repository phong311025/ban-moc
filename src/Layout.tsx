import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

export function Layout() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col font-sans text-brand-text bg-brand-light">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
        <ScrollRestoration />
      </div>
    </LanguageProvider>
  );
}
