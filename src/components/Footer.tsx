import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link to="/" className="text-lg font-bold">
              <span className="text-gradient">Nishanth</span>
              <span className="text-muted-foreground font-mono text-sm ml-1">.dev</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-1">Full-Stack Developer · Bengaluru, India</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Nishanth-Ai14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/nishanth-p-04398a2a2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:nishanthwork014@gmail.com"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="tel:+919980313776"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} Nishanth P. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
