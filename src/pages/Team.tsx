import { SectionHeading } from "../components/ui/SectionHeading";
import { CTASection } from "../components/sections/CTASection";
import { motion } from "motion/react";

export function Team() {
  const members = [
    {
      name: "Nguyễn Thuý An",
      role: "Điều phối & kiểm soát chất lượng"
    },
    {
      name: "Lê Đức Duy",
      role: "Phát triển sản phẩm"
    },
    {
      name: "Cấn Thị Phương Dung",
      role: "Nguyên vật liệu & nguồn cung"
    },
    {
      name: "Nguyễn Thuỳ Dương",
      role: "Đối tác gia công"
    },
    {
      name: "Đặng Bảo Yến",
      role: "Tài chính & giá thành"
    },
    {
      name: "Phạm Tuấn Phong",
      role: "Thiết kế & nhận diện thương hiệu"
    },
    {
      name: "Phan Thị Minh Ánh",
      role: "Marketing & truyền thông"
    },
    {
      name: "Ba Thuỳ Dung",
      role: "Kho vận & đơn hàng"
    }
  ];

  const getInitials = (fullName: string) => {
    const parts = fullName.trim().split(" ");
    if (parts.length >= 2) {
      return `${parts[parts.length - 2][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return fullName.slice(0, 2).toUpperCase();
  };

  return (
    <main className="pt-32">
      <section className="pb-24 bg-brand-light px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            eyebrow="Đội ngũ"
            title="Những người đứng sau Sợi Lành"
            description="Dự án gồm 8 thành viên, xuất phát từ nhóm sinh viên Marketing - Học viện Tài chính."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
            {members.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-cream/60 border border-brand-olive/10 hover:border-brand-olive/30 hover:bg-brand-cream transition-all duration-300"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-olive/10 border-2 border-brand-olive/20 mb-5 flex items-center justify-center text-brand-olive font-serif text-xl sm:text-2xl font-semibold">
                  {getInitials(member.name)}
                </div>
                <h3 className="font-serif font-bold text-brand-dark text-base sm:text-lg mb-1.5 leading-snug">
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
