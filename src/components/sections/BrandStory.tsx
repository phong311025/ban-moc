import { motion } from "motion/react";

export function BrandStory() {
  return (
    <section className="py-24 bg-brand-light px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif text-brand-dark mb-12 leading-tight"
        >
          Từ những sợi tự nhiên <br className="hidden md:block"/>
          đến một trải nghiệm lưu trú lành hơn.
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-serif text-3xl text-brand-olive mb-4">"Sợi"</h3>
            <p className="text-brand-text/80 leading-relaxed">
              Gợi liên tưởng đến tre, xơ dừa, xơ mướp, vải và những vật liệu tự nhiên tạo nên sản phẩm.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-3xl text-brand-olive mb-4">"Lành"</h3>
            <p className="text-brand-text/80 leading-relaxed">
              Đại diện cho sự lựa chọn cân bằng giữa trải nghiệm, con người và môi trường.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 md:p-12 bg-brand-cream rounded-3xl border border-brand-olive/10"
        >
          <p className="font-serif text-xl md:text-2xl text-brand-dark italic leading-relaxed">
            Sợi Lành không định vị là thương hiệu "cứu thế giới". Thương hiệu bắt đầu bằng những thay đổi nhỏ nhưng thực tế trong từng phòng nghỉ.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
