import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const socials = [
  {
    label: "Email",
    href: "mailto:kvsgpro@outlook.com",
    icon: Mail,
    value: "Email",
  },
  {
    label: "GitHub",
    href: "https://github.com/KaioVinicios",
    icon: Github,
    value: "GitHub",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kaiovinicios",
    icon: Linkedin,
    value: "LinkedIn",
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
            Contato
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Vamos trabalhar juntos
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Estou atualmente aberto a novas oportunidades e colaborações. Se você tem um 
            projeto em mente ou apenas quer dizer olá, sinta-se à vontade para entrar em contato.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" asChild>
                <a href="mailto:kvsgpro@outlook.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Entre em contato
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pl-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 },
              },
            }}
          >
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -2 }}
              >
                <social.icon className="h-4 w-4" />
                <span>{social.value}</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}