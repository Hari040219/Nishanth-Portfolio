import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import html2pdf from "html2pdf.js";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDownloadPDF = () => {
    const element = document.querySelector("main") || document.body;
    const opt = {
      margin: 0.5,
      filename: "Nishanth_Portfolio.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80"
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold tracking-tight">
          <span className="text-gradient">Nishanth</span>
          <span className="text-muted-foreground font-mono text-sm ml-1">.dev</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
          >
            <Download size={14} /> PDF
          </button>
          <Link
            to="/contact"
            className="inline-flex px-5 py-2 text-sm font-medium rounded-lg bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-surface"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => { handleDownloadPDF(); setMobileOpen(false); }}
                  className="block w-full px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface rounded-lg transition-colors"
                >
                  <Download size={14} className="inline mr-2" /> Download PDF
                </button>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block mt-2 px-4 py-3 text-center text-sm font-medium rounded-lg bg-gradient-primary text-primary-foreground"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
