import { motion } from "motion/react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-16 ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span className="text-sm font-semibold tracking-wider text-brand-subtext uppercase mb-4 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-brand-text/80 text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
