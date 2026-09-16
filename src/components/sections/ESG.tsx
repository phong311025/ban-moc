import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";

export function ESG() {
  return (
    <section className="py-24 bg-brand-olive text-brand-light px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Xanh cần được nhìn thấy bằng dữ liệu."
          description="Sợi Lành hướng tới việc ghi nhận tác động thông qua những chỉ số đơn giản, minh bạch và có thể theo dõi."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-brand-dark/30 p-8 rounded-2xl border border-brand-light/10 flex flex-col justify-center min-h-[200px]"
          >
            <div className="font-serif text-4xl text-brand-beige mb-4">Đang cập nhật</div>
            <div className="text-sm text-brand-cream/80 uppercase tracking-wider">Số phòng đã sử dụng Sợi Lành</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-brand-dark/30 p-8 rounded-2xl border border-brand-light/10 flex flex-col justify-center min-h-[200px]"
          >
            <div className="font-serif text-4xl text-brand-beige mb-4">Đang cập nhật</div>
            <div className="text-sm text-brand-cream/80 uppercase tracking-wider">Số vật dụng dùng một lần được thay thế</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand-dark/30 p-8 rounded-2xl border border-brand-light/10 flex flex-col justify-center min-h-[200px]"
          >
            <div className="font-serif text-4xl text-brand-beige mb-4">Đang cập nhật</div>
            <div className="text-sm text-brand-cream/80 uppercase tracking-wider">Số lượt khách đã trải nghiệm</div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <p className="text-brand-cream/60 text-sm italic">
            "Chúng tôi chỉ sử dụng những tuyên bố môi trường khi có dữ liệu, hồ sơ nguồn gốc hoặc kết quả kiểm nghiệm phù hợp để chứng minh."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
