import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  children?: ReactNode;
  align?: "left" | "center";
}

const SectionHeading = ({ badge, title, highlight, description, children, align = "center" }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {badge && (
        <span className="inline-block px-3 py-1 mb-4 text-xs font-mono font-medium rounded-full border border-primary/30 text-primary bg-primary/5">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}{" "}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
};

export default SectionHeading;
