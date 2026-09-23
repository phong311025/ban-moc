import { useLanguage } from "../../context/LanguageContext";
import { Globe } from "lucide-react";
import { cn } from "../../lib/utils";

interface LanguageToggleProps {
  className?: string;
  variant?: "header" | "footer" | "mobile";
}

export function LanguageToggle({ className, variant = "header" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center p-1 rounded-full border transition-all duration-300",
        variant === "header"
          ? "bg-brand-light/80 border-brand-olive/20 shadow-xs"
          : variant === "footer"
          ? "bg-brand-dark/40 border-brand-light/15 text-white"
          : "bg-brand-cream/80 border-brand-olive/20",
        className
      )}
      role="group"
      aria-label="Language selection"
    >
      <Globe 
        size={14} 
        className={cn(
          "ml-1.5 mr-1 shrink-0", 
          variant === "footer" ? "text-brand-light/70" : "text-brand-olive/70"
        )} 
      />
      <button
        type="button"
        onClick={() => setLanguage("vi")}
        className={cn(
          "px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer",
          language === "vi"
            ? "bg-brand-olive text-white shadow-xs"
            : variant === "footer"
            ? "text-brand-light/70 hover:text-white"
            : "text-brand-subtext hover:text-brand-dark"
        )}
      >
        VI
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={cn(
          "px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer",
          language === "en"
            ? "bg-brand-olive text-white shadow-xs"
            : variant === "footer"
            ? "text-brand-light/70 hover:text-white"
            : "text-brand-subtext hover:text-brand-dark"
        )}
      >
        EN
      </button>
    </div>
  );
}
