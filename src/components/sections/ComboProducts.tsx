import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { products } from "../../data";
import { SectionHeading } from "../ui/SectionHeading";

export function ComboProducts() {
  return (
    <section className="py-24 bg-brand-light px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Hai lựa chọn. Một tinh thần Sợi Lành."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-brand-cream rounded-3xl overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-[4/3] overflow-hidden bg-brand-beige/30 relative">
                <img 
                  src={index === 0 
                    ? "https://scontent.fhan5-9.fna.fbcdn.net/v/t1.15752-9/786052289_2598151100628231_7820834698350219884_n.png?stp=dst-png&cstp=mx1122x1402&ctp=s1122x1402&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFr5FIu_-D5J7n-vcU3kMv20MOs4-wzfEDQw6zj7DN8QIVtEZJcUF3LjUJxa7JGzJiRnXAoa5PcOWvbvuI8QbdJ&_nc_ohc=fr3t2v3p5S0Q7kNvwHK6-B_&_nc_oc=AdqVx-Fh6vEIBmYTvtPZlk6axWs6bXKQ3QZpKWgxxF1eGj2dGCJ6lfHwh3mMuqRoaHs&_nc_zt=23&_nc_ht=scontent.fhan5-9.fna&_nc_ss=7b2a8&oh=03_Q7cD6QEM4G8fix1ufZdXjMiMYRlzbWHTZJYu5ouvwyLimO-KEQ&oe=6AD25249" 
                    : "https://scontent.fhan5-1.fna.fbcdn.net/v/t1.15752-9/808500779_1380972247543081_4791620009681211830_n.png?stp=dst-png&cstp=mx1122x1402&ctp=s1122x1402&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEPScA6rkWwbBQ87yWU82HRXYJIIwGFseRdgkgjAYWx5Om_oUwldO_zbSTPKXIIKKzN5NVRvrK6CHL5mNG2nVxX&_nc_ohc=S5y4qosKQMgQ7kNvwFNzLtk&_nc_oc=AdphkZolt1TbWfHwcNnHwFFZK3siGGLywdSHyIYqAkiXfWvk2phhqZ6Va9obVruiG1k&_nc_zt=23&_nc_ht=scontent.fhan5-1.fna&_nc_ss=7b2a8&oh=03_Q7cD6QFESVH5D8aL65uWQpA4SoiKHWAhAONz2KKV5fbwcsy3iQ&oe=6AD21F19"
                  } 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="font-serif text-3xl text-brand-dark mb-4">{product.name}</h3>
                <p className="text-brand-text/80 mb-8 min-h-[60px]">
                  {product.shortDescription}
                </p>
                
                <div className="mb-10 flex-1">
                  <ul className="flex flex-col gap-3 text-sm text-brand-subtext">
                    {product.includedItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-brand-olive mt-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to={`/san-pham/${product.slug}`} className="mt-auto block">
                  <Button variant="outline" className="w-full">Khám phá {product.name}</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
