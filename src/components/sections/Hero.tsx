import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Content Column */}
        <div className="flex-1 w-full z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-dark leading-[1.1] mb-6"
          >
            {t("hero.title1")}<br />
            {t("hero.title2")}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-brand-text/80 mb-10 max-w-xl leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Link to="/san-pham">
              <Button size="lg" className="w-full sm:w-auto">{t("hero.cta1")}</Button>
            </Link>
            <Link to="/doi-tac-luu-tru">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">{t("hero.cta2")}</Button>
            </Link>
          </motion.div>
          
          <motion.ul 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-3 text-sm text-brand-subtext"
          >
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-olive block"></span>
              {t("hero.bullet1")}
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-olive block"></span>
              {t("hero.bullet2")}
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-olive block"></span>
              {t("hero.bullet3")}
            </li>
          </motion.ul>
        </div>
        
        {/* Image Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex-1 w-full relative"
        >
          <div className="aspect-[4/5] lg:aspect-square relative rounded-2xl overflow-hidden bg-brand-cream">
            <img 
              src="https://scontent.fhan5-1.fna.fbcdn.net/v/t1.15752-9/808500779_1380972247543081_4791620009681211830_n.png?stp=dst-png&cstp=mx1122x1402&ctp=s1122x1402&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEPScA6rkWwbBQ87yWU82HRXYJIIwGFseRdgkgjAYWx5Om_oUwldO_zbSTPKXIIKKzN5NVRvrK6CHL5mNG2nVxX&_nc_ohc=S5y4qosKQMgQ7kNvwFNzLtk&_nc_oc=AdphkZolt1TbWfHwcNnHwFFZK3siGGLywdSHyIYqAkiXfWvk2phhqZ6Va9obVruiG1k&_nc_zt=23&_nc_ht=scontent.fhan5-1.fna&_nc_ss=7b2a8&oh=03_Q7cD6QFESVH5D8aL65uWQpA4SoiKHWAhAONz2KKV5fbwcsy3iQ&oe=6AD21F19" 
              alt="Bản Tinh Hoa Sợi Lành" 
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
