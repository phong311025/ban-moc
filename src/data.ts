export const products = [
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
    targetCustomers: ["Homestay", "Bungalow", "Glamping", "Các cơ sở muốn bắt đầu chuyển đổi amenities"],
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
    description: "Một trải nghiệm amenities hoàn thiện hơn, nơi sản phẩm và câu chuyện thương hiệu cùng xuất hiện trong phòng nghỉ.",
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
];

export const materials = [
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
    description: "Là cảm hứng nguyên liệu cho dòng xà phòng mini trong bộ amenities.",
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
];

export const individualProducts = [
  {
    id: "ban-chai",
    name: "Bàn chải tre tự nhiên",
    description: "Bàn chải với thân tre tự nhiên, hình thức tối giản, phù hợp đặt trong phòng nghỉ.",
    image: "https://images.unsplash.com/photo-1599598425947-330026218ea1?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "luoc-tre",
    name: "Lược tre nguyên khối",
    description: "Lược tre có thiết kế liền khối, bề mặt mộc và đồng bộ với hệ amenities Sợi Lành.",
    image: "https://images.unsplash.com/photo-1583091924765-9a67dd445250?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "xa-phong",
    name: "Xà phòng khổ qua mini",
    description: "Xà phòng kích thước nhỏ dành cho nhu cầu sử dụng trong thời gian lưu trú.",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "dep-xo-dua",
    name: "Dép xơ dừa tái chế",
    description: "Dép được phát triển theo định hướng tận dụng vật liệu xơ dừa, phù hợp với không gian lưu trú mang phong cách tự nhiên.",
    image: "https://images.unsplash.com/photo-1623838425301-eb4c1f93f1cc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "tam-bong",
    name: "Tăm bông thân tre sinh học",
    description: "Sản phẩm bổ sung trong Bản Tinh Hoa, giúp hoàn thiện trải nghiệm amenities.",
    image: "https://images.unsplash.com/photo-1609121899144-8da05fdbaf1d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "the-cau-chuyen",
    name: "Thẻ câu chuyện ESG tái chế",
    description: "Thẻ giới thiệu câu chuyện sản phẩm và thông điệp môi trường, có thể cá nhân hóa theo cơ sở lưu trú.",
    image: "https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=1974&auto=format&fit=crop"
  }
];

export const coreValues = [
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
];

export const b2bSteps = [
  { step: "01", name: "Đăng ký tư vấn" },
  { step: "02", name: "Xác định nhu cầu và số phòng" },
  { step: "03", name: "Nhận mẫu dùng thử" },
  { step: "04", name: "Thu thập phản hồi và thống nhất phương án" },
  { step: "05", name: "Cung ứng định kỳ" }
];
