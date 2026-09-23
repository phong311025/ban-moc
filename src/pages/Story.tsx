import { BrandStory } from "../components/sections/BrandStory";
import { CoreValues } from "../components/sections/CoreValues";
import { Materials } from "../components/sections/Materials";
import { CTASection } from "../components/sections/CTASection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

export function Story() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <main className="pt-24">
      <BrandStory />
      
      <section className="py-24 bg-brand-olive text-brand-light px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center">
            <SectionHeading 
              eyebrow={isEn ? "Vision" : "Tầm nhìn"}
              title={isEn ? "Our Vision" : "Tầm nhìn của Sợi Lành"}
              theme="dark"
            />
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed italic max-w-4xl mx-auto text-brand-cream/95">
              {isEn 
                ? '"Sợi Lành strives to become Vietnam\'s reputable and trusted partner providing eco-conscious, comprehensive, and sustainable amenities solutions for lodging establishments."'
                : '"Sợi Lành hướng tới trở thành thương hiệu và đối tác uy tín và đáng tin cậy tại Việt Nam cung cấp giải pháp đồ dùng tiêu hao thân thiện với môi trường, toàn diện và bền vững cho cơ sở lưu trú."'
              }
            </blockquote>
          </div>

          <div className="w-24 h-px bg-brand-light/20 mx-auto"></div>

          <div className="text-center">
            <SectionHeading 
              eyebrow={isEn ? "Mission" : "Sứ mệnh"}
              title={isEn ? "Our Mission" : "Sứ mệnh của Sợi Lành"}
              theme="dark"
            />
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed italic max-w-4xl mx-auto text-brand-cream/95">
              {isEn
                ? '"Sợi Lành is committed to delivering eco-friendly, practical, and tailored amenities solutions to accommodations—enhancing the guest hospitality experience while driving sustainable living and conscientious business practices."'
                : '"Sứ mệnh của Sợi Lành là cam kết mang đến cho các cơ sở lưu trú những giải pháp đồ dùng tiêu hao thân thiện với môi trường, tiện lợi và phù hợp, góp phần nâng cao trải nghiệm khách lưu trú và thúc đẩy lối sống, kinh doanh theo hướng bền vững."'
              }
            </blockquote>
          </div>
        </div>
      </section>

      <CoreValues />
      <Materials />
      
      <section className="py-24 bg-brand-light px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title={isEn ? "Grounding Every Step in Reality." : "Chúng tôi đang bắt đầu từ thực tế."}
          />
          <div className="bg-brand-cream p-8 md:p-12 rounded-3xl border border-brand-olive/10 mt-12">
            <ul className="flex flex-col gap-6 text-brand-dark">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-brand-olive mt-2 shrink-0"></span>
                <span className="text-lg">
                  {isEn 
                    ? "Successfully prototyped sample suites across Bản Mộc and Bản Tinh Hoa lines."
                    : "Đã phát triển các bộ sản phẩm mẫu."
                  }
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-brand-olive mt-2 shrink-0"></span>
                <span className="text-lg">
                  {isEn
                    ? "Conducted deep-dive field research with 15 accommodation owners across Hanoi, Hoa Binh, and Ninh Binh."
                    : "Đã thực hiện khảo sát với 15 chủ cơ sở lưu trú tại Hà Nội, Hòa Bình và Ninh Bình."
                  }
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-brand-olive mt-2 shrink-0"></span>
                <span className="text-lg">
                  {isEn
                    ? "Early feedback indicates eager enthusiasm for adoption whenever supply consistency and prompt fulfillment can be guaranteed."
                    : "Phản hồi ban đầu cho thấy nhu cầu dùng thử tích cực khi nguồn cung ứng có thể duy trì ổn định."
                  }
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
