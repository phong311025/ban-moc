import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { LanguageToggle } from "../ui/LanguageToggle";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();
  
  return (
    <footer className="bg-brand-dark text-brand-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col gap-4 inline-block">
              <img 
                src="https://scontent.fhan5-1.fna.fbcdn.net/v/t1.15752-9/810117828_2276745606436034_1563646822554665150_n.png?stp=dst-png&cstp=mx1254x1254&ctp=s1254x1254&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHwZQQPWamt3zZTFQ4iZVcDkQtdzjeDCzORC13ON4MLMwkREO-sym9t4r2oTsqt9JcrFn6550lxx8xe40hxH3sY&_nc_ohc=RiTLm4gVEcoQ7kNvwHvRFso&_nc_oc=AdqGZUTRReMm7ScRY2W12yHt2fXvaXG9g9BoChcXHpBnwFhdTMQ_3FVhBAJ0RFaqtEg&_nc_zt=23&_nc_ht=scontent.fhan5-1.fna&_nc_ss=7b2a8&oh=03_Q7cD6QGqSXFcmJZ7knpK4ld-VQPUvWYjiTSMyyLJoQLU8w8w8g&oe=6AD25492" 
                alt="Sợi Lành Logo" 
                className="h-12 w-auto object-contain bg-white rounded p-1"
              />
            </Link>
            <p className="mt-4 text-brand-cream/80 text-sm max-w-xs font-medium">
              {t("footer.slogan")}
            </p>
            <div className="mt-5">
              <LanguageToggle variant="footer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-light">{t("footer.explore")}</h4>
            <ul className="flex flex-col gap-4 text-sm text-brand-cream/80">
              <li><Link to="/san-pham" className="hover:text-brand-light transition-colors">{t("nav.products")}</Link></li>
              <li><Link to="/cau-chuyen" className="hover:text-brand-light transition-colors">{t("nav.story")}</Link></li>
              <li><Link to="/hanh-trinh-xanh" className="hover:text-brand-light transition-colors">{t("nav.esg")}</Link></li>
              <li><Link to="/ve-chung-toi" className="hover:text-brand-light transition-colors">{t("nav.team")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-light">{t("footer.partners")}</h4>
            <ul className="flex flex-col gap-4 text-sm text-brand-cream/80">
              <li><Link to="/doi-tac-luu-tru" className="hover:text-brand-light transition-colors">{t("nav.partners")}</Link></li>
              <li><Link to="/lien-he" className="hover:text-brand-light transition-colors">{language === "vi" ? "Nhận báo giá" : "Get Quotation"}</Link></li>
              <li><Link to="/lien-he?type=dung-thu" className="hover:text-brand-light transition-colors">{language === "vi" ? "Đăng ký mẫu dùng thử" : "Request Trial Kit"}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-light">{t("footer.contact")}</h4>
            <ul className="flex flex-col gap-4 text-sm text-brand-cream/80">
              <li><a href="mailto:hello@soilanh.vn" className="hover:text-brand-light transition-colors">hello@soilanh.vn</a></li>
              <li><a href="tel:0900000000" className="hover:text-brand-light transition-colors">0900 000 000</a></li>
              <li className="flex gap-4 mt-2">
                <a href="#" className="hover:text-brand-light transition-colors">Facebook</a>
                <a href="#" className="hover:text-brand-light transition-colors">TikTok</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-cream/60">
          <p>&copy; {currentYear} Sợi Lành. {t("footer.rights")}</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-brand-light">{t("footer.privacy")}</Link>
            <Link to="#" className="hover:text-brand-light">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
