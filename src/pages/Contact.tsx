import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        "service_cj9f83t",
        "template_jv4zmhe",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "mS2MELHOcup_6rErf"
      );
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast({ title: "Failed to send", description: "Something went wrong. Please try again or email me directly.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {/* Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="inline-block px-3 py-1 mb-4 text-xs font-mono font-medium rounded-full border border-primary/30 text-primary bg-primary/5">
                  Contact
                </span>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  Let's <span className="text-gradient">Connect</span>
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm currently looking for full-stack developer opportunities. Whether you have a project idea or just want to chat, feel free to reach out!
                </p>

                <div className="space-y-4">
                  <a href="mailto:nishanthwork014@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail size={16} className="text-primary" />
                    </div>
                    nishanthwork014@gmail.com
                  </a>
                  <a href="tel:+919980313776" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone size={16} className="text-primary" />
                    </div>
                    +91 9980313776
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin size={16} className="text-primary" />
                    </div>
                    Bengaluru, India
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <a href="https://github.com/Nishanth-Ai14" target="_blank" rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                  <a href="https://linkedin.com/in/nishanth-p-04398a2a2" target="_blank" rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                </div>
              </motion.div>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onSubmit={handleSubmit}
                className="p-6 md:p-8 rounded-xl border border-border/50 bg-card shadow-card space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {sending ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <>Send Message <Send size={16} /></>}
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
