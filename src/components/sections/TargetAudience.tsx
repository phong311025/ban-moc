import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

export function TargetAudience() {
  const audiences = [
    "Homestay",
    "Bungalow",
    "Glamping",
    "Boutique hotel",
    "Villa",
    "Resort",
    "Khách sạn",
  ];

  const benefits = [
    "Báo giá theo sản lượng",
    "Cung ứng định kỳ",
    "Điều chỉnh số lượng theo nhu cầu",
    "Cá nhân hóa bao bì",
    "Cá nhân hóa thẻ câu chuyện",
    "Hỗ trợ triển khai Green Room Experience",
    "Đồng bộ nhận diện với thương hiệu lưu trú",
  ];

  return (
    <section className="py-24 bg-brand-light px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        <div className="flex-1 w-full">
          <SectionHeading 
            title="Một bộ amenities. Một điểm chạm thương hiệu."
            description="Sợi Lành hướng đến việc trở thành đối tác cung ứng định kỳ cho các cơ sở lưu trú, thay vì chỉ bán từng đơn hàng riêng lẻ."
            align="left"
          />
          
          <div className="mb-10">
            <h4 className="text-sm font-semibold tracking-wider text-brand-subtext uppercase mb-4">Các quyền lợi B2B</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-brand-text">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-olive mt-2 shrink-0"></span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          <Link to="/lien-he?type=dung-thu">
            <Button size="lg">Đăng ký nhận mẫu dùng thử</Button>
          </Link>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full relative"
        >
          <div className="aspect-square relative rounded-full overflow-hidden bg-brand-cream border-8 border-brand-light shadow-2xl p-12 flex flex-col items-center justify-center text-center">
             <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1629731671842-88028ff79603?q=80&w=2070&auto=format&fit=crop')] bg-cover mix-blend-multiply pointer-events-none"></div>
             <h3 className="font-serif text-3xl text-brand-dark mb-8 relative z-10">Phù hợp với</h3>
             <div className="flex flex-wrap justify-center gap-3 relative z-10">
               {audiences.map((audience, i) => (
                 <span key={i} className="bg-brand-light px-4 py-2 rounded-full text-sm font-medium text-brand-olive shadow-sm border border-brand-olive/10">
                   {audience}
                 </span>
               ))}
             </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
