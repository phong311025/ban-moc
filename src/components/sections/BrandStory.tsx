import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

export function BrandStory() {
  const { language } = useLanguage();
  const isEn = language === "en";

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
          {isEn ? (
            <>
              From humble botanical fibers <br className="hidden md:block"/>
              to a gentler hospitality experience.
            </>
          ) : (
            <>
              Từ những sợi tự nhiên <br className="hidden md:block"/>
              đến một trải nghiệm lưu trú lành hơn.
            </>
          )}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-serif text-3xl text-brand-olive mb-4">
              {isEn ? '"Sợi" (Fibers)' : '"Sợi"'}
            </h3>
            <p className="text-brand-text/80 leading-relaxed">
              {isEn
                ? "Evoking bamboo, coconut coir, loofah, unbleached linen, and pure indigenous botanical fibers shaping each handcrafted amenity."
                : "Gợi liên tưởng đến tre, xơ dừa, xơ mướp, vải và những vật liệu tự nhiên tạo nên sản phẩm."
              }
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-3xl text-brand-olive mb-4">
              {isEn ? '"Lành" (Wholesome)' : '"Lành"'}
            </h3>
            <p className="text-brand-text/80 leading-relaxed">
              {isEn
                ? "Embodying mindful harmony between guest sensory luxury, craft preservation, and ecological well-being."
                : "Đại diện cho sự lựa chọn cân bằng giữa trải nghiệm, con người và môi trường."
              }
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
            {isEn
              ? '"Sợi Lành does not aspire to save the world overnight. We begin with mindful, pragmatic, tangible transformations in each guest room."'
              : "Sợi Lành không định vị là thương hiệu \"cứu thế giới\". Thương hiệu bắt đầu bằng những thay đổi nhỏ nhưng thực tế trong từng phòng nghỉ."
            }
          </p>
        </motion.div>
      </div>
    </section>
  );
}
