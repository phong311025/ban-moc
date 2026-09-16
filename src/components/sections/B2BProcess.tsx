import { motion } from "motion/react";
import { b2bSteps } from "../../data";
import { SectionHeading } from "../ui/SectionHeading";

export function B2BProcess() {
  return (
    <section className="py-24 bg-brand-cream px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        <div className="flex-1 w-full lg:order-2">
          <SectionHeading 
            title="Bắt đầu với Sợi Lành như thế nào?"
            align="left"
          />
          
          <div className="flex flex-col gap-6 mt-10">
            {b2bSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-6 bg-brand-light p-6 rounded-2xl border border-brand-olive/10"
              >
                <div className="font-serif text-3xl text-brand-olive/40 italic">
                  {step.step}
                </div>
                <div className="font-medium text-brand-dark text-lg">
                  {step.name}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 p-6 bg-brand-olive/5 rounded-2xl border border-brand-olive/10"
          >
            <p className="text-sm text-brand-subtext">
              <span className="font-semibold text-brand-dark">Đối tác lớn:</span> Có thể triển khai hợp đồng cung ứng theo tháng, quý hoặc chu kỳ hoạt động.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full lg:order-1"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-brand-beige relative shadow-xl">
             <img 
               src="https://images.unsplash.com/photo-1551882547-ff40c0d5c9f4?q=80&w=1974&auto=format&fit=crop" 
               alt="Hợp tác B2B Sợi Lành" 
               className="absolute inset-0 w-full h-full object-cover"
             />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
