import { B2BForm } from "../components/sections/B2BForm";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function Contact() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 bg-brand-cream px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeading 
          eyebrow="Liên hệ"
          title={type === "dung-thu" ? "Đăng ký nhận bộ dùng thử" : type === "ca-nhan-hoa" ? "Yêu cầu thiết kế mẫu" : "Bắt đầu hành trình với Sợi Lành"}
          description="Hãy để lại thông tin, chúng tôi sẽ liên hệ để tư vấn giải pháp amenities phù hợp nhất cho cơ sở lưu trú của bạn."
        />
        
        <div className="mt-16">
          <B2BForm />
        </div>
      </div>
    </main>
  );
}
