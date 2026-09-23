import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { useLanguage } from "../../context/LanguageContext";

export function B2BProcess() {
  const { b2bSteps, language } = useLanguage();
  const isEn = language === "en";

  return (
    <section className="py-24 bg-brand-cream px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        <div className="flex-1 w-full lg:order-2">
          <SectionHeading 
            title={isEn ? "How to Begin with Sợi Lành?" : "Bắt đầu với Sợi Lành như thế nào?"}
            align="left"
          />
          
          <div className="flex flex-col gap-6 mt-10">
            {b2bSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-6 bg-brand-light p-6 rounded-2xl border border-brand-olive/10"
              >
                <div className="font-serif text-3xl text-brand-olive/40 italic">
                  {step.step}
                </div>
                <div className="font-medium text-brand-dark text-lg">
                  {step.name}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 p-6 bg-brand-olive/5 rounded-2xl border border-brand-olive/10"
          >
            <p className="text-sm text-brand-subtext">
              <span className="font-semibold text-brand-dark">
                {isEn ? "Volume Partners:" : "Đối tác lớn:"}
              </span>{" "}
              {isEn 
                ? "Flexible supply agreements can be structured monthly, quarterly, or scheduled based on peak seasonal occupancy."
                : "Có thể triển khai hợp đồng cung ứng theo tháng, quý hoặc chu kỳ hoạt động."
              }
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full lg:order-1"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-brand-beige relative shadow-xl flex items-center justify-center">
             <img 
               src="https://scontent-hkg1-2.xx.fbcdn.net/v/t1.15752-9/813911478_2149816442597186_2649368284257405382_n.png?stp=dst-png&cstp=mx1122x1402&ctp=s1122x1402&_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFd7DoSUuVcw8DfRbBYc-wNOM2Ru8j3gvk4zZG7yPeC-do_FtF5IYZEFvnomn61dZ0-MIiDxCMdjPP0PbX514uS&_nc_ohc=XxImTJ0PHxoQ7kNvwF5ejeV&_nc_oc=AdpUARHdIRuBxKtH0Fi8oUGR6ksKEguE_l2KTdbIi82JPJe38uvhNelJnMlEFxpHHrGfYYV_PwXCMf1w3sI1aJCV&_nc_zt=23&_nc_ht=scontent-hkg1-2.xx&_nc_ss=7b2a8&oh=03_Q7cD6QHeOari-eSf5oUDsCA9jzHjVXRmIwFAHa4GPURx-suvRw&oe=6ADB47BD" 
               alt="Hợp tác B2B Sợi Lành" 
               className="w-full h-full object-contain md:object-cover"
             />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
