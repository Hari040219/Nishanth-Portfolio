import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Code2, Layers, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import SkillCategory from "@/components/SkillCategory";
import { projects, skills } from "@/data/portfolio";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-mono">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Hi, I'm{" "}
              <span className="text-gradient">Nishanth P</span>
              <br />
              <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl font-medium">
                Full-Stack Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed"
            >
              I build scalable, user-centric applications with Python, React, and modern web technologies.
              Passionate about turning ideas into impactful digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View My Work
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium hover:border-primary/40 hover:bg-surface-hover transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center gap-4 mt-8"
            >
              <a href="https://github.com/Nishanth-Ai14" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/nishanth-p-04398a2a2" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* What I Do */}
      <section className="py-24 border-t border-border/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="What I Do"
            title="Building the"
            highlight="Future"
            description="I specialize in full-stack development, combining modern frontend frameworks with robust backend solutions."
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Code2, title: "Frontend", desc: "React, Tailwind CSS, and modern JavaScript to craft responsive, pixel-perfect interfaces." },
              { icon: Layers, title: "Backend", desc: "Node.js, Flask, FastAPI, and database design for scalable server-side solutions." },
              { icon: Cpu, title: "AI & Data", desc: "Python, TensorFlow, and data analysis for intelligent, data-driven applications." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 border-t border-border/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Portfolio"
            title="Featured"
            highlight="Projects"
            description="A selection of projects that showcase my skills and experience."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
            >
              View all projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 border-t border-border/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Tech Stack"
            title="Skills &"
            highlight="Expertise"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {skills.map((cat, i) => (
              <SkillCategory key={cat.title} title={cat.title} skills={cat.skills} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              I'm currently looking for full-stack developer roles. If you're interested in working together, let's connect!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
