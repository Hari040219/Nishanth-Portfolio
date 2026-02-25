import { motion } from "framer-motion";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  index: number;
}

const SkillCategory = ({ title, skills, index }: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="p-5 rounded-xl border border-border/50 bg-card"
    >
      <h3 className="text-sm font-semibold text-primary mb-3 font-mono">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-xs rounded-lg bg-secondary text-secondary-foreground font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;
