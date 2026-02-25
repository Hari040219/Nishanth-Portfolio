import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  live?: string;
  period: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl border border-border/50 bg-card overflow-hidden shadow-card hover:border-primary/30 hover:shadow-glow transition-all duration-500"
    >
      {/* Gradient top bar */}
      <div className="h-1 bg-gradient-primary" />
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs font-mono text-muted-foreground">{project.period}</span>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="View source">
                <Github size={16} />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="View live">
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
        
        <Link to={`/projects/${project.id}`}>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
