import { SectionHeading } from "../components/ui/SectionHeading";
import { CTASection } from "../components/sections/CTASection";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function Team() {
  const { teamMembers, language } = useLanguage();
  const isEn = language === "en";

  const workflowSteps = isEn ? [
    "R&D & Design",
    "Material Sourcing",
    "Partner Crafting",
    "Quality Control",
    "Set Assembly",
    "Warehousing",
    "B2B Distribution"
  ] : [
    "Nghiên cứu và thiết kế",
    "Lựa chọn nguồn nguyên liệu",
    "Đối tác gia công",
    "Kiểm soát chất lượng",
    "Đóng bộ",
    "Lưu kho",
    "Phân phối B2B"
  ];

  return (
    <main className="pt-32">
      <section className="pb-24 bg-brand-light px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            eyebrow={isEn ? "The Team" : "Đội ngũ"}
            title={isEn ? "The Minds Behind Sợi Lành" : "Những người đứng sau Sợi Lành"}
            description={isEn 
              ? "Founded by 8 dedicated members from the Marketing discipline at Academy of Finance."
              : "Dự án gồm 8 thành viên, xuất phát từ nhóm sinh viên Marketing - Học viện Tài chính."
            }
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mt-16 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-cream/60 border border-brand-olive/10 hover:border-brand-olive/30 hover:bg-brand-cream transition-all duration-300"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-olive/10 border-2 border-brand-olive/20 mb-5 flex items-center justify-center text-brand-olive font-serif text-lg sm:text-xl font-bold tracking-wider">
                  {member.initials}
                </div>
                <h3 className="font-serif font-bold text-brand-dark text-base sm:text-lg mb-2 leading-snug">
                  {member.name}
                </h3>
                <p className="text-brand-text/75 text-xs sm:text-sm leading-relaxed">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-cream px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title={isEn ? "From Raw Fibers to Guest Rooms" : "Từ nguyên liệu đến phòng nghỉ"}
            description={isEn
              ? "Sợi Lành focuses intently on R&D, Design, Craft Standards, QC, Supply Chain Governance, Brand Storytelling, and Distribution. Production is coordinated closely with ethical local artisanal workshops."
              : "Sợi Lành tập trung vào R&D, Thiết kế, Tiêu chuẩn sản phẩm, QC, Quản trị chuỗi cung ứng, Thương hiệu và Phân phối. Các công đoạn sản xuất được phối hợp với những đối tác gia công phù hợp."
            }
          />
          
          <div className="mt-16 overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex justify-between items-start min-w-[800px] relative px-4">
              <div className="absolute top-6 left-12 right-12 h-px bg-brand-olive/20 -z-10"></div>
              
              {workflowSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center w-32"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-cream border-4 border-brand-light shadow-sm flex items-center justify-center mb-4 relative z-10">
                    <div className="w-4 h-4 rounded-full bg-brand-olive"></div>
                  </div>
                  <p className="text-sm font-medium text-brand-dark leading-snug">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
