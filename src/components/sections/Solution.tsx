import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";

export function Solution() {
  return (
    <section className="py-24 bg-brand-olive text-brand-light px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Từ nhiều nhà cung cấp đến một bộ giải pháp."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-16 max-w-5xl mx-auto">
          {/* Before */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-dark/20 p-8 md:p-12 rounded-3xl border border-brand-light/10"
          >
            <span className="text-brand-beige text-sm font-semibold tracking-wider uppercase mb-6 block">Cách mua truyền thống</span>
            <ul className="flex flex-col gap-6 text-brand-cream/80 relative">
              <div className="absolute left-[7px] top-4 bottom-4 w-px bg-brand-light/20 -z-10"></div>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-light/30 mt-1 shrink-0"></span>
                <span>Cơ sở lưu trú</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-light/30 mt-1 shrink-0"></span>
                <span>Tìm từng sản phẩm</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-light/30 mt-1 shrink-0"></span>
                <span>Làm việc với nhiều nhà cung cấp</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-light/30 mt-1 shrink-0"></span>
                <span>Tự kiểm tra</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-light/30 mt-1 shrink-0"></span>
                <span>Tự đóng gói</span>
              </li>
              <li className="flex items-start gap-4 text-brand-light">
                <span className="w-4 h-4 rounded-full bg-brand-light mt-1 shrink-0"></span>
                <span>Đưa vào phòng</span>
              </li>
            </ul>
          </motion.div>
          
          {/* After */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-light text-brand-dark p-8 md:p-12 rounded-3xl border border-brand-light"
          >
            <span className="text-brand-olive text-sm font-semibold tracking-wider uppercase mb-6 block">Với Sợi Lành</span>
            <ul className="flex flex-col gap-6 text-brand-subtext relative">
              <div className="absolute left-[7px] top-4 bottom-4 w-px bg-brand-olive/20 -z-10"></div>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-light border-2 border-brand-olive/30 mt-1 shrink-0"></span>
                <span>Cơ sở lưu trú</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-light border-2 border-brand-olive/30 mt-1 shrink-0"></span>
                <span>Chọn Bản Mộc hoặc Bản Tinh Hoa</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-light border-2 border-brand-olive/30 mt-1 shrink-0"></span>
                <span>Tùy chỉnh nếu cần</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-light border-2 border-brand-olive/30 mt-1 shrink-0"></span>
                <span>Đặt theo số lượng phòng</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-brand-light border-2 border-brand-olive/30 mt-1 shrink-0"></span>
                <span>Nhận bộ hoàn chỉnh</span>
              </li>
              <li className="flex items-start gap-4 text-brand-dark font-medium">
                <span className="w-4 h-4 rounded-full bg-brand-olive mt-1 shrink-0"></span>
                <span>Đưa trực tiếp vào phòng</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 font-serif text-2xl md:text-3xl text-brand-beige"
        >
          Ít đầu mối hơn. Đồng bộ hơn. Dễ quản lý hơn.
        </motion.div>
      </div>
    </section>
  );
}
