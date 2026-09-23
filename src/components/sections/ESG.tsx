import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { useLanguage } from "../../context/LanguageContext";

export function ESG() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-brand-olive text-brand-light px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title={t("esg.title")}
          description={t("esg.desc")}
          theme="dark"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-brand-dark/30 p-8 rounded-2xl border border-brand-light/10 flex flex-col justify-center min-h-[200px]"
          >
            <div className="font-serif text-3xl md:text-4xl text-brand-beige mb-4">{t("esg.metric.pending")}</div>
            <div className="text-sm text-brand-cream/80 uppercase tracking-wider">{t("esg.metric.rooms")}</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-brand-dark/30 p-8 rounded-2xl border border-brand-light/10 flex flex-col justify-center min-h-[200px]"
          >
            <div className="font-serif text-3xl md:text-4xl text-brand-beige mb-4">{t("esg.metric.pending")}</div>
            <div className="text-sm text-brand-cream/80 uppercase tracking-wider">{t("esg.metric.plastic")}</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand-dark/30 p-8 rounded-2xl border border-brand-light/10 flex flex-col justify-center min-h-[200px]"
          >
            <div className="font-serif text-3xl md:text-4xl text-brand-beige mb-4">{t("esg.metric.pending")}</div>
            <div className="text-sm text-brand-cream/80 uppercase tracking-wider">{t("esg.metric.guests")}</div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <p className="text-brand-cream/70 text-sm italic">
            {t("esg.quote")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
