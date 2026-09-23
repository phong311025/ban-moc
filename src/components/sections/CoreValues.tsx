import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { useLanguage } from "../../context/LanguageContext";

export function CoreValues() {
  const { coreValues, language } = useLanguage();
  const isEn = language === "en";

  return (
    <section className="py-24 bg-brand-cream px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow={isEn ? "About Sợi Lành" : "Về Sợi Lành"}
          title={isEn 
            ? "More than in-room amenities. It is an integral facet of the stay experience."
            : "Không chỉ là đồ dùng trong phòng. Đó là một phần của trải nghiệm lưu trú."
          }
          description={isEn
            ? "Sợi Lành was born out of a real lodging dilemma: rather than sourcing toothbrushes, combs, slippers, and soaps from fragmented vendors, Sợi Lành harmonizes them into unified, cohesive amenity collections—seamless to choose, order, and customize."
            : "Sợi Lành được phát triển từ một nhu cầu thực tế của các cơ sở lưu trú: thay vì phải tìm kiếm bàn chải, lược, dép, xà phòng và nhiều vật dụng từ nhiều nguồn khác nhau, Sợi Lành tập hợp chúng thành một bộ đồ dùng phòng khách (amenities) đồng bộ, dễ lựa chọn, dễ đặt hàng và phù hợp với từng mức nhu cầu."
          }
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-light p-8 rounded-2xl border border-brand-olive/10"
            >
              <span className="text-brand-olive font-serif text-3xl italic block mb-4">
                {value.id}
              </span>
              <h3 className="font-serif text-2xl text-brand-dark mb-4">
                {value.name}
              </h3>
              <p className="text-brand-text/80 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
