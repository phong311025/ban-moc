import { BrandStory } from "../components/sections/BrandStory";
import { CoreValues } from "../components/sections/CoreValues";
import { Materials } from "../components/sections/Materials";
import { CTASection } from "../components/sections/CTASection";
import { SectionHeading } from "../components/ui/SectionHeading";

export function Story() {
  return (
    <main className="pt-24">
      <BrandStory />
      
      <section className="py-24 bg-brand-olive text-brand-light px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeading 
            eyebrow="Sứ mệnh"
            title="Sứ mệnh của Sợi Lành"
          />
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed italic mb-6">
            "Sứ mệnh của Sợi Lành là cam kết mang đến cho các cơ sở lưu trú những giải pháp amenities thân thiện với môi trường, tiện lợi và phù hợp, góp phần nâng cao trải nghiệm khách lưu trú và thúc đẩy lối sống, kinh doanh theo hướng bền vững."
          </blockquote>
        </div>
      </section>

      <CoreValues />
      <Materials />
      
      <section className="py-24 bg-brand-light px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Chúng tôi đang bắt đầu từ thực tế."
          />
          <div className="bg-brand-cream p-8 md:p-12 rounded-3xl border border-brand-olive/10 mt-12">
            <ul className="flex flex-col gap-6 text-brand-dark">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-brand-olive mt-2 shrink-0"></span>
                <span className="text-lg">Đã phát triển các bộ sản phẩm mẫu.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-brand-olive mt-2 shrink-0"></span>
                <span className="text-lg">Đã thực hiện khảo sát với 15 chủ cơ sở lưu trú tại Hà Nội, Hòa Bình và Ninh Bình.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-brand-olive mt-2 shrink-0"></span>
                <span className="text-lg">Phản hồi ban đầu cho thấy nhu cầu dùng thử tích cực khi nguồn cung ứng có thể duy trì ổn định.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
