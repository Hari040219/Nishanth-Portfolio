import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  points: string[];
  index: number;
}

const TimelineItem = ({ title, subtitle, period, location, points, index }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />
      {/* Timeline dot */}
      <div className="absolute left-[-4px] top-2 w-[9px] h-[9px] rounded-full bg-primary shadow-glow" />

      <div className="space-y-1">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm text-primary font-mono">{subtitle}</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{period}</span>
          {location && (
            <>
              <span>·</span>
              <span>{location}</span>
            </>
          )}
        </div>
        <ul className="mt-3 space-y-1.5">
          {points.map((point, i) => (
            <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
              <span className="text-primary mt-1 shrink-0">›</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
