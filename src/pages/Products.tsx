import { ComboProducts } from "../components/sections/ComboProducts";
import { Comparison } from "../components/sections/Comparison";
import { SectionHeading } from "../components/ui/SectionHeading";
import { individualProducts } from "../data";
import { motion } from "motion/react";
import { CTASection } from "../components/sections/CTASection";

export function Products() {
  return (
    <main className="pt-24">
      <ComboProducts />
      <Comparison />
      
      <section className="py-24 bg-brand-light px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            eyebrow="Chi tiết sản phẩm"
            title="Được chọn lọc cẩn thận cho một trải nghiệm trọn vẹn"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {individualProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-brand-beige mb-6 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-2xl text-brand-dark mb-3">{product.name}</h3>
                <p className="text-brand-text/80 text-sm leading-relaxed">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />
    </main>
  );
}
