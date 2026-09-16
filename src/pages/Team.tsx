import { SectionHeading } from "../components/ui/SectionHeading";
import { CTASection } from "../components/sections/CTASection";
import { motion } from "motion/react";

export function Team() {
  const roles = [
    "Quản lý dự án",
    "Nghiên cứu và phát triển sản phẩm",
    "Tìm kiếm nhà cung cấp",
    "Tài chính đầu vào",
    "Tìm kiếm xưởng sản xuất",
    "Thiết kế visual và nhận diện",
    "Marketing",
    "Tài chính và giá bán"
  ];

  return (
    <main className="pt-32">
      <section className="pb-24 bg-brand-light px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            eyebrow="Đội ngũ"
            title="Những người đứng sau Sợi Lành"
            description="Dự án gồm 8 thành viên, xuất phát từ nhóm sinh viên Marketing - Học viện Tài chính."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto">
            {roles.map((role, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-brand-beige/50 mb-6 flex items-center justify-center">
                  <span className="font-serif text-3xl text-brand-olive/30 italic">SL</span>
                </div>
                <h4 className="font-medium text-brand-dark text-sm sm:text-base leading-snug">
                  {role}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-cream px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Từ nguyên liệu đến phòng nghỉ"
            description="Sợi Lành tập trung vào R&D, Thiết kế, Tiêu chuẩn sản phẩm, QC, Quản trị chuỗi cung ứng, Thương hiệu và Phân phối. Các công đoạn sản xuất được phối hợp với những đối tác gia công phù hợp."
          />
          
          <div className="mt-16 overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex justify-between items-start min-w-[800px] relative px-4">
              <div className="absolute top-6 left-12 right-12 h-px bg-brand-olive/20 -z-10"></div>
              
              {[
                "Nghiên cứu và thiết kế",
                "Lựa chọn nguồn nguyên liệu",
                "Đối tác gia công",
                "Kiểm soát chất lượng",
                "Đóng bộ",
                "Lưu kho",
                "Phân phối B2B"
              ].map((step, index) => (
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
