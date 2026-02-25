import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/portfolio";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/projects" className="text-primary hover:underline">← Back to projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to projects
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="h-1.5 rounded-full bg-gradient-primary w-20 mb-6" />
              <span className="text-sm font-mono text-muted-foreground">{project.period}</span>
              <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{project.title}</h1>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 text-sm font-mono rounded-lg bg-secondary text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:border-primary/40 transition-colors"
                  >
                    <Github size={16} /> View Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
