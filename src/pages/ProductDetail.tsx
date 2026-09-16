import { useParams, Link } from "react-router-dom";
import { products } from "../data";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { motion } from "motion/react";
import { useEffect } from "react";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.slug === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <main className="pt-40 pb-24 text-center min-h-screen">
        <h1 className="text-4xl font-serif mb-6">Không tìm thấy sản phẩm</h1>
        <Link to="/san-pham"><Button>Quay lại danh sách</Button></Link>
      </main>
    );
  }

  const image = id === "ban-moc" 
    ? "https://scontent.fhan5-9.fna.fbcdn.net/v/t1.15752-9/786052289_2598151100628231_7820834698350219884_n.png?stp=dst-png&cstp=mx1122x1402&ctp=s1122x1402&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFr5FIu_-D5J7n-vcU3kMv20MOs4-wzfEDQw6zj7DN8QIVtEZJcUF3LjUJxa7JGzJiRnXAoa5PcOWvbvuI8QbdJ&_nc_ohc=fr3t2v3p5S0Q7kNvwHK6-B_&_nc_oc=AdqVx-Fh6vEIBmYTvtPZlk6axWs6bXKQ3QZpKWgxxF1eGj2dGCJ6lfHwh3mMuqRoaHs&_nc_zt=23&_nc_ht=scontent.fhan5-9.fna&_nc_ss=7b2a8&oh=03_Q7cD6QEM4G8fix1ufZdXjMiMYRlzbWHTZJYu5ouvwyLimO-KEQ&oe=6AD25249"
    : "https://scontent.fhan5-1.fna.fbcdn.net/v/t1.15752-9/808500779_1380972247543081_4791620009681211830_n.png?stp=dst-png&cstp=mx1122x1402&ctp=s1122x1402&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEPScA6rkWwbBQ87yWU82HRXYJIIwGFseRdgkgjAYWx5Om_oUwldO_zbSTPKXIIKKzN5NVRvrK6CHL5mNG2nVxX&_nc_ohc=S5y4qosKQMgQ7kNvwFNzLtk&_nc_oc=AdphkZolt1TbWfHwcNnHwFFZK3siGGLywdSHyIYqAkiXfWvk2phhqZ6Va9obVruiG1k&_nc_zt=23&_nc_ht=scontent.fhan5-1.fna&_nc_ss=7b2a8&oh=03_Q7cD6QFESVH5D8aL65uWQpA4SoiKHWAhAONz2KKV5fbwcsy3iQ&oe=6AD21F19";

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-brand-cream relative">
              <img src={image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <h1 className="text-5xl lg:text-6xl font-serif text-brand-dark mb-6">{product.name}</h1>
            <p className="text-xl text-brand-text/80 mb-12 leading-relaxed">
              {product.description}
            </p>
            
            <div className="mb-12">
              <h3 className="font-serif text-2xl text-brand-dark mb-6">Thành phần</h3>
              <ul className="flex flex-col gap-4">
                {product.includedItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-brand-text border-b border-brand-olive/10 pb-4">
                    <span className="w-2 h-2 rounded-full bg-brand-olive shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {product.differences && (
              <div className="mb-12 p-6 bg-brand-cream rounded-2xl border border-brand-olive/10">
                <h3 className="font-serif text-xl text-brand-dark mb-4">Điểm khác biệt</h3>
                <ul className="flex flex-col gap-3 text-sm">
                  {product.differences.map((diff, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-olive mt-1.5 shrink-0"></span>
                      {diff}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mb-12">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-subtext mb-4">Phù hợp với</h3>
              <div className="flex flex-wrap gap-2">
                {product.targetCustomers.map((customer, i) => (
                  <span key={i} className="bg-brand-light px-4 py-2 rounded-full text-sm font-medium text-brand-olive border border-brand-olive/20">
                    {customer}
                  </span>
                ))}
              </div>
            </div>
            
            <Link to={`/lien-he?combo=${product.slug}`}>
              <Button size="lg" className="w-full sm:w-auto">Nhận báo giá {product.name}</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
