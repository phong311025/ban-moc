import { ESG } from "../components/sections/ESG";
import { GreenRoomExperience } from "../components/sections/GreenRoomExperience";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CTASection } from "../components/sections/CTASection";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function ESGPage() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const visionSteps = isEn ? [
    "Establish leadership across the small & medium hospitality segment",
    "Evolve from ad-hoc supplier to trusted recurring recurring amenity partner",
    "Expand from Bản Mộc & Bản Tinh Hoa into the thriving Sợi Lành Khởi Sắc ecosystem",
    "Build a transparent, controllable, and traceable green supply network"
  ] : [
    "Xây dựng vị thế trong phân khúc cơ sở lưu trú nhỏ và vừa",
    "Phát triển từ nhà cung cấp của Sợi Lành thành đối tác cung ứng đồ dùng tiêu hao định kỳ",
    "Mở rộng từ Sợi Lành Bản Mộc hay Tinh Hoa thành hệ sinh thái Sợi Lành Khởi sắc",
    "Xây dựng mạng lưới cung ứng xanh có khả năng kiểm soát và truy xuất"
  ];

  return (
    <main className="pt-24">
      <ESG />
      
      <section className="py-24 bg-brand-cream px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            eyebrow={isEn ? "Vision" : "Tầm nhìn"}
            title={isEn ? "Our Strategic Vision" : "Tầm nhìn của Sợi Lành"}
            description={isEn 
              ? "Sợi Lành strives to become Vietnam's reputable and trusted partner providing eco-conscious, comprehensive, and sustainable amenities solutions for lodging establishments."
              : "Sợi Lành hướng tới trở thành thương hiệu và đối tác uy tín và đáng tin cậy tại Việt Nam cung cấp giải pháp đồ dùng tiêu hao thân thiện với môi trường, toàn diện và bền vững cho cơ sở lưu trú."
            }
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {visionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-light p-8 rounded-2xl border border-brand-olive/10 relative"
              >
                <span className="text-brand-olive/20 font-serif text-5xl italic absolute top-4 right-6 pointer-events-none">
                  0{index + 1}
                </span>
                <p className="font-medium text-brand-dark mt-8 relative z-10 text-lg">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GreenRoomExperience />

      <section className="py-24 bg-brand-light px-6 border-t border-brand-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title={isEn ? "Beyond Aesthetics. Grounded in Evidence." : "Không chỉ đẹp. Phải có cơ sở."}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="bg-brand-cream p-8 rounded-2xl">
              <h3 className="font-serif text-2xl text-brand-dark mb-4">
                {isEn ? "Ethical Sourcing" : "Nguồn nguyên liệu"}
              </h3>
              <p className="text-brand-text/80">
                {isEn 
                  ? "Maintaining transparent dossiers of local suppliers and botanical origins."
                  : "Lưu hồ sơ nhà cung cấp và nguồn gốc vật liệu."
                }
              </p>
            </div>
            <div className="bg-brand-cream p-8 rounded-2xl">
              <h3 className="font-serif text-2xl text-brand-dark mb-4">
                {isEn ? "Quality Assurance" : "Kiểm soát chất lượng"}
              </h3>
              <p className="text-brand-text/80">
                {isEn
                  ? "Strict input assessment and final product consistency evaluation."
                  : "Kiểm tra chất lượng đầu vào và thành phẩm."
                }
              </p>
            </div>
            <div className="bg-brand-cream p-8 rounded-2xl">
              <h3 className="font-serif text-2xl text-brand-dark mb-4">
                {isEn ? "Independent Testing" : "Kiểm nghiệm"}
              </h3>
              <p className="text-brand-text/80">
                {isEn
                  ? "Eligible amenities are submitted to certified independent laboratories for material testing."
                  : "Các sản phẩm phù hợp sẽ được gửi đến đơn vị kiểm nghiệm độc lập."
                }
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center text-sm text-brand-subtext italic">
            {isEn 
              ? "Official laboratory certifications and dossiers are updated continuously as verifications conclude."
              : "Thông tin kiểm nghiệm và chứng nhận sẽ được cập nhật khi quy trình hoàn tất."
            }
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
