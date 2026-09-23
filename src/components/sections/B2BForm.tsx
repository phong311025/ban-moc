import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

type FormData = {
  fullName: string;
  property: string;
  propertyType: string;
  rooms: string;
  estimatedSets: string;
  combo: string;
  needs: string;
  phone: string;
  email: string;
  notes: string;
  wantsSample: boolean;
};

export function B2BForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { language } = useLanguage();
  const isEn = language === "en";

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    // Mock API call
    setTimeout(() => {
      console.log("Form submitted to /api/contact", data);
      setStatus("success");
    }, 1200);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-brand-light rounded-3xl p-8 md:p-12 shadow-sm border border-brand-olive/10">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-12"
          >
            <div className="w-20 h-20 bg-brand-olive/10 rounded-full flex items-center justify-center mb-6 text-brand-olive">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="font-serif text-3xl text-brand-dark mb-4">
              {isEn ? "Thank you for reaching out to Sợi Lành" : "Cảm ơn bạn đã quan tâm đến Sợi Lành"}
            </h3>
            <p className="text-brand-text/80 text-lg max-w-md">
              {isEn 
                ? "Our team will contact you shortly to consult and tailor the optimal solution for your property."
                : "Chúng tôi sẽ liên hệ trong thời gian sớm nhất để cùng bạn lựa chọn phương án phù hợp."
              }
            </p>
            <Button 
              className="mt-8" 
              onClick={() => setStatus("idle")}
              variant="outline"
            >
              {isEn ? "Submit another request" : "Gửi yêu cầu khác"}
            </Button>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark" htmlFor="fullName">
                  {isEn ? "Contact Name *" : "Họ và tên *"}
                </label>
                <input 
                  id="fullName"
                  {...register("fullName", { required: true })} 
                  className="w-full px-4 py-3 rounded-lg border border-brand-olive/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive focus:border-transparent transition-all"
                  placeholder={isEn ? "e.g. John Doe" : "Nhập họ và tên"}
                />
                {errors.fullName && <span className="text-xs text-red-500">{isEn ? "Please enter your name" : "Vui lòng nhập họ và tên"}</span>}
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark" htmlFor="property">
                  {isEn ? "Property Name *" : "Tên cơ sở lưu trú *"}
                </label>
                <input 
                  id="property"
                  {...register("property", { required: true })} 
                  className="w-full px-4 py-3 rounded-lg border border-brand-olive/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive focus:border-transparent transition-all"
                  placeholder={isEn ? "e.g. Serenity Homestay" : "VD: Sợi Lành Homestay"}
                />
                {errors.property && <span className="text-xs text-red-500">{isEn ? "Please enter property name" : "Vui lòng nhập tên cơ sở"}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark" htmlFor="propertyType">
                  {isEn ? "Property Type *" : "Loại hình cơ sở *"}
                </label>
                <select 
                  id="propertyType"
                  {...register("propertyType", { required: true })} 
                  className="w-full px-4 py-3 rounded-lg border border-brand-olive/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive focus:border-transparent transition-all"
                >
                  <option value="">{isEn ? "Select type" : "Chọn loại hình"}</option>
                  <option value="Homestay">Homestay</option>
                  <option value="Bungalow">Bungalow</option>
                  <option value="Glamping">Glamping</option>
                  <option value="Villa">Villa</option>
                  <option value="Boutique hotel">Boutique hotel</option>
                  <option value="Resort">Resort</option>
                  <option value="Khách sạn">{isEn ? "Hotel" : "Khách sạn"}</option>
                  <option value="Khác">{isEn ? "Other" : "Khác"}</option>
                </select>
                {errors.propertyType && <span className="text-xs text-red-500">{isEn ? "Please select property type" : "Vui lòng chọn loại hình"}</span>}
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark" htmlFor="rooms">
                  {isEn ? "Room Count *" : "Số phòng *"}
                </label>
                <input 
                  id="rooms"
                  type="number"
                  {...register("rooms", { required: true })} 
                  className="w-full px-4 py-3 rounded-lg border border-brand-olive/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive focus:border-transparent transition-all"
                  placeholder={isEn ? "e.g. 10" : "VD: 10"}
                />
                {errors.rooms && <span className="text-xs text-red-500">{isEn ? "Please specify room count" : "Vui lòng nhập số phòng"}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark" htmlFor="phone">
                  {isEn ? "Phone Number *" : "Số điện thoại *"}
                </label>
                <input 
                  id="phone"
                  {...register("phone", { required: true })} 
                  className="w-full px-4 py-3 rounded-lg border border-brand-olive/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive focus:border-transparent transition-all"
                  placeholder="09..."
                />
                {errors.phone && <span className="text-xs text-red-500">{isEn ? "Please enter phone number" : "Vui lòng nhập số điện thoại"}</span>}
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark" htmlFor="email">Email</label>
                <input 
                  id="email"
                  type="email"
                  {...register("email")} 
                  className="w-full px-4 py-3 rounded-lg border border-brand-olive/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive focus:border-transparent transition-all"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark" htmlFor="combo">
                  {isEn ? "Interested Collection" : "Combo quan tâm"}
                </label>
                <select 
                  id="combo"
                  {...register("combo")} 
                  className="w-full px-4 py-3 rounded-lg border border-brand-olive/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive focus:border-transparent transition-all"
                >
                  <option value="Bản Mộc">Bản Mộc</option>
                  <option value="Bản Tinh Hoa">Bản Tinh Hoa</option>
                  <option value="Chưa xác định">{isEn ? "Undecided" : "Chưa xác định"}</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-dark" htmlFor="needs">
                  {isEn ? "Primary Need" : "Nhu cầu chính"}
                </label>
                <select 
                  id="needs"
                  {...register("needs")} 
                  className="w-full px-4 py-3 rounded-lg border border-brand-olive/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive focus:border-transparent transition-all"
                >
                  <option value="Dùng thử">{isEn ? "Request Trial Kit" : "Dùng thử"}</option>
                  <option value="Nhận báo giá">{isEn ? "Quotation Request" : "Nhận báo giá"}</option>
                  <option value="Cá nhân hóa">{isEn ? "Custom Branding" : "Cá nhân hóa"}</option>
                  <option value="Hợp tác phân phối">{isEn ? "Distribution Partnership" : "Hợp tác phân phối"}</option>
                  <option value="Khác">{isEn ? "Other" : "Khác"}</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-brand-dark" htmlFor="notes">
                {isEn ? "Additional Notes" : "Ghi chú thêm"}
              </label>
              <textarea 
                id="notes"
                {...register("notes")} 
                className="w-full px-4 py-3 rounded-lg border border-brand-olive/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive focus:border-transparent transition-all min-h-[100px]"
                placeholder={isEn ? "Specific requests or inquiries..." : "Câu hỏi hoặc yêu cầu cụ thể..."}
              />
            </div>

            <div className="flex items-center gap-3 bg-brand-olive/5 p-4 rounded-lg">
              <input 
                id="wantsSample"
                type="checkbox"
                {...register("wantsSample")}
                className="w-5 h-5 rounded border-brand-olive/30 text-brand-olive focus:ring-brand-olive accent-brand-olive"
              />
              <label htmlFor="wantsSample" className="text-sm font-medium text-brand-dark cursor-pointer">
                {isEn ? "I would like to receive a sample kit for evaluation." : "Tôi muốn nhận bộ mẫu để trải nghiệm."}
              </label>
            </div>

            <div className="mt-4">
              <Button 
                type="submit" 
                size="lg" 
                className="w-full sm:w-auto min-w-[200px]"
                disabled={status === "loading"}
              >
                {status === "loading" 
                  ? (isEn ? "Submitting..." : "Đang gửi...") 
                  : (isEn ? "Submit Inquiry" : "Gửi yêu cầu")}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
