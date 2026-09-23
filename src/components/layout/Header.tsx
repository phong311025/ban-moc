import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";
import { LanguageToggle } from "../ui/LanguageToggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.products"), href: "/san-pham" },
    { name: t("nav.story"), href: "/cau-chuyen" },
    { name: t("nav.partners"), href: "/doi-tac-luu-tru" },
    { name: t("nav.esg"), href: "/hanh-trinh-xanh" },
    { name: t("nav.team"), href: "/ve-chung-toi" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-brand-light/95 backdrop-blur-md shadow-sm py-3.5"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 relative z-50">
          <img 
            src="https://scontent.fhan5-1.fna.fbcdn.net/v/t1.15752-9/810117828_2276745606436034_1563646822554665150_n.png?stp=dst-png&cstp=mx1254x1254&ctp=s1254x1254&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHwZQQPWamt3zZTFQ4iZVcDkQtdzjeDCzORC13ON4MLMwkREO-sym9t4r2oTsqt9JcrFn6550lxx8xe40hxH3sY&_nc_ohc=RiTLm4gVEcoQ7kNvwHvRFso&_nc_oc=AdqGZUTRReMm7ScRY2W12yHt2fXvaXG9g9BoChcXHpBnwFhdTMQ_3FVhBAJ0RFaqtEg&_nc_zt=23&_nc_ht=scontent.fhan5-1.fna&_nc_ss=7b2a8&oh=03_Q7cD6QGqSXFcmJZ7knpK4ld-VQPUvWYjiTSMyyLJoQLU8w8w8g&oe=6AD25492" 
            alt="Sợi Lành Logo" 
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-brand-text hover:text-brand-olive transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-olive transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageToggle />
          <Link to="/lien-he">
            <Button variant="ghost">{t("nav.contact")}</Button>
          </Link>
          <Link to="/lien-he?type=dung-thu">
            <Button>{t("nav.trial")}</Button>
          </Link>
        </div>

        {/* Mobile Toggle & Lang */}
        <div className="lg:hidden flex items-center gap-3 relative z-50">
          <LanguageToggle variant="mobile" />
          <button
            className="p-1.5 text-brand-dark rounded-md hover:bg-brand-cream/60 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-brand-light pt-24 px-6 flex flex-col gap-5 lg:hidden overflow-y-auto"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-serif text-brand-dark border-b border-brand-cream pb-3.5"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3.5 mt-4 pb-12">
                <Link to="/lien-he?type=dung-thu" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full" size="lg">{t("nav.trial")}</Button>
                </Link>
                <Link to="/lien-he" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full" size="lg">{t("nav.contact")}</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
