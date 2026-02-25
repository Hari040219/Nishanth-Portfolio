import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import TimelineItem from "@/components/TimelineItem";
import SkillCategory from "@/components/SkillCategory";
import { skills, experience, education, certifications } from "@/data/portfolio";
import { Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block px-3 py-1 mb-4 text-xs font-mono font-medium rounded-full border border-primary/30 text-primary bg-primary/5"
              >
                About Me
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              >
                Aspiring <span className="text-gradient">Full-Stack Developer</span> with a Passion for Innovation
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground leading-relaxed text-lg"
              >
                I'm Nishanth P, a Computer Science & Design student at DSATM, Bengaluru. I'm passionate about building 
                scalable, user-centric applications and constantly learning new technologies. With a foundation in 
                mechatronics and a pivot to full-stack development, I bring a unique perspective to solving engineering problems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground leading-relaxed mt-4"
              >
                I'm passionate about learning emerging technologies, experimenting with creative coding projects, and 
                developing practical applications. In my free time, I like reading about tech innovations and enhancing 
                my problem-solving skills through side projects.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-6">
            <SectionHeading badge="Education" title="Academic" highlight="Background" align="left" />
            <div className="max-w-2xl">
              {education.map((item, i) => (
                <TimelineItem key={i} index={i} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-6">
            <SectionHeading badge="Experience" title="Work" highlight="History" align="left" />
            <div className="max-w-2xl">
              {experience.map((item, i) => (
                <TimelineItem key={i} index={i} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-6">
            <SectionHeading badge="Tech Stack" title="Technical" highlight="Competencies" align="left" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
              {skills.map((cat, i) => (
                <SkillCategory key={cat.title} title={cat.title} skills={cat.skills} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-6">
            <SectionHeading badge="Certifications" title="Credentials &" highlight="Awards" align="left" />
            <div className="max-w-2xl space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border/50 bg-card"
                >
                  <Award className="text-primary shrink-0" size={18} />
                  <span className="text-sm">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
