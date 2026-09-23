import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext";

export function Comparison() {
  const { products, language } = useLanguage();
  const isEn = language === "en";
  const features = products[0]?.features || [];

  return (
    <section className="py-24 bg-brand-cream px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">
            {isEn ? "Detailed Comparison" : "So sánh chi tiết"}
          </h2>
        </div>
        
        {/* Desktop Table */}
        <div className="hidden md:block border-t border-brand-olive/20">
          <div className="grid grid-cols-3 py-6 border-b border-brand-olive/20 items-center">
            <div className="font-serif text-xl text-brand-dark">
              {isEn ? "Items & Features" : "Thành phần"}
            </div>
            <div className="font-serif text-xl text-brand-dark text-center">
              {isEn ? "Bản Mộc" : "Bản Mộc"}
            </div>
            <div className="font-serif text-xl text-brand-dark text-center text-brand-olive">
              {isEn ? "Bản Tinh Hoa" : "Bản Tinh Hoa"}
            </div>
          </div>
          
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="grid grid-cols-3 py-5 border-b border-brand-olive/10 items-center hover:bg-brand-light/50 transition-colors"
            >
              <div className="text-brand-text font-medium">{feature.name}</div>
              <div className="text-center text-brand-subtext">{feature.hoc}</div>
              <div className="text-center font-medium text-brand-olive">{feature.tinhHoa}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Stacked Cards */}
        <div className="md:hidden flex flex-col gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-brand-light p-6 rounded-xl border border-brand-olive/10 flex flex-col gap-4"
            >
              <div className="text-brand-dark font-serif text-xl border-b border-brand-cream pb-3">
                {feature.name}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-brand-subtext">Bản Mộc</span>
                <span className="font-medium">{feature.hoc}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-brand-subtext text-brand-olive">Bản Tinh Hoa</span>
                <span className="font-medium text-brand-olive">{feature.tinhHoa}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/lien-he">
            <Button size="lg">
              {isEn ? "Consult with Us on Choosing a Package" : "Nhận tư vấn lựa chọn combo"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
