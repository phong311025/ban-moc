import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext";

export function CTASection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <section className="py-24 bg-brand-olive text-brand-cream px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif text-brand-light mb-6 leading-tight"
        >
          {isEn ? (
            <>
              Ready to introduce Sợi Lành <br className="hidden md:block"/>
              to your hospitality sanctuary?
            </>
          ) : (
            <>
              Bạn muốn đưa Sợi Lành <br className="hidden md:block"/>
              vào không gian lưu trú của mình?
            </>
          )}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-brand-cream/90 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {isEn
            ? "Begin with an intimate experience sample kit and let us collaborate on a tailored approach aligning with your room count, budget, and brand presence."
            : "Hãy bắt đầu bằng một bộ mẫu và cùng chúng tôi lựa chọn phương án phù hợp với số phòng, ngân sách và hình ảnh thương hiệu của bạn."
          }
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/lien-he?type=dung-thu">
            <Button size="lg" className="w-full sm:w-auto bg-brand-light text-brand-olive hover:bg-brand-cream hover:text-brand-dark hover:-translate-y-[2px]">
              {isEn ? "Request Trial Kit" : "Nhận bộ dùng thử"}
            </Button>
          </Link>
          <Link to="/lien-he">
            <Button size="lg" className="w-full sm:w-auto bg-transparent border-brand-light text-brand-light hover:bg-brand-light hover:text-brand-olive hover:-translate-y-[2px] border">
              {isEn ? "Request Quote" : "Yêu cầu báo giá"}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
