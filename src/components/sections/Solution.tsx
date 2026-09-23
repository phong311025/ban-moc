import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { useLanguage } from "../../context/LanguageContext";

export function Solution() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-brand-olive text-brand-light px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title={t("solution.title")}
          theme="dark"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-16 max-w-5xl mx-auto">
          {/* Before */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-dark/20 p-8 md:p-12 rounded-3xl border border-brand-light/10"
          >
            <span className="text-brand-beige text-sm font-semibold tracking-wider uppercase mb-6 block">
              {t("solution.before.title")}
            </span>
            <ul className="flex flex-col gap-6 text-brand-cream/80 relative">
              <div className="absolute left-[7px] top-4 bottom-4 w-px bg-brand-light/20 -z-10"></div>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-light/30 mt-1 shrink-0"></span>
                <span>{t("solution.before.1")}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-light/30 mt-1 shrink-0"></span>
                <span>{t("solution.before.2")}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-light/30 mt-1 shrink-0"></span>
                <span>{t("solution.before.3")}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-light/30 mt-1 shrink-0"></span>
                <span>{t("solution.before.4")}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-light/30 mt-1 shrink-0"></span>
                <span>{t("solution.before.5")}</span>
              </li>
              <li className="flex items-start gap-4 text-brand-light">
                <span className="w-4 h-4 rounded-full bg-brand-light mt-1 shrink-0"></span>
                <span>{t("solution.before.6")}</span>
              </li>
            </ul>
          </motion.div>
          
          {/* After */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-light text-brand-dark p-8 md:p-12 rounded-3xl border border-brand-light"
          >
            <span className="text-brand-olive text-sm font-semibold tracking-wider uppercase mb-6 block">
              {t("solution.after.title")}
            </span>
            <ul className="flex flex-col gap-6 text-brand-subtext relative">
              <div className="absolute left-[7px] top-4 bottom-4 w-px bg-brand-olive/20 -z-10"></div>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-light border-2 border-brand-olive/30 mt-1 shrink-0"></span>
                <span>{t("solution.after.1")}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-light border-2 border-brand-olive/30 mt-1 shrink-0"></span>
                <span>{t("solution.after.2")}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-light border-2 border-brand-olive/30 mt-1 shrink-0"></span>
                <span>{t("solution.after.3")}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-light border-2 border-brand-olive/30 mt-1 shrink-0"></span>
                <span>{t("solution.after.4")}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-light border-2 border-brand-olive/30 mt-1 shrink-0"></span>
                <span>{t("solution.after.5")}</span>
              </li>
              <li className="flex items-start gap-4 text-brand-dark font-medium">
                <span className="w-4 h-4 rounded-full bg-brand-olive mt-1 shrink-0"></span>
                <span>{t("solution.after.6")}</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 font-serif text-2xl md:text-3xl text-brand-beige"
        >
          {t("solution.quote")}
        </motion.div>
      </div>
    </section>
  );
}
