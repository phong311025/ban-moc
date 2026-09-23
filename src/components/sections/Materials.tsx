import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { useLanguage } from "../../context/LanguageContext";

export function Materials() {
  const { materials, language } = useLanguage();
  const isEn = language === "en";

  return (
    <section className="py-24 bg-brand-light px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title={isEn ? "From Familiar Vietnamese Botanical Fibers" : "Từ những chất liệu quen thuộc của Việt Nam"}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
          {materials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4]"
            >
              <img 
                src={material.image} 
                alt={material.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-serif text-2xl text-brand-light mb-2">{material.name}</h3>
                <p className="text-brand-cream/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {material.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
