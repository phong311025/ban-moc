import { ESG } from "../components/sections/ESG";
import { GreenRoomExperience } from "../components/sections/GreenRoomExperience";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CTASection } from "../components/sections/CTASection";
import { motion } from "motion/react";

export function ESGPage() {
  return (
    <main className="pt-24">
      <ESG />
      
      <section className="py-24 bg-brand-cream px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            eyebrow="Tầm nhìn"
            title="Từ Green Room Kit đến Green Room Solution."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              "Xây dựng vị thế trong phân khúc lưu trú nhỏ và vừa",
              "Trở thành đối tác amenities cung ứng định kỳ",
              "Mở rộng thành hệ sinh thái Green Room Solution",
              "Xây dựng mạng lưới cung ứng có khả năng kiểm soát và truy xuất"
            ].map((step, index) => (
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
            title="Không chỉ đẹp. Phải có cơ sở."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="bg-brand-cream p-8 rounded-2xl">
              <h3 className="font-serif text-2xl text-brand-dark mb-4">Nguồn nguyên liệu</h3>
              <p className="text-brand-text/80">Lưu hồ sơ nhà cung cấp và nguồn gốc vật liệu.</p>
            </div>
            <div className="bg-brand-cream p-8 rounded-2xl">
              <h3 className="font-serif text-2xl text-brand-dark mb-4">Kiểm soát chất lượng</h3>
              <p className="text-brand-text/80">Kiểm tra chất lượng đầu vào và thành phẩm.</p>
            </div>
            <div className="bg-brand-cream p-8 rounded-2xl">
              <h3 className="font-serif text-2xl text-brand-dark mb-4">Kiểm nghiệm</h3>
              <p className="text-brand-text/80">Các sản phẩm phù hợp sẽ được gửi đến đơn vị kiểm nghiệm độc lập.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center text-sm text-brand-subtext italic">
            Thông tin kiểm nghiệm và chứng nhận sẽ được cập nhật khi quy trình hoàn tất.
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
