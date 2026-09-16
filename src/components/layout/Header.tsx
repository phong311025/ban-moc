import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Sản phẩm", href: "/san-pham" },
    { name: "Câu chuyện", href: "/cau-chuyen" },
    { name: "Dành cho cơ sở lưu trú", href: "/doi-tac-luu-tru" },
    { name: "Hành trình xanh", href: "/hanh-trinh-xanh" },
    { name: "Về chúng tôi", href: "/ve-chung-toi" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-brand-light/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
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
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-brand-text hover:text-brand-olive transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-olive transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/lien-he">
            <Button variant="ghost">Liên hệ</Button>
          </Link>
          <Link to="/lien-he?type=dung-thu">
            <Button>Nhận bộ dùng thử</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-50 text-brand-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-brand-light pt-24 px-6 flex flex-col gap-6 lg:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-brand-dark border-b border-brand-cream pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-8">
                <Link to="/lien-he?type=dung-thu" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full" size="lg">Nhận bộ dùng thử</Button>
                </Link>
                <Link to="/lien-he" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full" size="lg">Liên hệ</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
