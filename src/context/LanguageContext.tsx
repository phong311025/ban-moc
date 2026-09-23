import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "vi" | "en";

export interface TeamMember {
  initials: string;
  name: string;
  role: string;
}

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  includedItems: string[];
  targetCustomers: string[];
  differences?: string[];
  features?: { name: string; hoc: string; tinhHoa: string }[];
}

export interface MaterialItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface IndividualProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface CoreValueItem {
  id: string;
  name: string;
  description: string;
}

export interface B2BStepItem {
  step: string;
  name: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  products: ProductItem[];
  materials: MaterialItem[];
  individualProducts: IndividualProductItem[];
  coreValues: CoreValueItem[];
  b2bSteps: B2BStepItem[];
  teamMembers: TeamMember[];
  visionSteps: string[];
}

const translations = {
  vi: {
    // Nav & Header
    "nav.home": "Trang chủ",
    "nav.products": "Sản phẩm",
    "nav.story": "Câu chuyện",
    "nav.partners": "Dành cho cơ sở lưu trú",
    "nav.esg": "Hành trình xanh",
    "nav.team": "Về chúng tôi",
    "nav.contact": "Liên hệ",
    "nav.trial": "Nhận bộ dùng thử",
    "nav.langLabel": "Ngôn ngữ",

    // Hero
    "hero.title1": "Những lựa chọn lành",
    "hero.title2": "cho một kỳ nghỉ xanh hơn.",
    "hero.description": "Sợi Lành mang đến những bộ đồ dùng tiêu hao được thiết kế đồng bộ từ các vật liệu thân thiện hơn với môi trường, giúp cơ sở lưu trú từng bước chuyển đổi trải nghiệm phòng nghỉ mà vẫn đảm bảo sự tiện lợi, thẩm mỹ và dấu ấn thương hiệu.",
    "hero.cta1": "Khám phá Sợi Lành",
    "hero.cta2": "Dành cho cơ sở lưu trú",
    "hero.bullet1": "Vật liệu tự nhiên và tái chế",
    "hero.bullet2": "Thiết kế đồng bộ",
    "hero.bullet3": "Có thể cá nhân hóa",

    // Target Audience
    "audience.eyebrow": "Đối tượng phù hợp",
    "audience.title": "Dành cho những không gian lưu trú quan tâm đến trải nghiệm xanh.",
    "audience.desc": "Sợi Lành được phát triển để đồng hành cùng các mô hình lưu trú đang tìm kiếm giải pháp đồ dùng tiêu hao tự nhiên, vừa vặn với ngân sách và thẩm mỹ không gian.",
    "audience.homestay.title": "Homestay & Bungalow",
    "audience.homestay.desc": "Mong muốn sự mộc mạc, gần gũi với thiên nhiên và tối ưu chi phí vận hành.",
    "audience.glamping.title": "Glamping & Eco-resort",
    "audience.glamping.desc": "Đề cao tính bền vững, trải nghiệm ngoài trời và tính thẩm mỹ tự nhiên trong từng góc nhỏ.",
    "audience.boutique.title": "Boutique Hotel & Villa",
    "audience.boutique.desc": "Cần sự chỉn chu, đồng bộ nhận diện thương hiệu và để lại dấu ấn tinh tế cho khách lưu trú.",
    "audience.hotel.title": "Khách sạn & Chuỗi lưu trú",
    "audience.hotel.desc": "Tìm kiếm giải pháp cung ứng ổn định, đạt tiêu chuẩn chất lượng và có khả năng tùy biến quy mô lớn.",

    // Combo Products
    "combos.eyebrow": "Sản phẩm cốt lõi",
    "combos.title": "Hai lựa chọn. Cùng một định hướng lành.",
    "combos.desc": "Bản Mộc và Bản Tinh Hoa được thiết kế để đáp ứng linh hoạt nhu cầu của từng cơ sở lưu trú.",
    "combos.includes": "Bộ tiện ích gồm:",
    "combos.viewDetail": "Xem chi tiết",
    "combos.orderTrial": "Đăng ký dùng thử",

    // Comparison
    "comp.eyebrow": "Bảng so sánh",
    "comp.title": "So sánh chi tiết 2 bộ sản phẩm",
    "comp.desc": "Lựa chọn phương án đồ dùng tiêu hao phù hợp nhất với mô hình vận hành của cơ sở.",
    "comp.feature": "Hạng mục",
    "comp.basic": "Cơ bản",
    "comp.advanced": "Nâng cao",
    "comp.yes": "Có",
    "comp.no": "Không",
    "comp.pair": "đôi",

    // Solution
    "solution.title": "Từ nhiều nhà cung cấp đến một bộ giải pháp.",
    "solution.before.title": "Cách mua truyền thống",
    "solution.before.1": "Cơ sở lưu trú",
    "solution.before.2": "Tìm từng sản phẩm",
    "solution.before.3": "Làm việc với nhiều nhà cung cấp",
    "solution.before.4": "Tự kiểm tra",
    "solution.before.5": "Tự đóng gói",
    "solution.before.6": "Đưa vào phòng",
    "solution.after.title": "Với Sợi Lành",
    "solution.after.1": "Cơ sở lưu trú",
    "solution.after.2": "Chọn Bản Mộc hoặc Bản Tinh Hoa",
    "solution.after.3": "Tùy chỉnh nếu cần",
    "solution.after.4": "Đặt theo số lượng phòng",
    "solution.after.5": "Nhận bộ hoàn chỉnh",
    "solution.after.6": "Đưa trực tiếp vào phòng",
    "solution.quote": "Ít đầu mối hơn. Đồng bộ hơn. Dễ quản lý hơn.",

    // Personalization
    "pers.eyebrow": "Dấu ấn thương hiệu",
    "pers.title": "Để câu chuyện của bạn xuất hiện trong phòng nghỉ.",
    "pers.desc": "Sợi Lành cung cấp các giải pháp cá nhân hóa linh hoạt, giúp mỗi bộ đồ dùng tiêu hao trở thành một phần tiếp nối trải nghiệm thương hiệu của cơ sở lưu trú.",
    "pers.tag1": "Logo thương hiệu",
    "pers.desc1": "In hoặc dập logo cơ sở lưu trú trực tiếp lên túi đay, bao bì giấy hoặc chi tiết sản phẩm.",
    "pers.tag2": "Thẻ câu chuyện riêng",
    "pers.desc2": "Tùy chỉnh thông điệp chào đón và chia sẻ cam kết xanh riêng biệt của cơ sở đến khách hàng.",
    "pers.tag3": "Lựa chọn thành phần",
    "pers.desc3": "Linh hoạt thêm bớt các sản phẩm trong bộ theo nhu cầu thực tế của từng phân hạng phòng.",

    // Materials
    "mat.eyebrow": "Nguồn gốc tự nhiên",
    "mat.title": "Những sợi tự nhiên tạo nên Sợi Lành",
    "mat.desc": "Ưu tiên vật liệu tự nhiên, dễ phân hủy sinh học và mang đậm dấu ấn bản địa Việt Nam.",

    // ESG
    "esg.title": "Xanh cần được nhìn thấy bằng dữ liệu.",
    "esg.desc": "Sợi Lành hướng tới việc ghi nhận tác động thông qua những chỉ số đơn giản, minh bạch và có thể theo dõi.",
    "esg.metric.pending": "Đang cập nhật",
    "esg.metric.rooms": "Số phòng đã sử dụng Sợi Lành",
    "esg.metric.plastic": "Số vật dụng dùng một lần được thay thế",
    "esg.metric.guests": "Số lượt khách đã trải nghiệm",
    "esg.quote": "“Chúng tôi chỉ sử dụng những tuyên bố môi trường khi có dữ liệu, hồ sơ nguồn gốc hoặc kết quả kiểm nghiệm phù hợp để chứng minh.”",

    // Vision & Mission
    "vision.eyebrow": "Tầm nhìn",
    "vision.title": "Tầm nhìn của Sợi Lành",
    "vision.desc": "Sợi Lành hướng tới trở thành thương hiệu và đối tác uy tín và đáng tin cậy tại Việt Nam cung cấp giải pháp đồ dùng tiêu hao thân thiện với môi trường, toàn diện và bền vững cho cơ sở lưu trú.",
    "mission.eyebrow": "Sứ mệnh",
    "mission.title": "Sứ mệnh của Sợi Lành",
    "mission.text": "Sứ mệnh của Sợi Lành là cam kết mang đến cho các cơ sở lưu trú những giải pháp đồ dùng tiêu hao thân thiện với môi trường, tiện lợi và phù hợp, góp phần nâng cao trải nghiệm khách lưu trú và thúc đẩy lối sống, kinh doanh theo hướng bền vững.",

    // Green Room Experience
    "green.eyebrow": "Trải nghiệm",
    "green.title": "Trải nghiệm phòng xanh (Green Room Experience)",
    "green.desc": "Một căn phòng bền vững bắt đầu từ những chi tiết nhỏ nhưng tinh tế và chân thực nhất.",
    "green.item1.title": "Điểm chạm đầu tiên",
    "green.item1.desc": "Chiếc túi đay mộc mạc đặt ngay ngắn trên bàn lavabo, tạo thiện cảm ngay từ ánh nhìn đầu tiên.",
    "green.item2.title": "Cảm giác chạm",
    "green.item2.desc": "Bề mặt tre mát mịn, mùi thơm dịu nhẹ tự nhiên của xà phòng khổ qua không hương liệu nhân tạo.",
    "green.item3.title": "Thông điệp đọng lại",
    "green.item3.desc": "Thẻ câu chuyện ESG giúp du khách hiểu được giá trị của hành động nhỏ mà cơ sở lưu trú đang cùng họ chung tay.",

    // Team
    "team.eyebrow": "Đội ngũ",
    "team.title": "Những người đứng sau Sợi Lành",
    "team.desc": "Dự án gồm 8 thành viên, xuất phát từ nhóm sinh viên Marketing - Học viện Tài chính.",
    "team.pipeline.title": "Từ nguyên liệu đến phòng nghỉ",
    "team.pipeline.desc": "Sợi Lành tập trung vào R&D, Thiết kế, Tiêu chuẩn sản phẩm, QC, Quản trị chuỗi cung ứng, Thương hiệu và Phân phối. Các công đoạn sản xuất được phối hợp với những đối tác gia công phù hợp.",
    "team.pipeline.1": "Nghiên cứu và thiết kế",
    "team.pipeline.2": "Lựa chọn nguồn nguyên liệu",
    "team.pipeline.3": "Đối tác gia công",
    "team.pipeline.4": "Kiểm soát chất lượng",
    "team.pipeline.5": "Đóng bộ",
    "team.pipeline.6": "Lưu kho",
    "team.pipeline.7": "Phân phối B2B",

    // B2B Process
    "process.eyebrow": "Quy trình hợp tác",
    "process.title": "5 bước đồng hành cùng Sợi Lành",
    "process.desc": "Quy trình làm việc minh bạch, linh hoạt và tối ưu theo tiến độ vận hành của cơ sở.",

    // B2B Form & Contact
    "form.eyebrow": "Đăng ký hợp tác",
    "form.title": "Bắt đầu chuyển đổi xanh cùng Sợi Lành",
    "form.desc": "Để lại thông tin cơ sở của bạn, chúng tôi sẽ liên hệ tư vấn và gửi bộ mẫu dùng thử trong vòng 24 giờ làm việc.",
    "form.name": "Họ và tên người liên hệ",
    "form.namePlaceholder": "Nguyễn Văn A",
    "form.property": "Tên cơ sở lưu trú",
    "form.propertyPlaceholder": "An Nhiên Homestay",
    "form.type": "Mô hình lưu trú",
    "form.typeSelect": "Chọn mô hình",
    "form.rooms": "Số lượng phòng",
    "form.roomsSelect": "Chọn quy mô phòng",
    "form.location": "Địa điểm cơ sở",
    "form.locationPlaceholder": "Hà Nội, Ninh Bình, Đà Lạt...",
    "form.phone": "Số điện thoại",
    "form.phonePlaceholder": "0912 345 678",
    "form.email": "Email liên hệ",
    "form.emailPlaceholder": "contact@annhien.vn",
    "form.requestType": "Nhu cầu của bạn",
    "form.req1": "Đăng ký nhận bộ mẫu dùng thử",
    "form.req2": "Tư vấn báo giá theo số lượng phòng",
    "form.req3": "Yêu cầu cá nhân hóa thương hiệu",
    "form.notes": "Ghi chú thêm",
    "form.notesPlaceholder": "Nhu cầu cụ thể hoặc mong muốn riêng của cơ sở...",
    "form.submit": "Gửi yêu cầu hợp tác",
    "form.submitting": "Đang gửi...",
    "form.success": "Gửi thông tin thành công!",
    "form.successDesc": "Cảm ơn bạn đã quan tâm đến Sợi Lành. Đội ngũ tư vấn sẽ liên hệ lại với bạn trong thời gian sớm nhất.",

    // CTA
    "cta.title": "Sẵn sàng mang đến trải nghiệm xanh cho phòng nghỉ của bạn?",
    "cta.desc": "Đăng ký ngay hôm nay để nhận bộ sản phẩm mẫu trải nghiệm trực tiếp tại cơ sở lưu trú của bạn.",
    "cta.btn1": "Nhận bộ dùng thử miễn phí",
    "cta.btn2": "Trò chuyện với chúng tôi",

    // Products Page
    "products.title": "Hệ thống sản phẩm Sợi Lành",
    "products.desc": "Được nghiên cứu và chọn lọc từ những nguyên liệu tự nhiên bản địa, mang lại sự tinh tế và tiện nghi thân thiện cho không gian phòng nghỉ.",
    "products.individualTitle": "Các sản phẩm đơn lẻ",
    "products.individualDesc": "Mỗi sản phẩm đều có thể đặt riêng hoặc tùy biến số lượng theo nhu cầu thực tế.",

    // Product Detail
    "detail.back": "Quay lại danh sách sản phẩm",
    "detail.included": "Danh mục sản phẩm trong bộ:",
    "detail.suitable": "Phù hợp nhất với:",
    "detail.orderNow": "Đăng ký đặt hàng & Báo giá",
    "detail.trySample": "Nhận mẫu thử nghiệm",

    // Footer
    "footer.slogan": "Sợi Lành - Xanh từ phòng nghỉ",
    "footer.explore": "Khám phá",
    "footer.partners": "Đối tác",
    "footer.contact": "Liên hệ",
    "footer.rights": "Bảo lưu mọi quyền.",
    "footer.privacy": "Chính sách bảo mật",
    "footer.terms": "Điều khoản sử dụng"
  },
  en: {
    // Nav & Header
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.story": "Our Story",
    "nav.partners": "For Accommodations",
    "nav.esg": "Green Journey",
    "nav.team": "About Us",
    "nav.contact": "Contact",
    "nav.trial": "Request Trial Kit",
    "nav.langLabel": "Language",

    // Hero
    "hero.title1": "Mindful choices",
    "hero.title2": "for a greener stay.",
    "hero.description": "Sợi Lành delivers cohesive amenities crafted from eco-friendly materials, helping accommodation partners elevate their guest room experience with convenience, aesthetics, and distinctive branding.",
    "hero.cta1": "Explore Sợi Lành",
    "hero.cta2": "For Accommodations",
    "hero.bullet1": "Natural & recycled materials",
    "hero.bullet2": "Cohesive aesthetic design",
    "hero.bullet3": "Customizable branding",

    // Target Audience
    "audience.eyebrow": "Target Partners",
    "audience.title": "Tailored for accommodations dedicated to sustainable guest experiences.",
    "audience.desc": "Sợi Lành accompanies hospitality spaces seeking natural amenities that balance budget efficiency and harmonious aesthetic.",
    "audience.homestay.title": "Homestays & Bungalows",
    "audience.homestay.desc": "Seeking rustic charm, closeness to nature, and optimized operational costs.",
    "audience.glamping.title": "Glamping & Eco-Resorts",
    "audience.glamping.desc": "Prioritizing sustainability, outdoor authenticity, and organic aesthetics in every detail.",
    "audience.boutique.title": "Boutique Hotels & Villas",
    "audience.boutique.desc": "Demanding meticulous craftsmanship, unified brand identity, and lasting impressions.",
    "audience.hotel.title": "Hotels & Lodging Chains",
    "audience.hotel.desc": "Looking for stable supply, certified quality standards, and scalable customization.",

    // Combo Products
    "combos.eyebrow": "Core Collections",
    "combos.title": "Two Collections. One Mindful Direction.",
    "combos.desc": "Bản Mộc and Bản Tinh Hoa are designed to flexibly fit the unique operational needs of each lodging partner.",
    "combos.includes": "Package includes:",
    "combos.viewDetail": "View Details",
    "combos.orderTrial": "Request Trial Kit",

    // Comparison
    "comp.eyebrow": "Comparison Matrix",
    "comp.title": "Detailed Collection Comparison",
    "comp.desc": "Select the optimal amenities package tailored for your operational model.",
    "comp.feature": "Feature / Item",
    "comp.basic": "Basic",
    "comp.advanced": "Advanced",
    "comp.yes": "Yes",
    "comp.no": "No",
    "comp.pair": "pairs",

    // Solution
    "solution.title": "From multiple vendors to a single unified solution.",
    "solution.before.title": "Traditional Procurement",
    "solution.before.1": "Accommodation Owner",
    "solution.before.2": "Source each item individually",
    "solution.before.3": "Coordinate with multiple suppliers",
    "solution.before.4": "Manual quality inspections",
    "solution.before.5": "Self-packaging into sets",
    "solution.before.6": "Place in guest rooms",
    "solution.after.title": "With Sợi Lành",
    "solution.after.1": "Accommodation Owner",
    "solution.after.2": "Select Bản Mộc or Bản Tinh Hoa",
    "solution.after.3": "Customize branding if desired",
    "solution.after.4": "Order based on room count",
    "solution.after.5": "Receive complete packaged sets",
    "solution.after.6": "Directly place in rooms",
    "solution.quote": "Fewer points of contact. Cohesive design. Seamless management.",

    // Personalization
    "pers.eyebrow": "Brand Identity",
    "pers.title": "Let your brand story shine inside each guest room.",
    "pers.desc": "Sợi Lành offers versatile personalization solutions, turning every amenity set into a natural extension of your lodging's brand experience.",
    "pers.tag1": "Custom Logo",
    "pers.desc1": "Print or emboss your logo directly on jute pouches, paper sleeves, or product components.",
    "pers.tag2": "Custom Story Card",
    "pers.desc2": "Share your lodging's unique green commitment and personalized welcome message with travelers.",
    "pers.tag3": "Modular Composition",
    "pers.desc3": "Flexibly adjust item quantities and configurations tailored to specific room tiers.",

    // Materials
    "mat.eyebrow": "Natural Sourcing",
    "mat.title": "The Natural Fibers Shaping Sợi Lành",
    "mat.desc": "Prioritizing natural, biodegradable materials infused with authentic Vietnamese heritage.",

    // ESG
    "esg.title": "Sustainability verified by tangible data.",
    "esg.desc": "Sợi Lành aims to record environmental impact through simple, transparent, and trackable metrics.",
    "esg.metric.pending": "Coming Soon",
    "esg.metric.rooms": "Rooms serviced by Sợi Lành",
    "esg.metric.plastic": "Single-use plastic items eliminated",
    "esg.metric.guests": "Guests who enjoyed green stays",
    "esg.quote": "“We only communicate environmental claims supported by concrete data, traceable sourcing, and certified testing.”",

    // Vision & Mission
    "vision.eyebrow": "Our Vision",
    "vision.title": "The Vision of Sợi Lành",
    "vision.desc": "Sợi Lành strives to become Vietnam's trusted and reputable partner, delivering comprehensive, eco-friendly, and sustainable amenities solutions for accommodations.",
    "mission.eyebrow": "Our Mission",
    "mission.title": "The Mission of Sợi Lành",
    "mission.text": "Sợi Lành is committed to delivering eco-friendly, convenient, and tailored amenities solutions to lodging providers, elevating guest stays while fostering sustainable lifestyles and business practices.",

    // Green Room Experience
    "green.eyebrow": "Experience",
    "green.title": "Green Room Experience",
    "green.desc": "A truly sustainable room begins with the smallest, most authentic tactile details.",
    "green.item1.title": "First Touchpoint",
    "green.item1.desc": "An organic jute bag neatly set on the vanity counter, establishing immediate warmth and care.",
    "green.item2.title": "Tactile Sensation",
    "green.item2.desc": "Smooth natural bamboo handles paired with the subtle botanical aroma of herbal bitter melon soap.",
    "green.item3.title": "Lasting Impression",
    "green.item3.desc": "The recycled ESG story card connects travelers with the purposeful actions they share with your lodging.",

    // Team
    "team.eyebrow": "Our Team",
    "team.title": "The People Behind Sợi Lành",
    "team.desc": "An 8-member project founded by Marketing students from the Academy of Finance.",
    "team.pipeline.title": "From Raw Materials to Guest Rooms",
    "team.pipeline.desc": "Sợi Lành focuses on R&D, Design, Quality Standards, QC, Supply Chain Management, Branding, and Distribution, collaborating with qualified manufacturing partners.",
    "team.pipeline.1": "R&D & Design",
    "team.pipeline.2": "Material Sourcing",
    "team.pipeline.3": "Manufacturing Partners",
    "team.pipeline.4": "Quality Assurance",
    "team.pipeline.5": "Kit Assembly",
    "team.pipeline.6": "Warehousing",
    "team.pipeline.7": "B2B Distribution",

    // B2B Process
    "process.eyebrow": "Partnership Process",
    "process.title": "5 Steps to Partner with Sợi Lành",
    "process.desc": "A transparent, flexible workflow tailored to your operational schedule.",

    // B2B Form & Contact
    "form.eyebrow": "Partnership Request",
    "form.title": "Begin Your Green Transition with Sợi Lành",
    "form.desc": "Leave your lodging details and our consulting team will reach out with a complimentary trial kit within 24 working hours.",
    "form.name": "Contact Person Full Name",
    "form.namePlaceholder": "John Doe",
    "form.property": "Accommodation Name",
    "form.propertyPlaceholder": "Serenity Homestay",
    "form.type": "Lodging Model",
    "form.typeSelect": "Select model",
    "form.rooms": "Number of Rooms",
    "form.roomsSelect": "Select room capacity",
    "form.location": "Location / Province",
    "form.locationPlaceholder": "Hanoi, Ninh Binh, Da Lat...",
    "form.phone": "Phone Number",
    "form.phonePlaceholder": "+84 912 345 678",
    "form.email": "Contact Email",
    "form.emailPlaceholder": "contact@serenity.vn",
    "form.requestType": "Primary Interest",
    "form.req1": "Request Complimentary Trial Kit",
    "form.req2": "Volume Quotation Inquiry",
    "form.req3": "Custom Brand Personalization",
    "form.notes": "Additional Notes",
    "form.notesPlaceholder": "Specific requirements or operational preferences...",
    "form.submit": "Submit Partnership Inquiry",
    "form.submitting": "Submitting...",
    "form.success": "Inquiry Submitted Successfully!",
    "form.successDesc": "Thank you for connecting with Sợi Lành. Our specialist will contact you shortly.",

    // CTA
    "cta.title": "Ready to bring a greener touch to your guest rooms?",
    "cta.desc": "Sign up today to receive a trial amenities set delivered straight to your property.",
    "cta.btn1": "Request Free Sample Kit",
    "cta.btn2": "Talk to Our Team",

    // Products Page
    "products.title": "Sợi Lành Product Ecosystem",
    "products.desc": "Researched and crafted from indigenous natural materials, bringing organic elegance and mindful comfort to hospitality spaces.",
    "products.individualTitle": "Individual Amenities",
    "products.individualDesc": "Each item can be ordered separately or customized in volume based on operational needs.",

    // Product Detail
    "detail.back": "Back to Product Catalog",
    "detail.included": "Included items in package:",
    "detail.suitable": "Best suited for:",
    "detail.orderNow": "Order & Get Quotation",
    "detail.trySample": "Request Sample Kit",

    // Footer
    "footer.slogan": "Sợi Lành - Green Stays From Within",
    "footer.explore": "Explore",
    "footer.partners": "Partners",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service"
  }
};

const productsData = {
  vi: [
    {
      id: "ban-moc",
      name: "Bản Mộc",
      slug: "ban-moc",
      shortDescription: "Đủ đầy những tiện ích cần thiết cho một trải nghiệm lưu trú tự nhiên và chỉn chu.",
      description: "Những tiện ích cần thiết, được gom lại trong một lựa chọn tự nhiên và đồng bộ.",
      includedItems: [
        "2 bàn chải tre tự nhiên",
        "1 lược tre nguyên khối",
        "2 đôi dép xơ dừa tái chế",
        "2 xà phòng khổ qua mini",
        "1 túi đay Sợi Lành"
      ],
      targetCustomers: ["Homestay", "Bungalow", "Glamping", "Các cơ sở muốn bắt đầu chuyển đổi đồ dùng tiêu hao xanh"],
      features: [
        { name: "Bàn chải tre", hoc: "2", tinhHoa: "2" },
        { name: "Lược tre", hoc: "1", tinhHoa: "1" },
        { name: "Dép xơ dừa", hoc: "2 đôi", tinhHoa: "2 đôi" },
        { name: "Xà phòng khổ qua", hoc: "2", tinhHoa: "2" },
        { name: "Túi đay", hoc: "Có", tinhHoa: "Có" },
        { name: "Tăm bông thân tre", hoc: "Không", tinhHoa: "Có" },
        { name: "Thẻ câu chuyện ESG", hoc: "Không", tinhHoa: "Có" },
        { name: "Cá nhân hóa", hoc: "Cơ bản", tinhHoa: "Nâng cao" },
      ]
    },
    {
      id: "ban-tinh-hoa",
      name: "Bản Tinh Hoa",
      slug: "ban-tinh-hoa",
      shortDescription: "Trải nghiệm hoàn thiện hơn với câu chuyện thương hiệu và điểm chạm xanh trong từng chi tiết.",
      description: "Một trải nghiệm đồ dùng tiêu hao hoàn thiện hơn, nơi sản phẩm và câu chuyện thương hiệu cùng xuất hiện trong phòng nghỉ.",
      includedItems: [
        "2 bàn chải tre tự nhiên",
        "1 lược tre nguyên khối",
        "2 đôi dép xơ dừa tái chế",
        "2 xà phòng khổ qua mini",
        "1 túi đay Sợi Lành",
        "1 hộp tăm bông thân tre sinh học",
        "1 thẻ câu chuyện ESG tái chế"
      ],
      targetCustomers: ["Boutique hotel", "Villa", "Resort", "Khách sạn", "Các cơ sở muốn mang đến trải nghiệm toàn diện"],
      differences: [
        "Có thẻ câu chuyện ESG",
        "Trải nghiệm đầy đủ hơn",
        "Phù hợp cá nhân hóa",
        "Tạo thêm điểm chạm thương hiệu"
      ]
    }
  ],
  en: [
    {
      id: "ban-moc",
      name: "Bản Mộc (Rustic Edition)",
      slug: "ban-moc",
      shortDescription: "Essential mindful amenities curated for a natural, authentic, and polished guest experience.",
      description: "Carefully gathered essentials in a cohesive, nature-inspired collection.",
      includedItems: [
        "2 Natural Bamboo Toothbrushes",
        "1 Solid Bamboo Comb",
        "2 Pairs of Recycled Coconut Coir Slippers",
        "2 Mini Bitter Melon Herbal Soaps",
        "1 Sợi Lành Natural Jute Pouch"
      ],
      targetCustomers: ["Homestays", "Bungalows", "Glamping Sites", "Lodges starting their green transition"],
      features: [
        { name: "Bamboo Toothbrush", hoc: "2", tinhHoa: "2" },
        { name: "Bamboo Comb", hoc: "1", tinhHoa: "1" },
        { name: "Coconut Coir Slippers", hoc: "2 pairs", tinhHoa: "2 pairs" },
        { name: "Bitter Melon Soap", hoc: "2", tinhHoa: "2" },
        { name: "Jute Pouch", hoc: "Included", tinhHoa: "Included" },
        { name: "Bamboo Cotton Buds", hoc: "None", tinhHoa: "Included" },
        { name: "ESG Story Card", hoc: "None", tinhHoa: "Included" },
        { name: "Personalization", hoc: "Standard", tinhHoa: "Advanced" },
      ]
    },
    {
      id: "ban-tinh-hoa",
      name: "Bản Tinh Hoa (Signature Edition)",
      slug: "ban-tinh-hoa",
      shortDescription: "A comprehensive signature experience connecting brand storytelling with sustainable touchpoints.",
      description: "An elevated amenities experience where nature and your property's narrative harmonize seamlessly.",
      includedItems: [
        "2 Natural Bamboo Toothbrushes",
        "1 Solid Bamboo Comb",
        "2 Pairs of Recycled Coconut Coir Slippers",
        "2 Mini Bitter Melon Herbal Soaps",
        "1 Sợi Lành Natural Jute Pouch",
        "1 Box of Biodegradable Bamboo Cotton Buds",
        "1 Recycled ESG Story Card"
      ],
      targetCustomers: ["Boutique Hotels", "Villas", "Eco-Resorts", "Hotels", "Partners seeking a full sensory experience"],
      differences: [
        "Features Recycled ESG Story Card",
        "Comprehensive guest amenities set",
        "Enhanced custom branding options",
        "Adds memorable brand touchpoints"
      ]
    }
  ]
};

const materialsData = {
  vi: [
    {
      id: "tre",
      name: "Tre",
      description: "Được sử dụng cho các sản phẩm như bàn chải, lược và thân tăm bông.",
      image: "https://scontent.fhan5-11.fna.fbcdn.net/v/t1.15752-9/812029309_1759919868971321_8127798121071764984_n.png?stp=dst-png&cstp=mx1122x1402&ctp=s1122x1402&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHkktAL6muhjq9vG1jS2zLDSkV46ybUXM1KRXjrJtRczcP9-BI8hxIavEBmx8tfrwiUEfnuGrBueeiPSDmpR9Am&_nc_ohc=zmg1dNIoWlEQ7kNvwHA7WnI&_nc_oc=Adrxl8oGeLG-wTzbrO-iRVbUntIJP1WxcjCGrGUyZ4pr7YWbe4st7UCHo7ur7WrcZ1Y&_nc_zt=23&_nc_ht=scontent.fhan5-11.fna&_nc_ss=7b2a8&oh=03_Q7cD6QHCU2NHMRer3WPMcUArkxSgh9QUP2te7VvqhWuKK2nXtQ&oe=6AD23A37"
    },
    {
      id: "xo-dua",
      name: "Xơ dừa",
      description: "Được ứng dụng trong dép Sợi Lành nhằm tận dụng giá trị của nguồn vật liệu bản địa.",
      image: "https://scontent.fhan5-11.fna.fbcdn.net/v/t1.15752-9/809421672_1807563003996970_1996513003236046095_n.png?stp=dst-png&cstp=mx1122x1402&ctp=s1122x1402&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHFZwB44uzDQ9ONdpRBntTUNdmBYmbWpek12YFiZtal6YdPVQQvNh0ilxs9_J5x-r_tccgERKfbww23NjsxQYnY&_nc_ohc=Z50RG0MkutYQ7kNvwHqR8s8&_nc_oc=AdrAnvDJemRbA2CS4jw7RuJAZkoarUOZO-z-P60HK2RmiktceAj8Yz-Y5UBP6vVSm4Y&_nc_zt=23&_nc_ht=scontent.fhan5-11.fna&_nc_ss=7b2a8&oh=03_Q7cD6QG_jHGQ-U3BC5kME-uRTI8GDF1iQ0EakFbsUjA0tktr9w&oe=6AD24D9C"
    },
    {
      id: "kho-qua",
      name: "Khổ qua",
      description: "Là cảm hứng nguyên liệu cho dòng xà phòng mini trong bộ đồ dùng tiêu hao.",
      image: "https://scontent.fhan5-2.fna.fbcdn.net/v/t1.15752-9/807858080_1749941002882013_7853054329665139707_n.png?stp=dst-png&cstp=mx1122x1402&ctp=s1122x1402&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG2KqRq0BBkTF9iQ1WfpESd-xOR-WDSyTv7E5H5YNLJO4NgXIV8Sct2O1O7CfHgSN07RZVIQ4SwWJQDdZsbbT6w&_nc_ohc=nSnjmAn3bSkQ7kNvwE7jUNT&_nc_oc=Adq9ce-mBptBZUVR9qHyU9JrKNNSWXGfTC42efWY4CnCksA99Frm9ZKc3L_wOqnlSNI&_nc_zt=23&_nc_ht=scontent.fhan5-2.fna&_nc_ss=7b2a8&oh=03_Q7cD6QEX1_XTooCGiLUprZ6cL4s-Pgra8J8TkGH-x9CW7W-0GA&oe=6AD239D5"
    },
    {
      id: "vai-day",
      name: "Vải đay",
      description: "Được sử dụng cho túi đựng, giúp tạo nên hình thức mộc, đồng bộ và có thể tái sử dụng.",
      image: "https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/810448820_1093588723425796_8241172425530356850_n.png?stp=dst-png&cstp=mx1122x1402&ctp=s1122x1402&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGJi6y16qUIbwOwTOFrB4_Fhx4yS7l5BoeHHjJLuXkGhwKIcMLqVs_ZhxxU9jqIXLMlyL3itnJ5D4A-9DR6gXQx&_nc_ohc=i8vcS0olzuEQ7kNvwGpsf2L&_nc_oc=AdomBNTAVmqtYbjEeQ8bLsaVTQ_de92jqUjapK_bCyR4HM7LhWP-SgZk12wlmI6nPAM&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_ss=7b2a8&oh=03_Q7cD6QGEkYjBAQ5MP7xXtEAfiIZd0hqlSW455W6kZlZMcSywiQ&oe=6AD24166"
    },
    {
      id: "giay-tai-che",
      name: "Giấy tái chế",
      description: "Được sử dụng cho thẻ câu chuyện và một số chi tiết bao bì.",
      image: "https://scontent.fhan5-9.fna.fbcdn.net/v/t1.15752-9/792492874_999033136536036_3423552881153192697_n.png?stp=dst-png&cstp=mx1122x1402&ctp=s1122x1402&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGKYh8dh44vAffKd28HVaqDdJ4B-Rc1KF10ngH5FzUoXQ8BqRWihncYeTBWg-I8oM7TYf0PLeuPA8XYcSh0Xv3a&_nc_ohc=BfCCeKMDm2QQ7kNvwF21Igr&_nc_oc=AdqDMJioK-9b8FwbHrzfAqZ7MVNGMooSRGFl1_pmPS5vQY63jADzNxA5uROTlpf-rNQ&_nc_zt=23&_nc_ht=scontent.fhan5-9.fna&_nc_ss=7b2a8&oh=03_Q7cD6QGM4kZKJo_cFHXrKfSbr0o4POpyfK0LKzB5Fd-3QiLo_g&oe=6AD246E2"
    }
  ],
  en: [
    {
      id: "tre",
      name: "Bamboo",
      description: "Utilized for toothbrushes, solid combs, and cotton bud stems.",
      image: "https://scontent.fhan5-11.fna.fbcdn.net/v/t1.15752-9/812029309_1759919868971321_8127798121071764984_n.png?stp=dst-png&cstp=mx1122x1402&ctp=s1122x1402&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHkktAL6muhjq9vG1jS2zLDSkV46ybUXM1KRXjrJtRczcP9-BI8hxIavEBmx8tfrwiUEfnuGrBueeiPSDmpR9Am&_nc_ohc=zmg1dNIoWlEQ7kNvwHA7WnI&_nc_oc=Adrxl8oGeLG-wTzbrO-iRVbUntIJP1WxcjCGrGUyZ4pr7YWbe4st7UCHo7ur7WrcZ1Y&_nc_zt=23&_nc_ht=scontent.fhan5-11.fna&_nc_ss=7b2a8&oh=03_Q7cD6QHCU2NHMRer3WPMcUArkxSgh9QUP2te7VvqhWuKK2nXtQ&oe=6AD23A37"
    },
    {
      id: "xo-dua",
      name: "Coconut Coir",
      description: "Harnessed in Sợi Lành slippers to elevate the value of indigenous agro-byproducts.",
      image: "https://scontent.fhan5-11.fna.fbcdn.net/v/t1.15752-9/809421672_1807563003996970_1996513003236046095_n.png?stp=dst-png&cstp=mx1122x1402&ctp=s1122x1402&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHFZwB44uzDQ9ONdpRBntTUNdmBYmbWpek12YFiZtal6YdPVQQvNh0ilxs9_J5x-r_tccgERKfbww23NjsxQYnY&_nc_ohc=Z50RG0MkutYQ7kNvwHqR8s8&_nc_oc=AdrAnvDJemRbA2CS4jw7RuJAZkoarUOZO-z-P60HK2RmiktceAj8Yz-Y5UBP6vVSm4Y&_nc_zt=23&_nc_ht=scontent.fhan5-11.fna&_nc_ss=7b2a8&oh=03_Q7cD6QG_jHGQ-U3BC5kME-uRTI8GDF1iQ0EakFbsUjA0tktr9w&oe=6AD24D9C"
    },
    {
      id: "kho-qua",
      name: "Bitter Melon",
      description: "The botanical inspiration for gentle, non-irritating mini herbal guest soaps.",
      image: "https://scontent.fhan5-2.fna.fbcdn.net/v/t1.15752-9/807858080_1749941002882013_7853054329665139707_n.png?stp=dst-png&cstp=mx1122x1402&ctp=s1122x1402&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG2KqRq0BBkTF9iQ1WfpESd-xOR-WDSyTv7E5H5YNLJO4NgXIV8Sct2O1O7CfHgSN07RZVIQ4SwWJQDdZsbbT6w&_nc_ohc=nSnjmAn3bSkQ7kNvwE7jUNT&_nc_oc=Adq9ce-mBptBZUVR9qHyU9JrKNNSWXGfTC42efWY4CnCksA99Frm9ZKc3L_wOqnlSNI&_nc_zt=23&_nc_ht=scontent.fhan5-2.fna&_nc_ss=7b2a8&oh=03_Q7cD6QEX1_XTooCGiLUprZ6cL4s-Pgra8J8TkGH-x9CW7W-0GA&oe=6AD239D5"
    },
    {
      id: "vai-day",
      name: "Jute Fabric",
      description: "Crafted into reusable pouches, delivering an earthy aesthetic and sustainable keepsake.",
      image: "https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/810448820_1093588723425796_8241172425530356850_n.png?stp=dst-png&cstp=mx1122x1402&ctp=s1122x1402&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGJi6y16qUIbwOwTOFrB4_Fhx4yS7l5BoeHHjJLuXkGhwKIcMLqVs_ZhxxU9jqIXLMlyL3itnJ5D4A-9DR6gXQx&_nc_ohc=i8vcS0olzuEQ7kNvwGpsf2L&_nc_oc=AdomBNTAVmqtYbjEeQ8bLsaVTQ_de92jqUjapK_bCyR4HM7LhWP-SgZk12wlmI6nPAM&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_ss=7b2a8&oh=03_Q7cD6QGEkYjBAQ5MP7xXtEAfiIZd0hqlSW455W6kZlZMcSywiQ&oe=6AD24166"
    },
    {
      id: "giay-tai-che",
      name: "Recycled Paper",
      description: "Used for printed ESG story cards and eco-conscious minimalist sleeve packaging.",
      image: "https://scontent.fhan5-9.fna.fbcdn.net/v/t1.15752-9/792492874_999033136536036_3423552881153192697_n.png?stp=dst-png&cstp=mx1122x1402&ctp=s1122x1402&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGKYh8dh44vAffKd28HVaqDdJ4B-Rc1KF10ngH5FzUoXQ8BqRWihncYeTBWg-I8oM7TYf0PLeuPA8XYcSh0Xv3a&_nc_ohc=BfCCeKMDm2QQ7kNvwF21Igr&_nc_oc=AdqDMJioK-9b8FwbHrzfAqZ7MVNGMooSRGFl1_pmPS5vQY63jADzNxA5uROTlpf-rNQ&_nc_zt=23&_nc_ht=scontent.fhan5-9.fna&_nc_ss=7b2a8&oh=03_Q7cD6QGM4kZKJo_cFHXrKfSbr0o4POpyfK0LKzB5Fd-3QiLo_g&oe=6AD246E2"
    }
  ]
};

const individualProductsData = {
  vi: [
    {
      id: "ban-chai",
      name: "Bàn chải tre tự nhiên",
      description: "Bàn chải với thân tre tự nhiên, hình thức tối giản, phù hợp đặt trong phòng nghỉ.",
      image: "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/813965438_1405556648214689_5099788561089029791_n.jpg?stp=dst-jpg_tt6&cstp=mx1122x1129&ctp=s1122x1129&_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFppA0mKOH1y9cfffQaa1MTh_jzA7DzyCSH-PMDsPPIJD514eirhG0aoxjbjyEu21TM-w7wGiUHet59XUeOLe2v&_nc_ohc=iJyzGwZJF9UQ7kNvwEPjosl&_nc_oc=AdpSyakrmSWwqlr3lHS4IEaVfh9ZDy4kkQb1h6G4KKNW4kqgzc1v2q1Xy2OoU_OEsi2OvkJM-8UNdHOnuOUgMOUT&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_ss=7b2a8&oh=03_Q7cD6QHHO0Q8juETAxe3_8AoS1ZuemzN2mFxBbfVBFG22dqPXw&oe=6ADB41AD"
    },
    {
      id: "luoc-tre",
      name: "Lược tre nguyên khối",
      description: "Lược tre có thiết kế liền khối, bề mặt mộc và đồng bộ với hệ đồ dùng tiêu hao Sợi Lành.",
      image: "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/815765705_939695148720129_8854587069437577864_n.jpg?stp=dst-jpg_tt6&cstp=mx1122x1120&ctp=s1122x1120&_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeErUFV30kXh9Iy1WbU2KYpnb3bsh2ACcrVvduyHYAJytd_mmS3QNViW7vKMWk8Eyst6_YB07BUhML-KX9QIefsD&_nc_ohc=PL-4ZAaD110Q7kNvwGnj9yZ&_nc_oc=AdpuRr1-oCI1DImGSsfgYT-iw37PXrccUYy5WO9CHFysE7-pPr3Mn8mfPS8bj1cb3cevMQOVoh7xUqBGqulMvFS9&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_ss=7b2a8&oh=03_Q7cD6QHMliZBAPd-oeG568klgMPFFoKgkj5SNtmggxdhkw_JPw&oe=6ADB20FE"
    },
    {
      id: "xa-phong",
      name: "Xà phòng khổ qua mini",
      description: "Xà phòng kích thước nhỏ dành cho nhu cầu sử dụng trong thời gian lưu trú.",
      image: "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/815652863_912172451752233_6945264883147175062_n.jpg?stp=dst-jpg_tt6&cstp=mx1122x1080&ctp=s1122x1080&_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeH1J6iyR9eV6Z_5oZyW8IU4jquS3VdV7CqOq5LdV1XsKldwR-c2C4qwZ8D0WO73uYKwKkuHS5eybJnFU19ME1dk&_nc_ohc=KhLZ2APpV_wQ7kNvwGiNULr&_nc_oc=AdrHOtJqRw014Uk3vhqJ4OmQ-I5fKicOwkCdUXNpN5QnLowHEycluIJRMVYNuqUrOUEIVMvMS3CqVAt0w4822pvM&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_ss=7b2a8&oh=03_Q7cD6QGbG4hoSfAUFZv6sUCiv97cFBuqWjdw0-_3qJC0xviaPw&oe=6ADB2C26"
    },
    {
      id: "dep-xo-dua",
      name: "Dép xơ dừa tái chế",
      description: "Dép được phát triển theo định hướng tận dụng vật liệu xơ dừa, phù hợp với không gian lưu trú mang phong cách tự nhiên.",
      image: "https://scontent-hkg1-1.xx.fbcdn.net/v/t1.15752-9/817383102_4532061377083187_1980868275864644208_n.jpg?stp=dst-jpg_tt6&cstp=mx1122x1088&ctp=s1122x1088&_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFLcm0RlcoljUSj8PTyCTIWc42IIWf6ZJVzjYghZ_pklaJh9f8ENtgLlXhoN4eqmntn5pftC7BXiokG31-tXvdl&_nc_ohc=qabdS2c1ccIQ7kNvwF-zy08&_nc_oc=AdoGvHQ5uDCpS4svRubZVXamfNhh9uJ1fcMLWsJJ-Bu0TaqCkd9yKYTkxbfjS6C8DfNyukPWrxWzHwgYt-1NiuUj&_nc_zt=23&_nc_ht=scontent-hkg1-1.xx&_nc_ss=7b2a8&oh=03_Q7cD6QFDoJEsAYPEH7f58KFpKEQ8TkBMJKpVB3jbA8nKVgbHkQ&oe=6ADB380F"
    },
    {
      id: "tam-bong",
      name: "Tăm bông thân tre sinh học",
      description: "Sản phẩm bổ sung trong Bản Tinh Hoa, giúp hoàn thiện trải nghiệm đồ dùng tiêu hao.",
      image: "https://scontent-hkg1-1.xx.fbcdn.net/v/t1.15752-9/817678718_2995290344164412_3973002011598633395_n.jpg?stp=dst-jpg_tt6&cstp=mx1122x1129&ctp=s1122x1129&_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGyaLociEY0DvMSuaEGfvp4mtV9yllTMe2a1X3KWVMx7TfOq3fUhXQpTevmV8d1MlosF1gAFyzL9Z-RE32oTXY9&_nc_ohc=zXY1BLgjRrMQ7kNvwFYhd-y&_nc_oc=AdpxLMEKfIIcNl-dJQskCXFDn-BMue2GrRYPk1T8aehYy9lGmwN_PUfbiUPhlB9LgeUlSln1CMcgtEXN99JfE8dv&_nc_zt=23&_nc_ht=scontent-hkg1-1.xx&_nc_ss=7b2a8&oh=03_Q7cD6QEcbFD9VB9ZzCrPRsMPScvT1KMDhJvYDQhRsDe9sY9PLA&oe=6ADB440A"
    },
    {
      id: "the-cau-chuyen",
      name: "Thẻ câu chuyện ESG tái chế",
      description: "Thẻ giới thiệu câu chuyện sản phẩm và thông điệp môi trường, có thể cá nhân hóa theo cơ sở lưu trú.",
      image: "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/815267181_957661530078223_1941260296930450692_n.jpg?stp=dst-jpg_tt6&cstp=mx1122x1090&ctp=s1122x1090&_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFzSlMiM4Pz9RKtonS2xJ6b6n7EdLLshH7qfsR0suyEftpHNXRqP334IJbWAfALTQUXYtJJ8Z_pSYzKua4JewHr&_nc_ohc=4-syWf-EGl0Q7kNvwEiWzg9&_nc_oc=Adr8tHDn0Pldyia_BDo8RxC4VYas6oHvjQehYVm_XH9NP-6onDoklZtzVV6BxgxYSGcJo_oWMy-CiINx-bRrP2N7&_nc_zt=23&_nc_ht=scontent-hkg4-2.xx&_nc_ss=7b2a8&oh=03_Q7cD6QEGgs9ijGg9lAh-vGouzDCzLbCInPCcDL56_Hg8wXVJMw&oe=6ADB4C33"
    }
  ],
  en: [
    {
      id: "ban-chai",
      name: "Natural Bamboo Toothbrush",
      description: "Ergonomic natural bamboo handle, minimalist profile, perfectly suited for modern eco-friendly guest rooms.",
      image: "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/813965438_1405556648214689_5099788561089029791_n.jpg?stp=dst-jpg_tt6&cstp=mx1122x1129&ctp=s1122x1129&_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFppA0mKOH1y9cfffQaa1MTh_jzA7DzyCSH-PMDsPPIJD514eirhG0aoxjbjyEu21TM-w7wGiUHet59XUeOLe2v&_nc_ohc=iJyzGwZJF9UQ7kNvwEPjosl&_nc_oc=AdpSyakrmSWwqlr3lHS4IEaVfh9ZDy4kkQb1h6G4KKNW4kqgzc1v2q1Xy2OoU_OEsi2OvkJM-8UNdHOnuOUgMOUT&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_ss=7b2a8&oh=03_Q7cD6QHHO0Q8juETAxe3_8AoS1ZuemzN2mFxBbfVBFG22dqPXw&oe=6ADB41AD"
    },
    {
      id: "luoc-tre",
      name: "Solid Bamboo Comb",
      description: "Seamless single-piece bamboo construction with smooth finishing, aligned with Sợi Lành design ethos.",
      image: "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/815765705_939695148720129_8854587069437577864_n.jpg?stp=dst-jpg_tt6&cstp=mx1122x1120&ctp=s1122x1120&_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeErUFV30kXh9Iy1WbU2KYpnb3bsh2ACcrVvduyHYAJytd_mmS3QNViW7vKMWk8Eyst6_YB07BUhML-KX9QIefsD&_nc_ohc=PL-4ZAaD110Q7kNvwGnj9yZ&_nc_oc=AdpuRr1-oCI1DImGSsfgYT-iw37PXrccUYy5WO9CHFysE7-pPr3Mn8mfPS8bj1cb3cevMQOVoh7xUqBGqulMvFS9&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_ss=7b2a8&oh=03_Q7cD6QHMliZBAPd-oeG568klgMPFFoKgkj5SNtmggxdhkw_JPw&oe=6ADB20FE"
    },
    {
      id: "xa-phong",
      name: "Mini Herbal Bitter Melon Soap",
      description: "Compact travel-sized botanical soap crafted for soothing, chemical-free guest indulgence.",
      image: "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/815652863_912172451752233_6945264883147175062_n.jpg?stp=dst-jpg_tt6&cstp=mx1122x1080&ctp=s1122x1080&_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeH1J6iyR9eV6Z_5oZyW8IU4jquS3VdV7CqOq5LdV1XsKldwR-c2C4qwZ8D0WO73uYKwKkuHS5eybJnFU19ME1dk&_nc_ohc=KhLZ2APpV_wQ7kNvwGiNULr&_nc_oc=AdrHOtJqRw014Uk3vhqJ4OmQ-I5fKicOwkCdUXNpN5QnLowHEycluIJRMVYNuqUrOUEIVMvMS3CqVAt0w4822pvM&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_ss=7b2a8&oh=03_Q7cD6QGbG4hoSfAUFZv6sUCiv97cFBuqWjdw0-_3qJC0xviaPw&oe=6ADB2C26"
    },
    {
      id: "dep-xo-dua",
      name: "Recycled Coconut Coir Slippers",
      description: "Comfortable indoor slippers repurposed from natural coconut fibers, ideal for eco-lodges and tranquil retreats.",
      image: "https://scontent-hkg1-1.xx.fbcdn.net/v/t1.15752-9/817383102_4532061377083187_1980868275864644208_n.jpg?stp=dst-jpg_tt6&cstp=mx1122x1088&ctp=s1122x1088&_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFLcm0RlcoljUSj8PTyCTIWc42IIWf6ZJVzjYghZ_pklaJh9f8ENtgLlXhoN4eqmntn5pftC7BXiokG31-tXvdl&_nc_ohc=qabdS2c1ccIQ7kNvwF-zy08&_nc_oc=AdoGvHQ5uDCpS4svRubZVXamfNhh9uJ1fcMLWsJJ-Bu0TaqCkd9yKYTkxbfjS6C8DfNyukPWrxWzHwgYt-1NiuUj&_nc_zt=23&_nc_ht=scontent-hkg1-1.xx&_nc_ss=7b2a8&oh=03_Q7cD6QFDoJEsAYPEH7f58KFpKEQ8TkBMJKpVB3jbA8nKVgbHkQ&oe=6ADB380F"
    },
    {
      id: "tam-bong",
      name: "Biodegradable Bamboo Cotton Buds",
      description: "Natural organic cotton with sturdy bamboo stems, rounding out the complete luxury amenity set.",
      image: "https://scontent-hkg1-1.xx.fbcdn.net/v/t1.15752-9/817678718_2995290344164412_3973002011598633395_n.jpg?stp=dst-jpg_tt6&cstp=mx1122x1129&ctp=s1122x1129&_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGyaLociEY0DvMSuaEGfvp4mtV9yllTMe2a1X3KWVMx7TfOq3fUhXQpTevmV8d1MlosF1gAFyzL9Z-RE32oTXY9&_nc_ohc=zXY1BLgjRrMQ7kNvwFYhd-y&_nc_oc=AdpxLMEKfIIcNl-dJQskCXFDn-BMue2GrRYPk1T8aehYy9lGmwN_PUfbiUPhlB9LgeUlSln1CMcgtEXN99JfE8dv&_nc_zt=23&_nc_ht=scontent-hkg1-1.xx&_nc_ss=7b2a8&oh=03_Q7cD6QEcbFD9VB9ZzCrPRsMPScvT1KMDhJvYDQhRsDe9sY9PLA&oe=6ADB440A"
    },
    {
      id: "the-cau-chuyen",
      name: "Recycled ESG Story Card",
      description: "Personalized card sharing your property's environmental commitment and the origin of each handcrafted item.",
      image: "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/815267181_957661530078223_1941260296930450692_n.jpg?stp=dst-jpg_tt6&cstp=mx1122x1090&ctp=s1122x1090&_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFzSlMiM4Pz9RKtonS2xJ6b6n7EdLLshH7qfsR0suyEftpHNXRqP334IJbWAfALTQUXYtJJ8Z_pSYzKua4JewHr&_nc_ohc=4-syWf-EGl0Q7kNvwEiWzg9&_nc_oc=Adr8tHDn0Pldyia_BDo8RxC4VYas6oHvjQehYVm_XH9NP-6onDoklZtzVV6BxgxYSGcJo_oWMy-CiINx-bRrP2N7&_nc_zt=23&_nc_ht=scontent-hkg4-2.xx&_nc_ss=7b2a8&oh=03_Q7cD6QEGgs9ijGg9lAh-vGouzDCzLbCInPCcDL56_Hg8wXVJMw&oe=6ADB4C33"
    }
  ]
};

const teamMembersData = {
  vi: [
    {
      initials: "NTA",
      name: "Nguyễn Thuý An",
      role: "Nghiên cứu và phát triển sản phẩm, Điều phối tổng thể dự án"
    },
    {
      initials: "LĐD",
      name: "Lê Đức Duy",
      role: "Kinh doanh và bán hàng"
    },
    {
      initials: "CPD",
      name: "Cấn Thị Phương Dung",
      role: "Quản lý chuỗi cung ứng"
    },
    {
      initials: "ĐBY",
      name: "Đặng Bảo Yến",
      role: "Quản lý tài chính dự án"
    },
    {
      initials: "NTD",
      name: "Nguyễn Thuỳ Dương",
      role: "Quản lý sản xuất và kiểm định chất lượng sản phẩm"
    },
    {
      initials: "PTP",
      name: "Phạm Tuấn Phong",
      role: "Thiết kế hình ảnh thương hiệu và sản phẩm"
    },
    {
      initials: "PMA",
      name: "Phan Thị Minh Ánh",
      role: "Phụ trách Marketing, truyền thông và quản trị thương hiệu"
    },
    {
      initials: "BTD",
      name: "Ba Thuỳ Dung",
      role: "Quản lý kho hàng và vận chuyển"
    }
  ],
  en: [
    {
      initials: "NTA",
      name: "Nguyễn Thuý An",
      role: "Product R&D & Overall Project Coordination"
    },
    {
      initials: "LĐD",
      name: "Lê Đức Duy",
      role: "Business Development & Sales"
    },
    {
      initials: "CPD",
      name: "Cấn Thị Phương Dung",
      role: "Supply Chain Management"
    },
    {
      initials: "ĐBY",
      name: "Đặng Bảo Yến",
      role: "Project Financial Management"
    },
    {
      initials: "NTD",
      name: "Nguyễn Thuỳ Dương",
      role: "Production Management & Quality Control"
    },
    {
      initials: "PTP",
      name: "Phạm Tuấn Phong",
      role: "Brand & Product Visual Identity Design"
    },
    {
      initials: "PMA",
      name: "Phan Thị Minh Ánh",
      role: "Marketing, Communications & Brand Management"
    },
    {
      initials: "BTD",
      name: "Ba Thuỳ Dung",
      role: "Warehouse Operations & Logistics"
    }
  ]
};

const visionStepsData = {
  vi: [
    "Xây dựng vị thế trong phân khúc cơ sở lưu trú nhỏ và vừa",
    "Phát triển từ nhà cung cấp của Sợi Lành thành đối tác cung ứng đồ dùng tiêu hao định kỳ",
    "Mở rộng từ Sợi Lành Bản Mộc hay Tinh Hoa thành hệ sinh thái Sợi Lành Khởi sắc",
    "Xây dựng mạng lưới cung ứng xanh có khả năng kiểm soát và truy xuất"
  ],
  en: [
    "Establish a leading position in the small and medium accommodation segment",
    "Evolve from a product supplier into an ongoing recurring amenities partner",
    "Expand from Bản Mộc and Tinh Hoa into the blossoming Sợi Lành Khởi Sắc ecosystem",
    "Build a transparent, controllable, and traceable green supply chain network"
  ]
};

const coreValuesData = {
  vi: [
    {
      id: "01",
      name: "Xanh",
      description: "Ưu tiên vật liệu tự nhiên hoặc tái chế ở những sản phẩm phù hợp."
    },
    {
      id: "02",
      name: "Tiện lợi",
      description: "Một bộ sản phẩm thay cho quá trình tìm kiếm nhiều nhà cung cấp."
    },
    {
      id: "03",
      name: "Đồng bộ",
      description: "Sản phẩm, bao bì và trải nghiệm được xây dựng cùng một ngôn ngữ thiết kế."
    },
    {
      id: "04",
      name: "Cá nhân hóa",
      description: "Logo, thông điệp và câu chuyện của cơ sở lưu trú có thể được tích hợp vào sản phẩm."
    }
  ],
  en: [
    {
      id: "01",
      name: "Green",
      description: "Prioritizing natural and recycled materials across tailored product categories."
    },
    {
      id: "02",
      name: "Convenient",
      description: "A single unified kit replacing the hassle of managing multiple fragmented vendors."
    },
    {
      id: "03",
      name: "Cohesive",
      description: "Products, packaging, and tactile experience crafted under one harmonious design language."
    },
    {
      id: "04",
      name: "Personalized",
      description: "Seamlessly integrate your lodging's logo, narrative, and environmental ethos."
    }
  ]
};

const b2bStepsData = {
  vi: [
    { step: "01", name: "Đăng ký tư vấn" },
    { step: "02", name: "Xác định nhu cầu và số phòng" },
    { step: "03", name: "Nhận mẫu dùng thử" },
    { step: "04", name: "Thu thập phản hồi và thống nhất phương án" },
    { step: "05", name: "Cung ứng định kỳ" }
  ],
  en: [
    { step: "01", name: "Consultation Request" },
    { step: "02", name: "Needs Assessment & Room Capacity" },
    { step: "03", name: "Complimentary Trial Kit" },
    { step: "04", name: "Feedback & Solution Alignment" },
    { step: "05", name: "Recurring Supply Agreement" }
  ]
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("soi_lanh_lang");
    return saved === "en" ? "en" : "vi";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("soi_lanh_lang", lang);
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    setLanguage(language === "vi" ? "en" : "vi");
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const langDict = translations[language] || translations.vi;
    return (langDict as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        products: productsData[language],
        materials: materialsData[language],
        individualProducts: individualProductsData[language],
        coreValues: coreValuesData[language],
        b2bSteps: b2bStepsData[language],
        teamMembers: teamMembersData[language],
        visionSteps: visionStepsData[language]
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
