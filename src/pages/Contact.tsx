import { B2BForm } from "../components/sections/B2BForm";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const { language } = useLanguage();
  const isEn = language === "en";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getTitle = () => {
    if (type === "dung-thu") {
      return isEn ? "Register for an Experience Sample Kit" : "Đăng ký nhận bộ dùng thử";
    }
    if (type === "ca-nhan-hoa") {
      return isEn ? "Request Custom Branding & Mockups" : "Yêu cầu thiết kế mẫu";
    }
    return isEn ? "Begin Your Journey with Sợi Lành" : "Bắt đầu hành trình với Sợi Lành";
  };

  return (
    <main className="pt-32 pb-24 bg-brand-cream px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeading 
          eyebrow={isEn ? "Get In Touch" : "Liên hệ"}
          title={getTitle()}
          description={isEn
            ? "Leave your details and our team will get in touch to consult the most harmonious amenities solution for your establishment."
            : "Hãy để lại thông tin, chúng tôi sẽ liên hệ để tư vấn giải pháp đồ dùng tiêu hao phù hợp nhất cho cơ sở lưu trú của bạn."
          }
        />
        
        <div className="mt-16">
          <B2BForm />
        </div>
      </div>
    </main>
  );
}
