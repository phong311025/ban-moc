import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export function Personalization() {
  return (
    <section className="py-24 bg-brand-cream px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
        
        <div className="flex-1 w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-brand-dark mb-6 leading-tight"
          >
            Sợi Lành của riêng bạn.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-text/80 text-lg leading-relaxed mb-10"
          >
            Với các đơn hàng phù hợp, Sợi Lành có thể điều chỉnh một số yếu tố nhận diện như logo, thông điệp, thẻ câu chuyện và bao bì để phù hợp hơn với hình ảnh của từng cơ sở lưu trú.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 grid grid-cols-2 gap-4"
          >
            <div className="bg-brand-light p-4 rounded-xl border border-brand-olive/10 text-center">
              <span className="block text-brand-olive mb-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg></span>
              <span className="text-sm font-medium">Logo trên túi & tag</span>
            </div>
            <div className="bg-brand-light p-4 rounded-xl border border-brand-olive/10 text-center">
              <span className="block text-brand-olive mb-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg></span>
              <span className="text-sm font-medium">Màu nhận diện</span>
            </div>
            <div className="bg-brand-light p-4 rounded-xl border border-brand-olive/10 text-center">
              <span className="block text-brand-olive mb-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg></span>
              <span className="text-sm font-medium">Thẻ câu chuyện riêng</span>
            </div>
            <div className="bg-brand-light p-4 rounded-xl border border-brand-olive/10 text-center">
              <span className="block text-brand-olive mb-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span>
              <span className="text-sm font-medium">Welcome message</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/lien-he?type=ca-nhan-hoa">
              <Button size="lg">Yêu cầu thiết kế mẫu</Button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-brand-beige relative shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=2070&auto=format&fit=crop" 
              alt="Cá nhân hóa Sợi Lành" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
