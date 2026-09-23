import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { useLanguage } from "../../context/LanguageContext";

export function GreenRoomExperience() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const steps = isEn ? [
    { num: "01", text: "Accommodation selects suitable collection" },
    { num: "02", text: "Sợi Lành prepares & applies custom branding" },
    { num: "03", text: "Kits are placed directly inside guest rooms" },
    { num: "04", text: "Guests indulge in organic tactile amenities" },
    { num: "05", text: "Guests scan QR to discover the ESG narrative" },
    { num: "06", text: "Lodging tracks tangible green experience impact" },
  ] : [
    { num: "01", text: "Cơ sở lưu trú lựa chọn combo" },
    { num: "02", text: "Sợi Lành chuẩn bị và cá nhân hóa" },
    { num: "03", text: "Bộ sản phẩm được đặt tại phòng" },
    { num: "04", text: "Khách sử dụng" },
    { num: "05", text: "Khách quét QR và đọc câu chuyện sản phẩm" },
    { num: "06", text: "Cơ sở lưu trú ghi nhận dữ liệu trải nghiệm" },
  ];

  return (
    <section className="py-24 bg-brand-light px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          eyebrow={isEn ? "Green Room Experience" : "Trải nghiệm phòng xanh"}
          title={isEn 
            ? "Helping guests not only see green, but truly immerse in it."
            : "Để khách không chỉ nhìn thấy màu xanh, mà thực sự trải nghiệm nó."
          }
          description={isEn
            ? "A sustainable stay begins with the most tactile, intimate, and mindful touchpoints in every guest room."
            : "Một kỳ nghỉ bền vững bắt đầu từ những chi tiết chạm mộc mạc, tinh tế và chân thực nhất trong từng phòng nghỉ."
          }
        />
        
        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:flex justify-between items-start mt-20 relative">
          <div className="absolute top-6 left-0 right-0 h-px bg-brand-olive/20 -z-10"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center w-40 relative group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-light border-2 border-brand-olive flex items-center justify-center text-brand-olive font-serif text-lg mb-6 group-hover:bg-brand-olive group-hover:text-brand-light transition-colors z-10">
                {step.num}
              </div>
              <p className="text-sm font-medium text-brand-dark leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden flex flex-col gap-8 mt-12 relative max-w-sm mx-auto">
          <div className="absolute left-6 top-6 bottom-6 w-px bg-brand-olive/20 -z-10"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-6"
            >
              <div className="w-12 h-12 rounded-full bg-brand-light border-2 border-brand-olive flex items-center justify-center text-brand-olive font-serif text-lg shrink-0 z-10">
                {step.num}
              </div>
              <p className="text-sm font-medium text-brand-dark leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
