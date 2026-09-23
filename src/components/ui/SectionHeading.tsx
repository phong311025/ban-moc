import { motion } from "motion/react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({ 
  eyebrow, 
  title, 
  description, 
  align = "center",
  theme = "light",
  className = ""
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-16 ${align === "center" ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <span className={`text-sm font-semibold tracking-wider uppercase mb-4 block ${
          isDark ? "text-brand-beige" : "text-brand-subtext"
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl font-serif mb-6 leading-tight ${
        isDark ? "text-white" : "text-brand-dark"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg md:text-xl leading-relaxed ${
          isDark ? "text-brand-cream/90" : "text-brand-text/80"
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
